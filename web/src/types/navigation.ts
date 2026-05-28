export type MainNavigationItem = {
  id: string;
  label: string;
};

export type MainNavigationQueryResult = {
  navigation?: (MainNavigationItem | null)[];
} | null;
