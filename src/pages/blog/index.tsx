import { type NextPage } from "next";
import { api } from "../../utils/api";
import parse from "html-react-parser";

const PostEntries: React.FC = () => {
  const { data: postEntries, isLoading } = api.post.getAll.useQuery();

  if (isLoading) {
    return <div>Fetching messages...</div>;
  }

  return (
    <div className="flex flex-col gap-4 ">
      {postEntries?.map((entry, index) => (
        <div key={index} className="flex flex-col bg-white p-10">
          <div className="flex flex-col text-3xl font-black ">
            {entry?.title}
          </div>
          <div className="flex flex-col">
            {parse(entry?.content ? entry?.content : "")}
          </div>
          <div className="mt-10 flex flex-row">
            {entry.tag.map((obj, idx) => (
              <div
                key={idx}
                className="mr-4 rounded-md border-2 border-zinc-800 p-1 text-center"
              >
                {obj.desc}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
const Blog: NextPage = () => {
  return (
    <div className="flex w-full flex-col px-10 lg:flex-row lg:p-0">
      <div className="mt-10 flex  min-h-[40rem] w-full flex-col lg:ml-20 lg:mr-4 lg:w-3/4">
        <PostEntries />
      </div>
      <div className="mt-10 flex  min-h-[40rem] w-full flex-col bg-white p-10 lg:ml-4 lg:mr-20 lg:w-1/4">
        <div className="flex flex-col">side bar</div>
      </div>
    </div>
  );
};
export default Blog;
