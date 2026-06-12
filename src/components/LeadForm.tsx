"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

// Initialize Supabase Client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const nome = formData.get("nome") as string;
    const email = formData.get("email") as string;
    const telefone = formData.get("telefone") as string;
    const mensagem = formData.get("mensagem") as string;

    try {
      // Calls the Edge Function directly using supabase.functions.invoke
      const { error: fnError } = await supabase.functions.invoke('notify-lead', {
        body: {
          nome,
          email,
          telefone,
          mensagem,
          destination_email: "jhonathanbr6@gmail.com" // Dinâmica's target email
        }
      });

      if (fnError) throw fnError;
      
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      console.error("Erro ao enviar contato:", err);
      setError("Ocorreu um erro ao enviar sua mensagem. Por favor, tente via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Fale com um Especialista
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Preencha o formulário abaixo e entraremos em contato o mais rápido possível.
          </p>
        </div>

        <div className="mx-auto max-w-xl">
          <form onSubmit={handleSubmit} className="bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 rounded-2xl">
            {isSuccess && (
              <div className="mb-6 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-800 ring-1 ring-green-500/20">
                <CheckCircle2 className="h-6 w-6 text-[var(--color-dinamica-green)]" />
                <p className="font-medium">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
              </div>
            )}
            
            {error && (
              <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-800 ring-1 ring-red-500/20">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold leading-6 text-slate-900">
                  Nome Completo
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-dinamica-blue)] sm:text-sm sm:leading-6"
                    placeholder="João da Silva"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900">
                  E-mail
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-dinamica-blue)] sm:text-sm sm:leading-6"
                    placeholder="joao@exemplo.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-semibold leading-6 text-slate-900">
                  Telefone / WhatsApp
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="telefone"
                    id="telefone"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-dinamica-blue)] sm:text-sm sm:leading-6"
                    placeholder="(16) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold leading-6 text-slate-900">
                  Como podemos ajudar?
                </label>
                <div className="mt-2">
                  <textarea
                    name="mensagem"
                    id="mensagem"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-dinamica-blue)] sm:text-sm sm:leading-6"
                    placeholder="Descreva brevemente o serviço que precisa..."
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[var(--color-dinamica-blue)] px-3.5 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-dinamica-blue)] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
