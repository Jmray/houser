import React, { Component } from 'react';

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


    handleInputChange(value, whatToChange){
        switch(whatToChange){
            default : 
            break;
            case "name" : 
                this.setState({
                    name: value,
                });
                break;
            case "address" : 
                this.setState({
                    address: value,
                });
                break;
            case "city" : 
                this.setState({
                    city: value,
                });
                break;
            case "state" : 
                this.setState({
                    state: value,
                });
                break;
            case "zipcode" : 
                this.setState({
                    zipcode: value,
                });
                break;
        }
    }
    render(){
        return(
            <div>
                <form>
                    <label >
                        name
                        <input type='text' onChange={event => this.handleInputChange(event.target.value, 'name')}/>
                    </label>

                    <label >
                        address
                        <input type='text' onChange={event => this.handleInputChange(event.target.value, 'address')}/>
                    </label>

                    <label >
                        city
                        <input type='text' onChange={event => this.handleInputChange(event.target.value, 'city')}/>
                    </label>

                    <label >
                        state
                        <input type='text' onChange={event => this.handleInputChange(event.target.value, 'state')}/>
                    </label>

                    <label >
                        zipcode
                        <input type='number' onChange={event => this.handleInputChange(event.target.value, 'zipcode')} id/>
                    </label>
                    
                    
                    <button type='submit'>Add Home</button>
                </form>
            </div>
        )
    }

}
export default StepOne;