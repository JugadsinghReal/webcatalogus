import express from 'express'
const app = express()
const port = 3000


app.use(express.static("public"))

const onderwerpen = [
  {title: "Militaire wapens", description: "De onderstaande knop brengt u naar onze nieuwste assortiment van vuurwapens.", img: "../images/Glock-17 gen-4.png" },
  {title: "Engelse snacks", description: "Hier vindt u de meeste bekende snacks die engeland heeft te bieden!", img: "../images/walkers.png" },
  {title: "Video Games", description: "Click hier voor een paar populaire video spellen!", img: "../images/yakuze0.jpg" },
];

//Onderwerp 1 Array's

const onderwerp1 = [
  {title: "Glock-17 Gen-4 pistool", description: "Click hier als u meer informatie wilt weten van dit betrouwbare pistool.", img: "../images/Glock-17 gen-4.png" },
  {title: "Colt C7/C8-geweer", description: "Click hier als u meer informatie wilt weten van dit efficiënte geweer.", img: "../images/C8-geweer.png" },
  {title: "Mossberg-shotgun", description: "Click hier als u meer informatie wilt weten over deze krachtige shotgun.", img: "../images/Mossberg-shotgun.png" },
];

const onderwerp1_Sub1 = [
  {title: "Glock-17 Gen-4 pistool", 
  list: "<h2>Specificaties</h2><li>producent: Glock GmbH</li><li>lengte: 20,3 centimeter</li><li>gewicht: 870 gram</li><li>munitie: 9mm Parabellum (9 x 19mm)</li><li>magazijn: 17 patronen</li><li>effectieve dracht: 40 meter maximaal</li><li>in gebruik bij: alle krijgsmachtdelen van nederland</li>",
  desc1: "Het wapen heeft 3 veiligheden die ervoor zorgen dat een geladen wapen automatisch op veilig staat. Dit voorkomt dat een wapen afgaat bij stoten of vallen. Het wapen vuurt pas als de militair de trekkerveiligheid indrukt en de trekker helemaal overhaalt.",
  desc2: "De Glock 17 Gen4 dankt zijn naam aan het feit dat het het 17e patent was van de Oostenrijkse fabrikant Glock GmbH. Het wapen is grotendeels van kunststof, behalve loop, slede en kamer. Het bestaat uit 33 onderdelen, wat in vergelijking weinig is.",
  desc3: "Het wapen onderscheidt zich van andere pistolen door de vierkante slede en het ontbreken van een hamer. De loop wijkt ook af van gebruikelijk. Bij de meeste pistolen heeft de loop groeven die de kogel een draaiing geven. Die groeven, ook wel ‘trekken en velden’ genoemd. De loop van de Glock 17 Gen4 is 6-hoekig (hexagonaal) en heeft minder gaslekken. Hierdoor ligt de mondingssnelheid hoger dan bij conventionele 'trekken en velden'. Dit zorgt voor meer trefenergie zonder dat er meer kruit nodig is."}
]

const onderwerp1_SubImg1 = [
  {img: "../images/Glock-17 gen-4.png", prijs: "Prijs: $379.99", merk: "Merk: Glock Ges.m.b.H." }
]

const onderwerp1_Sub2 = [
  {title: "C8-geweer", 
  list: "<h2>Specificaties</h2><li>lengte: circa 100 centimeter (C7), circa 85 centimeter (C8)</li><li>gewicht: 3,92 kilo, bijna 7 kilo met granaatwerper</li><li>bereik: maximaal effectieve dracht 550 meter</li><li>kaliber: 5.56mm (5.56 x 45mm, standaard NAVO-kaliber)</li><li>magazijn: 30 patronen</li><li>in gebruik bij: alle krijgsmachtdelen van nederland</li>",
  list2: "<h2>Schietstanden</h2><li>S - safe, het wapen kan niet worden afgevuurd;</li><li>R – repeat, het wapen vuurt 1 kogel per keer dat de trekker wordtovergehaald;</li><li> AUTO – automatic, het wapen blijft vuren tot het magazijn leeg is of de schutter de trekker loslaat (C7A1).</li>",
  desc1: "<h2>modificatie</h2><p>Vanaf 2009 zijn de C7’s en C8’s gemodificeerd naar de laatste eisen. Alle 25.000 wapens zijn uitgerust met onder andere een telescopische kolf, een aangepaste vuurregelaar en patroonhouderpal en een railsysteem. Ook is een nieuwe coating aangebracht. De gemoderniseerde versies heten C7NLD en C8NLD. Ze kregen ook een handgreep met uitschuifbare tweepoot voor een stabielere liggende schietpositie.</p>",
  desc2: "<h2>Railsysteem</h2><p>Op het railsysteem worden kijkers geplaatst zoals de niet vergrotende ‘red dot’-richtkijker Aimpoint CompM4. Deze wordt gebruikt met 2 geopende ogen. De schutter verliest zo de omgeving niet uit het (andere) oog. Op de rail kunnen ook andere toevoegingen worden geplaatst, zoals de voorsteun/handgreep van Brügger&Thomet, een vergrotende Aimpoint 3X. Daarnaast gebruiken infanteristen en mariniers de laser module double beam (LMD) van Rheinmetall, een infrarood laserrichtmiddel. Het KCT, de MARSOF en BSB gebruiken de laser-lichtmodule (LLM) van dezelfde fabrikant. Die combineert een infrarood richtmiddel met een krachtige lamp. </p>",
  desc3: "<h2>Granaatwerper</h2><p> Het wapen kan worden voorzien van een underslung grenade launcher (UGL) die 40mm-granaten verschiet.</p>",
  desc4: "<h2>Geschiedenis</h2> <p> De Colt C7 is een afgeleide van de beroemde M16 die van de AR15 afstamt. Deze stamt weer af van de AR10. Dit wapen is de eigenlijke stamhouder van de C7 en werd geproduceerd door het voormalige Nederlandse staatsbedrijf De Artillerie-Inrichtingen. </p>"}
]

const onderwerp1_SubImg2 = [
  {img: "../images/C8-geweer.png", prijs: "Prijs: $379.99", merk: "Merk: De Artillerie-Inrichtingen" }
]

const onderwerp1_Sub3 = [
  {title: "Mossberg-shotgun", 
  list: "<h2>Specificaties</h2><li>lengte: 1,16 meter (volledig)</li><li>gewicht: 4 kilo (ongeladen)</li><li>kaliber: 12 gauge (= 18.2mm)</li><li>magazijnbuis: 8 patronen van 7 centimeter (2,75 inch) of 7 patronenvan 7,6 centimeter (3 inch)</li><li>patroonaanvoer: pompmechanisme</li><li>richtmiddelen: oogdop, korrel</li><li>trekkerdruk: ongeveer 2,7 kilo</li><li>type kolf: schuifkolf (5 standen)</li><li>effectief bereik: zo’n 30-40 meter (varieert per munitiesoort)</li><li>in gebruik bij: Korps Commandotroepen, Korps Mariniers, 11Luchtmobiele Brigade, infanteriepelotons</li>",
  desc1: "Onder de loop zit het buismagazijn met 7 of 8 patronen, afhankelijk van de lengte van het patroon. De aanvoer van de patronen gebeurt door een pompmechanisme dat met de hand wordt bediend.",
  desc2: "<h2>2 types</h2> <p> De Mossberg is bedoeld voor oorlogvoering in de jungle en het uitschakelen van mensen of materieel op korte afstand. Eventueel kan het wapen worden gebruikt om te ‘breachen’ (het openschieten van bijvoorbeeld deuren). Om het te richten, heeft de M-590 een oogdop (aan de linkerzijde) en een korrel (aan de rechterzijde). </p>",
  desc3: "<h2>patronen</h2> <p> Het wapen kan verschillende patronen afschieten: hagel-(buckshot), traangas-, breach- en oefenpatronen. </p>",
  desc4: "<h2>biezonderheden</h2> <p> Het wapen heeft een cilindrisch geboorde gladde loop die alle typen 12 gauge-munitie kan verschieten (millspec heavy all barrel). De shotgun is voorzien van een antiroestcoating en een veiligheidsschuif die zowel links- als rechtshandig is te bedienen. </p>"}
]

const onderwerp1_SubImg3 = [
  {img: "../images/Mossberg-shotgun.png", prijs: "Prijs: $656.99", merk: "Merk: O.F. Mossberg & sons" }
]

//Onderwerp 2 Array's

const onderwerp2 = [
  {title: "Walkers", description: "Koop nu de bekende walker crisps.", img: "../images/walkers.png" },
  {title: "Custard cream", description: "Click hier voor meer informatie over de britse custard cream's.", img: "../images/custard cream.png" },
  {title: "Chocolate digestives", description: "Probeer nu de populaire digestives die vaak met thee worden gegeten.", img: "../images/chocolate digestives.png" },
]

const onderwerp2_Sub1 = [
  {title: "Walkers", 
  list: "<li>Per 100g:</li> <li>Energy 2162 kJ</li> <li>Energy 518 kcal</li> <li>Vet 31g</li> <li>Verzadigt 2.5g</li> <li>Koolhydraat 52g</li> <li>Suikers 0.4g</li> <li>Zetmeel 3.9g</li> <li>Eiwit 6.4g</li> <li>Zout 1.3g</li> <br> <li>Each inner pack contains 1 serving</li> <li>* Reference intake of an average adult (8400 kJ of 2000 kcal)</li>",
  desc1: "Walkers Crisps is een van de meest bekende Britse snack's die meestal gemaakt wordt in Engeland en Ireland. Er zijn veel diverse smaken beschikbaar, hoewel je nooit verkeerd kan gaan met de klassieke aardappel chips. Probeer de walkers nu en kom erachter waarom dit een van de populairste chip merken is in Engeland.",
  desc2: "Aardappelen, Plantaardige olien (Zonnebloem, Koolzaad, in verschillende proporties), Zout, Antioxidanten (Rozemarijn-extract, Ascorbinezuur, Tocoferolrijk extract, Citroenzuur)."}
]

const onderwerp2_SubImg1 = [
  {img: "../images/walkers.png", prijs: "Prijs: £1.98", merk: "Merk: Walkers" }
]

const onderwerp2_Sub2 = [
  {title: "Custard cream", 
  list: "<li>Per 100g:</li> <li>Energy 1989kJ</li> <li>Energy 474kcal</li> <li>Vet 19.0g</li> <li>Verzadigt 10.0g</li> <li>Mono-onverzadigde stoffen 7.0g</li> <li>Meervoudig onverzadigde stoffen 2.0g</li> <li>Koolhydraat 68.8g</li> <li>Suikers 26.5g</li> <li>Zetmeel 38.6g</li> <li>Vezel 3.0g</li> <li>Eiwit 5.5g</li> <li>Zout 0.44g</li> <br> <li>Elke binnenverpakking bevat 1 portie</li> <li>* Referentie-inname van een gemiddelde volwassene (8400 kJ of 2000 kcal)</li>",
  desc1: "Een custard cream is een type van een sandwich cookie dat populair is in de Britse eilanden en gevuld met een custard-smaakende center. De vulling smaakt als vanille en is daarom meer hetzelfde als de smaak van custard gemaakt met poeder inplaats van ei."}
]

const onderwerp2_SubImg2 = [
  {img: "../images/custard cream.png", prijs: "Prijs: £5,12", merk: "Merk: McVitie's" }
]

const onderwerp2_Sub3 = [
  {title: "Chocolate digestives", 
  list: "<li>Per 100g:</li> <li>Energy 2065kJ</li> <li>Energy 474kcal</li> <li>Vet 24.0g</li> <li>Verzadigt 13.0g</li> <li>Koolhydraat 61.0g</li> <li>Suikers 28.0g</li> <li>Zout 1.0g</li>",
  desc1: "Een digestive cookie, is omschreven als een zoete-maaltijds cookie, Een semi-zoete cookie dat onstaan is uit Schotland."}
]

const onderwerp2_SubImg3 = [
  {img: "../images/chocolate digestives.png", prijs: "Prijs:  £3,82", merk: "Merk: McVitie's" }
]

//Onderwerp 3 Array's

const onderwerp3 = [
  {title: "Yakuza 0", description: "Hier zie je een van serieuze spellen dat gaat over Japanse maffia.", img: "../images/yakuze0.jpg" },
  {title: "Breath of the wild", description: "Een open wereld avontuur waar je het kwaad moet verslaan.", img: "../images/breath of the wild.png" },
  {title: "Escape the backrooms", description: "Een spel gebaseerd op een urban legend waar je entiteiten moet ontsnappen.", img: "../images/escape the backrooms.png" },
]

const onderwerp3_sub1 = [
  {title: "about Yakuza 0", 
  desc1: "<h2>Game Story:</h2><p>Speel als Kazuma Kiryu en ontdek hoe hij in een wereld van problemen terechtkomt wanneer een eenvoudige incasso mislukt en zijn doelwit vermoord wordt. Stap dan in de schoenen met zilveren neuzen van Goro Majima en verken zijn ‘normale’ leven als eigenaar van een cabaretclub.</p>",
  desc2: "<h2>Mechanics:</h2><p>Schakel onmiddellijk tussen drie verschillende vechtstijlen en versla allerlei boeven, misdadigers, boeven en schurken. Til de strijd naar een hoger niveau door gebruik te maken van omgevingsvoorwerpen zoals fietsen, wegwijzers en autodeuren voor bloedstollende combo's en woeste take-downs.</p>",
}
]

const onderwerp3_SubImg1 = [
  {img: "../images/kiryu-closeup-kiryu-zoom.gif", prijs: "Prijs: €20", merk: "Merk: Ryu Ga Gotoku Studio" }
]

const onderwerp3_Sub2 = [
  {title: "About Breath of the wild", 
  desc1: "Het spel begint met een aan geheugenverlies lijdende Link die ontwaakt uit een slaap van honderd jaar. Zelda strijdt al die tijd al in haar eentje tegen 'Ganon, het Onheil' (Calamity Ganon), maar is aan het eind van haar krachten. Aan Link de taak om het kwaad te verslaan en te voorkomen dat de wereld wordt vernietigd.",
  }
]

const onderwerp3_SubImg2 = [
  {img: "../images/breath-of-the-wild-hinox.png", prijs: "Prijs: €60", merk: "Merk: Nintendo" }
]

const onderwerp3_Sub3 = [
  {title: "About Escape the backrooms", 
  desc1: "Escape the Backrooms is een coöp-horrorverkenningsspel voor 1-4 spelers. Baan je een weg door angstaanjagende achterkamerniveaus terwijl je entiteiten en andere gevaren ontwijkt om te proberen te ontsnappen. Gratis contentupdates met nieuwe niveaus en spelmodi zorgen ervoor dat de community beloond wordt.",
}
]

const onderwerp3_SubImg3 = [
  {img: "../images/image-258.png", prijs: "Prijs: €8,19", merk: "Merk: Fancy Games" }
]

app.get('/api/onderwerpen', (req, res) => {
  res.json(onderwerpen);
})

//Onderwerp 1 responds

app.get('/api/onderwerp1', (req, res) => {
  res.json(onderwerp1);
})

app.get('/api/onderwerp1_Sub1', (req, res) => {
  res.json(onderwerp1_Sub1);
})

app.get('/api/onderwerp1_SubImg1', (req, res) => {
  res.json(onderwerp1_SubImg1);
})

app.get('/api/onderwerp1_Sub2', (req, res) => {
  res.json(onderwerp1_Sub2);
})

app.get('/api/onderwerp1_SubImg2', (req, res) => {
  res.json(onderwerp1_SubImg2);
})

app.get('/api/onderwerp1_Sub3', (req, res) => {
  res.json(onderwerp1_Sub3);
})

app.get('/api/onderwerp1_SubImg3', (req, res) => {
  res.json(onderwerp1_SubImg3);
})

//Onderwerp 2 responds

app.get('/api/onderwerp2', (req, res) => {
  res.json(onderwerp2);
})

app.get('/api/onderwerp2_Sub1', (req, res) => {
  res.json(onderwerp2_Sub1);
})

app.get('/api/onderwerp2_SubImg1', (req, res) => {
  res.json(onderwerp2_SubImg1);
})

app.get('/api/onderwerp2_Sub2', (req, res) => {
  res.json(onderwerp2_Sub2);
})

app.get('/api/onderwerp2_SubImg2', (req, res) => {
  res.json(onderwerp2_SubImg2);
})

app.get('/api/onderwerp2_Sub3', (req, res) => {
  res.json(onderwerp2_Sub3);
})

app.get('/api/onderwerp2_SubImg3', (req, res) => {
  res.json(onderwerp2_SubImg3);
})

//Onderwerp 3 responds

app.get('/api/onderwerp3', (req, res) => {
  res.json(onderwerp3);
})

app.get('/api/onderwerp3_sub1', (req, res) => {
  res.json(onderwerp3_sub1);
})

app.get('/api/onderwerp3_SubImg1', (req, res) => {
  res.json(onderwerp3_SubImg1);
})

app.get('/api/onderwerp3_Sub2', (req, res) => {
  res.json(onderwerp3_Sub2);
})

app.get('/api/onderwerp3_SubImg2', (req, res) => {
  res.json(onderwerp3_SubImg2);
})

app.get('/api/onderwerp3_Sub3', (req, res) => {
  res.json(onderwerp3_Sub3);
})

app.get('/api/onderwerp3_SubImg3', (req, res) => {
  res.json(onderwerp3_SubImg3);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});