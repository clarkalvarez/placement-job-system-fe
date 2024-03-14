import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import { Navbar } from '../Navbar';
import classes from './Layout.module.css';

export function Layout({ Component, pageProps }: AppProps) {
  return (
    <div className={classes.parent}>
      <Navbar />
      <div className={classes.child}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
