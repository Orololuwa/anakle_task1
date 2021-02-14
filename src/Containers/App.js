import React, {Component} from 'react';

import Header from '../Components/Header/Header';
import Main from '../Components/MainContent/Main';
import OrderSummary  from '../Components/OrderSummary/OrderSummary';

import classes from './App.module.css';

import ProfilePicture from '../img/ProfilePicture.jpg';

class App extends Component{
  state={
    firstName: "Emmanuel",
    middleName: "Orololuwa",
    lastName: "Awolusi",
    profilePicture: ProfilePicture,
    totalPrice: 445,
    laptop: {
      pro2019: {
        colors: [
          {label: 'Silver', classe: 'Silver'},
          {label: 'Space Grey', classe: 'SpaceGray'}
        ],
        specifications: [
          {screenSize: 13.3, diskSize: '512GB', diskType: 'SSD', RAM: '8GB', processorSpeed: '2.4GHZ', processorType: 'Quad Core'},
          {screenSize: 13.3, diskSize: '1TB', diskType: 'SSD', RAM: '8GB', processorSpeed: '2.4GHZ', processorType: 'Quad Core'},
          {screenSize: 15, diskSize: '1TB', diskType: 'SSD', RAM: '16GB', processorSpeed: '3.2GHZ', processorType: 'Quad Core'},
          {screenSize: 15, diskSize: '  1TB', diskType: 'SSD', RAM: '16GB', processorSpeed: '3.6GHZ', processorType: 'Quad Core'}
        ]
      }
    },
    purchasingColor: " ",
    purchasingSpec: " "
  }

  colorChangeValue = (e) => {
    this.setState({purchasingColor: e.target.value});
  }

  specChangeValue = (e) => {
    this.setState({purchasingSpec: e.target.value});
  }


  render() {
    return(
      <div className={classes.App}>
        <Header 
          totalPrice={this.state.totalPrice.toFixed(2)}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          profilePicture={this.state.profilePicture}
        />

        <Main          
          laptop={this.state.laptop}
          colorChange={this.colorChangeValue}
          specChange={this.specChangeValue}
        />

        <OrderSummary 
          colorDesc = {this.state.purchasingColor}
          specDesc = {this.state.purchasingSpec}
        />
      </div>
    );
  }
}

export default App;
