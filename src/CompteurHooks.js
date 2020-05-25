import React,{useState,useEffect} from 'react'

const CompteurHooks = () => {
    
    const [depart,setDepart]=useState(0)
    const [count,setCount]=useState(0)

    // useEffect (()=>{
    //     setCount(depart)
    // })

    const handleChange = (e) => {
        setCount(parseInt(e.target.value))
        setDepart(parseInt(e.target.value))
    }

    return (
        <div>
            <h1>Compteur Hooks !</h1>
            <p>Le compteur est à {count}</p>
            {/* <p>{animal}</p> */}
            <input type="button" value="Increment" onClick={()=>setCount(count+1)}/>
            <label>Valeur de départ :</label>
            <input type="text" value={depart} onChange={
                handleChange
                }/>
        </div>
        
    )
}

export default CompteurHooks