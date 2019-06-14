import axios from 'axios';
import {config} from '../../config';
import Amplify from 'aws-amplify';
import Storage from '@aws-amplify/storage';
import aws_exports from '../../aws-exports';

Amplify.configure(aws_exports);

async function getHadith() {
    try {
        const s3SignedURL = await Storage.get("hadith.json",{expires: 300})
        const res = await axios.get(s3SignedURL);
        if(res.data != undefined || res.data != null) {
            return res.data
        }
    } catch(error){
        return error.message;
        console.log(error)
    }
}

export {getHadith}
