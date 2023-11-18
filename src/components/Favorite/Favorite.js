import styles from './Favorite.module.scss';
import PageTitle from '../PageTItle/PageTitle';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Card from '../Card/Card';
import { getFavoriteCards } from '../../redux/store';

const Favorite = () => {
  const cards = useSelector((state) => getFavoriteCards(state));
  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              isFavorite={card.isFavorite}
              id={card.id}
            />
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Favorite;
