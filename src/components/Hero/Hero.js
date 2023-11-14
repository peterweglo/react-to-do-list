import styles from './Hero.module.scss';
import PageTitle from '../PageTItle/PageTitle';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <PageTitle>My first React App</PageTitle>
      <p className={styles.subtitle}>
        A simple to-do app, with lists, columns and card
      </p>
    </div>
  );
};

export default Hero;
