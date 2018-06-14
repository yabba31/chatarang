import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import RoomLink from './RoomLink'
import base from './base'

class RoomList extends Component {
  state = {
    rooms: {}
  }

  componentDidMount() {
    base.syncState(
      'rooms',
      {
        context: this,
        state: 'rooms',
      }
    )
  }

  addRoom = (room) => {
    const rooms = {...this.state.rooms}
    rooms[room.name] = room
    this.setState({ rooms })
  }

  render() {
    return (
      <nav
        className={`RoomList ${css(styles.nav)}`}
      >
        <div className={css(styles.heading)}>
          <h2 className={css(styles.h2)}>Rooms</h2>
          <button
            className={css(styles.button)}
            onClick={() => this.addRoom({ name: 'fancy', description: 'for fancy talk' })}
          >
            <i className="fas fa-plus-circle" title="Add room"></i>
          </button>
        </div>
        <ul className={css(styles.list)}>
          {
            Object.keys(this.state.rooms).map(roomName => (
              <RoomLink
                key={roomName}
                room={this.state.rooms[roomName]}
                loadRoom={this.props.loadRoom}
              />
            ))
          }
        </ul>
      </nav>
    )
  }
}

const styles = StyleSheet.create({
  nav: {
    padding: '0 1rem',
  },

  h2: {
    fontSize: '1rem',
  },

  list: {
    listStyle: 'none',
    marginLeft: 0,
    paddingLeft: 0,
  },

  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    border: 0,
    backgroundColor: 'transparent',
    outline: 0,
    padding: 0,
    fontSize: '1rem',
    color: 'rgba(255,255,255, 0.4)',
    cursor: 'pointer',
    transition: 'color 0.25s ease-out',

    ':hover': {
      color: 'white',
    }
  },
})

export default RoomList