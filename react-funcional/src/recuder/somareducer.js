import { useReducer } from 'react';

const initialState = {
    resultado: '',
}

const somaReducer = ( state = initialState , action) => {
    switch(action.type) {
        case 'SUBTRACAO':
        case 'SOMA':
            return { ...state, resultado: action.payload}
        default:
            return state;
    }
}

const useStore = () => useReducer(somaReducer, initialState);
export default useStore;