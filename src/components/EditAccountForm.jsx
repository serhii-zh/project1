import { FormComponent } from './FormComponent';
import styles from '../styles/components/EditAccountForm.module.css';
import { currentUser } from '../store/slices/currentUserSlice';
import { useState } from 'react';
import {
  showLabel,
  checkForMissingData,
  validateInputValue,
  handleShowPassword,
} from '../services/formApi.js';

export const EditAccountForm = () => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(true);

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
      onChange: (evt) => validateInputValue(evt, formData, setFormData),
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
      onChange: (evt) => validateInputValue(evt, formData, setFormData),
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
      onChange: (evt) => validateInputValue(evt, formData, setFormData),
      onFocus: showLabel,
      onBlur: checkForMissingData,
    },
    {
      type: 'text',
      name: 'country',
      placeholder: 'Country',
      pattern: '^[a-zA-Z\\s]*$',
      value: currentUser.country ? currentUser.country : undefined,
      onChange: (evt) => validateInputValue(evt, formData, setFormData),
      onFocus: showLabel,
    },
    {
      type: 'text',
      name: 'city',
      placeholder: 'City',
      pattern: '^[a-zA-Z\\s]*$',
      value: currentUser.city ? currentUser.city : undefined,
      onChange: (evt) => validateInputValue(evt, formData, setFormData),
      onFocus: showLabel,
    },
    {
      type: 'text',
      name: 'address',
      placeholder: 'Address',
      pattern: '^[a-zA-Z0-9\\s.,/]*$',
      value: currentUser.address ? currentUser.address : undefined,
      onChange: (evt) => validateInputValue(evt, formData, setFormData),
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
      id: 'currentPassword',
      placeholder: 'Current password',
      pattern: '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]+$',
      required: true,
      onChange: (evt) => validateInputValue(evt, formData, setFormData),
      onFocus: showLabel,
      handleShowPassword: () =>
        handleShowPassword('currentPassword', setShowPassword),
    },
    {
      type: 'password',
      name: 'newPassword',
      id: 'newPassword',
      placeholder: 'New password',
      pattern: '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]+$',
      required: true,
      onChange: (evt) => validateInputValue(evt, formData, setFormData),
      onFocus: showLabel,
      handleShowPassword: () =>
        handleShowPassword('newPassword', setShowPassword),
    },
    {
      type: 'password',
      name: 'confirmPassword',
      id: 'confirmPassword',
      placeholder: 'Confirm password',
      pattern: '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]+$',
      required: true,
      onChange: (evt) => validateInputValue(evt, formData, setFormData),
      onFocus: showLabel,
      handleShowPassword: () =>
        handleShowPassword('confirmPassword', setShowPassword),
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
        <FormComponent
          fields={fields2}
          showPassword={showPassword}
          submitFormData={submitFormData}
        />
      </div>
    </div>
  );
};
