// basic of promise create with variable

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("promise one");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
//   console.log("promise resolved");
});

//create promise with without storing any variable

new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("promise two");
    resolve();
  }, 1000);
}).then(function () {
//   console.log("promise resolved");
});

// create promise with arguments pass in resolve

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
    //   console.log("promise one");
      resolve({username:'kamlesh',password:'12345679'});
    }, 1000);
  });

  promiseThree.then(function(user){
    // console.log(user);
  })


//channing of promises 
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
    //   console.log("promise one");
      let error = false
      if(!error){
          resolve({username:'kamlesh',password:'12345679'});
      }else{
        reject('error : something went wrong')
      }
    }, 1000);
  });

promiseFour.then(function(user){
    // console.log(user);
    return user.username
}).then(function(username){
  // console.log(username);
})
.catch(function(error){
    // console.log(error, 'inside error');
}).finally(function(){
    // console.log('The promise is either resolved or rejected');
})



//promise consumed with async await

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
  //   console.log("promise one");
    let error = true
    if(!error){
        resolve({username:'kamlesh',password:'12345679'});
    }else{
      reject('error : something went wrong')
    }
  }, 1000);
});

async function consumedPromiseFive(){
  try {
    const response = await promiseFive
    // console.log(response);
  } catch (error) {
    // console.log(error);
  }
}
consumedPromiseFive()


//fetch data from url using try catch and async await
async function fetchData(){
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =  await response.json()
    console.log(data);

  } catch (error) {
    console.log(error);
  }
}
// fetchData()


// same work with then and catch block with function

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(res){
  return res.json()
}).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log(error);
})

//same work with arrow function

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=> res.json())
.then((data)=> console.log(data))
.catch((error)=> console.log(error))
