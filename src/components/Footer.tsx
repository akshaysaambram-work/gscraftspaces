export function Footer() {
  return (
    <div className="mt-8 border-t pt-8">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} GS Craft Spaces
        </p>
        <div>
          Built with ❤️ by{" "}
          <a
            href="https://akshaysaambram.github.io/"
            className="font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Akshay Saambram
          </a>
        </div>
      </div>
    </div>
  );
}
