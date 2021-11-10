import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='alert alert-danger p-1 mt-1'>
          <div className=''>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // console.log(formProps) if you want to print the console assign the formProps as a argument to the renderInput(formProps) function;
    // console.log(meta);

    const className = `form-control ${meta.error && meta.touched ? 'border-danger' : ''}`;
    return (
      <div className='form-group '>
        <label>{label}</label>
        <input {...input} className={className} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    // console.log(formValues);
    this.props.onSubmit(formValues);
  };

  render() {
    // console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field name='description' component={this.renderInput} label='Enter Description' />
        <button className='btn btn-primary my-2'>Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate: validate,
})(StreamForm);
