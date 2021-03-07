import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
    //imageUrl: 'https://picsum.photos/200'
  };
  //styles = {
  //  fontSize: 30,
  //  fontWeight: "bold"
  //} inside of div put style={{ fontSize: 30 }}

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //

  handleIncrement = () => {
    //console.log("Increment Clicked", this);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    // let classes = this.getBadgeClasses();
    // getBadgeClasses
    // select all code, right button and refractor > counter > give a name > enter
    // let classes = "badge m-2 badge-";
    // classes += this.state.count === 0 ? "warning" : "primary";
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btm-sm"
        >
          Increment
        </button>
        <br></br>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
