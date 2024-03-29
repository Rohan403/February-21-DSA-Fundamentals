let binarySearch = function (arr, x) {

	let start = 0, end = arr.length - 1;

	// Iterate while start not meets end
	while (start <= end) {

		// Find the mid index
		// let mid = Math.floor((start + end) / 2);
		let mid = Math.floor(start + (end - start) / 2);
		// If element is present at mid, return True
		if (arr[mid] === x)
			return mid;
		// Else look in left or right half accordingly
		else if (arr[mid] < x)
			start = mid + 1;
		else
			end = mid - 1;
	}
	// if we reach here, then element was
	// not present
	return -1; // any INVALID value is correct.
}

// Driver code
let arr =  ['a','b','d','e','f','g','h','i','x','z'];
let x = 'z';
let result = binarySearch(arr, x);
console.log(result) 