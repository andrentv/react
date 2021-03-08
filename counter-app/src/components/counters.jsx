import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
           className="btn btn-primary btn-sm m-2">Reset</button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
            /* For group all properties use counter ={counter}
            set other places in children too
            value={counter.value}
            id={counter.id}
            selected={counter.selected} */
          />
        ))}
      </div>
    );
  }
}

export default Counters;
