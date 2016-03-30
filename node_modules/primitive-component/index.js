PrimitiveComponent = function (primitive) {
  var primitiveElement = document.createElement("span");
  primitiveElement.classList.add("primitive");
  primitiveElement.innerText = primitive;
  return primitiveElement;
};
