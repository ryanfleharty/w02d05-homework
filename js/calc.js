const $ = jQuery
$(document).ready(() => {

  $('.operator-btn').on('click', (e) => {
    let current = $('#display-field').val()
    //if the last character in the display is not an operator
    let lastChar = current.charAt(current.length -1)
    let opperator = e.target.innerText
    if(lastChar != '/' || lastChar != '*' || lastChar != '+' || lastChar != '-' ) {
      current += opperator
      $('#display-field').val(current)
    }
  })

  $('.digit-btn').on('click', (e) => {
    let current = $('#display-field').val()
    let digit = e.target.innerText
    current += digit
    $('#display-field').val(current)
  })

  $('.equals-btn').on('click', (e) => {
    let current = $('#display-field').val()
    let total = eval(current)
    $('#display-field').val(total)



  })
  $('.clear-btn').on('click', (e) => {
    $('#display-field').val('')
  })

})
