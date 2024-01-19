import clsx from "clsx";

export const ContainerPage = ({ Children, className }) => {
  return (
    <>
      <div className={clsx("container", className)}>{Children}</div>
    </>
  );
};
