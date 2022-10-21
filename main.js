import "./src/styles/index.css";
import { setCardType, setAllElementsEvents } from './public/scripts/index';

setCardType("default");
setAllElementsEvents();

globalThis.setCardType = setCardType;