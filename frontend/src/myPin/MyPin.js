import React,{useEffect,useState} from 'react';
import {getMyPin} from '../service/pin';
import Pin from '../components/Pin';
import {useHistory} from 'react-router-dom';
import Masonry from 'react-masonry-css';
import Loading from '../components/Loading';

const breakpointColumnsObj = {
    default: 5,
    1000: 4,
    900: 3,
    600: 2,
    400: 1
  };

const MyPin=({pins,setPins,user,handleLikePin,setUser})=>{
    const {push}=useHistory();
    const [hasFetchPins,setHasFetchPins]=useState(false);

    useEffect(()=>{
       
    if(user){
       getMyPin(user._id)
        .then((res)=>{
            setPins(res);
            setHasFetchPins(true);
        })
    }else{
        push('/')
    }
    },[setPins,user,push])

    if(!pins || !hasFetchPins)return <Loading/>;

    return(
        <Masonry 
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'>
            {pins.map(p=><Pin setUser={setUser} page='mypin' handleLikePin={handleLikePin} 
            key={p._id} pin={p} user={user}/>)}
        </Masonry>
    )
}

export default MyPin;