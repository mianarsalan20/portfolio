import React, {useState, useEffect} from 'react'
import axios from 'axios';

const EffectOne = () => {
    const [count, setCount] = useState("");
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((response)=>{
        setCount(response.data[0].email);
    })
    }, []);
    

  return (
    <div>EffectOne {count}</div>
  )
}

export default EffectOne