const Ping = () => {
  return (
    <div className="relative">
      <div className="absoulte -left-4 top-1">
        <span className="flex size-[11px]">
          <span className="absoulte inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex size-[11px] rounded-full bg-primary"></span>
        </span>
      </div>
    </div>
  );
};

export default Ping;