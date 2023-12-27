import NotionPage from "@/components/NotionPage";
import { getRecordMapInProps } from "@/utils";
import { NextPageContext } from "next";

export default function Home(props: any) {
  return (
    <NotionPage
      recordMap={props.recordMap}
      pageId="8a8bdba8-7cd6-481a-a95b-25fc0e82a615"
    />
  );
}

Home.getInitialProps = async (ctx: NextPageContext) => {
  const { props } = await getRecordMapInProps(
    ctx,
    "8a8bdba8-7cd6-481a-a95b-25fc0e82a615"
  );
  return props;
};
