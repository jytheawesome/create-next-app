import React from "react";

interface Props {
  params: { id: number };
}

const page = (params: Props) => {
  return <div>This is pet number {params.params.id}</div>;
};

export default page;
