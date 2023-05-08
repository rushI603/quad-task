import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
    const imgSrc="https://static.tvmaze.com/uploads/images/medium_portrait/413/1034988.jpg"
    const [data,setData] = useState([]);
    axios.get("https://api.tvmaze.com/search/shows?q=all")
    .then((res)=>{
        console.log(1)
        setData(res["data"]);
    }
    )
  return (
    <div>
      {
        data.forEach(movie=>{
          <>
            <img src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3ANo_image_available.svg&psig=AOvVaw0gpZzQfootI1upJoC8vteQ&ust=1683632829134000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLCs9ZjT5f4CFQAAAAAdAAAAABAE" } className='image'/>
            <div className='description'>
              The Rise<br/>
              <div className='rating' data-cell={movie["show"]["rating"]["average"]}></div>
            </div>
          </>
        })
      }
      <img src={imgSrc} className='image'/>
      <div className='description'>
        The Rise<br/>
        <div className='rating' data-cell={2}></div>
      </div>
    </div>
  )
}

export default Home
