export default function Footer() {
  return (
    <footer className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} GS Craft Spaces
          </p>
          <div>
            Built with ❤️ by{" "}
            <a
              href="https://akshaysaambram.github.io/"
              className="font-semibold text-purple-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Akshay Saambram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
