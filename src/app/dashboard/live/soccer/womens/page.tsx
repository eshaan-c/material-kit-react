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
          src="https://app.explo.co/iframe/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwia2lkIjoiZmY1OTg2OTMtMjlkNy00ZTkyLWI3YzQtOTBiNTFiZjkyYmVkIn0..sngckQqfQLErq9WO4ITFbg.8rqRdaLiJIVGMNPfJ3bMWjZbDgsxy7h6SOqY0gHSzBXDF8sDFpskhLvNQjGRHiGob1eVuIOleFrWBFCvCbsZ9A.fK4NwTevXv-Io0HEPz7JhA"
          style={{ width: '100%', border: 'none', height: '200vh' }}
          title="Embedded Dashboard"
        ></iframe>
      </Grid>
    </Grid>
  );
}