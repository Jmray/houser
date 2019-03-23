import React from 'react';


export default function House(props){

    
        return(
            <div>
                <span>Property Name:{props.name}</span><br/>
                <span>Address:{props.address}</span><br/>
                <span>City:{props.city}</span><br/>
                <span>State:{props.state}</span><br/>
                <span>Zip:{props.zip}</span><br/>
                <button type='button' onClick={() => props.deleteHouse(props.id)}>Delete</button>
            </div>
        )
    }


