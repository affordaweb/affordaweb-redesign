import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[600px] h-[400px] bg-primary-500/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="container-tight relative z-10 text-center py-20">
        <p className="text-primary-500 text-8xl font-bold mb-4 gradient-text">404</p>
        <h1 className="section-title-white mb-4">Page Not Found</h1>
        <p className="section-subtitle-white mx-auto text-center mb-10">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/contact" className="btn-outline-white">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}
