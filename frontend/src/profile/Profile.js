import React,{useEffect,useState} from 'react';
import {getMyPin} from '../service/pin';
import{useHistory} from 'react-router-dom';
import styled from 'styled-components';
import Loading from '../components/Loading';

const Container=styled.div`
    text-align: center;
    margin-top: 20px;
`;

const AvatarImg=styled.img`
    border-radius: 50%;
`;

const H1=styled.h1`
    margin: 10px 0px;
`;

const UserDetail=styled.p`
    width: 50vw;
    margin: 10px auto;
    font-size: 14px;
    color: #535353;
`;

const PinsDetail=styled.span`
    font-weight: bold;
`;

const Profile=({user,setPins,pins})=>{
    const {push}=useHistory();
    const [fetchUserPin,setFetchUserPin]=useState(false);

    useEffect(()=>{
        if(user)
        {getMyPin(user._id)
        .then((res)=>{
            setPins(res);
            setFetchUserPin(true);
        })}
        else{
            push('/')
        }
    },[setPins,user,push])
    if(!user)return null;

    const{avatarUrl,userName,bio}=user;

    if(!fetchUserPin) return <Loading/>;
    const likes=pins.reduce((total,pin)=>total+pin.likers.length,0);
    return(
        <Container>
            <AvatarImg src={avatarUrl} width='150' height='150' alt={`${userName}'s avatar`}/>
            <H1>{userName}</H1>
            <UserDetail>@{userName} - {bio}</UserDetail>
         
            <PinsDetail>{pins.length} pins - {likes} likes</PinsDetail>


        </Container>
    )
};

export default Profile;