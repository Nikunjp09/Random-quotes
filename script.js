const quotes=[
    "Keep your face to the sunshine and you can never see the shadow. — Helen Keller",
    "No one can make you feel inferior without your consent. — Eleanor Roosevelt",
    "You may be disappointed if you fail, but you are doomed if you don't try. — Beverly Sills",
    "In this life we cannot do great things. We can only do small things with great love. — Mother Teresa",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. — Thomas Edison",
    "The only limit to our realization of tomorrow will be our doubts of today. — Franklin D. Roosevelt",
    "Don't let the noise of other's opinions drown out your own inner voice. — Steve Jobs",
    "Ups and downs in life are very important to keep us going because a straight line even in an ECG means we are not alive. — Ratan Tata",
    "The successful warrior is the average man, with laser-like focus. — Bruce Lee",
    "All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents. — A. P. J. Abdul Kalam"
];

function quote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("ioio");
    quoteElement.textContent = quotes[randomIndex]; 
}