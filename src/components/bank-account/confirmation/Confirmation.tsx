import React from "react";
import Button from "@mui/material/Button";

type ConfirmationProps = {
  onBack: () => void;
  accountNumber?: string;
};

export const Confirmation: React.FC<ConfirmationProps> = ({
  onBack,
  accountNumber,
}) => {
  return (
    <>
      <div>Details updated for the account: {accountNumber}</div>
      <br />
      <Button variant="contained" onClick={onBack}>
        Back
      </Button>
    </>
  );
};

export default Confirmation;
