let initialState = {
    isLogged: false
}

const testReducer = (state = {}, action) => {
    switch (action.type) {
         case 'TOOGLE_LOGGED':
         return {
             ...state,
             isLogged:true
         }
        default: 
        return state

    }
}

export default testReducer;