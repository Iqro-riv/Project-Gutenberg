import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

interface BookProps {
  title: string;
  description: string;
  languages: string;
  downloads: number;
  id: number;
}

export default function Book(props: BookProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="md:w-[80vw] 2xl:w-full h-[25vw] medium:h-full shadow-xl rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer medium:pb-12">
      <div className="flex justify-end p-4">
        <button
          onClick={() => {
            setIsFavorite(!isFavorite);
          }}
        >
          <FontAwesomeIcon
            icon={faStar}
            color={isFavorite === true ? "#e1ad01" : ""}
          />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-center px-12 gap-2">
          <span className="text-2xl tablet:text-sm font-['Poppins'] font-normal">
            {props.title.length > 80
              ? `${props.title.slice(0, 80)}...`
              : props.title}
          </span>

          <span className="text-sm font-['Poppins'] font-normal break-words">
            {!props.description || props.description === ""
              ? "no Description"
              : props.description.length > 150
              ? `${props.description.slice(0, 150)}...`
              : props.description}
          </span>

          <div className="flex flex-col justify-self-end">
            <span className="text-md font-['Poppins'] font-normal">
              Languages: <span className="text-red-500">{props.languages}</span>
            </span>

            <span className="text-md font-['Poppins'] font-normal">
              Downloads:{" "}
              <span className="text-green-500"> {props.downloads}</span>
            </span>
          </div>

          <div className="flex">
            <Link
              className="inline-block w-[200px] border rounded-lg border-black text-sm capitalize px-4 py-2 cursor-pointer hover:text-white bg-gradient-to-r bg-no-repeat duration-300 from-black to-black bg-[length:0px] hover:bg-[length:100%]"
              to={`/book/${props.id}`}
            >
              Read...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}