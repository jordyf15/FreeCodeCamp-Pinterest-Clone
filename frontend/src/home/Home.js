import React,{useEffect,useState} from 'react';
import {getAllPin} from '../service/pin';
import Pin from '../components/Pin';
import Masonry from 'react-masonry-css';
import Loading from '../components/Loading';

const breakpointColumnsObj = {
    default: 5,
    1000: 4,
    900: 3,
    600: 2,
    400: 1
  };

const Home=({pins,setPins,user,handleLikePin})=>{
    const [hasFetchPins,setHasFetchPins]=useState(false);

    useEffect(()=>{
      getAllPin()
      .then((res)=>{
          setPins(res);
          setHasFetchPins(true);
      })
    },[setPins])
    if(!pins || !hasFetchPins)return <Loading/>;
    return(
        <Masonry 
            breakpointCols={breakpointColumnsObj}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
        >
            {pins.map(p=><Pin page='home' handleLikePin={handleLikePin} key={p._id}
             user={user} pin={p}/>)}
        </Masonry>
    )
}

export default Home;