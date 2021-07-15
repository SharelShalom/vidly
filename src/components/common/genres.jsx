import React from 'react';

const Genres = ({genres, currentGenre, onGenreChange}) => {
    const allGenres=[...genres];

    return (
    <ul className="list-group">
        {allGenres.map( genre => (
        <li 
            key = {genre._id}
            className={ genre===currentGenre ? 'list-group-item active' : 'list-group-item'}
            aria-current={genre===currentGenre ? "true" : ''}>
            <a className="page-link" onClick={() => onGenreChange(genre)} >
            {genre.name}
            </a>
        </li>
        ))}
    </ul>
  );
}
 
export default Genres;