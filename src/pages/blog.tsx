import NotionPage from "@/components/NotionPage";
import { getRecordMapInProps } from "@/utils";
import { NextPageContext } from "next";

export default function Blog(props: any) {
  return (
    <NotionPage
      recordMap={props.recordMap}
      pageId="b341973f-45ad-45c3-87b5-d925446abf05"
    />
  );
}

export const getServerSideProps = async (ctx: NextPageContext) =>
  await getRecordMapInProps(ctx, "b341973f-45ad-45c3-87b5-d925446abf05");
