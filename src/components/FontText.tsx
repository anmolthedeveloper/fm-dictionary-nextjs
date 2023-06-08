interface Prop {
  index: number;
  fontName: string;
  active: boolean;
  onClick: Function;
  className: string;
}
export default function FontText({
  index,
  fontName,
  active,
  onClick,
  className,
}: Prop) {
  const onClickHandler = (e: any) => {
    e.stopPropagation();
    onClick(index);
  };

  return (
    <p
      className={`${className}
        ${active ? "text-purpleCustom font-bold dark:text-purpleCustom" : ""}`}
      onClick={onClickHandler}
    >
      {fontName}
    </p>
  );
}
