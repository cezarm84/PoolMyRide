


interface HeaderProps {
  username?: string;
}

const Header = ({ username }: HeaderProps) => {
  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Smarta Samåkningshubbar</h1>
      {username ? (
        <span className="font-semibold">Welcome, {username}</span>
      ) : (
        <span>Not logged in</span>
      )}
    </header>
  );
};

export default Header;
