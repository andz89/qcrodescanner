
      let showScanner = document.querySelector('#showScanner')
      showScanner.addEventListener('click', ()=>{
        let scanner = document.querySelector('.scanner')
        scanner.classList.toggle('toggle')
        
        
      })

 
  
        function createAlertMessage(){
          let div = document.createElement('div');
          div.className = "alert-message"
          div.innerHTML = `
         
          <span id="alert-message">Successful! You may now click the search button by qr code</span>
          `
          let parentElement = document.querySelector('.parentElement')
          let theFirstChild = parentElement.children[2]
          let newElement = div
          parentElement.insertBefore(newElement, theFirstChild)
          
        }

      function onScanSuccess(qrCodeMessage) {
             let copyText = document.querySelector("#result");
        document.getElementById("result").innerHTML = qrCodeMessage;
        navigator.clipboard.writeText(`${copyText.value}`);
      
        createAlertMessage()
        window.location.href = '#alert-message';
      }

 
      function onScanError(errorMessage) {
        //handle scan error
      }
      var html5QrcodeScanner = new Html5QrcodeScanner("reader", {
        fps: 10,
        qrbox: 250,
      });
      html5QrcodeScanner.render(onScanSuccess, onScanError);

  
