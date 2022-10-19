import Imask from 'imask';

export const elementsPatternMask = {
  cvc: {
    mask: "0000",
  },
  expirationDate: {
    mask: "MM{/}YY",
    blocks: {
      YY: {
        mask: IMask.MaskedRange,
        from: String(new Date().getFullYear()).slice(2),
        to: String(new Date().getFullYear() + 10).slice(2),
      },
      MM: {
        mask: Imask.MaskedRange,
        from: 1,
        to: 12
      }
    }
  },
  cardNumber: {
    mask: [
      {
        mask: "0000 0000 0000 0000",
        regex: /^4\d{0,15}/,
        cardType: "visa"
      },
      {
        mask: "0000 0000 0000 0000",
        regex: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
        cardType: "mastercard"
      },
      {
        mask: "0000 0000 0000 0000",
        cardType: "default"
      },
    ],
    dispatch: (appended, dynamicMasked) => {
      const number = (dynamicMasked.value + appended).replace(/\D/g, "");
      const foundMask = dynamicMasked.compiledMasks.find(({ regex }) => number.match(regex));

      return foundMask;
    }
  }
}