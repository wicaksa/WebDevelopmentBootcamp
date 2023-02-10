/*
You are going to write a function which will select a random name from a list of names. 
The person selected will have to pay for everybody's food bill.

Important: The output should e returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

Example Input

    ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

Example Output

    Michael is going to buy lunch today!


Hint

1. You might need to think about Array.length.

2. Remember that Arrays start at position 0!
*/

function whosPaying(names) {
        
        var l = names.length;
        
        var index = Math.floor(Math.random() * l);
        
        return names[index] + " is going to buy lunch today!";
    
    }
    