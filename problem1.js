function frog(jumps) {
    const n = jumps.length;
    const dp = new Array(n).fill(0);
  
    dp[0] = 0; // Biaya untuk mencapai batu pertama adalah 0.
    dp[1] = Math.abs(jumps[1] - jumps[0]); // Biaya untuk mencapai batu kedua.
  
    for (let i = 2; i < n; i++) {
      // Biaya untuk mencapai batu saat ini minimal dari dua pilihan:
      // 1. Lompat dari batu sebelumnya (dp[i-1]) ke batu saat ini.
      // 2. Lompat dari dua batu kembali (dp[i-2]) ke batu saat ini.
      dp[i] = Math.min(dp[i - 1] + Math.abs(jumps[i] - jumps[i - 1]), dp[i - 2] + Math.abs(jumps[i] - jumps[i - 2]));
    }
  
    return dp[n - 1]; //Biaya minimum untuk mencapai batu terakhir (Batu N).
  }

  console.log(frog([10, 30, 40, 20])); // Output: 30
  console.log(frog([30, 10, 60, 10, 60, 50])); // Output: 40
//   console.log(frog([30, 10, 30, 20, 60, 100])); // Output: 70