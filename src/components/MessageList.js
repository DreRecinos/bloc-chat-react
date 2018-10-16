import React, { Component } from 'react';

export class MessageList extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
      this.state = { username: "", content: "", sentAt: "", roomId: "", messages: []}
      this.messagesRef = this.props.firebase.database().ref("messages");
      this.handleChange = this.handleChange.bind(this);
      this.createMessage = this.createMessage.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
=======
      this.state = { messages: [], username: "", content: "", sentAt: "", roomId: "" };
      this.messagesRef = this.props.firebase.database().ref('Messages');
      this.handleChange = this.handleChange.bind(this);
      this.createMessage = this.createMessage.bind(this)
>>>>>>> list-messages
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      username: "user",
      content: e.target.value,
      sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
      roomId: this.props.activeRoom
    });
  }

  createMessage(e) {
    e.preventDefault();
    this.messagesRef.push({
      username: this.state.username,
      content: this.state.content,
      sentAt: this.state.sentAt,
      roomId: this.state.roomId
    });
    this.setState({ username: "", content: "", sentAt: "", roomId: "" });
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat(message) })
    });
  }

  render() {
    const activeRoom = this.props.activeRoom;

    const messageBar = (
<<<<<<< HEAD
      <form onSubmit={this.createMessage => this.handleChange(e) } >
        <input type="text" value={this.state.content} onChange={ (e) => this.handleChange(e)} />
        <input type="submit" value={this.state.content} onChange={ (e) => this.handleChange(e)} />
      </form>
    );


    /*<form onSubmit={ (e) => this.handleSubmit(e) }>
      <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } /> */

    const messageList = (
      this.state.messages.map((message) => {
        if (message.roomId === activeRoom) {
          return <li key={message.key}>{message.content}</li>
=======
      <form onSubmit={this.createMessage}>
        <input type="text" value={this.state.content} placeholder="Enter Message" onChange={this.handleChange} />
        <input type="submit" value="Send" />
      </form>
    );

    const messageList = (
      this.state.messages.map((message) => {
        if (message.roomId === activeRoom) {
          return <li key={message.key}><h3>{message.username}:</h3>{message.content}</li>
>>>>>>> list-messages
        }
        return null;
      })
    );

<<<<<<< HEAD
    return(
      <div>
        <div>{messageBar}</div>
        <ul>{messageList}</ul>
=======
    return (
      <div>
        <div>{messageBar}</div>
        <div>{messageList}</div>
>>>>>>> list-messages
      </div>
    );
  }
}
<<<<<<< HEAD





export default MessageList
=======
>>>>>>> list-messages
