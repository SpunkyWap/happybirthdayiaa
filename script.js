// =====================
// STARS
// =====================

const stars = document.getElementById("stars");

for(let i=0;i<150;i++){

    const star = document.createElement("div");

    star.classList.add("star");

    const size = Math.random()*3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random()*100 + "%";
    star.style.top = Math.random()*100 + "%";

    star.style.animationDelay =
    Math.random()*3 + "s";

    stars.appendChild(star);
}

// =====================
// FLOATING DECORATIONS
// =====================

const floatingDecor =
document.getElementById("floatingDecor");

const decorations =
["⭐","✨","🎈","🎉","","🌙"];

function createFloating(){

    const item =
    document.createElement("div");

    item.classList.add("float");

    item.innerHTML =
    decorations[
    Math.floor(
    Math.random()*decorations.length
    )];

    item.style.left =
    Math.random()*100 + "%";

    item.style.fontSize =
    (20 + Math.random()*25) + "px";

    floatingDecor.appendChild(item);

    setTimeout(()=>{
        item.remove();
    },12000);
}

setInterval(createFloating,800);

// =====================
// ELEMENTS
// =====================

const countdown =
document.getElementById("countdown");

const countdownSection =
document.getElementById(
"countdownSection"
);

const cakeSection =
document.getElementById(
"cakeSection"
);

const blowBtn =
document.getElementById(
"blowBtn"
);

const blowMessage =
document.getElementById(
"blowMessage"
);

const flames =
document.querySelectorAll(
".flame"
);

const letterButtonSection =
document.getElementById(
"letterButtonSection"
);

const openLetterBtn =
document.getElementById(
"openLetterBtn"
);

const letterSection =
document.getElementById(
"letterSection"
);

const envelope =
document.getElementById(
"envelope"
);

const closeLetterBtn =
document.getElementById(
"closeLetterBtn"
);

const popup =
document.getElementById(
"popup"
);

const yesBtn =
document.getElementById(
"yesBtn"
);

const noBtn =
document.getElementById(
"noBtn"
);

const resultSection =
document.getElementById(
"resultSection"
);

const resultImage =
document.getElementById(
"resultImage"
);

const resultText =
document.getElementById(
"resultText"
);

const music =
document.getElementById(
"bgMusic"
);

// =====================
// MUSIC START
// =====================

document.addEventListener(
"click",
()=>{
    music.play().catch(()=>{});
},
{once:true}
);

// =====================
// COUNTDOWN
// =====================

let seconds = 5;

const timer =
setInterval(()=>{

    seconds--;

    countdown.textContent =
    seconds;

    if(seconds <= 0){

        clearInterval(timer);

        countdownSection.classList.add(
        "hidden"
        );

        cakeSection.classList.remove(
        "hidden"
        );
    }

},1000);

// =====================
// CAKE BLOWING
// =====================

let blowCount = 0;

blowBtn.addEventListener(
"click",
()=>{

    blowCount++;

    if(blowCount === 1){

        blowMessage.innerHTML =
        "One more... 😹";

        return;
    }

    flames.forEach(flame=>{

        flame.classList.add("out");

    });

    blowMessage.innerHTML =
    "YAYYYYY 😹";

    blowBtn.disabled = true;

    setTimeout(()=>{

        letterButtonSection
        .classList.remove("hidden");

    },1500);

}
);

// =====================
// OPEN LETTER
// =====================

openLetterBtn.addEventListener(
"click",
()=>{

    letterSection.classList.remove(
    "hidden"
    );

    setTimeout(()=>{

        envelope.classList.add(
        "open"
        );

    },300);

}
);

// =====================
// CLOSE LETTER
// =====================

closeLetterBtn.addEventListener(
"click",
()=>{

    envelope.classList.remove(
    "open"
    );

    setTimeout(()=>{

        letterSection.classList.add(
        "hidden"
        );

        popup.classList.remove(
        "hidden"
        );

    },800);

}
);

// =====================
// YES BUTTON
// =====================

yesBtn.addEventListener(
"click",
()=>{

    popup.classList.add(
    "hidden"
    );

    resultSection.classList.remove(
    "hidden"
    );

    // REPLACE YES IMAGE HERE
    resultImage.src =
    "yes.png";

    resultText.innerHTML =
    "I knew it";

}
);

// =====================
// NO BUTTON
// =====================

let imageSize = 10;
let yesScale = 1;

noBtn.addEventListener(
"click",
()=>{

    resultSection.classList.remove(
    "hidden"
    );

    // REPLACE NO IMAGE HERE
    resultImage.src =
    "no.png";
    

    resultText.innerHTML =
    "";

    // Grow image
    imageSize += 50;

    resultImage.style.width =
    imageSize + "px";

    // Grow YES button
    yesScale += 0.5;

    if(yesScale > 10){
        yesScale = 10;
    }

    yesBtn.style.transform =
    `scale(${yesScale})`;

    // Move NO button
    const popupRect =
    popup.getBoundingClientRect();

    const btnWidth =
    noBtn.offsetWidth;

    const btnHeight =
    noBtn.offsetHeight;

    const maxX =
    popupRect.width - btnWidth;

    const maxY =
    popupRect.height - btnHeight;

    const x =
    Math.random() * maxX;

    const y =
    Math.random() * maxY;

    noBtn.style.left =
    x + "px";

    noBtn.style.top =
    y + "px";

    noBtn.style.right =
    "auto";

}
);

// =====================
// KEEP NO BUTTON SAFE
// =====================

window.addEventListener(
"resize",
()=>{

    noBtn.style.left = "220px";
    noBtn.style.top = "0px";

});
