# Check Number Padding

## Setup

### 1. Clone the repository
```bash
  git clone https://github.com/Biyinzika-Joshua-J/Code-test.git
```

### 2. Install dependencies
Note: This command should be executed in the root directory named "Code-test"

```bash
 npm i
```

### 3. Running the code
To run the code, execute this command in your terminal. Please ensure your working directory is the root directory.

```bash
  npx ts-node src/checkNumberPadding.ts
```

## Testing
Vitest is used for the unit tests. The test script has 30 unit tests separated into four suites, each testing a different case.

There are two ways to run the test script.

The first:
```bash
  npm run test
```

The second - uses vitest ui:
```bash
  npm run test:ui
```

## My Approach
The function handles four cases:

**1st Case: When there is no padding applied**

This case is so if the majority of the elements in the input array are single digits. 

```typescript
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
```

**2nd Case: When consistent padding is present**

This case is handled when the majority of the elements in the input array have a consistent padding. If that isn't the case, execution is passed on to the 3rd case which handles inconsistent padding.

```typescript
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
```


**3rd Case: Inconsistent padding**

Values that don't have consistent padding usually end up here. In this case, I loop through all the strings and calaculate the padding. If the results vary by more than one instance, then I conclude that the padding isn't consistent.

```typescript
    // case 3: inconsistent padding
      let paddingLengths = new Set();
      for (const str of strings){
            let paddingLength = getPaddingLength(str);
            paddingLengths.add(paddingLength);
      }

      if (paddingLengths.size > 1) return -1;

```

**4th Case: When there is no observable padding, but we can't be sure**

This last case handles values which have no observed padding. 

```typescript
      let paddingLength = Infinity;
      for (const key of Object.keys(stringsMap)){
            paddingLength = Math.min(paddingLength, parseInt(key));
      }

      return -paddingLength;
```

## Time and space complexity

### Time

In the **checkNumberPadding** function, the snippet of code that creates the hash map does a complete linear scan through the input array. This takes O(n) time. 

Then in the **analyzeStrings** function, the first case takes O(n) time iterating over the keys of the hash map.

The second case has two nested for loops iterating over the keys of the hash map. This takes O(n^2) time.

The third case loops through the strings array and also calls **getPaddingLength** function on each iteration which takes O(s) time, where s is the length of the string. Overall it takes O(n * s) time, where n is the total number of elements (strings) present in the input array.

Finally, the fourth case again loops through the input array resulting into O(n) time.

The total time compexity comes down to:

O(n) + O(n) + O(n^2) + O(n * s) + O(n)

which is asymptotically equal to:
O(n^2) time

### Space

I'm using a hash map to keep track of the length frequencies of all strings represent in the input array. This takes O(n) space, where "n" is the number of all possible string lengths in the input data.