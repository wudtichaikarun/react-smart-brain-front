import React from 'react';

class Rank extends React.Component {
  constructor() {
    super();
    this.state = {
      emoji: ''
    };
  }

  generateEmoji = entries => {
    // get from aws lamda
    fetch(
      `https://xxwrx76qcj.execute-api.ap-southeast-1.amazonaws.com/prod/rank?rank=${entries}`
    )
      .then(res => res.json())
      .then(data => this.setState({ emoji: data.input }))
      .catch(console.log);
  };

  componentDidMount() {
    this.generateEmoji(this.props.entries);
  }

  componentDidUpdate(prevProps, PrevState) {
    if (
      prevProps.entries === this.props.entries &&
      prevProps.name === this.props.name
    ) {
      return null;
    }
    this.generateEmoji(this.props.entries);
  }

  render() {
    return (
      <div>
        <div className="white f3">
          {`${
            this.props.name
          }, your current entry count is...`}
        </div>
        <div className="white f1">{this.props.entries}</div>
        <div className="white f3">{`Rank Badge: ${
          this.state.emoji
        }`}</div>
      </div>
    );
  }
}

export default Rank;
