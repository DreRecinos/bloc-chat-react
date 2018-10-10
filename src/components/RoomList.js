import React, { Component } from 'react';

export class RoomList extends Component {
  constructor(props) {
    super(props);
      this.state = {
        rooms: [], title: ""
      };

    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.handleChange = this.handleChange.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  handleChange(e) {
      this.setState({ title : e.target.value});
  }

  createRoom(e) {
   		let RoomName = this.state.newRoom;
      this.roomsRef.push({ title: this.state.title });
    this.setState({ title: "" });
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
    });
  }

  render() {
    const roomForm = (
      <form onSubmit={this.createRoom}>
        <input type="text" value={this.state.title} placeholder="New Room Name" onChange={this.handleChange}/>
        <input type="submit" value="New Chat" />
      </form>
    );

    const roomList = this.state.rooms.map((room) =>
      <li key={room.key}>{room.name}{room.title}</li>
    );

    return(
      <div>
        <div>{roomForm}</div>
        <ul>{roomList}</ul>
      </div>
    );
  }
}

export default RoomList;
