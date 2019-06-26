import AWS from 'aws-sdk/dist/aws-sdk-react-native';
import {config} from '../../config';

const aws_config = {
    'accessKeyId': config.AWS_ACCESS_KEY, 
    'secretAccessKey': config.AWS_SECRET_KEY, 
    'region': config.AWS_REGION
}

AWS.config.update(aws_config);
const s3 = new AWS.S3();
async function getHadith() {
    try {
        const bucketParams = {
            Bucket: config.AWS_S3_BUCKET,
            Key: config.DATA_FILE
        } 
        const data = await s3.getObject(bucketParams).promise();
        console.log(data.Body.toString())
        return JSON.parse(data.Body.toString('utf-8'));
    } catch (err) {
        console.log(err);
    }
}

async function getHadithByBookCategory(book=1, category=1) {
    try {
        const key =`${book}-${category}`;
        if(data = getDataFromStorage(key)) {
            return data;
        }
        const bucketParams = {
            Bucket: config.AWS_S3_BUCKET,
            Key: key
        } 
        const data = await s3.getObject(bucketParams).promise();
        console.log(data.Body.toString())
        return JSON.parse(data.Body.toString('utf-8'));
    } catch (err) {
        console.log(err);
    }
}

function getDataFromStorage(key) {

}

function setDataToStorage(key, value) {

}

export {getHadith, getHadithByBookCategory}