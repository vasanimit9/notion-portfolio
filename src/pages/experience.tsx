import NotionPage from "@/components/NotionPage";
import { getRecordMapInProps } from "@/utils";
import { NextPageContext } from "next";

export default function Blog(props: any) {
  
  return (
    <NotionPage
      recordMap={props.recordMap}
      pageId="2bdc23f2-3f58-4581-9d66-90405ce37b23"
    />
  );
}

export const getServerSideProps = async (ctx: NextPageContext) =>
  await getRecordMapInProps(ctx, "2bdc23f2-3f58-4581-9d66-90405ce37b23");
