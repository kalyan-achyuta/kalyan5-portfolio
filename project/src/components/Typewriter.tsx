import { useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  speed?: number;
  delayBetweenWords?: number;
}

export function Typewriter({ words, speed = 100, delayBetweenWords = 2000 }: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, speed / 2);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words, speed, delayBetweenWords]);

  return <span>{displayText}</span>;
}
