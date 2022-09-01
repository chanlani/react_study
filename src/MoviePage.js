
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Coin from "./Coin";
import Detail from "./routes/Detail";
import MovieHome from "./routes/MovieHome";

function MoviePage() {

   return (
    <BrowserRouter>
        <Routes>
            <Route path={`${process.env.PUBLIC_URL}/`}  element={<MovieHome/>}></Route>
        </Routes>
        <Routes>
            <Route path="/detail/:id" element={<Detail/>}></Route>
        </Routes>
        <Routes>
            <Route path="/coin" element={<Coin/>}></Route>
        </Routes>
        <Routes> 
            <Route path="/hello" element={<h1>Hello</h1>}>
            </Route>
        </Routes>

    </BrowserRouter>
   )
}
export default MoviePage