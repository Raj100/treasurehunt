"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Voldemort from "../../assets/Voldemort.jpeg";
import Image from "next/image";
import { Howl } from "howler";
import { useEffect } from "react";
import Maths from "../../assets/Maths.png";
import owl from "../../assets/owl.jpeg";
import "./Gameoftiles.css";

const page = () => {
  const [card1, setCard1] = useState(0);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);
  const [card4, setCard4] = useState(false);
  const [card5, setCard5] = useState(false);
  const [card6, setCard6] = useState(false);
  const [card7, setCard7] = useState(false);
  const [card8, setCard8] = useState(false);
  const [card9, setCard9] = useState(false);
  const [card10, setCard10] = useState(false);
  const [card11, setCard11] = useState(false);
  const [card12, setCard12] = useState(false);
  const [whoIsWho, setWhoIsWho] = useState("");
  const [whoIsWhoans, setWhoIsWhoans] = useState(false);
  const [whoWho, setWhoWho] = useState("");
  const [whoWhoans, setWhoWhoans] = useState(false);

  const [card2more, setCard2more] = useState(0);
  const [card2color, setCard2Color] = useState("");
  const [card5more, setCard5more] = useState("");
  const [card12open, setCard12open] = useState(false);
  const [card6open, setCard6Open] = useState(false);
  let [sequence, setsequence] = useState("");
  const [semifinal, setsemifinal] = useState("");
  const [final, setfinal] = useState("");
  const [card11Open, setCard11Open] = useState(false);
  const [checkans, setcheckans] = useState(false);
  const [mytext, setmytext] = useState("");

  const [showElement, setShowElement] = useState(false);

  const handleWhoIsWho = () => {
    if (
      whoIsWho.toLowerCase() === "youknowwho" ||
      whoIsWho.toLowerCase() === "you know who"
    ) {
      setWhoIsWhoans(true);
    }
  };
  const handleWhoWho = () => {
    if (whoWho.toLowerCase() === "owl") {
      setWhoWhoans(true);
    }
  };

  const whoIsWhoanscontent = (
    <div href="thalaforareason">
      {/* <button className="bg-blue-500 text-white px-4 py-2">Next</button> */}
      Congratulations! Go to 7 its unlocked!
    </div>
  );

  const card1content = (
    <div className="bg-white rounded text-center justify-center flex flex-col h-full w-full p-2 gap-2">
      <p>Who's there?</p>
      <div className="flex flex-col gap-2">
        {/* <label for="html">who's here? :</label> */}
        <input
          onChange={(e) => {
            setWhoIsWho(e.target.value);
          }}
          className="border p-2 "
          type="text"
          placeholder="who's here?"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={handleWhoIsWho}
        >
          Enter
        </button>
      </div>

      {whoIsWhoans && (
        <div className="flex flex-col gap-1">
          {" "}
          <input
            onChange={(e) => {
              setWhoWho(e.target.value);
            }}
            className="border p-1 "
            type="text"
            placeholder="You know who who?"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2"
            onClick={handleWhoWho}
          >
            Enter
          </button>
        </div>
      )}

      {whoWhoans && whoIsWhoanscontent}
    </div>
  );
  const card2content = (
    <div className="bg-white  rounded p-2 flex flex-col">
      <p className="mb-12">Bhai Yeh kya hai?</p>
      <div className="flex gap-2 items-center justify-center">
        <div className="h-8 w-8 bg-[#ffcd00]"></div>
        <input
          onChange={(e) => {
            setCard2Color(e.target.value);
          }}
          className=" border p-1 grow-0"
          type="text"
          name=""
          id=""
        />
      </div>
      <button
        onClick={() => {
          if (
            card2color.toLowerCase() === "#ffcd00" ||
            card2color.toLowerCase() === "yellow" ||
            card2color.toLowerCase() === "gold" ||
            card2color.toLowerCase() === "ffcd00"
          ) {
            setCard2more(1);
            handlecard3();
          }
        }}
        className="py-2 px-8 bg-blue-500 text-white rounded-xl m-2"
      >
        Submit
      </button>

      <p>{card2more >= 1 && "Go to 3"}</p>
      <p>{card2more === 2 && "Go to 5"}</p>
    </div>
  );

  const playErrorSound = () => {
    const sound = new Howl({
      src: ["/error.mp3"],
    });
    sound.play();
  };

  const handlecard3 = () => {
    setTimeout(() => {
      setShowElement(true);
      setCard2more(2);
    }, 120000);
  };

  return (
    <div className="game-bg">
      <svg
        className="clipped"
        width="1"
        height="1"
        viewBox="0 0 1 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip-cards" clipPathUnits="objectBoundingBox">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.096 0H0.08V0.0260417H0.0400009V0.0520833V0.0651042H0.04V0.0520833H0V0.0651042V0.078125V0.921875V0.934896V0.947917H0.04V0.934896H0.0400009V0.947917V0.973958H0.0800009V0.947917V0.934896H0.0800018V0.947917V0.973958V1H0.096H0.120002H0.880001H0.9H0.920001V0.973958L0.959998 0.973958V0.947917V0.934896H0.959999V0.947917H0.999999V0.934896H1V0.0651042H0.999999V0.0520833H0.959999V0.0651042H0.959998V0.0520833V0.0260417H0.920001H0.92V0H0.9H0.88H0.12H0.096ZM0.0800018 0.0651042V0.0520833V0.0260417H0.0800009V0.0520833V0.0651042H0.0800018Z"
              fill="#D9D9D9"
            />
          </clipPath>
        </defs>
      </svg>
      <div className="bg-black grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10 text-black text-center game-bg">
        {/* 1 */}
        <div
          className="rounded flip-card h-96 "
          onMouseLeave={() => {
            setCard1(0);
          }}
        >
          <div
            className={`flip-card-inner ${card1 >= 2 ? "flip" : ""}`}
            onClick={() => setCard1(card1 + 1)}
          >
            <div className="flip-card-front bg-white flex-col justify-center h-full">
              <p className="text-2xl">1</p>
              {card1 === 1 && "knock!"}
              {card1 === 2 && "knock knock!"}
            </div>
            <div className="flip-card-back bg-white">
              {card1 >= 2 && card1content}
            </div>
          </div>
        </div>

        {/* //2 */}
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard2(false);
          }}
        >
          <div
            className={`flip-card-inner ${card2 ? "flip" : ""}`}
            onClick={() => setCard2(true)}
          >
            <div className="flip-card-front bg-white flex-col justify-center h-full">
              <p className="text-2xl">2</p>
            </div>
            <div className="flip-card-back bg-white">
              {card2 && card2content}
            </div>
          </div>
        </div>

        {/* 3 */}
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard3(false);
          }}
        >
          <div
            className={`flip-card-inner ${card3 ? "flip" : ""}`}
            onClick={() => {
              if (card2more >= 1) {
                setCard3(true);
              } else {
                playErrorSound();
              }
            }}
          >
            <div className="flip-card-front bg-white flex-col justify-center h-full">
              <h1 className="text-2xl">3</h1>
            </div>
            <div className="flip-card-back bg-white">
              {card3 && (
                <div className="p-2">
                  <p>Ruk ja Bhai 2 minute</p>
                </div>
              )}
              {showElement && <p>Wapas Jaa Bhai!</p>}
            </div>
          </div>
        </div>

        {/* 4 */}
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard4(false);
          }}
        >
          <div
            className={`flip-card-inner ${card4 ? "flip" : ""}`}
            onClick={() => setCard4(true)}
          >
            <div className="flip-card-front bg-white flex-col justify-center h-full">
              <p className="text-2xl">4</p>
            </div>
            <div className="flip-card-back bg-white p-2">
              <div>
                <Image src={Voldemort} alt=""></Image>
                <p>I am There</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard5(false);
          }}
        >
          <div
            className={`flip-card-inner ${card5 ? "flip" : ""}`}
            onClick={() => setCard5(true)}
          >
            <div className="flip-card-front bg-white flex-col justify-center h-full">
              <p className="text-2xl">5</p>
            </div>
            <div className="flip-card-back bg-white p-2">
              <div className="flex flex-col">
                <Image src={Maths} alt=""></Image>
                <input
                  type="text"
                  className="p-2 border"
                  onChange={(e) => {
                    setCard5more(e.target.value);
                  }}
                />
                <button
                  className="p-2 py-2 px-4 bg-blue-500 text-white my-2 rounded-2xl"
                  onClick={() => {
                    if (card5more === "12") {
                      setCard12open(true);
                    }
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 6 */}
        <div
          className="rounded flip-card h-96 card"
          onMouseLeave={() => {
            setCard6(false);
          }}
        >
          <div
            className={`flip-card-inner ${card6 ? "flip" : ""}`}
            onClick={() => {
              if (sequence === "9" || sequence === "9698") {
                setCard6(true);
                setsequence(sequence + "6");
              } else {
                playErrorSound();
                setsequence("");
              }
            }}
          >
            <div className="flip-card-front bg-white flex-col justify-center h-full">
              <p className="text-2xl">6</p>
            </div>
            <div className="flip-card-back bg-white p-2">
              {sequence === "96" && <p>Go to 9</p>}
              {sequence === "96986" && <p>Go to 9</p>}
            </div>
          </div>
        </div>

        {/* 7 */}
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard7(false);
          }}
        >
          <div
            className={`flip-card-inner ${card7 ? "flip" : ""}`}
            onClick={() => {
              if (whoWhoans) {
                setCard7(true);
              } else {
                playErrorSound();
              }
            }}
          >
            <div className="flip-card-front bg-white flex-col justify-center h-full">
              <p className="text-2xl">7</p>
            </div>
            <div className="flip-card-back bg-white p-2 bg-[#ffcd00]">
              <Link href="/thalaforareason">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-xl">
                  Go to heaven
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* 8 */}
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard8(false);
          }}
        >
          <div
            className={`flip-card-inner ${card8 ? "flip" : ""}`}
            onClick={() => {
              if (sequence === "969" ) {
                setCard8(true);
                setsequence(sequence + "8");
              } 
              else if (semifinal === "969869" || semifinal === "69869") {
                setCard8(true);
              }
              else {
                playErrorSound();
              }
            }}
          >
            <div className="flip-card-front bg-white flex-col justify-center h-full">
              <p className="text-2xl">8</p>
            </div>
            <div className="flip-card-back bg-white p-2">
              {sequence === "9698" && <p>Go to 6</p>}
              {(semifinal === "969869" || semifinal === "69869") && (
                <p>What is x=1;y=5 then? x-=y+1?</p>
              )}
              {(semifinal === "969869" || semifinal === "69869") && (
                <input
                  onChange={(e) => {
                    setfinal(e.target.value);
                  }}
                  className=" border p-2 m-2 shrink-0"
                  type="text"
                ></input>
              )}
              {(semifinal === "969869" || semifinal === "69869") && (
                <>
                  <button
                    onClick={() => {
                      if (final === "-5") {
                        final === setCard11Open(true);
                        setmytext("Go to 11");
                        sequence = "";
                      } else {
                      }
                    }}
                    className="px-2 py-4 bg-blue-500 text-white rounded-xl m-2"
                    type="submit"
                  >
                    Submit
                  </button>
                  <p>{mytext}</p>
                </>
              )}
              {/* {(semifinal==="969869"||semifinal==="69869") && final==="-5" && } */}
            </div>
          </div>
        </div>

        {/* 9 */}
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard9(false);
          }}
        >
          <div
            className={`flip-card-inner ${card9 ? "flip" : ""}`}
            onClick={() => {
              if (sequence !== "969869") {
                setCard9(true);
                setsequence(sequence + "9");
              }
              if (sequence === "969869") {
                setCard9(true);
              }
            }}
          >
            <div className="flip-card-front bg-white flex-col justify-center h-full">
              <p className="text-2xl">9</p>
            </div>
            <div className="flip-card-back bg-white p-2">
              {sequence === "969869" && (
                <div className="flex flex-col">
                  <p>Wapas aa gya yahan?</p>{" "}
                  <input
                    className="border p-2 m-2"
                    onChange={(e) => {
                      setsemifinal(e.target.value);
                    }}
                    type="text"
                    name=""
                    id=""
                  />
                  <button
                    onClick={() => {
                      setcheckans(true);
                    }}
                    className="px-4 py-2 text-white bg-blue-500"
                  >
                    Submit
                  </button>
                </div>
              )}
              {/* {checkans &&<p>Go to 8</p>} */}
              {sequence === "9" ? <p>Go to 6</p> : (sequence === "969"  || (checkans && (semifinal === "969869" || semifinal === "69869"))) ? <p>Go to 8</p> :""}

            </div>
          </div>
        </div>

        {/* 10 */}
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard10(false);
          }}
        >
          <div
            className={`flip-card-inner ${card10 ? "flip" : ""}`}
            onClick={() => setCard10(true)}
          >
            <div className="flip-card-front bg-white flex-col justify-center h-full">
              <p className="text-2xl">10</p>
            </div>
            <div className="flip-card-back bg-white p-2 realtive">
              <Image src={owl} alt="" className="h-full pb-10"></Image>
              <p className="absolute bottom-5 left-1/2 -translate-x-1/2">
                I am who who
              </p>
            </div>
          </div>
        </div>

        {/* 11 */}
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard11(false);
          }}
        >
          <div
            className={`flip-card-inner ${card11 ? "flip" : ""}`}
            onClick={() => {
              if (card11Open) {
                setCard11(true);
              } else {
                playErrorSound();
              }
            }}
          >
            <div className="flip-card-front bg-white flex-col justify-center h-full">
              <p className="text-2xl">11</p>
            </div>
            <div className="flip-card-back bg-white p-2">
              <p> Congratulations</p>
            </div>
          </div>
        </div>

        {/* 12 */}
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard12(false);
          }}
        >
          <div
            className={`flip-card-inner ${card12 ? "flip" : ""}`}
            onClick={() => {
              if (card12open) {
                setCard12(true);
              } else {
                playErrorSound();
              }
            }}
          >
            <div className="flip-card-front bg-white flex-col justify-center h-full">
              <p className="text-2xl">12</p>
            </div>
            <div className="flip-card-back p-2">
              <Link href="/guessinggame">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-xl">
                  Start Game
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* 
        <div className='bg-white rounded h-64'> 2</div>
        <div className='bg-white rounded h-64'> 3</div>
        <div className='bg-white rounded h-64'> 4</div>
        <div className='bg-white rounded h-64'> 5</div>
        <div className='bg-white rounded h-64'> 6</div>
        <div className='bg-white rounded h-64'> 7</div>
        <div className='bg-white rounded h-64'> 8</div>
        <div className='bg-white rounded h-64'> 9</div>
        <div className='bg-white rounded h-64'> 10</div>
        <div className='bg-white rounded h-64'> 11</div>
        <div className='bg-white rounded h-64'> 12</div> */}
      </div>
    </div>
  );
};

export default page;
