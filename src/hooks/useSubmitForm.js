import { useDispatch } from 'react-redux';
import { logInUser, registerUser } from '../store/thunks/userThunks';

export const useSubmitForm = (key) => {
  const dispatch = useDispatch();
  switch (key) {
    case 'editAccountForm':
      return (evt, formData) => {
        evt.preventDefault();

        console.log(formData);
      };
    case 'logInForm':
      return (evt, formData, handleClose, isShown) => {
        evt.preventDefault();
        dispatch(logInUser(formData));
        handleClose(isShown);
      };
    case 'registerForm':
      return (evt, formData, handleClose, isShown) => {
        evt.preventDefault();
        dispatch(registerUser(formData));
        handleClose(isShown);
      };
    case 'shippingForm':
      return (evt, formData) => {
        console.log(formData);
      };
    default:
      break;
  }
};
