import { sortByProperty } from "./sortFunctions";

test("renders asc for strings", () => {
  const testarray = [
    {
      name: "m",
    },
    {
      name: "a",
    },
    {
      name: "b",
    },
  ];
  const expected = [
    {
      name: "a",
    },
    {
      name: "b",
    },
    {
      name: "m",
    },
  ];
  expect(sortByProperty(testarray, "name")).toStrictEqual(expected);
});

test("renders desc for strings", () => {
  const testarray = [
    {
      name: "m",
    },
    {
      name: "a",
    },
    {
      name: "b",
    },
  ];
  const expected = [
    {
      name: "m",
    },
    {
      name: "b",
    },
    {
      name: "a",
    },
  ];
  expect(sortByProperty(testarray, "name", false, "desc")).toStrictEqual(
    expected
  );
});

test("renders asc for numbers", () => {
  const testarray = [
    {
      name: 9,
    },
    {
      name: -1,
    },
    {
      name: 3,
    },
  ];
  const expected = [
    {
      name: -1,
    },
    {
      name: 3,
    },
    {
      name: 9,
    },
  ];
  expect(sortByProperty(testarray, "name", true)).toStrictEqual(expected);
});

test("renders desc for numbers", () => {
  const testarray = [
    {
      name: 9,
    },
    {
      name: -1,
    },
    {
      name: 3,
    },
  ];
  const expected = [
    {
      name: 9,
    },
    {
      name: 3,
    },
    {
      name: -1,
    },
  ];
  expect(sortByProperty(testarray, "name", true, "desc")).toStrictEqual(
    expected
  );
});
