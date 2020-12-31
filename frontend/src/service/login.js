import axios from 'axios';
import baseUrl from '../utils/baseUrl';

export const getUserDetail=async(code)=>{
    const {data}=await axios.post(`${baseUrl}/api/login/getuser`,{code})
    if(data)return data;
    return null;
}