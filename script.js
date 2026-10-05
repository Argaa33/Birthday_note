/* ========================================
   ELEMENT
======================================== */

const cover =
    document.getElementById("cover");

const openButton =
    document.getElementById("openButton");

const message =
    document.getElementById("message");

const ending =
    document.getElementById("ending");

const nextButton =
    document.getElementById("nextButton");

const secondPage =
    document.getElementById("secondPage");

const secretButton =
    document.getElementById("secretButton");

const secretMessage =
    document.getElementById("secretMessage");

const restartButton =
    document.getElementById("restartButton");


/* ========================================
   BIRTHDAY MESSAGE
======================================== */

const birthdayMessage = `
HAPPY BIRTHDAYYY 🥳🎂!

Welcome to another chapter of your life!

Semoga di umur yang baru ini,
hidup kamu makin filled with happiness,
good things, and obviously...
good people.

Hopefully I'm included in that list sih 😌

Semoga semua yang you wish for
slowly comes true.

Semoga rezekinya makin lancar,
sehat selalu,
dan semua urusan kamu dipermudah.

And please,
jangan lupa bahagia yaa.

You deserve all the good things
in life, seriously.

Anyway,
enough of the sweet words
before I embarrass myself 😭
`;


/* ========================================
   TYPEWRITER
======================================== */

function typeMessage(text, speed = 25) {

    let index = 0;

    const messageContainer = message.parentElement;

    message.textContent = "";

    messageContainer.scrollTop = 0;

    ending.classList.remove("show");

    nextButton.classList.remove("show");


    const typing =
        setInterval(() => {

            if (index < text.length) {

                message.textContent +=
                    text.charAt(index);

                messageContainer.scrollTop =
                    messageContainer.scrollHeight;

                index++;

            } else {

                clearInterval(typing);

                messageContainer.scrollTop =
                    messageContainer.scrollHeight;


                setTimeout(() => {

                    ending.classList.add(
                        "show"
                    );


                    setTimeout(() => {

                        nextButton.classList.add(
                            "show"
                        );

                    }, 700);

                }, 500);

            }

        }, speed);
}


/* ========================================
   OPEN BOOK
======================================== */

openButton.addEventListener(
    "click",
    function () {

        /* Buka cover */

        cover.classList.add("open");


        /* Jalankan tulisan */

        setTimeout(() => {

            typeMessage(
                birthdayMessage,
                25
            );

        }, 900);

    }
);


/* ========================================
   TURN PAGE
======================================== */

nextButton.addEventListener(
    "click",
    function () {

        nextButton.classList.remove(
            "show"
        );

        secondPage.classList.add(
            "show"
        );

    }
);


/* ========================================
   SECRET MESSAGE
======================================== */

secretButton.addEventListener(
    "click",
    function () {

        secretMessage.classList.add(
            "show"
        );


        secretButton.style.display =
            "none";


        setTimeout(() => {

            restartButton.classList.add(
                "show"
            );

        }, 1000);

    }
);


/* ========================================
   READ AGAIN
======================================== */

restartButton.addEventListener(
    "click",
    function () {

        /* Tutup halaman kedua */

        secondPage.classList.remove(
            "show"
        );


        setTimeout(() => {

            /* Tutup kembali cover */

            cover.classList.remove(
                "open"
            );


            /* Reset pesan */

            message.textContent = "";

            ending.classList.remove(
                "show"
            );


            /* Reset tombol */

            nextButton.classList.remove(
                "show"
            );

            secretMessage.classList.remove(
                "show"
            );

            restartButton.classList.remove(
                "show"
            );


            secretButton.style.display =
                "inline-block";

        }, 900);

    }
);