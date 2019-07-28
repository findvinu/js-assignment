// 1. Reverse a String

let str = 'hello';

console.log(str.split("").reverse().join('')) // OUTPUT = olleh


// 2. Confirm the Ending
function confirmEnding(strNew, target){
    return strNew.substr(strNew.length - target.length) === target;
}

console.log(confirmEnding("He has to give me a new name", "name")) // OUTPUT = true


// 3. Title Case a Sentence

function titleCase(strTxt){
   let resTxt = strTxt.toLowerCase().split(' ')
   for(let i=0; i<resTxt.length; i++){
    resTxt[i] = resTxt[i].toUpperCase().charAt(0) + resTxt[i].slice(1);   
   }
   resTxt.join(' ')
  console.log(resTxt.join(' '))
}

titleCase("I'm a little tea pot") // OUTPUT = ollehI'm A Little Tea Pot


// 4. Where do I Belong
function getIndexToIns(arrTxt, num){
    arrTxt.sort(function(a,b){return a-b});


for(let i=0; i<arrTxt.length; i++){
    if(num <= arrTxt[i]){
        return i;
    } 
}return arrTxt.length;
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)) // OUTPUT = 2
console.log(getIndexToIns([40, 60], 50)) // OUTPUT = 1


// 5. Mutations
function mutation(arr) {
    var arr1 = arr[0].toLowerCase().split('');
    var arr2 = arr[1].toLowerCase().split('');
    for (var i=0; i < arr2.length; i++) {
      if(arr1.indexOf(arr2[i]) == -1 ) {
        return false;
      }
    }
    return true;
  }
  console.log(mutation(["hello", "hello"])) // OUTPUT = true
  console.log(mutation(["hello", "hey"])) // OUTPUT = false
  console.log(mutation(["Alien", "line"])) // OUTPUT = true