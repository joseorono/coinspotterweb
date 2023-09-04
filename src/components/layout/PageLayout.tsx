import * as React from 'react';
import Seo from '~/components/Seo';
import Footer from "~/components/landing/Footer";
import Hero from '~/components/landing/Hero';
import NavBar from '~/components/landing/NavBar';

const PageLayout:React.FC<IPageLayoutComponentProps> = 
({
  pageTitle = "",
  pageDescription = "",
  useHomePageHeader = false,
  children
 }: IPageLayoutComponentProps) => {
  // Put Header or Footer Here
  return <>
  <Seo />
  
  <div>
    <NavBar />
    <Hero
      heading='CoinSpotter'
      message='The best place to find all crypto spots'
    />
    
  </div>

  {children}
  <Footer />
  </>;
}

export default PageLayout;

