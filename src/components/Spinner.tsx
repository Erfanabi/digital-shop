import { Loader2 } from "lucide-react";

const Spinner = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <span className="text-xl font-bold">Please Wait ...</span>
      <Loader2 size={48} className="animate-spin text-9xl" />
    </div>
  );
};

export default Spinner;
