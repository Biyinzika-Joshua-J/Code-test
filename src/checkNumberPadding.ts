function getPaddingLength(s: string): number {
      let length = 0;
      while (s[length] === '0') {
          length++;
      }
      return length;
  }

function analyzeStrings(stringsMap: Record<string, number>, strings: string[]): number {
      // case 1: no padding was used
      if (stringsMap["1"]){
            const stringsWithNoPadding = stringsMap["1"];
            let stringsWithPadding = 0;

            for (const key of Object.keys(stringsMap)){
                  if (key === "1") continue;
                  stringsWithPadding += stringsMap[key];
            }

            if (stringsWithNoPadding > stringsWithPadding) return 1;
      }

      // case 2: consistent padding exists
      for (const outerKey of Object.keys(stringsMap)){
            let runningTotal = 0;
            for (const innerKey of Object.keys(stringsMap)){
                  if (outerKey === innerKey) continue;
                  runningTotal += stringsMap[innerKey];
            }

            if (stringsMap[outerKey] > runningTotal){
                  return parseInt(outerKey);
            }
      }

      // case 3: inconsistent padding
      let paddingLengths = new Set();
      for (const str of strings){
            let paddingLength = getPaddingLength(str);
            paddingLengths.add(paddingLength);
      }

      if (paddingLengths.size > 1) return -1;


      // case 4: no padding observed but we can't be sure
      let paddingLength = Infinity;
      for (const key of Object.keys(stringsMap)){
            paddingLength = Math.min(paddingLength, parseInt(key));
      }

      return -paddingLength;
}

export function checkNumberPadding(intStrs: Iterable<string>): number {
      const strings = Array.from(intStrs);

      if (strings.length === 0) return 0; // nothing to observe

      const mapStrings: Record<string, number> = {};
      
      for (const str of strings){
            const stringLength = str.length;
            if (!mapStrings[stringLength]){
                  mapStrings[stringLength] = 0;
            }
            mapStrings[stringLength] += 1;
      }

      const analysisResult = analyzeStrings(mapStrings, strings);

      return analysisResult; 
  }


// Test cases

console.log(checkNumberPadding(["001", "002"])) // => 3
console.log(checkNumberPadding(["001", "002", "9999"])) // => 3

console.log(checkNumberPadding(["1", "2", "999"])) // => 1

console.log(checkNumberPadding( ["999", "9999"])) // => -3
console.log(checkNumberPadding(["99", "999", "9999"])) // => -2

console.log(checkNumberPadding(["01", "002"])) // => -1
console.log(checkNumberPadding([])) // => 0

console.log(checkNumberPadding(["01", "001", "10"])) // => -1



  /*
      Goals:
      -----
      1. determine if the numbers are consistently left-padded with "0" characters to a specified length, 
      2. determine if the numbers are unpadded, or if there is padding but it is inconsistent
      3. This function should analyze the provided strings to *detect* consistent padding and return the observed padding length.


      Cases:
      -----
      *1.  Return a positive number (>1): If a padding length can be determined and is consistent. 
      -  ["001", "002"] => 3
      -  ["001", "002", "9999"]  => 3 (note that although the last string has length 4, it is still a valid & consistent input for a left-pad of length 3))

      *2. Return 1: If it can be known that no padding was used (effectively the same as a padding length of 1).
      -  ["1", "2", “999”] => 1

      *3. Return a negative number (<-1): If padding is not observed, but there isn’t enough information to say conclusively that it wasn’t just a small value. The absolute value of this number should indicate the smallest observed non-padded length. 
      -  ["999", "9999"] => -3
      -  ["99", "999", "9999"] => -2 

      *4. Special-case return values: Note that the above definitions leave room for a return value of -1 and 0 without a defined meaning. Use -1 to indicate inconsistent padding, and use 0 to indicate no observations.
      - ["01", "002"] => -1
      *- [] => 0 
*/