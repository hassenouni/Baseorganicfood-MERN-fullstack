import catalog from '../testData' ;
const defaultCatalogState = catalog;


const catalogReducer = (state = defaultCatalogState, action) => {
    switch (action.type) {
        case 'INITIAL_CATALOG' :
        return {
            ...state
        }
        default : 
        return state
    }
}

export default catalogReducer;