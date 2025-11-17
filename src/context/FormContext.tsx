import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Gender = "man" | "kvinna" | "annat" | "";

export interface FormData {
  // Steg 1 – Persondata
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: Gender;

  // Steg 2 – Kontaktdata
  email: string;
  phone: string;

  // Steg 3 – Adress
  street: string;
  postalCode: string;
  city: string;

  // Steg 4 – Besök
  visitPurpose: string;
  department: string;

  // Steg 5 – extra
  newsletter: boolean;
}

interface FormContextValue {
  data: FormData;
  updateField: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
  
}

const FormContext = createContext<FormContextValue | undefined>(undefined);

const initialData: FormData = {
  firstName: "",
  lastName: "",
  birthDate: "",
  gender: "",
  email: "",
  phone: "",
  street: "",
  postalCode: "",
  city: "",
  visitPurpose: "",
  department: "",
  newsletter: false,
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<FormData>(initialData);

  const updateField: FormContextValue["updateField"] = (field, value) => {
    console.log("Updated:", field, value);

    setData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <FormContext.Provider value={{ data, updateField }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) {
    throw new Error("useFormContext måste användas inuti FormProvider");
  }
  return ctx;
};
