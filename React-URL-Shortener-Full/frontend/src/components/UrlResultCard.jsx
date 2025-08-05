import React from 'react';
import { Card, CardContent, Typography, Link } from '@mui/material';

const UrlResultCard = ({ shortUrl, originalUrl, createdAt, expiresAt }) => {
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6">Original URL:</Typography>
        <Typography>{originalUrl}</Typography>

        <Typography variant="h6" sx={{ mt: 1 }}>Shortened URL:</Typography>
        <Link href={shortUrl} target="_blank" rel="noopener">{shortUrl}</Link>

        <Typography sx={{ mt: 1 }}>Created At: {new Date(createdAt).toLocaleString()}</Typography>
        <Typography>Expires At: {new Date(expiresAt).toLocaleString()}</Typography>
      </CardContent>
    </Card>
  );
};

export default UrlResultCard;