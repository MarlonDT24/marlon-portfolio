"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Send, User, Mail, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cal, { getCalApi } from "@calcom/embed-react";

const formSchema = z.object({
  username: z.string().min(2, "El nombre es muy corto"),
  email: z.email("Email inválido"),
  message: z.string().min(10, "El mensaje es muy corto (min 10 caracteres)"),
});

export default function ContactManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "calendar">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Inicializa Cal.com (Calendario)
  useEffect(() => {
    setMounted(true);
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#22c55e" } },
      });
    })();
  }, []);

  // Hook del formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowSuccess(true);
        reset();
        setTimeout(() => {
          setShowSuccess(false);
          setIsOpen(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error enviando:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-2.5 text-md font-medium bg-green-800 text-white transition-all border-2 border-green-600 rounded-full hover:bg-green-500/70 hover:text-white shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]"
      >
        Contacta Conmigo
      </button>

      {/* MODAL OVERLAY */}
      {mounted && isOpen && createPortal (
        <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          {/* CAJA DEL MODAL */}
          <div className="relative w-full max-w-3xl bg-gray-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-auto max-h-[85vh]">
            {/* HEADER (Pestañas y Cerrar) */}
            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-gray-900/90">
              <div className="flex gap-6">
                <button
                  onClick={() => setActiveTab("form")}
                  className={`text-sm font-bold pb-1 border-b-2 transition-all ${activeTab === "form" ? "text-green-500 border-green-500" : "text-white/60 border-transparent hover:text-white"}`}
                >
                  Enviar Mensaje
                </button>
                <button
                  onClick={() => setActiveTab("calendar")}
                  className={`text-sm font-bold pb-1 border-b-2 transition-all ${activeTab === "calendar" ? "text-green-500 border-green-500" : "text-white/60 border-transparent hover:text-white"}`}
                >
                  Agendar Reunión
                </button>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* CONTENIDO (Scrollable) */}
            <div className="p-6 overflow-y-auto custom-scrollbar bg-[#0a0a0a]">
              {/* --- PESTAÑA 1: FORMULARIO --- */}
              {activeTab === "form" &&
                (!showSuccess ? (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        Hablemos de tu proyecto
                      </h3>
                      <p className="text-white/50 text-sm mt-1">
                        Rellena el formulario y te responderé lo antes posible.
                      </p>
                    </div>

                    {/* Input Nombre */}
                    <div className="group">
                      <div className="relative">
                        <User
                          className="absolute top-3.5 left-4 text-green-500 group-focus-within:text-white transition-colors"
                          size={20}
                        />
                        <input
                          {...register("username")}
                          placeholder="Tu Nombre"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-green-500 focus:bg-white/10 transition-all placeholder:text-white/30"
                        />
                      </div>
                      {errors.username && (
                        <span className="text-red-400 text-xs ml-1">
                          {errors.username.message}
                        </span>
                      )}
                    </div>

                    {/* Input Email */}
                    <div className="group">
                      <div className="relative">
                        <Mail
                          className="absolute top-3.5 left-4 text-green-500 group-focus-within:text-white transition-colors"
                          size={20}
                        />
                        <input
                          {...register("email")}
                          placeholder="tu@email.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-green-500 focus:bg-white/10 transition-all placeholder:text-white/30"
                        />
                      </div>
                      {errors.email && (
                        <span className="text-red-400 text-xs ml-1">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    {/* Input Mensaje */}
                    <div className="group">
                      <div className="relative">
                        <MessageSquare
                          className="absolute top-3.5 left-4 text-green-500 group-focus-within:text-white transition-colors"
                          size={20}
                        />
                        <textarea
                          {...register("message")}
                          placeholder="Cuéntame sobre tu idea..."
                          rows={4}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-green-500 focus:bg-white/10 transition-all placeholder:text-white/30 resize-none"
                        />
                      </div>
                      {errors.message && (
                        <span className="text-red-400 text-xs ml-1">
                          {errors.message.message}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-900/20"
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar Mensaje <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center h-60 text-center animate-in fade-in zoom-in duration-300">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/50">
                      <Send size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      ¡Mensaje Enviado!
                    </h3>
                    <p className="text-white/60 mt-2 max-w-xs mx-auto">
                      Gracias por contactar, Marlon. Te responderé en breve.
                    </p>
                  </div>
                ))}

              {/* --- PESTAÑA 2: CALENDARIO --- */}
              {activeTab === "calendar" && (
                <div className="h-full min-h-112.5 w-full bg-white/5 rounded-xl overflow-hidden border border-white/5">
                  <Cal
                    namespace="15min"
                    calLink="marlon-ts-zmwb5d/15min"
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "scroll",
                    }}
                    config={{ layout: "month_view", theme: "dark" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
