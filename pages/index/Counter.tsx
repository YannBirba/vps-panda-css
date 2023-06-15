import { useState } from 'react';
import { panda } from '../../styled-system/jsx';

export { Counter }

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <panda.button
      cursor={ "pointer" }
      paddingBlock={ 5 }
      paddingInline={ 10 }
      background={ "bg.accent" }
      fontWeight={ 700 }
      boxShadow="0 0 10px rgba(0, 0, 0, 0.4)"
      transition={ "0.3s ease" }
      _hover={ {
      boxShadow:"0 0 15px rgba(0, 0, 0, 0.5)",
      } }
      _dark={
        {
          color: "bg.surface"
        }
      }
      type="button"
      onClick={ () => setCount((count) => count + 1) }>
      Counter {count}
    </panda.button>
  )
}
