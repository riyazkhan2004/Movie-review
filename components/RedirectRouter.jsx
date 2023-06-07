import Show from "./Show";
import ShowSummary from "./ShowSummary";
import {Routes, Route} from 'react-router-dom';

function RedirectRouter(props) {
    return (
      <Routes>
        <Route path="/" element={<Show />} />
        <Route path="showsummary" element={<ShowSummary showId={props.showId}/>} />
      </Routes>
    );
  }

  export default RedirectRouter;