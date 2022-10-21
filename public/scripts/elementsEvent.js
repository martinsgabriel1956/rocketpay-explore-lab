import { elements, elementsMasked, setChangeFieldText } from "../utils/index";
import { setAllInputMask } from "./index";

const {
  addCreditCardButton,
  form,
  cardHolder,
  cardHolderText,
  creditCardSecurityCodeText,
  creditCardNumberText,
  expirationDateText,
} = elements;
const { allInputMask } = setAllInputMask(elementsMasked);

export function setAllElementsEvents() {
  const creditCardSecurityCodeMasked = allInputMask[0].elementMasked;
  const expirationDateMasked = allInputMask[1].elementMasked;
  const cardNumberMasked = allInputMask[2].elementMasked;

  function handleClick() {
    alert("Parabéns!!, Você acabou de cadastrar um novo cartão.");
  }

  function handleAddCreditCard(event) {
    event.preventDefault();
  }

  addCreditCardButton.addEventListener("click", handleClick);
  form.addEventListener("submit", (event) => handleAddCreditCard(event));
  cardHolder.addEventListener("input", () =>
    setChangeFieldText(
      cardHolderText,
      { value: cardHolder.value },
      "FULANO DA SILVA"
    )
  );
  creditCardSecurityCodeMasked.on("accept", () => {
    setChangeFieldText(
      creditCardSecurityCodeText,
      {
        value: creditCardSecurityCodeMasked.value,
      },
      "123"
    );
  });
  cardNumberMasked.on("accept", () => {
    const cardType = cardNumberMasked.masked.currentMask.cardType;
    setCardType(cardType);
    setChangeFieldText(
      creditCardNumberText,
      { value: cardNumberMasked.value },
      "1234 5678 9012 3456"
    );
  });

  expirationDateMasked.on("accept", () => {
    setChangeFieldText(
      expirationDateText,
      { value: expirationDateMasked.value },
      "02/32"
    );
  });
}
