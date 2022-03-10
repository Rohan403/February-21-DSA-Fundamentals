var intersection = function(nums1, nums2) {
    var value = nums1.filter(x => nums2.includes(x)) // returns intersection of two arrays
    
    var remDuplicate  = [...new Set(value)]; //removes duplicates from array

    return remDuplicate ;
};

let  nums1 = [1,2,2,1];
let  nums2 = [2,2];
console.log(intersection(nums1,nums2));