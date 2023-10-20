import React, { useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { Button } from "@mui/material";
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin: 0.5rem;
`;

export default function CaseConvert(): JSX.Element {
  const [defaultText, setDefaultText] = useState("type text here");
  const [state, setState] = useState({
    wordCount: 3,
    charCount: 14,
    paraCount: 1,
  });

  const handleKeyPress = (event: any) => {
    setDefaultText(event.target.value);
    const count = event.target.value;
    let paraCount = event.target.value;
    paraCount = paraCount.replace(/\n$/gm, "").split(/\n/).length;

    const countWords = (count: any) => {
      if (count.length === 0) {
        return 0;
      } else {
        count = count.replace(/(^\s*)|(\s*$)/gi, "");
        count = count.replace(/[ ]{2,}/gi, " ");
        count = count.replace(/\n /, "\n");
        return count.split(" ").length;
      }
    };

    setState({
      wordCount: countWords(count),
      charCount: count.length,
      paraCount: paraCount,
    });
  };

  const upperCase = () => {
    // To convert Upper Case
    const upperCaseText = defaultText.toUpperCase();
    setDefaultText(upperCaseText);
  };

  const lowerCase = () => {
    // To convert Lower Case
    const lowerCaseText = defaultText.toLowerCase();
    setDefaultText(lowerCaseText);
  };

  const titleCase = () => {
    const titleCaseText = defaultText
      .split(" ")
      .map(function (word, index) {
        // First character upper case else lower case
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
    setDefaultText(titleCaseText);
  };

  const headerCase = () => {
    const headerCaseText = defaultText
      .split(" ")
      .map(function (word, index) {
        // First character upper case else lower case
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("-");
    setDefaultText(headerCaseText);
  };

  const camelCase = () => {
    let camelCaseText = defaultText
      .split(" ")
      .map(function (word, index) {
        // First character upper case else lower case
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");

    camelCaseText = camelCaseText.replace(
      camelCaseText[0],
      camelCaseText[0].toLowerCase()
    );
    setDefaultText(camelCaseText);
  };

  const hyphenCase = () => {
    const splitString = defaultText.toLowerCase().split(" ");
    const hyphenString = splitString.join("-");
    setDefaultText(hyphenString);
  };

  const removeHyphen = () => {
    const splitString = defaultText.split("-");
    const normalString = splitString.join(" ");
    setDefaultText(normalString);
  };

  const dotCase = () => {
    const splitString = defaultText.toLowerCase().split(" ");
    const normalString = splitString.join(".");
    setDefaultText(normalString);
  };

  /**
   * Snake case refers to the style of writing in which each space is replaced by an underscore character,
   *  and the first letter of each word written in lowercase.
   *
   */
  const snakeCase = () => {
    const splitString = defaultText.toLowerCase().split(" ");
    const normalString = splitString.join("_");
    setDefaultText(normalString);
  };

  const constantCase = () => {
    const splitString = defaultText.toUpperCase().split(" ");
    const normalString = splitString.join("_");
    setDefaultText(normalString);
  };

  const pascalCase = () => {
    const pascalCaseText = defaultText
      .toLowerCase()
      .split(" ")
      .map(function (word, index) {
        // First character upper case else lower case
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
    setDefaultText(pascalCaseText);
  };

  const pathCase = () => {
    const pathCaseText = defaultText.split(" ").join("/");
    setDefaultText(pathCaseText);
  };

  const sentenceCase = () => {
    const sentenceCase = defaultText.toLowerCase().split(" ");

    let firstWord = sentenceCase[0];

    // replace first word's first char to uppercase
    firstWord = firstWord.replace(firstWord[0], firstWord[0].toUpperCase());
    sentenceCase[0] = firstWord;

    const formatedSentence = sentenceCase.join(" ");

    setDefaultText(formatedSentence);
  };

  /**
   * Convert your text to the opposite of the current case i.e. uppercase becomes lowercase and lowercase becomes uppercase.
   */
  const inVerseCase = () => {
    let inVerseCase = "";
    for (const char of defaultText) {
      const upper = char.toUpperCase();

      if (char === upper) {
        inVerseCase += char.toLowerCase();
      } else {
        inVerseCase += upper;
      }
    }

    setDefaultText(inVerseCase);
  };

  const alternateCase = () => {
    const chars = defaultText.toLowerCase().split("");
    for (let i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }
    setDefaultText(chars.join(""));
  };

  /**
   * Ada Case is same as Pascal case the capitalized first letter also is separated by an underscore
   */
  const adaCase = () => {
    const pascalCaseText = defaultText
      .toLowerCase()
      .split(" ")
      .map(function (word, index) {
        // First character upper case else lower case
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("_");
    setDefaultText(pascalCaseText);
  };

  /**
   *  In Cobol case all letters are capitalized and the words are separated by an hypen
   */
  const cobolCase = () => {
    const splitString = defaultText.toUpperCase().split(" ");
    const cobalString = splitString.join("-");
    setDefaultText(cobalString);
  };

  /**
   *  In macro case all letters are capitalized and the words are separated by an underscore.
   */
  const macroCase = () => {
    const splitString = defaultText.toUpperCase().split(" ");
    const macroString = splitString.join("_");
    setDefaultText(macroString);
  };

  /**
   * In train case all first letters of the words are capitalized and the words are separated by an hypen.
   */
  const trainCase = () => {
    const trainString = defaultText
      .toLowerCase()
      .split(" ")
      .map(function (word, index) {
        // First character upper case else lower case
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("-");

    setDefaultText(trainString);
  };

  return (
    <div className={styles.margin}>
      <div className="container">
        <div className={styles.box}>
          <h4>
            WORDS <div className={styles.num}> {state.wordCount}</div>
          </h4>
          <h4>
            CHARACTERS <div className={styles.num}> {state.charCount}</div>
          </h4>
          <h4>
            PARAGRAPHS <div className={styles.num}> {state.paraCount}</div>
          </h4>
        </div>
        <div className={clsx("row", styles.text)}>
          <textarea
            className={styles.text}
            rows={4}
            cols={40}
            name="contentText"
            onChange={handleKeyPress}
            value={defaultText}
            placeholder="Type here"
          ></textarea>
        </div>

        <div className={clsx("row", styles.Buttons)}>
          <StyledButton
            variant="contained"
            onClick={upperCase}
            className={styles.btn}
          >
            UPPER
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={lowerCase}
            className={styles.btn}
          >
            lower
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={titleCase}
            className={styles.btn}
          >
            Title Case
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={hyphenCase}
            className={styles.btn}
          >
            hyphen-case
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={removeHyphen}
            className={styles.btn}
          >
            Remove Hyphen
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={sentenceCase}
            className={styles.btn}
          >
            Sentence Case
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={dotCase}
            className={styles.btn}
          >
            dot.case
          </StyledButton>

          <StyledButton
            variant="contained"
            onClick={snakeCase}
            className={styles.btn}
          >
            snake_case
          </StyledButton>
        </div>

        <div className={clsx("row", styles.Buttons)}>
          <StyledButton
            variant="contained"
            onClick={pascalCase}
            className={styles.btn}
          >
            PascalCase
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={camelCase}
            className={styles.btn}
          >
            camelCase
          </StyledButton>

          <StyledButton
            variant="contained"
            onClick={pathCase}
            className={styles.btn}
          >
            path/case
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={constantCase}
            className={styles.btn}
          >
            CONSTANT_CASE
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={headerCase}
            className={styles.btn}
          >
            Header-Case
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={inVerseCase}
            className={styles.btn}
          >
            InVeRsE CaSe
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={alternateCase}
            className={styles.btn}
          >
            aLtErNaTiNg cAsE
          </StyledButton>
        </div>

        <div className={clsx("row", styles.Buttons)}>
          <StyledButton
            variant="contained"
            onClick={adaCase}
            className={styles.btn}
          >
            Ada_Case
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={cobolCase}
            className={styles.btn}
          >
            COBOL-CASE
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={macroCase}
            className={styles.btn}
          >
            MACRO_CASE
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={trainCase}
            className={styles.btn}
          >
            Train-Case
          </StyledButton>
        </div>
      </div>
    </div>
  );
}
