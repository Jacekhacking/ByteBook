// eslint-disable-next-line react/prop-types
export function Book({ title, src, changePage }) {
  return (
    <img
      title={title}
      className=" w-32 md:w-40 cursor-pointer hover:bg-slate-600"
      src={src}
      onClick={changePage}
    />
  );
}
