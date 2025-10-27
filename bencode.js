const INTEGER_PREFIX = "i";
const INTEGER_SUFFIX = "e";
const COLON = ":";

function encode(data) {
  const dataType = typeof data;

  if (dataType === "number") {
    return INTEGER_PREFIX + data + INTEGER_SUFFIX;
  }

  return data.length + COLON + data;
}

function areDeepEqual(list1, list2) {
  if (!Array.isArray(list1) || !Array.isArray(list2)) {
    return list1 === list2;
  }

  if (list1.length !== list2.length) return false;

  for (let index = 0; index < list1.length; index++) {

    if (!areDeepEqual(list1[index], list2[index])) return false;

  }

  return true;
}

function displayResults(data, desc, actual, expected) {
  const passed = areDeepEqual(actual, expected);
  const symbol = passed ? "✅" : "❌";
  console.log(`${symbol} | ${desc}`);
  if (!passed) {
    console.log(`  input    [${data}]`);
    console.log(`  Actual   [${actual}]`);
    console.log(`  Expected [${expected}]`);
  }
}

function runTest(data, expected, desc, mode) {
  const result = mode === "encode" ? encode(data) : decode(data);
  displayResults(data, desc, result, expected);
}

function printTitle(title) {
  console.log(`\n=== ${title} ===`);
}

function decodeTestCases() {
  const mode = "decode";
  printTitle("Decoding Test Cases");

}

function encodeTestCases() {
  const mode = "encode";
  printTitle("Encoding Test Cases");

  runTest(123, "i123e", "Encodes a positive integer", mode);
  runTest(-45, "i-45e", "Encodes a negative integer", mode);
  runTest(0, "i0e", "Encodes zero", mode);
  runTest("hello", "5:hello", "Encodes a simple string", mode);
}

function main() {
  encodeTestCases();
  decodeTestCases();
}

main();
