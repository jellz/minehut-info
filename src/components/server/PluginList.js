import React, { Component } from 'react';
import { PanelBlock, Panel, PanelHeading, Tag, PanelTab, PanelTabs } from 'bloomer';
import ReactTooltip from 'react-tooltip';

class PluginList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'installed'
    }
  }
  render() {
    return (
    <div className='fadein'>
      {this.props.pluginDb !== null && 
      <Panel>
        <PanelHeading>Plugins</PanelHeading>
        <PanelTabs>
          <PanelTab isActive={this.state.page === 'installed'} onClick={() => this.setState({ page: 'installed' })}>Installed</PanelTab>
          <PanelTab isActive={this.state.page === 'purchased'} onClick={() => this.setState({ page: 'purchased' })}>Purchased</PanelTab>
        </PanelTabs>
        {this.state.page === 'installed' && 
        <div>
          {this.props.serverInfo.active_plugins.map(id => 
          <PanelBlock key={id}>
            <div className='container'>
              <div>{this.props.pluginDb.filter(p => p._id === id)[0].name}</div>
              {this.props.pluginDb.filter(p => p._id === id)[0].credits > 0 && 
              <div style={{paddingLeft: 2}}>
                <Tag isColor='primary'>{this.props.pluginDb.filter(p => p._id === id)[0].credits} credits</Tag>
              </div>}
            </div>
          </PanelBlock>  
          )}
        </div>}
        {this.state.page === 'purchased' && 
        <div>
        {this.props.serverInfo.purchased_plugins.map(id => 
          <PanelBlock key={id}>
            <div className='container'>
              <div>{this.props.pluginDb.filter(p => p._id === id)[0].name}</div>
              {this.props.pluginDb.filter(p => p._id === id)[0].credits > 0 && 
              <div style={{paddingLeft: 2}}>
                <Tag isColor='primary'>{this.props.pluginDb.filter(p => p._id === id)[0].credits} credits</Tag>
              </div>}
            </div>
          </PanelBlock>  
        )}</div>}
      </Panel>}
      <ReactTooltip />
    </div>
    )
  }
}

export default PluginList;