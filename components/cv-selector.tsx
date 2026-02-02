"use client";
import { useState } from "react";
import { Download, Eye, X, FileText, ChevronLeft } from "lucide-react";

interface CvSelectorProps {
    isMobile?: boolean;
}

export default function CvSelector({ isMobile = false }: CvSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  const cvUrl = "/CV_Marlon_2026.pdf"; 

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV_Marlon_Torres.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowPdf(false);
  }

  const renderTrigger = () => {
    if (isMobile) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="transition-all duration-300 hover:text-green-500 text-white"
                aria-label="Ver Currículum"
            >
                <FileText size={30} strokeWidth={1} />
            </button>
        );
    }

    return (
        <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-4 py-2 text-white transition-all duration-300 border border-white/50 rounded-full hover:bg-green-500/20 hover:border-green-500 group"
        >
            <span className="text-xl font-medium">Currículum</span>
            <FileText size={18} className="group-hover:text-green-500 transition-colors" />
        </button>
    );
  };

  return (
    <>
      {renderTrigger()}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          
          <div className={`relative bg-gray-900 shadow-2xl transition-all duration-300 flex flex-col
            ${showPdf 
                ? "fixed inset-0 w-full h-full md:relative md:w-full md:max-w-5xl md:h-[90vh] md:rounded-2xl md:border md:border-white/10" 
                : "w-full max-w-lg p-6 rounded-2xl border border-white/10 mx-4" 
            }
          `}>
            
            {/* Header del Modal */}
            <div className={`flex justify-between items-center ${showPdf ? "p-4 border-b border-white/10 bg-gray-900" : "absolute top-4 right-4 z-10"}`}>
                {showPdf ? (
                    <button 
                        onClick={() => setShowPdf(false)}
                        className="flex items-center gap-2 text-white/70 hover:text-white transition-colors px-3 py-1 rounded-md hover:bg-white/10"
                    >
                        <ChevronLeft size={20} />
                        <span className="font-medium">Volver</span>
                    </button>
                ) : <div />}
                <button 
                    onClick={handleClose}
                    className="text-white/50 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                >
                    <X size={24} />
                </button>
            </div>

            <div className="flex-1 overflow-hidden relative">
                {!showPdf ? (
                <div className="text-center space-y-6 mt-4">
                    <h3 className="text-2xl font-bold text-white">Elige una opción</h3>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                        onClick={() => setShowPdf(true)}
                        className="flex flex-col items-center justify-center p-6 gap-3 rounded-xl bg-white/5 hover:bg-green-500/20 border border-white/10 hover:border-green-500 transition-all group w-full"
                    >
                        <Eye size={40} className="text-white group-hover:text-green-500" />
                        <span className="text-white font-medium">Previsualizar</span>
                    </button>
                    <button 
                        onClick={handleDownload}
                        className="flex flex-col items-center justify-center p-6 gap-3 rounded-xl bg-white/5 hover:bg-green-500/20 border border-white/10 hover:border-green-500 transition-all group w-full"
                    >
                        <Download size={40} className="text-white group-hover:text-green-500" />
                        <span className="text-white font-medium">Descargar PDF</span>
                    </button>
                    </div>
                </div>
                ) : (
                <div className="w-full h-full bg-gray-800">
                    <iframe 
                        src={`${cvUrl}#toolbar=0`} 
                        className="w-full h-full block"
                        title="CV Preview"
                    />
                </div>
                )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}