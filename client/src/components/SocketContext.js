import React, {createContext, useState, useRef, useEffect} from 'react';

import {io}  from 'socket.io-client';
import Peer from 'simple-peer';
import { setMaxListeners } from 'process';
import { SelectAllTwoTone } from '@material-ui/icons';

const socketContext = createContext();

const socket= io('http://localhost:5000');

const ContextProvider = ({children}) => {
  const [stream, setStrem] = useState(null);
  const [me, setMe] = useState("");
  const [call, setCall] = useState({});

  const myVideo = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({video: true, audio: true})
      .then((currentStream) => {
        setStream(currentStream);
        console.log(myVideo, 'This is myVideo')
        console.log(myVideo.current, 'This is myVideo.current')
        console.log(myVideo.srcObject, 'This is srcObject')
        myVideo.current.srcObject = currenStream;
      });

      socket.on('me', (id) => setMaxListeners(id));

      socket.on('calluser', ({ from, name: callerName, signal}) => {
        setCall({ isRecieved: true, from, name: callerName, signal})
      });
  },[]);
  
  const answerCall = () => {

  };

  const callUser = () => {

  };

  const leaveCall = () => {

  };

};