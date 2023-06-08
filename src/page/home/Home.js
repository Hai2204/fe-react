import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/homeSlice';

export default function Home() {
  const count = useSelector((state) => state.home.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <a href= "/page.html"><button>GO GOOGLE</button></a>
      </div>
    </div>
  )
  }