import logo from "./logo.svg";
import "./App.css";
import StudentList from "./StudentList";
import { useState, useEffect} from "react";
function App() {
  const [x, setX] = useState(0);
  const [student,setStudent] = useState({
    name: "nguyen Anh T",
    old: 5,
  });
 
  
  const hand_Increase = () => {
    setX((pre) => pre + 1);
    
  };

  const [text, setText] = useState("Meo");
  const [name, setName] = useState("");
  const Change_Text = (e) => {
    e.preventDefault();
    setText(name);
    setName("");
  };
  const hand_Change_name = (event) => {
    setName(event.target.value);
    setStudent((pre) => ({...pre, name: name}));
  };
  console.log("re render")
  const [check,setCheck] = useState(true);
  const hand_toggle_student = () => {
    setCheck((pre) => !pre);
  };
  // const [list,setList] = useState(() => {
  //   const listLocal = JSON.parse(localStorage.getItem("list"));
  //   console.log(listLocal);
  //   return listLocal;
  // }
  // );
   

  ///+++++++++++++++++++++++++++++++++++++++++++++++++++++
  const vd = [
    { name: "Heo",old: 2},
    { name: "Ga",old: 3},
  ]
  const handle_add = () => {
    setList((pre) => {
      const newList = [...pre, {name: name, old: 3}];
      localStorage.setItem("list",JSON.stringify(newList));
      return newList;
    }) 
  }
  const [list,setList] = useState(() => {
    let listLocal;
    if(localStorage.getItem("list")) {
      listLocal = JSON.parse(localStorage.getItem("list"));
    } else {
      listLocal = vd;
    }
    console.log(listLocal);
    return listLocal
  });
  return (
  
   <div>
     <h2>Git lan 2</h2>
     <h2>React Js</h2>
     <h1>{x}</h1>
     <h1>name:{text}</h1>
     <h1>
       Ho va Ten: {student["name"]}, Tuoi: {student.old}{" "};
       {/* {JSON.stringify(student)} */}
     </h1>
     <button onClick={hand_Increase}>Increase</button>
     <button onClick={Change_Text}>Change_Text</button>
     <form onSubmit={Change_Text}>
        <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={hand_Change_name}
        />
     </form>
      <button onClick={hand_toggle_student}>Toggle Student</button>
      {check ? <StudentList /> : ""}
      <ul>
        {
          list.map((st,key) => {
               return <li>{st.name + " " + st.old}</li>
          })
        }
      </ul>
      
      <button onClick={handle_add}>handle_add</button>
      
   </div>
  );
}
export default App;
