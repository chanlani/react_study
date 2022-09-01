import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MovieDetail from '../components/MovieDetail'


function Detail(){
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState([])

    const {id} = useParams()

    const a = useParams()
    console.log("배열이니?",Array.isArray(a))       // 배열이 아님. 객체인가보다..

    console.log("akdjlfsj",a.id)

    const getMovie = async ()=>{
        const json = await (
            await fetch('https://yts.mx/api/v2/movie_details.json?movie_id='+id)
            ).json()
        

        const array = [json.data.movie]
        
        setMovie(array)
        setLoading(false)
        console.log(json.data)
        console.log(Array.isArray(movie))
    }

    useEffect(()=>{
       getMovie()
    },[])


    return (
        <div>

            {loading ? <h1>loading...</h1> : movie.map((mov) => (
                <MovieDetail
                    img={mov.large_cover_image}
                    genre={mov.genres}
                    rating={mov.rating}
                    runtime={mov.runtime}
                    title={mov.title_long}
                    year={mov.year}
                    intro={mov.description_intro} />
            )

            )}
        </div>
    )
}
export default Detail;