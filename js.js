var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};
            var elementsToShow = document.querySelectorAll('.show-on-scroll');
            function loop() {

                elementsToShow.forEach(function (element) {
                  if (isElementInViewport(element)) {
                    element.classList.add('animate__animated');
                    switch(element.dataset.animtype){
                        case "inLeft":element.classList.add('animate__fadeInLeft');break;
                        case "inRight":element.classList.add('animate__fadeInRight');break;
                        case "flipoutx":element.classList.add('animate__flipOutX');break;

                    }  
                    
                  } else {
                    element.classList.remove('animate__animated');  
                    switch(element.dataset.animtype){
                        case "inLeft":element.classList.remove('animate__fadeInLeft');break;
                        case "inRight":element.classList.remove('animate__fadeInRight');break;
                        case "flipoutx":element.classList.remove('animate__flipOutX');break;


                    } 
                  }
                });
              
                scroll(loop);
              }
              loop();
              function isElementInViewport(el) {
                // special bonus for those using jQuery
                if (typeof jQuery === "function" && el instanceof jQuery) {
                  el = el[0];
                }
                var rect = el.getBoundingClientRect();
                return (
                  (rect.top <= 0
                    && rect.bottom >= 0)
                  ||
                  (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight))
                ||
                  (rect.top >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
                );
              }

              const popupLinks = document.querySelectorAll('.popup_link');
              const body = document.querySelectorAll('.body');
              const lockPadding = document.querySelectorAll('.lock-padding');

              let unlock = true;

              const timeout="800";

              if (popupLinks.length > 0) {
                  for (let index = 0; index < popupLinks.length; index++) {
                    const popupLink = popupLinks[index];
                    popupLink.addEventListener("click", function (e){
                        const popupName = popupLink.getAttribute('href').replace('#', '');
                        const curentPopup = document.getElementById(popupName);
                        popupOpen(curentPopup);
                        e.preventDefault();
                    });S
                  }
              }
              function popupOpen(curentPopup) {
                if (curentPopup && unlock) {
                    const popupActive = document.querySelector('.popup.open');
                    if (popupActive) {
                        popupClose(popupActive, false);
                        } else{
                            bodyLock();
                        }
                        currentPopup.classList.add('open');
                        currentPopup.addEventListener("click", function (e) {
                            if (!e.target.closest('.popup_content')) {
                                popupClose(e.target.closest('.popup'));
                            }
                        });
                        }
                };
              function popupClose(popupActive, doUnlock = true){
                  if(unlock){
                      popupActive.classList.remove('open');
                      if (doUnlock) {
                          bodyUnlock();
                      }
                  } 
              }
              function bodyLock(){
                  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'p';
                  for (let index = 0; index < lockPadding.length; index++) {
                      const el = lockPadding[index];
                  }
                  body.style.paddingRight = lockPaddingValue;
                  body.classList.add('lock');
                  unlcok = false;
                  setTimeout(function(){
                      unlock = true;
                  }, timeout);
              }

              function boyUnLock(){
                  setTimeout(function () {
                      if (lockPadding > 0){
                      for (let index = 0; index < lockPadding.length; index++) {
                          const el = lockPadding[index];
                          el.style.paddingRight = '0px';
                      }
                    }
                    body.style.paddingRight = '0px';
                    body.classList.remove('lock');  
                  }, timeout);
                  unlock = false;
                  setTimeout(function(){
                      unlock = true;
                  }, timeout);
              }

              document.addEventListener('keydown', function (e) {
                  if (e.which === 27) {
                      const popupActive = document.querySelector('popul.open');
                      popupClose(popupActive);
                  }
              });