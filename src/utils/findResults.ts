type Stat = {
  stat: {
    name: string;
  };
  base_stat: number;
};

// Utility that finds a property in the Pokemon statistics object, receives a straing or key that you want to search for
export const findItems = (
  stats: Stat[],
  statName: string
): number | undefined => {
  const stat = stats.find((statItem) => statItem.stat.name === statName);
  return stat ? stat.base_stat : undefined;
};
