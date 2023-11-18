import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleFavorite } from '../../redux/store';

const Card = (props) => {
  const dispatch = useDispatch();
  const cardId = props.id;
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(toggleFavorite(cardId));
  };
  return (
    <li className={styles.card}>
      {props.title}
      <button onClick={handleClick}>
        <span
          className={clsx('fa fa-star-o', props.isFavorite && styles.active)}
        />
      </button>
    </li>
  );
};

export default Card;
