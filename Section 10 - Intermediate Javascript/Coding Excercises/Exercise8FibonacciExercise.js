function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        
        //Write your code here:
        var result = [];
        
        
        for (let i = 0; i < n; i++) {
            
            if (i == 0) {
                result.push(0);
            }
            else if (i == 1) {
                result.push(1);
            }
            
            else {
                result.push(result[i-1] + result[i-2]);
            }
        }
        
        return result;
        
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    