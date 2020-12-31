import React from 'react';
import styled from 'styled-components';

const OuterLoading=styled.div`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: #767676;
    position: relative;
    margin: 40px auto;
    animation: rotate 1s linear infinite;
    -webkit-animation: rotate 1s linear infinite;
    -moz-animation: rotate 1s linear infinite;
    @keyframes rotate {100% {transform: rotate(360deg)}}
    @-webkit-keyframes rotate {100% {-webkit-transform: rotate(360deg)}}
    @-moz-keyframes rotate {100% {-moz-transform: rotate(360deg)}}
`;
const InnerLoading1 = styled.div`
    display: inline-block;
    background-color: #ffffff;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    top: 7px;
    left: 12.5px;
    right: 12.5px;
`;
const InnerLoading2 = styled.div`
    display: inline-block;
    background-color: #ffffff;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    top: 18px;
    left: 12.5px;
    right: 12.5px;
`;
const InnerLoading3 = styled.div`
    display: inline-block;
    background-color: #ffffff;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    top: 12.5px;
    bottom: 12.5px;
    left: 7px;
`;

const InnerLoading4 = styled.div`
    display: inline-block;
    background-color: #ffffff;
    width: 5px;
    border-radius: 50%;
    position: absolute;
    top: 12.5px;
    bottom: 12.5px;
    left: 18px;
    height: 5px;
`;
const H2=styled.h2`
    text-align: center;
`;

const Loading=()=>{
    return(
        <>
        <OuterLoading>
            <InnerLoading1/>
            <InnerLoading2/>
            <InnerLoading3/>
            <InnerLoading4/>
        </OuterLoading>
        <H2>Fetching the data please wait</H2>
        </>
    )
};

export default Loading;