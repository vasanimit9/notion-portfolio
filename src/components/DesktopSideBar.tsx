import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface IDesktopSideBarProps {
  routes: {
    name: string;
    icon: IconDefinition;
    link: string;
  }[];
}

const DesktopSideBar = (props: IDesktopSideBarProps) => {
  const { routes } = props;

  return (
    <div className="max-sm:hidden w-[256px] min-w-[256px] h-screen p-0.5 border-r">
      <div className="py-0.5 px-2">
        {routes.map((route, index) => {
          return (
            <div key={index}>
              <Link
                href={route.link}
                className="flex items-center h-9 p-3 hover:bg-gray-200 rounded-lg"
              >
                <div className="min-w-[32px]">
                  <FontAwesomeIcon icon={route.icon} size="sm" />
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
