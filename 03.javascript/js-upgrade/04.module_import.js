// 구조분해할당으로 import
//- 한번에 (module01.js)
import {getNumber, numberData} from './04.module01.js'
console.log(numberData)
console.log(getNumber())

//따로 따로 (module02.js)
import {animals, showAnimals} from './04.module02.js'
console.log(animals)
showAnimals()

//export default인 경우 중괄호 필요 없음
import sayHi from './04.module03.js'
sayHi();