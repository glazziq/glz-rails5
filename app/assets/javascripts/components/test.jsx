let React = require('react');

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false };
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ toggled: !this.state.toggled });
  }

  render() {
    let handleClick = this.handleClick.bind(this);

    let toggleContent;
    if (this.state.toggled) {
      toggleContent = <p>Hi!</p>;
    }

    return <div className="test">
        <a href="#" onClick={handleClick}>Hello World</a>
        {toggleContent}
      </div>;
  }
}

export default Test;
