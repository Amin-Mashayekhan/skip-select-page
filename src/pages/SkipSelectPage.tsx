import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Skip } from "../types/Skip";
import { fetchSkips } from "../api/fetchSkips";
import SkipCard from "../components/SkipCard";
import SkeletonLoader from "../components/SkeletonLoader";
import guide1 from "../assets/images/guide-1.png";
import guide2 from "../assets/images/guide-2.jpg";
import guide3 from "../assets/images/guide-3.jpg";
import { AlertCircle } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import LightBoxSection from "../components/LightBoxSection";

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
  margin-top: 62px;
  margin-bottom: 10px;
`;

const SubTitle = styled.h3`
  text-align: center;
  font-size: 1.2rem;
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

  const { selectedSkip, setSelectedSkip } = useAppContext();

  const guideImages: string[] = [guide1, guide2, guide3];

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


  const handleSkipSelect = (skip: Skip) => {
    setSelectedSkip(skip);
  };

  if (error)
    return (
      <ErrorMessage>
        <AlertCircle size={24} />
        Error: {error}
      </ErrorMessage>
    );

  return (
    <>
      <Title>Choose Your Skip Size</Title>
      <SubTitle>Select the skip size that best suits your needs</SubTitle>

      {/* Guide Section */}
      <LightBoxSection lightBoxImages={guideImages} title='Skips Size Guide' />

      {/* Skip Cards Section */}
      {loading ? (
        <SkeletonLoader />
      ) : (
        <SkipCards>
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              selected={selectedSkip?.id === skip.id}
              onSelect={handleSkipSelect}
            />
          ))}
        </SkipCards>
      )}
    </>
  );
};

export default SkipSelectPage;
