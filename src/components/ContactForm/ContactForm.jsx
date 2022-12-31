import React, { Component } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormBetter } from './ContactForm.styled';
import { BsPersonPlusFill } from 'react-icons/bs';
import { nanoid } from 'nanoid';

const schemaAddContact = Yup.object().shape({
  name: Yup.string().min(4).max(32).required(),
  number: Yup.string().min(4).max(13).required(),
});

const initialValues = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    const formdata = values;
    this.props.onSubmit({ id: nanoid(), ...formdata });
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schemaAddContact}
        onSubmit={this.handleSubmit}
      >
        <FormBetter>
          <label>
            Name
            <Field
              type="text"
              name="name"
              required
              autoComplete="false"
              placeholder="input your name"
            />
            <ErrorMessage component="div" name="name" />
          </label>
          <label>
            Number
            <Field
              type="tel"
              name="number"
              required
              placeholder="input your number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <ErrorMessage component="div" name="number" />
          </label>
          <button type="submit">
            <BsPersonPlusFill size={16} />
            Add contact
          </button>
        </FormBetter>
      </Formik>
    );
  }
}

export default ContactForm;
