import React, { useState } from "react";
import OpacityHandlerModal from "./OpacityHandlerModal";

interface ImageModalProps {
  isOpen: boolean;
  imageUrls: string[];
  onCancel: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageUrls,
  onCancel,
}) => {
  const [screenshotOpacity, setScreenshotOpacity] = useState(0.75);
  const [figmaOpacity, setFigmaOpacity] = useState(0.25);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onCancel}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg relative w-screen h-screen"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="absolute top-0 right-0 p-2 text-lg z-50"
          onClick={onCancel}
        >
          X
        </button>
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <img
            src={imageUrls[0]}
            alt="Overlay Image"
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ opacity: screenshotOpacity }}
          />
          <img
            src={imageUrls[1]}
            alt="Underlay Image"
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ opacity: figmaOpacity }}
          />
        </div>
        {isOpen && (
          <OpacityHandlerModal
            screenshotOpacity={screenshotOpacity}
            setScreenshotOpacity={setScreenshotOpacity}
            figmaOpacity={figmaOpacity}
            setFigmaOpacity={setFigmaOpacity}
          />
        )}
      </div>
    </div>
  );
};

export default ImageModal;
