import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'live', title: 'Live Medals', href: paths.dashboard.live, icon: 'chart-pie' },
  { key: 'historical', title: 'Historical Data', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
    // { key: 'customers', title: 'Customers', href: paths.dashboard.customers, icon: 'users' },
  // { key: 'integrations', title: 'Integrations', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  // { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
  // { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
  {
    key: 'other', 
    title: 'Other', 
    // href: paths.dashboard.live, 
    icon: 'chart-pie',
    items: [
      { key: 'customers', title: 'Customers', href: paths.dashboard.customers, icon: 'users' },
      { key: 'integrations', title: 'Integrations', href: paths.dashboard.integrations },
      { key: 'account', title: 'Account', href: paths.dashboard.account }
    ]
  },
] satisfies NavItemConfig[];
