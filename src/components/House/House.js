import React from 'react';



export default function House(props){

    
        return(
            <div  className='box columns'>
                <div className='column'>
                    <img src={props.img} alt='house'/>
                </div>

                <div className='column'>
                    <span>Property Name:{props.name}</span><br/>
                    <span>Address:{props.address}</span><br/>
                    <span>City:{props.city}</span><br/>
                    <span>State:{props.state}</span><br/>
                    <span>Zip:{props.zip}</span><br/>
                </div>

                <div className='column'>
                    <span>Monthly Mortgage: {props.mortgage}</span>
                    <span>Desired Rent: {props.rent}</span>
                </div>
                
                <div className='button'
                    type='button' 
                    onClick={() => props.deleteHouse(props.id)}>Delete
                </div>
            </div>
        )
    }


