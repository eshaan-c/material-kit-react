import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Grid';
import { config } from '@/config';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <iframe
          src="https://app.explo.co/iframe/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwia2lkIjoiZmY1OTg2OTMtMjlkNy00ZTkyLWI3YzQtOTBiNTFiZjkyYmVkIn0..rBG2RDc8Xa34AE5MlO9q8Q.kFjy_pj0D5QszBcNqKID2bmOg-iITXl-RXk4i_PjwYIY8fBruaOK77-HLwINaY0PD8yG51xZqt5S0gWJF2K9kg.3nB42PqsebN1df8a220qpQ"
          style={{ width: '100%', border: 'none', height: '100vh' }}
          title="Embedded Dashboard"
        ></iframe>
      </Grid>
    </Grid>
  );
}