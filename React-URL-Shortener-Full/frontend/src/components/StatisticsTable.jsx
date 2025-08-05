import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';

const StatisticsTable = ({ clicks }) => {
  if (!clicks?.length) {
    return <Typography>No clicks yet.</Typography>;
  }

  return (
    <Table sx={{ mt: 2 }}>
      <TableHead>
        <TableRow>
          <TableCell>Timestamp</TableCell>
          <TableCell>Referrer</TableCell>
          <TableCell>Location</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {clicks.map((click, index) => (
          <TableRow key={index}>
            <TableCell>{new Date(click.timestamp).toLocaleString()}</TableCell>
            <TableCell>{click.referrer || 'Direct'}</TableCell>
            <TableCell>{click.location}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StatisticsTable;