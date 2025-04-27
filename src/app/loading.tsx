import React from "react";
import { ShoppingCart } from "lucide-react";

function loading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <span className="text-xl font-bold">In Progress ...</span>
      <ShoppingCart size={20} className="relative" />
    </div>
  );
}

export default loading;
