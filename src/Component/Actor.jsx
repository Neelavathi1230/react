import { useEffect,useState } from "react"
function Actor() {
const [count, setCount] =useState(1);
useEffect( ()=>{
    console.log('Screen Refreshed')
},[])
function updateCount() {
    setCount((previousState) => {return previousState+1})
}
return(
    <>
    <h2>Naa Oru Thadava Sonna {count} thadava Sonna Mathiri</h2>
    <button onClick={updateCount}>Increase Count</button>
    </>
)
}
export default Actor;