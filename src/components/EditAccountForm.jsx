import { FormComponent } from './FormComponent';
import styles from '../styles/components/EditAccountForm.module.css';
import { currentUser } from '../store/slices/currentUserSlice';
import { useState } from 'react';
import { useSubmitForm } from '../hooks/useSubmitForm';
import {
  showLabel,
  checkForMissingData,
  validateInputValue,
  handleShowPassword,
} from '../services/formApi.js';
import { useSelector } from 'react-redux';

export const EditAccountForm = () => {
  const submitForm = useSubmitForm('editAccountForm');
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(true);
  const userData = useSelector(currentUser);

  const userInfoFormFields = [
    {
      type: 'text',
      name: 'fullName',
      placeholder: 'Full Name',
      pattern: '^[a-zA-Z\\s]*$',
      value: userData.fullName ? userData.fullName : undefined,
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
      value: userData.email ? userData.email : undefined,
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
      value: userData.phone ? userData.phone : undefined,
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
      value: userData.country ? userData.country : undefined,
      onChange: (evt) => validateInputValue(evt, formData, setFormData),
      onFocus: showLabel,
    },
    {
      type: 'text',
      name: 'city',
      placeholder: 'City',
      pattern: '^[a-zA-Z\\s]*$',
      value: userData.city ? userData.city : undefined,
      onChange: (evt) => validateInputValue(evt, formData, setFormData),
      onFocus: showLabel,
    },
    {
      type: 'text',
      name: 'address',
      placeholder: 'Address',
      pattern: '^[a-zA-Z0-9\\s.,/]*$',
      value: userData.address ? userData.address : undefined,
      onChange: (evt) => validateInputValue(evt, formData, setFormData),
      onFocus: showLabel,
    },
    {
      type: 'submit',
      name: 'saveMainInformation',
      value: 'Save',
    },
  ];

  const userPasswordFormFields = [
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
        <FormComponent
          fields={userInfoFormFields}
          submitFormData={(evt) => submitForm(evt, formData)}
        />
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Change Password</div>
        <FormComponent
          fields={userPasswordFormFields}
          showPassword={showPassword}
          submitFormData={(evt) => submitForm(evt, formData)}
        />
      </div>
    </div>
  );
};
