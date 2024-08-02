import React, { useState } from "react";
import Container from "./Container";

export default function Navbars({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav>
        <Container className="flex flex-col">
          <div className="bg-default p-4 text-lg uppercase font-bold text-white sm:rounded-xl">
            Infus Calculator
          </div>
          {children}
        </Container>
      </nav>
    </>
  );
}
