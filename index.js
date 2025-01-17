import fs from "fs";

// const files = fs.readdirSync("./logs");

// for (let i = 0; i < files.length; i++) {
//   console.log(files[i]);
// }

// let createdFile = "test";
// const text = "hello";

// let data = fs.readFileSync("test", "utf-8");

// data = data + "1";

// fs.writeFile("test", data, (err) => {
//   if (!err) {
//     console.log("success");
//   }
// });

// fs.readdirSync("test", "utf-8"){
//     console.log(col)
// };

// const value = fs.readFileSync(createdFile, "utf-8");

// console.log(value);

// value = "byebye";

// console.log(value)

const studentInfo = fs.readFileSync("./student.json", "utf-8");

console.log(studentInfo);

// let newStudent = {
//   name: "dgsdfas",
//   spot: "3sdasA",
// };

// let data = fs.readFileSync("./data.json", "utf-8");

// let res = data.filter((obj) => obj.spot !== "2A");
// console.log(res);

// var jsonFile = JSON.parse(data);
// console.log(typeof jsonFile);
// console.log(jsonFile.student.push(newStudent));
// console.log(jsonFile.student);

// var newData = JSON.stringify(jsonFile);
// console.log(typeof newData);


// let test = JSON.parse(a);
// console.log(test);
// console.log(typeof test);

// let filteredObj = Object.fromEntries(
//   Object.entries(data).filter(([key, value]) => value !== "2A")
// );
// console.log(data);
// console.log(typeof data);
// console.log(filteredObj);
// console.log(typeof filteredObj);

// 1. select index
// 2 delete selected array in obj
// 3. read

// function create(student) {
//   const json = fs.readFileSync("./data.json", "utf-8");
//   console.log(typeof json);
//   const data = JSON.parse(json);
//   data.unshift({ name: "Bat", spot: "2B" });

//   fs.writeFileSync("./data.json", JSON.stringify(data));
// }

// create();

// function deleteStudent(spot){
//   const json = fs.readFileSync("student.json", "utf-8");
//   const data = JSON.parse(json);

//   const filteredData = data.filter()
// }

function updateStudent(id) {
  const InfoData = fs.readFileSync("./data.json", JSON.stringify);
}

updateStudent();
