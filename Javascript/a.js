const getTea = (typeOfTea, numberOfCups) => {

    const tea_cups = [];
  
    for (let cups = 1; cups <= numberOfCups; cups += 1) {
      const tea_cup = prepareTea(typeOfTea);
      tea_cups.push(tea_cup);
    }
    return tea_cups;
  };
  
  const prepareTea = (typeOfTea) => {
    return typeOfTea;
  }
  
  const tea = (typeOfTea, numberOfCups) => {
    // You need to implement this function.
    return getTea(typeOfTea,numberOfCups)//.toString();
  }
  
  console.log(tea('greenTea',3));