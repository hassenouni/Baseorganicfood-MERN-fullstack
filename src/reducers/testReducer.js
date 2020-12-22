let initialState = require('../initialState/initialState');


const testReducer = (state = initialState, action) => {
    switch (action.type) {
         case 'TOOGLE_LOGGED':
         console.log(state);
         return {
             ...state,
             isLogged:true
         }
        default: 
        return state

    }
}

export default testReducer;