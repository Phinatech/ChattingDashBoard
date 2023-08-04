import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import io from "socket.io-client"

const App = ()=>{
  //paasing the url
  const url = "http://localhost:9999";
  const socket: any = io(url);

  return <div></div>;
}



export default App
