const $button = document.querySelector('.button')
const $selection = document.querySelector('.selectbox')
const $resposta = document.querySelector('.resposta')
const $contresposta = document.querySelector('.container-resposta')
const $inputVal = document.querySelector('.inputbox')
let conversao = $selection.value

$button.addEventListener('click', exeConvert)
function exeConvert(event) {
  event.preventDefault()
  let conversao = $selection.value
  if (conversao == 'celsius') {
    valorInit = Number($inputVal.value)
    valorFinal = (valorInit * 9) / 5 + 32
    console.log(valorFinal)
    $resposta.textContent =
      'A transformação é de ' + valorInit + 'C para ' + valorFinal + 'F'
  } else if (conversao == 'fahrenheit') {
    valorInit = Number($inputVal.value)
    valorFinal = ((valorInit - 32) * 5) / 9
    $resposta.textContent =
      'A transformação é de ' + valorInit + 'F para ' + valorFinal + 'C'
  } else {
    $resposta.textContent = 'Favor Selecionar uma das opções acima'
  }
}
