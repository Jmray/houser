import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';




    
    
    
   
    
        export default function Wizard(){
           return(
                <div>
                    <Switch>
                        
                        <Route path='/wizard/stepone' component={StepOne}/>
                        <Route path='/wizard/steptwo' component={StepTwo}/>
                        <Route path='/wizard/stepthree' component={StepThree}/>

                    </Switch>
                    <Link to='/'>
                        <button>Cancel</button>
                    </Link>
                </div>
            );
           }
        
    



