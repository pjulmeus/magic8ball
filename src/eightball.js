import React, {useState} from "react";
import genRandomAns from "./getRandom";
import './App.css';





const Eightball = ({answers}) => {

    const [backgroundCol, setBackgroundColor] = useState("black");
    const [msg, setMsg] = useState("Think of a Question");

function answerQuestion(answers){
let randI = genRandomAns(answers) 
console.log(randI)
console.log(backgroundCol)
for (let i = 0; i < answers.length; i++){
    // console.log(answers[i])
    if(answers[i] === answers[randI]){
       let ans = answers[randI]
    setBackgroundColor(ans.color)
     setMsg(ans.msg)
    }
}
//  let ans = answers.map((ans, i) => 
//         [{id}])

// console.log(filterAns)
    
    
    // console.log(ans.color)
    // console.log(ans.msg)
    // setBackgroundColor(ans.color)
    // setMsg(ans.msg)

}

return (
    <>
    <div onClick = {()=> answerQuestion(answers)} className="circles" style= {{backgroundColor: backgroundCol}}> {msg} </div>
   </>
 )

// onclick = {()=> answerQuestion(answers)}
 /// Must create a function/component
 // when the eighball is clicked it 
 /// 1.radomizes the objects in the array and add an Id 
 /// 2. Map and add the ID to pick a rand eightball
//  {props.answers.filter(ans => (<div className="cirlces" backgroundColor ={ans[randI].color}> {ans[randI].msg} </div>))}

}
export default Eightball