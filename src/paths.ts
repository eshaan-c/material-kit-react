export const paths = {
  home: '/dashboard',
  dashboard: {
    historical: '/dashboard',
    live: '/dashboard/live',
    soccermens: '/dashboard/live/soccer/mens',
    soccerwomens: '/dashboard/live/soccer/womens',
    basketballmens: '/dashboard/live/basketball/mens',
    basketballwomens: '/dashboard/live/basketball/womens',
    athletics: '/dashboard/live/athletics',
    swimming: '/dashboard/live/swimming',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
