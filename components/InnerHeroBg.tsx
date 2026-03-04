export default function InnerHeroBg() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Animated gradient */}
      <div className="hero-gradient-shift absolute inset-0" />
      {/* Floating blobs */}
      <div className="hblob hblob-1" />
      <div className="hblob hblob-2" />
      {/* Drifting dot grid */}
      <div className="hero-dots-move absolute inset-0" />
    </div>
  )
}
