const express = require('express');

const app = express();

app.use(express.json())

app.get("/courses", (request, response) => {
  const query = request.query
  console.log(query)
  const courses = ["Curso 1", "Curso 2", "Curso 3"]
  return response.json(courses)
})

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log("body", typeof body)
  const courses = ["Curso 1", "Curso 2", "Curso 3", "Curso 4"]
  return response.json(courses)
});

app.put("/courses/:id", (request, response) => {
  const { id } = request.params;

  console.log('params', typeof id)
  const courses = ["Curso 6", "Curso 2", "Curso 3", "Curso 4"]
  return response.json(courses)
})

app.patch("/courses/:id", (request, response) => {
  const courses = ["Curso 6", "Curso 7", "Curso 3", "Curso 4"]
  return response.json(courses)
})

app.delete("/courses/:id", (request, response) => {
  const courses = ["Curso 6", "Curso 7", "Curso 4"]
  return response.json(courses)
})

app.listen(3333)