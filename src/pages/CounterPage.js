import { produce } from 'immer';
import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change-value-to-add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

const reducer = (state, action) => {

    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1;
            return;

        case DECREMENT_COUNT:
            state.count = state.count - 1;
            return;

        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload;
            return;

        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueToAdd,
                state.valueToAdd = 0;
            return;

        default:
            return;
    }
};

function CounterPage({ initialCount }) {
    // const [count, setCount] = useState(initialCount)
    // const [valueToAdd, setValueToAdd] = useState(0)
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        });
    };

    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        });
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;

        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        });


    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: ADD_VALUE_TO_COUNT
        });
    };

    return <Panel className="mt-20 ml-10">
        <h1 className="text-lg">Count is {state.count}</h1>
        <div className="flex justify-start space-x-2 inline-block">
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>decrement</Button>
        </div>

        <form onSubmit={handleSubmit}>
            <label>Add a lot!</label>
            <input value={state.valueToAdd || ''} onChange={handleChange} type="number" className="p-1 m-3 bg-gray-50 border border-gray-300"></input>
            <Button>Add it!</Button>
        </form>
    </Panel>;
}

export default CounterPage;