export const CTAbtn = ({ title }: { title: string }) => {
  return (
    <div>
      <button
        type="button"
        className="text-white bg-red font-medium rounded-lg text-sm px-14 py-2.5 me-2 mb-2"
      >
        {title}
      </button>
    </div>
  );
};
