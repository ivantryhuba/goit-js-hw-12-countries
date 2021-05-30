// * Возвращаем рефы во внешний код
export default function getRefs() {
  return {
    input: document.querySelector('.js-input'),
    cardCont: document.querySelector('.js-card-container'),
  };
};