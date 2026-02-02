import { dataSkills } from "@/data";

export default function BentoSkills() {
  return (
    <div className="relative group px-5"> {/* Reducimos padding ya que el grid maneja el espacio */}
            
            {/* - Mobile/Tablet: Scroll horizontal con snap y scrollbar visible.
                - XL (2 columnas): Grid vertical de una sola columna para ocupar el lateral.
            */}
            <div className="
                flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory 
                xl:flex-col xl:overflow-visible xl:pb-0
                /* Estilos de scrollbar personalizada */
                [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:display-none
            "
            >
                {dataSkills.map((item) => (
                    <div
                        key={item.id}
                        className={`
                            /* Mobile/Tablet: Ancho fijo para el carrusel */
                            shrink-0 w-[85vw] sm:w-100 snap-center
                            /* XL: Ancho total de la columna lateral */
                            xl:w-full
                            
                            relative group overflow-hidden rounded-2xl border border-white/10 
                            bg-gray-900 p-5 transition-all duration-300 
                            hover:border-secondary/40 hover:bg-gray-900/70 shadow-xl
                        `}
                    >
                        <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-secondary/5 blur-xl transition-all group-hover:bg-secondary/10" />

                        <div className="flex items-center gap-3 mb-4 relative z-10">
                            <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2 relative z-10">
                            {item.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg bg-white/5 border border-white/10 text-slate-300 transition-colors group-hover:border-white/20 group-hover:bg-white/10"
                                >
                                    <span className="group-hover:text-secondary transition-colors">
                                        {skill.icon}
                                    </span>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Este texto solo aparece si no es pantalla grande (XL) */}
            <p className="text-center text-white/40 text-sm mt-3 xl:hidden">
                Desliza para ver más competencias →
            </p>
        </div>
  );
}
