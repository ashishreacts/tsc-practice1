const inputValue = (value: string | number) => {
  if (typeof value === "string") {
    return value;
  } else {
    return value * 5;
  }
};

console.log(inputValue('ashish'));

