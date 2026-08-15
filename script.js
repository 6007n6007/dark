/* =====================================================
   DARK // BIRTHDAY PROTOCOL
   MAIN SCRIPT
===================================================== */


const starsContainer =
    document.getElementById("stars");


const decryptBtn =
    document.getElementById("decryptBtn");


const welcomeScreen =
    document.getElementById("welcomeScreen");


const birthdayScreen =
    document.getElementById("birthdayScreen");


const messageBtn =
    document.getElementById("messageBtn");


const messageContainer =
    document.getElementById("messageContainer");



/* =====================================================
   CREATE STARS
===================================================== */


for (let i = 0; i < 220; i++) {

    const star =
        document.createElement("div");


    star.classList.add("star");


    star.style.left =
        Math.random() * 100 + "%";


    star.style.top =
        Math.random() * 100 + "%";


    const size =
        Math.random() * 2.5 + 0.5;


    star.style.width =
        size + "px";


    star.style.height =
        size + "px";


    star.style.animationDelay =
        Math.random() * 4 + "s";


    star.style.animationDuration =
        Math.random() * 4 + 2 + "s";


    starsContainer.appendChild(star);
}



/* =====================================================
   DECRYPT BUTTON
===================================================== */


decryptBtn.addEventListener(
    "click",
    () => {

        decryptBtn.disabled =
            true;


        decryptBtn.innerHTML = `
            <span>DECRYPTING...</span>
            <b>◌</b>
        `;


        /*
            Start glitch effect
        */

        document.body.classList.add(
            "glitch"
        );


        /*
            Access granted
        */

        setTimeout(() => {

            decryptBtn.innerHTML = `
                <span>ACCESS GRANTED</span>
                <b>✓</b>
            `;

        }, 1200);


        /*
            Open birthday screen
        */

        setTimeout(() => {

            welcomeScreen.style.opacity =
                "0";


            welcomeScreen.style.transform =
                "scale(0.92)";


            birthdayScreen.classList.add(
                "active"
            );


            document.body.classList.remove(
                "glitch"
            );


        }, 1800);

    }
);



/* =====================================================
   OPEN MESSAGE
===================================================== */


messageBtn.addEventListener(
    "click",
    () => {

        messageContainer.classList.toggle(
            "open"
        );


        /*
            Change button text
        */

        if (
            messageContainer.classList.contains(
                "open"
            )
        ) {

            messageBtn.innerHTML = `
                <span>CLOSE MESSAGE</span>
                <b>↑</b>
            `;

        } else {

            messageBtn.innerHTML = `
                <span>OPEN YOUR MESSAGE</span>
                <b>↓</b>
            `;

        }

    }
);



/* =====================================================
   MOUSE / TOUCH LIGHT EFFECT
===================================================== */


document.addEventListener(
    "pointermove",
    (event) => {

        const x =
            event.clientX /
            window.innerWidth *
            100;


        const y =
            event.clientY /
            window.innerHeight *
            100;


        document.body.style.background =
            `
            radial-gradient(
                circle at ${x}% ${y}%,
                #17102e 0%,
                #090713 35%,
                #030307 75%
            )
            `;

    }
);F
