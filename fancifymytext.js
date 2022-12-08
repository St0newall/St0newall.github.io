function bigger() {
    var text = document.getElementById("textarea");
    text.style.fontSize = "24pt";
    hello();
  }
  
  function fancy() {
    var clicked = document.getElementById("fancy");
    var text = document.getElementById("textarea");
    if (clicked.checked) {
      hello();
      text.style.fontWeight = "bold";
      text.style.color = "blue";
      text.style.textDecoration = "underline";
    } else {
      hello();
      text.style.fontWeight = "normal";
      text.style.color = "black";
      text.style.textDecoration = "none";
    }
  }
  
  function hello() {
    alert("Hello, World!");
  }
  
  function moo() {
    var text = document.getElementById("textarea");
    text.style.textTransform = "uppercase";
    var period = textarea.value.split(".");
    text.value = period.join("-Moo");
    hello();
  }