import React, { useState } from 'react';
import PropTypes from 'prop-types';

/*
  INSTRUCTIONS:
  Create a "todo" app with the following criteria.
    1. The user can add new todo items
    2. The user can remove todo items
*/
function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (evt) => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );

    setInput('');
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="New Todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul>
        {todos.map(({ text, id }) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => removeTodo()}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

class InputPhrase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phrase: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.word);

    console.log(this.state.phrase);
  }
  handleChange(event) {
    this.setState({
      phrase: event.target.value,
    });
  }
  render() {
    return (
      <form className="column player" onSubmit={this.handleSubmit}>
        <label htmlFor="username" className="player-label">
          {this.props.label}
        </label>
        <div className="row player-inputs">
          <input
            type="text"
            id="phrase"
            className="input-light"
            placeholder="add phrase"
            autoComplete="off"
            value={this.state.phrase}
            onChange={this.handleChange}
          />
          <button
            className="btn dark-btn"
            type="submit"
            disabled={!this.state.phrase}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

InputPhrase.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default class CreatePhrase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phrases: [],
      batch: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleSubmit(id, phrase) {
    this.setState({
      [id]: phrase,
    });
  }
  handleReset() {
    this.setState({
      [id]: null,
    });
  }
  render() {
    return (
      <div className="players-container">
        <h1 className="center-text header-lg">Create Phrase</h1>
        <InputPhrase
          label="Phrase"
          onSubmit={(phrase) => this.handleSubmit('phrase', phrase)}
        />
      </div>
    );
  }
}
