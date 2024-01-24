import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import text from "../i18n/index.json";

describe('Module 4 Project Tests', () => {
  describe('English Language', () => {

    let enTexts = getEntriesByKeyPrefix(text.en, "TEXT");
    for (let [key, value] of enTexts) {
      test(`${key} in English is visible`, () => {
        render(<App lang="en" />);
        expect(screen.getByText(value)).toBeVisible();
      });
    };
    let enLabels = getEntriesByKeyPrefix(text.en, "LABEL");
    for (let [key, value] of enLabels) {
      test(`${key} in English is visible`, () => {
        render(<App lang="en" />);
        expect(screen.getByLabelText(value)).toBeVisible();
      });
    };
    test(`PLACEHOLDER_USERNAME in English is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByPlaceholderText(text.en.PLACEHOLDER_USERNAME)).toBeVisible();
    });
  })

  describe('Spanish Language', () => {
    
    let espTexts = getEntriesByKeyPrefix(text.esp, "TEXT");
    for (let [key, value] of espTexts) {
      test(`${key} in Spanish is visible`, () => {
        render(<App lang="esp" />);
        expect(screen.getByText(value)).toBeVisible();
      });
    };
    let espLabels = getEntriesByKeyPrefix(text.esp, "LABEL");
    for (let [key, value] of espLabels) {
      test(`${key} in English is visible`, () => {
        render(<App lang="esp" />);
        expect(screen.getByLabelText(value)).toBeVisible();
      });
    };
    test(`PLACEHOLDER_USERNAME in Spanish is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByPlaceholderText(text.esp.PLACEHOLDER_USERNAME)).toBeVisible();
    });
  })

  describe('getEntriesByKeyPrefix', () => {
    test('can extract the correct data', () => {
      const obj         = { abc_1: "data_abc_1", abc_2: "data_abc_2", xyz_1: "data_xyz_1", abc_3: "data_abc_3" };
      const expected    = [ ["abc_1", "data_abc_1"], ["abc_2", "data_abc_2"], ["abc_3", "data_abc_3"] ];
      const expected2   = [ [ "xyz_1", "data_xyz_1"] ];
      expect(getEntriesByKeyPrefix(obj, "abc")).toEqual(expected);
      expect(getEntriesByKeyPrefix(obj, "xyz")).toEqual(expected2);
      expect(getEntriesByKeyPrefix(obj, "")).toEqual([]);
    })
  })
})
function getEntriesByKeyPrefix(obj, keyPrefix) {
  return Object.entries(obj).filter(([key]) => key.split("_")[0] === keyPrefix);
  /*
    👉 TASK 4 part 1

    Implement a function that takes as first argument an object `obj` such as this:

    {
      abc_1: "data_abc_1",
      abc_2: "data_abc_2",
      xyz_1: "data_xyz_1",
      abc_3: "data_abc_3",
    }

    and takes as second argument a string `keyPrefix` such as this: "abc"

    and returns an array of arrays such as this (for the arguments given in the examples above):

    [
      ["abc_1", "data_abc_1"],
      ["abc_2", "data_abc_2"],
      ["abc_3", "data_abc_3"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "xyz" then it would return:

    [
      ["xyz_1", "data_xyz_1"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "foo" then it would return the empty array.

    The function looks inside the object `obj`, finds all properties whose property names begin
    with the `keyPrefix` given (followed by an underscore), and reorganizes the information before returning it.
    The properties that match the `keyPrefix` are returned inside an array holding key-value-pair sub-arrays.

  */
}
