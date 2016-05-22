/*global define, describe, it, expect */
define(["./index.js"], function (RecursiveComponent) { "use strict";
  describe("A recursive component", function () {
    it("creates a recursive component from a JSON data structure", function () {
      var data = {"value": ["apple", "carrot", "steak"]};
      var recursiveComponent = RecursiveComponent(data);
      expect(recursiveComponent.classList).toContain("recursive");
    });
  });
});
