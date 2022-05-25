import { GoogleComponent } from 'react-google-location' 
 
//... 
import React, { Component } from 'react';
 
 
 
const API_KEY = AIzaSyC_mTq9sqIK3tHaG1YsWwjJX1thFG57dDA  // how to get key - step are below
 
class HomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }
 
  render() {
    return (
      <div >
         <GoogleComponent
         
          apiKey={API_KEY}
          language={'en'}
          country={'country:in|country:aus'}
          coordinates={true}
          locationBoxStyle={'custom-style'}
          locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ place: e }) }} />
      </div>
 
    )
  } 
}
 
 
export default HomeComponent;
 