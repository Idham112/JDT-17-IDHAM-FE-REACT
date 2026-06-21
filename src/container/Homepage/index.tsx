import React, { useEffect, useState } from "react";
import Button from "../../components/button/Index";
import { useNavigate } from "react-router";
import Box from "../../components/box";

const Index = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Pertama kali di render");
    return () => {};
  }, []);

  useEffect(() => {
    console.log("ke trigger kalau count berubah");
  }, [count]);

  const Experience = [
    {
      title: "PT Indivara Group",
      desc: "Frontend Developer yang mengerjakan 3 aplikasi distribution management system",
    },
    {
      title: "PT Mantep",
      desc: "PT paling mantep sedunia banyak customer yang mau beli",
    },
  ];

  const movePage = () => {
    navigate("/cv-page");
  };
  const movePageToMovie = () => {
    navigate("/movie");
  };

  const movePageState = (url: string, state?: string) => {
    navigate(url, {
      state: state,
    })
  }

  return (
    <>
      <div className="flex flex-row gap-5 pb-5">
        {Experience.map((el, index) => {
          return (
            <Box key={index} title={el.title} desc={el.desc} index={index} />
          );
        })}
      </div>
      <div className="flex w-full justify-center items-center gap-5">
        <Button content="My CV" onClick={movePage} />
        <Button content="Movies" onClick={movePageToMovie} />
      </div>
    </>
  );
};
export default Index;
