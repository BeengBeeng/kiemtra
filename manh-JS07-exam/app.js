// const express = require("express");
// const app = express();
// const port = 3000;
// const fs = require("node:fs");
// const bodyParser = require("body-parser");

// Exercise 01
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// Exercise 02
// buoc 1
// app.get("/api/v1/todos", (req, res) => {
//   fs.readFile("/dev-data/todos.json", function (err, data) {
//     res.status(200).json(JSON.parse(data));
//   });
// });
// //  buoc 2
// app.get("/api/v1/todos/:id", (req, res) => {
//   fs.readFile("/dev-data/todos.json", function (err, data) {
//     let getDataString = JSON.parse(data);
//     let getIdTodo = getDataString.findIndex((e) => {
//       return e.id === Number(req.params.id);
//     });
//     if (getIdTodo == -1) {
//       res.status(200).json("Question not found!");
//     } else {
//       res.status(200).json(getDataString[getIdTodo]);
//     }
//   });
// });
// // buoc 3
// app.post("/api/v1/todos", (req, res) => {
//   console.log(req.body);
//   fs.readFile("/dev-data/todos.json", function (err, data) {
//     let dataJson = JSON.parse(data);
//     let todoJson = dataJson.findIndex((e) => {
//       e.title == req.body.title;
//     });
//     if (!todoJson) {
//       dataJson.push(req.body);
//       fs.writeFile("/dev-data/todos.json", JSON.stringify(dataJson), (err) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.status(200).json({ message: "Creat successfully" });
//         }
//       });
//     } else {
//       res.status(200).json({ message: "User alrealy exists" });
//     }
//   });
// });

// buoc 4
// app.put("/api/v1/todos/:id", (req, res) => {
//   // console.log(req.params.id);
//   console.log(req.body);
//   fs.readFile("/dev-data/todos.json", (err, data) => {
//     let dataString = JSON.parse(data);
//     let resultTodo = dataString.find((e) => {
//       return e.title == req.body.title;
//     });

//     if (!resultTodo) {
//       res.status(200).json("Question not found!");
//     } else {
//       let index = dataString.indexOf(resultTodo);
//       console.log(index);
//       dataString.splice(index, 1, req.body);
//
//       fs.writeFile(
//         "./dev-data/questions.json",
//         JSON.stringify(dataString),
//         (err) => {
//           if (err) throw err;
//           res.status(200).json("Update successfully!");
//         }
//       );
//     }
//   });
// });

// app.delete("/api/v1/todos/:id", (req, res) => {
//   fs.readFile("./dev-data/todos.json", (err, data) => {
//     let dataString = JSON.parse(data);
//     let deleteId = req.params.id;
//     let deleteTodos = dataString.findIndex((e) => {
//       return e.id === Number(req.params.id);
//     });

//     if (deleteTodos >= 0) {
//       dataString.splice(deleteTodos, 1);
//       fs.writeFile(
//         "./dev-data/todos.json",
//         JSON.stringify(dataString),
//         (err) => {
//           if (err) throw err;
//           else {
//             res.status(200).json("Delete ok");
//           }
//         }
//       );
//     } else {
//       res.status(200).json("Question not found!");
//     }
//   });
// });
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
