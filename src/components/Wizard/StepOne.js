import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    updatePropertyName,
    updateAddress,
    updateCity,
    updateState,
    updateZip,

} from '../../reducers/houseReducer';

class StepOne extends Component{


    constructor(){
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: null,
        }
    }

    render(){
        const {
            updatePropertyName,
            updateAddress,
            updateCity,
            updateState,
            updateZip,
        } = this.props;
        return(
            <div>
                <form>
                    <label >
                        name
                        <input type='text' onChange={event => updatePropertyName(event.target.value)}/>
                    </label>

                    <label >
                        address
                        <input type='text' onChange={event => updateAddress(event.target.value)}/>
                    </label>

                    <label >
                        city
                        <input type='text' onChange={event => updateCity(event.target.value)}/>
                    </label>

                    <label >
                        state
                        <input type='text' onChange={event => updateState(event.target.value)}/>
                    </label>

                    <label >
                        zipcode
                        <input type='number' onChange={event => updateZip(event.target.value)} />
                    </label>
                </form>
                <button type='button' onClick={() => this.props.history.push('/wizard/steptwo')}>next</button>
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
        zipcode,
    } = reduxState;
    return{
        propertyName,
        address,
        city,
        state,
        zipcode,
    }
}
export default connect(mapStateToProps, {
    updatePropertyName,
    updateAddress,
    updateCity,
    updateState,
    updateZip,
    })(StepOne);