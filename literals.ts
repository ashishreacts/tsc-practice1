type Gender = "male" | "female";

const displayGender = (gender: Gender) => {
  if (gender === "male") {
    return "Male";
  } else {
    return "Female";
  }
};

console.log(displayGender("male"));
