import { useState, useEffect } from "react"
import Movie from '../components/Movie'

function MovieHome(){

    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const getMovies = async () => {
        const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')

        const json = await response.json()
        // await가 중복되니까 합칠 수 있다.
        // const json = await(
        //     await fetch(
        //         'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year'
        //         )
        //     ).json()

        // 이전에는 .then을 썼는데 이번에는 await, async를 썼다. 비슷한 효과다.

        setMovies(json.data.movies)
        setLoading(false)
        console.log(movies)

    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div>
            {loading ? <h1>Loading...</h1> : movies.map((mov) => (
                 <Movie 
                    key={mov.id}
                    id={mov.id}
                    coverImg={mov.medium_cover_image}
                    title={mov.title}
                    summary={mov.summary}
                    genres={mov.genres} />
            )
            )}
        </div>
    )
}
export default MovieHome;