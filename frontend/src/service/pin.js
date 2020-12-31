import axios from 'axios';
import baseUrl from '../utils/baseUrl';

export const postPin=async(pinUrl,pinDesc,date,posterId)=>{
   const {data}=await axios.post(`${baseUrl}/api/pin`,{pinUrl,pinDesc,date,posterId});
   return data;
}

export const getAllPin=async()=>{
   const{data}=await axios.get(`${baseUrl}/api/pin`);
   return data;
}

export const getMyPin=async(id)=>{
   const {data}=await axios.get(`${baseUrl}/api/pin/${id}`);
   return data.pins;
}

export const likePin=async(likerId,pinId)=>{
   const {data}=await axios.post(`${baseUrl}/api/pin/likepin/${pinId}`,{likerId});
   return data;
}

export const deletePin=async(ownerId,pinId)=>{
   const {data}=await axios.delete(`${baseUrl}/api/pin`,{data:{ownerId,pinId}});
   return data;
}