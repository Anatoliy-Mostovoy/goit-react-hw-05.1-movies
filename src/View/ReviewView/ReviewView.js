import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import s from './ReviewView.module.css';
import { CustomLoader } from '../../helpers/customLoader/customLoader';
import { reviewView } from '../../api/api';

const ReviewView = () => {
  const [reviews, setReviews] = useState(null);
  const params = useParams();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetcher = async () => {
      setLoader(true);
      try {
        const response = await reviewView(params.filmId);
        setReviews(response.data.results);
        setLoader(false);
      } catch (error) {
        console.log(error.response);
        setLoader(false);
      }
    };
    fetcher();
  }, [params.filmId]);

  return (
    <div>
      <hr />
      {loader && <CustomLoader />}
      {reviews && (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h3 className={s.ReviewTitle}>
                  <span className={s.ReviewTitleText}>Author:</span>{' '}
                  {review.author}
                </h3>
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

export default ReviewView;
