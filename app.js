//Sorted union
function unite(arr1, arr2, arr3) {
    var placeHolder=arr1;
    for(var i=0;i<arguments.length;i++){
        for(var j=0;j<arguments[i].length;j++){
            if(placeHolder.indexOf(arguments[i][j])===-1){
                placeHolder.push(arguments[i][j]);
                
                
            }
        }
    }
    arr1=placeHolder;
    return arr1;
}  
unite([1, 3, 2,], [5, 2, 1, 4,], [2, 1]);


// Where for arth thou
function whatIsInAName(collection, source) {
    var arr = filter[function(item)] {
    for(var i in source){
        if(source[i]!= item[i]){
            return false;
        }
    }
    return true;
    });
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  

//pig latin
function translatePigLatin(str) {
   var letters = str,split('');
   var vowelRegex= /[aeiou]/;
   if(vowelRegex.test(letters[0])){
       return letters.join('') + "way";
   }
   while(true){
       if(!vowelRegex.text(letters[0])){
           letters.push(letters.splice(0,1)); 
       }
      else {
            break;
       }
   }

str= letters.join('') + "ay";

    return str;
  }
  
  translatePigLatin("eight");
  
