import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"; // Lucide icons

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.transparentDark};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  min-width: 28%;
  min-height: 28%;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  overflow: auto;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
`;

const ModalImage = styled.img<{ $isZoomed: boolean }>`
  max-width: 100%;
  max-height: 80vh;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  background-position: top left;
  object-fit: contain;
  transform: ${({ $isZoomed }) =>
    $isZoomed ? "scale(1.8) translate(16%, 24%)" : "scale(1)"};
`;

const NavigationButton = styled.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.lightTransparentWhite};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  z-index: 1001;

  &:hover {
    background: ${({ theme }) => theme.colors.transparentWhite};
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 20px;
`;

const NextButton = styled(NavigationButton)`
  right: 20px;
`;

const ZoomIndicator = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${({ theme }) => theme.colors.transparentDark};
  color: ${({ theme }) => theme.colors.text};
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 1001;
`;

interface LightBoxModalProps {
  images: string[];
  selectedIndex: number;
  onClose: () => void;
  onSelectImage: (index: number) => void;
}

const LightBoxModal: React.FC<LightBoxModalProps> = ({
  images,
  selectedIndex,
  onClose,
  onSelectImage,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handlePrev = () => {
    const prevIndex = (selectedIndex - 1 + images.length) % images.length;
    onSelectImage(prevIndex);
    setIsZoomed(false);
  };

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % images.length;
    onSelectImage(nextIndex);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <X size={24} />
        </CloseButton>
        <ModalImage
          src={images[selectedIndex]}
          alt={`LightBox Image ${selectedIndex + 1}`}
          $isZoomed={isZoomed}
          onClick={toggleZoom}
        />
        <ZoomIndicator onClick={toggleZoom}>
          <ZoomIn size={18} />
          {isZoomed ? "Click to Zoom Out" : "Click to Zoom In"}
        </ZoomIndicator>
        <PrevButton onClick={handlePrev}>
          <ChevronLeft size={24} />
        </PrevButton>
        <NextButton onClick={handleNext}>
          <ChevronRight size={24} />
        </NextButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default LightBoxModal;
