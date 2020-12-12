import baseUrl from './url';
import axios from 'axios';
import { PanResponder } from 'react-native';

export const Post = async (item, endpoint) => {
    try {
       return await axios.post(`${baseUrl}/${endpoint}`, item)
       // console.log(response)
    } catch (error) {
        return error.response 
    }
}
