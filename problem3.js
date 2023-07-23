function dragonOfLoowater(dragonHead, knightHeight) {
    dragonHead.sort((a, b) => a - b);
    knightHeight.sort((a, b) => a - b);
  
    let totalGoldCoins = 0;
    let dragonIndex = 0;
  
    for (let i = 0; i < knightHeight.length; i++) {
      while (dragonIndex < dragonHead.length && dragonHead[dragonIndex] <= knightHeight[i]) {
        totalGoldCoins += knightHeight[i];
        dragonIndex++;
      }
    }
  
    return dragonIndex === dragonHead.length ? totalGoldCoins : "knight fall";
  }

  console.log(dragonOfLoowater([5, 4], [7, 8, 4]));    // Output: 11
  console.log(dragonOfLoowater([5, 10], [5]));         // Output: "knight fall"
  console.log(dragonOfLoowater([7, 2], [4, 3, 1, 2])); // Output: "knight fall"
  console.log(dragonOfLoowater([7, 2], [2, 1, 8, 5])); // Output: 10