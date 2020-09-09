/**
 * Let & Const
 */

// function letVarExample(){

//     let lastName = 'V'
//     if(true){
//     var firstName = "Nazariy";      // exists in function scope, defined in function scope

//     console.log(" in: ", lastName);
//      lastName = "Dumanskyy";     // exists in block scope, defined in block scope
//   }
//   console.log("Function Scope Access: ", firstName);
//   console.log("Function Scope Access: ", lastName);

// }

// letVarExample()

// const anotherExample = [1,2,3];
// anotherExample.push(4);
// console.log(anotherExample);


/**
 * Template Literals
 */

// let firstName = "Nazariy";
// let lastName = "Dumanskyy";

// let fullName = `${firstName} ${lastName} `;
// console.log(fullName);

// let searchResults = 5;
// let output = `${ searchResults > 0 ? `${searchResults} results` : "No search results"}`
// console.log(output);


/**
 * Arrow Functions
 */

// getFullName = () => {
//   let firstName = "Nazariy";
//   let lastName = "Dumanskyy";
//   return `${firstName} ${lastName}`;
// }

// let output = getFullName();
// console.log(output);

// let firstName = "Nazariy";
// let lastName = "Dumanskyy";
// getFullNameShorter = (firstName, lName) => {
//     console.log(`in: ${firstName} ${lName}`);
//     return {'wynik' : 15, 'www': 'inter'};
// }
// console.log("Shorted Example");
// gfs = getFullNameShorter(firstName, lastName);
// gfn = getFullName();
// console.log(gfs);
// console.log(getFullNameShorter);
// console.log(getFullNameShorter());
// console.log(firstName);
// console.log(getFullNameShorter('a','b'));
// console.log(firstName);

/**
 * Default Parameters
 */

//  sortBy = (sortType = "Name", users) => {
//    console.log("Sorting By: ", sortType, "   ", users);
//  }

//  sortBy();
//  sortBy(undefined,['a','b','c']);
//  sortBy("Date", ['a','b','c']);


/**
 * Iterating
 */

let fruits = ["apple", "banana", "orange", "cherries", "jackfruit", "guava"];
// console.log("For Loop:");
// for(let index = 0; index < fruits.length; index++){
//   console.log(fruits[index]);
// }

// console.log("For-Of:");
// for(let fruit of fruits){
//   console.log(fruit);
// }


// console.log("forEach:");
// var fe = 1;
// fe = fruits.forEach((fruit, index) => {
//     fruits[index] += ' -x-';
//     console.log(`${fruit} - ${index}`);
// })
// console.log('--- : ' + fruits);

// console.log("Map:");
// newFruits = fruits.map((fruit, index) => {
//     console.log(`${fruit} - ${index}`);
//     return `${fruit}`;
// }).filter((value)=>{
//     if (value > 'c') {
//         return true
//     } else {
//         return false
//     }
// })

// console.log(newFruits);

/**
 * Destructuring Object
 */

// let fullName = {
// 	firstName: "Nazariy",
// 	lastName: "Dumansktyy"
// }
// console.log(fullName);

// let { firstName, lastName } = fullName;
// console.log(firstName, lastName);


// let user = [{
//         firstName: "John",
//         lastName: "Reilly"
//     },
//     (user) => {
//         console.log("I set the user: ", user);
//     }
// ]
// console.log(user);

// let [newUser, setUser] = user;
// console.log(newUser);
// console.log(setUser({
//     firstName: "a",
//     lastName: "b"
// }));
// setUser({
//     firstName: "Cool",
//     lastName: "Stuff"
// });

// user[1]({
//     firstName: "x",
//     lastName: "y"
// });

// arr = [{
//     a: 1,
//     b: 2,
//     c: 3
// }, 4, 5];
// // let a1 [{a:9, b:9, c:9},a2] =;
// [a1, a2, a3] = arr;
// console.log(a1.b, a2, a3);


/**
 * zasięg zmiennych
 */
function checkVariableScope() {

    getAArrow = () => {
        console.log(`a w => ${a}`);
    }

    function getAfunc() {
        console.log(`a w function ${a}`);
    }
    const getAconst = function () {
        console.log(`a w const ${a}`);
    }


    // let ------------------------------------
    console.log('--- let - var, let, ""');

    let a = 1; {
        //var a = 3;  // błąd 
        let a = 2;
        console.log(`LET a w bloku = ${a}`);
    }
    console.log(`LET a poza blokiem = ${a}`); // 1

    getAArrow() // 1 wszędzie to samo
    getAfunc()
    getAconst()


    // var --------------------------------------
    console.log('--- VAR - var, let, ""');

    getGArrow = () => {
        console.log(`g w => ${g}`);
    }

    function getGfunc() {
        console.log(`g w function ${g}`);
    }

    const getGconst = function () {
        console.log(`g w const ${g}`);
    }

    var g = 1; {
        // var e = 3; // błąd 
        let g = 2;
        console.log(`VAR g w bloku = ${g}`);
    }
    console.log(`VAR g poza blokiem = ${g}`); // 1

    getGArrow() // 1 wszędzie to samo
    getGfunc()
    getGconst()
    // ----------------------------------

    // zagnieżdżone funkcje (normalne) ----------------------------------
    // this nie ma sensu wyswietla zmienne globalne
    console.log('------------ funkcje');

    const arrowFunction = (level, i) => {
        console.log(`arrowFunction level ${level}   i = ${i}   this.i = ${this.i}`);
    } 

    let h = 'h'
    var i = 'iii'
    
    function level1(i) {
        // let i = 'i';
        console.log(`        level 1 h = ${h}   i = ${i},  this.i = ${this.i}`);
        arrowFunction(1,i)
        
        function level2(i) {
            console.log(`        level 2 h = ${h}   i = ${i},  this.i = ${this.i}`);
            arrowFunction(2,i)
            
            function level3(i) {
                console.log(`        level 3 h = ${h}   i = ${i},  this.i = ${this.i}`);
                arrowFunction(3,i)
            }
            level3(33)
        }
        level2(22)
    }
    level1(11)
    level1()
    console.log(i, this.i);

}
checkVariableScope()

/**
 * promises
 */

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             firstName: "Tomasz",
//             lastName: "Woł"
//         });
//     }, 1500)
//     reject("Coś poszło nie tak");
// });

// promise.then((response) => {
//     // console.log("minęła 1 sek");
//     // console.log(response);
// }).catch((error) => {
//     // console.log(error);
// })

// console.log("wywołane po wykonane przed");

/**
 * Fetching data from an API
 */

// let userPromise = fetch("https://randomuser.me/api/0");
// console.log(userPromise);
// userPromise.then((response) => {
//         return response.json();
//     }).then((resData) => {
//         console.log(resData);
//     })
//     .catch((error) => {
//         console.log("wyjebało jakiś błąd: " + error);
//     });

//     // zabawa z danymi
//     let jsonData = {"results":[{"gender":"male","name":{"title":"Monsieur","first":"Tiago","last":"Bernard"},"location":{"street":{"number":8153,"name":"Rue Laure-Diebold"},"city":"Sevelen","state":"Jura","country":"Switzerland","postcode":5780,"coordinates":{"latitude":"-55.9930","longitude":"-20.3217"},"timezone":{"offset":"+8:00","description":"Beijing, Perth, Singapore, Hong Kong"}},"email":"tiago.bernard@example.com","login":{"uuid":"e0ddec6e-4c69-4d96-b633-b0588ec5c3fc","username":"brownelephant733","password":"hamburg","salt":"qXzK2Kzp","md5":"1403b72369263ef647b0d08c0cd39171","sha1":"fe75d4c8bfb7805e8dd774ff5fb935828d0896be","sha256":"9ae5bca63ad96ff178953e7e030f7c919bbc586dabd8048e1d138985d951a330"},"dob":{"date":"1946-05-10T00:57:20.274Z","age":74},"registered":{"date":"2008-06-07T23:03:26.938Z","age":12},"phone":"079 737 29 75","cell":"077 339 52 19","id":{"name":"AVS","value":"756.1663.2490.26"},"picture":{"large":"https://randomuser.me/api/portraits/men/50.jpg","medium":"https://randomuser.me/api/portraits/med/men/50.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/50.jpg"},"nat":"CH"}],"info":{"seed":"af08bba1fdf464da","results":1,"page":1,"version":"1.3"}}
//     names = jsonData.results[0].name;
//     n2 = jsonData.results.map(item => item.name);
//     console.log(names, n2);
//     for (const iterator in names) {
//       console.log(`${iterator}: ${names[iterator]}`);  
//     };


/**
 * obiekty
 */

// odwołanie this.mark nie działa gdy metoda zdefiniowana jest przez 
// getinfo: () => {}
let mark = "xxx";
let bmwNoClass = {
    mark: "BMW",
    model: "325",
    getInfo() {
        return `${this.mark}, ${this.model}`;
    },
    getInfo2: function () {
        return `${this.mark}, ${this.model}`;
    },
    getInfo3: () => {
        return `${this.mark}, ${this.model}`;
    }
};

class Car {
    constructor(mark, model) {
        this.mark = mark;
        this.model = model;
    }
    getInfo = () => {
        return `${this.mark}, ${this.model}`;
    }
    getInfo2() {
        return `${this.mark}, ${this.model}`;
    }
}

// kopiowanie danych BEZ METOD
let bmw2 = JSON.parse(JSON.stringify(bmwNoClass));


let bmw = new Car('Audi', 'A4');
// console.log(bmwNoClass);
// console.log(bmwNoClass.getInfo());
// console.log(bmwNoClass.getInfo2());
// console.log(bmwNoClass.getInfo3());
// console.log(bmw2);

// console.log(bmw.getInfo());
// console.log(bmw.getInfo2());