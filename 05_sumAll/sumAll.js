const sumAll = function(numStart, numEnd) {
    
    let start;
    let end;    
    
    if(numStart < numEnd){

        start = numStart;
        end = numEnd;
        
    }else{

        start = numEnd;
        end = numStart;

    }
    let sum = 0;

    while(start <= end){
        sum = sum + start;
        start = start + 1;
    }

    if(numStart < 0 || numEnd < 0 || typeof(numStart) != "number" || typeof(numEnd) != "number"){
        return "ERROR";
    }else{
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
