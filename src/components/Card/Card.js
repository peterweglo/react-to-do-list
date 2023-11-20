import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleFavorite } from '../../redux/cardsRedux';
import { removeCard } from '../../redux/cardsRedux';

const Card = (props) => {
  const dispatch = useDispatch();
  const cardId = props.id;
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(toggleFavorite(cardId));
  };

  const removehandler = (e) => {
    e.preventDefault();
    dispatch(removeCard(cardId));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button onClick={handleClick} className={styles.favoriteButton}>
        <span
          className={clsx('fa fa-star-o', props.isFavorite && styles.active)}
        />
      </button>
      <button onClick={removehandler} className={styles.removeButton}>
        <span className={clsx('fa fa-trash')} />
      </button>
    </li>
  );
};

export default Card;
