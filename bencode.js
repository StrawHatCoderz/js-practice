const INTEGER_PREFIX = "i";
const INTEGER_SUFFIX = "e";
const COLON = ":";
const LIST_PREFIX = "l";
const LIST_SUFFIX = "e";

function decodeList(data) {
  const result = [];
  let index = 1;

  while (data[index] !== LIST_SUFFIX) {
    const decodedElement = decode(data.slice(index));
    result.push(decodedElement);

    const encodedElement = encode(decodedElement);
    index += encodedElement.length;
  }

  return result;
}

function decodeString(data) {
  const colonIndex = data.indexOf(COLON);
  const textLength = parseInt(data.slice(0, colonIndex));

  const start = colonIndex + 1;
  const end = start + textLength;

  return data.slice(start, end);
}

function decodeInteger(data) {
  const start = data.indexOf(INTEGER_PREFIX) + 1;
  const end = data.lastIndexOf(INTEGER_SUFFIX);

  return parseInt(data.slice(start, end));
}
function decode(data) {
  const prefix = data[0];

  switch (prefix) {
    case INTEGER_PREFIX:
      return decodeInteger(data);
    case LIST_PREFIX:
      return decodeList(data);
    default:
      return decodeString(data); 
  }
}

function encodeInteger(data) {
  return INTEGER_PREFIX + data + INTEGER_SUFFIX;
}

function encodeString(data) {
  return data.length + COLON + data;
}

function encodeList(data) {
  let result = "";

  for (let index = 0; index < data.length; index++) {
    result += encode(data[index]);
  }

  return LIST_PREFIX + result + LIST_SUFFIX;
}

function encode(data) {
  const dataType = typeof data;

  switch (dataType) {
    case "number":
      return encodeInteger(data);
    case "string":
      return encodeString(data);
    default:
      return encodeList(data);
  }
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

  runTest("i123e", 123, "Decodes a positive integer", mode);
  runTest("i-45e", -45, "Decodes a negative integer", mode);
  runTest("i0e", 0, "Decodes zero", mode);
  runTest("5:hello", "hello", "Decodes a simple string", mode);
  runTest("0:", "", "Decodes an empty string", mode);
  runTest(
    "11:hello world",
    "hello world",
    "Decodes a string with a space",
    mode
  );
  runTest(
    "16:special!@#$chars",
    "special!@#$chars",
    "Decodes a string with special characters",
    mode
  );
  runTest(
    "l5:applei123ee",
    ["apple", 123],
    "Decodes a list with mixed types",
    mode
  );
  runTest("le", [], "Decodes an empty list", mode);
  runTest(
    "li0e0:lee",
    [0, "", []],
    "Decodes a list with empty elements",
    mode
  );
  runTest(
    "l0:i0elee",
    ["", 0, []],
    "Decodes a list with deeply nested empty elements",
    mode
  );
  runTest(
    "l3:onel3:twol5:threeeee",
    ["one", ["two", ["three"]]],
    "Decodes a deeply nested list",
    mode
  );
}

function encodeTestCases() {
  const mode = "encode";
  printTitle("Encoding Test Cases");

  runTest(123, "i123e", "Encodes a positive integer", mode);
  runTest(-45, "i-45e", "Encodes a negative integer", mode);
  runTest(0, "i0e", "Encodes zero", mode);
  runTest("hello", "5:hello", "Encodes a simple string", mode);
  runTest("", "0:", "Encodes an empty string", mode);
  runTest(
    "special:chars!",
    "14:special:chars!",
    "Encodes a string with special characters",
    mode
  );
  runTest(
    ["apple", 123],
    "l5:applei123ee",
    "Encodes a list with mixed types",
    mode
  );
  runTest(
    ["apple", 123, ["banana", -45]],
    "l5:applei123el6:bananai-45eee",
    "Encodes a nested list with mixed types",
    mode
  );
  runTest([], "le", "Encodes an empty list", mode);
  runTest([0, "", []], "li0e0:lee", "Encodes a list with empty elements", mode);
  runTest(
    ["one", ["two", ["three"]]],
    "l3:onel3:twol5:threeeee",
    "Encodes a deeply nested list",
    mode
  );
}

function main() {
  encodeTestCases();
  decodeTestCases();
}

main();
