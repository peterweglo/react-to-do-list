import Container from './components/Container/Container.js';
import Navbar from './components/Navbar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Favorite from './components/Favorite/Favorite.js';
import { Routes, Route } from 'react-router-dom';
import NoMatch from './components/NoMatch/NoMatch.js';
import List from './components/List/List.js';

const App = () => {
  return (
    <main>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='*' element={<NoMatch />} />
          <Route path='/list/:listId' element={<List />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
