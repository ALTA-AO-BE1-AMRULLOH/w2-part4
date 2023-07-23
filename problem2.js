function simpleEquations(a, b, c) {
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (a * y + b * x === c) {
          return [x, y];         }
      }
    }
  
    return "no solution";
  }

  console.log(simpleEquations(1, 2, 3));  // Output: "no solution"
  console.log(simpleEquations(6, 6, 14)); // Output: [1, 2]