import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
// import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/about" element={<About />} />
         {/* <Route path="" element={<Search />} />  */}
      </Routes>
    </Router>
  );
}

export default App;





















// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from 'react-router-dom';
// import Home from './pages/Home';
// import Gallery from './pages/Gallery';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Search from './pages/Search';


// function App() {
//   return (
//     <Router>
//       <Routes>
//       <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/search" element={<Search />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



