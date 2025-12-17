"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<FormData>({
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        setShowSuccess(true);
      } else {
        alert("Erro ao enviar mensagem.");
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar mensagem.");
    }
  };

  useEffect(() => {
    if (!showSuccess) return;

    const timer = setTimeout(() => {
      setShowSuccess(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [showSuccess]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl flex flex-col gap-6"
    >

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider"
        >
          Nome
        </label>
        <input
          {...register("name", { required: "Nome é obrigatório" })}
          id="name"
          type="text"
          placeholder="Seu nome"
          className={`w-full bg-black/40 border rounded-lg p-4 text-white transition-all focus:outline-none focus:ring-1 focus:ring-accent-primary
            ${errors.name
              ? "border-red-500"
              : "border-white/10 focus:border-accent-primary"
            }`}
        />
        {errors.name && (
          <span className="text-red-400 text-sm mt-1 block">
            {errors.name.message}
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider"
        >
          Email
        </label>
        <input
          {...register("email", {
            required: "Email é obrigatório",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Email inválido",
            },
          })}
          id="email"
          type="email"
          placeholder="seu@email.com"
          className={`w-full bg-black/40 border rounded-lg p-4 text-white transition-all focus:outline-none focus:ring-1 focus:ring-accent-primary
            ${errors.email
              ? "border-red-500"
              : "border-white/10 focus:border-accent-primary"
            }`}
        />
        {errors.email && (
          <span className="text-red-400 text-sm mt-1 block">
            {errors.email.message}
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider"
        >
          Mensagem
        </label>
        <textarea
          {...register("message", { required: "Mensagem é obrigatória" })}
          id="message"
          placeholder="Conte sobre seu projeto..."
          className={`w-full bg-black/40 border rounded-lg p-4 text-white transition-all resize-none h-32 focus:outline-none focus:ring-1 focus:ring-accent-primary
            ${errors.message
              ? "border-red-500"
              : "border-white/10 focus:border-accent-primary"
            }`}
        />
        {errors.message && (
          <span className="text-red-400 text-sm mt-1 block">
            {errors.message.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className={`w-full py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center
          ${!isValid || isSubmitting
            ? "bg-white/10 text-white/40 cursor-not-allowed"
            : "bg-linear-to-r from-accent-primary to-accent-secondary text-white hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:scale-[1.02]"
          }`}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-3">
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Enviando...
          </span>
        ) : (
          "Enviar mensagem"
        )}
      </button>

      {showSuccess && (
        <p className="text-green-400 font-bold text-center animate-fade-in">
          Mensagem enviada com sucesso! ✨
        </p>
      )}
    </form>
  );
}
