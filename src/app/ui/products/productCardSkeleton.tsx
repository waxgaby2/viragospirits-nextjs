export function ProductCardSkeleton() {
  return (
    <div
      className="m-2 rounded-2xl 
      shadow-[0_0_8px_7px_rgba(0,0,0,0.1)]
      bg-gray-300 p-5 animate-pulse"
    >
      <div className="w-full h-50 bg-gray-400 rounded-lg" />

      <div className="p-4 space-y-3">
  
        <div className="h-5 bg-gray-400 rounded w-3/4" />

        <div className="h-4 bg-gray-400 rounded w-1/2" />

        <div className="flex items-center justify-between pt-2">
          <div className="h-5 bg-gray-400 rounded w-1/4" />

          <div className="h-9 bg-gray-400 rounded-lg w-24" />
        </div>
      </div>
    </div>
  );
}