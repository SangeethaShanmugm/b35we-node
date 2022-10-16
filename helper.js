import { client } from "./index.js";
import bcrypt from "bcrypt";


export async function deleteMovieById(id) {
  return await client
    .db("b35we")
    .collection("movies")
    .deleteOne({ id: id });
}
export async function getAllMovies(request) {
  return await client
    .db("b35we")
    .collection("movies")
    .find(request.query)
    .toArray();
}
export async function GetMovieById(id) {
  return await client
    .db("b35we")
    .collection("movies")
    .findOne({ id: id });
}
export async function updateMovieById(id, updateMovies) {
  return await client
    .db("b35we")
    .collection("movies")
    .updateOne({ id: id }, { $set: updateMovies });
}
export async function addMovies(newMovies) {
  return await client
    .db("b35we")
    .collection("movies")
    .insertMany(newMovies);
}



export async function genPassword(password) {
  const salt = await bcrypt.genSalt(10) // bcrypt.genSalt(no. of rounds)
  console.log(salt)
  const hashedPassword = await bcrypt.hash(password, salt)
  // console.log(hashedPassword)
  return hashedPassword;
}
console.log(genPassword("password@123"))

export async function createUser(username, hashedPassword) {
  return await client
     .db("b35we")
    .collection("users")
    .insertOne({username: username, password: hashedPassword});

}

export async function getUserByName(username) {
  return await client
     .db("b35we")
    .collection("users")
    .findOne( { username: username } );

}