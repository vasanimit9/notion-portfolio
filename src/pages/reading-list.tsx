import NotionPage from "@/components/NotionPage";
import { getRecordMapInProps } from "@/utils";
import { NextPageContext } from "next";

export default function ReadingList(props: any) {
  return (
    <NotionPage
      recordMap={props.recordMap}
      pageId="636c5b51-90ec-48f5-b955-edb7f76335be"
    />
  );
}

export const getServerSideProps = async (ctx: NextPageContext) =>
  await getRecordMapInProps(ctx, "636c5b51-90ec-48f5-b955-edb7f76335be");
