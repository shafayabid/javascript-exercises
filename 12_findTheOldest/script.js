const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
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
  ];

  people.forEach(element => {
    if(element.yearOfDeath != null){
        console.log(element.yearOfDeath)
    }else{
        console.log(element.name)
    }
  })