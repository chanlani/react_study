




function Btn(props){
	return(
		<button
			style={{
				backgroundColor: "tomato",
				color : "white",
				fontSize : (props.big) ? 20 : 16,
			}}
		>
		{props.banana}
        </button>
        )
}
function App2 (){
    return(
        <div>
        <Btn banana="save Change" big={false}/>
        <Btn banana="continue" big={true} />
        </div>
    )
}
export default App2