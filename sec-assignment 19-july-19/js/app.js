
// 1. Convert Celsius to Fahrenheit
function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = (celsius * 9) / 5 + 32

    return fahrenheit;
   }   
console.log('fahrenheit ' + convertToF(20)) // OUTPUT = fahrenheit 68



// 2. Factorialize a Number
//var factor = prompt('Please enter factorials value', 'Enter value here');
function facNum(num){     
    var str=num;
for(var i=num-1; i >= 1; i--){
    var num = num * i;
    str =str + 'x' + i ;
}
var arr = [num, str];
return arr;
}
var res = facNum(5)
var str = 'n! ='+ res[1] + '=' + res[0];
//alert(str); // OUTPUT = n! =6x5x4x3x2x1=720
console.log(str); // OUTPUT = n! =6x5x4x3x2x1=720*/



// 3. Return Largest Numbers in Arrays
var arr1 = [ [5,3,4,9],  [5,6,7], [4,5,6], [65,45,78] ]
var maxArr = [];
var sortValue = [];
for(var i =0; i<arr1.length; i++){  
    var sortValue = arr1[i].sort(function(a, b){return b-a})
    //console.log(sortValue);
    maxArr.push(sortValue[0]);
}
console.log(maxArr);  // OUTPUT = maxArr[9, 7, 6, 78];



// 4. Repeat a String Repeat a String
function repeatString(txtStr,numCount){
    
    var newString = "";
    if(numCount < 0){
        return "";
    }else{
   for(i=1; i<=numCount; i++){
       
    newString = txtStr + newString;
   }
}
   return newString;
 }

console.log(repeatString('abc', -3))  // OUTPUT = Empty String



// 5. Boo who
function booWho(boolValue){
    if(typeof boolValue ==  'boolean'){
    return true;
    }
    else{
        return false;
    }   
}

console.log(booWho(1));  // OUTPUT = false



// 6. Title Case a Sentence

function titleCase(txt) {

    var arrTxt = txt.split(' ');
  
    var newStr = '';
  
    for (var i = 0; i < arrTxt.length; i++) {
      var lower = arrTxt[i].toLowerCase();
      newStr += lower.charAt(0).toUpperCase() + lower.slice(1) + ' ';
    }
  
    return newStr.trim();
  }
  
  console.log(titleCase("THIS IS STRING TO CHANGE FIRST LETTER CAPITAL")) 
  // OUTPUT = This Is String To Change First Letter Capital



// 7. Falsy Bouncer
var bounceArr = [7, "ate", "", false, 9];

function bouncer(){
    var  truthyArr = [];
    for (i=0; i<=bounceArr.length-1; i++){
        //console.log(bounceArr[i]);
        switch(true){
            case bounceArr[i] === "" :
            break;
            case bounceArr[i] === false :           
            break;
            case bounceArr[i] === 0 : 
            break;
            case bounceArr[i] === NaN : 
            break;
            case bounceArr[i] === null : 
            break;
            case bounceArr[i] === undefined : 
            default:
            truthyArr.push(bounceArr[i]);
        }
    }
   
return truthyArr;
} 
console.log(bouncer())   // OUTPUT = truthyArr[7, "ate",9];
