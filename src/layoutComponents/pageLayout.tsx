import * as React from 'react';

const pageLayout:React.FC<IPageLayoutComponentProps> = 
({
  pageTitle = "",
  pageDescription = "",
  useHomePageHeader = false,
  children
 }: IPageLayoutComponentProps) => {
  // Put Header or Footer Here
  return <>{children}</>;
}

export default pageLayout;

