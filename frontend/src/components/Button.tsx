export const Button = ({ title }: { title: string }) => {
  return (
    <div>
      <button
        type="button"
        className="text-red border border-red focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-14 py-2.5 text-center me-2 mb-2"
      >
        {title}
      </button>
    </div>
  );
};
