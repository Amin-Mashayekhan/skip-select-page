import React, { useState, useEffect } from "react";
import { Skip } from "../types/Skip";
import { fetchSkips } from "../api/fetchSkips";
import SkipCard from "../components/SkipCard";
import Loader from "../components/Loader";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background: #111;
`;

const ErrorMessage = styled.p`
  color: #ff4444;
  text-align: center;
`;

const SkipSelectPage: React.FC = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) return <Loader />;
  if (error) return <ErrorMessage>Error: {error}</ErrorMessage>;

  return (
    <Container>
      {skips.map((skip) => (
        <SkipCard key={skip.id} skip={skip} />
      ))}
    </Container>
  );
};

export default SkipSelectPage;
