"use client";

import { useMemo, useState } from "react";

type Phrase = {
  english: string;
  polish: string;
  pronunciation: string;
  category: "Greetings" | "Polite" | "Travel" | "Food" | "Help";
};

const phrases: Phrase[] = [
  {
    english: "Good morning",
    polish: "Dzień dobry",
    pronunciation: "jen DOH-bri",
    category: "Greetings"
  },
  {
    english: "Good evening",
    polish: "Dobry wieczór",
    pronunciation: "DOH-bri VYEH-choor",
    category: "Greetings"
  },
  {
    english: "Hi",
    polish: "Cześć",
    pronunciation: "cheshch",
    category: "Greetings"
  },
  {
    english: "Goodbye",
    polish: "Do widzenia",
    pronunciation: "doh vee-DZEN-yah",
    category: "Greetings"
  },
  {
    english: "Please",
    polish: "Proszę",
    pronunciation: "PROH-sheh",
    category: "Polite"
  },
  {
    english: "Thank you",
    polish: "Dziękuję",
    pronunciation: "jen-KOO-yeh",
    category: "Polite"
  },
  {
    english: "Excuse me",
    polish: "Przepraszam",
    pronunciation: "psheh-PRAH-sham",
    category: "Polite"
  },
  {
    english: "Yes",
    polish: "Tak",
    pronunciation: "tahk",
    category: "Polite"
  },
  {
    english: "No",
    polish: "Nie",
    pronunciation: "nyeh",
    category: "Polite"
  },
  {
    english: "Where is the station?",
    polish: "Gdzie jest dworzec?",
    pronunciation: "gdjeh yest DVOH-zhets",
    category: "Travel"
  },
  {
    english: "How much does it cost?",
    polish: "Ile to kosztuje?",
    pronunciation: "EE-leh toh kosh-TOO-yeh",
    category: "Travel"
  },
  {
    english: "I would like coffee",
    polish: "Poproszę kawę",
    pronunciation: "poh-PROH-sheh KAH-veh",
    category: "Food"
  },
  {
    english: "The bill, please",
    polish: "Rachunek poproszę",
    pronunciation: "rah-HOO-nek poh-PROH-sheh",
    category: "Food"
  },
  {
    english: "I need help",
    polish: "Potrzebuję pomocy",
    pronunciation: "poh-tsheh-BOO-yeh poh-MOH-tsih",
    category: "Help"
  },
  {
    english: "I do not understand",
    polish: "Nie rozumiem",
    pronunciation: "nyeh roh-ZOO-myem",
    category: "Help"
  }
];

const categories = ["All", "Greetings", "Polite", "Travel", "Food", "Help"] as const;

export function PolishPhraseApp() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>("All");
  const [currentPhrase, setCurrentPhrase] = useState<Phrase>(phrases[0]);
  const [rate, setRate] = useState(0.85);

  const visiblePhrases = useMemo(() => {
    if (selectedCategory === "All") {
      return phrases;
    }

    return phrases.filter((phrase) => phrase.category === selectedCategory);
  }, [selectedCategory]);

  function speak(phrase: Phrase) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(phrase.polish);
    utterance.lang = "pl-PL";
    utterance.rate = rate;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
    setCurrentPhrase(phrase);
  }

  function chooseCategory(category: (typeof categories)[number]) {
    setSelectedCategory(category);
    const nextPhrase =
      category === "All" ? phrases[0] : phrases.find((phrase) => phrase.category === category);

    if (nextPhrase) {
      setCurrentPhrase(nextPhrase);
    }
  }

  return (
    <section className="min-h-screen bg-[#f6f3ed] text-[#1f2520]">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="flex flex-col justify-between border-b border-[#d8d1c4] pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-[#686f63]">
              Polish phrasebook
            </p>
            <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-none text-[#172018] sm:text-6xl lg:text-7xl">
              Listen, repeat, and use the phrase.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5a6358]">
              Common Polish phrases for greetings, ordering, travel, and asking for help. Tap any
              phrase to hear it spoken in Polish.
            </p>
          </div>

          <div className="mt-8 grid gap-4 rounded-lg border border-[#d8d1c4] bg-[#fffaf1] p-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#5a6358]">Playback speed</span>
              <span className="min-w-12 text-right text-sm font-semibold text-[#1f2520]">
                {rate.toFixed(2)}x
              </span>
            </div>
            <input
              aria-label="Playback speed"
              className="accent-[#24735c]"
              max="1.1"
              min="0.6"
              onChange={(event) => setRate(Number(event.target.value))}
              step="0.05"
              type="range"
              value={rate}
            />
          </div>
        </div>

        <div className="grid content-start gap-5">
          <div className="grid gap-4 rounded-lg bg-[#172018] p-5 text-white sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white/60">Now listening</p>
                <h2 className="mt-2 text-4xl font-semibold leading-tight sm:text-5xl">
                  {currentPhrase.polish}
                </h2>
                <p className="mt-3 text-lg text-white/78">{currentPhrase.english}</p>
                <p className="mt-1 text-sm font-semibold text-[#b7d7c8]">
                  {currentPhrase.pronunciation}
                </p>
              </div>
              <button
                aria-label={`Play ${currentPhrase.polish}`}
                className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#e9b44c] text-2xl text-[#172018] transition hover:bg-[#f0c465] focus-visible:outline-white"
                onClick={() => speak(currentPhrase)}
                title="Play phrase"
                type="button"
              >
                ▶
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Phrase categories">
            {categories.map((category) => (
              <button
                aria-selected={selectedCategory === category}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "border-[#24735c] bg-[#24735c] text-white"
                    : "border-[#d8d1c4] bg-white text-[#465047] hover:border-[#24735c]"
                }`}
                key={category}
                onClick={() => chooseCategory(category)}
                role="tab"
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {visiblePhrases.map((phrase) => (
              <button
                className={`group grid min-h-44 content-between rounded-lg border p-5 text-left transition ${
                  currentPhrase.polish === phrase.polish
                    ? "border-[#24735c] bg-[#e4f0e9]"
                    : "border-[#d8d1c4] bg-white hover:border-[#24735c]"
                }`}
                key={phrase.polish}
                onClick={() => speak(phrase)}
                type="button"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-normal text-[#686f63]">
                    {phrase.category}
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid h-9 w-9 place-items-center rounded-full bg-[#f1eadc] text-sm text-[#172018] group-hover:bg-[#e9b44c]"
                  >
                    ▶
                  </span>
                </span>
                <span>
                  <span className="block text-2xl font-semibold leading-tight text-[#172018]">
                    {phrase.polish}
                  </span>
                  <span className="mt-2 block text-base text-[#5a6358]">{phrase.english}</span>
                  <span className="mt-3 block text-sm font-semibold text-[#24735c]">
                    {phrase.pronunciation}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
