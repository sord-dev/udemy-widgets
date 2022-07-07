import React, { useEffect, useState } from "react";
import axios from "../api/google";

function Convert({ phrase, language }) {
  const [translation, setTranslation] = useState(null);
  const [debouncePhrase, setDebouncePhrase] = useState(null);

  useEffect(() => {
    const intervalID = setInterval(() => setDebouncePhrase(phrase), 500);

    return () => {
      clearInterval(intervalID);
    };
  }, [phrase, language]);

  useEffect(() => {
    const getTranslation = async () => {
      const res = await axios.post("", {
        q: debouncePhrase,
        target: language.value,
      });

      setTranslation(res.data.data.translations[0]);
    };

    getTranslation();
  }, [debouncePhrase, language]);

  return (
    <>
      <h1>
        {debouncePhrase == null || debouncePhrase == ""
          ? "enter some text in the field to get a translation"
          : translation.translatedText}
      </h1>
    </>
  );
}

export default Convert;
