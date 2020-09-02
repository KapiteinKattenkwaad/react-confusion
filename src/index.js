import React, {useEffect, useState, useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakesList = [
  {id: "1", name:"Echo", trailhead:"something"},
  {id: "2", name:"tahoe", trailhead: "wrights"},
  {id: "3", name:"wamp", trailhead: "bayview"},
]



function Open() {
  const [status, setStatus] = useState("open");
  return (
    <div>
      <h1>Status: {status} </h1>
      <button onClick={() => setStatus("Closed")} >Closed</button>
      <button onClick={() => setStatus("Open")}> Open</button>
      <button onClick={() => setStatus("Back in five")}>Break</button>
    </div>
  )
}

function Checked() {
  const [checked, toggle] = useReducer(
    checked => !checked,
    false
  );
  return  (
    <div>
      <input type="checkbox" value={checked} onChange={toggle}/>
      {checked ? "checked" : "not checked"}
    </div>
  )
}

function GithubUser({ login }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error)
  }, [])
  if (data) {
    return  <div>
      <h1>
        {data.login}
      </h1>
      <img src={data.avatar_url} width={100} alt=""/>
      <p>
        {data.company}
      </p>
    </div>
  }
  return null;
}

function Logging() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");
  useEffect(() => {
    console.log(`field 1 ${val}`)
  }, [val])
  useEffect(() => {
    console.log(`field 2 ${val2}`)
  }, [val2])
  return (
    <div>
      <label >
             Fav phrase
        <input type="text"
               value={val}
               onChange={e => setVal(e.target.value)}
        />
      </label>
      <br/>
      <label>
             SEcond fav phraz
        <input type="text"      value={val2}
               onChange={e => setVal2(e.target.value)}/>

      </label>
    </div>
  )
}


function Lake({name}) {
  return (
    <div>
      <h1>Visit {name}</h1>
    </div>
  )
}

function SkiResrt({name}) {
  return  (
    <div>
      <h2>Go skiing! {name}</h2>
    </div>
  )
}

//Conditional rendering
function App() {
 return <GithubUser login="KapiteinKattenkwaad" />
}

// function App(props) {
//   if (props.season === 'summer') {
//      return <Lake name="Jenny" />
//   } else if (props.season === 'winter') {
//     return <SkiResrt name="skirestor" />
//   }
// }


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

