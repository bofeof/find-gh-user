import './App.css';
import Container from 'components/Container/Container';
import Search from 'components/Search/Search';
import TheHeader from 'components/TheHeader/TheHeader';
import UserCard from 'components/UserCard/UserCard';

import {defaultUserMock} from 'mock/index'

function App() {

  return (
    <Container>
      <TheHeader/>
      <Search hasError onSubmit={()=>{}} />

      <UserCard {...defaultUserMock}/>
    </Container>
  );
}

export default App;
