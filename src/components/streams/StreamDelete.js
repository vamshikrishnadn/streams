import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';
import { connect } from 'react-redux';

class StreamDelete extends React.Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const id = this.props.match.params.id;
    return (
      <div>
        <button
          className='btn btn-danger'
          onClick={() => this.props.deleteStream(id)}
          data-dismiss='modal'
        >
          Delete
        </button>
        <button
          className='btn btn-primary ml-2'
          data-dismiss='modal'
          onClick={() => history.push('/')}
        >
          Cancel
        </button>
      </div>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you wnat to delete this stream?';
    }
    return `Are you sure you wnat to delete this stream? With Title: '${this.props.stream.title}'`;
  }

  render() {
    return (
      <div className='d-flex'>
        <span>To Delete your data &nbsp;</span>
        <Modal
          title='Delete Stream'
          content={this.renderContent()}
          actions={this.renderActions()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
