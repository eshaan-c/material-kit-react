export const paths = {
  home: '/dashboard/live',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    historical: '/dashboard',
    live: '/dashboard/live',
    soccermens: '/dashboard/live/soccer/mens',
    soccerwomens: '/dashboard/live/soccer/womens',
    basketballmens: '/dashboard/live/basketball/mens',
    basketballwomens: '/dashboard/live/basketball/womens',
    athletics: '/dashboard/live/athletics',
    swimming: '/dashboard/live/swimming',
    account: '/dashboard/account',
    customers: '/dashboard/customers',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
