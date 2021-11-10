import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div>
          <Link
            className="btn btn-sm btn-info m-2"
            to={`/stream/edit/${stream.id}`}
          >
            EDIT
          </Link>
          <Link
            to={`/stream/delete/${stream.id}`}
            className="btn btn-sm btn-danger"
          >
            DELETE
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div key={stream.id}>
          <div className="row">
            <div className="col-1 m-auto">
              <i className="large middle aligned icon camera"></i>
            </div>
            <div className="col-8 m-auto">
              <Link to={`/stream/${stream.id}`} className="font-weight-bold">
                {stream.title}
              </Link>
              <div>{stream.description} </div>
            </div>
            <div className="col-3">{this.renderAdmin(stream)}</div>
          </div>
          <hr />
        </div>
      );
    });
  }

  renderUser() {
    if (this.props.isSignedIn) {
      return (
        <div className="text-right m-2">
          <Link to="/stream/new" exact className="btn btn-primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    // console.log(this.props.streams);
    return (
      <div>
        <h3>Streams</h3>
        <div>{this.renderList()}</div>
        <div>{this.renderUser()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
