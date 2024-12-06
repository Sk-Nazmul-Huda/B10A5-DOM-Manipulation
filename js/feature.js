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
})