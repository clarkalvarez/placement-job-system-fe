import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { IconClipboard, IconGraph, IconLogout, IconUsers, IconFriends } from '@tabler/icons-react';
import classes from './NavBar.module.css';
import Link from 'next/link';
import { TabsInterface } from '../../interfaces/Tabs.interface';

const data: TabsInterface[] = [
  { link: '/dashboard', label: 'Dashboard', icon: IconGraph },
  { link: '/job-board', label: 'Job Board', icon: IconClipboard },
  { link: '/bench-employees', label: 'Bench Employees', icon: IconUsers },
  { link: '/applicants', label: 'Applicants', icon: IconFriends },
];

export function Navbar() {
  const [active, setActive] = useState('Dashboard');
  const router = useRouter();

  useEffect(() => {
    const activePage = data.find((item) => router.pathname.includes(item.link));
    setActive(activePage ? activePage.label : 'Dashboard');
  }, [router.pathname]);

  function changeTabView(item: TabsInterface) {
    if (item.label === active) {
      return;
    }
    setActive(item.label);
  }

  const links = data.map((item: TabsInterface) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={() => changeTabView(item)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <h2>Clark Alvarez</h2>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
