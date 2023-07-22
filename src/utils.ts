import axios from "axios";
import { NextPageContext } from "next";

export const getPageRecordMap = async (pageId: string, hostname: string) => {
  const fetchPageData = async () =>
    await axios.get(`${hostname}/api/notion-client`, {
      params: {
        pageId,
      },
    });

  try {
    const pageRecordMapResponse = await fetchPageData().catch((e) => {
      console.log(e);
      throw new Error("No network and no stored data");
    });

    return pageRecordMapResponse.data;
  } finally {
  }
};

export const localizePageRecordMap = async (pageId: string, recordMap: any) => {
  globalThis.window?.localStorage.setItem(
    pageId,
    JSON.stringify({
      fetchTime: new Date().toISOString(),
      recordMap: recordMap,
    })
  );
};

export const getLocalizedPageRecordMap = (pageId: string) => {
  const stringifiedPageData = globalThis.window?.localStorage.getItem(pageId);

  try {
    const pageData = JSON.parse(stringifiedPageData ?? "{}");
    return pageData?.recordMap;
  } catch (e) {
    return;
  }
};

export const isPageDataLocalized = (pageId: string) => {
  const stringifiedPageData = globalThis.window?.localStorage.getItem(pageId);
  try {
    const pageData = JSON.parse(stringifiedPageData ?? "{}");
    if (!pageData.fetchTime) {
      return false;
    }
    return (
      new Date().getTime() - new Date(pageData.fetchTime).getTime() <
      60 * 60 * 1000
    );
  } catch (e) {
    return false;
  }
};

export const getRecordMapInProps = async (
  ctx: NextPageContext,
  pageId: string
) => {
  if (ctx.query.local === "true") {
    return { props: {} };
  }
  const recordMap = await getPageRecordMap(pageId, ctx.req?.headers.host || '').catch(() => {});
  if (!recordMap) {
    return { props: {} };
  }
  return {
    props: {
      recordMap,
    },
  };
};
