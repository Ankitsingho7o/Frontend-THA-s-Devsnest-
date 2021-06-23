// to check whether it is an array or not

function  toCheck(array){
    console.log(Array.isArray(array));
}

var test = ["a","b","c"]
var test2 = "hey, I am a string"
toCheck(test2);

// to clone an array 

var array =["a","b","c"];
array.slice(0);

 //to return first n elements of an array   

 function give(array, cut){
   
    var next = array.slice(0,cut);
     console.log(next); 
     }

     give(["a","b","c","d","f"],-3);

// Write a simple JavaScript program to join all elements of the following array into a string.
   myArray = ["Avneet","salena","kylie"]
    console.log( myArray.join("="));
     
// Write a JavaScript program to find the most frequent item of an array

function freq(arr1){
    var mapp = {};
    for(let i=0; i<arr1.length; i++)
    {
        mapp[arr1[i]] =0;
    }
    for(let i=0; i<arr1.length; i++)
    {
        mapp[arr1[i]]++;    
    }
    console.log(mapp);
 
    for (const [key, value] of Object.entries(mapp)){
        
        let x = Object.values(mapp);     
        if(value == Math.max(...x))
        {
            console.log("Element: "+ key, "\nFrequency: "+ value);
        }
    }
}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
freq(arr1);
 