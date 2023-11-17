

// const prices = ['Диван', 'Кровать', 'Стул']
// const contentEl = document.querySelector('.content');
// prices.forEach(element => {
//     //console.log(element);
//     const h2El = document.createElement('h2')
//     h2El.textContent = element
//     contentEl.append(h2El)
// });


//1 задание

//const salary = [20000, 30000, 45000, 50000, 60000, 90000,100000]
const salary = []
const salaryWithoutVAT = []

function randomSum() {
    return Math.round(Math.random() * 100000)
}

let countVariants = +prompt('Введите количество вариантов ЗП')
//salary.length
for (let i = 0; i < countVariants; i++) {
    const element = randomSum()
    salary.push(element)
    salaryWithoutVAT.push(element * 0.87)
}
console.log(salary);
console.log(salaryWithoutVAT);


//2 задание
const VremenaGoda = ['Winter', 'Spring', 'Summer', 'Autumn']

const textEl = document.querySelector('.textContent');

VremenaGoda.forEach(element => {
    const pEl = document.createElement('p');
    pEl.textContent = element
    textEl.append(pEl)
});



