import React, { useEffect, useState } from "react";
import axios from "../api/google";

function Convert({ phrase, language }) {
  const [translation, setTranslation] = useState(null)

  useEffect(() => {

    const getTranslation = async () => {
      const res = await axios.post("", {
        q: phrase,
        target: language.value,
      });

      setTranslation(res.data.data.translations[0])
    };


    getTranslation()
  }, [phrase, language]);

  return (
    <>
      <h1>
        {translation == null
          ? "enter some text in the field to get a translation"
          : translation.translatedText}
      </h1>
      <h3>{`This text will be displayed in ${language.label}.`}</h3>
    </>
  );
}

export default Convert;
