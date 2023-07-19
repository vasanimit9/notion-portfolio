import NotionPage from "@/components/NotionPage";
import { useRouter } from "next/router";

export default function NotionPageExport() {
  const {query} = useRouter();

  if(typeof query.pageId !== 'string') {
    return <></>
  }
  
  return <NotionPage pageId={query.pageId}  />
}
