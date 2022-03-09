const $button = document.querySelector('.button')
const $inputF = document.querySelector('.checkboxfahrenheit')
const $inputC = document.querySelector('.checkboxcelsius')
const $resposta = document.querySelector('.resposta')
const $contresposta = document.querySelector('.container-resposta')
const $inputVal = document.querySelector('.inputbox')
let conversao = 'nao escolhido'
let contrario = 'nao escolhido'

$inputF.addEventListener('input', inputFahrenheit)
function inputFahrenheit() {
  $resposta.textContent = 'Selecionado Fahrenheit'
  conversao = 'fahrenheit'
  contrario = 'celsius'
}
$inputC.addEventListener('input', inputCelsius)
function inputCelsius() {
  $resposta.textContent = 'Selecionado Celsius'
  conversao = 'celsius'
  contrario = 'fahrenheit'
}
$button.addEventListener('click', exeConvert)
function exeConvert(event) {
  event.preventDefault()
  if (conversao == 'fahrenheit') {
    valorInit = Number($inputVal.value)
    valorFinal = (valorInit * 9) / 5 + 32
    console.log(valorFinal)
    $resposta.textContent =
      'A transformação é de ' + valorInit + 'C para ' + valorFinal + 'F'
  } else if (conversao == 'celsius') {
    valorInit = Number($inputVal.value)
    valorFinal = ((valorInit - 32) * 5) / 9
    $resposta.textContent =
      'A transformação é de ' + valorInit + 'C para ' + valorFinal + 'C'
  } else {
    $resposta.textContent = 'Favor Selecionar uma das opções acima'
  }
}
