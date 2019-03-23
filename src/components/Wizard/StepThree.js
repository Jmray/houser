import React, { Component } from 'react';
import axios from 'axios';


class StepThree{



    handleSubmit(event){
        event.preventDefault();

        const {
            name,
            address,
            city,
            state,
            zipcode
        } = this.state;

        axios.post('http://localhost:8000/api/houses/add', { name, address, city, state, zipcode}).then((res) => {
            this.props.history.push('/');
        }

        ).catch(err => {
            console.log(err);
        })
        
    }

    render(){
        return(
            <div>
                <form>
                    <label>
                        Monthly Mortgage Amount:
                        <input type='number'></input>
                    </label>
                        Desired Monthly Rent:
                        <input type='number'></input>
                    <label>
                        
                    </label>
                </form>
            </div>
        )
    }
}

export default StepThree;