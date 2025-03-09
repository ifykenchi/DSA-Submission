const solution = (arr = [], x, y) => {
	let prefix_sum = 0;
	let end = 0;
	let start = -1;
	let max_length = 0;

	for (let i = 0; i < arr.length; i++) {
		const num = arr[i];

		if ((num === x || num === y) && start === -1) {
			start = i;
		}

		if (num === x) {
			prefix_sum += 1;
			if (prefix_sum === 0) {
				end = i;
			}
		} else if (num === y) {
			prefix_sum -= 1;
			if (prefix_sum === 0) {
				end = i;
			}
		}
	}
	max_length = end - start + 1;

	return max_length;
};

const arr = [1, 2, 3, 2, 3, 1, 3, 2, 1];
const arr2 = [
	4, 5, 4, 6, 4, 5, 5, 4, 5, 6, 5, 4, 6, 1, 2, 7, 5, 4, 5, 4, 6, 4, 5, 4, 5, 5,
	6, 5, 7, 8, 9, 5,
];
console.log(solution(arr, 2, 3));
console.log(solution(arr2, 4, 5));
