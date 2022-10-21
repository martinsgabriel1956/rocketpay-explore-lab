import { colors, elements } from "../utils/index";

const { firstCreditCardBackgroundColor, secondCreditCardBackgroundColor, creditCardLogo } = elements;

export function setCardType(cardType) {
  firstCreditCardBackgroundColor.setAttribute("fill", colors[cardType][0]);
  secondCreditCardBackgroundColor.setAttribute("fill", colors[cardType][1]);
  creditCardLogo.setAttribute("src", `/assets/cc-${cardType}.svg`);
}