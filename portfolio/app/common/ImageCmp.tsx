import Image from "next/image";

export default function(props: any){
    return (
          <img
          className="w-full h-auto rounded-lg "
          src={props.src}
          alt="profile"
        />
    )
}