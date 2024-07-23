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
          src="https://app.explo.co/iframe/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwia2lkIjoiZmY1OTg2OTMtMjlkNy00ZTkyLWI3YzQtOTBiNTFiZjkyYmVkIn0..I9_LgSdTByfzPXlXq36Xcg.euK1lo1t-rJuKqhBJ9Icwi8IK1jukofDhw8Zvxam_4ui6q_DbQpRdhptDxe-U7QNrONLZyVSNk6khtRapvA19A.Az7iXCilFdNTFjIsBTdZ0g"
          style={{ width: '100%', border: 'none', height: '130vh' }}
          title="Embedded Dashboard"
        ></iframe>
      </Grid>
    </Grid>
  );
}