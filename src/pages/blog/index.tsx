import { type NextPage } from "next";
import { api } from "../../utils/api";
import parse from 'html-react-parser';

const PostEntries: React.FC = () => {
    const { data: postEntries, isLoading } = api.post.getAll.useQuery();

    if (isLoading) {
        return <div>Fetching messages...</div>;
    }

    return (
        <div className="flex flex-col gap-4">
            {postEntries?.map((entry, index) => (
                <div key={index} className="flex flex-col">
                    <div className="flex flex-col">{parse(entry?.content?entry?.content:"")}</div>
                    <div className="flex flex-row">
                        {entry.tag.map((obj, idx) => (<div key={idx} className="text-center rounded-md border-2 border-zinc-800 p-1 m-2">{obj.desc}</div>))}
                    </div>
                </div>
            ))}
        </div>
    );
};
const Blog: NextPage = () => {
    return (
        <div className="flex lg:flex-row flex-col w-full px-10 lg:p-0">
            <div className="flex flex-col bg-white w-full lg:w-3/4 min-h-[40rem] mt-10 lg:ml-20 lg:mr-4 p-10">
                <div>
                    Blog Content
                </div>
                <PostEntries />
            </div>
            <div className="flex flex-col bg-white w-full lg:w-1/4 min-h-[40rem] mt-10 lg:ml-4 lg:mr-20 p-10">
                <div className="flex flex-col">side bar</div>
            </div>
        </ div>
    )
}
export default Blog;