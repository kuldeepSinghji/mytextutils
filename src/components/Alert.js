import React from 'react'
import "./Alert.css"
export default function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert &&<> 
       <div className="alertContainer">
            <p>{capitalize(props.alert.type)} : {props.alert.msg}</p>
        </div>
        </>
    )
}
