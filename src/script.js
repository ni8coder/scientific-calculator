document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('calc-display')
    const buttons = document.getElementsByClassName('btn')

    let currentValue = ""
    let lastAnswer = 0

    function calculateFactorial(n) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    function evaluateResule() {
        console.log('currentValue: ', currentValue)
        let convertedValue = currentValue.replaceAll('x', '*')
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
            .replaceAll('^', '**')
            .replaceAll('Ans', lastAnswer)

        //check if factorial is added
        const matches = currentValue.match(/\w*!\w*/g);
        if (matches) {
            matches.forEach((factorial) => {
                const val = factorial.replaceAll('!', '')
                let result = calculateFactorial(val)
                convertedValue = convertedValue.replaceAll(factorial, result)
            })
        }

        console.log('convertedValue: ', convertedValue)
        const result = eval(convertedValue)
        currentValue = result.toString()
        display.value = currentValue
        lastAnswer = currentValue
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
                console.log('Current Value: ', value)
                if (value == 'EXP') {
                    currentValue += 'E'
                } else if (value == 'xy') {
                    currentValue += '^'
                } else if (value == 'x!') {
                    currentValue += '!'
                } else {
                    currentValue += value
                }

                display.value = currentValue
            }

        })
    }
})