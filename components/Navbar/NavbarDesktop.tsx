import React from 'react';
import Logo from '../Logo';
import { NavbarItem } from './NavbarItem';

export const NavbarDesktop = () => {
  const items = [
    { label: 'Dashboard', link: '/' },
    { label: 'Transactions', link: '/transactions' },
    { label: 'Manage', link: '/manage' }
  ];
  return (
    <div className="hidden border-separate border-b bg-background md:block">
      <nav className="container flex items-center justify-between md:block">
        <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
          <Logo />
          <div className="flex h-full">
            {items.map((item) => (
              <NavbarItem
                key={item.label}
                link={item.link}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};
