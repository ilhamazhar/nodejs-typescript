import axios from 'axios';

const apiKey = process.env.GOOGLE_API_KEY!;
const cx = process.env.GOOGLE_CX!;

export interface SearchResult {
  title: string;
  link: string;
  snippet?: string;
  source?: string;
}

export const googleSearch = async (
  query: string,
  start = 1,
  limit = 10,
): Promise<{
  items: { title: any; link: any; snippet: any; source: any }[];
  totalResults: number | undefined;
  raw: any;
}> => {
  const normalizedStart = Math.max(1, Math.floor(start));
  const normalizedNum = Math.min(10, Math.max(1, Math.floor(limit)));

  const url = `https://www.googleapis.com/customsearch/v1`;

  const params = {
    key: apiKey,
    cx,
    q: query,
    start: normalizedStart,
    num: normalizedNum,
  };

  try {
    const { data } = await axios.get(url, { params, timeout: 5000 });

    const items =
      data.items ||
      [].map((item: any) => ({
        title: item.title,
        link: item.link,
        snippet: item.snippet,
        source: item.displayLink,
      }));

    const result = {
      items,
      totalResults: data.searchInformation?.totalResults
        ? Number(data.searchInformation.totalResults)
        : undefined,
      raw: data,
    };

    return result;
  } catch (err: any) {
    if (err.response) {
      const status = err.response.status;
      const message = err.response.data?.error?.message || err.response.statusText;
      const e: any = new Error(`Google API error: ${message}`);
      e.status = status;
      throw e;
    }
    throw new Error(`Google request failed: ${err.message || err}`);
  }
};
