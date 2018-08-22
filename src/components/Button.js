import React from "react";
import { withStateHandlers } from "recompose";

const Button = ({ count, onIncrementClick, onDecrementClick }) => (
  <div>
    <div>{count}</div>
    <button onClick={onIncrementClick}>increment</button>
    <button onClick={onDecrementClick}>decrement</button>
  </div>
);

const enhancers = withStateHandlers(
  { count: 0 },
  {
    onIncrementClick: ({ count }) => () => ({ count: count + 1 }),
    onDecrementClick: ({ count }) => () => ({ count: count - 1 })
  }
);

const EnhancedButton = enhancers(Button);

export default EnhancedButton;
