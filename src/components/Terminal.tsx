import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';

export function Terminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCurrentInput(event.target.value);
  };

  const handleInputSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    setLines((prev) => [...prev, currentInput]);
    const args = currentInput.split(' ');
    console.log(args);
    setCurrentInput('');
  };

  return (
    <div
      ref={terminalRef}
      className="shadow-lg text-lg font-mono mx-auto w-full aspect-square sm:aspect-video bg-monitor rounded-2xl p-4 overflow-y-auto flex flex-col justify-end"
    >
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      <form onSubmit={handleInputSubmit} className="flex">
        <span className="text-[#b0e17e]">guest@mainframe</span>
        <span className="text-white">:</span>
        <span className="text-[#61afef]">/</span>
        <span className="text-white">$</span>
        <input
          aria-label="Terminal Input"
          ref={inputRef}
          type="text"
          value={currentInput}
          onChange={handleInputChange}
          className="caret-accent bg-transparent text-white outline-none ml-2 w-full"
        />
      </form>
    </div>
  );
}
