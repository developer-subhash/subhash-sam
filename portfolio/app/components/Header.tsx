import Button from "../common/Button";

export default function(){
    return (
        <div className="mx-[2rem] flex justify-around mt-2 border rounded-md border-stone-600 shadow-xl shadow-blue-500/40 hover:shadow-red-500/40">
            <Button title={"home"} link={"/"}/>
            <Button title={"blog"} link={"/blog"}/>
            <Button title={"project"} link={"/project"}/>
            <Button title={"contact"} link={"/contact"}/>
            {/* <Button title={"knowledge"}/>
            <Button title={"roadmap"}/>
            <Button title={"resources"}/> */}
        </div>
    )
}