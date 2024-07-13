"use client"

export default function({title}: any){
    return (
        <div className="p-2 m-1 hover:bg-stone-700 hover:border hover:rounded-lg hover:border-stone-600">
            <button>
                {title}
            </button>
        </div>
    )
}