import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './HomePage';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';

// const App = (props) => {
//   return (
//     <div>
//       <h1>{props.test}</h1>
//     </div>
//   )
// }

// export default App

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App test='test'/>);