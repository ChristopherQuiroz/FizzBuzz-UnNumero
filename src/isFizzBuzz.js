function isFizzBuzz(num) {
    let result = "";

    if(num == 3){
        result = "Fizz";
    } else {
        result = num + "";
    }
    
    return result;
}

export default isFizzBuzz;