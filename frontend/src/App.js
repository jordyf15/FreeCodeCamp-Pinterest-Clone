import React, { useEffect, useState } from 'react';
import useQuery from './hooks/useQuery';
import {useHistory,Route,Switch} from 'react-router-dom';
import Header from './header/Header';
import PinForm from './pinForm/PinForm';
import Home from './home/Home';
import MyPin from './myPin/MyPin';
import Profile from './profile/Profile';
import {getUserDetail} from './service/login';
import UserPin from './userPin/UserPin';

const App=()=>{
  const [user,setUser]=useState(null);
  const [pins,setPins]=useState(null);
  const [page,setPage]=useState('home');
  const [showForm,setShowForm]=useState(false);
  const query=useQuery();
  const history=useHistory();

  const toggleForm=()=>{
    setShowForm(!showForm);
  }

  useEffect(()=>{
    getUserDetail(query.get('code'))
    .then((res)=>{
      setUser(res);
      setShowForm(false);
    })
    history.push('/');
    // eslint-disable-next-line 
  },[]);

  const handleLogout=()=>{
    history.push('/');
    setUser(null);
    setPage('home')
    if(showForm) toggleForm();
  }

  const handlePostPin=(newPin)=>{
    setPins(pins.concat(newPin));
  }

  const handleLikePin=(likedPin)=>{
    setPins(pins.map(p=>{
      if(p._id===likedPin._id){
        return likedPin;
      }else{
        return p;
      }
    }))
  }

  return(  
      <>
        <Header setShowForm={setShowForm} page={page} setPage={setPage} toggleForm={toggleForm} handleLogout={handleLogout} user={user}/>
        {showForm?<PinForm setShowForm={setShowForm} handlePostPin={handlePostPin} user={user} setPins={setPins} pins={pins}/>:null}
        <Switch>
          <Route path='/profile'>
            <Profile user={user} setPins={setPins} pins={pins}/>
          </Route>
          <Route path='/pin/:id'>
            <UserPin pins={pins} setPins={setPins} user={user} handleLikePin={handleLikePin} />
          </Route>
          <Route path='/mypin'>
            <MyPin setUser={setUser} pins={pins} setPins={setPins} user={user} handleLikePin={handleLikePin}/>
          </Route>
          <Route path='/'>
            <Home pins={pins} setPins={setPins} user={user} handleLikePin={handleLikePin}/>
          </Route>
        </Switch>
      </>
  )
}

export default App;