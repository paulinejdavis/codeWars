// import React from 'react';
// import Reminder from './Reminder';

// function App() {
//   return (
//     <div className="App">
//       <Reminder />
//     </div>
//   );
// }

// export default App;

import React from "react";

function App() {
  const items = ["apple", "banana", "orange", "pear"];

  const itemList = [];

  for (let i = 0; i < items.length; i++) {
    itemList.push(<li key={i}>{items[i]}</li>);
  }

  return (
    <div>
      <h1>List of Items</h1>
      <ul>{itemList}</ul>
    </div>
  );
}

export default App;
