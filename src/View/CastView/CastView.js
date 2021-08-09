import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

export const CastView = () => {
  const params = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    const fetcher = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.castId}/credits?api_key=f4d5ed62044715aa9c5e4de0663d29b2&language=en-US`,
      );
      setCasts(response.data.cast);
      return response;
    };
    fetcher();
  }, [params.castId]);

  return (
    <div>
      {casts && (
        <ul>
          {casts.map(cast => {
            return (
              <li key={cast.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`}
                  alt={cast.name}
                />
                <p>Character: {cast.character} </p>
                <p>Name: {cast.name}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
