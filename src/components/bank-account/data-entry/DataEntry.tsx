import React from "react";
import Button from "@mui/material/Button";

type DataEntryProps = {
  onBack: () => void;
  onSuccess: () => void;
  sortCode?: string;
  accountNumber?: string;
};

export const DataEntry: React.FC<DataEntryProps> = ({
  onBack,
  onSuccess,
  sortCode,
  accountNumber,
}) => {
  return (
    <>
      <h4>DataEntry</h4>
      <div>
        <label>SortCode: </label>
        <input
          type="text"
          id="sortCode"
          name="sortCode"
          value={sortCode}
        ></input>
      </div>
      <div>
        <label>AccountNumber: </label>
        <input
          type="text"
          id="accountNumber"
          name="accountNumber"
          value={accountNumber}
        ></input>
      </div>
      <br />
      <div>
        <Button variant="contained" onClick={onBack}>
          Back
        </Button>{" "}
        &nbsp;
        <Button variant="contained" onClick={onSuccess}>
          Update
        </Button>
      </div>
    </>
  );
};
