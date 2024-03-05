import Welcome from './components/Welcome';
import Calender from './components/Calender';
import Todo from './components/Todo';
import Weather from './components/Weather';
import styled from 'styled-components';

const Container = styled.div`
  & > div {
    display: flex;
    flex-direction: row;
  }
`;

function App() {
  return (
    <Container>
      <Welcome />
      <Weather />
      <div>
        <Todo />
        <Calender />
      </div>
    </Container>
  );
}

export default App;
