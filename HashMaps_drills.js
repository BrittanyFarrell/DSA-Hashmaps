/* eslint-disable no-console */
/* eslint-disable strict */
const HashMap = require('./HashMap');

function main() {
  //1. creating the hashmap
  const lotr = new HashMap();
  //console.log(lotr);

  const hashData = [
    {"Hobbit": "Bilbo"}, 
    {"Hobbit": "Frodo"},
    {"Wizard": "Gandalf"}, 
    
    {"Human": "Aragorn"}, 
    {"Elf": "Legolas"}, 
    {"Maiar": "The Necromancer"},
    
    {"Maiar": "Sauron"}, 
    {"RingBearer": "Gollum"}, 
    {"LadyOfLight": "Galadriel"}, 
    
    {"HalfElven": "Arwen"},
    {"Ent": "Treebeard"}
  ];


  hashData.forEach(item => {
    let obj = item;
    let key = Object.keys(obj);
    
    lotr.set(key[0], item[key]);
  });
  // console.log(lotr);

  const a = lotr.get('Maiar');
  const b = lotr.get('Hobbit');

  // console.log('values', a, b);

  //I got the values {Maiar: Sauron} and {Hobbit: Frodo}
  //There are two other values for hobbit and maiar that were overwritten.
  //The capacity is 24.




  //2. WhatDoeThisDo
  const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    // console.log(map1.get(str1));
    // console.log(map2.get(str3));
  };

  // The function creates two hashmaps 
  //   1. 'map1' with values:
  //       {'Hello World': 10},
  //       {'Hello World': 20}

  //   2. 'map2' with values:
  //       {'Hello World': 20},
  //       {'Hello World': 10}



  // 4. Remove duplicates
  function noDup(str) {
    let newStr = [];
    let dupCheck = {}; 
  
    for (let x = 0; x < str.length; x++) {
      let char = str[x];
      if(!dupCheck[char]) {
        dupCheck[char] = char;
        newStr.push(char);
      }
    }

    return newStr.join('');
  }

  //console.log('No Duplicates: ', noDup("google all that you think can think of"));




  // 5. Any permutation a palindrome 
  function palFinder(str) {
    if (str.length === 0) {
      return 'please provide a string';
    }
    let arr = [];
    let pairless = [];
    
    for (let x = 0; x < str.length; x++) {
      arr.push(str[x]);
    }
    arr = arr.sort();

    for (let x = 0; x < arr.length; x++) {
      arr[x] === arr[x + 1] ? x++ : pairless.push(arr[x]);
    }

    const answer = pairless.length > 1 ? 'no palindrone detected' : 'this is a palindrone';
    return answer;
  }

  // console.log('should be true', palFinder('acecarr'));
  // console.log('should be false', palFinder('north'));




  //6. Anagram grouping
  function groupByGram(arr) {
    
  }

  console.log(groupByGram(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));
}

main();