import React from 'react';




export default function House(props){

    
        return(
            <div  className=' house-card box columns'>
                <div className='column'>
                    <img className='image' src={props.img} alt='house'/>
                </div>

                <div className='column'>
                    <span>Property Name: {props.name}</span><br/>
                    <span>Address: {props.address}</span><br/>
                    <span>City: {props.city}</span><br/>
                    <span>State: {props.state}</span><br/>
                    <span>Zip: {props.zip}</span><br/>
                </div>

                <div className='column'>
                    <span>Monthly Mortgage: {props.mortgage}</span>
                    <br/>
                    <span>Desired Rent: {props.rent}</span>
                </div>
                
                <div className='delete'
                    type='button' 
                    onClick={() => props.deleteHouse(props.id)}>Delete
                </div>
            </div>
        )
    }


