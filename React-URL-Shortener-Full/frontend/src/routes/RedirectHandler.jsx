import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import { customLogger } from '../../../logger/logger';

const RedirectHandler = () => {
  const { shortcode } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('urls') || '{}');
    const entry = storage[shortcode];

    if (!entry) {
      setError('Shortcode not found.');
      return;
    }

    const now = new Date();
    const expiry = new Date(entry.expiresAt);
    if (now > expiry) {
      setError('Shortened URL has expired.');
      return;
    }

    const click = {
      timestamp: new Date().toISOString(),
      referrer: document.referrer,
      location: 'India'
    };

    entry.clicks.push(click);
    storage[shortcode] = entry;
    localStorage.setItem('urls', JSON.stringify(storage));
    customLogger('click', 'Short URL clicked', { shortcode, click });

    window.location.href = entry.originalUrl;
  }, [shortcode]);

  return (
    <Container sx={{ mt: 4 }}>
      {error ? <Typography color="error">{error}</Typography> : <Typography>Redirecting...</Typography>}
    </Container>
  );
};

export default RedirectHandler;