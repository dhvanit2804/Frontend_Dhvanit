import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../store/counterSlice';

function CounterApp() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center space-y-4">
      <h1 className="text-xl font-bold">Redux Counter</h1>
      <p className="text-3xl">{count}</p>
      <div className="space-x-4">
        <button onClick={() => dispatch(increment())} className="bg-blue-500 px-4 py-2 text-white rounded">+</button>
        <button onClick={() => dispatch(decrement())} className="bg-red-500 px-4 py-2 text-white rounded">-</button>
      </div>
    </div>
  );
}

export default CounterApp;
