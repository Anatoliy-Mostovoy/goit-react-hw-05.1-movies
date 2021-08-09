import Loader from 'react-loader-spinner';
import s from './customLoader.module.css';

export const CustomLoader = () => {
  return (
    <div className={s.Loader}>
      <Loader
        type="Circles"
        color="tomato"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};
