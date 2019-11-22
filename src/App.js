import React, { useState } from 'react';
import { Prev, Next } from './navigation';
import gallery from './pages';

function App() {
  const [index, setIndex] = useState(0);
  const Comp = gallery[index];
  const extra = index === 1 ? { top: '300px' } : {};
  return (
    <div
      className="App"
      style={{
        overflow: 'hidden',
        cursor: 'pointer'
      }}>
      <header className="App-header">
        <Prev
          handler={() => {
            setIndex(prev => {
              return prev === 0 ? gallery.length - 1 : --prev;
            });
          }}
        />
        <Next
          handler={() => {
            setIndex(prev => {
              return prev >= gallery.length - 1 ? 0 : ++prev;
            });
          }}
          extra={extra}
        />
        <Comp />
      </header>
    </div>
  );
}

export default App;
