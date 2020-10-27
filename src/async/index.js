const doSomethingAsync =()=>{
  return new Promise((resolve, reject)=>{
    (true)
      ?setTimeout(()=>resolve('Exito'),3000)
      :reject(new Error('Ups'))
  });
}

const DoSomething = async()=>{
  const something = await doSomethingAsync();
  console.log(something);
}

console.log('before 1')
DoSomething();
console.log('After 1 ')

const anotherFunction = async()=>{
  try{
    const something = await doSomethingAsync();
    console.log(something);
  }catch{
    console.log(error);
  }
}

console.log('before 2')
anotherFunction();
console.log('After 2')