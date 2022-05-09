const _ = {
    clamp(num, lower, upper) {
      // set num to max of num and lower to bound num by lower parameter
      num = Math.max(num, lower);
      // set num to min of num and upper to bound num by the upper parameter
      num = Math.min(num, upper);
      // return num, which should now fall between lower and upper, inclusive
      return num;
    },
  
    inRange(num, start, end) {
      // if end is undefined, start will be set to 0 and end will be set to start
      if (end === undefined) {
        end = start;
        start = 0;
      }
      // if range is backward (i.e. start > end), the values will be flipped
      if (start > end) {
        const temp = end;
        end = start;
        start = temp;
      }
      let isInRange = (num >= start && num < end);
      return isInRange;
    },
  
    words(str) {
      const words = str.split(` `);
      return words;
    },
  
    pad(string, length) {
      if (length <= string.length) {
        return string;
      } else {
        let padLength = length - string.length;
        let frontPad = Math.floor(padLength / 2);
        let endPad = padLength - frontPad;
        let paddedString = `${' '.repeat(frontPad)}${string}${' '.repeat(endPad)}`;
        return paddedString;
      }
    },
  
    has(object, path) {
      return (object[path] !== undefined);
    },
  
    invert(object) {
      const newObject = {};
      for (let key in object) {
        newObject[object[key]] = key;
      }
      return newObject;
    },
  
    findKey(object, predicate) {
      for (let key in object) {
        if (predicate(object[key])) {
          return key;
        }
      }
      return undefined;
    },
    drop(arr, num) {
      if (num === undefined) {
        num = 1;
      }
      let newArr = arr.slice(num);
      return newArr;
    },
  
    dropWhile(array, predicate) {
      let dropIndex = array.findIndex((element, index) => {
        return !predicate(element, index, array)
      });
      let dropArray = this.drop(array, dropIndex);
      return dropArray;
    },
    
    chunk(array, size) {
      if (size === undefined) {
        size = 1;
      }
      let newArray = [];
      for (let i = 0; i < array.length; i += size) {
        newArray.push(array.slice(i, i + size));
      }
      return newArray;
    }
  };