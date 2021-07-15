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
                    // timeout={1000}
                    timeout={{
                      enter: 1000,
                      exit: 700
                    }}
                    mountOnEnter
                    unmountOnExit>
          {state => <div className={`square blue ${state}`}>{state}</div>}
        </Transition>
      </div>
    </div>
  );
}

export default App;
