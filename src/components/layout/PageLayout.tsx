import * as React from 'react';
import Seo from '~/components/Seo';
import Footer from "~/components/landing/Footer";
import Hero from '~/components/landing/Hero';
import NavBar from '~/components/landing/NavBar';
import GenericHero from '~/components/generic/GenericHero';
import ScrollToTopButton from '~/components/generic/ScrollToTopButton';

import PreFooterAction from '~/components/generic/PreFooterAction';

const PageLayout:React.FC<IPageLayoutComponentProps> = 
({
  pageTitle = "CoinSpotter",
  pageDescription = "",
  includeHero = true,
  useHomePageHeader = false,
  children
 }: IPageLayoutComponentProps) => {
  // Put Header or Footer Here
  return <>
  <Seo />
  
  <div>
    <ScrollToTopButton />
    <NavBar />
    {
      includeHero && ( // Run this only if includeHero is true
        useHomePageHeader ?
          <Hero
            heading={pageTitle}
            message='El Mejor Lugar para encontrar los lugares que aceptan monedas digitales en tu ciudad.'
          />
          :
          <GenericHero PageTitle={pageTitle} />
      )
    }

  </div>

  {children}
  <PreFooterAction />
  <Footer />
  </>;
}

export default PageLayout;

