import { Link } from "react-router-dom"

function Movie({coverImg, title, summary, genres, id}) {      // 이 프로퍼티(props)는 부모한테 얻어옴
    return (
        <div>
            <img src={coverImg} />
            <h2>
                <Link to={"/detail/"+id}>       
                    {title}
                </Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((gen, index) => (
                    <li key={index}>{gen}</li>
                ))}
            </ul>
        </div>
    )
}



export default Movie