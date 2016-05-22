define([], function () {
  return function (data) {
    var data = data || {};
    var value = data.value || "";
    var ValueComponent = data.ValueComponent || function (data) {
      var valueElement = document.createElement("span");
      valueElement.textContent = data.value;
      return valueElement;
    };

    var primitiveElement = document.createElement("span");
    primitiveElement.classList.add("primitive");
    primitiveElement.appendChild(ValueComponent({value: value}));

    return primitiveElement;
  };
});
