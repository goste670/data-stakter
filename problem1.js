function sumDistinctElements(arr1, arr2) {
  
    const combinedArray = arr1.concat(arr2);
  
    
    const distinctElements = new Set(combinedArray);
  
    
    let sum = 0;
    for (let element of distinctElements) {
      sum += element;
    }
  
    return sum;
  }
  
  
  const serie1 = [3, 1, 7, 9];
  const serie2 = [2, 4, 1, 9, 3];
  const resultat = sumDistinctElements(serie1, serie2);
  console.log("Sortie:", resultat);