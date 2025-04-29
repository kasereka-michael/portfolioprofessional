import { useEffect, useState, useRef } from "react";

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayAfterComplete?: number;
  delayBeforeStart?: number;
  className?: string;
}

const TypingEffect = ({
  texts,
  typingSpeed = 150,
  deletingSpeed = 60,
  delayAfterComplete = 1000,
  delayBeforeStart = 500,
  className = "",
}: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Start with a delay
    timeoutRef.current = setTimeout(typeEffect, delayBeforeStart);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const typeEffect = () => {
    const currentText = texts[currentIndex % texts.length];
    
    if (isDeleting) {
      setDisplayText(currentText.substring(0, displayText.length - 1));
    } else {
      setDisplayText(currentText.substring(0, displayText.length + 1));
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && displayText === currentText) {
      // Word is complete, wait before deleting
      delay = delayAfterComplete;
      setIsDeleting(true);
    } else if (isDeleting && displayText === "") {
      // Deletion is complete, move to next word
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      delay = delayBeforeStart;
    }

    timeoutRef.current = setTimeout(typeEffect, delay);
  };

  return <span className={className}>{displayText}</span>;
};

export default TypingEffect;
