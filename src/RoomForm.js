import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

class RoomForm extends Component {
  state = {
    room: {
        name: '',
        description: ''
    },
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addRoom(this.state.room)
  }

  handleChange = (ev) => {
    const room = {...this.state.room}
    room[ev.target.name] = ev.target.value
    this.setState({ room })
  }

  render() {
    return (
      <div className={`RoomForm ${css(styles.roomForm)}`}>
        <main className={css(styles.main)}>
          <h2 className={css(styles.title)}>Create a room</h2>
          <form
            className={css(styles.form)}
            onSubmit={this.handleSubmit}
          >
            <p>
              <label htmlFor="name" className={css(styles.label)}>
                Room Name
              </label>
              <input
                type="text"
                name="name"
                value={this.state.room.name}
                className={css(styles.input)}
                onChange={this.handleChange}
                autoFocus
              />
            </p>
            <p>
              <label htmlFor="description" className={css(styles.label)}>
                Description
              </label>
              <input
                type="text"
                name="description"
                value={this.state.room.description}
                className={css(styles.input)}
                onChange={this.handleChange}
              />
            </p>
            <div className={css(styles.buttonContainer)}>
              <button
                type="button"
                className={css(styles.button, styles.cancel)}
       