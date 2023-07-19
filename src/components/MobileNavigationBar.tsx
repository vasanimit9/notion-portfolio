import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faBars,
  faHouse,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

interface IMobileNavigationBarProps {
  routes: {
    name: string;
    icon: IconDefinition;
    link: string;
  }[];
}

const MobileNavigationBar = (props: IMobileNavigationBarProps) => {
  const { pathname, push } = useRouter();
  const { routes } = props;

  if(!routes.some(route => route.link === pathname)) {
    return <></>;
  }

  return (
    <>
      <div className="sm:hidden flex flex-row fixed bottom-0 w-full border-t bg-white overflow-hidden">
        {routes.map((route, index) => (
          <Link
            href={route.link}
            key={index}
            className="cursor-pointer flex-1 flex justify-center flex overflow-hidden"
          >
            {pathname === route.link && (
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "#3880ff",
                  width: "32px",
                  height: "10px",
                  borderRadius: "4px",
                  transform: "translateY(-50%)",
                }}
              />
            )}
            <div className="flex justify-center">
              <div
                className={`w-[72px] flex flex-col items-center my-2 py-1 px-2 rounded-xl`}
              >
                <div className="text-xl">
                  <FontAwesomeIcon icon={route.icon} />
                </div>
                <div className="text-sm">{route.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* <div className="sm:hidden max-sm:invisible flex flex-row w-full border-t bg-white">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center hover:bg-gray-200"
            >
              <div className="text-xl">🏡</div>
              <div>Home</div>
            </div>
          ))}
      </div> */}
    </>
  );
};

export default MobileNavigationBar;
