import ImageCmp from "@/app/common/ImageCmp";
import "../../../styles/scrollbar.css"


export default function(props: any){
    const title = props.title;
    const imgSrc = props.imgSrc;
    const description = props.description;

    return (
        <div className="sm:w-1/3 flex flex-row p-1 m-0.5 items-center shadow-green-500/40 rounded-lg ">
            <div className="w-1/3 m-1 shadow-md shadow-cyan-500/50 hover:shadow-red-500/40 rounded-md text-center">
                <ImageCmp src={imgSrc} />
            </div>
            <div className="shadow-md shadow-violet-500/50 hover:shadow-red-500/40  flex flex-col justify-center w-2/3 h-30 md:h-40 lg:h-50 xl:h-50 m-1 p-2 text-center bg-neutral-900 rounded-lg">
                <div className="px-2 font-extrabold">{title}</div>
                <div className="custom-scrollbar h-3/4 text-balance text-wrap overflow-auto p-2 m-2 rounded-lg md:shadow-sm bg-stone-800">{description}</div>
            </div>
        </div>
    )
}