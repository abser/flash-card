import AWS from 'aws-sdk/dist/aws-sdk-react-native';
import { config } from '../../config';
import { AsyncStorage } from 'react-native'

const aws_config = {
    'accessKeyId': config.AWS_ACCESS_KEY,
    'secretAccessKey': config.AWS_SECRET_KEY,
    'region': config.AWS_REGION
}

AWS.config.update(aws_config);
const s3 = new AWS.S3();

async function getBooks(returnData = true) {
    try {
        const key = config.BOOKS_FILE
        let books = null;
        const booksInCache = await getDataFromStorage(key);

        if (!isDataExpired(booksInCache.expiry)) {
            return returnData ? booksInCache : true;
        } else {
            console.info("Data expired! Going to load fresh data!")
        }

        const bucketParams = {
            Bucket: config.AWS_S3_BUCKET,
            Key: key
        }
        const s3Data = await s3.getObject(bucketParams).promise();
        books = s3Data.Body.toString('utf-8');
        books = JSON.parse(books);
        let data = {
            books: books,
            expiry: getExpiry()
        }
        await setDataToStorage(key, JSON.stringify(data));
        return loadDataOnly ? true : data;
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

const getHadithByBookCategory = async (book = 1, category = 1) => {
    try {
        const key = `${book}-${category}.json`;
        let data = null;
        let needToLoadFromS3 = false;
        const cachedData = await getDataFromStorage(key);

        if (cachedData) {                        // Do we have data in storage
            data = cachedData;                  // let load cachedData
            if (isDataExpired(data.expiry)) {           // Data expired ?
                needToLoadFromS3 = true;
            }
        } else { needToLoadFromS3 = true }

        if (needToLoadFromS3) {
            const s3Data = await loadS3Data(key);    // Load data from S3
            data = {
                hadiths: s3Data,
                expiry: getExpiry()
            }
            await setDataToStorage(key, JSON.stringify(data));
        }
        if (!data) {
            throw ('Failed to load data from storage or S3, either!')
        }
        return data;

    } catch (err) {
        console.log(err);
        throw ("Application failed to load data!")
    }
}

const getDataFromStorage = async (key) => {
    try {
        const data = await AsyncStorage.getItem(key);
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
        throw (`There is an error to fetch the key ${key}:  ${err}`);
    }
}

const setDataToStorage = async (key, value) => {
    try {
        const data = await AsyncStorage.setItem(key, value);
    } catch (err) {
        console.log(err);
        throw (`There is an error to set the key ${key}:  ${err}`);
    }
}

const removeDataFromStorage = async (key) => {
    try {
        const data = await AsyncStorage.removeItem(key);
    } catch (err) {
        console.log(err);
        throw (`There is an error to remove the key ${key}:  ${err}`);
    }
}

const getExpiry = (expireInMinutes = config.DATA_EXPIRY_IN_MINUTES) => {
    const now = new Date();
    let expireTime = new Date(now);
    expireTime.setMinutes(now.getMinutes() + expireInMinutes);
    return expireTime;
}

const isDataExpired = (expiryDate) => {
    return new Date(expiryDate) < (new Date())
}

const loadS3Data = async (key) => {
    const bucketParams = {
        Bucket: config.AWS_S3_BUCKET,
        Key: key
    }

    const s3Res = await s3.getObject(bucketParams).promise();
    const s3Data = s3Res.Body.toString('utf-8');    // S3 buffer data to string
    return JSON.parse(s3Data);
}

/**
 * 
 * @param {String} dataType , eg. books, categories, hadiths etc 
 * @param {Strign} key , localstorage key name. 
 */
const loadDataFromS3AndPersist = async (dataType, key) => {
    try {
        const s3Data = await loadS3Data(key);    // Load data from S3
        const data = {};
        data['data'] = s3Data;
        data['expiry'] = getExpiry();
        await setDataToStorage(key, JSON.stringify(data));
        return data;
    } catch(err) {
        throw(err);
    }
    
}
export { getBooks, getCategory, getDataFromStorage, loadDataFromS3AndPersist, removeDataFromStorage }
