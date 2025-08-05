import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import UrlForm from '../components/UrlForm';
import UrlResultCard from '../components/UrlResultCard';

const Shortener = () => {
  const [results, setResults] = useState([]);

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4 }}>URL Shortener</Typography>
      <UrlForm onShorten={setResults} />
      {results.map((r, i) => (
        <UrlResultCard
          key={i}
          shortUrl={r.shortUrl}
          originalUrl={r.url}
          createdAt={r.createdAt}
          expiresAt={r.expiresAt}
        />
      ))}
    </Container>
  );
};

export default Shortener;