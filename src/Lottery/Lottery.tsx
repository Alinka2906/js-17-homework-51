import React from "react";

interface LotteryProps extends React.PropsWithChildren {
  number: number;
}

const Lottery: React.FC<LotteryProps> = props => {
  return (
    <div className="lottery">
      <h1>{props.number}</h1>
    </div>
  );
};

export default Lottery;