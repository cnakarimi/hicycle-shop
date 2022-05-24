import React from "react";

const MainButton = (props: { children: React.ReactNode | null }) => {
  return (
    <button className="bg-neutral-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full">
      {props.children}
    </button>
  );
};

export default MainButton;
