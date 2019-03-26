import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearState } from '../../reducers/houseReducer';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';




    
    
    
   
    
function Wizard(props){
    const {
        clearState
    } = props;
    return(
        <div>
            <Switch>
                
                <Route path='/wizard/stepone' component={StepOne}/>
                <Route path='/wizard/steptwo' component={StepTwo}/>
                <Route path='/wizard/stepthree' component={StepThree}/>

            </Switch>
            <Link to='/'>
                <button onClick={clearState()}>Cancel</button>
            </Link>
            
        </div>
    );
    }


export default connect(null, {clearState})(Wizard); 
        
    



