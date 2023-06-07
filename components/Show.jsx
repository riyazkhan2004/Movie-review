import { useEffect, useState } from 'react';
import '../styling/show.css';
import { useNavigate } from 'react-router-dom';
import { getStars } from '../utility/util';
function Show() {

    const [shows, setShows] = useState([]);
    const [id, setId] = useState("");
    const navigate = useNavigate();
    localStorage.setItem("movieId", id)

    const navigateToSummary = (id) => {
        navigate('/showsummary');
        setId(id)
    };

    const checknull = (rating) => {
        if (rating == null) {
            return "Not available"
        }
        else {
            return rating
        }
    }
     
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then((res) => res.json())
            .then((json) => { setShows(json); })
            .catch(error => console.error(error))
    }, [])

    useEffect(() => {
        localStorage.setItem("movieId", id)
    }, [id])

    return (
        <>
            <div className="total-wrapbox">
                {shows.length && shows.map((s, index) =>
                    <div>
                        <div><img src={s.show.image.original} className='inside-wrapbox'></img></div>
                        <div key={index} className='title-text-s'>{s.show.name}</div>
                        <div className='rating-text-s'>Rating: {checknull(s.show.rating.average)}
{checknull(s.show.rating.average)>0 ? <span dangerouslySetInnerHTML={{__html: getStars(s.show.rating.average)}}></span>:<></>}</div>
                        <button className='summary-button' onClick={() => { navigateToSummary(s.show.id); }}>View summary</button>
                    </div>

                )}
            </div>

        </>
    );
}

export default Show;