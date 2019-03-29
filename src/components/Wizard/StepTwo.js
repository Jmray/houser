import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    updateImageUrl,
} from '../../reducers/houseReducer';



class StepTwo extends Component{



  
    render(){
        const {
            updateImageUrl,
        } = this.props;
        return(
            <div className='box wizard-step'>
                <form>
                    <label className='label'>
                        Image URL:
                        <input className='input' type='text' onChange={event => updateImageUrl(event.target.value)}></input>
                    </label>
                </form>
                <button className='button' type='button' onClick={() => this.props.history.push('/wizard/stepone')}>previous</button>
                <button className='button' type='button' onClick={() => this.props.history.push('/wizard/stepthree')}>next</button>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    const {
        imageUrl,
    } = reduxState;
    return{
        imageUrl,
    }
}
export default connect(mapStateToProps, {
    updateImageUrl,
    })(StepTwo);