// set up of objects for the input fields containing html elements, variables to store the input and function calls to use the input
const parentObj = {
    inputSum: 5, // input sum starts at 5 as dimes and nickels are assumed to add up to 5 dollars
    outputSum: 5, // output sum starts the same as inputsum, using two properties here to keep the cash in the register where its at from inputed values incase of pressing the calculate button twice
    tenObj: {
        tenInputElement: document.getElementById('tenInput'),
        tenInput: 0,
        tenOutput: 0,
        tenCounter: 0,
        inputElement: function () {
            this.tenInputElement.addEventListener('blur', function (event) {
                // if (parentObj.tenObj.tenInput !== 0) {
                //     parentObj.inputSum -= (parentObj.tenObj.tenInput * 10)
                //     parentObj.outputSum -= (parentObj.tenObj.tenInput * 10)
                // }
                parentObj.tenObj.tenInput = Number(event.target.value)
                // parentObj.tenObj.tenOutput = Number(event.target.value)
                // parentObj.inputSum += (Number(event.target.value) * 10)
                // parentObj.outputSum += (Number(event.target.value) * 10)
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
                // if (parentObj.fiveObj.fiveInput !== 0) {
                //     parentObj.inputSum -= (parentObj.fiveObj.fiveInput * 5)
                //     parentObj.outputSum -= (parentObj.fiveObj.fiveInput * 5)
                // }
                parentObj.fiveObj.fiveInput = Number(event.target.value)
                // parentObj.fiveObj.fiveOutput = Number(event.target.value)
                // parentObj.inputSum += (Number(event.target.value) * 5)
                // parentObj.outputSum += (Number(event.target.value) * 5)
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
                // if (parentObj.twoObj.twoInput !== 0) {
                //     parentObj.inputSum -= (parentObj.twoObj.twoInput * 2)
                //     parentObj.outputSum -= (parentObj.twoObj.twoInput * 2)
                // }
                parentObj.twoObj.twoInput = Number(event.target.value)
                // parentObj.twoObj.twoOutput = Number(event.target.value)
                // parentObj.inputSum += (Number(event.target.value) * 2)
                // parentObj.outputSum += (Number(event.target.value) * 2)
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
                // if (parentObj.oneObj.oneInput !== 0) {
                //     parentObj.inputSum -= parentObj.oneObj.oneInput
                //     parentObj.outputSum -= parentObj.oneObj.oneInput
                // }
                parentObj.oneObj.oneInput = Number(event.target.value)
                // parentObj.oneObj.oneOutput = Number(event.target.value)
                // parentObj.inputSum += Number(event.target.value)
                // parentObj.outputSum += Number(event.target.value)
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
                // if (parentObj.quarterObj.quarterInput !== 0) {
                //     parentObj.inputSum -= (parentObj.quarterObj.quarterInput / 4)
                //     parentObj.outputSum -= (parentObj.quarterObj.quarterInput / 4)
                // }
                parentObj.quarterObj.quarterInput = Number(event.target.value)
                // parentObj.quarterObj.quarterOutput = Number(event.target.value)
                // parentObj.inputSum += (Number(event.target.value) / 4)
                // parentObj.outputSum += (Number(event.target.value) / 4)
            })
        }
    },
    resetCounter: function() {
        this.tenObj.tenCounter = 0
        this.fiveObj.fiveCounter = 0
        this.twoObj.twoCounter = 0
        this.oneObj.oneCounter = 0
        this.quarterObj.quarterCounter = 0
    },
    dimesRoll: 5,
    nickelsRoll: 2,
    inputSumFunc: function() {
        return (this.tenObj.tenInput * 10) + (this.fiveObj.fiveInput * 5) + (this.twoObj.twoInput * 2) + 
        (this.oneObj.oneInput) + (this.quarterObj.quarterInput / 4) + 5
    },
    calculateAll: function () {
        this.outputSum = this.inputSumFunc()
        this.tenObj.tenOutput = this.tenObj.tenInput
        this.fiveObj.fiveOutput = this.fiveObj.fiveInput
        this.twoObj.twoOutput = this.twoObj.twoInput
        this.oneObj.oneOutput = this.oneObj.oneInput
        this.quarterObj.quarterOutput = this.quarterObj.quarterInput
        this.outputSum += (this.dimesRoll + this.nickelsRoll)
        this.resetCounter()
        
        while (parentObj.outputSum < 500) {
            // initial if statements to get the inputs to the minimum allowance zone for the float
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

            if (parentObj.oneObj.oneOutput < 70 && parentObj.outputSum + 25 <= 500) {
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
            if (parentObj.quarterObj.quarterOutput + 40 <= 120 && parentObj.outputSum + 10 <= 500) {
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

            if (parentObj.oneObj.oneOutput + 25 <= 100 && parentObj.outputSum + 25 <= 500) {
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
   
}

parentObj.tenObj.inputElement()
parentObj.fiveObj.inputElement()
parentObj.twoObj.inputElement()
parentObj.oneObj.inputElement()
parentObj.quarterObj.inputElement()

const cashCalculateElement = document.getElementById('cashCalculate')
const replenishElement = document.getElementById('replenish')
const registerElement = document.getElementById('registertotal')

cashCalculateElement.addEventListener('click', function () {

    document.getElementById('cashOutput').innerHTML = ''
    document.getElementById('cashOutput').innerHTML = `<p><b>$${parentObj.inputSumFunc()}</b></p>`
    parentObj.calculateAll()
    replenishElement.innerHTML = ''
    registerElement.innerHTML = ''
    replenishElement.innerHTML = `<h2>Add to Float</h2>
                                <p>Number of Tens to add to the float: <b>${parentObj.tenObj.tenCounter}</b></span></p>
                                <p>Number of Fives to add to the float: <b>${parentObj.fiveObj.fiveCounter}</b></p>
                                <p>Number of rolls of Twos to add to the float: <b>${parentObj.twoObj.twoCounter}</b></p>
                                <p>Number of rolls of Ones to add to the float: <b>${parentObj.oneObj.oneCounter}</b></p>
                                <p>Number of rolls of Quarters to add to the float: <b>${parentObj.quarterObj.quarterCounter}</b></p>
                                <p>Number of rolls of Dimes: <b>1</b></p>
                                <p>Number of rolls of Nickels: <b>1</b></p>`
    registerElement.innerHTML = `<h2>Total</h2>
                                <p>Tens in the register: <b>${parentObj.tenObj.tenOutput}</b></p>
                                <p>Fives in the register: <b>${parentObj.fiveObj.fiveOutput}</b></p>
                                <p>Twos in the register: <b>${parentObj.twoObj.twoOutput}</b></p>
                                <p>Ones in the register: <b>${parentObj.oneObj.oneOutput}</b></p>
                                <p>Quarters in the register: <b>${parentObj.quarterObj.quarterOutput}</b></p>
                                <p>Nickels and Dimes combined: <b>$12</b></p>
                                <p>Total float: <b>$${parentObj.outputSum}</b></p>`
})


