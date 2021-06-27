import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalstyles';
import Javascript from './pages/Javascript';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Javascript} />
      </Switch>
    </>
  );
}

export default App;
