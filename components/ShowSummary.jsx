import '../styling/showsummary.css';


function ShowSummary(props) {
  const checknull = (rat)=>{
    if(rat==null){
        return "Not available"
    }
    else{
        return rat
    }
}
    var showsum= {
        "score": 0.70231444,
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
          "updated": 1684254496,
          "_links": {
            "self": {
              "href": "https://api.tvmaze.com/shows/34653"
            },
            "previousepisode": {
              "href": "https://api.tvmaze.com/episodes/2530954"
            }
          }
        }
      }
    return (<>
    <div className="title-text-ss">{showsum.show.name}</div>
    <hr className='seperator'></hr>
    <img src={showsum.show.image.original} className='image-box'></img>
    <div className='rating-text'>Rating: {checknull(showsum.show.rating.average)}</div>
    <div>
    <hr className='seperator'></hr>
    <div className='titleH'>Summary</div>
    <div className='title1T'>{showsum.show.summary}</div>
    <div className='title1HS'>Genre</div>
    <div className='title1T'>{showsum.show.genres.map((s)=>
     <div>{s}</div>
    )}</div>
    <div className='title1HS'>Type</div>
    <div className='title1T'>{showsum.show.type}</div>
    <div className='title1HS'>Status</div>
    <div className='title1T'>{showsum.show.status}</div>
    <div className='title1HS'>Language</div>
    <div className='title1T'>{showsum.show.language}</div>

    </div>
    
    
    
    </>
    );
  }
  
  export default ShowSummary;