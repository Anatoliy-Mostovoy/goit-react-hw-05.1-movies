import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import s from './ReviewView.module.css';
import axios from 'axios';

export const ReviewView = () => {
  const [reviews, setReviews] = useState(null);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const fetcher = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.filmId}/reviews?api_key=f4d5ed62044715aa9c5e4de0663d29b2&language=en-US&page=1`,
      );

      setReviews(response.data.results);
      return response;
    };
    fetcher();
  }, [params.filmId]);
  console.log(reviews);
  return (
    <div>
      <hr />
      {reviews && (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h3 className={s.ReviewTitle}>Author: {review.author}</h3>
                <p className={s.ReviewText}>{review.content}</p>
                <hr />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
