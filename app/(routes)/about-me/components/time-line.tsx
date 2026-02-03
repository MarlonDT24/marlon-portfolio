import { dataAboutPage } from "@/data";

export default function TimeLine() {
  return (
    <div className="flex flex-col justify-center divide-y divide-slate-200">
      <div className="w-full max-w-3xl mx-auto md:pb-35">
        <div className="-my-6">
          {dataAboutPage.map((data) => (
            <div key={data.id} className="relative py-6 pl-8 sm:pl-32 group">
              {/* Título: Empresa - Cargo */}
              <h3 className="mb-1 text-2xl font-bold sm:mb-0">
                {data.subtitle} <span className="text-green-500 font-bold text-2xl"> - {data.title}</span>
              </h3>

              <div className="flex flex-col sm:flex-row items-start mb-1 
                                        group-last:before:hidden before:absolute 
                                        before:left-2 sm:before:left-0 before:h-full
                                        before:px-px before:bg-slate-300 sm:before:ml-26 
                                        before:self-start before:-translate-x-1/2 
                                        before:translate-y-3 after:absolute after:left-2 
                                        sm:after:left-0 after:w-2 after:h-2 after:bg-emerald-500 
                                        after:border-4 after:box-content after:border-slate-50 
                                        after:rounded-full sm:after:ml-26 after:-translate-x-1/2 
                                        after:translate-y-1.5"
              >
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  {data.date}
                </time>
              </div>

              {/* Descripción de la empresa */}
              {"companyDescription" in data && (
                <p className="text-sm italic text-gray-200/80 mb-4">
                  {data.companyDescription}
                </p>
              )}

              {/* Logros y Tareas (Lista de puntos) */}
              <div className="text-white max-w-xl">
                {Array.isArray(data.description) ? (
                  <ul className="list-disc list-outside ml-4 space-y-3">
                    {data.description.map((item, index) => (
                      <li key={index} className="text-md leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{data.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};