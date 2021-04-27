// O(nlogn) | O(1)

function nonConstructibleChange(coins) {
  // Write your code here.
	coins.sort((a, b) => a - b);
	let currentChangeCreated = 0;
	for (const value of coins) {
		if (value > currentChangeCreated + 1) {
			return currentChangeCreated + 1;
		} else {
			currentChangeCreated += value;
		}
	}
  return currentChangeCreated + 1;
}
