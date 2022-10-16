import { getAllMovies, addMovies, updateMovieById, GetMovieById, deleteMovieById } from "../helper.js";
import express from "express";

const router = express.Router()


//movies
router.get('/', async (request, response) => {
  if (request.query.rating) {
    request.query.rating = +request.query.rating;
  }
  const movie = await getAllMovies(request);
  response.send(movie);
});


//POST movies
//inbuild middleware
// say data is in json
router.post('/', async (request, response) => {
  const newMovies = request.body;
  const result = await addMovies(newMovies);

  response.send(result);
});


//PUT movies
router.put('/:id', async (request, response) => {
  const { id } = request.params;
  const updateMovies = request.body;
  const result = await updateMovieById(id, updateMovies);

  response.send(result);
});


//movie with id - to send only movie with the matched id
//id -> :id
//request.params -> to get id from URL
router.get('/:id', async (request, response) => {
  const { id } = request.params; // const { movieid } = useParams()

  const movie = await GetMovieById(id);
  movie ? response.send(movie) : response.status(404).send({ message: "No movies found " });
});


//Delete movie
router.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const movie = await deleteMovieById(id);
  movie ? response.send(movie) : response.status(404).send({ message: "No movies found to delete" });
});


export const moviesRouter = router;