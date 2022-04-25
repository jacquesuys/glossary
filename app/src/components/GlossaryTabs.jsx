import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { uniq } from 'lodash'

export default function GlossaryTabs({ list, setCategory }) {
  const categories = uniq(list.map(({ category }) => category));

  return (
    <div className='my-5 text-center'>
      <ButtonGroup aria-label="Basic example">
        <Button 
            key={'all'} 
            variant="secondary" 
            value={'all'} 
            onClick={event => {
            setCategory({ type: "filter", value: 'all' });
          }}>All</Button>
        {categories.map(category => 
          <Button 
            key={category} 
            variant="secondary" 
            value={category} 
            onClick={event => {
            setCategory({ type: "filter", value: event.target.value });
          }}>{category}</Button>
        )}
      </ButtonGroup>
    </div>
    
  )
}
