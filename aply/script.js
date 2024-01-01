var launchModal = function (object) {

  // Declare Variables
  var modal = document.getElementById("modal");
  // Get a copy of the HTML wihin the script modal__template
  var template = document.getElementById("modal__template").innerHTML;

  // Add new object here to use as content template
  var message = {
    resuableModal: { "title": "WARNING!", "content": "\ud83c\uddfa\ud83c\uddf8 To distribute free music from our platform, you must invite 3 friends to our Discord server and follow us on Instagram.‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎\ud83c\uddf9\ud83c\uddf7 Platformumuzdan ücretsiz müzik dağıtmak için 3 arkadaşınızı Discord sunucumuza davet etmeniz ve bizi Instagram'dan takip etmeniz gerekmektedir.", "button1": "OK" },
    gettingStarted: { "title" : "Follow ConyCord Instagram Account", "content": "\ud83c\uddfa\ud83c\uddf8 Follow ConyCord's Official Instagram account by clicking the button. Then move on to the next stage. (Will be checked). ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ud83c\uddf9\ud83c\uddf7 ConyCord'un Resmi Instagram hesabını butona tıklayarak takip edin. Daha sonra bir sonraki aşamaya geçin. (Kontrol edilecek)." ,"button2": "Follow Instagram", "button2Link": "https://www.instagram.com/conycord/" },
    aboutMe: { "title": "Join ConyCord Discord Server", "content": "\ud83c\uddfa\ud83c\uddf8 Join ConyCord's Official Discord server by clicking the button. Then invite 3 friends to the server. (Will be checked). ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  \ud83c\uddf9\ud83c\uddf7 Düğmeye tıklayarak ConyCord'un Resmi Discord sunucusuna katılın. Daha sonra 3 arkadaşınızı sunucuya davet edin. (Kontrol edilecek).", "button2": "Join Discord", "button2Link": "https://discord.gg/Hdh9emsj2W" },
    moreDetails: { "title" : "Continue Create Release", "content": "\ud83c\uddfa\ud83c\uddf8 AIf you have met our conditions, you can continue publishing your song on all platforms by clicking the button below. ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \ud83c\uddf9\ud83c\uddf7 Koşullarımızı karşıladıysanız aşağıdaki butona tıklayarak şarkınızı tüm platformlarda yayınlamaya devam edebilirsiniz." ,"button2": "Continue Distribution", "button2Link": "https://forms.gle/jnekM6dt1w4fWSq67" } };
  
    modal.classList.add("show");
  (function () {
    function removeLink() {
      var temp = button2;
      button2Link.parentNode.removeChild(button2Link);
      objEl.getElementsByTagName("footer")[0].appendChild(temp);
    }
    var prevModal = document.getElementById("objEl");
    if (prevModal) {prevModal.parentNode.removeChild(prevModal);;}

    // Save message object as data for easy reference
    var data = message[object];

    // Create pseudo element and fill it with HTML include in script#modal__template
    var objEl = document.createElement('div');
    objEl.innerHTML = template;
    objEl.setAttribute("id", "objEl");

    // Use tag names to access elements because ID selector doesn't work on elements
    // not yet in DOM
    var button1 = objEl.getElementsByClassName("modal__button1")[0];
    var button2 = objEl.getElementsByClassName("modal__button2")[0];
    var button2Link = objEl.getElementsByClassName("modal__button2link")[0];

    // Append content to title and main
    objEl.getElementsByTagName("h2")[0].appendChild(document.createTextNode(data.title));
    objEl.getElementsByTagName("main")[0].appendChild(document.createTextNode(data.content));

    // If button1 is specified in data, add text, otherwise remove
    if (data.button1) {
      button1.appendChild(document.createTextNode(data.button1));
    } else {
      button1.parentNode.removeChild(button1);;
    }
    // If button2link is specified, add link to button 2. Otherwise remove a tag, but keep button2
    if (data.button2Link) {
      button2Link.setAttribute("href", data.button2Link);
    } else {
      removeLink();
    }
    // If button2 is specified in data, add text, otherwise remove      
    if (data.button2) {
      button2.appendChild(document.createTextNode(data.button2));
    } else {
      button2.parentNode.removeChild(button2);
    }
    // Add pseudo element to document
    document.getElementById("modal__dialog").appendChild(objEl);

  })();

  // Closes modal when called
  function closeModal() {
    console.log("close");
    modal.classList.remove("show");
  }

  // Bind close event to close button and button1
  var closeButtons = modal.getElementsByClassName("modal__close");
  for (var i = 0; i < closeButtons.length; i++) {closeButtons[i].onclick = closeModal;}

  // Close modal if it is clicked. Does not fire if target is modal__dialog or child
  var modalDialog = document.getElementById('modal__dialog');

  //I'm using "click" but it works with any event
  modal.addEventListener('click', function (event) {
    var isClickInside = modalDialog.contains(event.target);

    if (!isClickInside) {
      //the click was outside the specifiedElement, do something
      closeModal();
    }
  });

};

// Launch modal on page load
launchModal("resuableModal");

// Launch modal when buttons are clicked
document.getElementById("instagram").addEventListener('click', function () {launchModal("gettingStarted");});
document.getElementById("discord").addEventListener('click', function() { launchModal("aboutMe"); });
document.getElementById("accept").addEventListener('click', function() { launchModal("moreDetails"); });

(()=> {
  function setup() {
     const canvas = document.getElementById('canvas');
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
    
    return {
      canvas,
      canvasContext: canvas.getContext('2d'),
      numberOfSnowBalls: 150
    }
     
  }
  
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function createSnowBalls(canvas, numberOfSnowBalls) {
    const x = [...Array(numberOfSnowBalls)].map(()=> {
      return  {
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        opacity: random(0.2, 1),
        radius: random(0.1, 2),
        speedX: random(-5, 1),
        speedY: random(1, 3)
      };
    });
    return x;
  }
  
  function drawSnowBall(canvasContext, snowBall) {
    canvasContext.beginPath();
    canvasContext.arc(snowBall.x,snowBall.y, snowBall.radius, 0, Math.PI * 2);
    canvasContext.fillStyle = `rgba(255,255,255, ${snowBall.opacity})`;
    canvasContext.fill();
  }
  
  function moveSnowBall(canvas, snowBalls) {
    if(snowBalls.x > canvas.widht) {
      snowBalls.x = 0;
    } else if( snowBalls.x < 0) {
      snowBalls.x = canvas.width;
    }
    
    if(snowBalls.y > canvas.height) { 
      snowBalls.y = 0;
    }
    
    snowBalls.x += snowBalls.speedX;
    snowBalls.y += snowBalls.speedY;
  }
  
  function run() {
    const {
      canvas,
      canvasContext,
      numberOfSnowBalls
    } = setup();
    const snowBalls = createSnowBalls(canvas, numberOfSnowBalls)
    
    console.log(snowBalls)
    
    setInterval(()=>{
        canvasContext.clearRect(0,0,canvas.width, canvas.height)
        snowBalls.forEach((snowBalls)=> drawSnowBall(canvasContext, snowBalls));
        snowBalls.forEach((snowBalls)=> moveSnowBall(canvas, snowBalls));
    },50)
    
  }
  run();
})();
