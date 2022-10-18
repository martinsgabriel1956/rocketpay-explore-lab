import "./src/styles/index.css";
import { setCardType } from './public/scripts/setCardType';

setCardType("default");

globalThis.setCardType = setCardType;