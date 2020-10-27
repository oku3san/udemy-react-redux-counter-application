import React from 'react';

// function App() {
//   return (
//     <>
//       <label htmlFor="bar">
//         bar
//         <input
//           type="text"
//           onChange={() => {
//             console.log('I am clicked');
//           }}
//         />
//       </label>
//     </>
//   );
// }

// const App = () => {
//   return (
//     <div>
//       <Cat />
//       <Cat />
//       <Cat />
//       <Cat />
//     </div>
//   );
// };
//
// const Cat = () => {
//   return <div>Meow!</div>;
// };

function App() {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
}

function Cat() {
  return <div>Meow!</div>;
}

export default App;
