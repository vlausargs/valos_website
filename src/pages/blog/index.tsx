const Blog: NextPage = () => {
    return (
        <div className="flex lg:flex-row flex-col w-full px-10 lg:p-0">
            <div className="flex flex-col bg-white w-full lg:w-3/4 min-h-[40rem] mt-10 lg:ml-20 lg:mr-4 p-10">
                <div>
                    Titles
                </div>
            </div>
            <div className="flex flex-col bg-white w-full lg:w-1/4 min-h-[40rem] mt-10 lg:ml-4 lg:mr-20 p-10">
                <div className="flex flex-col">side bar</div>
            </div>
        </ div>
    )
}
export default Blog;