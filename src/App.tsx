import { useState } from 'react';

import './App.css';
import Container from 'components/Container/Container';
import Search from 'components/Search/Search';
import TheHeader from 'components/TheHeader/TheHeader';
import UserCard from 'components/UserCard/UserCard';

import { GithubUser, GithubUserError, LocalGithubUser } from 'types';

import { extractLocalUser } from 'utils/extractLocalUser';
import { isGithubUser } from 'utils/typeguards';

import { defaultUserMock } from 'mock/index';
const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUserMock);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;

    try {
      const res = await fetch(url);
      const user = (await res.json()) as GithubUser | GithubUserError;
      if (isGithubUser(user)) {
        setUser(extractLocalUser(user));
      } else {
        setUser(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <TheHeader />
      <main>
        <Search hasError={!user} onSubmit={fetchUser} />
        {user && <UserCard {...user} />}
      </main>
    </Container>
  );
}

export default App;
