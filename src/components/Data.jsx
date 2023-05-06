import React, { useState } from 'react'
import axios from 'axios'

function Data(){
    const [data,setData] = useState([]);
    axios.get("https://api.tvmaze.com/search/shows?q=all")
    .then((res)=>{
        setData(res);
    })
}

export default {Data,data}
