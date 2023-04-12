import './App.scss';
import { Routes, Route } from 'react-router-dom'
import HomePage from './views/HomePage/homePage'
import TeamsPage from './views/TeamPage/teamsPage';
import Layout from './components/layout';
import NoMatch from './components/noMatch';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Layout title='' logo='./img/binhoL1.png'/> }>
          <Route index element={<HomePage/>} />
          <Route path='teams' element={ <TeamsPage/> } />
          <Route path='*' element={ <NoMatch/> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
