import React from 'react'
import useGenres from '../hooks/useGenres'

const GenreList = () => {
  const { genres, error, isLoading } = useGenres()
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {genres &&
        genres.map((genre) => (
          <ul>
            <li key={genre.id}>{genre.name}</li>
          </ul> 
        ))}
    </div>
  )
}

export default GenreList
