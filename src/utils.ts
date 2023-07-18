import axios from "axios";

export const getPageRecordMap = async (pageId: string) => {
  const fetchPageData = async () =>
    await axios.get("/api/notion-client", {
      params: {
        pageId,
      },
    });
  const stringifiedPageData = globalThis.window?.localStorage.getItem(pageId);

  try {
    const pageData = JSON.parse(stringifiedPageData ?? "{}");
    if (
      !stringifiedPageData ||
      new Date().getTime() - new Date(pageData.fetchTime).getTime() >
        60 * 60 * 1000
    ) {
      const pageRecordMapResponse = await fetchPageData().catch(() => {
        if(!!stringifiedPageData) {
          return pageData.recordMap;
        }
        throw new Error('No network and no stored data');
      });
      globalThis.window?.localStorage.setItem(
        pageId,
        JSON.stringify({
          fetchTime: new Date().toISOString(),
          recordMap: pageRecordMapResponse.data,
        })
      );
      return pageRecordMapResponse.data;
    }
    return pageData.recordMap;
  } finally {
  }
};
