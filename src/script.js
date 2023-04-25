document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('calc-display')
    const buttons = document.getElementsByClassName('btn')

    let currentValue = ""

    function evaluateResule() {
        console.log('currentValue: ', currentValue)
        const convertedValue = currentValue.replaceAll('x', '*')
        .replaceAll('÷', '/')
        .replaceAll('%', '*0.01')
        .replaceAll('sin', 'Math.sin')
        .replaceAll('ln', 'Math.log')
        .replaceAll('π', 'Math.PI')
        .replaceAll('cos', 'Math.cos')
        .replaceAll('log', 'Math.log10')
        .replaceAll('e', 'Math.E')
        .replaceAll('tan', 'Math.tan')
        .replaceAll('√', 'Math.sqrt')

        console.log('convertedValue: ', convertedValue)
        const result = eval(convertedValue)
        currentValue = result.toString()
        display.value = currentValue
    }

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i]
        button.addEventListener('click', () => {
            const value = button.innerText

            if (value === 'AC') {
                currentValue = ""
                display.value = currentValue
            } else if (value === '=') {
                evaluateResule()
            }
            else {
                // console.log('Current Value: ', value)
                currentValue += value
                display.value = currentValue
            }

        })
    }
})