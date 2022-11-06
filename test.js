import { assertEquals } from "https://deno.land/std@0.162.0/testing/asserts.ts";

// Deno.test("hello world", () => {
//   const x = 1 + 2;
//   if (x !== 3) {
//     throw Error("x should be equal to 3");
//   }
// });

Deno.test("hello world", () => {
  const x = 2 + 2;
  assertEquals(x, 4);
});
