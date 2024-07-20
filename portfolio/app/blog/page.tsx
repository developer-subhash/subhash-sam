import TopicMenu from "./components/SubjectMenu";
import subjects from "./subjects";

export default function Home() {
  return (
    <div className="m-1">
      <div className="p-2 m-5 text-center">
        <h1 className="text-4xl font-bold text-violet-500">My Blogs / Skills</h1>
        <br /><br />
        <p>I am either learning or improving on below subjects.</p><br />
        <p>
          All subjects in itself is very vast, <br />
          I learn or share my knowledge based on what I use <br />
          in my professional work or my self project.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-around py-[2em]">
        {
            subjects.map(topic => {
                return <TopicMenu 
                 title={topic.topic}
                 description={topic.description}
                 imgSrc={topic.imgSrc}
                />
            })
        }
      </div>
    </div>
  );
}
