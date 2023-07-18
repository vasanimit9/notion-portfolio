import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";

interface IDesktopSideBarProps {
  routes: {
    name: string;
    icon: IconDefinition;
    link: string;
  }[];
}

const DesktopSideBar = (props: IDesktopSideBarProps) => {
  const { routes } = props;
  const { pathname } = useRouter();

  return (
    <div className="max-sm:hidden min-w-[200px] h-screen p-0.5 border-r">
      <div className="py-4 px-2">
        {routes.map((route, index) => {
          return (
            <div key={index} className={`py-0.5`}>
              <Link
                href={route.link}
                className={`flex items-center h-9 p-3 hover:bg-gray-100 rounded-lg ${
                  route.link === pathname ? "bg-gray-200 hover:bg-gray-300" : ""
                }`}
              >
                <div className="min-w-[32px]">
                  <FontAwesomeIcon icon={route.icon} size="xs" />
                </div>
                <div className="flex-1 text-sm">{route.name}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopSideBar;
