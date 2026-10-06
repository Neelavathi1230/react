import { useState } from "react"
function car(){
    const [car,setCar] = useState(
       {
        brand:"Tata",
        model:"Nexon",
        color:"Red",
        year:2024
       } 
    );
    function updateColor(){
        setCar({color:"White"})
    }
    return<>
    <h1>My car</h1>
    <p>Brand:{car.brand}</p>
    <p>Model:{car.model}</p>
    <p>Color:{car.color}</p>
    <p>Year:{car.year}</p>
    <button onClick={updateColor}>Change Color</button>
    </>
}
export default Car;