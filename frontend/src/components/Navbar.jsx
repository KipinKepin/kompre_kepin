const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-[auto_1fr] items-center h-16 gap-6">
          <button className="btn btn-ghost">← Back</button>

          <div className="flex justify-end gap-3">
            <button className="btn btn-outline">Refresh Insights</button>
            <button className="btn btn-primary">Export PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
