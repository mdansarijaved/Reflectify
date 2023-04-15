import React,{useState} from "react";

export default function Count(){
    
    const [count,setCount] = useState(0)

    function decrementCount (){
        setCount(count-1)

    }
    function incrementCount(){
        setCount(count+1)
    }


    return(
        <> 
        <div className="flex justify-center items-center space-x-6 ">
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
        </div>
        </>
    );
}