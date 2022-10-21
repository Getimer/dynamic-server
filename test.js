const fs = require("fs");
const userString = fs.readFileSync("./db/user.json").toString();
const userArray = JSON.parse(userString);

const user = { id: 3, name: "csg3", password: 123 };
userArray.push(user);
const string = JSON.stringify(userArray);
fs.writeFileSync("./db/user.json", string);
