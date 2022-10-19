import Imask from 'imask'

export function createElementMasked(element, patternMask) {
  const elementMasked = Imask(element, patternMask);
  return { elementMasked };
}