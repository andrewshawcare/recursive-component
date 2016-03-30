describe("A primitive component", function () {
  it("creates a span from a primitive value", function () {
    var primitive = "Hello, world!";
    var primitiveComponent = PrimitiveComponent(primitive);
    expect(primitiveComponent.classList).toContain("primitive");
  });
});
