import React from 'react';
import {likePin,deletePin} from '../service/pin';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const PinContainer=styled.div`
    border-radius: 20px;
    background-color: #efefef;
    width: 187px;
    margin-top: 20px;
    text-align: center;
    padding-bottom: 1px;
    box-shadow: 0px 2px 17px -13px black;
    -webkit-animation: fadein 1s; 
    -moz-animation: fadein 1s; 
     -ms-animation: fadein 1s; 
      -o-animation: fadein 1s; 
         animation: fadein 1s;
         @keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
        @-moz-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
        @-webkit-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
        @-ms-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
        @-o-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
`;

const Icon=styled.i`
    font-size: 10px;
`;

const PinDescContainer=styled.p`
    background-color: white;
    text-align: center;
    font-size: 13px;
    margin: 0px 3px;
`;

const PinImage=styled.img`
    margin-top: 3px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const PinButtonContainer=styled.div`
    background-color: white;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin: 3px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 4px 0px;
`;

const Pin=({user,page,handleLikePin,setUser,pin})=>{
    const pinId=pin._id;
    const {likers,pinUrl,pinDesc,owner}=pin;
    const handleLike=async()=>{
        const likedPin=await likePin(user._id,pinId);
        handleLikePin(likedPin);
    }

    const handleDelete=async()=>{
        const deleteRes=await deletePin(user._id,pinId);
        setUser(deleteRes);
    }
    
    return(
        <PinContainer>
            <PinImage onError={({target})=>{target.onerror=null;target.src='https://cdn.freecodecamp.org/demo-projects/images/placeholder.png'}} src={pinUrl} width='180' alt={pinDesc} />
            <PinDescContainer>{pinDesc}</PinDescContainer>

            <PinButtonContainer>
               <Link to={`/pin/${owner._id}`}><img src={owner.avatarUrl} width='25' height='25' alt={owner.userName}/></Link>
                
                {page==='mypin'?<button onClick={handleDelete}><Icon className="fas fa-times"></Icon></button>:null}
                <button onClick={handleLike} disabled={user?false:true}><Icon className="fas fa-star"></Icon> {likers.length}</button>
            </PinButtonContainer>
        </PinContainer>
    )
};

export default Pin;