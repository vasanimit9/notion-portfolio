import { getPageRecordMap } from "@/utils";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import { FadeLoader } from "react-spinners";

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then((m) => m.Code)
);
const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
);
const Pdf = dynamic(
  () => import("react-notion-x/build/third-party/pdf").then((m) => m.Pdf),
  {
    ssr: false,
  }
);
const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  }
);

interface INotionPageProps {
  pageId: string;
}

const NotionPage = (props: INotionPageProps) => {
  const { pageId } = props;
  const [recordMap, setRecordMap] = useState<any>();

  useEffect(() => {
    if (!!recordMap) {
      document.title = `Amighty | ${recordMap.block[pageId].value.properties.title[0]}`;
      return;
    }
    getPageRecordMap(pageId).then(setRecordMap);
  }, [pageId, recordMap]);

  if (!recordMap) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <FadeLoader color={"rgb(154, 162, 160)"} />
      </div>
    );
  }

  return (
    <Fragment>
      <style dangerouslySetInnerHTML={{
        __html: /* css */ `
          /*
          .notion-app {
            height: 100vh;
            overflow: hidden;
          }
          .notion-frame {
            height: 100vh;
            overflow: hidden;
          }
          .notion-page-scroller {
            overflow: auto;
          }
          */
        `
        }} />
      <NotionRenderer
        recordMap={recordMap}
        fullPage
        // darkMode
        mapPageUrl={(pageId) => {
          if (pageId === "8a8bdba8-7cd6-481a-a95b-25fc0e82a615") {
            return "../";
          }
          if (pageId === "b341973f-45ad-45c3-87b5-d925446abf05") {
            return "../blog";
          }
          if(pageId === '636c5b51-90ec-48f5-b955-edb7f76335be') {
            return '../reading-list';
          }
          return `./notion-page/${pageId}`;
        }}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
          Pdf,
          nextImage: Image,
          nextLink: Link
        }}
      />
    </Fragment>
  );
};

export default NotionPage;
