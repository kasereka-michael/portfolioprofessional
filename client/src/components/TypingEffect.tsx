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
  typingSpeed = 100,
  deletingSpeed = 70,
  delayAfterComplete = 1800,
  delayBeforeStart = 700,
  className = "",
}: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorBlink, setCursorBlink] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const blinkIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Start typing with a delay
    timeoutRef.current = setTimeout(typeEffect, delayBeforeStart);
    
    // Setup cursor blinking
    blinkIntervalRef.current = setInterval(() => {
      setCursorBlink(prev => !prev);
    }, 500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (blinkIntervalRef.current) clearInterval(blinkIntervalRef.current);
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

    // Add slight randomness to typing speed for more natural effect
    const randomFactor = Math.random() * 0.5 + 0.5; // 0.5 to 1.0
    let delay = isDeleting ? deletingSpeed * randomFactor : typingSpeed * randomFactor;

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

  return (
    <span className={className}>
      {displayText}
      <span 
        className="inline-block w-[2px] h-[1.2em] bg-current ml-[2px] align-middle" 
        style={{ 
          opacity: cursorBlink ? 1 : 0,
          transition: 'opacity 0.2s ease',
          verticalAlign: 'middle',
          transform: 'translateY(-2px)'
        }}
      />
    </span>
  );
};

export default TypingEffect;
