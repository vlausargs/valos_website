import { useRouter } from "next/router";

type Props = {
    children: React.ReactNode,
};
const Layout: React.FC<Props> = ({ children }): JSX.Element => {
    const router = useRouter();
    const handleRoute = async(route:string)=> {
        await router.push(route);
    }
    return (
        <div className="font-mono flex flex-col min-w-full min-h-screen bg-gray-900">

            <div className="flex flex-col min-w-full h-36 bg-gray-800 p-16">
                <div className="text-white text-4xl font-bold">
                    Valos
                </div>

            </div>
            <div className="flex flex-col w-full">
                <div className="flex flex-row mt-6 ml-20 text-gray-400 text-2xl font-bold ">
                    <button className="flex flex-col hover:text-white" onClick={(e)=>void handleRoute('/home')}> Home </button>
                    <div className="flex flex-col mx-2">/ </div>
                    <button className="flex flex-col hover:text-white" onClick={(e)=>void handleRoute('/blog')}> Blog </button>
                    <div className="flex flex-col mx-2">/ </div>
                    <button className="flex flex-col hover:text-white" onClick={(e)=>void handleRoute('/whois')}> Who is Valos </button>
                    <div className="flex flex-col mx-2">/ </div>
                    <button className="flex flex-col hover:text-white" onClick={(e)=>void handleRoute('/contact')}> Contact </button>
                </div>
                <div className="flex flex-col w-full">
                    {children}
                </div>
            </div>

        </div>
    )
}
export default Layout;