import styles from '../styles/pages/ShoppingCartPage.module.css';
import { ShoppingCartItem } from '../components/ShoppingCartItem';
import { StyledButton } from '../components/ui/StyledButton';
import { useLocalStorageCart } from '../hooks/useLocalStorageCart';
import { FormComponent } from '../components/FormComponent';
import { currentUser } from '../store/slices/currentUserSlice';
import { useState } from 'react';
import {
  checkForMissingData,
  showLabel,
  validateInputValue,
} from '../services/formApi';
import { useNavigate } from 'react-router-dom';
import { useSubmitForm } from '../hooks/useSubmitForm';
import { useSelector } from 'react-redux';

export const ShoppingCartPage = () => {
  const navigate = useNavigate();
  const submitForm = useSubmitForm('shippingForm');
  const { itemsInCart, removeFromCart, updateQty } = useLocalStorageCart();
  const [formData, setFormData] = useState({});

  const totalPrice = itemsInCart.reduce((total, itemEntry) => {
    return total + itemEntry.item.price * itemEntry.itemQty;
  }, 0);

  const userData = useSelector(currentUser);

  const handleConfirmPurchase = (evt) => {
    console.log('confirm');
    submitForm(evt, formData);
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  const shippingFormFields = [
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
  ];

  return (
    <section className={styles.shoppingCartPage}>
      <h2 className={styles.pageTitle}>My Cart</h2>
      <div className={styles.cartContainer}>
        <div className={styles.addedItems}>
          {itemsInCart.map((cartItem) => (
            <ShoppingCartItem
              key={cartItem.item.id}
              cartItem={cartItem}
              onQtyUpdated={updateQty}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        <div className={styles.orderInfo}>
          <div className={styles.customerInfo}>
            <FormComponent fields={shippingFormFields} />
          </div>
          <div className={styles.totalInfo}>
            <div className={styles.totalEntry}>
              <div>Items:</div>
              <div>{itemsInCart.length}</div>
            </div>
            <div className={styles.totalEntry}>
              <div>Total:</div>
              <div>${totalPrice}</div>
            </div>
          </div>
          <div className={styles.orderButtons}>
            <StyledButton $orange={true} onClick={handleConfirmPurchase}>
              Confirm purchase
            </StyledButton>
            <StyledButton onClick={handleContinueShopping}>
              Continue shopping
            </StyledButton>
          </div>
        </div>
      </div>
    </section>
  );
};
