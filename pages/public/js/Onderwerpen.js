fetch("/api/onderwerpen")
  .then((mainOnderwerp) => mainOnderwerp.json())
  .then((mainOnderwerpText) => mainOnderwerpFetch(mainOnderwerpText));

//Onderwerp 1 server fetch

fetch("/api/onderwerp1")
  .then((myData1) => myData1.json())
  .then((textData1) => showCards1(textData1));

fetch("/api/onderwerp1_Sub1")
  .then((myData1_Sub1) => myData1_Sub1.json())
  .then((textData1_Sub1) => showCards1_Sub1(textData1_Sub1));

fetch("/api/onderwerp1_SubImg1")
  .then((myData1_SubImg1) => myData1_SubImg1.json())
  .then((textData1_SubImg1) => showCards1_SubImg1(textData1_SubImg1));

fetch("/api/onderwerp1_Sub2")
  .then((myData1_Sub2) => myData1_Sub2.json())
  .then((textData1_Sub2) => showCards1_Sub2(textData1_Sub2));

fetch("/api/onderwerp1_SubImg2")
  .then((myData1_SubImg2) => myData1_SubImg2.json())
  .then((textData1_SubImg2) => showCards1_SubImg2(textData1_SubImg2));

fetch("/api/onderwerp1_Sub3")
  .then((myData1_Sub3) => myData1_Sub3.json())
  .then((textData1_Sub3) => showCards1_Sub3(textData1_Sub3));

fetch("/api/onderwerp1_SubImg3")
  .then((myData1_SubImg3) => myData1_SubImg3.json())
  .then((textData1_SubImg3) => showCards1_SubImg3(textData1_SubImg3));

//Onderwerp 2 server fetch

fetch("/api/onderwerp2")
  .then((myData2) => myData2.json())
  .then((textData2) => showCards2(textData2));

fetch("/api/onderwerp2_Sub1")
  .then((myData2_Sub1) => myData2_Sub1.json())
  .then((textData2_Sub1) => showCards2_Sub1(textData2_Sub1));

fetch("/api/onderwerp2_SubImg1")
  .then((myData2_SubImg1) => myData2_SubImg1.json())
  .then((textData2_SubImg1) => showCards2_SubImg1(textData2_SubImg1));

fetch("/api/onderwerp2_Sub2")
  .then((myData2_Sub2) => myData2_Sub2.json())
  .then((textData2_Sub2) => showCards2_Sub2(textData2_Sub2));

fetch("/api/onderwerp2_SubImg2")
  .then((myData2_SubImg2) => myData2_SubImg2.json())
  .then((textData2_SubImg2) => showCards2_SubImg2(textData2_SubImg2));

fetch("/api/onderwerp2_Sub3")
  .then((myData2_Sub3) => myData2_Sub3.json())
  .then((textData2_Sub3) => showCards2_Sub3(textData2_Sub3));

fetch("/api/onderwerp2_SubImg3")
  .then((myData2_SubImg3) => myData2_SubImg3.json())
  .then((textData2_SubImg3) => showCards2_SubImg3(textData2_SubImg3));

//Onderwerp 3 server fetch

fetch("/api/onderwerp3")
  .then((myData) => myData.json())
  .then((textData) => showCards3(textData));

  fetch("/api/onderwerp3_Sub1")
  .then((myData3_Sub1) => myData3_Sub1.json())
  .then((textData3_Sub1) => showCards3_Sub1(textData3_Sub1));

fetch("/api/onderwerp3_SubImg1")
  .then((myData3_SubImg1) => myData3_SubImg1.json())
  .then((textData3_SubImg1) => showCards3_SubImg1(textData3_SubImg1));

fetch("/api/onderwerp3_Sub2")
  .then((myData3_Sub2) => myData3_Sub2.json())
  .then((textData3_Sub2) => showCards3_Sub2(textData3_Sub2));

fetch("/api/onderwerp3_SubImg2")
  .then((myData3_SubImg2) => myData3_SubImg2.json())
  .then((textData3_SubImg2) => showCards3_SubImg2(textData3_SubImg2));

fetch("/api/onderwerp3_Sub3")
  .then((myData3_Sub3) => myData3_Sub3.json())
  .then((textData3_Sub3) => showCards3_Sub3(textData3_Sub3));

fetch("/api/onderwerp3_SubImg3")
  .then((myData3_SubImg3) => myData3_SubImg3.json())
  .then((textData3_SubImg3) => showCards3_SubImg3(textData3_SubImg3));

//Main onderwerpen fetch functie

function mainOnderwerpFetch(mainOnderwerp) {
  const cards = mainOnderwerp;
  cardsContainer = document.querySelector(".fetch");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainer.innerHTML += `
      <div class="ond${i} ond">
          <img class = "ond-IMG" src="${card.img}" alt=""></img>
      <h2>${card.title}</h2>
        <p>
         ${card.description}
          <a href="Onderwerp${i}.html"><button class="ondBtn">
            button
          </button></a>
        </p>
      </div>
      `;
  }
}

//onderwerp 1 fetch functie's

function showCards1(data1) {
  const cards = data1;
  cardsContainer1 = document.querySelector(".fetchOnd1");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainer1.innerHTML += `
      <div class="ond${i} ond">
          <img class = "ond-IMG" src="${card.img}" alt=""></img>
      <h2>${card.title}</h2>
        <p>
         ${card.description}
          <a href="onderwerp0_Sub${i}.html"><button class="ondBtn">
            button
          </button></a>
        </p>
      </div>
      `;
  }
}

function showCards1_Sub1(data1) {
  const cards = data1;
  cardsContainerSub1 = document.querySelector(".fetchOnd1_Sub1");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainerSub1.innerHTML += `
      <h1 class="titletxt">${card.title}</h1>

      <ul class="specifications">
      ${card.list}
  </ul>

      <br>

      <div class="safety">
        <h2>Veiligheid</h2>
        <p>
        ${card.desc1}
        </p>
      </div>

      <div class="name">
        <h2>Naam</h2>
        <p>
        ${card.desc2}
        </p>
      </div>

      <div class="irregularies">
        <h2>Afwijkend</h2>
        <p>
        ${card.desc3}
        </p>
      </div>

      <a href="Onderwerp0.html"><button class="btn">Ga terug</button></a>
    </div>
  </div>
         `;
  }
}

function showCards1_SubImg1(data1) {
  const cards = data1;
  cardsContainerIMG1 = document.querySelector(".fetchOnd1_SubImg1");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainerIMG1.innerHTML += `
     <div class="display_container">
     <img
       class="display"
       src="${card.img}"
       alt="Glock-17"
     />
     <div class="display2">
       Prijs: ${card.prijs} <br />
       Merk: ${card.merk}
     </div>
   </div>
         `;
  }
}

function showCards1_Sub2(data1) {
  const cards = data1;
  cardsContainerSub2 = document.querySelector(".fetchOnd1_Sub2");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainerSub2.innerHTML += `
    <h1 class="titletxt">${card.title}</h1>

    <ul class="specifications">
    ${card.list}
    </ul>

    <div class="modification">
    ${card.desc}
    </div>

    <div class="railsystem">
    ${card.desc2}
    </div>

    <ul>
    ${card.list2}
    </ul>

    <div class="granade">
    ${card.desc3}
    </div>

    <div class="history">
    ${card.desc4}
    </div>
    <a href="Onderwerp0.html"><button class="btn">Ga terug</button></a>`;
  }
}

function showCards1_SubImg2(data1) {
  const cards = data1;
  cardsContainerIMG = document.querySelector(".fetchOnd1_SubImg2");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainerIMG.innerHTML += `
    <div class="display_container">
    <img class="display" src="${card.img}" alt="Colt C7/C8" />
    <div class="display2">
      Prijs: ${card.prijs}<br/>
      Merk: ${card.merk}.
    </div>
  </div>`;
  }
}

function showCards1_Sub3(data1) {
  const cards = data1;
  cardsContainer = document.querySelector(".fetchOnd1_Sub3");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainer.innerHTML += `
    <h1 class="titletxt">${card.title}</h1>
    <p class="txt1">
    ${card.desc1}
    </p>

    <ul class="specifications">
    ${card.list}
    </ul>

    <div class="2types">
    ${card.desc2}
    </div>

    <div class="patronen">
    ${card.desc3}
    </div>

    <div class="irregularies">
    ${card.desc4}
    </div>
    <a href="Onderwerp0.html"><button class="btn">Ga terug</button></a>
`;
  }
}

function showCards1_SubImg3(data1) {
  const cards = data1;
  cardsContainerIMG = document.querySelector(".fetchOnd1_SubImg3");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainerIMG.innerHTML += `
    <div class="display_container">
    <img
      class="display"
      src="${card.img}"
      alt="Mossberg shotgun"
    />
    <div class="display2">
      Prijs: ${card.prijs}<br />
      Merk: ${card.merk}
    </div>
          `;
  }
}

//onderwerp 2 fetch functie's

function showCards2(data) {
  const cards = data;
  cardsContainer = document.querySelector(".fetchOnd2");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainer.innerHTML += `
      <div class="ond${i} ond">
          <img class = "ond-IMG" src="${card.img}" alt=""></img>
      <h2>${card.title}</h2>
        <p>
         ${card.description}
          <a href="onderwerp1_Sub${i}.html"><button class="ondBtn">
            button
          </button></a>
        </p>
      </div>
      `;
  }
}


function showCards2_Sub1(data1) {
  const cards = data1;
  cardsContainer = document.querySelector(".fetchOnd2_Sub1");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainer.innerHTML += `
    <h1 class="titletxt">${card.title}</h1>
    <p class="txt1">
    ${card.desc1}
</p>
    <br>
    <h2>Specificaties</h2>
    <lu class="txt1">
    ${card.list}
</lu>
    <br>
    <h2>ingrediënten</h2>
    <p class="txt1">
    ${card.desc2}
    </p>
    <a href="Onderwerp1.html"><button class="btn">Go back</button></a>
  </div>`;
  }
}

function showCards2_SubImg1(data1) {
  const cards = data1;
  cardsContainerIMG = document.querySelector(".fetchOnd2_SubImg1");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainerIMG.innerHTML += `
     <div class="display_container">
     <img
       class="display"
       src="${card.img}"
       alt="Walkers"
     />
     <div class="display2">
       Prijs: ${card.prijs} <br />
       Merk: ${card.merk}
     </div>
   </div>
         `;
  }
}

function showCards2_Sub2(data1) {
  const cards = data1;
  cardsContainer = document.querySelector(".fetchOnd2_Sub2");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainer.innerHTML += `
    <h1 class="titletxt">${card.title}</h1>
    <p class="txt1">
    ${card.desc1}
    </p>
    <br>
    <h2>Specificaties</h2>
    <lu class="txt1">
    ${card.list}
    </lu>
    <br>
    <a href="Onderwerp1.html"><button class="btn">Go back</button></a>
    </div>
    `;
  }
}

function showCards2_SubImg2(data1) {
  const cards = data1;
  cardsContainerIMG = document.querySelector(".fetchOnd2_SubImg2");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainerIMG.innerHTML += `
    <div class="display_container">
    <img class="display" src="${card.img}" alt="" />
    <div class="display2">
      Prijs: ${card.prijs}<br/>
      Merk: ${card.merk}.
    </div>
  </div>`;
  }
}

function showCards2_Sub3(data1) {
  const cards = data1;
  cardsContainer = document.querySelector(".fetchOnd2_Sub3");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainer.innerHTML += `
    <h1 class="titletxt">${card.title}</h1>
    <p class="txt1">
    ${card.desc1}
    </p>
    <br>
    <h2>Specificaties</h2>
    <lu class="txt1">
    ${card.list}
    </lu>
    <br>
    <a href="Onderwerp1.html"><button class="btn">Go back</button></a>
    </div>`;
  }
}

function showCards2_SubImg3(data1) {
  const cards = data1;
  cardsContainerIMG = document.querySelector(".fetchOnd2_SubImg3");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainerIMG.innerHTML += `
    <div class="display_container">
    <img
      class="display"
      src="${card.img}"
      alt=""
    />
    <div class="display2">
      Prijs: ${card.prijs}<br />
      Merk: ${card.merk}
    </div>
          `;
  }
}

//onderwerp 3 fetch functie's

function showCards3(data) {
  const cards = data;
  cardsContainer = document.querySelector(".fetchOnd3");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainer.innerHTML += `
       <div class="ond${i} ond">
           <img class = "ond-IMG" src="${card.img}" alt=""></img>
       <h2>${card.title}</h2>
         <p>
          ${card.description}
           <a href="onderwerp2_Sub${i}.html"><button class="ondBtn">
             button
           </button></a>
         </p>
       </div>
       `;
  }
}

function showCards3_Sub1(data1) {
  const cards = data1;
  cardsContainer = document.querySelector(".fetchOnd3_Sub1");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainer.innerHTML += `
    <h1 class="titletxt">${card.title}</h1>
      <p class="txt1">
      ${card.desc1}

        
        <p class = "txt1">
        ${card.desc2}
        </p>
          
      </p>
      <a href="Onderwerp2.html"><button class = "btn">Ga terug</button></a>
    </div>;`
  }
}

function showCards3_SubImg1(data1) {
  const cards = data1;
  cardsContainerIMG = document.querySelector(".fetchOnd3_SubImg1");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainerIMG.innerHTML += `
     <div class="display_container">
     <img
       class="display"
       src="${card.img}"
       alt="kiryu"
     />
     <div class="display2">
       Prijs: ${card.prijs} <br />
       Merk: ${card.merk}
     </div>
   </div>
         `
  }
}


function showCards3_Sub2(data1) {
  const cards = data1;
  cardsContainer = document.querySelector(".fetchOnd3_Sub2");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainer.innerHTML += `
    <h1 class="titletxt">${card.title}</h1>
      <p class="txt1">
      ${card.desc1}

        

          
      </p>
      <a href="Onderwerp2.html"><button class = "btn">Ga terug</button></a>
    </div>`
  }
}

function showCards3_SubImg2(data1) {
  const cards = data1;
  cardsContainerIMG = document.querySelector(".fetchOnd3_SubImg2");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainerIMG.innerHTML += `
    <div class="display_container">
     <img
       class="display"
       src="${card.img}"
       alt="link"
     />
     <div class="display2">
       Prijs: ${card.prijs} <br />
       Merk: ${card.merk}
     </div>
   </div>
         `
  }
}

function showCards3_Sub3(data1) {
  const cards = data1;
  cardsContainer = document.querySelector(".fetchOnd3_Sub3");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainer.innerHTML += `
    <h1 class="titletxt">${card.title}</h1>
      <p class="txt1">
      ${card.desc1}

        

          
      </p>
      <a href="Onderwerp2.html"><button class = "btn">Ga terug</button></a>
    </div>`
    
;
  }
}

function showCards3_SubImg3(data1) {
  const cards = data1;
  cardsContainerIMG = document.querySelector(".fetchOnd3_SubImg3");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainerIMG.innerHTML += `
    <div class="display_container">
     <img
       class="display"
       src="${card.img}"
       alt="link"
     />
     <div class="display2">
       Prijs: ${card.prijs} <br />
       Merk: ${card.merk}
     </div>
   </div>
          `;
  }
}