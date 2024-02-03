const jsonParse = (jsonString: string) => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
};

const jsonString = '{"name": "Ashish", "age": 27, "city": "ppur"}';
const parsedObject = jsonParse(jsonString);
