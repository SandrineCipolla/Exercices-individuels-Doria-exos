// function isValidDate("dd/mm/aaaa")

function maxDaysInMonth(month,year) {
    if (month == 2){
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
            return 29;
        } else {
            return 28;
        }
    } else if ([4, 6, 9, 11].includes(month)) {
        return 30;
      } else {
        return 31;
      }
    }
console.log(maxDaysInMonth(2,2024));


// function maxDaysInMonth(month, year) {
//     if (month === 2) {
//       if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return 29;
//       } else {
//         return 28;
//       }
//     } else if ([4, 6, 9, 11].includes(month)) {
//       return 30;
//     } else {
//       return 31;
//     }
//   }
  