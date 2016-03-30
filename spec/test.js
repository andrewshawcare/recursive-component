describe("A recursive component", function () {
  it("creates a recursive component from a JSON data structure", function () {
    var data = {"collection": ["apple", "carrot", "steak"]};
    var recursiveComponent = RecursiveComponent(data);
    console.log(recursiveComponent.classList);
    expect(recursiveComponent.classList).toContain("recursive");
  });
});
