let initialFiltersState = {

    prix: [],
    Nos_Marques: [],
    color: [],
    Cosmetique_Bio: [],
    Alimentation_Bio:[],
    Bébé_Enfant: [],
    Boisson_Bio: [],
    Huile_essentielle: [],
    Santé_Vitalité: [],
    Maison_Ecologique: []

};

const filtersReducer = (state = initialFiltersState, action) => {
  switch (action.type) {
      case 'SET_FILTER':
      if (state[action.filterType].includes(action.filter)) {
          state[action.filterType] = state[action.filterType].filter((item)  => item !== action.filter);    
      } else {
          state [action.filterType].push(action.filter);
      }
      return {
          ...state
      }
      default:
      return state
  }


}

export default filtersReducer;