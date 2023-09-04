import * as React from 'react';
import Seo from '~/components/Seo';
import Footer from "~/components/landing/Footer";
import Hero from '~/components/landing/Hero';
import NavBar from '~/components/landing/NavBar';
import GenericHero from '~/components/generic/GenericHero';

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
    
    <NavBar />
    {
      includeHero && ( // Run this only if includeHero is true
        useHomePageHeader ?
          <Hero
            heading={pageTitle}
            message='The best place to find all crypto spots'
          />
          :
          <GenericHero PageTitle={pageTitle} />
      )
    }

  </div>

  {children}
  <Footer />
  </>;
}

export default PageLayout;

