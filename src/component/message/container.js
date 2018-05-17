import React, { Component, DOM } from 'react';
import Message from './Message';
import { isEmpty } from '../../utils/index';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: {}
    };

    this.addMessage = this.addMessage.bind(this);
    this.removeMessage = this.removeMessage.bind(this);
  }

  addMessage(msg) {
    const { messages } = this.state;
    messages[msg.id] = msg;
    this.setState({ messages });
  }

  removeMessage(id) {
    const { messages } = this.state;
    delete messages[id];
    this.setState({ messages });
  }

  render() {
    const { messages } = this.state;

    if (isEmpty(messages)) {
      return null;
    } else {
      return (
          <div className="react-pc-ui-message">
            {
              Object.keys(messages).map(key => (
                  <Message
                      key={key}
                      {...messages[key]}
                      close={this.removeMessage}
                  />
              ))
            }
          </div>
      );
    }
  }
}
