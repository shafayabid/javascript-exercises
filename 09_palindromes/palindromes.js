const palindromes = function (str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Reverse the cleaned string
    const reverseStr = cleanStr.split('').reverse().join('');

    // Compare the original and reversed strings
    return cleanStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
