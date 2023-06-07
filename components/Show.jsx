import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styling/show.css';

function Show() {
    const [shows, setShows] = useState([]);
    const [selectedShow, selectShow] = useState(null);
    const navigate = useNavigate();
    const navigateToSummary = () => {
        navigate('/showsummary');
    };
    const checknull = (rat)=>{
        if(rat==null){
            return "Not available"
        }
        else{
            return rat
        }
    }

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then((res) => res.json())
            .then((json) => { setShows(json); })
            .catch(error => console.error(error))
    }, [])


    return (
        <>
        <div className="total-wrapbox">
            {shows.length && shows.map((s, index) =>
                <div>
                    <div onClick={()=>navigateToSummary()}><img src={s.show.image.original} className='inside-wrapbox'></img></div>
                    <div key={index} className='title-text-s'>{s.show.name}</div>
                    <div className='rating-text-s'>Rating: {checknull(s.show.rating.average)}</div>
                    <button className='summary-button' onClick={()=>{navigateToSummary(); selectShow(s.show.id)}}>View summary</button>
                </div>
                
            )}
        </div>
        {/* <RedirectRouter showId={selectedShow}/> */}

</>
    );
}

export default Show;