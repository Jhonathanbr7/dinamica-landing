"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Send, Loader2, CheckCircle2, MessageSquareText, MapPin, Phone } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";

// Initialize Supabase Client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Keep only numbers
    if (value.length > 11) value = value.slice(0, 11); // Max 11 digits

    // Format: (16) 99168-3261
    if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length > 10) {
      value = `${value.slice(0, 10)}-${value.slice(10)}`;
    }
    
    setTelefone(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const nome = formData.get("nome") as string;
    const email = formData.get("email") as string;
    const telefoneRaw = formData.get("telefone") as string;
    const mensagem = formData.get("mensagem") as string;

    // Remove any non-digit character before sending if necessary
    // But sending formatted is fine since Edge function cleans it too.

    try {
      const { error: fnError } = await supabase.functions.invoke('notify-lead', {
        body: {
          nome,
          email,
          telefone: telefoneRaw,
          mensagem,
          destination_email: "dinamicasjb@gmail.com" 
        }
      });

      if (fnError) throw fnError;
      
      setIsSuccess(true);
      setTelefone(""); // Clear phone state
      (e.target as HTMLFormElement).reset();
      
      setTimeout(() => setIsSuccess(false), 8000);
    } catch (err: any) {
      console.error("Erro ao enviar contato:", err);
      setError("Ocorreu um erro ao enviar sua mensagem. Por favor, tente via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-slate-50/50"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">
              Pronto para facilitar sua rotina com a <span className="text-[var(--color-dinamica-blue)]">Dinâmica Informática</span>?
            </h2>
            <p className="text-lg leading-8 text-slate-600 mb-8">
              Não perca tempo com burocracias ou computadores lentos. Deixe nossos especialistas cuidarem disso para você com rapidez e segurança.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[var(--color-dinamica-blue)]">
                  <MessageSquareText className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Atendimento Humanizado</h4>
                  <p className="text-sm text-slate-500">Explicamos tudo sem termos técnicos difíceis.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-[var(--color-dinamica-green)]">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Orçamento Transparente</h4>
                  <p className="text-sm text-slate-500">Sem surpresas na hora de pagar pelo serviço.</p>
                </div>
              </div>
              <a 
                href="https://wa.me/5516999894161"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm animate-fade-in-up hover:border-blue-200 transition-colors" 
                style={{ animationDelay: "300ms" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-[var(--color-dinamica-blue)] group-hover:bg-blue-50 transition-colors shrink-0">
                  <WhatsAppIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-[var(--color-dinamica-blue)] transition-colors">WhatsApp</h4>
                  <p className="text-sm text-slate-500">(16) 99989-4161</p>
                </div>
              </a>

              <a 
                href="tel:+551637284115"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm animate-fade-in-up hover:border-blue-200 transition-colors" 
                style={{ animationDelay: "400ms" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-[var(--color-dinamica-blue)] group-hover:bg-blue-50 transition-colors shrink-0">
                  <Phone className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-[var(--color-dinamica-blue)] transition-colors">Telefone Fixo</h4>
                  <p className="text-sm text-slate-500">(16) 3728-4115</p>
                </div>
              </a>

              <a 
                href="https://www.google.com/maps/search/?api=1&query=Rua+Marechal+Deodoro%2C+575%2C+Centro+Sao+Joaquim+da+Barra+-+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm animate-fade-in-up hover:border-blue-200 transition-colors" 
                style={{ animationDelay: "500ms" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-[var(--color-dinamica-blue)] group-hover:bg-blue-50 transition-colors shrink-0">
                  <MapPin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-[var(--color-dinamica-blue)] transition-colors">Nossa Localização</h4>
                  <p className="text-sm text-slate-500">Rua Marechal Deodoro, 575, Centro<br/>São Joaquim da Barra - SP</p>
                </div>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[var(--color-dinamica-blue)] to-[var(--color-dinamica-green)] opacity-20 blur-lg"></div>
            <form onSubmit={handleSubmit} className="relative bg-white p-8 sm:p-10 shadow-2xl ring-1 ring-slate-100 rounded-3xl">
              
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Envie uma mensagem</h3>

              {isSuccess && (
                <div className="mb-8 flex items-center gap-3 rounded-xl bg-emerald-50 p-5 text-emerald-800 ring-1 ring-emerald-500/30 animate-fade-in-up">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  <p className="font-medium text-sm">Mensagem enviada com sucesso! Nossa equipe retornará em breve.</p>
                </div>
              )}
              
              {error && (
                <div className="mb-8 rounded-xl bg-rose-50 p-5 text-sm text-rose-800 ring-1 ring-rose-500/30">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-slate-900 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    required
                    className="block w-full rounded-xl border-0 px-4 py-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-dinamica-blue)] sm:text-sm bg-slate-50 focus:bg-white transition-colors"
                    placeholder="João da Silva"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="block w-full rounded-xl border-0 px-4 py-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-dinamica-blue)] sm:text-sm bg-slate-50 focus:bg-white transition-colors"
                      placeholder="joao@exemplo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-semibold text-slate-900 mb-2">WhatsApp</label>
                    <input
                      type="tel"
                      name="telefone"
                      id="telefone"
                      required
                      value={telefone}
                      onChange={handleTelefoneChange}
                      className="block w-full rounded-xl border-0 px-4 py-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-dinamica-blue)] sm:text-sm bg-slate-50 focus:bg-white transition-colors"
                      placeholder="(16) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-semibold text-slate-900 mb-2">Como podemos ajudar?</label>
                  <textarea
                    name="mensagem"
                    id="mensagem"
                    rows={4}
                    required
                    className="block w-full rounded-xl border-0 px-4 py-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-dinamica-blue)] sm:text-sm bg-slate-50 focus:bg-white transition-colors resize-none"
                    placeholder="Conte-nos o que você precisa..."
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-dinamica-blue)] to-blue-700 px-4 py-4 text-sm font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-[var(--color-dinamica-blue)] focus:ring-offset-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Enviando sua solicitação...
                    </>
                  ) : (
                    <>
                      Enviar Solicitação de Atendimento
                      <Send className="h-4 w-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
