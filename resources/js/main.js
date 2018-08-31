// set up of objects for the input fields containing html elements, variables to store the input and function calls to use the input
const parentObj = {
    floatElement: document.getElementById('floatselect'),
    floatValue: function () {
        return Number(this.floatElement.value)
    },
    outputSum: 5, // output sum starts at 5 to account for the assumption of dimes and nickels adding up to 5 dollars
    tenObj: {
        tenInputElement: document.getElementById('tenInput'),
        tenInput: 0,
        tenOutput: 0,
        tenCounter: 0,
        inputElement: function () {
            this.tenInputElement.addEventListener('blur', function (event) {
                parentObj.tenObj.tenInput = Number(event.target.value)
            })
            this.tenInputElement.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) {
                    parentObj.tenObj.tenInput = Number(event.target.value)
                    this.blur()
                }
            })
        }
    },
    fiveObj: {
        fiveInputElement: document.getElementById('fiveInput'),
        fiveInput: 0,
        fiveOutput: 0,
        fiveCounter: 0,
        inputElement: function() {
            this.fiveInputElement.addEventListener('blur', function (event) {
                parentObj.fiveObj.fiveInput = Number(event.target.value)
            })
            this.fiveInputElement.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) {
                    parentObj.fiveObj.fiveInput = Number(event.target.value)
                    this.blur()
                }
            })
        }
    },
    twoObj: {
        twoInputElement: document.getElementById('twoInput'),
        twoInput: 0,
        twoOutput: 0,
        twoCounter: 0,
        inputElement: function() {
            this.twoInputElement.addEventListener('blur', function (event) {
                parentObj.twoObj.twoInput = Number(event.target.value)
            })
            this.twoInputElement.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) {
                    parentObj.twoObj.twoInput = Number(event.target.value)
                    this.blur()
                }
            })
        }
    },
    oneObj: {
        oneInputElement: document.getElementById('oneInput'),
        oneInput: 0,
        oneOutput: 0,
        oneCounter: 0,
        inputElement: function() {
            this.oneInputElement.addEventListener('blur', function (event) {
                parentObj.oneObj.oneInput = Number(event.target.value)
            })
            this.oneInputElement.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) {
                    parentObj.oneObj.oneInput = Number(event.target.value)
                    this.blur()
                }
            })
        }
    },
    quarterObj: {
        quarterInputElement: document.getElementById('quarterInput'),
        quarterInput: 0,
        quarterOutput: 0,
        quarterCounter: 0,
        inputElement: function() {
            this.quarterInputElement.addEventListener('blur', function (event) {
                parentObj.quarterObj.quarterInput = Number(event.target.value)
            })
            this.quarterInputElement.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) {
                    parentObj.quarterObj.quarterInput = Number(event.target.value)
                    this.blur()
                }
            })
        }
    },
    resetCounter: function() {
        this.tenObj.tenCounter = 0
        this.fiveObj.fiveCounter = 0
        this.twoObj.twoCounter = 0
        this.oneObj.oneCounter = 0
        this.quarterObj.quarterCounter = 0
        this.dimesObj.dimesOutputCounter = 0
        this.nickelsObj.nickelsOutputCounter = 0
    },
    dimesObj: {
        dimesTrueElement: document.getElementById('dimesTrueInput'),
        dimesFalseElement: document.getElementById('dimesFalseElement'),
        dimesInput: 0,
        dimesOutput: 0,
        dimesSwitch: false,
        dimesOutputCounter: 0,
        dimesInRegister: function () {
            if (this.dimesTrueElement.checked === true) {
                this.dimesInput = 5
                this.dimesSwitch = true
            } else {
                this.dimesInput = 0
                this.dimesSwitch = false
            }
        }

    },
    nickelsObj: {
        nickelsTrueElement: document.getElementById('nickelsTrueInput'),
        nickelsFalseElement: document.getElementById('nickelsFalseInput'),
        nickelsInput: 0,
        nickelsOutput: 0,
        nickelsSwitch: false,
        nickelsOutputCounter: 0,
        nickelsInRegister: function () {
            if (this.nickelsTrueElement.checked === true) {
                this.nickelsInput = 2
                this.nickelsSwitch = true
                
            } else {
                this.nickelsInput = 0
                this.nickelsSwitch = false
            }
        }
    },
    inputSumFunc: function() {
        return (this.tenObj.tenInput * 10) + (this.fiveObj.fiveInput * 5) + (this.twoObj.twoInput * 2) + 
        (this.oneObj.oneInput) + (this.quarterObj.quarterInput / 4) + 5
    },
    calculateAll: function () {
        this.dimesObj.dimesInRegister()
        this.nickelsObj.nickelsInRegister()
        if (this.floatValue() === 500) {
            this.outputSum = this.inputSumFunc()
            this.tenObj.tenOutput = this.tenObj.tenInput
            this.fiveObj.fiveOutput = this.fiveObj.fiveInput
            this.twoObj.twoOutput = this.twoObj.twoInput
            this.oneObj.oneOutput = this.oneObj.oneInput
            this.quarterObj.quarterOutput = this.quarterObj.quarterInput
            this.outputSum += this.dimesObj.dimesInput + this.nickelsObj.nickelsInput 
            // since dimes and nickels are from a yes/no situation, I add them directly into the output at this step. if it's yes they are disregarded immediately in the while loop
            this.resetCounter()
            
            while (parentObj.outputSum < 500) {
                // initial if statements to get the inputs to the minimum allowance zone for the float
                if (parentObj.dimesObj.dimesSwitch === false && parentObj.outputSum + 5 <= 500) {
                    parentObj.dimesObj.dimesOutputCounter = 1
                    parentObj.dimesObj.dimesOutput = 5
                    parentObj.dimesObj.dimesSwitch = true
                    parentObj.outputSum += 5
                    continue
                }

                if (parentObj.nickelsObj.nickelsSwitch === false && parentObj.outputSum + 2 <= 500) {
                    parentObj.nickelsObj.nickelsOutputCounter = 1
                    parentObj.nickelsObj.nickelsOutput = 2
                    parentObj.nickelsObj.nickelsSwitch = true
                    parentObj.outputSum += 2
                    continue
                }

                if (parentObj.tenObj.tenOutput < 12 && parentObj.outputSum + 10 <= 500) {
                    parentObj.tenObj.tenOutput++
                    parentObj.tenObj.tenCounter++
                    parentObj.outputSum += 10
                    continue
                }

                if (parentObj.fiveObj.fiveOutput < 14 && parentObj.outputSum + 5 <= 500) {
                    parentObj.fiveObj.fiveOutput++
                    parentObj.fiveObj.fiveCounter++
                    parentObj.outputSum += 5
                    continue
                }
                
                if (parentObj.twoObj.twoOutput < 50 && parentObj.outputSum + 50 <= 500) {
                    parentObj.twoObj.twoOutput += 25
                    parentObj.twoObj.twoCounter++
                    parentObj.outputSum += 50
                    continue
                }

                if (parentObj.oneObj.oneOutput < 50 && parentObj.outputSum + 25 <= 500) {
                    parentObj.oneObj.oneOutput += 25
                    parentObj.oneObj.oneCounter++
                    parentObj.outputSum += 25
                    continue
                }

                if (parentObj.quarterObj.quarterOutput < 80 && parentObj.outputSum + 10 <= 500) {
                    parentObj.quarterObj.quarterOutput += 40
                    parentObj.quarterObj.quarterCounter++
                    parentObj.outputSum += 10
                    continue
                }
                //new if statements to bring the input values higher
                if (parentObj.quarterObj.quarterOutput + 40 <= 140 && parentObj.outputSum + 10 <= 500) {
                    parentObj.quarterObj.quarterOutput += 40
                    parentObj.quarterObj.quarterCounter++
                    parentObj.outputSum += 10
                    continue
                }

                if (parentObj.twoObj.twoOutput + 25 <= 75 && parentObj.outputSum + 50 <= 500) {
                    parentObj.twoObj.twoOutput += 25
                    parentObj.twoObj.twoCounter++
                    parentObj.outputSum += 50
                    continue
                }

                if (parentObj.oneObj.oneOutput + 25 <= 75 && parentObj.outputSum + 25 <= 500) {
                    parentObj.oneObj.oneOutput += 25
                    parentObj.oneObj.oneCounter++
                    parentObj.outputSum += 25
                    continue
                }

                if (parentObj.tenObj.tenOutput < 13 && parentObj.outputSum + 10 <= 500) {
                    parentObj.tenObj.tenOutput++
                    parentObj.tenObj.tenCounter++
                    parentObj.outputSum += 10
                    continue
                }

                if (parentObj.fiveObj.fiveOutput < 18 && parentObj.outputSum + 5 <= 500) {
                    parentObj.fiveObj.fiveOutput++
                    parentObj.fiveObj.fiveCounter++
                    parentObj.outputSum += 5
                    continue
                }

                if (parentObj.tenObj.tenOutput < 15 && parentObj.outputSum + 10 <= 500) {
                    parentObj.tenObj.tenOutput++
                    parentObj.tenObj.tenCounter++
                    parentObj.outputSum += 10
                    continue
                }

                // now the coin counts are in the max value, finish the float with five's and ten's. the ten statement is in such a way to create a balance between the two
                if (parentObj.tenObj.tenOutput + 2 < parentObj.fiveObj.fiveOutput && parentObj.outputSum + 10 <= 500) {
                    parentObj.tenObj.tenOutput++
                    parentObj.tenObj.tenCounter++
                    parentObj.outputSum += 10
                    continue
                }

                if (parentObj.outputSum + 5 <= 500) {
                    parentObj.fiveObj.fiveOutput++
                    parentObj.fiveObj.fiveCounter++
                    parentObj.outputSum += 5
                    continue
                }
                break  
            }
        }
        if (this.floatValue() === 250) {
            this.outputSum = this.inputSumFunc()
            this.tenObj.tenOutput = this.tenObj.tenInput
            this.fiveObj.fiveOutput = this.fiveObj.fiveInput
            this.twoObj.twoOutput = this.twoObj.twoInput
            this.oneObj.oneOutput = this.oneObj.oneInput
            this.quarterObj.quarterOutput = this.quarterObj.quarterInput
            this.outputSum += this.dimesObj.dimesInput + this.nickelsObj.nickelsInput 
            // since dimes and nickels are from a yes/no situation, I add them directly into the output at this step. if it's yes they are disregarded immediately in the while loop
            this.resetCounter()
            while (parentObj.outputSum < 250) {
                // initial if statements to get the inputs to the minimum allowance zone for the float, these values are all going to be roughly half of the 500 float value
                if (parentObj.dimesObj.dimesSwitch === false && parentObj.outputSum + 5 <= 250) {
                    parentObj.dimesObj.dimesOutputCounter = 1
                    parentObj.dimesObj.dimesOutput = 5
                    parentObj.dimesObj.dimesSwitch = true
                    parentObj.outputSum += 5
                    continue
                }

                if (parentObj.nickelsObj.nickelsSwitch === false && parentObj.outputSum + 2 <= 250) {
                    parentObj.nickelsObj.nickelsOutputCounter = 1
                    parentObj.nickelsObj.nickelsOutput = 2
                    parentObj.nickelsObj.nickelsSwitch = true
                    parentObj.outputSum += 2
                    continue
                }

                if (parentObj.tenObj.tenOutput < 6 && parentObj.outputSum + 10 <= 250) {
                    parentObj.tenObj.tenOutput++
                    parentObj.tenObj.tenCounter++
                    parentObj.outputSum += 10
                    continue
                }

                if (parentObj.fiveObj.fiveOutput < 7 && parentObj.outputSum + 5 <= 250) {
                    parentObj.fiveObj.fiveOutput++
                    parentObj.fiveObj.fiveCounter++
                    parentObj.outputSum += 5
                    continue
                }
                
                if (parentObj.twoObj.twoOutput < 25 && parentObj.outputSum + 50 <= 250) {
                    parentObj.twoObj.twoOutput += 25
                    parentObj.twoObj.twoCounter++
                    parentObj.outputSum += 50
                    continue
                }

                if (parentObj.oneObj.oneOutput < 25 && parentObj.outputSum + 25 <= 250) {
                    parentObj.oneObj.oneOutput += 25
                    parentObj.oneObj.oneCounter++
                    parentObj.outputSum += 25
                    continue
                }

                if (parentObj.quarterObj.quarterOutput < 40 && parentObj.outputSum + 10 <= 250) {
                    parentObj.quarterObj.quarterOutput += 40
                    parentObj.quarterObj.quarterCounter++
                    parentObj.outputSum += 10
                    continue
                }
                //new if statements to bring the input values higher
                if (parentObj.quarterObj.quarterOutput + 40 <= 100 && parentObj.outputSum + 10 <= 250) {
                    parentObj.quarterObj.quarterOutput += 40
                    parentObj.quarterObj.quarterCounter++
                    parentObj.outputSum += 10
                    continue
                }

                if (parentObj.twoObj.twoOutput + 25 <= 50 && parentObj.outputSum + 50 <= 250) {
                    parentObj.twoObj.twoOutput += 25
                    parentObj.twoObj.twoCounter++
                    parentObj.outputSum += 50
                    continue
                }

                if (parentObj.oneObj.oneOutput + 25 <= 50 && parentObj.outputSum + 25 <= 250) {
                    parentObj.oneObj.oneOutput += 25
                    parentObj.oneObj.oneCounter++
                    parentObj.outputSum += 25
                    continue
                }

                if (parentObj.tenObj.tenOutput < 7 && parentObj.outputSum + 10 <= 250) {
                    parentObj.tenObj.tenOutput++
                    parentObj.tenObj.tenCounter++
                    parentObj.outputSum += 10
                    continue
                }

                if (parentObj.fiveObj.fiveOutput < 11 && parentObj.outputSum + 5 <= 250) {
                    parentObj.fiveObj.fiveOutput++
                    parentObj.fiveObj.fiveCounter++
                    parentObj.outputSum += 5
                    continue
                }

                if (parentObj.tenObj.tenOutput < 9 && parentObj.outputSum + 10 <= 250) {
                    parentObj.tenObj.tenOutput++
                    parentObj.tenObj.tenCounter++
                    parentObj.outputSum += 10
                    continue
                }

                // now the coin counts are in the max value, finish the float with five's and ten's. the ten statement is in such a way to create a balance between the two
                if (parentObj.tenObj.tenOutput + 2 < parentObj.fiveObj.fiveOutput && parentObj.outputSum + 10 <= 250) {
                    parentObj.tenObj.tenOutput++
                    parentObj.tenObj.tenCounter++
                    parentObj.outputSum += 10
                    continue
                }

                if (parentObj.outputSum + 5 <= 250) {
                    parentObj.fiveObj.fiveOutput++
                    parentObj.fiveObj.fiveCounter++
                    parentObj.outputSum += 5
                    continue
                }
                break  
            }
        }
    }
}

parentObj.tenObj.inputElement()
parentObj.fiveObj.inputElement()
parentObj.twoObj.inputElement()
parentObj.oneObj.inputElement()
parentObj.quarterObj.inputElement()

const cashCalculateElement = document.getElementById('cashCalculate')
const cashDifferenceElement = document.getElementById('cashdifference')
const replenishElement = document.getElementById('replenish')
const registerElement = document.getElementById('registertotal')



cashCalculateElement.addEventListener('click', function () {
    parentObj.calculateAll()
    let totalInput = parentObj.inputSumFunc() + parentObj.dimesObj.dimesInput + parentObj.nickelsObj.nickelsInput
    // cashDifference's purpose is to find how much to take out of register, in regards to using 20's, 50's and 100's, to make up the float in the smaller denominations
    const cashDifference = function () {
        let difference = parentObj.outputSum - parentObj.inputSumFunc()
        let modulusDifference = difference%20
        if (modulusDifference !== 0) {
            difference = difference + (20 - modulusDifference)
            return difference
        }
        return difference
    }
    document.getElementById('cashOutput').innerHTML = ''
    cashDifferenceElement.innerHTML = ''
    cashDifferenceElement.innerHTML = `<b>$${cashDifference()}</b>`
    document.getElementById('cashOutput').innerHTML = `<p>$<b>${totalInput}</b></p>`
    replenishElement.innerHTML = ''
    registerElement.innerHTML = ''

    replenishElement.innerHTML = `<div class="floatflexbox"><p>$10's:</p><p><b>${parentObj.tenObj.tenCounter}</b></p></div>
                                <div class="floatflexbox"><p>$5's:</p><p><b>${parentObj.fiveObj.fiveCounter}</b></p></div>
                                <div class="floatflexbox"><p>Rolls of Toonies:</p><p><b>${parentObj.twoObj.twoCounter}</b></p></div>
                                <div class="floatflexbox"><p>Rolls of Loonies:</p><p><b>${parentObj.oneObj.oneCounter}</b></p></div>
                                <div class="floatflexbox"><p>Rolls of Quarters:</p><p><b>${parentObj.quarterObj.quarterCounter}</b></p></div>
                                <div class="floatflexbox"><p>Rolls of Dimes:</p><p><b>${parentObj.dimesObj.dimesOutputCounter}</b></p></div>
                                <div class="floatflexbox"><p>Rolls of Nickels:</p><p><b>${parentObj.nickelsObj.nickelsOutputCounter}</b></p></div>`

    registerElement.innerHTML = `<div class="totalflexbox"><p>$10's:</p><p><b>${parentObj.tenObj.tenOutput}</b></p></div>
                                <div class="totalflexbox"><p>$5's:</p><p><b>${parentObj.fiveObj.fiveOutput}</b></p></div>
                                <div class="totalflexbox"><p>Toonies:</p><p><b>${parentObj.twoObj.twoOutput}</b></p></div>
                                <div class="totalflexbox"><p>Loonies:</p><p><b>${parentObj.oneObj.oneOutput}</b></p></div>
                                <div class="totalflexbox"><p>Quarters:</p><p><b>${parentObj.quarterObj.quarterOutput}</b></p></div>
                                <div class="totalflexbox"><p>Nickels and Dimes:</p><p>$<b>12</b></p></div>
                                <div class="totalflexbox"><p>Total float:</p><p>$<b class="totalfloat">${parentObj.outputSum}</b></p></div>`
})