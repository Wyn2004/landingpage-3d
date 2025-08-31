import { useEffect, useState } from "react";

export default function TypewriterEffect() {
  const text = "EMAIL FOR\nDEVELOPER";
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (isTyping) {
          if (currentIndex < text.length) {
            setDisplayText(text.slice(0, currentIndex + 1));
            setCurrentIndex((prev) => prev + 1);
          } else {
            // Pause at end
            setTimeout(() => {
              setIsTyping(false);
            }, 2000);
          }
        } else {
          if (currentIndex > 0) {
            setDisplayText(text.slice(0, currentIndex - 1));
            setCurrentIndex((prev) => prev - 1);
          } else {
            // Start typing again
            setIsTyping(true);
          }
        }
      },
      isTyping ? 100 : 50
    ); // Slower typing, faster deleting

    return () => clearInterval(interval);
  }, [currentIndex, isTyping, text]);

  return (
    <div data-aos="fade-up-right" data-aos-anchor-placement="top-bottom">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold m-0 mt-4 tracking-wider my-8">
        <span className="whitespace-pre-line">
          {displayText}
          <span className="cursor-blink border-r-2 border-white ml-1"></span>
        </span>
      </h1>
    </div>
  );
}
