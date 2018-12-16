import React, { Component } from 'react';
import { Title, Columns, Column } from 'bloomer';
import GeneralInformation from './GeneralInformation';
import PluginList from './PluginList';
import ServerProperties from './ServerProperties';

class ServerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverName: this.props.match.params.name,
      serverInfo: null,
      pluginDb: null,
      error: null,
      ready: false
    }
  }

  async componentDidMount() {
    console.log('fetching server ' + this.state.serverName);
    let res = await fetch('https://pocket.minehut.com/server/' + this.state.serverName + '?byName=true');
    let json = await res.json();
    console.log(json);
    if (json.server == null) return this.setState({ error: 'Invalid server'});
    this.setState({ serverInfo: json.server });

    console.log('fetching plugin database');
    res = await fetch('https://pocket.minehut.com/plugins_public');
    json = await res.json();
    console.log(json);
    this.setState({ pluginDb: json.all, ready: true });
  }

  render() {
    return (
      <div>
        <Title style={{fontSize: 50, fontFamily: 'Righteous'}} className='has-text-warning'>{this.state.serverInfo ? this.state.serverInfo.name : this.state.serverName}</Title>
        {this.state.error !== null && <Title className='has-text-danger'>{this.state.error}</Title>}
        {(!this.state.ready && !this.state.error) && 
        <div style={{paddingTop: '10%'}}>
          <img src='/logo.png' alt='Minehut logo' className='spinning' style={{height: 50}} />
        </div>}
        {this.state.ready &&
        <Columns isCentered>
          <Column isSize='1/3'>
            <GeneralInformation serverInfo={this.state.serverInfo} />
          </Column>
          <Column isSize='1/4'>
            <PluginList serverInfo={this.state.serverInfo} pluginDb={this.state.pluginDb} />
          </Column>
          <Column isSize='1/3'>
            <ServerProperties serverInfo={this.state.serverInfo} />
          </Column>
        </Columns>}
      </div>
    );
  }
}

export default ServerInfo;
