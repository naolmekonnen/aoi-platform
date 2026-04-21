export function AOILogo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2 whitespace-nowrap flex-shrink-0">
      <span className={`text-xl font-black tracking-tight ${dark ? 'text-white' : 'text-[#0A2342]'}`}>
        AOI
      </span>
      <span className="text-[#C9A84C] font-light text-base">|</span>
      <span className="text-[9px] font-semibold tracking-[0.18em] text-[#C9A84C] uppercase leading-none">
        AI OPERATOR INSTITUTE
      </span>
    </div>
  )
}
