import React from 'react';

import Form from './Form';

const App = () => {
    return (
        <div>
            {/* Copy form HTML from first demo */}
        </div>
    )
};

// Helper function for constructing URL for NASA API
function constructUrl(values) {
  let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=vzcn9FMzIO3g3H9eiJU2Xr4XL6CChsySjgrndUeK';
  values.forEach((value) => {
    if (value[1]) {
      const param = `&${value[0]}=${value[1]}`;
      url += param; 
    }
  });
  return url;
}

export default App;
