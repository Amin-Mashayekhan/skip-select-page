import React from "react";
import styled from "styled-components";
import { Skip } from "../types/Skip";

const Card = styled.div`
  background: #222;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  max-width: 300px;
  margin: 10px;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Button = styled.button<{ allowed: boolean }>`
  background: ${({ allowed }) => (allowed ? "#007bff" : "#555")};
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: ${({ allowed }) => (allowed ? "pointer" : "not-allowed")};
  margin-top: 10px;
  width: 100%;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ allowed }) => (allowed ? "#0056b3" : "#444")};
  }
`;

interface SkipCardProps {
  skip: Skip;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip }) => {
  const totalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);

  return (
    <Card>
      <h3>{skip.size} Yard Skip</h3>
      <p>{skip.hire_period_days}-day hire period</p>
      <h2>£{totalPrice} (incl. VAT)</h2>
      <p>
        {skip.allowed_on_road ? "✅ Allowed on Road" : "❌ Not Allowed on Road"}{" "}
        <br />
        {skip.allows_heavy_waste
          ? "✅ Supports Heavy Waste"
          : "❌ No Heavy Waste"}
      </p>
      <Button
        allowed={skip.allowed_on_road}
        aria-disabled={!skip.allowed_on_road}
      >
        Select This Skip →
      </Button>
    </Card>
  );
};

export default SkipCard;
