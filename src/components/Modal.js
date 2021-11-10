import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return (
    <div>
      <a href="" data-toggle="modal" data-target="#myModal">
        Click Here
      </a>
      <div className="modal fade" id="myModal" data-backdrop="static">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title font-weight-bold">{props.title}</h5>
              <button type="button" className="btn  close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">{props.content}</div>
            <div className="modal-footer">{props.actions}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.createPortal(<Modal />, document.querySelector("#modal"));

export default Modal;
