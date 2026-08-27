function isFizzBuzz(num) {
    let result = "";

    if(num == 15){
        result = "FizzBuzz";
    }else if(num%3 == 0){
        result = "Fizz";
    } 
    else if(num%5 == 0){
        result = "Buzz";
    }
    else {
        result = num + "";
    }
    
    return result;
}

export default isFizzBuzz;