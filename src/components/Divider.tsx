export function Divider() {
  return (
    <div className="flex items-center justify-center my-16">
      <div className="flex items-center gap-3">
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#ff8c42]"></div>
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ff8c42]"></span>
          <span className="w-2 h-2 rounded-full bg-[#2d9cca]"></span>
          <span className="w-2 h-2 rounded-full bg-[#ff6b6b]"></span>
        </div>
        <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#ff8c42]"></div>
      </div>
    </div>
  );
}
