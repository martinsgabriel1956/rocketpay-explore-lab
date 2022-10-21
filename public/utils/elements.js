export const elements = {
  firstCreditCardBackgroundColor: document.querySelector('.cc-bg svg > g g:nth-child(1) path'),
  secondCreditCardBackgroundColor: document.querySelector('.cc-bg svg > g g:nth-child(2) path'),
  creditCardLogo: document.querySelector('.cc-logo span:nth-child(2) img'),
  cvcInput: document.querySelector('#security-code'),
  expirationDateInput: document.querySelector('#expiration-date'),
  cardNumberInput: document.querySelector('#card-number'),
  addCreditCardButton: document.querySelector('#add-card'),
  form: document.querySelector('form'),
  cardHolder: document.querySelector('#card-holder'),
  cardHolderText: document.querySelector('.cc-holder .value'),
  creditCardSecurityCodeText: document.querySelector('.cc-security .value'),
  creditCardNumberText: document.querySelector('.cc-number'),
  expirationDateText: document.querySelector('.cc-extra .cc-expiration .value'),
}