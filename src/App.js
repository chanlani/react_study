import logo from './logo.svg';
import './App.css';
import {useState} from "react"


function App() {
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([])
  const onChange = (e)=> setToDo(e.target.value) 
  const onSubmit = (e)=> {
    e.preventDefault();
    if(toDo===""){
      return;
    }
    setToDo("")
    setToDos((wow) => [toDo, ...wow]) // [6, ...test] 랑 똑같다
    // 원리를 설명하자면 toDo에 1이 들어가면 wow는 [] 빈 배열, ...wow도 빈 배열이겠지.. 그리고 toDO값 1이 들어가지..
    // 이후 2를 입력하면 wow에 1이 들어가서 wow는 1 toDo는 2. 즉 저걸 풀면 ([2, 1])
    // wow = [toDo, ...wow] 라고 보면 된다.
  }
  console.log(toDos)
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='search'
        />
        <button>Add to Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((hihi, index)=>( //키는 React가 변경, 추가 또는 제거된 항목을 식별하는데 도움이 된다. 그래서 배열 내부의 요소에 키를 넣어야한다.
          <li key={index}>{hihi}</li>
          // [<li key={1}>{hihi}</li>,<li key={2}>{hihi}</li>,<li key={3}>{hihi}</li>] 이거와 같다.
          )
        )}
      </ul>
    </div>
  );
}

export default App;