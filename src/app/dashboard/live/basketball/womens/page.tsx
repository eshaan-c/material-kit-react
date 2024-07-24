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
          src="https://app.explo.co/iframe/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwia2lkIjoiZmY1OTg2OTMtMjlkNy00ZTkyLWI3YzQtOTBiNTFiZjkyYmVkIn0..nVorHW7sCukagTgV_02Xyw.Rnd5PA5zcEI3Mqg2--bP0uTPgApx1DQ2J600HiAR5e5B1eVIIWjOlQBP4DeDBfN37M2ALDNCN-UTSI19QuyQKw.v1tAuq2mDWp3bUkHHSi8ZA"
          style={{ width: '100%', border: 'none', height: '200vh' }}
          title="Embedded Dashboard"
        ></iframe>
      </Grid>
    </Grid>
  );
}