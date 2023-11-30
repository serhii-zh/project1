export const showLabel = (evt) => {
  const parentDiv = evt.target.closest('div');
  const pElement = parentDiv.querySelector('p');
  pElement.innerText = '';
  evt.target.placeholder = '';
  const spanEl = parentDiv.children[0].children[0];
  spanEl.style.visibility = 'visible';
};

export const checkForMissingData = (evt) => {
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

export const validateInputValue = (evt, formData, setFormData) => {
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

export const handleShowPassword = (id, setShowPassword) => {
  const passwordField = document.getElementById(id);

  if (passwordField.type === 'password') {
    setShowPassword(false);
    passwordField.type = 'text';
  } else {
    setShowPassword(true);
    passwordField.type = 'password';
  }
};
