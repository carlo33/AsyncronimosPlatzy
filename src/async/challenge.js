const fecthData = require('../utils/fetchData')
const API = "https://rickandmortyapi.com/api/character/";

const anotherFunction = async (API)=>{
  try{
    const data = await fecthData(API);
    const character = await fecthData(`${API}${data.results[0].id}`);
    const origin = await fecthData(character.origin.url);
    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  }catch(error){
    console.error(error);
  }

}

console.log('before')
anotherFunction(API);
console.log('after');