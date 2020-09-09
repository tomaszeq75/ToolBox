/**
 numery telefonów zwraca tylko komórkowe
 numery z przecinkami wpisać w klasie .numbers w index.html
 */

function checkPhoneNumbers() {

    let prefix = [12, 13, 14, 15, 16, 17, 18, 22, 23, 24, 25, 29, 32, 33, 34,
        41, 42, 43, 44, 46, 48, 52, 54, 55, 56, 58, 59, 61, 62, 63, 65, 67, 68,
        71, 74, 75, 76, 77, 81, 82, 83, 84, 85, 86, 87, 89, 91, 94, 95, 80, 70
    ];

    numbers = document.querySelector(".numbers").innerText.split(",");
    console.log(numbers); //?
    console.log(numbers.filter((num) => Number.parseInt(num)));

    const onlyMobile = (num) => {
        const first2Digits = num.slice(0, 2);
        return !prefix.find((pre) => pre == first2Digits);
        // console.log(num, val);
    }
let a = 2+2*2; //?
    const mobileNumbers = numbers
        .filter((num) => Number.parseInt(num))
        .filter((num) => num.length == 9)
        .filter(onlyMobile);

    console.log(mobileNumbers);

    document.querySelector(".filtered").innerText = mobileNumbers;

    // numbersFiltered = removeTooShort(numbers)
    // checkNumbers(numbersFiltered);
    // document.querySelector(".filtered").innerText = numbersFiltered;
}

checkPhoneNumbers();