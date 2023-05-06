import React from 'react'
// https://api.tvmaze.com/search/shows?q=all
const Feed = () => {
  const [movies,setMovies] = useState([

    {
      "score": 0.7021574,
      "show": {
      "id": 34653,
      "url": "https://www.tvmaze.com/shows/34653/all-american",
      "name": "All American",
      "type": "Scripted",
      "language": "English",
      "genres": [
      "Drama",
      "Sports"
      ],
      "status": "Running",
      "runtime": 60,
      "averageRuntime": 60,
      "premiered": "2018-10-10",
      "ended": null,
      "officialSite": "http://www.cwtv.com/shows/all-american/",
      "schedule": {
      "time": "20:00",
      "days": [
      "Monday"
      ]
      },
      "rating": {
      "average": 6.2
      },
      "weight": 99,
      "network": {
      "id": 5,
      "name": "The CW",
      "country": {
      "name": "United States",
      "code": "US",
      "timezone": "America/New_York"
      },
      "officialSite": "https://www.cwtv.com/"
      },
      "webChannel": null,
      "dvdCountry": null,
      "externals": {
      "tvrage": null,
      "thetvdb": 348200,
      "imdb": "tt7414406"
      },
      "image": {
      "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg",
      "original": "https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg"
      },
      "summary": "<p>When a rising high school football player from South Central L.A. is recruited to play for Beverly Hills High, the wins, losses and struggles of two families from vastly different worlds — Compton and Beverly Hills — begin to collide. Inspired by the life of pro football player Spencer Paysinger.</p>",
      "updated": 1683032460,
      "_links": {
      "self": {
      "href": "https://api.tvmaze.com/shows/34653"
      },
      "previousepisode": {
      "href": "https://api.tvmaze.com/episodes/2511902"
      },
      "nextepisode": {
      "href": "https://api.tvmaze.com/episodes/2511904"
      }
      }
      }
      },
  ]);
  return (
    <div className='container'>
      {movies.map((element=>{
        <div className='movie'>
          <img src={element["iamge"]["original"]} alt="Movie Poster" />
          <div className='name'>{element["show"]["name"]}</div>
          <div className='rating'>
            <i data-star={element["show"]["rating"]["average"]}></i>
          </div>
        </div>
      }))}
    </div>
  )
}

export default Feed
