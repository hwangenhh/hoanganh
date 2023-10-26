const showLecturersFormButtonn = document.querySelector('#show'),
LecturersFormm = document.querySelector('#address-form'),
LecturersExitt = document.getElementById('address-close');
    
showLecturersFormButtonn.addEventListener('click', function() {
  LecturersFormm.style.display = 'block';
});
LecturersExitt.addEventListener('click', function() {
LecturersFormm.style.display = 'none';
});


const showLecturersListButtonn = document.querySelector('#product'),
LecturersList = document.querySelector('#product-list');
// LecturersExit = document.getElementById('product-close');
    
showLecturersListButtonn.addEventListener('click', function() {
  LecturersList.style.display = 'block';
});

function hideFloatingInterface() {
  var floatingInterface = document.getElementById('form-group');
  floatingInterface.style.display = 'none';
}

function hideFloatingInterface2() {
 var email2 = document.getElementById('email-login').value;
 if(email2==''){
  alert("Vui lòng nhập Email của bạn");
 };
 if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email2)){
    alert("Đăng ký thành công");
 }else{
  alert("Vui lòng nhập đúng định dạng của Email");
}
}

function toggleInterface2() {
  var interfaceElement = document.getElementById('product-item-dienthoai');
  if (interfaceElement.style.display === 'none') {
      interfaceElement.style.display = 'block';
  } else {
      interfaceElement.style.display = 'none';
  }
}
function toggleInterface3() {
  var interfaceElement = document.getElementById('product-item-laptop');
  if (interfaceElement.style.display === 'none') {
      interfaceElement.style.display = 'block';
  } else {
      interfaceElement.style.display = 'none';
  }
}
function toggleInterface4() {
  var interfaceElement = document.getElementById('product-item-headphones');
  if (interfaceElement.style.display === 'none') {
      interfaceElement.style.display = 'block';
  } else {
      interfaceElement.style.display = 'none';
  }
}