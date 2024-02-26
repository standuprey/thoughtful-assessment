import { test } from "node:test";
import assert from "node:assert";
import {
  MAX_LIGHT_PACKAGE_MASS_KG,
  MAX_NOT_BULKY_DIMENSION_CM,
  sort,
} from "./sort.js";

const limitDimension = MAX_NOT_BULKY_DIMENSION_CM - 1;
const limitMass = MAX_LIGHT_PACKAGE_MASS_KG - 1;

test("test with bad parameters", (t) => {
  assert.throws(() => {
    sort(1, 2, 3, 0);
  }, Error);
});

test("should be STANDARD if within range and light", (t) => {
  assert.strictEqual(
    sort(limitDimension, limitDimension, 10, limitMass),
    "STANDARD"
  );
});

test("should be SPECIAL if volume exceeds limit", (t) => {
  assert.strictEqual(
    sort(limitDimension, limitDimension, limitDimension, limitMass),
    "SPECIAL"
  );
});

test("should be SPECIAL if mass exceeds limit", (t) => {
  assert.strictEqual(
    sort(limitDimension, limitDimension, 10, limitMass + 1),
    "SPECIAL"
  );
});

test("should be REJECTED if mass exceeds limit and one dimension exceeds limit", (t) => {
  assert.strictEqual(
    sort(limitDimension + 1, 10, 10, limitMass + 1),
    "REJECTED"
  );
});

test("should be REJECTED if mass exceeds limit and volume exceeds limit", (t) => {
  assert.strictEqual(
    sort(limitDimension, limitDimension, limitDimension, limitMass + 1),
    "REJECTED"
  );
});
