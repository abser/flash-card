import axios from 'axios';
import {config} from '../../config';


async function getHadith() {
    try {
        const res = await axios.get(config.API_BASE + '/hadiths');
        if(res.data != undefined || res.data != null) {
            return res.data
        }
    } catch(error){
        return error.message;
        console.log(error)
    }
}

export {getHadith}
