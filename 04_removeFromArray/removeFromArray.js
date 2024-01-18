const removeFromArray = function(arr, ...nums) {

    var tempArr = arr;

    
    for(let i = 0; i < nums.length; i++){
        while(tempArr.includes(nums[i])){
            let index = tempArr.indexOf(nums[i])
            tempArr.splice(index, 1);
        }
    }

    return tempArr;

};

// Do not edit below this line
module.exports = removeFromArray;
