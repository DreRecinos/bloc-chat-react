import React, { Component } from 'react';

export class MessageList extends Component {
  constructor(props) {
    super(props);
      this.state = {
        username: "<USERNAME HERE>",
        content: "<CONTENT OF THE MESSAGE HERE>",
        sentAt: "<TIME MESSAGE WAS SENT HERE>",
        roomId: "<ROOM UID HERE>"
      }

    this.messageRef = this.props.firebase.database().ref('message');
    this.handleChange = this.handleChange.bind(this);
    this.createMessage = this.createRoom.bind(this);
  }
}

handleChange(e) {
    e.preventDefault()
    this.setState({
      username : e.target.value
      content : e.target.value});
      sentAt: this.props.firebase.database.ServerValue.timeStamp,
      roomId: this.props.activeRoom
    });
}

  createMessage(e) {
      e.preventDefault();
      let NewMessage = this.state.content;
      this.messageRef.push({ title: this.state.title });
       this.setState({ title: "" });
  }

  componentDidMount() {
      this.messageRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ rooms: this.state.messages.concat( message ) })
    });
  }



  render() {

    const activeRoom = this.props.activeRoom;

    const messageForm = (
      <form onSubmit={this.createMessage}>
        <input type="text" value={this.state.roomId} onChange={this.handleChange}/>
        <input type="text" value={this.state.content} onChange={this.handleChange}/>
        <input type="text" value={this.state.username} onChange={this.handleChange}/>
        <input type="text" value={this.state.sentAt} onChange={this.handleChange}/>
        <input type="submit" value="reply" />
      </form>
    );

    const messageList = (
    this.state.messages.map((message) => {
      if (message.roomId === activeRoom) {
        return <li key={message.key}>{message.content}</li>
      }
    })
  );

  return(
    <div>
      <div>{messageBar}</div>
      <ul>{messageList}</ul>
      <ul>{
    </div>
  );
}
}



  export default MessageList;
