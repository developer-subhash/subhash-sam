"use client"

import Link from "next/link"

export default function(props: any){
    return (
        <div className="p-2 m-1 hover:bg-stone-700 hover:border hover:rounded-lg hover:border-stone-600">
            <button>
                <Link href={props.link}>
                    {props.title}
                </Link>
            </button>
        </div>
    )
}