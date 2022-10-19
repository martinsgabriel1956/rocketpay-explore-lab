import "./src/styles/index.css";
import { setCardType, setAllInputMask } from './public/scripts/index';
import { elementsMasked } from './public/utils/index';

setCardType("default");
setAllInputMask(elementsMasked);

globalThis.setCardType = setCardType;