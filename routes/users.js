import { genPassword, createUser, getUserByName } from "../helper.js";
import express from "express";
const router = express.Router()
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


router.post('/signup', async (request, response) => {
    const {username, password} = request.body;
    console.log(username, password);
    // const result = await addMovies(newMovies);
    const isUserExist = await getUserByName(username);
    console.log(isUserExist)
    // username already exists
    if(isUserExist) {
      response.status(400).send({ message: "Username already taken" })
      return;
    }
    // if( !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#%$]).{8,}$/g.test(password) )

    if( !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#%&]).{8,}$/g.test(password)) {
      response.status(400).send({ message: "Password pattern doesn't match" })
      return;
      }
    const hashedPassword = await genPassword(password);
    const result = await createUser(username, hashedPassword);
    response.send(result);
  });



  router.post('/login', async (request, response)  => {
    const {username, password} = request.body;
    console.log(username, password);
    // const result = await addMovies(newMovies);
    const userFromDB = await getUserByName(username);
    console.log(userFromDB)
    // username already exists
    if(!userFromDB) {
      response.status(400).send({ message: "Invalid credentials" })
      return;
    }
       const storedPassword = userFromDB.password;
     //password is matching or not
    const isPasswordMatch = await bcrypt.compare(password, storedPassword)
    if(!isPasswordMatch) {
      response.status(400).send({ message: "Invalid credentials" })
      return;
    }
  
    //token generate
    const token  = jwt.sign({id: userFromDB._id }, process.env.SECRET_KEY)
    // console.log(token)
  response.send({message: "Successful login" , token: token})

  });

  export const usersRouter = router;

  //Validate if username is already present 
  // validate if password matches


