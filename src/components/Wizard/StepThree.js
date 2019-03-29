import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
    updateRent,
    updateMortgage,
} from '../../reducers/houseReducer';


class StepThree extends Component{



    handleSubmit(event){
        event.preventDefault();

        const {
            propertyName,
            address,
            city,
            state,
            zip,
            imageUrl,
            mortgage,
            rent,

        } = this.props;

        axios.post('http://localhost:8000/api/houses/add', { propertyName, address, city, state, zip, imageUrl, mortgage, rent}).then((res) => {
            this.props.history.push('/');
        }

        ).catch(err => {
            console.log(err);
        })
        
    }

    render(){
        const {
            updateRent,
            updateMortgage,
        } = this.props;
        const suggestedRent = this.props.mortgage * 1.25;
        return(
            <div className='box wizard-step'>
                <div className='content is-medium'>
                    Suggested Rent: {suggestedRent}
                </div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label className='label'>
                        Monthly Mortgage Amount:
                        <input className='input' type='number' onChange={event => updateMortgage(event.target.value)}></input>
                    </label>

                    <label className='label'>
                        Desired Monthly Rent:
                        <input className='input' type='number'onChange={event => updateRent(event.target.value)}></input>
                    </label>

                <button className='button' type='button' onClick={() => this.props.history.push('/wizard/steptwo')}>previous</button>
                <button className='button' type='submit'>Add Home</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    const {
        propertyName,
        address,
        city,
        state,
        zip,
        imageUrl,
        mortgage,
        rent,

    } = reduxState;
    return{
        propertyName,
        address,
        city,
        state,
        zip,
        imageUrl,
        mortgage,
        rent,

    }
}
export default connect(mapStateToProps, {
    updateRent,
    updateMortgage,
    })(StepThree);