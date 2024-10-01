import React from "react";

type ITableRowSelectable = {
  isSelected?: boolean;
} & React.ComponentProps<"tr">;

export const TableRowSelectable: React.FC<ITableRowSelectable> = (props) => {
  const { isSelected, className, children, ...cleanProps } = props;

  return (
    <tr
      className={`cursor-pointer hover:bg-primary-100 ${
        isSelected ? "border-4 bg-primary-100" : "border-0"
      } border-primary-300/50 rounded-lg  ${className || ""}`}
      data-testid="table-tr-selectable"
      {...cleanProps}
    >
      {children}
    </tr>
  );
};

export default TableRowSelectable;
