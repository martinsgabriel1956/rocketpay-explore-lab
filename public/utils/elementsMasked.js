import { elements } from '../utils/elements';
import { elementsPatternMask } from '../utils/elementsPatternMask'

const { cvcInput, expirationDateInput, cardNumberInput } = elements;

export const elementsMasked = [
  {
    element: cvcInput,
    mask: elementsPatternMask.cvc
  },
  {
    element: expirationDateInput,
    mask: elementsPatternMask.expirationDate
  },
  {
    element: cardNumberInput,
    mask: elementsPatternMask.cardNumber
  },
]