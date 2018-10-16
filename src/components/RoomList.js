import React, { Component } from 'react';

export class RoomList extends Component {
  constructor(props) {
    super(props);
      this.state = { title: "", rooms: [] };

    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.handleChange = this.handleChange.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  handleChange(e) {
<<<<<<< HEAD
      e.preventDefault();
      this.setState({ title : e.target.value});
  }

  createRoom(e) {
      e.preventDefault();
      let RoomName = this.state.newRoom;
      this.roomsRef.push({ title: this.state.title });
=======
    this.setState({ title: e.target.value });
  }

  createRoom(e) {
    e.preventDefault();
    this.roomsRef.push({ title: this.state.title });
>>>>>>> list-messages
    this.setState({ title: "" });
  }

  selectRoom(room) {
    this.props.activeRoom(room);
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat(room) })
    });
  }

  render() {
<<<<<<< HEAD
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
=======
    const roomForm = (
      <form onSubmit={this.createRoom}>
        <input type="text" value={this.state.title} placeholder="Enter Room Title" onChange={this.handleChange} />
        <input type="submit" value="Create" />
      </form>
    );

    const roomList = this.state.rooms.map((room) =>
      <li key={room.key} onClick={(e) => this.selectRoom(room, e)}>{room.title}</li>
    );

    return(
      <div>
        <div>{roomForm}</div>
        <ul>{roomList}</ul>
      </div>
    );
  }
>>>>>>> list-messages
}
