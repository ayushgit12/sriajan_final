export const Card = ({ value }) => {
  return (
    <div className="w-[350px] h-[300px] bg-white rounded-lg shadow-md flex items-center justify-center text-2xl font-bold">
      {value}
    </div>
  );
};