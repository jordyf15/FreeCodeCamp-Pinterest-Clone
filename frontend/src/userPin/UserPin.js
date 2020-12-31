import React,{useEffect,useState} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import Pin from '../components/Pin';
import Masonry from 'react-masonry-css';
import {getMyPin} from '../service/pin';
import Loading from '../components/Loading';

const breakpointColumnsObj = {
    default: 5,
    1000: 4,
    900: 3,
    600: 2,
    400: 1
  };

const UserPin=({pins,setPins,user,handleLikePin})=>{
    const {id}=useParams();
    const {push}=useHistory();
    const [hasFetchPins,setHasFetchPins]=useState(false);

    useEffect(()=>{
        getMyPin(id)
        .then((res)=>{
            setPins(res);
            setHasFetchPins(true);
        })
    },[id,setPins,push]);

    if(!pins || !hasFetchPins)return <Loading/>;

    return(
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
        >
          {pins.map(p=><Pin page='userpin' handleLikePin={handleLikePin} key={p._id}
             user={user} pin={p}/>)}
        </Masonry>
    )
}

export default UserPin;