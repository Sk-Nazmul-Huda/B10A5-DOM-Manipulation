const donateBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');



document.getElementById('donation-btn').addEventListener('click', function(){
  showSelectById('donate-section');
  donateBtn.classList.add('bg-[#B4F461]');
  historyBtn.classList.remove('bg-[#B4F461]');
})


document.getElementById('history-btn').addEventListener('click', function(){
  showSelectById('history-section');
  donateBtn.classList.remove('bg-[#B4F461]');
  historyBtn.classList.add('bg-[#B4F461]');
});

// code for go to blog page
document.getElementById('go-to-blog-page').addEventListener('click', function(){
  window.location.href = "./blog.html";
});

// code for go to home page
document.getElementById('go-to-home-page').addEventListener('click', function(){
  window.history.back();
  
});