import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function CircularUnderLoad() {
  return (
    <CircularProgress
      style={{ color: '#079681'}}
      size={100}
      thickness={3}
      disableShrink
    />
  );
}
