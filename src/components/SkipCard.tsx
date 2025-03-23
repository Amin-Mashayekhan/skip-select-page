import React from "react";
import styled from "styled-components";
import { Skip } from "../types/Skip";
import { ArrowRight, TriangleAlert, CalendarRange } from "lucide-react"; // Lucide icons
import skipImage from "../assets/images/skip-image.png"; // General skip image

const Card = styled.div`
  background: #2a2a2a;
  color: #fff;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 300px;
  margin: 10px;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  border-radius: 8px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff;
`;

const Price = styled.h2`
  font-size: 1.8rem;
  color: #007bff;
  margin: 15px 0;
`;

const Feature = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  font-size: 1.2rem;
  color: #ccc;
  margin: 8px 0;
`;

const Button = styled.button<{ allowed: boolean }>`
  background: ${({ allowed }) => (allowed ? "#007bff" : "#555")};
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: ${({ allowed }) => (allowed ? "pointer" : "not-allowed")};
  margin-top: 15px;
  width: 100%;
  font-size: 1rem;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: ${({ allowed }) => (allowed ? "#0056b3" : "#444")};
    transform: scale(1.05);
  }
`;

interface SkipCardProps {
  skip: Skip;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip }) => {
  const totalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);

  return (
    <Card>
      {/* General Skip Image */}
      <Image src={skipImage} alt={`${skip.size} Yard Skip`} />

      {/* Skip Details */}
      <Title>{skip.size} Yard Skip</Title>
      <Feature>
        <CalendarRange size={22} /> {skip.hire_period_days}-day hire period
      </Feature>
      <Price>£{totalPrice} per week</Price>

      {/* Select Button */}
      <Button
        allowed={skip.allowed_on_road}
        aria-disabled={!skip.allowed_on_road}
      >
        <Feature>
          {skip.allowed_on_road ? (
            <>
              Select This Skip
              <ArrowRight />
            </>
          ) : (
            <>
              <TriangleAlert size={22} /> Private Property Only
            </>
          )}
        </Feature>
      </Button>
    </Card>
  );
};

export default SkipCard;
