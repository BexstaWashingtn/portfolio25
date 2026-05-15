import { client } from "./client";
import { PORTFOLIO_MAIN_COLOR_QUERY } from "./queries/portfolioQueries";

export async function getPortfolioMainColor() {
  return client.fetch(
    PORTFOLIO_MAIN_COLOR_QUERY,
    {},
    {
      next: { revalidate: 60 },
    },
  );
}
