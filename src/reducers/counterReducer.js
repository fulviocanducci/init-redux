import { COUNTER_ACTION } from '../constants/counterAction';
import { getCounter, setCounter } from '../web/counterLocalStorage';

function counterReducer(state = { value: getCounter() }, { type }) {
  switch (type) {
    case COUNTER_ACTION.ADD: {
      const value = state.value + 1;
      setCounter(value);
      return { value };
    }
    case COUNTER_ACTION.DEC: {
      const value = state.value - 1;
      setCounter(value);
      return { value };
    }
    default: {
      setCounter(state.value);
      console.log(state);
      return state;
    }
  }
}

export default counterReducer;
