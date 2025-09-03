import React from "react";

interface TextType1Props {
  pTag: string;
  h3Tag: string;
}

const TextType1: React.FC<TextType1Props> = ({ pTag, h3Tag }) => {
  return (
    <div>
      <p className="font-normal text-[1rem]">{pTag}</p>
      <h3 className="font-semibold text-[2rem] leading-9">{h3Tag}</h3>
    </div>
  );
};

export default TextType1;
