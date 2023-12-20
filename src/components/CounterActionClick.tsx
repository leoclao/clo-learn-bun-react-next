'use client';

import { useReducer } from 'react';
import Button from './Button';
import Grid from './Grid';

interface State {
  count: number;
}

type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] }

const initialState: State = { count: 0 }

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action type");
  }
}

export default function CounterActionClick() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });

  return (
    <>
      <p>Count click: {state.count}</p>
      <Grid cols='2' gap='2'>
        <Button onClick={addFive} label="Add 5" desc="Click add five" />
        <Button onClick={reset} label="Reset" desc="Click to reset" />
      </Grid>
    </>
  );
}