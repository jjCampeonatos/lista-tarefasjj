import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [fone, setFone] = useState();
  const [data_nascimento, setDataNascimento] = useState();

  function handleAddUser(e){
    e.preventDefault();

    axios.post("http://localhost:3333/user",{
      nome,
      email,
      fone,
      data_nascimento
    })
    .then((response)=>{
      console.log("Cadastro realizado")
    })
    .catch((erro)=>{
      console.log("Errooooo")
    })
    
  }

  return (
    <>
      <form onSubmit={handleAddUser}>
        <input type="text" onChange={e=>setNome(e.target.value)}/>
        <input type="text" onChange={e=>setEmail(e.target.value)}/>
        <input type="text" onChange={e=>setFone(e.target.value)}/>
        <input type="text" onChange={e=>setDataNascimento(e.target.value)}/>
        <button type='submit'>Cadastrar</button>
      </form>
    </>
  )
}

export default App
