import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = () => {

  const [movieDetails, setMovieDetails] = useState({})
  
  const { id } = useParams()

  const {title, poster_path, overview, vote_average, vote_count, release_date} = movieDetails

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  // const API_KEY = "d6278b3dc3e6f8f8376a89851c3f8c8f";
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  // const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const baseImageUrl = 'https://image.tmdb.org/t/p/w1280';
  const defaultImage = 'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';

  useEffect(() => {
    axios.get(movieDetailBaseUrl).then(res => setMovieDetails(res.data)).catch(err => console.log(err))
  }, [])
  



  return (
    <div className="container py-5">
      <h1 className="text-center">{title}</h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={poster_path ? baseImageUrl + poster_path : defaultImage}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8 d-flex flex-column ">
            <div className="card-body">
              <h5 className="card-title">Overview</h5>
              <p className="card-text">{overview}</p>
            </div>
            <ul className="list-group ">
              <li className="list-group-item">
                {'Release Date : ' + release_date}
              </li>
              <li className="list-group-item">{'Rate : ' + vote_average}</li>
              <li className="list-group-item">
                {'Total Vote : ' + vote_count}
              </li>
              <li className="list-group-item">
                <Link to={-1}>Go Back</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail