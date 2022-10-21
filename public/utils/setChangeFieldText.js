export function setChangeFieldText(elementText, element, falseCondition) {
  return elementText.innerText = element.value.length === 0 ? falseCondition : element.value;
}