/* const register = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("user register");
           resolve('sucess')
          }, 3000);
    })
};

const sendEmail = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {        
          //  return  reject('error while sending email');
            console.log("email send");
            resolve()
          }, 2000);
    })
};

const login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login successfully");
            resolve();
          }, 6000);
    })
};

const getUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("get user data");
            resolve();
          }, 3000);
    })
};

const displayUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("display user data");
            resolve();
          }, 3000);
    })
}; */

// callback hell
/* register(() => {
  sendEmail(() => {
    login(() => {
      getUserData(() => {
        displayUserData();
      });
    });
  });
}); */

// promiss
/* register()
.then(sendEmail)
.then(login)
.then(getUserData)
.then(displayUserData)
.catch((err) => {
    console.log('Error', err)
})
 */

// async awais

/* async function asynFunc() {
   try {
    const message = await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();
    console.log(message)
   } catch(err){
    console.log(err)
    throw new Error();
   }
}

asynFunc()
.then(() => {
    console.log('all done')
}).catch((err) =>{
    console.log(err)
})

console.log("other application works");


// call back 
function handleCallback(successCallback, errorCallback){

  // const success = doWork()
  
  if('success'){
    successCallback()
  } else {
    errorCallback()
  }
}

handleCallback(() => {
  console.log('success')
}, () => {
  console.error('error')
}
)

// promiss 
const dosomething = () => {
const callback = () =>{

}
}
function handlePromise(){
  return new Promise((resolve, reject) => {
  const success = doWork()
  if(success){
    resolve()
  } else {
    reject()
  }
  })
}

const promis = handlePromise()
promis.then(() =>{
  console.log('success')
}).catch(()=>{
  console.log('error')
}) */

// promiss chaining
/* 
function one(callback){
  dosomething()
  callback()
}

function two(callback){
  dosomething()
  callback()
}

function three(callback){
  dosomething()
  callback()
}

one(()=> {
  two(() => {
    three(()=>{
      console.log('we did them all')
    })
  })
}) */

/* function one(){
  return new Promise(resolve => {
    dosomething()
    resolve()
  })
}

function two(){
  return new Promise(resolve =>{
    dosomething()
    resolve()
  })
}

function three(){
  return new Promise(resolve => {
    dosomething()
    resolve()
  })
}

one().then(()=>{
  return two()
}).then(()=>{
  return three()
}).then(()=>{
  console.log('we did them all')
})

one()
.then(two)
.then(three)
.then(()=>{
  console.log('we did them all')
})

// Advance promiss feature
handlePromise()
.then(amount => {
  console.log('test')
}).catch(reason => {
  console.log('Error')
}).finally(()=>{
  console.log('this always run')
})

// promis all

function one(){
  return new Promise(resolve => {
    dosomething()
    resolve('From one')
  })
}

function two(){
  return new Promise(resolve => {
    dosomething()
    resolve('From two')
  })
}

Promise.all([
  one(),
  two()
]).then(message => {
  // ['From one', 'From two']
}).catch(error => {
  // First error if any error
})

Promise.allSettled([
  one(),
  two(),
]).then(message => {
  console.log(message)
  //  [
  //   { status : "fulfilled", value: "From one"},
  //   { status : "fulfilled", value: "From two"}
  // ] 
})

Promise.any([
  one(),
  two(),
]).then(firstMessage => {
  // Message from whichever resolve first
}).catch(error => {
  // Generic error saying all promiss failed
})

Promise.race([
  one(),
  two(),
]).then(firstMessage =>{
   // Message from first promise to finish if it was a success
}).catch(firstError => {
   // Message from first promise to finish if it was an error
})

Promise.resolve(200).then(amount => {
  console.log(amount)
  // 200
})

Promise.reject("Error").catch(message => {
  console.log("Error", message)
  // Error
})

// ------ Promiss practice ------
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;

  if(a == 2){
    resolve('success')
  } else {
    reject('failed')
  }
})

p.then(message => {
  console.log(`this is ${message}`)
}).catch(error => {
  console.log(`this is ${error}`)
}) 

// call back example

const userLeft = false;
const userWatching = false; */

/* function userWatchingVideo(callBack, errorCallback){
  if(userLeft){
    errorCallback({
      name: 'userLeft',
      message: ':('
    })
  } else if(userWatchingVideo){
    errorCallback({
      name: 'User watch',
      message: 'web d simplyfy'
    })
  }else {
    callBack('thumb and subcribe')
  }
}

userWatchingVideo(message =>{
  console.log('Success ----' + message)
},error => {
  console.log(error.name + ' ' + error.message)
}) */

// convert above in Promiss

/* function userWatchingVideoPromise(){
  return new Promise((resolve, reject) => {
    if(userLeft){
      reject({
        name: 'userLeft',
        message: ':('
      })
    } else if(userWatching){
      reject({
        name: 'User watch',
        message: 'web d simplyfy'
      })
    } else {
      resolve('thumb and subcribe')
    }
  })
}

userWatchingVideoPromise().then((message) => {
  console.log('this is promiss success ' + message)
}).catch((error) => {
  console.log('this is reject promiss' + error.name + ' ' + error.message)
})

// -----------------------------------
const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 recorded')  
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 recorded')
})

Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((message) => {
  console.log( message )
}).catch(error => {
  console.log('error show in last promiss' + error )
})


// ---------------------------------
function makeRequest(location){
  return new Promise((resolve, reject)=>{
    console.log(`Making request to ${location}`)
    if(location === 'Google'){
      resolve('Google say hi')
    } else {
      reject('We can only talk to google')
    }
  })
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
     console.log('Processing response')
     resolve(`Extra Information ${response}`)
  })
}

makeRequest('Facebook')
.then(response => {
  console.log('Response Received')
  return processRequest(response)
}).then(ProcessedResponse =>{
  console.log(ProcessedResponse)
}).catch(err => {
  console.log(err)
})

// --------- Async/Await ------------
async function doWork(){
  const response = await makeRequest('Google')
  console.log('Response Received')
 const ProcessedResponse = processRequest(response)
 console.log(ProcessedResponse)
}

doWork() */

// --------------------------

/* function printName(name, callBack){
    callBack(name)
 }

 function printNameHandler(x){
  console.log("Hello " + x)
 }


 printNameHandler('Vinod', printNameHandler ) 

 // --------------- scope and callback  ---------------
 function print(variable){
  let c = 3;
  return function func(variable2){
    console.log(variable);
    console.log(variable2);
    console.log(c);
  }
 }

 let a = print(1)

 a(2)

 // --------------- Array method  ---------------

 const ar = [1,2,3,7,8,]

 ar.forEach(ele => {
  console.log(ele  * 2)
 })

 console.log(ar)

 const items = [
  { price : 10 },
  { price : 20 },
  { price : 14 },
  { price : 1 },
  { price : 6 },
  ]


  const totalSum = items.reduce((sum, number) => {
    return sum + number.price
  }, 0)
  
  console.log(totalSum) */

// --------------- dom access with id and class queryselector  ---------------

/* 
  const divWithId = document.querySelector('#div-id')
  
  divWithId.style.color = 'red'
  divWithId.style.fontSize = '30px'

  const divWithClass = document.getElementsByClassName('div-class')

  const divWithClassArray = Array.from(divWithClass)

  divWithClassArray.forEach(element => {
    element.style.color = 'green'
  }); */

// --------------- get access data set attribute ---------------

/* const buttons = document.querySelectorAll('button')

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const currentClickes = parseInt(button.dataset.clicks)

      button.dataset.clicks = currentClickes + 1
    })
  })
 */

/* const btnHover = document.querySelector(".cta-btn");

btnHover.addEventListener("mouseenter", () => {
  btnHover.classList.add("on");
});

btnHover.addEventListener("mouseleave", () => {
  btnHover.classList.remove("on");
});

const person = {
  name: "Kyle",
  friend: {
    name: "Joe",
    friend: {
      name: "Sally",
    },
  },
}; */

/* let currentPerson = person;

while(currentPerson != null){
  console.log(currentPerson.name)
  currentPerson = currentPerson.friend
} */

/* function printName (currentPerson){
    if(currentPerson == null) return;
    console.log(currentPerson.name)
    printName(currentPerson.friend)
}

printName(person) */

//Array method
/* 
const items = [
  { price: 10 },
  { price: 20 },
  { price: 14 },
  { price: 1 },
  { price: 6 },
];

const newArray = items.reduce((sum, ele) => {
  return sum + ele.price
}, 0)

console.log(newArray) */

/* function getValueWithDelay(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(value)
    }, delay)
  })
}

function getValuewithDelayError(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error')
    }, delay)
  })
}

async function doStuff(){
  try {
    const value1 = await getValueWithDelay('vinod', 250);
    console.log('resolve', value1)
    const value2 = await getValueWithDelay('vinod11', 250);
    console.log('resolve', value2)
    const value3 = await getValuewithDelayError('hi',250);
    console.log('resolve', value3)
  } catch (error) {   
    console.error(error)
  } finally{
    console.log('Finally')
  }
}

doStuff() */

// fetch api
/* const URL = "https://jsonplaceholder.typicode.com/users"
fetch(URL)
.then(res => res.json())
.then(data => data.map(user => console.log(user.name)))

async function getData() {
try {
  const res = await fetch(URL)
  const users = await res.json()
  console.log(users.map(user => user))
} catch(error){
  console.log(error)
}
}

getData()

const foo = {
bar(){
  console.log('test');
},
} */

/* const arr = [5,3,7];
arr.foo = "Hello";

for(let i in arr){
  console.log(i)
} */

/* function loadScript(src){
  let script = document.createElement('script');
  script.src = src;
  script.type = 'text/javascript';
  script.async = false;

  document.head.append(script);
}

loadScript('script1.js'); */

/* const list = document.querySelector(".todo-list");

list.addEventListener('click', e => {
 // console.log(e.target);
  console.log(e.currentTarget);
}) */

/* const source = {name: 'Vinod', age: 27};
const target = {}

const newTarget = Object.assign(target, source);

console.log(newTarget) */
/* class HUmen {
 gender = 'male';

  printGender = () => {
    console.log(gender);
  }
}

class Person extends HUmen { 
   name = 'Max';


  printMyName = () => {
    console.log(name);
  }
}

const persons = new Person();

persons.printMyName();
persons.printGender(); */

/* let T = 5;

for(let i = 1; i <= T; i++){
  
  let n = 5;
  let sum = 0;
  while(n > 0){
    let id = n%10;
    sum += id;
    n /= 10;
  }

  console.log(sum)

} */

/* 
function func1(){
        console.log(x);
        console.log(y);
        var x = 2;
        let y = 12;
      }
  
   
  
      func1();  */

/*  console.log('script start');

setTimeout(function () {
   console.log('setTimeout');
}, 0);

Promise.resolve()
   .then(function () {
     console.log('promise1');
   })

   .then(function () {
     console.log('promise2');
   });

console.log('script end'); */

/* const arr = [1, 3, 5, 6, 1, 6, 3, 8];

const uniqueArr = [];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    
    if (arr[i] !== arr[j]) {
      count = count++;
    }
  }
  uniqueArr.push(arr[i])
}

console.log(count) */

// find first duplicate arr
/* const findFirstDuplicateEle = (arr) => {
  const seen = {};

 for(let i=1; i<arr.length; i++){
  const ele = arr[i];

  if(seen[ele]){
    return ele;
  } else{
    seen[ele] = true;
  }
 }
 return null;
}

const arr1 = [1,1,2,5,3,6,1,3,2,6,5];

const findFirstDupEle = findFirstDuplicateEle(arr1)
console.log(findFirstDupEle); */

// ******** DOM *********
/* const div = document.createElement('div');
console.log(div);
div.className = "main";
div.id = 'mainDiv';
div.setAttribute('title', 'Ye mera first element hai');
div.style.background = "green";
div.style.padding = "12px";
// div.innerHTML = "This is my first div"
const addText = document.createTextNode("Yahi mera first div hai")
div.appendChild(addText);

document.body.appendChild(div) */
/*
const images = document.getElementById("images");
const img = document.getElementById("image1");

images.addEventListener(
  "click",
  function (e) {
    console.log(e);
    if(e.target.tagName === 'IMG'){
    const currentElement = e.target.parentNode;
    console.log(currentElement);
    currentElement.remove();
  }
    
  },
  false
);

 img.addEventListener(
  "click",
  (e) => {
    console.log(e);
    const parentNode = e.target.parentNode;
    console.log("single image clidkede");
    console.log(parentNode);
    e.stopPropagation();
  },
  true
); */

/* const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promiss run");
    resolve();
  }, 1000);
});

promise1.then(() => {
  console.log("promise1 resolve");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("seocnd promise run");
    resolve();
  }, 1000);
}).then(() => {
  console.log("promise2 consume");
});

const promise3 = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve({ userName: "Vinod", userEmail: "user@user.com" });
  }, 1000);
});

promise3.then((user) => {
  console.log(user);
});

const promise4 = new Promise((resolve, reject) => {
  setInterval(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "Vinod4", email: "vinodyadavhhh4@gmail.com" });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .catch((err) => {
    console.log(err);
  }); */

/* const getAllUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getAllUsers(); */

/* fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  }); */

/*   const myFunc = num => {
    return num * 5
  }

  myFunc.power = 2
  console.log(myFunc(5))
  console.log(myFunc.prototype) */

/*   function createUser(username, score) {
    this.username = username;
    this.score = score;
  }

  createUser.prototype.increament = function() {
   console.log(this.score++)
  }

  createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
  }



  const user1 = new createUser('vinod', 25);
  const user2 = new createUser('Anita', 250)
 
  user2.increament() */

/* const User = {
  name: "Vinod",
  email: "vinod@gmail.com"
}
const Teacher = {
  makeVideo : true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupoort = {
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport
}

Object.setPrototypeOf(TeachingSupport, Teacher)

Teacher.__proto__ = User;

console.log(Teacher);
console.log(TeachingSupport)
console.log(TASupoort) */

// call - current excution context kisi or function ko pass kar deta hai
function setUserName(username){
  // complex DB calls
  this.username = username
  console.log('called')
}

function createUser(username, email, password){
  setUserName.call(this, username)
  this.email = email;
  this.password = password
}

const newUser = new createUser("newUser", "newuser@gmail.com", "123")
console.log(newUser)
