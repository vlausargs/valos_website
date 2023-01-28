
type LayoutProps = {
    children: React.ReactNode,
};
const Layout = ({ children }: LayoutProps): React.ReactNode => {
    return (
        <div className="font-mono flex flex-col min-w-full min-h-screen bg-gray-900">

            <div className="flex flex-col min-w-full h-36 bg-gray-800 p-16">
                <div className="text-white text-4xl font-bold">
                    Valos
                </div>

            </div>
            <div className="flex flex-col w-full">
                <div className="flex flex-row mt-6 ml-20 text-gray-400 text-2xl font-bold ">
                    <div className="flex flex-col hover:text-white"> Home </div>
                    <div className="flex flex-col mx-2">/ </div>
                    <div className="flex flex-col hover:text-white"> Blog </div>
                    <div className="flex flex-col mx-2">/ </div>
                    <div className="flex flex-col hover:text-white"> Who is Valos </div>
                    <div className="flex flex-col mx-2">/ </div>
                    <div className="flex flex-col hover:text-white"> Contact </div>
                </div>
                <div className="flex flex-col w-full">
                    {children}
                </div>
            </div>

        </div>
    )
}
export default Layout;