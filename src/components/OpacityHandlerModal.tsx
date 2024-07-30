import React, { useEffect, useState } from "react";

interface OpacityHandlerModalProps {
  screenshotOpacity: number;
  setScreenshotOpacity: (value: number) => void;
  figmaOpacity: number;
  setFigmaOpacity: (value: number) => void;
}

const OpacityHandlerModal: React.FC<OpacityHandlerModalProps> = ({
  screenshotOpacity,
  setScreenshotOpacity,
  figmaOpacity,
  setFigmaOpacity,
}) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setIsDragging(true);
    setStartPosition({
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    });
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: event.clientX - startPosition.x,
        y: event.clientY - startPosition.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleSliderChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: (value: number) => void,
  ) => {
    event.stopPropagation();
    setter(Number(event.target.value) / 100);
  };

  return (
    <div
      className="fixed bg-white p-4 rounded-lg shadow-lg z-50"
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
      onMouseDown={handleMouseDown}
    >
      <div className="flex items-center justify-between">
        <div>
          <input
            type="range"
            min="0"
            max="100"
            value={screenshotOpacity * 100}
            onChange={(event) =>
              handleSliderChange(event, setScreenshotOpacity)
            }
            className="range range-primary"
            onMouseDown={(event) => event.stopPropagation()}
          />
          <div className="text-center">Screenshot Opacity</div>
        </div>
        <div>
          <input
            type="range"
            min="0"
            max="100"
            value={figmaOpacity * 100}
            onChange={(event) => handleSliderChange(event, setFigmaOpacity)}
            className="range range-primary"
            onMouseDown={(event) => event.stopPropagation()}
          />
          <div className="text-center">Figma Opacity</div>
        </div>
      </div>
    </div>
  );
};

export default OpacityHandlerModal;
