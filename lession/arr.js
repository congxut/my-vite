const app = document.getElementById("app");

const myArr = ["xxx", "chuyen", "duc"];

let content = "";

myArr.forEach((name, index) => (content += `<li>${name} + ${index}</li>`));

app.innerHTML = `<ul>${content}</ul>`;
// const myObj = {
//     name: "Dat",
//     child: {
//         name: "Kien"
//     }
// }

// const { name: parentName, child : { name } } = myObj;
// console.log(name); // Dat