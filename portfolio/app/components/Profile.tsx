import image from "/public/images/profile.jpg";
import Image from "next/image";

export default function () {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-around">
      <div className="md:w-1/3 w-3/4 mb-10 md:mb-0 shadow-md shadow-green-500/50 hover:shadow-red-500/40 rounded-md">
      <Image
          className="w-full h-auto rounded-lg shadow-md shadow-green-500/40 hover:shadow-red-500/40 "
          src={image}
          alt="profile"
        />
      </div>
      <div className="md:w-1/3 w-3/4 h-full p-2 rounded-lg shadow-md shadow-orange-500/40 hover:shadow-red-500/40">
        <p>
          Hello,
          <br /><br />
          I'm a Software Developer (SDE 1) at J P Morgan Chase,
          where I work with a talented team to create innovative digital
          solutions. My role involves writing code, solving problems, and
          contributing to projects that shape our company's technology.
          <br /><br />
          I'm passionate about technology and enjoy the challenges of software
          development. Collaborating with colleagues from different backgrounds
          and locations, I strive to deliver high-quality work and stay
          adaptable in a fast-paced environment.
          <br /><br />
          I'm committed to excellence and excited to continue growing as a
          developer at JPMC.
          <br /><br />
          Best regards,
          <br />
          Subhash
        </p>
      </div>
      
    </div>
  );
}
