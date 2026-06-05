import { client } from "./client";
import {
  PORTFOLIO_LOGO_QUERY,
  PORTFOLIO_MAIN_COLOR_QUERY,
} from "./queries/portfolioQueries";

export async function getPortfolioMainColor() {
  return client.fetch(
    PORTFOLIO_MAIN_COLOR_QUERY,
    {},
    {
      next: { revalidate: 60 },
    },
  );
}

export async function getPortfolioLogo() {
  return client.fetch(
    PORTFOLIO_LOGO_QUERY,
    {},
    {
      next: { revalidate: 60 },
    },
  );
}
