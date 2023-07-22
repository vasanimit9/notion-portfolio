import Link from "next/link";
import { useRouter } from "next/router";

interface IMobileNavigationBarProps {
  routes: {
    name: string;
    icon: string;
    link: string;
  }[];
}

const MobileNavigationBar = (props: IMobileNavigationBarProps) => {
  const { pathname, push } = useRouter();
  const { routes } = props;

  if (!routes.some((route) => route.link === pathname)) {
    return <></>;
  }

  return (
    <>
      <div className="sm:hidden fixed bottom-0 w-full bg-transparent py-2 px-3">
        <div
          className="flex flex-row border overflow-hidden rounded-xl"
          style={{
            backdropFilter: "saturate(160%) blur(8px)",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          }}
        >
          {routes.map((route, index) => (
            <Link
              href={route.link}
              key={index}
              className="cursor-pointer flex-1 flex justify-center flex overflow-hidden"
            >
              <div className="flex justify-center">
                <div
                  className={`w-[72px] flex flex-col items-center my-2 py-1 px-2 rounded-xl`}
                  // style={{
                  //   backgroundColor:
                  //     pathname === route.link
                  //       ? "rgba(255, 255, 255, 0.7)"
                  //       : "initial",
                  // }}
                >
                  <div className="text-xl mb-1" style={{fontSize: '36px'}}>{route.icon}</div>
                  {/* <div className="text-xs">{route.name}</div> */}
                </div>
              </div>
              {pathname === route.link && (
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "#3880ff",
                    width: "32px",
                    height: "10px",
                    borderRadius: "4px",
                    transform: "translateY(50%)",
                    bottom: 0,
                  }}
                />
              )}
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
      </div>
    </>
  );
};

export default MobileNavigationBar;
