//style definitions for the header

export const headerStyles = {
  globalHeaderPositioning: `flex items-center justify-center gap-5 max-lg:hidden`,
  navContainerPositioning: `flex gap-5`,
  navTextStyles: `transform transition-colors duration-300 hover:text-hoverColor-primary antialiased`,
  hoverCardStyles: `flex flex-col gap-5`,
  minScreenStyles: `max-lg:flex hidden relative items-center`,
  minButtonStyles: `flex right-10 absolute top-10 gap-5`,
  mobileViewPositioning: `flex flex-col relative`,
};

export const footerStyles = {
  footerPositioning: `flex gap-5 justify-center items-center max-lg:flex-col`,
  footerGlobalContainer: `flex-col justify-between items-center`,
};

export const aboutPageStyles = {
  containerStyles: ``,
  textStyles: `text-md font-normal text-slate-300 text-justify`,
  textImageStyles: `flex gap-5 max-2xl:flex-col items-center gap-5`,
  textStylesVariant: `text-pretty`,
  headingStyles: `text-orange-500`,
  headingStylesVariant: `text-orange-700`,
};

export const selectStyles = {
  selectContainer: `flex flex-col gap-8`,
  mappedContent: `flex flex-col items-start`,
};
