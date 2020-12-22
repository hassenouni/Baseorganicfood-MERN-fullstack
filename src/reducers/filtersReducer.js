let initialFiltersState = {

    prix: [],
    Nos_Marques: [],
    color: [],
    Cosmetique_Bio: [],
    Alimentation_Bio:[],
    Bébé_Enfant: [],
    Boisson_io: [],
    Huile_essentielle: [],
    Santé_Vitalité: [],
    Maison_Ecologique: []

}

const filtersReducer = (state = initialFiltersState, action) => {
  switch (action.type) {
      case 'SET_FILTER':
      state[action.filterType].push(action.filter);
      return {
          ...state
      }
      default:
      return state
  }


}

export default filtersReducer;