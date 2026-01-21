"use client";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-600"></div>
    </div>
  );
}
