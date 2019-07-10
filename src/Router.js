import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ServerInfo from './components/server/ServerInfo';
import React, { Component } from 'react';
import { Icon } from 'bloomer';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className='container' style={{textAlign: 'center', paddingTop: '3%'}}>
            <Switch>
              <Route exact path='/' component={Home} className='content' />
              <Route path='/s/:name' component={ServerInfo} className='content' />
            </Switch>
            <div className='foot'>
              Made with<Icon hasTextColor='danger' className='fa fa-heart'></Icon> 
              by <a href='https://jlz.fun'>jellz</a>.
              <br />
              This website is <a href='https://github.com/jellz/minehut-info'>open-source on GitHub</a>.
              <br />
              Copyright &copy; 2018-2020 Daniel Gulic. All rights reserved.
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
