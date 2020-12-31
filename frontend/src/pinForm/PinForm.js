import React,{useState} from 'react';
import {postPin} from '../service/pin';
import styled from 'styled-components';

const FormContainer = styled.div`
    background-color: #efefef;
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

const Form=styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: white;
    margin-top: 0px;
    align-items: center;
    width: 25%;
    height: 40%;
    border-radius: 20px;
    @media (max-width: 768px) {
        width: 90%;
      }
`;
const Input=styled.input`
    width: 80%;
    border:none;
    border-bottom: 2px solid #c6c6c6;
`;
const Button=styled.button`
    width: 80%;
    background-color: #e60023;
    border:none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    font-family: Helvetica;
    padding: 10px 0px;
`;

const PinForm=({user,handlePostPin,setShowForm})=>{
    const [pinUrl,setPinUrl]=useState('');
    const [pinDesc,setPinDesc]=useState('');

    const submitPin=async(e)=>{
        e.preventDefault();
        setPinUrl('');
        setPinDesc('');
        setShowForm(false);
        const newPin=await postPin(pinUrl,pinDesc,new Date(),user._id);
        handlePostPin(newPin)
    }

    return(
        <FormContainer>
            <Form onSubmit={submitPin}>
                <Button type='submit'>Save</Button>
                <Input placeholder='Pin Url...' value={pinUrl} onChange={({target})=>setPinUrl(target.value)} />
                <Input placeholder='Pin Description' value={pinDesc} onChange={({target})=>setPinDesc(target.value)}/>
            </Form> 
        </FormContainer>
    )
};

export default PinForm