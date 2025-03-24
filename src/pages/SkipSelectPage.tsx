import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Skip } from "../types/Skip";
import { fetchSkips } from "../api/fetchSkips";
import SkipCard from "../components/SkipCard";
import GuideModal from "../components/GuideModal";
import SkeletonLoader from "../components/SkeletonLoader"; // Skeleton loader
import guide1 from "../assets/images/guide-1.png"; // Import images
import guide2 from "../assets/images/guide-2.jpg";
import guide3 from "../assets/images/guide-3.jpg";
import { Info, AlertCircle } from "lucide-react"; // Lucide icons
import { animations } from "../styles/animations";

const Container = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, #111, #333);
  min-height: 100vh;
`;

const SkipCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

const Title = styled.h1`
 text-align: center;
 font-size: 2.5rem;
 margin-bottom: 10px;
`;

const SubTitle = styled.h3`
 text-align: center;
 font-size: 1.2rem;
`;



const GuideSection = styled.section`
  margin: 40px 0;
  text-align: center;
`;

const GuideTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 999;
  position: relative;

  @media (max-width: 576px) {
    background: rgba(85, 85, 85, 0.9);
    position: fixed;
    padding: 10px;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const GuideTitleContent = styled.h2`
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0;
  font-size: 1.8rem;
  padding: 10px 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  svg {
    ${animations.scaleOpacity}
  }
`;

const GuideImages = styled.div`
  display: none;
  justify-content: center;
  gap: 20px;
  margin-top: 22px;
  flex-wrap: wrap;

  @media (min-width: 576px) {
    display: flex;
  }
`;

const GuideImage = styled.img`
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

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #ff4444;
  font-size: 1.2rem;
  padding: 20px;
  background: rgba(255, 68, 68, 0.1);
  border-radius: 10px;
  margin: 20px auto;
  max-width: 600px;
`;

const SkipSelectPage: React.FC = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const guideImages = [guide1, guide2, guide3];

  useEffect(() => {
    const loadSkips = async () => {
      try {
        const data = await fetchSkips();
        setSkips(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadSkips();
  }, []);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  if (error)
    return (
      <ErrorMessage>
        <AlertCircle size={24} />
        Error: {error}
      </ErrorMessage>
    );

  return (
    <Container>
      <Title>Choose Your Skip Size</Title>
      <SubTitle>Select the skip size that best suits your needs</SubTitle>

      {/* Guide Section */}
      <GuideSection>
        <GuideTitle>
          <GuideTitleContent onClick={() => openModal(0)}>
            <Info size={24} />
            Skips Size Guide
          </GuideTitleContent>
        </GuideTitle>
        <GuideImages>
          {guideImages.map((image, index) => (
            <GuideImage
              key={index}
              src={image}
              alt={`Guide Image ${index + 1}`}
              onClick={() => openModal(index)}
            />
          ))}
        </GuideImages>
      </GuideSection>

      {/* Guide Modal */}
      {isModalOpen && (
        <GuideModal
          images={guideImages}
          selectedIndex={selectedImageIndex}
          onClose={() => setIsModalOpen(false)}
          onSelectImage={setSelectedImageIndex}
        />
      )}

      {/* Skip Cards Section */}
      {loading ? (
        <SkeletonLoader />
      ) : (
        <SkipCards>
          {skips.map((skip) => (
            <SkipCard key={skip.id} skip={skip} />
          ))}
        </SkipCards>
      )}
    </Container>
  );
};

export default SkipSelectPage;
