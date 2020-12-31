import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Container=styled.header`
display: flex;
flex-direction: row;
position: sticky;
top: 0px;
background-color: white;
box-shadow: 0px 2px 17px -13px black;
padding: 10px 0px;
`;

const Icon=styled.i`
color: #e60023;
padding: 8px;
font-size: 20px;
border-radius: 30px;
`;

const Image=styled.img`
    border-radius: 50%;
    position: relative;
    top: 7px;
    :hover{
        box-shadow: 0px 0px 0px 6px #efefef;
    }
`;

const currentProfile={
    border: '2px solid black'
}

const currentPage={
    color: 'white',
    backgroundColor: 'black' 
};

const HeaderLinks=styled.span`
display:inline-block;
padding: 10px;
border-radius: 30px;
color: black;
text-decoration: none;
font-weight: bold;
font-size: 13px;

:hover{
    background-color: #efefef;
}
`;

const LeftHeader=styled.div`
width: 50%;
text-align: left;
`;

const RightHeader=styled.div`
width: 50%;
text-align:right;
`;

const Header=({user,handleLogout,toggleForm,page,setPage,setShowForm})=>{
    const login=()=>{
        window.open('http://localhost:3001/api/login/getauthcode','_self');
      }

      const linkClick=(page)=>{
          setPage(page);
          setShowForm(false);
      }

    return(
        <Container>
            <LeftHeader>
            <Link to='/' onClick={()=>linkClick('home')}><Icon className="fa fa-pinterest" aria-hidden="true"></Icon></Link>
            <Link to='/' onClick={()=>linkClick('home')}>
                <HeaderLinks style={page==='home'?currentPage:null}>Home</HeaderLinks>
            </Link>
            {user
            ?<>
                <Link to='/mypin' onClick={()=>linkClick('mypin')}>
                    <HeaderLinks style={page==='mypin'?currentPage:null}>My Pins</HeaderLinks>
                </Link>
                <HeaderLinks onClick={toggleForm}>Add a Pin</HeaderLinks>    
            </>
            :null}
            </LeftHeader>
            <RightHeader>
              {user
              ?<>
              <Link to='/profile' onClick={()=>linkClick('profile')}>
                    <Image style={page==='profile'?currentProfile:null} src={user.avatarUrl} width='20' height='20' alt={user.userName}/>                    
                </Link>
                <HeaderLinks onClick={handleLogout}>logout</HeaderLinks>
              </>
              :<HeaderLinks onClick={login}>login</HeaderLinks>
              }
            </RightHeader>
        </Container>
    )
}

export default Header;