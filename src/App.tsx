
import React from 'react';
import { ReactDOM } from 'react';
import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const inputRef2 = useRef<HTMLInputElement | null>(null);
  const inputRef1 = useRef<HTMLInputElement | null>(null);
  const inputRef3 = useRef<HTMLInputElement | null>(null);

 return (
  <div className='div'>
      <input ref={inputRef1} placeholder='E-mail'onKeyUp={(ev) =>{
        if (ev.key === ''){
          inputRef2.current?.focus();
        }
      }}/>
      <input ref={inputRef2} placeholder='Telefone'onKeyUp={(ev) =>{
          inputRef3.current?.focus();
      }}/>
      <input ref={inputRef3} placeholder='Senha'/>
      <button onClick={() => {inputRef2.current?.focus()}}>Cadastrar</button>
  </div>
 )
  
}
export default App;

