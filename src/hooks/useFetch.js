import { useEffect, useState } from "react"




const useFetch = (url) => {
 const [data, setData] = useState([])

 useEffect(() => {

    const fetchData = async() => {
     const res = await fetch(url)
     const data = await res.json()
     setData(data.results)
    
     
     
    } 
     fetchData()
 },[url])

     return {data} ;

   
}
 
export default useFetch;