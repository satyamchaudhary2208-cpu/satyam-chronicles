export function SiteFooter() {
  return (
    <footer className="border-t bg-background px-5 py-14 md:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="display text-4xl md:text-5xl">Satyam Chaudhary</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Filmmaker · Photographer · Creative Director · Writer
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Ahmedabad, India</p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <div className="flex gap-6">
            <a
            href="https://www.instagram.com/satyamkasansaar?igsi=eHowdDgzZWc3OGRt&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="meta rule-link text-foreground"
            >
              Instagram
            </a>
            <a href="mailto:SortedSatyam@gmail.com" className="meta rule-link text-foreground">
              Email
            </a>
          </div>
          <p className="display text-xl text-olive">Still looking. Still making.</p>
          <p className="meta">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
