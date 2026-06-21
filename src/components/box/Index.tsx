const Box = ({
  title,
  desc,
  index,
}: {
  title: string;
  desc: string;
  index: number;
}) => {
  return (
    <div className="w-full max-w-xs p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col gap-3 text-left border border-gray-100">
      <span className="text-xs font-medium text-gray-400">
        #{index + 1}
      </span>

      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <div className="w-8 h-0.5 bg-gray-300 rounded" />

      <p className="text-sm text-gray-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

export default Box;
