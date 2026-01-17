export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[#E50914] text-3xl font-black tracking-tighter">N</span>
            <span className="text-white/50 text-sm">© 2026 Netflix N1. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
