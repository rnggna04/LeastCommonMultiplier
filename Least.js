function lcm(...args) {
  if (args.length === 0) {
    return 1;
  }

  const maxNum = Math.max(...args);
  let lcmValue = maxNum;

  while (true) {
    let isLCM = true;

    for (let i = 0; i < args.length; i++) {
      if (lcmValue % args[i] !== 0) {
        isLCM = false;
        break;
      }
    }

    if (isLCM) {
      return lcmValue;
    }

    lcmValue += maxNum;
  }
}

// Example usage:
console.log(lcm(2, 3, 4)); // Output: 12
console.log(lcm(5, 10, 15)); // Output: 30
console.log(lcm(0, 5, 8)); // Output: 0
console.log(lcm()); // Output: 1
