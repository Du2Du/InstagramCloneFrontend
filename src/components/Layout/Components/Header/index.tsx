/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import { AiFillCloseCircle, AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { ImCompass2 } from "react-icons/im";
import { RiMessengerLine } from "react-icons/ri";
import { useHistory } from "react-router";
import { setTimeout } from "timers";
import Logo from "../../../../assets/Logo.png";
import Profile from "../../../../assets/Profile.jpg";

export const Header: React.FC = () => {
  const [openInput, setOpenInput] = useState(false);
  const boxInputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const handleClickOutside = (event: any) => {
    if (boxInputRef.current && !boxInputRef.current.contains(event.target)) {
      setOpenInput(false);
    }
  };
  const history = useHistory();
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  const handleSubmitInput = (ev: any) => {
    ev.preventDefault();
    // eslint-disable-next-line no-useless-concat
    history.push("/pesquisar" + `?profileSearch=${inputValue}`);
  };
  return (
    <header>
      <div className="container" id="top">
        <img
          src={Logo}
          width="103"
          height="29"
          style={{ cursor: "pointer" }}
          onClick={() => history.push("/")}
        />
        <div className="input" ref={boxInputRef}>
          {openInput ? (
            <>
              <input
                ref={inputRef}
                placeholder="Pesquisar"
                id="search"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(ev) => {
                  if (ev.key === "Enter") {
                    handleSubmitInput(ev);
                  }
                }}
              />

              <AiFillCloseCircle
                onClick={() => {
                  console.log("bah");

                  setInputValue("");
                  setOpenInput(false);
                }}
                size={20}
                style={{
                  margin: "0 5px",
                  color: "rgb(169, 167, 167)",
                  cursor: "pointer",
                }}
              />
            </>
          ) : (
            <button
              onClick={() => {
                setOpenInput(true);
                setTimeout(() => inputRef.current?.focus(), 0);
                clearTimeout();
              }}
            >
              <BiSearch size={18} />
              Pesquisar
            </button>
          )}
        </div>
        <div id="options">
          <HiHome size={30} />
          <RiMessengerLine size={30} />
          <ImCompass2 size={30} />
          <AiOutlineHeart size={30} />
          <img
            src={Profile}
            className="profilePictures"
            width="30"
            height="30"
          />
        </div>
      </div>
    </header>
  );
};
