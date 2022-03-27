import React from "react";

function SuccessOrder() {
  return (
    <div className="m-10 flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <img
          src="/assets/ESPORTS-TEAM-01.png"
          alt="game"
          width={170}
          className="m-10"
        />
      </div>
      <h1 className="mt-10 text-center text-5xl">
        Thank You! Boosing Confirmed
      </h1>

      <p className="mt-10 text-center text-5xl">
        You can view the details of your reservation on your profile.
      </p>
    </div>
  );
}

export default SuccessOrder;
