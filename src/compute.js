export const makeYourChoices = (displays, choices = {}) => {
    let results = displays;
  
    if (choices.releaseYear) {
      results = displays.filter(display => display.releaseYear >= choices.releaseYear);
    }
  
    if (choices.programType) {
      results = displays.filter(display => display.programType === choices.programType);
    }
  
    return (
      results
        .slice(0, choices.limit || 21)
        // sort title alphabetically
        .sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        })
    );
  };
  