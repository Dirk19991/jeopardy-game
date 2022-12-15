export function generateRandomIDs(num: number): number[] {
  const arr = [];
  while (arr.length < num) {
    let randomID = Math.floor(Math.random() * 5000);
    arr.push(randomID);
  }
  return arr;
}
