export interface RummerlabPaper {
  filename: string;
  name: string;
  year: number | null;
  url: string;
}

interface RummerlabPapersPage {
  total?: number;
  limit?: number;
  papers?: RummerlabPaper[];
}

export const RUMMERLAB_ORIGIN = 'https://rummerlab.com';
export const DEFAULT_FEATURED_LIMIT = 5;

const fetchPapersJson = async (path: string): Promise<RummerlabPapersPage | null> => {
  try {
    const response = await fetch(`${RUMMERLAB_ORIGIN}${path}`, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error(`Failed to fetch RummerLab papers: ${response.status} ${response.statusText}`);
      return null;
    }

    return (await response.json()) as RummerlabPapersPage;
  } catch (error) {
    console.error('Error fetching RummerLab papers:', error);
    return null;
  }
};

const asPapers = (page: RummerlabPapersPage | null): RummerlabPaper[] => {
  if (!page || !Array.isArray(page.papers)) {
    return [];
  }
  return page.papers;
};

export const getRummerlabPapers = async (): Promise<RummerlabPaper[]> => {
  return asPapers(await fetchPapersJson('/api/papers'));
};

export const getRummerlabFeaturedPapers = async (
  limit = DEFAULT_FEATURED_LIMIT,
): Promise<RummerlabPaper[]> => {
  const papers = await getRummerlabPapers();
  const parsedLimit = Number.isFinite(limit) ? Math.max(0, Math.floor(limit)) : DEFAULT_FEATURED_LIMIT;
  return papers.slice(0, parsedLimit);
};

export const findRummerlabPaper = (
  papers: RummerlabPaper[],
  filenameIncludes: string,
): RummerlabPaper | undefined => {
  const needle = filenameIncludes.toLowerCase();
  return papers.find((paper) => paper.filename.toLowerCase().includes(needle));
};
