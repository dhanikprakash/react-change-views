import React from "react";
import { BankAccountSection } from "./BankAccountSection";
import {
  editableBankAccountSection,
  nonEditableBankAccountSection,
} from "./ExampleData";

export const BankAccount: React.FC = () => {
  //should use the selectorSlice to retrive the data
  return <BankAccountSection bankAccountSection={editableBankAccountSection} />;
};
