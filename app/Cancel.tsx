import React from "react";
import Link from "next/link";
import { ImCancelCircle } from "react-icons/im";

const Cancel = () => {
  return (
    <div>
      <Link href="/">
        <ImCancelCircle />
      </Link>
    </div>
  );
};

export default Cancel;
