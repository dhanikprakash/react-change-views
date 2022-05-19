import React from "react";
import Button from "@mui/material/Button";

type DataViewProps = {
  onEdit: () => void;
  sortCode?: string;
  accountNumber?: string;
};

export const DataView: React.FC<DataViewProps> = ({
  onEdit,
  sortCode,
  accountNumber,
}) => {
  return (
    <>
      <h4>DataView</h4>
      <div>SortCode: {sortCode}</div>
      <div>AccountNumber: {accountNumber}</div>
      <br />
      <Button variant="contained" onClick={onEdit}>
        Edit details
      </Button>
    </>
  );
};
