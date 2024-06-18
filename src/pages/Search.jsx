import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import Button from '@material-ui/core/Button';
import { Search as CiSearch } from 'react-icons/ci';

const SearchPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Search Page</h1>
        <form style={{ display: 'flex', alignItems: 'center' }}>
          <CiSearch style={{ color: 'blue', fontSize: '24px' }} />
          <input
            type="text"
            placeholder="Search..."
            style={{
              marginLeft: '10px',
              padding: '5px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
          {/* Add your search results or functionality here */}
        </form>
      </div>
    </>
  );
};

export default SearchPage;







// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// // import { CiSearch } from 'react-icons/ci';
// import Button from '@material-ui/core/Button';
// import { Search as CiSearch } from 'react-icons/ci';


// const SearchPage = () => {
//   return (
//     <>
//     <Navbar />
//     <div>
//       <h1>Search Page</h1>
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <CiSearch style={{ color: 'blue', fontSize: '24px' }} />
//         <input
//           type="text"
//           placeholder="Search..."
//           style={{
//             marginLeft: '10px',
//             padding: '5px',
//             fontSize: '16px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//           }}
//         />
//       </div>
//       {/* Add your search results or functionality here */}
//     </div>
//     </>
//   );
// };

// export default SearchPage;

