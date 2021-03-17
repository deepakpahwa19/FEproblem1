import axios from 'axios';
import { Urls } from '../../../../config/envConfig';
import { getEnvironmentName } from '../../../../util/commonUtil';

const getBaseUrl = () => {
    const envName = getEnvironmentName();
    console.log('envName =>', envName, Urls[envName].baseUrl);
    return Urls[envName].baseUrl;
};

const axiosFalcone = axios.create({
    baseURL: getBaseUrl(),
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
    // withCredentials: true
});

export default axiosFalcone;
