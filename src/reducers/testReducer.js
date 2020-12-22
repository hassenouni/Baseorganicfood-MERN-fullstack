let defaultState = {
   isLogged: false
};

const testReducer = (state = defaultState, action) => {
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