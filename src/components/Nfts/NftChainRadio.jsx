import React from "react";

export const NftChainRadio = ({ handleSelectedChain }) => {
  const chains = ["eth", "matic", "bsc", "fantom"];
  return (
    <React.Fragment>
      <div className="flex justify-center mt-7">
        <h3 className="text-gray-700 dark:text-white">Chain (optional):</h3>

        {chains.map((chainNickname) => {
          return (
            <div
              className="form-check form-check-inline px-3"
              key={chainNickname}
            >
              <input
                className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="chain"
                value={chainNickname}
                id={chainNickname}
                onChange={handleSelectedChain}
              />
              <label
                className="form-check-label inline-block text-gray-800 dark:text-white capitalize"
                htmlFor={chainNickname}
              >
                {chainNickname}
              </label>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
