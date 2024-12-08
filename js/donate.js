// function of add donation for Section-1

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
      const noaHeading = document.getElementById('noa-heading').innerText;

      // add data to history section
      document.getElementById('history-section').innerHTML += `
      <div class="bg-white border border-gray-900 p-5 m-1 rounded-md">
          <h2>${noakhaliInputValue} Taka is ${noaHeading}</h2>
          <p>${new Date()}</p>
        </div>
      `
    }
});

// function of add donation for Section-2

document.getElementById('noakhali-donate-button-1')
  .addEventListener('click', function(){
    const noakhaliDonationValue = getTextFieldValueById('noakhali-donate-amount-1');
    const noakhaliInputValue = getInputFieldValueById('noakhali-input-box-1');
    const donationBalanceValue = getTextFieldValueById('donate-balance');
    const myModal = document.getElementById('my-modal');

    if(isNaN(noakhaliInputValue) || noakhaliInputValue > donationBalanceValue || noakhaliInputValue < 0){
      alert('Invalid Amount')
      document.getElementById('noakhali-input-box-1').value = "";
      return
    }
    else{
      myModal.showModal();
      const noakhaliTotalAmount = noakhaliDonationValue + noakhaliInputValue;
      const donateBalanceAmount = donationBalanceValue - noakhaliInputValue;
     
      document.getElementById('noakhali-donate-amount-1').innerText = noakhaliTotalAmount;
      document.getElementById('donate-balance').innerText = donateBalanceAmount;      
      document.getElementById('noakhali-input-box-1').value = "";
      const noaHeading = document.getElementById('noa-heading-1').innerText;

      // add data to history section
      document.getElementById('history-section').innerHTML += `
      <div class="bg-white border border-gray-900 p-5 m-1 rounded-md">
          <h2>${noakhaliInputValue} Taka is ${noaHeading}</h2>
          <p>${new Date()}</p>
        </div>
      `
    }
});

// function of add donation for Section-3

document.getElementById('noakhali-donate-button-2')
  .addEventListener('click', function(){
    const noakhaliDonationValue = getTextFieldValueById('noakhali-donate-amount-2');
    const noakhaliInputValue = getInputFieldValueById('noakhali-input-box-2');
    const donationBalanceValue = getTextFieldValueById('donate-balance');
    const myModal = document.getElementById('my-modal');

    if(isNaN(noakhaliInputValue) || noakhaliInputValue > donationBalanceValue || noakhaliInputValue < 0){
      alert('Invalid Amount')
      document.getElementById('noakhali-input-box-2').value = "";
      return
    }
    else{
      myModal.showModal();
      const noakhaliTotalAmount = noakhaliDonationValue + noakhaliInputValue;
      const donateBalanceAmount = donationBalanceValue - noakhaliInputValue;
     
      document.getElementById('noakhali-donate-amount-2').innerText = noakhaliTotalAmount;
      document.getElementById('donate-balance').innerText = donateBalanceAmount;      
      document.getElementById('noakhali-input-box-2').value = "";
      const noaHeading = document.getElementById('noa-heading-2').innerText;

      // add data to history section
      document.getElementById('history-section').innerHTML += `
      <div class="bg-white border border-gray-900 p-5 m-1 rounded-md">
          <h2>${noakhaliInputValue} Taka is ${noaHeading}</h2>
          <p>${new Date()}</p>
        </div>
      `
    }
});


