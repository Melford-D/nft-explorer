import Moralis from "moralis";
import React, { useEffect, useState } from "react";
import DateFormater from "../../helper/dateFormater";

export const NftHistoryTable = ({ nftAddress }) => {
  // history state
  const [history, setHistory] = useState(null);

  const fetchNftHistory = async () => {
    try {
      const options = {
        address: nftAddress,
        limit: "10",
      };
      const transfersNFT = await Moralis.Web3API.account.getNFTTransfers(
        options
      );
      setHistory(transfersNFT.result);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchNftHistory();
  }, [nftAddress]);

  return (
    <div className="relative overflow-y-scroll h-80 shadow-md sm:rounded-lg w-full">
      {history ? (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                From
              </th>
              <th scope="col" className="px-6 py-3">
                Value
              </th>
              <th scope="col" className="px-6 py-3">
                To
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {history.length > 0 ? (
              history.map(
                (
                  { from_address, value, to_address, block_timestamp },
                  index
                ) => {
                  return (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-600 hover:text-white dark:hover:bg-gray-600"
                      key={index}
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        {from_address.substring(0, 10)}...
                        {from_address.substring(12, 18)}
                      </td>
                      <td className="px-6 py-4">{value}</td>
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        {to_address.substring(0, 10)}...
                        {to_address.substring(12, 18)}
                      </td>
                      <td className="px-6 py-4">
                        {DateFormater.yearMonthDate(block_timestamp)}
                      </td>
                    </tr>
                  );
                }
              )
            ) : (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  colSpan={4}
                >
                  No History Found
                </th>
              </tr>
            )}
          </tbody>
        </table>
      ) : (
        <div className="text-center text-gray-500 p-5 dark:text-gray-400">
          Loading histories...
        </div>
      )}
    </div>
  );
};
