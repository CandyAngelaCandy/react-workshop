import React from 'react';
import './App.css';
import Form from './container/Form';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">黄燕燕 react workshop demo</header>
      <main>
        <Form />
      </main>
    </div>
  );
};

export default App;
