import NotionPage from "@/components/NotionPage";
import { getRecordMapInProps } from "@/utils";
import { NextPageContext } from "next";

export default function Experience(props: any) {
  
  return (
    <NotionPage
      recordMap={props.recordMap}
      pageId="2bdc23f2-3f58-4581-9d66-90405ce37b23"
    />
  );
}

Experience.getInitialProps = async (ctx: NextPageContext) => {
  const { props } = await getRecordMapInProps(
    ctx,
    "2bdc23f2-3f58-4581-9d66-90405ce37b23"
  );
  return props;
};