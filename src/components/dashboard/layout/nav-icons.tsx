import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import { ChartPie as ChartPieIcon } from '@phosphor-icons/react/dist/ssr/ChartPie';
import { User as UserIcon } from '@phosphor-icons/react/dist/ssr/User';
import { UsersThree as UsersIcon } from '@phosphor-icons/react';
import { Medal, ClockCounterClockwise, PersonSimpleRun as Run, PersonSimpleSwim as Swim, SoccerBall as Soccer, Basketball } from '@phosphor-icons/react';
import { XSquare } from '@phosphor-icons/react/dist/ssr/XSquare';

export const navIcons = {
  'chart-pie': ChartPieIcon,
  'x-square': XSquare,
  'medals': Medal,
  'past': ClockCounterClockwise,
  'runner': Run,
  'swimmer': Swim,
  'soccer': Soccer,
  'basketball': Basketball,
  user: UserIcon,
  users: UsersIcon,
} as Record<string, Icon>;
