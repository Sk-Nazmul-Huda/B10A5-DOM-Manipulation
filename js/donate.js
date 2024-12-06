// function of add donation for Noakhali Flood

document.getElementById('noakhali-donate-button')
  .addEventListener('click', function(){
    const noakhaliDonationValue = getTextFieldValueById('noakhali-donate-amount');
    const noakhaliInputValue = getInputFieldValueById('noakhali-input-box');
    const donationBalanceValue = getTextFieldValueById('donate-balance');
    const myModal = document.getElementById('my-modal');

    if(isNaN(noakhaliInputValue) || noakhaliInputValue > donationBalanceValue || noakhaliInputValue < 0){
      alert('Invalid Amount')
      document.getElementById('noakhali-input-box').value = "";
      return
    }
    else{
      myModal.showModal();
      const noakhaliTotalAmount = noakhaliDonationValue + noakhaliInputValue;
      const donateBalanceAmount = donationBalanceValue - noakhaliInputValue;
     
      document.getElementById('noakhali-donate-amount').innerText = noakhaliTotalAmount;
      document.getElementById('donate-balance').innerText = donateBalanceAmount;      
      document.getElementById('noakhali-input-box').value = "";

      // add data to history section
      document.getElementById('history-section').innerHTML += `
      <div class="bg-white border border-gray-900 p-5 m-1 rounded-md">
          <h2>${noakhaliInputValue} Taka is Donated for Flood at Noakhali, Bangladesh</h2>
          <p>${new Date()}</p>
        </div>
      `
    }
})