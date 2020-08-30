import {createStore} from 'redux';

    const initialState = {
        loading: false,
        statusbar: true
    }

    const reducer = (state = initialState, action) => {


        if (action.type === "SET_LOADING") {
            return {
                ...state,
                loading: action.value
            }
        }


        if (action.type === "SET_STATUSBAR") {
            return {
                ...state,
                statusbar: action.value
            }
        }

        return state;


    }

    
const store = createStore(reducer);

export default store ;