import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export const List = ({ items, removeItem }) => (
    <TransitionGroup component={'ul'}>
        {
            items.map(item => (
                <CSSTransition key={item.id}
                               timeout={1000}
                               classNames={'so'} >
                <li onClick={() => removeItem(item.id)}>{item.title}</li>
                </CSSTransition>
            ))
        }
    </TransitionGroup>
)