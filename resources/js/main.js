// set up of objects for the input fields containing html elements, variables to store the input and function calls to use the input
const parentObj = {
    inputSum: 5, //input sum starts at 5 as dimes and nickels are assumed to add up to 5 dollars
    tenObj: {
        tenInputElement: document.getElementById('tenInput'),
        tenInput: 0,
        tenCounter: 0,
        tenTotalCount: function() {
            return this.tenInput + this.tenCounter
        },
        inputElement: function () {
            this.tenInputElement.addEventListener('blur', function (event) {
                if (parentObj.tenObj.tenInput !== 0) {
                    parentObj.inputSum -= (parentObj.tenObj.tenInput * 10)
                }
                parentObj.tenObj.tenInput = Number(event.target.value)
                parentObj.inputSum += (Number(event.target.value) * 10)
            })
        }
    },
    fiveObj: {
        fiveInputElement: document.getElementById('fiveInput'),
        fiveInput: 0,
        fiveCounter: 0,
        fiveTotalCount: function () {
            return this.fiveInput + this.fiveCounter
        },
        inputElement: function() {
            this.fiveInputElement.addEventListener('blur', function (event) {
                if (parentObj.fiveObj.fiveInput !== 0) {
                    parentObj.inputSum -= (parentObj.fiveObj.fiveInput * 5)
                }
                parentObj.fiveObj.fiveInput = Number(event.target.value)
                parentObj.inputSum += (Number(event.target.value) * 5)
            })
        }
    },
    twoObj: {
        twoInputElement: document.getElementById('twoInput'),
        twoInput: 0,
        twoCounter: 0,
        inputElement: function() {
            this.twoInputElement.addEventListener('blur', function (event) {
                if (parentObj.twoObj.twoInput !== 0) {
                    parentObj.inputSum -= (parentObj.twoObj.twoInput * 2)
                }
                parentObj.twoObj.twoInput = Number(event.target.value)
                parentObj.inputSum += (Number(event.target.value) * 2)
            })
        }
    },
    oneObj: {
        oneInputElement: document.getElementById('oneInput'),
        oneInput: 0,
        oneCounter: 0,
        inputElement: function() {
            this.oneInputElement.addEventListener('blur', function (event) {
                if (parentObj.oneObj.oneInput !== 0) {
                    parentObj.inputSum -= parentObj.oneObj.oneInput
                }
                parentObj.oneObj.oneInput = Number(event.target.value)
                parentObj.inputSum += Number(event.target.value)
            })
        }
    },
    quarterObj: {
        quarterInputElement: document.getElementById('quarterInput'),
        quarterInput: 0,
        quarterCounter: 0,
        inputElement: function() {
            this.quarterInputElement.addEventListener('blur', function (event) {
                if (parentObj.quarterObj.quarterInput !== 0) {
                    parentObj.inputSum -= (parentObj.quarterObj.quarterInput / 4)
                }
                parentObj.quarterObj.quarterInput = Number(event.target.value)
                parentObj.inputSum += (Number(event.target.value) / 4)
            })
        }
    },
    calculateAll: function () {
        while (this.inputSum < 500) {
            //initial if statements to get the inputs to the minimum allowance zone for the float
            if (parentObj.tenObj.tenInput < 12 && parentObj.inputSum + 10 <= 500) {
                parentObj.tenObj.tenInput++
                parentObj.tenObj.tenCounter++
                parentObj.inputSum += 10
                continue
            }

            if (parentObj.fiveObj.fiveInput < 14 && parentObj.inputSum + 5 <= 500) {
                parentObj.fiveObj.fiveInput++
                parentObj.fiveObj.fiveCounter++
                parentObj.inputSum += 5
                continue
            }
            
            if (parentObj.twoObj.twoInput < 50 && parentObj.inputSum + 50 <= 500) {
                parentObj.twoObj.twoInput += 25
                parentObj.twoObj.twoCounter += 25
                parentObj.inputSum += 50
                continue
            }

            if (parentObj.oneObj.oneInput < 70 && parentObj.inputSum + 25 <= 500) {
                parentObj.oneObj.oneInput += 25
                parentObj.oneObj.oneCounter += 25
                parentObj.inputSum += 25
                continue
            }

            if (parentObj.quarterObj.quarterInput < 80 && parentObj.inputSum + 10 <= 500) {
                parentObj.quarterObj.quarterInput += 40
                parentObj.quarterObj.quarterCounter += 40
                parentObj.inputSum += 10
                continue
            }
            //new if statements to bring the input values higher
            if (parentObj.twoObj.twoInput + 25 <= 75 && parentObj.inputSum + 50 <= 500) {
                parentObj.twoObj.twoInput += 25
                parentObj.twoObj.twoCounter += 25
                parentObj.inputSum += 50
                continue
            }

            if (parentObj.oneObj.oneInput + 25 <= 100 && parentObj.inputSum + 25 <= 500) {
                parentObj.oneObj.oneInput += 25
                parentObj.oneObj.oneCounter += 25
                parentObj.inputSum += 25
                continue
            }

            if (parentObj.fiveObj.fiveInput < 18 && parentObj.inputSum + 5 <= 500) {
                parentObj.fiveObj.fiveInput++
                parentObj.fiveObj.fiveCounter++
                parentObj.inputSum += 5
                continue
            }

            if (parentObj.tenObj.tenInput < 15 && parentObj.inputSum + 10 <= 500) {
                parentObj.tenObj.tenInput++
                parentObj.tenObj.tenCounter++
                parentObj.inputSum += 10
                continue
            }
            console.log(`tenTotal: ${parentObj.tenObj.tenInput}`)
            console.log(`fiveTotal: ${parentObj.fiveObj.fiveInput}`)
            console.log(`twoTotal: ${parentObj.twoObj.twoInput}`)
            console.log(`oneTotal: ${parentObj.oneObj.oneInput}`)
            console.log(`quartertotal: ${parentObj.quarterObj.quarterInput}`)
            console.log(`till total: ${parentObj.inputSum}`)
            break
            
        }
    }
   
}

const cashCalculateElement = document.getElementById('cashCalculate')



// this was a previous function where I was using all global variables, was having trouble wrapping my head around javascript closures, keeping commented out for now as a reminder
// const inputElement = function (element, num) {
//     element.addEventListener('blur', function (event) {
//         if(num !== 0) {
//             inputSum -= num
//         }
//         num = Number(event.target.value)
//         inputSum += Number(event.target.value)
//     })
// }

parentObj.tenObj.inputElement()
parentObj.fiveObj.inputElement()
parentObj.twoObj.inputElement()
parentObj.oneObj.inputElement()
parentObj.quarterObj.inputElement()


cashCalculateElement.addEventListener('click', function () {
    document.getElementById('cashOutput').innerHTML = ''
    document.getElementById('cashOutput').innerHTML = `$${parentObj.inputSum}`
    parentObj.calculateAll()
})


