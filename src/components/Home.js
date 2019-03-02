import React, { Component } from 'react';
import { Title } from 'bloomer';
import ServerLookupForm from './ServerLookupForm';

class Home extends Component {
  render() {
    return (
      <div>
        <Title style={{fontSize: 100, fontFamily: 'Righteous'}} className='has-text-warning'>Minehut Info</Title>
        <Title style={{fontFamily: 'Acme', color: 'orange'}}>
          What server would you like to lookup today?
        </Title>
        <ServerLookupForm />
      </div>
    );
  }
}

export default Home;
