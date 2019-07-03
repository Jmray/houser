import React, { Component } from 'react';
import House from '../House/House';
import axios from 'axios';




class Dashboard extends Component{

    constructor(){
        super();

        this.state = {
            houses: [],

        }
        this.deleteHouse = this.deleteHouse.bind(this);
    }
   componentDidMount(){
       this.getHouses();
   }
    getHouses(){
        axios.get('/api/houses').then(res => {
            this.setState({
                houses: res.data
                })
            }
        )
    }

    deleteHouse(id){
        axios.delete(`/api/houses/delete/${id}`).then(() => {
            this.getHouses();
        })
    }
    
    render(){
        
        const houses = this.state.houses.map(house => {
            return(
                <div  key={house.id}>
                    <House 
                        deleteHouse={this.deleteHouse}
                        id={house.id} 
                        name={house.name}
                        address={house.address}
                        city={house.city}
                        state={house.state}
                        zip={house.zip}
                        img={house.img}
                        mortgage={house.mortgage}
                        rent={house.rent}/>
                </div>
            )
        })
        return(
            <div className='dashboard container-div'>
            <div className='dash-subheader'>
                        <h1 className='dash-subheader-letters'>Dashboard</h1>
                        <div >
                            <button className='button'
                                onClick={() => this.props.history.push('/wizard/stepone')}>Add New Property
                            </button>
                            
                        </div>
                    </div>
                {houses}
                
            </div>
        )
    }
}

export default Dashboard;