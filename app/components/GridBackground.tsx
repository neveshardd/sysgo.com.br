export default function GridBackground() {
  return (
    <>
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)`,
          backgroundSize: '4rem 3rem'
        }}
      ></div>

      {/* Radial Gradient to fade grid at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#fcfdfd_85%)] pointer-events-none"></div>
    </>
  );
}
