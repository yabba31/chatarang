import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import 'bad-words'

class MessageForm extends Component {
  state = {
    body: '',
  }

  handleSubmit = (ev) => {
    ev.preventDefault()

    //handle word censoration
    const Filter = require('bad-words'),
    filter = new Filter();
    filter.addWords(['heck', 'frick'])
    const censoredBody = filter.clean(this.state.body)


    this.props.addMessage(censoredBody, false)
    this.setState({ body: '' })
  }

  handleImage = (ev) => {
    const fileReader = new FileReader()
    const file = ev.target.files[0]
    fileReader.readAsDataURL(file)
    fileReader.onloadend = () => this.props.addMessage(fileReader.result, true)
  }

  handleChange = (ev) => {
    this.setState({ body: ev.target.value })
  }

  render() {
    return (
      <form
        className={`MessageForm ${css(styles.form)}`}
        onSubmit={this.handleSubmit}
      >
        <div className={css(styles.icon)}>
          <i className="fas fa-comment-alt"></i>
          <label htmlFor="image_uploads">
            <i 
              className="fas fa-image" 
              style = {{marginLeft: "5px"}}
            ></i>
          </label>
          <input 
            type="file" 
            id="image_uploads" 
            name="image_uploads" 
            style = {{display: 'none'}}
            onChange = {(ev) => this.handleImage(ev)}
            accept=".jpg, .jpeg, .png"
          />
          </div>

        <input
          type="text"
          name="body"
          placeholder="Type a message..."
          autoFocus
          value={this.state.body}
          onChange={this.handleChange}
          className={css(styles.input)}
        />
        <button type="submit" className={css(styles.button)}>Send</button>
      </form>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'white',
    height: '3rem',
    display: 'flex',
    alignItems: 'stretch',
    border: '2px solid #999',
    borderRadius: '0.5rem',
    margin: '0.25rem',
    padding: 0,
  },

  icon: {
    display: 'flex',
    borderRadius: '0.5rem',
    alignItems: 'center',
    backgroundColor: 'white',
    color: '#ccc',
    padding: '0 0.5rem',
    fontSize: '1.2rem',
  },

  input: {
    flex: 1,
    fontSize: '1.2rem',
    border: 0,

    ':focus': {
      outline: 0,
    },
  },

  button: {
    fontSize: '1.5rem',
    backgroundColor: '#1A8FE3',
    color: 'white',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderTopRightRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
    border: '1px solid white',
  },
})

export default MessageForm