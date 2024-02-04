const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson;

    people.forEach(element => {
        if(element.yearOfDeath != null){
            if(oldestAge < (element.yearOfDeath - element.yearOfBirth)){
                oldestAge = (element.yearOfDeath - element.yearOfBirth);
                oldestPerson = element;
            }
        }else{
            if(oldestAge < (2023 - element.yearOfBirth)){
                oldestAge = (2023 - element.yearOfBirth);
                oldestPerson = element;
            }
        }
    });

    return oldestPerson 

};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  console.log( findTheOldest(people) )
// Do not edit below this line
module.exports = findTheOldest;
