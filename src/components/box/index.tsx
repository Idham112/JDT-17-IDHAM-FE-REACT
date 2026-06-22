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
    <div className="w-full max-w-xs p-6 bg-surface rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col gap-3 text-left border border-border">
      <span className="text-xs font-medium text-text-muted">
        #{index + 1}
      </span>

      <h3 className="text-lg font-semibold text-text">
        {title}
      </h3>

      <div className="w-8 h-0.5 bg-border rounded" />

      <p className="text-sm text-text-muted leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

export default Box;
