import React, { Component } from 'react';
import { PanelBlock, Panel, PanelHeading, Tag } from 'bloomer';
import ReactTooltip from 'react-tooltip';
import ago from 's-ago';
/*
 * Copyright (c) 2018 Daniel Gulic
 */
class GeneralInformation extends Component {
	componentDidMount() {
		console.log('compiling general information');
	}

	render() {
		return (
			<div className='fadein'>
				<Panel>
					<PanelHeading>General Information</PanelHeading>
					<PanelBlock>
						<div className='container'>
							<div className='has-text-weight-bold is-pulled-left'>Name</div>
							<div className='is-pulled-right'>
								<Tag isColor='success'>{this.props.serverInfo.name}</Tag>
							</div>
						</div>
					</PanelBlock>
					<PanelBlock>
						<div className='container'>
							<div className='has-text-weight-bold is-pulled-left'>MOTD</div>
							<div className='is-pulled-right'>
								<Tag isColor='primary'>
									{this.props.serverInfo.motd.replace(
										/[&§]([0-9a-fk-or])/g,
										''
									)}
								</Tag>
							</div>
						</div>
					</PanelBlock>
					<PanelBlock>
						<div className='container'>
							<div className='has-text-weight-bold is-pulled-left'>
								Creation date
							</div>
							<div
								className='is-pulled-right dotted'
								data-tip={ago(new Date(this.props.serverInfo.creation))}
							>
								<Tag isColor='info'>
									{new Date(this.props.serverInfo.creation).toUTCString()}
								</Tag>
							</div>
						</div>
					</PanelBlock>
					{this.props.serverInfo.last_online && (
						<PanelBlock>
							<div className='container'>
								<div className='has-text-weight-bold is-pulled-left'>
									Last online
								</div>
								<div
									className='is-pulled-right dotted'
									data-tip={ago(new Date(this.props.serverInfo.last_online))}
								>
									<Tag isColor='info'>
										{new Date(this.props.serverInfo.last_online).toUTCString()}
									</Tag>
								</div>
							</div>
						</PanelBlock>
					)}
					<PanelBlock>
						<div className='container'>
							<div
								className='has-text-weight-bold is-pulled-left dotted'
								data-tip='Does this server appear in the server list?'
							>
								Visible?
							</div>
							<div className='is-pulled-right'>
								<Tag
									isColor={
										this.props.serverInfo.visibility ? 'success' : 'danger'
									}
								>
									{this.props.serverInfo.visibility ? 'Yes' : 'No'}
								</Tag>
							</div>
						</div>
					</PanelBlock>
					<PanelBlock>
						<div className='container'>
							<div
								className='has-text-weight-bold is-pulled-left dotted'
								data-tip='How many credits does this server spend every day?'
							>
								Daily credit cost
							</div>
							<div className='is-pulled-right'>
								<Tag isColor='link'>
									{this.props.serverInfo.credits_per_day}
								</Tag>
							</div>
						</div>
					</PanelBlock>
					<PanelBlock>
						<div className='container'>
							<div className='has-text-weight-bold is-pulled-left'>
								Platform
							</div>
							<div className='is-pulled-right'>
								<Tag isColor='light'>
									{this.props.serverInfo.platform[0].toUpperCase() +
										this.props.serverInfo.platform.slice(1)}
								</Tag>
							</div>
						</div>
					</PanelBlock>
				</Panel>
				<ReactTooltip />
			</div>
		);
	}
}

export default GeneralInformation;
