function bigestSumOfTwoElements(array) {

    if (array.length == 0) return false;
    else {
        
        var max1 = Math.max.apply(null, array);
        var max2 = 0;
        
        if (array.length > 1) {
                
                var index = array.indexOf(max1);
                if (index !== -1) array.splice(index, 1);       

                var max2 = Math.max.apply(null, array);            

        }
        
        return max1 + max2
    }
    
    


    

}

bigestSumOfTwoElements([1,2,3,4]) // => 7
bigestSumOfTwoElements([]) // => false
bigestSumOfTwoElements([76]) // => 76
bigestSumOfTwoElements([23,45,17,12]) // => 68