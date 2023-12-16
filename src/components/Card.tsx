import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoGithub,
} from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import memo from "../assets/portfolio_memo.png";

interface Props {
  dark: boolean;
}

const Card = ({ dark }: Props) => {
  return (
    <article
      className={`max-w-5xl mx-auto rounded-md overflow-hidden shadow-md bg-slate-500 flex`}
    >
      <div className="grid-cols-2">
        <img src={memo} alt="Memo" />
      </div>

      <div className="px-8 py-16 flex flex-col mb-8">
        <div className="text-center flex flex-col">
          <h1 className="text-4xl text-gray-100 font-black">
            Vaheed Nematpour
          </h1>
          <p className="text-xl text-gray-100 font-bold">Web Developer</p>
          <p className="text-lg font-semibold text-gray-100">React, Django</p>

          <hr className="border-0 border-b-8 border-dotted w-8 mx-auto my-4" />

          <div className="text-center">
            <h2 className="text-2xl text-gray-100 font-bold">About</h2>
            <p className="text-md text-gray-100 w-3/4 mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              quod voluptatem maxime veniam vitae distinctio, repellat dolore
              voluptate animi explicabo assumenda odit officia corporis fuga?
            </p>
          </div>

          <hr className="border-0 border-b-8 border-dotted w-8 mx-auto my-4" />

          <div className="text-center">
            <h2 className="text-2xl text-gray-100 font-bold">Interests</h2>
            <p className="text-md text-gray-100 w-3/4 mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              quod voluptatem maxime veniam vitae distinctio, repellat dolore
              voluptate animi explicabo assumenda odit officia corporis fuga?
            </p>
          </div>

          <hr className="border-0 border-b-8 border-dotted w-8 mx-auto mt-4 mb-12" />

          <div className="bg-slate-800 px-6 py-4 max-w-sm mx-auto rounded-md shadow-sm">
            <ul className="text-gray-100 text-5xl flex items-center space-x-3">
              <li>
                <MdOutlineMailOutline />
              </li>
              <li>
                <IoLogoGithub />
              </li>
              <li>
                <IoLogoInstagram />
              </li>
              <li>
                <IoLogoLinkedin />
              </li>
              <li>
                <IoLogoFacebook />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
