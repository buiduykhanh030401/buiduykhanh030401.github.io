// Slide Time change
let counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;//Đếm thứ tự ảnh
  if (counter > 3) {//Nếu ảnh lớn hơn 3 quay lại ảnh 1
    counter = 1;
  }
}, 5000);

//Thay thế position: sticky
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  // Kiểm tra vị trí hiện tại của con trỏ so với nội dung trang
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('.bamdinh').style.position='fixed';
    document.querySelector('.bamdinh').style.top='0px';
    document.querySelector('.bamdinh').style.width='100%';
  }else{
    document.querySelector('.bamdinh').style.position='static';
  }
}