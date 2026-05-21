const phrases = [
  ["Greetings", "Good morning", "Dzień dobry", "jen DOH-bri"],
  ["Greetings", "Good evening", "Dobry wieczór", "DOH-bri VYEH-choor"],
  ["Greetings", "Hi", "Cześć", "cheshch"],
  ["Greetings", "Goodbye", "Do widzenia", "doh vee-DZEN-yah"],
  ["Polite", "Please", "Proszę", "PROH-sheh"],
  ["Polite", "Thank you", "Dziękuję", "jen-KOO-yeh"],
  ["Polite", "Excuse me", "Przepraszam", "psheh-PRAH-sham"],
  ["Polite", "Yes", "Tak", "tahk"],
  ["Polite", "No", "Nie", "nyeh"],
  ["Travel", "Where is the station?", "Gdzie jest dworzec?", "gdjeh yest DVOH-zhets"],
  ["Travel", "How much does it cost?", "Ile to kosztuje?", "EE-leh toh kosh-TOO-yeh"],
  ["Food", "I would like coffee", "Poproszę kawę", "poh-PROH-sheh KAH-veh"],
  ["Food", "The bill, please", "Rachunek poproszę", "rah-HOO-nek poh-PROH-sheh"],
  ["Help", "I need help", "Potrzebuję pomocy", "poh-tsheh-BOO-yeh poh-MOH-tsih"],
  ["Help", "I do not understand", "Nie rozumiem", "nyeh roh-ZOO-myem"],
  [
    "Personal",
    "Shall we take off our clothes now?",
    "Czy teraz zdejmiemy ubrania?",
    "chih TEH-raz zdey-MYEH-mih oo-BRAH-nyah"
  ],
  [
    "Personal",
    "Shall I take off my clothes now?",
    "Czy mam teraz zdjąć ubranie?",
    "chih mam TEH-raz zdjohnch oo-BRAH-nyeh"
  ],
  [
    "Personal",
    "Can you help me take off my clothes?",
    "Czy możesz mi pomóc zdjąć ubranie?",
    "chih MOH-zhesh mee POH-moots zdjohnch oo-BRAH-nyeh"
  ],
  [
    "Borscht",
    "How many times should a woman get hit at work in Sweden?",
    "Ile razy kobieta powinna zostać uderzona w pracy w Szwecji?",
    "EE-leh RAH-zih koh-BYEH-tah poh-VIN-nah ZOH-stach oo-deh-ZHOH-nah f PRAH-tsih f SHFET-syee"
  ],
  [
    "Borscht",
    "Do you put bad kids who hit women in the Borscht?",
    "Czy wkładacie niegrzeczne dzieci, które biją kobiety, do barszczu?",
    "chih fk-wah-DAH-cheh nyeh-GZHECH-neh JYEH-chee KTOO-reh BEE-yoh koh-BYEH-tih doh BARSH-choo"
  ],
  [
    "Borscht",
    "I can't afford an Uber, can you please direct me to horse and cart rentals?",
    "Nie stać mnie na Ubera, czy możesz mnie skierować do wypożyczalni koni i wozów?",
    "nyeh stach mnyeh nah OO-beh-rah chih MOH-zhesh mnyeh skyeh-roh-VACH doh vih-poh-zhih-CHAL-nee KOH-nee ee VOH-zoof"
  ],
  ["Borscht", "Where is the Borscht?", "Gdzie jest barszcz?", "gdjeh yest barshtch"],
  ["Borscht", "I need more Borscht", "Potrzebuję więcej barszczu", "poh-tsheh-BOO-yeh VYEN-tsey BARSH-choo"],
  [
    "Borscht",
    "What the fuck do you mean you are out of Borscht?",
    "Co, kurwa, znaczy, że skończył się barszcz?",
    "tso KOOR-vah ZNAH-chih zheh SKON-chil shyeh barshtch"
  ],
  [
    "Borscht",
    "Borscht Borscht Borscht, what's up with all this Borscht?",
    "Barszcz, barszcz, barszcz, o co chodzi z tym całym barszczem?",
    "barshtch barshtch barshtch oh tso HOH-jee z tim TSAH-wim BARSH-chem"
  ],
  [
    "Borscht",
    "Honey, I'm home, go get me my beer and a sandwich, or Borscht then?",
    "Kochanie, jestem w domu, przynieś mi piwo i kanapkę, albo może barszcz?",
    "koh-HAH-nyeh YES-tem v DOH-moo PZHI-nyesh mee PEE-voh ee kah-NAP-keh AL-boh MOH-zheh barshtch"
  ],
  [
    "Borscht",
    "I hardly smile, drink a lot of vodka and love the pope. Am I Polish now?",
    "Rzadko się uśmiecham, dużo piję wódki i kocham papieża. Czy teraz jestem Polakiem?",
    "ZHAT-koh shyeh oosh-MYEH-ham DOO-zhoh PEE-yeh VOOT-kee ee KOH-ham pah-PYEH-zhah chih TEH-raz YES-tem poh-LAH-kyem"
  ]
].map(([category, english, polish, pronunciation]) => ({
  category,
  english,
  polish,
  pronunciation
}));

const categories = ["All", "Greetings", "Polite", "Travel", "Food", "Help", "Personal", "Borscht"];
const state = {
  category: "All",
  current: phrases[0],
  rate: 0.85
};

const phraseGrid = document.querySelector("#phraseGrid");
const categoriesNav = document.querySelector("#categories");
const speedControl = document.querySelector("#speedControl");
const speedValue = document.querySelector("#speedValue");
const currentPolish = document.querySelector("#currentPolish");
const currentEnglish = document.querySelector("#currentEnglish");
const currentPronunciation = document.querySelector("#currentPronunciation");
const playCurrent = document.querySelector("#playCurrent");

function speak(phrase) {
  state.current = phrase;
  renderCurrent();

  if (!("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(phrase.polish);
  utterance.lang = "pl-PL";
  utterance.rate = state.rate;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function renderCurrent() {
  currentPolish.textContent = state.current.polish;
  currentEnglish.textContent = state.current.english;
  currentPronunciation.textContent = state.current.pronunciation;
  playCurrent.setAttribute("aria-label", `Play ${state.current.polish}`);
}

function renderCategories() {
  categoriesNav.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category;
    button.className = category === state.category ? "active" : "";
    button.setAttribute("aria-pressed", String(category === state.category));
    button.addEventListener("click", () => {
      state.category = category;
      state.current =
        category === "All" ? phrases[0] : phrases.find((phrase) => phrase.category === category);
      render();
    });
    categoriesNav.append(button);
  });
}

function renderPhrases() {
  phraseGrid.innerHTML = "";
  const visible =
    state.category === "All"
      ? phrases
      : phrases.filter((phrase) => phrase.category === state.category);

  visible.forEach((phrase) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = phrase.polish === state.current.polish ? "phrase selected" : "phrase";
    button.innerHTML = `
      <span class="phrase-top">
        <span>${phrase.category}</span>
        <span aria-hidden="true">▶</span>
      </span>
      <span>
        <strong>${phrase.polish}</strong>
        <em>${phrase.english}</em>
        <small>${phrase.pronunciation}</small>
      </span>
    `;
    button.addEventListener("click", () => speak(phrase));
    phraseGrid.append(button);
  });
}

function render() {
  renderCurrent();
  renderCategories();
  renderPhrases();
}

speedControl.addEventListener("input", (event) => {
  state.rate = Number(event.target.value);
  speedValue.textContent = `${state.rate.toFixed(2)}x`;
});

playCurrent.addEventListener("click", () => speak(state.current));

render();
