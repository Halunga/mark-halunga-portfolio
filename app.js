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
  ["Help", "I do not understand", "Nie rozumiem", "nyeh roh-ZOO-myem"]
].map(([category, english, polish, pronunciation]) => ({
  category,
  english,
  polish,
  pronunciation
}));

const categories = ["All", "Greetings", "Polite", "Travel", "Food", "Help"];
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
