//when the scroll the page smothly section apears
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


//Validation the form

const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const fnameInput = document.querySelector('#fname');
  const lnameInput = document.querySelector('#lname');
  var subject= document.querySelector("#subject");

  if (fnameInput.value.trim() === '' || lnameInput.value.trim() === ''|| subject.value.trim() === '') {
    alert('Please fill in all fields.');
    return;
  }

  form.submit();
});

