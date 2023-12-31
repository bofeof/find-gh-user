import styles from './Search.module.scss';

import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import Button from 'components/Button/Button';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

// можно описать явно инпут-поля формы с типом
type FormFields = {
  username: HTMLInputElement;
};

const Search = ({ hasError, onSubmit }: SearchProps) => {
  // React.FormEvent<HTMLFormElement & FormFields> - форма HTMLFormElement помимо всего
  // будет содержать поля из FormFields, можно обращаться к полю через точку и получать данные
  // это все попадет в currentTarget.Key.value

  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;
    if (text.trim()) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          id="searh"
          name="username"
          placeholder="Search Github username..."
          className={styles.textField}
        />
        <Button>Search</Button>
      </div>
      {hasError && <span className={styles.error}>No result</span>}
    </form>
  );
};

export default Search;
