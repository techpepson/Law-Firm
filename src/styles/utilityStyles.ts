//style definitions for the header

export const headerStyles = {
  globalHeaderPositioning: `flex items-center justify-center gap-5 max-lg:hidden`,
  navContainerPositioning: `flex gap-5`,
  navTextStyles: `transform transition-colors duration-300 hover:text-hoverColor-primary antialiased`,
  hoverCardStyles: `flex flex-col gap-5`,
  minScreenStyles: `max-lg:flex hidden relative items-center`,
  minButtonStyles: `flex right-10 absolute top-10 gap-5`,
  mobileViewPositioning: `flex flex-col right-0 relative`,
};

export const footerStyles = {
  footerPositioning: `flex gap-5 justify-center items-center max-lg:flex-col`,
  footerGlobalContainer: `flex-col justify-between items-center`,
};
