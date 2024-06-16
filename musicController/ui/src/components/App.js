import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />);