const MyFooter = () => {
  return (
    <footer className="container-fluid bg-dark text-white text-center position-fixed bottom-0 py-4">
      <p className="m-0">&copy; {new Date().getFullYear()} CiccioPasticcio. Tutti i diritti riservati.</p>
    </footer>
  );
};

export default MyFooter;
