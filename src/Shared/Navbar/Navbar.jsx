const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-1/4">
          <p>left</p>
        </div>
        <div className="w-9/12">
          <ul className="menu menu-horizontal space-x-2">
            <li>Home</li>
            <li>Service</li>
            <li>Booking</li>
            <li>Blog</li>
            <li>Shop</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
