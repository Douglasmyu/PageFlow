import React from "react";

export default function Stats({label, icon, value}) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-2">
    {/* top row: icon and value */}
      <div className="flex items-center justify-between">
        {icon && (<div className="text-blue-400 text-2xl">
          {icon}
        </div>
        )}
        <div className="text-3xl font-bold text-gray-500">
          {value}
        </div>
        
      </div>
      <div className="text-sm font-medium text-gray-600">
        {label}
      </div>
    </div>

  );
}
// StatsCard
// ├─ label: string
// ├─ value: number | string
// ├─ icon?: ReactNode
// └─ subtext?: string
