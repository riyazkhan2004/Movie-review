import '../styling/showsummary.css';
import { useState, useEffect } from 'react';
import { getStars } from '../utility/util';

function ShowSummary() {

  const [shows, setShows] = useState([]);

  const checknull = (rat) => {
    if (rat == null) {
      return "Not available"
    }
    else {
      return rat
    }
  }

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((res) => res.json())
      .then((json) => { setShows(json); })
      .catch(error => console.error(error))
  }, [])

  var id = localStorage.getItem("movieId");
  var showsum = shows.filter((show) => show.show.id.toString() === id)[0]

  return (
    showsum ? <>

      <div className="title-text-ss">{showsum.show.name}</div>
      <hr className='seperator'></hr>
      <img src={showsum.show.image.original} className='image-box'></img>
        <div className='rating-text'>Rating: {checknull(showsum.show.rating.average)}
{checknull(showsum.show.rating.average)>0 ? <span dangerouslySetInnerHTML={{__html: getStars(showsum.show.rating.average)}}></span>:<></>}</div>
      <div>
        <hr className='seperator'></hr>
        <div className='titleH'>Summary</div>
        <div className='title1T' dangerouslySetInnerHTML={{ __html: showsum.show.summary }}></div>
        <div className='title1HS'>Genre</div>
        <div className='title1T'>{showsum.show.genres.map((s) =>
          <div>{s}</div>
        )}</div>
        <div className='title1HS'>Type</div>
        <div className='title1T'>{showsum.show.type}</div>
        <div className='title1HS'>Status</div>
        <div className='title1T'>{showsum.show.status}</div>
        <div className='title1HS'>Language</div>
        <div className='title1T'>{showsum.show.language}</div>

      </div>



    </> : <></>
  );
}

export default ShowSummary;