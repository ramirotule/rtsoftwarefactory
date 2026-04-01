"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const plans = [
  "Sin especificar",
  "Landing Page",
  "Sistio Web",
  "E-Commerce",
  "Sistema de Gestión",
  "Automatizaciones con IA",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    plan: "Sin especificar",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
    if (!webhookUrl) {
      setState("error");
      setErrorMsg(
        "El formulario no está configurado aún. Escribinos directo por WhatsApp.",
      );
      return;
    }

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "rt-software-factory.com.ar/contacto",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error(`Error ${res.status}`);

      setState("success");
    } catch (err: unknown) {
      setState("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "No se pudo enviar. Intentá de nuevo.",
      );
    }
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-center text-center py-10 gap-4">
        <CheckCircle2 size={48} className="text-cyan-neon" />
        <h3 className="text-xl font-bold text-white">¡Mensaje recibido!</h3>
        <p className="text-white/50 text-sm max-w-xs">
          Te contactamos en menos de 24 horas para arrancar.
        </p>
        <button
          onClick={() => {
            setState("idle");
            setForm({
              name: "",
              email: "",
              phone: "",
              business: "",
              plan: "Sin especificar",
              message: "",
            });
          }}
          className="btn-outline text-sm px-6 py-2.5 rounded-lg mt-2"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-xs text-white/40 mb-1.5 font-medium">
            Nombre *
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Juan García"
            className="flux-input w-full rounded-lg px-4 py-3 text-sm"
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-xs text-white/40 mb-1.5 font-medium">
            Email *
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="juan@empresa.com"
            className="flux-input w-full rounded-lg px-4 py-3 text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-white/40 mb-1.5 font-medium">
            Teléfono / WhatsApp
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+54 9 ..."
            className="flux-input w-full rounded-lg px-4 py-3 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs text-white/40 mb-1.5 font-medium">
            Rubro / Empresa
          </label>
          <input
            name="business"
            value={form.business}
            onChange={handleChange}
            placeholder="Kiosco, Restaurante..."
            className="flux-input w-full rounded-lg px-4 py-3 text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs text-white/40 mb-1.5 font-medium">
          Servicio de interés
        </label>
        <select
          name="plan"
          value={form.plan}
          onChange={handleChange}
          className="flux-input w-full rounded-lg px-4 py-3 text-sm cursor-pointer"
        >
          {plans.map((p) => (
            <option key={p} value={p} className="bg-dark-900">
              {p}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs text-white/40 mb-1.5 font-medium">
          ¿Qué necesitás? *
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Contame tu situación actual y qué problema querés resolver..."
          className="flux-input w-full rounded-lg px-4 py-3 text-sm resize-none"
        />
      </div>

      {state === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
          <AlertCircle size={15} className="shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="btn-primary flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold disabled:opacity-60 disabled:cursor-not-allowed mt-1"
      >
        {state === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={16} />
            Quiero que me contacten
          </>
        )}
      </button>

      <p className="text-center text-xs text-white/20">
        Sin spam · Sin compromiso · Respondemos en menos de 24 hs
      </p>
    </form>
  );
}
