

function MovieDetail({img, genre, rating, runtime, title, year, intro}){

    return(
        <div>
            <img src={img}/>
            <h2>{title}</h2>
            <div>평점 : {rating}</div>
            <div>개봉년도 : {year}</div>
            <div>러닝타임 : {runtime} 분</div>
            <div>소개  <br/>{intro}</div>
            <ul>
            장르
            {genre.map((gen, index)=>(
                <li key={index}>{gen}</li>
            ))}
            </ul>
        </div>
    )
}
export default MovieDetail