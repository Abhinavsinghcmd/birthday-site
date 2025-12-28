function nextStep() {
  document.getElementById("page").innerHTML = `
    <h2>Question 1 😋</h2>
    <p>Do you like momos?</p>
    <button onclick="yesMomo()">YES</button>
    <button onclick="noMomo()">NO</button>
  `;
}

function yesMomo() {
  document.getElementById("page").innerHTML = `
    <h2>Correct answer 😌</h2>
    <p>Momos love you too.</p>
    <button onclick="questionTwo()">Next ➡️</button>
  `;
}

function noMomo() {
  document.getElementById("page").innerHTML = `
    <h2>Wait 😳</h2>
    <p>Are you sure? This can’t be changed.</p>
    <button onclick="questionTwo()">I’m sure</button>
    <button onclick="yesMomo()">Go back</button>
  `;
}

function questionTwo() {
  document.getElementById("page").innerHTML = `
    <h2>Question 2 👀</h2>
    <p>Do you know someone who wants to kill vamshi?</p>
    <button onclick="softYes()">MOMO</button>
    <button id="runBtn" onmouseover="runAway()">No</button>
  `;
}

function runAway() {
  const btn = document.getElementById("runBtn");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 200 + "px";
  btn.style.top = Math.random() * 200 + "px";
}

function softYes() {
  document.getElementById("page").innerHTML = `
    <h2>Hehe 💖</h2>
    <p>That someone feels lucky today.</p>
    <button onclick="finalPage()">Last page ➡️</button>
  `;
}

function finalPage() {
  document.getElementById("page").innerHTML = `
    <h1>🎉 Happy Birthday Jhanviii🎂</h1>
    <p>
      May your days be calm, 
      May you cross 10k followers soon,
      Momo deserves to have someone like you,
      Momo is happy to have you,
      please never change,
      please stay the way you are,
      please never leave me and go,
      i beg you stay with me forever,
      iam nothing without you,
      ive never met someone like you,
      i dont have anyone else but you,
        you are special to me,
        you mean the world to me,
        you are my everything,
        you complete me,
        plase dont go away,
        i miss you when you are not around,
        please come back soon,
        intentions are pure,
        this is just me expressing feelings in my way,
        just positivly because today is your birthday,
        and i want to make it special for you,
        i will do everything to make you happy,
        make you feel special,
        like no one else has ever done,
        tried my best to make this day special for you,
        this one is for you,
        thank you for being born,
        thank you for being in my life,
        thank you for being you,
      Wishing you a day filled with love, joy, and unforgettable moments.
      have a fantastic birthday!
      safe journeys ahead,
      rest well,
      sleep well,
      your smiles endless,  
      and your heart always light.
    </p>
    <p>
      Someone genuinely cares about you 💗
    </p>
  `;
}
