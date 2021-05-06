import baseUrl from './url';
import axios from 'axios';
import { PanResponder } from 'react-native';

export const Post = (item, endpoint) => {
    try {
       axios.post(`${baseUrl}/${endpoint}`, item).then((res) => {
         return res;
       })
    } catch (error) {
        return error.response 
    }
}
