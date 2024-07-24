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
          src="https://app.explo.co/iframe/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwia2lkIjoiZmY1OTg2OTMtMjlkNy00ZTkyLWI3YzQtOTBiNTFiZjkyYmVkIn0..MZn6h-dfE7gIlKomg5HvWg.oYYPw6w_ETBm_AkrPO4-LjcNOY0A-ekoJ405_qx-cZRuBzQ0m_G4k9XdCKtKig2rqtLHBgDFUeRpFgVvskdo.ySkymCDODktXyPJKY-OyYA"
          style={{ width: '100%', border: 'none', height: '200vh' }}
          title="Embedded Dashboard"
        ></iframe>
      </Grid>
    </Grid>
  );
}