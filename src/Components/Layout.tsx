import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }): JSX.Element => {
  const router = useRouter();
  const handleRoute = async (route: string) => {
    await router.push(route);
  };
  return (
    <div className="flex min-h-screen min-w-full flex-col bg-gray-900 font-mono">
      <div className="flex h-36 min-w-full flex-col bg-gray-800 p-16">
        <div className="text-4xl font-bold text-white">Valos</div>
      </div>
      <div className="flex w-full flex-col">
        <div className="mt-6 ml-20 flex flex-row text-2xl font-bold text-gray-400 ">
          <button
            className="flex flex-col hover:text-white"
            onClick={() => void handleRoute("/home")}
          >
            {" "}
            Home{" "}
          </button>
          <div className="mx-2 flex flex-col">/ </div>
          <button
            className="flex flex-col hover:text-white"
            onClick={() => void handleRoute("/blog")}
          >
            {" "}
            Blog{" "}
          </button>
          <div className="mx-2 flex flex-col">/ </div>
          <button
            className="flex flex-col hover:text-white"
            onClick={() => void handleRoute("/whois")}
          >
            {" "}
            Who is Valos{" "}
          </button>
          <div className="mx-2 flex flex-col">/ </div>
          <button
            className="flex flex-col hover:text-white"
            onClick={() => void handleRoute("/contact")}
          >
            {" "}
            Contact{" "}
          </button>
        </div>
        <div className="flex w-full flex-col">{children}</div>
      </div>
    </div>
  );
};
export default Layout;
