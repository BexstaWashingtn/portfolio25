export const PORTFOLIO_MAIN_COLOR_QUERY = `
  *[_type == "siteSettings"][0].siteMainColor {
    r,
    g,
    b
  }
`;

export const PORTFOLIO_LOGO_QUERY = `*[_type == "siteSettings"][0].siteLogo`;
