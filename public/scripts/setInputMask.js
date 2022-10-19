import { createElementMasked } from '../utils/index';

export function setAllInputMask(allElementsMaskedArr) {
  allElementsMaskedArr.map(({ element, mask }) => {
    return createElementMasked(element, mask);
  })
}