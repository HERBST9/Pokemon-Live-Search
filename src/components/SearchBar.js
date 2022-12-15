import {  useState } from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import './SearchBar.css'

//make url a state and change it with e target value????
 const SearchBar = () => {
   
   const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
   const [inputValue, setInputValue] = useState('')
   const {data} = useFetch(url)
   
 
   const arr=[]
  

     data.map((val) => { 
      arr.push(val['name'])
    })
   
       const filtered =  arr.filter(n => n.includes(inputValue)) 
       
      //  console.log(filtered)
      
 
   
 
  

    
  console.log(url)


 function handleSubmit(e) {
  e.preventDefault()
  setInputValue('')
 }
 
   


  
    return ( 
        <div>
            <span> Catch'Em ALL ! </span>

            <form className="form-input" onSubmit={() => handleSubmit}>
              <div>
                  <label>
                   <input type="text"
                   onChange={(e) => setInputValue(e.target.value)}
                   value={inputValue}
                
                 /> 
            </label>
               <button>Search</button>

              </div>
          
           
            
          </form> 
          {filtered && filtered.map((f) =>  (
          
            <button className="names">{f}</button>
            
          
          )
            
          )}
           

        </div>
       
     );
}


 



 
export default SearchBar;