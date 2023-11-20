import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const listId = props.listId;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId }));
    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label className={styles.label}>Title:</label>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <label className={styles.label}>Icon:</label>
      <TextInput
        type='text'
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
