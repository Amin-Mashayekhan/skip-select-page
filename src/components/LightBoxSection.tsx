import React, { useState } from "react";
import styled from "styled-components";
import { Info } from "lucide-react";
import LightBoxModal from "./LightBoxModal";
import { animations } from "../styles/animations";


const LightBoxContainer = styled.section`
  margin: 40px 0;
  text-align: center;
`;

const LightBoxTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 999;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    background: ${({ theme }) => theme.colors.transparentDark};
    position: fixed;
    padding: 8px 0;
    bottom: 0px;
    left: 0;
    right: 0;
  }
`;

const LightBoxTitleContent = styled.h2`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0;
  font-size: 1.6rem;
  padding: 8px 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.lightTransparentGray};
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.transparentGray};
  }

  svg {
    ${animations.scaleOpacity}
  }
`;

const LightBoxImages = styled.div`
  display: none;
  justify-content: center;
  gap: 20px;
  margin-top: 22px;
  flex-wrap: wrap;

  @media (min-width: ${({ theme }) => theme.breakPoints.mobileLG}) {
    display: flex;
  }
`;

const LightBoxImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }
`;

interface LightBoxSectionProps {
    lightBoxImages: string[];
    title: string;
} 

const LightBoxSection: React.FC<LightBoxSectionProps> = ({lightBoxImages, title}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  return (
    <LightBoxContainer>
      <LightBoxTitle onClick={() => openModal(0)}>
        <LightBoxTitleContent>
          <Info size={24} />
          {title}
        </LightBoxTitleContent>
      </LightBoxTitle>
 
      <LightBoxImages>
        {lightBoxImages.map((image, index) => (
          <LightBoxImage
            key={index}
            src={image}
            alt={`LightBox Image ${index + 1}`}
            onClick={() => openModal(index)}
          />
        ))}
      </LightBoxImages>

      {isModalOpen && (
        <LightBoxModal
          images={lightBoxImages}
          selectedIndex={selectedImageIndex}
          onClose={() => setIsModalOpen(false)}
          onSelectImage={setSelectedImageIndex}
        />
      )}
    </LightBoxContainer>
  );
};

export default React.memo(LightBoxSection);
