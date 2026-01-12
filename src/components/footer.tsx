export const Footer = () => (
  <footer className="border-t bg-slate-50 dark:bg-slate-950 mt-20">
    <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-muted-foreground">© 2026 ModernUI. Todos los derechos reservados.</p>
      <div className="flex gap-4">
        <span className="text-sm hover:underline cursor-pointer">Privacidad</span>
        <span className="text-sm hover:underline cursor-pointer">Términos</span>
      </div>
    </div>
  </footer>
);