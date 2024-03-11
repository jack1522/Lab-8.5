function getRandomName() {
  // List of names
  const names = [
    "Stacy",
    "Nirvana",
    "Gary Moore",
    "Chris Stapleton",
    "Kimberly",
    "Rihanna",
    "Keyshia",
    "Fantasia",
    "Whitney Houston",
    "Beyonce",
    "Alicia Keys",
    "Sandra",
    "Taraji",
    "Viola Davis",
    "Gabrielle",
    "Anita Baker",
    "Michael Jackson",
  ];

  return {
    // get is a special keyword that binds a property to a function. In this case when the "name" property is called, the name() function will execute below.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get

    // The name() function returns a name string by using a random number generator bound to the max number of items in the provided array (names.length). What we're really doing here is calling names[x] where x is a random number between 0 and 9. That will then select a "random" name from the array, e.g. names[6] == 'Sophia'
    get name() {
      // Math.floor(Math.random() * max)
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      return names[Math.floor(Math.random() * names.length)];
    },
  };
}
