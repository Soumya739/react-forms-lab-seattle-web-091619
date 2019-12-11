import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      message: "",
      character: props.maxChars
    };
  }

  handleMessage = (event) =>{
    console.log(event)
    let newMessage = event.target.value
    this.setState({message: newMessage, character: this.state.character -1})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleMessage(event)}/>
        <h6>character left: {this.state.character}</h6>
      </div>
    );
  }
}

export default TwitterMessage;
