/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    if(size ===0) {
        return '';
    }
    if (size === undefined) {
        return string;
    }

 const arr = [...string];
 const result = [];
 let counter = 0;
 let identically = true;

 arr.forEach((currentValue, index)=>{
    if (index > 0) {
        identically = arr[index] === arr[index - 1];
    }
    if (identically) {
      if (counter < size) {
        counter+=1;
        result.push(currentValue);
      }
    } else {
        counter = 1;
        result.push(currentValue);
    }
  });
  
  return result.join('');
  }
