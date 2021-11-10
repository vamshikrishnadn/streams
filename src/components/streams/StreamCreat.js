import React from "react";
import { connect } from "react-redux";

import { creatStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.creatStream(formValues);
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <h3>Create A Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { creatStream })(StreamCreate);
