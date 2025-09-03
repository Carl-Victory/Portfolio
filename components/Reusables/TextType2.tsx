import React from "react";

interface TextType2Props {
  pTag: string;
  h3Tag1: string;
  h3Tag2: string;
}

const TextType2: React.FC<TextType2Props> = ({ pTag, h3Tag1, h3Tag2 }) => {
  return (
    <div>
      <p className="font-normal text-[1rem]">{pTag}</p>
      <div className="font-semibold text-[2rem] leading-9">
        <h3>{h3Tag1}</h3>
        <h3>{h3Tag2}</h3>
      </div>
    </div>
  );
};

export default TextType2;
