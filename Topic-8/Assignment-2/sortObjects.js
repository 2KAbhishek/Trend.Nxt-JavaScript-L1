const employees = [
  {
    firstName: "Abhishek",
    lastName: "Keshri",
    age: 23,
    joinedDate: "September 28, 2020",
  },

  {
    firstName: "Priyanka",
    lastName: "Polley",
    age: 24,
    joinedDate: "September 28, 2020",
  },

  {
    firstName: "2K",
    lastName: "Abhishek",
    age: 83,
    joinedDate: "September 28, 1960",
  },
];

//sorting employees array based on their firstname
employees.sort((a, b) => {
  let fa = a.firstName.toLowerCase(),
    fb = b.firstName.toLowerCase();
  return fa > fb ? 1 : -1;
});

//displaying employee details
employees.forEach((e) => {
  document.write(
    "Name -> " +
      `${e.firstName}  ${e.lastName}` +
      "<br>" +
      "Age -> " +
      `${e.age}` +
      "<br>" +
      "Joining Date -> " +
      `${e.joinedDate}` +
      "<br>" +
      "<br>"
  );
  console.log(`${e.firstName} ${e.lastName} ${e.age} ${e.joinedDate}`);
});
