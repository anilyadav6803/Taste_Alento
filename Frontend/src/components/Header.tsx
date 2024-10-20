import { Link } from 'react-router-dom'; // Corrected import

function Header() {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-tight text-orange-500">
          <h1 className="text-3xl font-bold tracking-tight ml-10 lg:ml-20 text-orange-500"> Frontend </h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;
