export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30 py-12 px-4">
      <div className="max-w-3xl mx-auto animate-pulse">
        <div className="h-4 bg-gray-200 rounded-full w-32 mb-8" />
        <div className="h-10 bg-gray-200 rounded-full w-3/4 mb-4" />
        <div className="h-4 bg-gray-100 rounded-full w-1/2 mb-10" />
        <div className="h-56 bg-gray-100 rounded-3xl mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-32 bg-gray-100 rounded-2xl" />
          ))}
        </div>
        <div className="h-40 bg-gray-100 rounded-3xl" />
      </div>
    </div>
  )
}
