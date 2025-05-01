export default function Loader() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary-800 border-t-transparent"></div>
        <p className="text-lg font-medium text-primary-800">Loading...</p>
      </div>
    </div>
  );
}
