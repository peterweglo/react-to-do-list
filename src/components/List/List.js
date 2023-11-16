import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
  getAllColumns,
  getListById,
  getColumnsByList,
} from '../../redux/store';

const List = () => {
  // const columns = useSelector((state) => state.columns);
  // const columns = useSelector(getAllColumns);
  const columns = useSelector((state) => getColumnsByList(state, 1));
  const ListData = useSelector((state) => getListById(state, 1));

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{ListData.title}</h2>
      </header>
      <p className={styles.description}>{ListData.description}</p>
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm />
    </div>
  );
};

export default List;
