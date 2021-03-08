import React, { Component } from "react";

class Counter extends Component {
  //state = {
    //value: this.props.counter.value //,
    //tags: ["tag1", "tag2", "tag3"],
    //imageUrl: 'https://picsum.photos/200'
  //};
  //styles = {
  //  fontSize: 30,
  //  fontWeight: "bold"
  //} inside of div put style={{ fontSize: 30 }}

  /* 
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  } */
 
  // handleIncrement = () => {
    //console.log("Increment Clicked", this);
    // console.log();
    // console.log(this.props);
  //  this.setState({ value: this.state.value + 1 });
  //};

  render() {
    // console.log('props', this.props);
    // let classes = this.getBadgeClasses();
    // getBadgeClasses
    // select all code, right button and refractor > counter > give a name > enter
    // let classes = "badge m-2 badge-";
    // classes += this.state.count === 0 ? "warning" : "primary";
    return (
      <div>
        {/*<h4>{this.props.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btm-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/*
        <br></br>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;