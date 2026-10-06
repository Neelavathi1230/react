import {useState} from "react";
function Favourite(){
    const[favourite,changeActor]=useState('')
    return(
        <>
        <h2>My Favourite Chief Minister is {favourite}</h2>
        <button style={{backgroundColor:'ligthblue',cursor:'pointer',marginRight:'10px'}} onClick ={() => {changeActor('M.K.Stalin')}}>Stalin</button>
        <button style={{backgroundColor:'ligthblue',cursor:'pointer',marginRight:'10px'}} onClick ={() => {changeActor('C.Josheph Vijay')}}>Vijay</button>
        <button style={{backgroundColor:'ligthblue',cursor:'pointer',marginRight:'10px'}} onClick ={() => {changeActor('Semman')}}>Seeman</button>
        <button style={{backgroundColor:'ligthblue',cursor:'pointer',marginRight:'10px'}} onClick ={() => {changeActor('Palanisamy')}}>Palanisamy</button>
        </>

    )
}    
export default Favourite;