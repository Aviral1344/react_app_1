import React from "react";
import{useEffect} from "react"
//77904b13
const API_URL = "http://www.omdbapi.com?apikey=77904b13"

const App= ()=>{

    const searchMovies= async(title)=>{
        const response= await fetch(`${API_URL}&s=${title}`);
        const data= await response.json();
        console.log(data.Search);
    }

    useEffect(()=>{
        searchMovies("Spiderman")
    })




    return(
        <h1>App</h1>
    );
}

export default App;