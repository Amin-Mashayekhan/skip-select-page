import React from "react";
import styled, { css } from "styled-components";
import { Skip } from "../types/Skip";
import {
  ArrowRight,
  TriangleAlert,
  CalendarRange,
  Ruler,
  Trash2,
  X,
} from "lucide-react";

const Card = styled.div`
  background: #1e1e2f;
  color: #fff;
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 320px;
  margin: 15px;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }
`;

const SkipVisual = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 12px;
  background: linear-gradient(135deg, #ff7849, #ff3d00);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  gap: 2px;

  & > * {
    transition: transform 0.3s ease-in-out;
  }

  ${Card}:hover & > * {
    transform: scale(1.04);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 0.15) 0%,
      transparent 70%
    );
  }
`;

const TrashIcon = styled(Trash2)`
  color: white;
  opacity: 0.9;
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.3));
`;

const MultiplyNumber = styled.p`
  font-size: 4rem;
  font-weight: 500;
  color: #fff;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
`;

const Title = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 12px;
  color: #f1f1f1;
`;

const Price = styled.h2`
  margin: 15px 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: #3b82f6;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #3b82f6, transparent);
    opacity: 0.5;
  }
`;

const Feature = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  font-size: 1.2rem;
  color: #ccc;
  margin: 10px 0;
`;

const FCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

const Button = styled.button<{ $allowed: boolean }>`
  background: ${({ $allowed }) => ($allowed ? "#3b82f6" : "#4b5563")};
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 10px;
  cursor: ${({ $allowed }) => ($allowed ? "pointer" : "not-allowed")};
  margin-top: 15px;
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: all 0.5s ease;
    display: ${({ $allowed }) => ($allowed ? "block" : "none")};
  }

  ${({ $allowed }) =>
    $allowed &&
    css`
      &:hover {
        background: #2563eb;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);

        &::before {
          left: 100%;
        }
      }

      &:active {
        transform: translateY(0);
      }
    `}
`;

interface SkipCardProps {
  skip: Skip;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip }) => {
  const totalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);

  return (
    <Card>
      <SkipVisual>
        <MultiplyNumber>{skip.size * 2}</MultiplyNumber>
        <X size={"4.4rem"} />
        <TrashIcon size={"4.4rem"} />
      </SkipVisual>

      <Title>
        <FCenter>
          <Ruler /> {skip.size} Yard Skip
        </FCenter>
      </Title>
      <Feature>
        <CalendarRange size={22} /> {skip.hire_period_days}-day hire period
      </Feature>
      <Price>£{Math.ceil(Number(totalPrice))} per week</Price>

      <Button
        $allowed={skip.allowed_on_road}
        aria-disabled={!skip.allowed_on_road}
      >
        <Feature>
          {skip.allowed_on_road ? (
            <>
              Select This Skip <ArrowRight />
            </>
          ) : (
            <>
              <TriangleAlert size={"1.4rem"} /> Private Property Only
            </>
          )}
        </Feature>
      </Button>
    </Card>
  );
};

export default SkipCard;
