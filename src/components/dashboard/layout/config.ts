import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'live', title: 'Live Medals', href: paths.dashboard.live, icon: 'medals' },
  { key: 'historical', title: 'Historical Data', href: paths.dashboard.historical, icon: 'past' },
  {
    key: 'individual', 
    title: 'Individual Sports', 
    icon: 'user',
    items: [
      { key: 'athletics', title: "Athletics", href: paths.dashboard.athletics, icon: 'runner' },
      { key: 'swimming', title: "Swimming", href: paths.dashboard.swimming, icon: 'swimmer' }
    ]
  },
  {
    key: 'teams', 
    title: 'Team Sports', 
    icon: 'users',
    items: [
      { key: 'soccermen', title: "Men's Soccer", href: paths.dashboard.soccermens, icon: 'soccer' },
      { key: 'soccerwomen', title: "Women's Soccer", href: paths.dashboard.soccerwomens, icon: 'soccer' },
      { key: 'basketballmen', title: "Men's Basketball", href: paths.dashboard.basketballmens, icon: 'basketball' },
      { key: 'basketballwomen', title: "Women's Basketball", href: paths.dashboard.basketballwomens, icon: 'basketball' }
    ]
  },
] satisfies NavItemConfig[];
