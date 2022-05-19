import React, { Suspense, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BankAccountSectionBO } from "../../types/bank-account-section";
import { Confirmation } from "./confirmation/Confirmation";
import { DataEntry } from "./data-entry/DataEntry";
import { DataView } from "./data-view/DataView";

enum Views {
  DataView = "data-view",
  DataEntry = "data-entry",
  Confirmation = "confirmation",
}

export const BankAccountSection: React.FC<{
  bankAccountSection: BankAccountSectionBO;
}> = ({ bankAccountSection: propsBankAccountSection }) => {
  const { status, sortCode, accountNumber } = propsBankAccountSection;
  const [failureNotification, setFailureNotification] =
    useState<boolean>(false);
  const [currentView, setCurrentView] = useState<Views>(Views.DataView);

  if (status !== "ok") {
    setFailureNotification(true);
  }

  const onDataViewEdit = () => {
    setCurrentView(Views.DataEntry);
  };

  const onDataEntryBack = () => {
    setCurrentView(Views.DataView);
  };

  const onDataEntrySuccess = () => {
    setCurrentView(Views.Confirmation);
  };

  const onConfirmationBack = () => {
    setCurrentView(Views.DataView);
  };

  return (
    <Suspense fallback={<Spinner animation="border" />}>
      <h3>BankAccountSection</h3>
      {currentView === Views.DataView && (
        <DataView
          onEdit={onDataViewEdit}
          sortCode={sortCode}
          accountNumber={accountNumber}
        />
      )}
      {currentView === Views.DataEntry && (
        <DataEntry
          onBack={onDataEntryBack}
          onSuccess={onDataEntrySuccess}
          sortCode={sortCode}
          accountNumber={accountNumber}
        />
      )}
      {currentView === Views.Confirmation && (
        <Confirmation
          onBack={onConfirmationBack}
          accountNumber={accountNumber}
        />
      )}

      {failureNotification && (
        <div> Unable to retrive or update the data. Network error </div>
      )}
    </Suspense>
  );
};
