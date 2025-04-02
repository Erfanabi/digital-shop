"use client";

function HugeComponents() {
  const heavyData = Array(900000).fill(0).map((_, i) => i * 2);

  return (
    <div className="p-4 bg-gray-500">
      loaded Huge Components with {heavyData.length}
    </div>
  );
}

export default HugeComponents;