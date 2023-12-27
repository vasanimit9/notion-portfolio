import NotionPage from "@/components/NotionPage";
import { getRecordMapInProps } from "@/utils";
import { NextPageContext } from "next";
import { useRouter } from "next/router";

export default function NotionPageExport(props: any) {
  const { query } = useRouter();

  if (typeof query.pageId !== "string") {
    return <></>;
  }

  return <NotionPage recordMap={props.recordMap} pageId={query.pageId} />;
}

NotionPageExport.getInitialProps = async (ctx: NextPageContext) => {
  const { props } = await getRecordMapInProps(ctx, ctx.query.pageId as string);
  return props;
};
