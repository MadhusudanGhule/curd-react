import { useState } from 'react';
import './App.css';
import GetApi from './components/GetApi';
import PostApi from './components/PostApi';
import Update from './components/Update';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import ContextAPI from './Component2/ContextAPI';

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false)

  return (
    < >
      <div className="App">
        <button onClick={() => { setShow(!show) }}>toggel</button>
        {show && <h1> show and hide</h1>}
        {/* <GetApi/> */}

        {/* <Update count={count} />
        <button onClick={() => setCount(Math.floor(Math.random() * 100))}>count</button> */}

        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path='/update/:id' element={<Update/>}/>
            </Routes>
          </BrowserRouter>
          <ContextAPI/>
        </div>
      </div>
    </>
  );
}

export default App;

// video no 54 delete https://www.youtube.com/watch?v=2i4HqvyTEag&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=66
