import Button from "./Button";

export default function(){
    return (
        <div className="flex justify-around mt-2 border rounded-md border-stone-600 shadow-xl shadow-blue-500/40 hover:shadow-red-500/40">
            <Button title={"skills"}/>
            <Button title={"projects"}/>
            <Button title={"blog"}/>
            <Button title={"contacts"}/>
            {/* <Button title={"knowledge"}/>
            <Button title={"roadmap"}/>
            <Button title={"resources"}/> */}
        </div>
    )
}