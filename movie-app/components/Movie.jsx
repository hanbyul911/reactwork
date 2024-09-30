import PropTypes from 'prop-types';

function Movie({ coverImage, summary, genres = [], title }) {
  return (
    <div className="movie">
      <img src={coverImage} alt="cover_image" />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => <li key={index}>{genre}</li>)}
      </ul>
    </div>
  );
}

Movie.proptype = {
  coverImage : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;
