import React, { Component } from 'react';
import { Field, Control, Input, Button } from 'bloomer';

class ServerLookupForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    let serverName = document.getElementById('server-name-input').value.trim();
    if (serverName.length < 1) return;
    window.location.href = '/s/' + serverName;
  }

  render() {
    return (
      <div style={{display: 'inline-block'}}>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <Field hasAddons>
            <Control>
              <Input id='server-name-input' type='text' placeholder='beans' />
            </Control>
            <Control>
              <Button isColor='info' type='submit' isOutlined>
                Lookup
              </Button>
            </Control>
          </Field>
        </form>
      </div>
    );
  }
}

export default ServerLookupForm;
