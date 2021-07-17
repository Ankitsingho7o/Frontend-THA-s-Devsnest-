import React from 'react'

export default function SeventeenCard({title, cal}) {
 

    return (
        <div className="seventeenCard">
            <h1>{title}</h1>
             <p> You have Consumed {cal} calories</p> 
            
        </div>
    )
}
