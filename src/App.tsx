import React from 'react';

function App() {
  return (
    <>
      <label htmlFor="bar">
        bar
        <input
          type="text"
          onChange={() => {
            console.log('I am clicked');
          }}
        />
      </label>
    </>
  );
}

export default App;
