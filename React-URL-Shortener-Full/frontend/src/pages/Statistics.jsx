import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, Link } from '@mui/material';
import StatisticsTable from '../components/StatisticsTable';

const Statistics = () => {
  const [urls, setUrls] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('urls') || '{}');
    setUrls(stored);
  }, []);

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4 }}>Shortened URL Statistics</Typography>
      {Object.entries(urls).map(([code, data]) => (
        <Card key={code} sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6">Short URL:</Typography>
            <Link href={`http://localhost:3000/${code}`} target="_blank">{`http://localhost:3000/${code}`}</Link>
            <Typography>Original URL: {data.originalUrl}</Typography>
            <Typography>Created: {new Date(data.createdAt).toLocaleString()}</Typography>
            <Typography>Expires: {new Date(data.expiresAt).toLocaleString()}</Typography>
            <Typography>Total Clicks: {data.clicks.length}</Typography>
            <StatisticsTable clicks={data.clicks} />
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Statistics;