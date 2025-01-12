const form = document.getElementById('myForm');
let num_book ,title_book ,sal_book;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstname = document.getElementById('firstname').value;
  const snum = document.getElementById('snum').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const queryString = `?firstname=${encodeURIComponent(firstname)}&email=${encodeURIComponent(email)}&snum=${encodeURIComponent(snum)}&phone=${encodeURIComponent(phone)}&num_book=${encodeURIComponent(this.num_book)}&title_book=${encodeURIComponent(this.title_book)}&sal_book=${encodeURIComponent(this.sal_book)}`;

  window.location.href = `info-book.html${queryString}`;
});


function myFunction(el, btn) {
  var x = document.getElementById(el);
  if (x.style.display === "none") {
    btn.classList.toggle("btncolor");
    x.style.display = "contents";
  } else {
    btn.classList.toggle("btncolor");
    x.style.display = "none";
  }
}
function myFunctionBtn(book_num) {


var tr = document.querySelector("tr#tr"+book_num);
var tdElements = tr.querySelectorAll("td");

this.num_book = tdElements[0].textContent;
this.title_book = tdElements[1].textContent;
this.sal_book = tdElements[2].textContent;
  

  var x = document.getElementById("btnchose");
  if (x.style.display === "none") {
    x.style.display = "block";
  }

}
function myFunctionBtnClick() {
  var x = document.getElementById("formStory");
  if (x.style.display === "none") {
    x.style.display = "flex";
  }

}

function validateForm() {
  var snum = document.getElementById('snum').value;
  if (!/^(?:0[1-9]|1[0-4])\d{9}$/.test(snum)) {
    alert("يجب أن يتكون الرقم الوطني من 11 خانة وأن تبدأ الخانتين إلى اليسار برمز المحافظة بين 01 و 14");
    return false;
  }
  alert("تم التحقق من جميع المدخلات بنجاح!");
  return true;
}
