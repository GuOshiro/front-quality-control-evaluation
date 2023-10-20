export default function Loading() {
  return (
    <div role="status" className="absolute top-0 bottom-0 left-0 right-0">
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-32 w-32"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
