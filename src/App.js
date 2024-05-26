
import './App.css';
import Naav from './component1/Nav'
import Navbar from './component2/Navbar'
import Content from './component3/Content'
import Films from './Films'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About'
import Home from './Home'
import Movie from './Movie';







function App() {
  const [search, setSearch] = useState('');
  console.log(search)
  return (
    <>
      <Naav movies={setSearch} />
      <Routes>
        <Route path='/' element={  <> <Navbar /> <Content /> <Films search={search} /></> } />
        <Route path='/About' element={<About />} />
        <Route path='/movies/:id' element={<Movie />} />

        <Route path='/*' element={<Content />} />

      </Routes>

   
    </>





  );
}

export default App;
