import React, { useState } from 'react'
import { Transition } from 'react-transition-group'

function App() {
  const [toggle, setToggle] = useState(true)

  return (
    <div className="container">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <hr/>
      <div className={'blocks'}>
        <Transition in={toggle}
                    timeout={1000}
                    mountOnEnter
                    unmountOnExit
                    onEnter={() => console.log('onEnter')}                    
                    onEntering={() => console.log('onEntering')}
                    onEntered={() => console.log('onEntered')}
                    onExit={() => console.log('onExit')}
                    onExiting={() => console.log('onExiting')}
                    onExited={() => console.log('onExited')}>
          {state => <div className={`square blue ${state}`}>{state}</div>}
        </Transition>
      </div>
    </div>
  );
}

export default App;
