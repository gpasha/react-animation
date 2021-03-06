import React, { useState } from 'react'
import { Transition, CSSTransition } from 'react-transition-group'
import { List } from './List'

function App() {
  const [toggle, setToggle] = useState(true)
  const [toggle2, setToggle2] = useState(true)

  const [items, setItems] = useState([
    {id: 1, title: 'title 1'},
    {id: 2, title: 'title 2'},
    {id: 3, title: 'title 3'}
  ]) 

  const removeItem = id => {
    setItems(items.filter(item => item.id !== id))
  }

  const addItem = () => {
    const title = prompt('Please enter a item title')
    const id = Date.now()
    setItems([...items, {id, title}])
  }

  return (
    <div className="container">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <button onClick={() => setToggle2(!toggle2)}>Toggle 2</button>
      <button onClick={addItem}>Add item</button>
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
        <CSSTransition in={toggle2}
                       timeout={1000}
                       classNames="so"
                       mountOnEnter
                       unmountOnExit>
          <div className="square orange">{toggle2.toString()}</div>
        </CSSTransition>
      </div>
      <hr/>
      <List items={items} removeItem={removeItem}/>
    </div>
  );
}

export default App;
