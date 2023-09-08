import * as React from 'react';
import Seo from '~/components/Seo';
import AppNavBar from '~/components/generic/AppNavbar';
import AppFooter from "~/components/generic/AppFooter";
import GenericHero from '~/components/generic/GenericHero';
import ScrollToTopButton from '~/components/generic/ScrollToTopButton';

const AppLayout:React.FC<ILayoutComponentProps> = 
({
  pageTitle = "CoinSpotter",
  pageDescription = "",
  children
 }: ILayoutComponentProps) => {
  // Put Header or Footer Here
  return <>
  <Seo />

  <AppNavBar />

  <ScrollToTopButton />

  <main id='app-main-wrapper'>
    {children}
  </main>

  <AppFooter />
  </>;
}

export default AppLayout;

