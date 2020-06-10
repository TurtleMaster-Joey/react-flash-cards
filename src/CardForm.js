import React from "react";

class CardForm extends React.Component {
  state = { question: "", answer: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({ question: "", answer: "" });
  };
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value,});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.question}
          name="question"
          onChange={this.handleChange}
          required
          placeholder="Add a question"
        />
        <input
          value={this.state.answer}
          name="answer"
          onChange={this.handleChange}
          required
          placeholder="Add an answer"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default CardForm;