import styles from './ListForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <label className={styles.label}>Title:</label>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <label className={styles.label}>Description:</label>
      <TextInput
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;
