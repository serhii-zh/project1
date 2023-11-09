import styles from '../styles/components/FormComponent.module.css';
import eye from '../images/eye.png';
import crossedEye from '../images/crossed_eye.png';

export const FormComponent = ({ fields, showPassword, submitFormData }) => {
  return (
    <form
      className={styles.form}
      onSubmit={(evt) => {
        submitFormData(evt);
      }}
    >
      {fields.map((field) => (
        <div key={field.name} className={styles.formItem}>
          <label htmlFor={field.name}>
            <span>{field.placeholder}</span>
          </label>
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            placeholder={field.placeholder}
            pattern={field.pattern}
            required={field.required}
            autoFocus={field.autoFocus}
            value={field.value}
            onChange={field.onChange}
            onFocus={field.onFocus}
            onBlur={field.onBlur}
          />
          {field.type === 'password' && (
            <img
              src={showPassword ? eye : crossedEye}
              alt='Show/hide password'
              className={styles.showPassword}
              onClick={() => field.handleShowPassword()}
            />
          )}
          <p className={styles.infoMessage}>{field.message}</p>
        </div>
      ))}
    </form>
  );
};
