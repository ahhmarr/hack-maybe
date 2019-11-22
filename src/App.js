import React, { useState } from 'react';
import { Prev, Next } from './navigation';
import gallery from './pages';

function getIndex(index) {
  const flow = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 1
  };
  return flow[index];
}
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
              prev++;
              if (prev > 4) {
                prev = 0;
              }
              return getIndex(prev);
            });
          }}
        />
        <Next
          handler={() => {
            setIndex(prev => {
              prev++;
              if (prev > 4) {
                prev = 0;
              }
              return getIndex(prev);
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
