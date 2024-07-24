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
          src="https://app.explo.co/iframe/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwia2lkIjoiZmY1OTg2OTMtMjlkNy00ZTkyLWI3YzQtOTBiNTFiZjkyYmVkIn0..lldAzX5YGchocHyXLtbO1Q.RFXz9p-_2MOL5D-cAC_jWwid8__6Z8zbdQ-e_u3252-xGgsfo-pTIx0vkrzQ-bPOxhDLO5bdGYJPoTtQ20tKPw.N4oDAdn66zumIzy1yYfYWA"
          style={{ width: '100%', border: 'none', height: '220vh' }}
          title="Embedded Dashboard"
        ></iframe>
      </Grid>
    </Grid>
  );
}