document.addEventListener('DOMContentLoaded', function() {
    const optionsForm = document.getElementById('optionsForm');
  
    optionsForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const category = document.getElementById('category').value;
      const frequency = document.getElementById('frequency').value;
      const darkMode = document.getElementById('darkMode').checked;
  
      // Save user settings using browser storage API
      chrome.storage.sync.set({
        category: category,
        frequency: frequency,
        darkMode: darkMode
      }, function() {
        console.log('Settings saved successfully!');
      });
    });
  
    // Load saved settings when the options page is opened
    chrome.storage.sync.get(['category', 'frequency', 'darkMode'], function(data) {
      if (data.category) {
        document.getElementById('category').value = data.category;
      }
      if (data.frequency) {
        document.getElementById('frequency').value = data.frequency;
      }
      if (data.darkMode) {
        document.getElementById('darkMode').checked = data.darkMode;
      }
    });
  });
  