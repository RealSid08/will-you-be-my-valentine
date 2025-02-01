"use client";

import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesCount, setYesCount] = useState(0);

  // The font size for the Yes button grows based on yesCount.
  const yesButtonSize = yesCount * 20 + 16;

  // Phrases for the "No" button.
  const noPhrases = [
    "No",
    "Podi, kondruven",
    "oh so apdiya ammu pazhagirkom :(",
    "fuck off naai",
    "yen innu inga iruka kelambu",
    "manasatchi eh illa la",
    "CHELLO PLEEASEEEE :(((",
    "But :*(",
    "sidhu sad ok po",
    "if u click one more time sidhu will die :(((",
    "wow ok u want me dead",
    "dont talk to me",
    "NO COME BACK TALK TO ME",
    "CUTTUUU PLEASEEEEE",
    "sidhu is ur baby",
    "ok fuck off bye fr",
  ];

  // Independent phrases for the "Yes" button.
  const yesPhrases = [
    "YESSSSSSS",
    "lol unakku kedaiyadhu po",
    "you're super hot, but nahhhhh",
    "click here if you think sidhu is hot af",
    "mhmmMMMMM someone wants me real bad huh?",
    "ohoh you want me that bad mhmmm ;))",
    "angyyy birddd i can see your face cutieee",
    "wifeyy don't quit yet nooooo",
    "HMMMMMMMMM",
    "lol not yet",
    "achooo pattuuu maa one more time",
    "babyyy i'm sooo proud of youuu keep clicking ;)",
    "almost there ammu cuttiii",
    "you may be the sweetest, sexiest, cutest, and angriest baby for me, but you'll still have to click once more lol",
    "C'MONNN CUTIE YOU GOT THIS CLICK ITTT",
  ];

  // Click handler for the "No" button.
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  // Click handler for the "Yes" button.
  const handleYesClick = () => {
    setYesCount(yesCount + 1);
  };

  // Once all the Yes phrases have been exhausted, display the final view.
  if (yesCount >= yesPhrases.length) {
    return (
      <div className="-mt-16 flex h-screen flex-col items-center justify-center">
        <img
          src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          alt="Bear kiss gif"
        />
        <div className="my-4 text-4xl font-bold">
          YAYYYYYYYY!!!!! I LOVEE YOUUU CHOOOOO MUCHHHH MY SWEETYYY WIFEYYY YOU'RE MY VALENTINEEEE EHEHEHEHE :)))))))))"
        </div>
      </div>
    );
  }

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      <img
        className="h-[200px]"
        src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
        alt="Cute love bear with roses"
      />
      <h1 className="my-4 text-4xl">Will you be my Valentine my love, Dhi chello?</h1>
      <div className="flex items-center">
        <button
          onClick={handleYesClick}
          style={{ fontSize: yesButtonSize }}
          className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
        >
          {yesCount === 0 ? "Yes" : yesPhrases[Math.min(yesCount, yesPhrases.length - 1)]}
        </button>
        <button
          onClick={handleNoClick}
          className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
        >
          {noCount === 0 ? "No" : noPhrases[Math.min(noCount, noPhrases.length - 1)]}
        </button>
      </div>
    </div>
  );
}
