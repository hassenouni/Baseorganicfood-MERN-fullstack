const filterProducts = (catalogArr, filtersObj) => {
    return catalogArr.filter((item) => {
      const prix = filtersObj.prix.length ? filtersObj.prix.includes(item.tags.prix) : item.tags.prix;
      const Nos_Marques = filtersObj.Nos_Marques.length ? filtersObj.Nos_Marques.includes(item.tags.prix) : item.tags.prix;
      const color = filtersObj.color.length ? filtersObj.color.includes(item.tags.color) : item.tags.color;
      const Cosmetique_Bio = filtersObj.Cosmetique_Bio.length ? filtersObj.Cosmetique_Bio.includes(item.tags.Cosmetique_Bio) : item.tags.Cosmetique_Bio;
      const Alimentation_Bio = filtersObj.Alimentation_Bio.length ? filtersObj.Alimentation_Bio.includes(item.tags.Alimentation_Bio) : item.tags.Alimentation_Bio;
      const Bébé_Enfant = filtersObj.Bébé_Enfant.length ? filtersObj.Bébé_Enfant.includes(item.tags.Bébé_Enfant) : item.tags.Bébé_Enfant;
      const Boisson_Bio = filtersObj.Boisson_Bio.length ? filtersObj.Boisson_Bio.includes(item.tags.Boisson_Bio) : item.tags.Boisson_Bio;
      const Huile_essentielle = filtersObj.Huile_essentielle.length ? filtersObj.Huile_essentielle.includes(item.tags.Huile_essentielle) : item.tags.Huile_essentielle;
      const Santé_Vitalité = filtersObj.Santé_Vitalité.length ? filtersObj.Santé_Vitalité.includes(item.tags.Santé_Vitalité) : item.tags.Santé_Vitalité;
      const Maison_Ecologique = filtersObj.Maison_Ecologique.length ? filtersObj.Huile_essentielle.includes(item.tags.Huile_essentielle) : item.tags.Maison_Ecologique;
  
      return prix && Nos_Marques && color && Cosmetique_Bio && Alimentation_Bio && Bébé_Enfant && Boisson_Bio && Huile_essentielle && Santé_Vitalité && Maison_Ecologique;
    });
  };
   
export default filterProducts;