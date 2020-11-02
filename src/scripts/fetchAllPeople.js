'use strict';

const { fetchAllSwapi } = require('./fetchAllSwapi')

const fetchAllPeople = () => {
    return new Promise((resolve, reject) => {
      fetchAllSwapi([], 'https://swapi.dev/api/people/?page=1').then((data) => {
        const people = data;
        let characters = [];  
        for(let i = 0; i < people.length; i++){
            characters[i] = { 
                          homeworld: people[i].homeworld, 
                          name: people[i].name, 
                          gender: people[i].gender
                        };
        }
  
        fetchAllSwapi([], 'https://swapi.dev/api/planets/?page=1').then((data) => {
          const planets = data;
  
          for(let i = 0; i < characters.length; i++){
            console.log(i/(characters.length-1) + " percent")
            for(let j = 0; j < planets.length; j++){
              if(characters[i].homeworld === planets[j].url){
                characters[i].homeworld = planets[j].name;
              }
            }
          }
  
          resolve(characters);
        }).catch((err) =>{
          throw err;
        })
      })
    }).catch((err)=>{
      throw err;
    })
}

module.exports = {
    fetchAllPeople,
}