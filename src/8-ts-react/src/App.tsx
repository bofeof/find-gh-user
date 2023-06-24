import './App.css';
import Container from 'components/Container/Container';
import Search from 'components/Search/Search';
import TheHeader from 'components/TheHeader/TheHeader';
function App() {
  return (
    <Container>
      <TheHeader/>
      <Search hasError onSubmit={()=>{}} />
    </Container>
  );
}

export default App;
