interface SearchProps extends React.ComponentPropsWithoutRef<"input"> {}

export const Search = (props: SearchProps) => {
  return <input {...props} type="text" placeholder="Search" />;
};
