import React, { useState } from "react";
import DateFormater from "../../helper/dateFormater";
import NftDescriptionModal from "./NftDescriptionModal";

export const NftCard = ({ data }) => {
  const { metadata, token_address } = data;
  const {
    name,
    image_url_png,
    image,
    children,
    birthday,
    description,
    generation,
  } = metadata;

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <React.Fragment>
      <div
        className="max-w-sm bg-white m-2 rounded shadow-md dark:bg-gray-700 dark:border-gray-400"
        onClick={handleShowModal}
      >
        <img
          className="p-8 h-64 w-full"
          src={image_url_png || image}
          alt={name}
        />
        <div className="px-5 pb-5">
          <h5 className="text-xl capitalize h-16 font-semibold tracking-tight text-gray-900 dark:text-white">
            {name.slice(0, 50)}
          </h5>

          {generation ? (
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-gray-800">
              Generation {generation}
            </span>
          ) : null}

          <div className="flex flex-wrap justify-between items-center mt-5">
            {children && (
              <span className="text-md font-bold text-gray-900 dark:text-white">
                Children: {children?.length}
              </span>
            )}

            {birthday && (
              <div className="text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-blue-600 dark:focus:ring-blue-300">
                🎂
                <span className="ml-2">
                  {DateFormater.yearMonthDate(birthday)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Nft description modal */}
      {showModal && (
        <NftDescriptionModal
          token_address={token_address}
          nftName={name}
          nftDescription={description}
          handleShowModal={handleShowModal}
        />
      )}
    </React.Fragment>
  );
};
