import FormComponent from './FormComponent';
import styles from '../styles/components/EditAccountForm.module.css';
import { currentUser } from '../store/slices/currentUserSlice';
import { useState } from 'react';

const EditAccountForm = () => {
  const [formData, setFormData] = useState({});

  const showLabel = (evt) => {
    const parentDiv = evt.target.closest('div');
    const pElement = parentDiv.querySelector('p');
    pElement.innerText = '';
    evt.target.placeholder = '';
    const spanEl = parentDiv.children[0].children[0];
    spanEl.style.visibility = 'visible';
  };

  const validateInputValue = (evt) => {
    const parentDiv = evt.target.closest('div');
    const spanEl = parentDiv.children[0].children[0];
    const pattern = evt.target.pattern;

    if (evt.target.value.match(pattern)) {
      setFormData({
        ...formData,
        [evt.target.name]: evt.target.value,
      });

      spanEl.style.color = '#707070';
      evt.target.style.borderColor = '#707070';
    } else {
      spanEl.style.color = 'red';
      evt.target.style.borderColor = 'red';
    }
  };

  const checkForMissingData = (evt) => {
    const parentDiv = evt.target.closest('div');
    const spanEl = parentDiv.children[0].children[0];
    const pElement = parentDiv.querySelector('p');

    if (!evt.target.value) {
      pElement.innerText = '';
      pElement.innerText = 'The required data is missing';
      pElement.style.color = 'red';
      evt.target.style.borderColor = 'red';
      spanEl.style.color = 'red';
      parentDiv.append(pElement);
    } else {
      pElement.innerText = '';
    }
  };

  const submitFormData = (evt) => {
    evt.preventDefault();
    console.log(formData);
  };

  const fields1 = [
    {
      type: 'text',
      name: 'fullName',
      placeholder: 'Full Name',
      pattern: '^[a-zA-Z\\s]*$',
      value: currentUser.fullName ? currentUser.fullName : undefined,
      required: true,
      onChange: validateInputValue,
      onFocus: showLabel,
      onBlur: checkForMissingData,
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'Email',
      pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
      value: currentUser.email ? currentUser.email : undefined,
      required: true,
      onChange: validateInputValue,
      onFocus: showLabel,
      onBlur: checkForMissingData,
    },
    {
      type: 'tel',
      name: 'phone',
      placeholder: 'Phone',
      pattern: '^(\\+)?([0-9]){10,14}$',
      value: currentUser.phone ? currentUser.phone : undefined,
      required: true,
      onChange: validateInputValue,
      onFocus: showLabel,
      onBlur: checkForMissingData,
    },
    {
      type: 'text',
      name: 'country',
      placeholder: 'Country',
      pattern: '^[a-zA-Z\\s]*$',
      value: currentUser.country ? currentUser.country : undefined,
      onChange: validateInputValue,
      onFocus: showLabel,
    },
    {
      type: 'text',
      name: 'city',
      placeholder: 'City',
      pattern: '^[a-zA-Z\\s]*$',
      value: currentUser.city ? currentUser.city : undefined,
      onChange: validateInputValue,
      onFocus: showLabel,
    },
    {
      type: 'text',
      name: 'address',
      placeholder: 'Address',
      pattern: '^[a-zA-Z0-9\\s.,/]*$',
      value: currentUser.address ? currentUser.address : undefined,
      onChange: validateInputValue,
      onFocus: showLabel,
    },
    {
      type: 'submit',
      name: 'saveMainInformation',
      value: 'Save',
    },
  ];

  const fields2 = [
    {
      type: 'password',
      name: 'currentPassword',
      placeholder: 'Current password',
      pattern: '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]+$',
      required: true,
      onChange: validateInputValue,
      onFocus: showLabel,
    },
    {
      type: 'password',
      name: 'newPassword',
      placeholder: 'New password',
      pattern: '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]+$',
      required: true,
      onChange: validateInputValue,
      onFocus: showLabel,
    },
    {
      type: 'password',
      name: 'confirmPassword',
      placeholder: 'Confirm password',
      pattern: '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]+$',
      required: true,
      onChange: validateInputValue,
      onFocus: showLabel,
    },
    {
      type: 'submit',
      name: 'savePassword',
      value: 'Save',
    },
  ];

  return (
    <div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Main Information</div>
        <FormComponent fields={fields1} submitFormData={submitFormData} />
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Change Password</div>
        <FormComponent fields={fields2} submitFormData={submitFormData} />
      </div>
    </div>
  );
};

export default EditAccountForm;
