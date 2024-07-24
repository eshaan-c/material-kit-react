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
          src="https://app.explo.co/iframe/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwia2lkIjoiZmY1OTg2OTMtMjlkNy00ZTkyLWI3YzQtOTBiNTFiZjkyYmVkIn0..v8FUThYblx2eN4qmrIDTVQ.mleCnDPOGCz-GoYWkghwsyUTIeXYHh8GmdphgeWcAEP_zdwYxzt9AF5XnZRN3SuYHHEYdrDiiZzsKc4cxM5Jow.9cKrSWwAm55WKB974BHC5g"
          style={{ width: '100%', border: 'none', height: '210vh' }}
          title="Embedded Dashboard"
        ></iframe>
      </Grid>
    </Grid>
  );
}