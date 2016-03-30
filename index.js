RecursiveComponent = function (data) {
  var recursiveElement = document.createElement("div");
  recursiveElement.classList.add("recursive");

  if (data instanceof Array) {
      recursiveElement.appendChild(ArrayComponent(data, RecursiveComponent));
  } else if (data instanceof Object) {
      recursiveElement.appendChild(ObjectComponent(data, RecursiveComponent));
  } else {
      recursiveElement.appendChild(PrimitiveComponent(data, RecursiveComponent));
  }

  return recursiveElement;
};
