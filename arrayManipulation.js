function processArray(arr){
    const processedNumbers = arr.map((number) =>{
        if(number % 2 ===0){
            return number**2;
        }
        else{
            return number *3;
        }
        

    })
    return processedNumbers;
    
}

function formatArrayString(stringArray, processedNumbers){
    const formattedString = stringArray.map((str, index)=>{
        const num = processedNumbers[index];

        if (num % 2 ===0){
            return str.toUpperCase();
        }
        else {
            return str.toLowerCase();

        }
        
    } )
    return formattedString;
}

