import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Items from './components/Items';
import UncontrolledExample from './components/Teste'

function App() {

  const [items,setItens] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    const  fetchItems = async ()=>{
        const result = await axios(
          'https://www.breakingbadapi.com/api/characters'
        )
        setItens(result.data)
        setIsLoading(false)
    }

    fetchItems()
  },[])
  return (
       <Items items ={items} isLoading={isLoading}/>
      
  );
}

export default App;
