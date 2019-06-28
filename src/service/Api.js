import AWS from 'aws-sdk/dist/aws-sdk-react-native';
import {config} from '../../config';
import {AsyncStorage} from 'react-native'

const aws_config = {
    'accessKeyId': config.AWS_ACCESS_KEY, 
    'secretAccessKey': config.AWS_SECRET_KEY, 
    'region': config.AWS_REGION
}

AWS.config.update(aws_config);
const s3 = new AWS.S3();

async function getBooks() {
    try {
        const bucketParams = {
            Bucket: config.AWS_S3_BUCKET,
            Key: config.BOOKS_FILE
        } 
        const data = await s3.getObject(bucketParams).promise();
        console.log(data.Body.toString())
        return JSON.parse(data.Body.toString('utf-8'));
    } catch (err) {
        console.log(err);
    }
}

async function getCategory() {
    try {
        const bucketParams = {
            Bucket: config.AWS_S3_BUCKET,
            Key: config.CATEGORY_FILE
        } 
        console.log(bucketParams)
        const data = await s3.getObject(bucketParams).promise();
        console.log(data.Body.toString())
        return JSON.parse(data.Body.toString('utf-8'));
    } catch (err) {
        console.log(err);
    }
}

const getHadithByBookCategory = async (book=1, category=1) => {
    try {
        const key =`${book}-${category}.json`;
        let hadiths = null;
        const hadithsInCache = await getDataFromStorage(key);
        if(hadithsInCache) {
            if(hadithsInCache.expiry > new Date()) {
                return hadithsInCache.data
            }
            else {
                // clear the storage
            }
        }
        
        const bucketParams = {
            Bucket: config.AWS_S3_BUCKET,
            Key: key
        } 
        data = await s3.getObject(bucketParams).promise();
        // console.log(data.Body.toString())
        return JSON.parse(data.Body.toString('utf-8'));
    } catch (err) {
        console.log(err);
    }
}

const getDataFromStorage = async (key) => {
    try {
        const data = await AsyncStorage.getItem(key);
        if(data !== null) {
            return JSON.parse(data);
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
        throw(`There is an error to fetch the key ${key}:  ${err}`);
    }
}

const setDataToStorage = async (key, value) => {
    try {
        const data = await AsyncStorage.setItem(key, value);
    } catch (err) {
        console.log(err);
        throw(`There is an error to set the key ${key}:  ${err}`);
    }
}

const getExpireDate = (expireInMinutes = config.DATA_EXPIRY_IN_MINUTES) =>{
    const now = new Date();
    let expireTime = new Date(now);
    expireTime.setMinutes(now.getMinutes() + expireInMinutes);
    return expireTime;
}

export {getBooks,getCategory, getHadithByBookCategory}
