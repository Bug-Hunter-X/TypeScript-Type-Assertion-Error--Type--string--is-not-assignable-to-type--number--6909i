function combineArrays(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, "6" as number]; //Type 'string' is not assignable to type 'number'.

const combinedArray = combineArrays(arr1, arr2); //This will throw a runtime error if not handled correctly.
console.log(combinedArray);