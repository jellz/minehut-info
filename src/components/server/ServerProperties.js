import React, { Component } from 'react';
import { PanelBlock, Panel, PanelHeading } from 'bloomer';
import ReactTooltip from 'react-tooltip';

class ServerProperties extends Component {
	render() {
		return (
			<div className='fadein'>
				{this.props.serverInfo !== null && (
					<Panel>
						<PanelHeading>Properties</PanelHeading>
						<div>
							{Object.entries(this.props.serverInfo.server_properties).map(
								(prop) => (
									<PanelBlock key={prop[0]}>
										<div className='container'>
											<div>
												{prop[0]}: <code>{JSON.stringify(prop[1])}</code>
											</div>
										</div>
									</PanelBlock>
								)
							)}
						</div>
					</Panel>
				)}
				<ReactTooltip />
			</div>
		);
	}
}

export default ServerProperties;
