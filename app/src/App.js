import React, {useState, useEffect} from 'react';
import GlossaryList from './components/GlossarryList'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import GlossaryTabs from './components/GlossaryTabs'
import GlossarySearch from './components/GlossarySearch';

function App() {
  const [source, setSource] = useState([])
  const [list, setList] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    fetch("http://localhost:3004/links")
    .then(response => response.json())
    .then(data => {
      setSource(data)
      setList(data)
    })
  },[])

  const updateList = ({ type, value }) => {

    if (type === "search") {
      setSearch(value)
      if (value === "") {
        setList(source)
        return
      }
    } else if (type === "filter") {
      if (value === "" || value === "all") {
        setList(source)
        return
      }
      setCategory(value)
    }
  
    let result = source;
      if (type === "search") {
        result = result.filter(item => !!search && item.label.toLowerCase().includes(search) && item) 
      }
      if (type === "filter") {
        result = result.filter(item => item.category.toLowerCase() === category.toLocaleLowerCase() && item)
      }
    
    setList(result)
  }

  return (
    <div className="container mt-5">
      <div className='header my-5 text-center'>
        <img src='/images/logo.svg' alt='ag logo'/>
      </div>
      <GlossarySearch value={search} setSearch={updateList} />
      <GlossaryTabs list={source} setCategory={updateList} />
      <GlossaryList list={list} />
    </div>
  );
}

export default App;
