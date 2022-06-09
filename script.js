"use strict";

//комбинации которые могут выпасть
const odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
const even = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
const eightin = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const ninetin = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
const black = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
const red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
const oneSt12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const twoSt12 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const threeSt12 = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
const col1 = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
const col2 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
const col3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];

// переменные для отслуживания выпавших комбинаций
let oddNum = null;
let evenNum = null;
let eightinNum = null;
let ninetinNum = null;
let blackNum = null;
let redNum = null;
let oneSt12Num = null;
let twoSt12Num = null;
let threeSt12Num = null;
let col1Num = null;
let col2Num = null;
let col3Num = null;

// массив для истории последних чисел
let historyNumbers = [];

//функция для отслуживания четного или нечетного числа
const funcOdd = (num) => {
   odd.indexOf(num) >= 0 ? oddNum += 1 : oddNum = null;

}

const funcEven = (num) => {
   even.indexOf(num) >= 0 ? evenNum += 1 : evenNum = null;
}

//функции крвсного черного

const funcBlack = (num) => {
   black.indexOf(num) >= 0 ? blackNum += 1 : blackNum = null;
}

const funcRed = (num) => {
   red.indexOf(num) >= 0 ? redNum += 1 : redNum = null;
}

// функции определения от 1 до 18 и от 19 до 36

const funcEightin = (num) => {
   eightin.indexOf(num) >= 0 ? eightinNum += 1 : eightinNum = null;
}

const funcNinetin = (num) => {
   ninetin.indexOf(num) >= 0 ? ninetinNum += 1 : ninetinNum = null;
}

//функции определения  сектора 1st12 2st12 3st12

const func1st12 = (num) => {
   oneSt12.indexOf(num) >= 0 ? oneSt12Num += 1 : oneSt12Num = null;
}

const func2st12 = (num) => {
   twoSt12.indexOf(num) >= 0 ? twoSt12Num += 1 : twoSt12Num = null;
}

const func3st12 = (num) => {
   threeSt12.indexOf(num) >= 0 ? threeSt12Num += 1 : threeSt12Num = null;
}

//функции определения колонок col1 col2 col3

const funccol1 = (num) => {
   col1.indexOf(num) >= 0 ? col1Num += 1 : col1Num = null;
}

const funccol2 = (num) => {
   col2.indexOf(num) >= 0 ? col2Num += 1 : col2Num = null;
}

const funccol3 = (num) => {
   col3.indexOf(num) >= 0 ? col3Num += 1 : col3Num = null;
}


//получение значения из инпута и перерендеринг
const input = document.querySelector('.input__combine');

const rerender = () => {
   const inputValue = +document.querySelector('.input__combine').value;
   funcOdd(inputValue);
   funcEven(inputValue);
   funcBlack(inputValue);
   funcRed(inputValue);
   funcEightin(inputValue);
   funcNinetin(inputValue);
   func1st12(inputValue);
   func2st12(inputValue);
   func3st12(inputValue);
   funccol1(inputValue);
   funccol2(inputValue);
   funccol3(inputValue);

   render(inputValue);

   document.querySelector('.input__combine').value = null;
}

input.addEventListener('keyup', (e) => {
   if (e.keyCode === 13 && input.value <= 36) {
      rerender();
   }
});



//функция рендера содержимого страницы
function render(inputValue) {
   let html = document.querySelector('.combine__body');

   const strPreobraz = (num) => {
      if (num !== null) {
         return `[${num}]`;
      } else {
         return '';
      }
   }

   const addClass = (num) => {
      if (num >= 5) {
         return 'red';
      }
      else if (num >= 3) {
         return 'yellow';
      }
      else {
         return '';
      }
   }

   const addClassCol1 = () => {
      if (col2Num >= 4 || col3Num >= 4) {
         return 'red';
      } else if (col2Num >= 3 || col3Num >= 3) {
         return 'yellow';
      } else {
         return '';
      }
   }
   const addClassCol2 = () => {
      if (col1Num >= 4 || col3Num >= 4) {
         return 'red';
      } else if (col1Num >= 3 || col3Num >= 3) {
         return 'yellow';
      } else {
         return '';
      }
   }
   const addClassCol3 = () => {
      if (col1Num >= 4 || col2Num >= 4) {
         return 'red';
      } else if (col1Num >= 3 || col2Num >= 3) {
         return 'yellow';
      } else {
         return '';
      }
   }
   const addClass1st12 = () => {
      if (twoSt12Num >= 4 || threeSt12Num >= 4) {
         return 'red';
      } else if (twoSt12Num >= 3 || threeSt12Num >= 3) {
         return 'yellow';
      } else {
         return '';
      }
   }
   const addClass2st12 = () => {
      if (oneSt12Num >= 4 || threeSt12Num >= 4) {
         return 'red';
      } else if (oneSt12Num >= 3 || threeSt12Num >= 3) {
         return 'yellow';
      } else {
         return '';
      }
   }
   const addClass3st12 = () => {
      if (oneSt12Num >= 4 || twoSt12Num >= 4) {
         return 'red';
      } else if (oneSt12Num >= 3 || twoSt12Num >= 3) {
         return 'yellow';
      } else {
         return '';
      }
   }


   html.innerHTML = `
   <div class="combine__body">
            <div class="combine__body-two">
               <div class="combine__col1 item-three ${addClassCol3()}"></div>
               <div class="combine__col2 item-three ${addClassCol2()}"></div>
               <div class="combine__col3 item-three ${addClassCol1()}"></div>
            </div>
            <div class="combine__body-three">
               <div class="combine__1st12 item-two ${addClass1st12()}"></div>
               <div class="combine__2st12 item-two ${addClass2st12()}"></div>
               <div class="combine__3st12 item-two ${addClass3st12()}"></div>
               <div class="combine__eghtin item ${addClass(ninetinNum)}"></div>
               <div class="combine__even item ${addClass(oddNum)}"></div>
               <div class="combine__red item ${addClass(blackNum)}"></div>
               <div class="combine__black item ${addClass(redNum)}"></div>
               <div class="combine__odd item ${addClass(evenNum)}"></div>
               <div class="combine__ninetin item ${addClass(eightinNum)}"></div>
            </div>
         </div>
   `;

   // последнии выпавшие числа

   let history = document.querySelector('.history__wrapper');

   const addClassHistoryNumber = (num) => {
      return black.indexOf(num) >= 0 ? 'black' : 'red';
   }

   console.log(addClassHistoryNumber(inputValue));

   if (historyNumbers.length >= 15) {
      historyNumbers.pop();
   }

   historyNumbers.unshift(`<div class="${addClassHistoryNumber(inputValue)}">${inputValue}</div>`);


   history.innerHTML = historyNumbers.join('');


   // повторы комбинаций

   const repeat = document.querySelector('.repeat__wrapper');

   repeat.innerHTML = `
               <div class="combine__red rep ${addClass(blackNum)}">${strPreobraz(redNum)} RED</div>
            <div class="combine__black rep ${addClass(redNum)}">${strPreobraz(blackNum)} BLACK</div>
            <div class="combine__even rep ${addClass(oddNum)}">${strPreobraz(evenNum)} EVEN</div>
            <div class="combine__odd rep ${addClass(evenNum)}">${strPreobraz(oddNum)} ODD</div>
            <div class="black__line"></div>
            <div class="combine__eghtin repe ${addClass(ninetinNum)}">${strPreobraz(eightinNum)} 1-18</div>
            <div class="combine__ninetin repe ${addClass(eightinNum)}">${strPreobraz(ninetinNum)} 19-36</div>
            <div class="repeat__body">
            <div class="black__line"></div>
               <div class="combine__1st12 repea ${addClass1st12()}">${strPreobraz(oneSt12Num)} 1st12</div>
               <div class="combine__2st12 repea ${addClass2st12()}">${strPreobraz(twoSt12Num)} 2st12</div>
               <div class="combine__3st12 repea ${addClass3st12()}">${strPreobraz(threeSt12Num)} 3st12</div>
            <div class="black__line"></div>
               <div class="combine__col1 repea ${addClassCol1()}">${strPreobraz(col1Num)} COL1</div>
               <div class="combine__col2 repea ${addClassCol2()}">${strPreobraz(col2Num)} COL2</div>
               <div class="combine__col3 repea ${addClassCol3()}">${strPreobraz(col3Num)} COL3</div>
            </div>
   `;
};
