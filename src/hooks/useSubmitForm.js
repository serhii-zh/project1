import { useDispatch } from 'react-redux';
import { logInUser, registerUser } from '../store/thunks/userThunks';

export const useSubmitForm = (key) => {
  const dispatch = useDispatch();
  switch (key) {
    case 'editAccount':
      return (evt, formData) => {
        evt.preventDefault();

        console.log(formData);
      };
    case 'logIn':
      return (evt, formData, handleClose, isShown) => {
        evt.preventDefault();
        dispatch(logInUser(formData));
        handleClose(isShown);
      };
    case 'register':
      return (evt, formData, handleClose, isShown) => {
        evt.preventDefault();
        dispatch(registerUser(formData));
        handleClose(isShown);
      };
    default:
      break;
  }
};
