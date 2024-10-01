import { Fragment, ReactNode } from "react";

type IComponentList = {
  count: number;
  render: (t: number) => ReactNode;
};

const ComponentList: React.FC<IComponentList> = ({ count, render }) => {
  const array = Array.from({ length: count });

  return (
    <>
      {array.map((_, i) => (
        <Fragment key={i}>{render(i)}</Fragment>
      ))}
    </>
  );
};

export default ComponentList;
