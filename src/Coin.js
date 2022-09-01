import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import {useRef} from "react"


// loading 글씨가 coin json다 받아오면 loading글씨 사라짐
function Coin(){
    const [loading, setLoading] = useState(true)
    const [coins, setCoins] = useState([])

    const [myAns, setMyAns] = useState("")

    const myOpt = useRef()

    const onClick = (e) =>{
        console.log(myAns)
        const bitPrice = Math.round((myOpt.current.value)*1000)/1000    //소수점을 뒤 3자리까지 제한하니까 이제 오류를 뱉지 않음
        console.log(bitPrice)
        if(myAns<bitPrice){      // 내가 가진 돈보다 비쌀때
            alert(Math.round((myAns/myOpt.current.value)*1000000)/1000000+"개")
            console.log('비싸다')
            console.log(myAns)
            // alert((myAns/myOpt.current.value))
        }else{  // 쌀 때
           alert(Math.floor(myAns/myOpt.current.value)+"개")
           console.log("싸다")
        }
    }

    const onChange=(e)=>{
        
        setMyAns(e.target.value)
    }

    useEffect(() =>{
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then(Response =>Response.json())   //response를 받아서 json으로 return.
            .then((json) => {
                setCoins(json)
                setLoading(false)
            });
    }, [])  // 뒤에 빈 배열은 한번만 실행된다는 거.. 뭐가 변하든.
    return(
        <div>
            <h1>the Coins {loading ? null :"("+coins.length+"개)"}</h1>
            {loading ? <strong>Loading...</strong>:null}
            <select ref={myOpt}>
                {coins.map((cc, index)=>(
                <option
                    key={index}
                    value={cc.quotes.USD.price}>
                    {cc.name} ({cc.symbol}) {cc.quotes.USD.price}
                </option>))}
            </select>

            <hr/>
            <input
                type='number'
                placeholder='가진 돈'
                onChange={onChange}
            ></input>
            <button onClick={onClick}>계산</button>
        </div>
    )
}
export default Coin