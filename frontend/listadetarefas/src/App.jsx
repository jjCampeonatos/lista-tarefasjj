import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"



function App() {
  const [users, setUsers] = useState([])

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
  async function getUsers (){
    const usersfrom = await axios.get('http://localhost:3333/lista')

    setUsers( usersfrom.data )
  }

  useEffect(() => {
    getUsers()
  })
  

  return (
    <>
    <div id='borda'>
    <div>
      <h1 id='texth1'>Lista de Tarefas</h1>
    </div>
      <form onSubmit={handleAddUser}>
        <input className='input' type="text" onChange={e=>setNome(e.target.value)}
        placeholder='NOME'/>
        <input className='input' type="text" onChange={e=>setEmail(e.target.value)}
        placeholder='E-MAIL'/>
        <input className='input' type="text" onChange={e=>setFone(e.target.value)}
        placeholder='FONE'/>
        <input className='input' type="text" onChange={e=>setDataNascimento(e.target.value)}
        placeholder='DATA DE NASCIMENTO'/>
        <div id='div-btn1'>
          <button id='btn1' type='submit'>Cadastrar</button>
        </div>
      </form>
      <div className='div-get'>
        <h1 className='text-get'>NOME</h1>
        <h1 className='text-get2'>E-MAIL</h1>
        <h1 className='text-get3'>FONE</h1>
        <h1 className='text-get4'>DATA DE NASCIMENTO</h1>   
      </div>
      </div>
      {users.map((user) => (
        <div>
          <div>
            <p>Nome: <span>{user.nome}</span></p>
            <p>Nome: <span>{user.email}</span></p>
            <p>Nome: <span>{user.fone}</span></p>
            <p>Nome: <span>{user.data_nascimento}</span></p>
          </div>
        </div>

      ))}
      
      
    </>
  )
}

export default App
