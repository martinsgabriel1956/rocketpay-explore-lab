import { createElementMasked } from '../utils/index';

export function setAllInputMask(allElementsMaskedArr) {
  const allInputMask = allElementsMaskedArr.map(({ element, mask }) => {
    return createElementMasked(element, mask);
  })

  return { allInputMask }
}