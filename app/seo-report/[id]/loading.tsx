export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30 py-12 px-4">
      <div className="max-w-4xl mx-auto animate-pulse">
        <div className="h-4 bg-gray-200 rounded-full w-32 mb-8" />
        <div className="h-8 bg-gray-200 rounded-full w-2/3 mb-3" />
        <div className="h-4 bg-gray-100 rounded-full w-1/3 mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-28 bg-gray-100 rounded-3xl" />
          ))}
        </div>
        <div className="h-64 bg-gray-100 rounded-3xl mb-6" />
        <div className="h-48 bg-gray-100 rounded-3xl" />
      </div>
    </div>
  )
}
