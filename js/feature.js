const donateBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const donateBtn1 = document.getElementById('donation-btn-1');
const historyBtn1 = document.getElementById('history-btn-1');



// Toggle donate button
document.getElementById('donation-btn').addEventListener('click', function(){
  showSelectById('donate-section');
  donateBtn.classList.add('bg-[#B4F461]');
  historyBtn.classList.remove('bg-[#B4F461]');
  donateBtn1.classList.add('bg-[#B4F461]');
  historyBtn1.classList.remove('bg-[#B4F461]');
})

// Toggle history button
document.getElementById('history-btn').addEventListener('click', function(){
  showSelectById('history-section');
  donateBtn.classList.remove('bg-[#B4F461]');
  historyBtn.classList.add('bg-[#B4F461]');
  donateBtn1.classList.remove('bg-[#B4F461]');
  historyBtn1.classList.add('bg-[#B4F461]');
});

// code for go to blog page
document.getElementById('go-to-blog-page').addEventListener('click', function(){
  window.location.href = "./blog.html";
});

// // code for go to home page
// document.getElementById('go-to-home-page').addEventListener('click', function(){
//   window.history.back();
  
// });



// Toggle donate menu button
document.getElementById('donation-btn-1').addEventListener('click', function(){
  showSelectById('donate-section');
  donateBtn.classList.add('bg-[#B4F461]');
  historyBtn.classList.remove('bg-[#B4F461]');
  donateBtn1.classList.add('bg-[#B4F461]');
  historyBtn1.classList.remove('bg-[#B4F461]');
})

// Toggle history menu button
document.getElementById('history-btn-1').addEventListener('click', function(){
  showSelectById('history-section');
  donateBtn.classList.remove('bg-[#B4F461]');
  historyBtn.classList.add('bg-[#B4F461]');
  donateBtn1.classList.remove('bg-[#B4F461]');
  historyBtn1.classList.add('bg-[#B4F461]');
});