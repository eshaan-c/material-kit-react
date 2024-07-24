'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowSquareUpRight as ArrowSquareUpRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowSquareUpRight';
import { CaretUpDown as CaretUpDownIcon } from '@phosphor-icons/react/dist/ssr/CaretUpDown';

import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';
import { isNavItemActive } from '@/lib/is-nav-item-active';
import { Logo } from '@/components/core/logo';

import { navItems } from './config';
import { navIcons } from './nav-icons';

interface NavItemProps {
  pathname: string;
  item: NavItemConfig;
  onToggle: (isExpanded: boolean) => void;
}

function NavItem({ pathname, item, onToggle }: NavItemProps): React.JSX.Element {
  const { disabled, external, href, icon, matcher, title, items } = item;
  const [isExpanded, setIsExpanded] = React.useState(false);
  const contentRef = React.useRef<HTMLUListElement>(null);

  const active = isNavItemActive({ disabled, external, href, matcher, pathname });
  const Icon = icon ? navIcons[icon] : null;

  const handleToggle = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);
    onToggle(newExpandedState);
  };

  return (
    <li>
      <Box
        {...(href
          ? {
              component: external ? 'a' : RouterLink,
              href,
              target: external ? '_blank' : undefined,
              rel: external ? 'noreferrer' : undefined,
            }
          : { role: 'button', onClick: handleToggle })}
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          color: 'var(--NavItem-color)',
          cursor: 'pointer',
          display: 'flex',
          flex: '0 0 auto',
          gap: 1,
          p: '6px 16px',
          position: 'relative',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          ...(disabled && {
            bgcolor: 'var(--NavItem-disabled-background)',
            color: 'var(--NavItem-disabled-color)',
            cursor: 'not-allowed',
          }),
          ...(active && { bgcolor: 'var(--NavItem-active-background)', color: 'var(--NavItem-active-color)' }),
        }}
      >
        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flex: '0 0 auto' }}>
          {Icon ? (
            <Icon
              fill={active ? 'var(--NavItem-icon-active-color)' : 'var(--NavItem-icon-color)'}
              fontSize="var(--icon-fontSize-md)"
              weight={active ? 'fill' : undefined}
            />
          ) : null}
        </Box>
        <Box sx={{ flex: '1 1 auto' }}>
          <Typography
            component="span"
            sx={{ color: 'inherit', fontSize: '0.875rem', fontWeight: 500, lineHeight: '28px' }}
          >
            {title}
          </Typography>
        </Box>
        {items?.length ? (
          <Box sx={{ ml: 'auto', transition: 'transform 0.3s', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            <CaretUpDownIcon onClick={handleToggle} />
          </Box>
        ) : null}
      </Box>
      <Box
        component="ul"
        ref={contentRef}
        sx={{
          listStyle: 'none',
          m: 0,
          p: 0,
          pl: 2,
          maxHeight: isExpanded ? `${contentRef.current?.scrollHeight}px` : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        {items?.length && items.map((subItem) => (
          <NavItem key={subItem.key} pathname={pathname} item={subItem} onToggle={onToggle} />
        ))}
      </Box>
    </li>
  );
}

function renderNavItems({ items = [], pathname, onToggle }: { items?: NavItemConfig[]; pathname: string; onToggle: (isExpanded: boolean) => void }): React.JSX.Element {
  const children = items.map((item) => (
    <NavItem key={item.key} pathname={pathname} item={item} onToggle={onToggle} />
  ));

  return (
    <Stack component="ul" spacing={1} sx={{ listStyle: 'none', m: 0, p: 0 }}>
      {children}
    </Stack>
  );
}

export function SideNav(): React.JSX.Element {
  const pathname = usePathname();
  const [expandedCount, setExpandedCount] = React.useState(0);

  const handleNavItemToggle = (isExpanded: boolean) => {
    setExpandedCount((prevCount) => prevCount + (isExpanded ? 1 : -1));
  };

  const iframeHeight = React.useMemo(() => {
    const baseHeight = 40; // 40vh when no items are expanded
    const adjustment = 7; // Adjust by 7vh for each expanded item
    return `${Math.max(baseHeight - adjustment * expandedCount, 20)}vh`; // Minimum height of 20vh
  }, [expandedCount]);

  return (
    <Box
      sx={{
        '--SideNav-background': 'var(--mui-palette-neutral-950)',
        '--SideNav-color': 'var(--mui-palette-common-white)',
        '--NavItem-color': 'var(--mui-palette-neutral-300)',
        '--NavItem-hover-background': 'rgba(255, 255, 255, 0.04)',
        '--NavItem-active-background': 'var(--mui-palette-primary-main)',
        '--NavItem-active-color': 'var(--mui-palette-primary-contrastText)',
        '--NavItem-disabled-color': 'var(--mui-palette-neutral-500)',
        '--NavItem-icon-color': 'var(--mui-palette-neutral-400)',
        '--NavItem-icon-active-color': 'var(--mui-palette-primary-contrastText)',
        '--NavItem-icon-disabled-color': 'var(--mui-palette-neutral-600)',
        bgcolor: 'var(--SideNav-background)',
        color: 'var(--SideNav-color)',
        display: { xs: 'none', lg: 'flex' },
        flexDirection: 'column',
        height: '100%',
        left: 0,
        width: 'var(--SideNav-width)',
        position: 'fixed',
        top: 0,
        zIndex: 'var(--SideNav-zIndex)',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      <Stack spacing={0} sx={{ p: '5px', alignItems: 'center' }}>
        {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}> */}
          <Box component={RouterLink} href={paths.home} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Logo color="light" height={150} width={150} />
          </Box>
          <Typography
            color="var(--mui-palette-neutral-100)"
            variant="h6"
            sx={{ textAlign: 'center', marginBottom: '20px' }}
          >
            Medal Tracker
          </Typography>
        {/* </Box> */}
      </Stack>
      <Divider sx={{ borderColor: 'var(--mui-palette-neutral-700)' }} />
      <Box component="nav" sx={{ flex: '1 1 auto', p: '12px', overflowY: 'auto' }}>
        {renderNavItems({ pathname, items: navItems, onToggle: handleNavItemToggle })}
      </Box>
      {/* <Box>
          <iframe
            src="https://explo-website-tools.web.app/twitter-embed"
            style={{
              width: '100%',
              height: iframeHeight,
              transform: 'scale(0.9)', // Scale down to 90%
              border: 'none',
              borderRadius: '7px',
              transition: 'height 0.3s ease',
            }}
            title="Embedded Dashboard"
          ></iframe>
        </Box> */}
      <Box sx={{ position: 'sticky', bottom: 0, bgcolor: 'var(--SideNav-background)', zIndex: 1 }}>
        <Divider sx={{ borderColor: 'var(--mui-palette-neutral-700)' }} />
        <Stack spacing={1} sx={{ p: '20px' }}>
          <Button
            component="a"
            endIcon={<ArrowSquareUpRightIcon fontSize="var(--icon-fontSize-md)" />}
            fullWidth
            href="https://www.explo.co/book-a-demo"
            sx={{ mt: 0, marginBottom: '15px' }}
            target="_blank"
            variant="contained"
          >
            Request a Demo
          </Button>
          <Box
            component="a"
            href="https://www.explo.co"
            target="_blank"
            sx={{ textAlign: 'center', textDecoration: 'none' }}
          >
            <Typography
              color="var(--mui-palette-neutral-100)"
              variant="subtitle1"
              sx={{ textAlign: 'center', marginBottom: '8px' }}
            >
              Powered by
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                sx={{
                  position: 'relative',
                  '& img': {
                    height: 'auto',
                    width: '120px',
                    transition: 'opacity 0.25s ease',
                  },
                  '& img.hover': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: 0,
                  },
                  '&:hover img': {
                    opacity: 0,
                  },
                  '&:hover img.hover': {
                    opacity: 1,
                  },
                }}
              >
                <img
                  alt="Pro version"
                  src="/assets/explo.png"
                />
                <img
                  alt="Pro version hover"
                  src="/assets/explo-hover.png"
                  className="hover"
                />
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}