"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Send,
  Instagram,
  Youtube,
  X,
  Plus,
} from "lucide-react";

export type FloatingWidgetProps = {
  phone?: string; // e.g. +7 999 000-00-00
  whatsapp?: string; // e.g. 79990000000 (digits only for wa.me)
  telegram?: string; // e.g. aitishkino
  instagram?: string; // e.g. aitishkino
  youtube?: string; // channel or handle, e.g. @aitishkino
  vk?: string; // e.g. aitishkino (group/user handle)
};

function formatTelHref(phone?: string) {
  if (!phone) return undefined;
  // Keep digits and plus only
  const normalized = phone.replace(/[^+\d]/g, "");
  return `tel:${normalized}`;
}

function buildWhatsAppHref(whatsapp?: string) {
  if (!whatsapp) return undefined;
  const digits = whatsapp.replace(/\D/g, "");
  if (!digits) return undefined;
  return `https://wa.me/${digits}`;
}

function buildTelegramHref(telegram?: string) {
  if (!telegram) return undefined;
  const handle = telegram.replace(/^@/, "");
  return `https://t.me/${handle}`;
}

function buildInstagramHref(instagram?: string) {
  if (!instagram) return undefined;
  const handle = instagram.replace(/^@/, "");
  return `https://instagram.com/${handle}`;
}

function buildYoutubeHref(youtube?: string) {
  if (!youtube) return undefined;
  // Supports either handle (@name) or full ID; default to handle-style URL
  if (youtube.startsWith("@")) return `https://youtube.com/${youtube}`;
  return `https://youtube.com/${youtube.startsWith("channel/") ? youtube : `@${youtube}`}`;
}

function buildVkHref(vk?: string) {
  if (!vk) return undefined;
  const handle = vk.replace(/^@/, "");
  return `https://vk.com/${handle}`;
}

function VkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3.5 7.5c-.2-.6.2-1.2.9-1.2h2.6c.5 0 .9.3 1 .8.4 1.5 1.1 3 2.1 4.3.3.4.7.8 1.1 1 .2.1.5 0 .6-.2.1-.2.1-.5.1-.7V7.2c0-.6.4-1 .9-1h2.2c.5 0 .9.4.9 1v4.1c0 .3 0 .6.2.7.2.2.5.1.7 0 .8-.6 1.5-1.4 2.1-2.3.6-.9 1-1.9 1.3-3 .1-.4.5-.7.9-.7H21c.7 0 1.1.6.9 1.2-.5 1.7-1.3 3.3-2.4 4.7-1.1 1.4-2.4 2.6-4 3.6-.3.2-.7.3-1.1.3-.5 0-1.1-.2-1.6-.5-.4-.3-.8-.6-1.1-1-.2-.2-.5-.2-.7 0-.4.5-.9.9-1.4 1.2-.6.4-1.2.6-1.8.6-.4 0-.8-.1-1.1-.2-1.8-.9-3.3-2.1-4.6-3.6C4.9 11 4 9.3 3.5 7.5Z"/>
    </svg>
  );
}

export default function FloatingWidget({
  phone = "+7 (495) 123 35-85",
  whatsapp,
  telegram,
  instagram,
  youtube,
  vk,
}: FloatingWidgetProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Respect iOS safe-area insets
  const insetBottom = "var(--safe-area-inset-bottom)";
  const insetRight = "var(--safe-area-inset-right)";

  const actions = [
    telegram && {
      key: "tg",
      href: buildTelegramHref(telegram),
      label: "Написать в Telegram",
      icon: <Send className="h-5 w-5" />,
      bg: "bg-[#229ED9]",
    },
    whatsapp && {
      key: "wa",
      href: buildWhatsAppHref(whatsapp),
      label: "Написать в WhatsApp",
      icon: <MessageCircle className="h-5 w-5" />,
      bg: "bg-[#25D366]",
    },
    vk && {
      key: "vk",
      href: buildVkHref(vk),
      label: "Мы во ВКонтакте",
      icon: <VkIcon className="h-5 w-5" />,
      bg: "bg-[#2787F5]",
    },
    {
      key: "call",
      href: formatTelHref(phone),
      label: "Позвонить",
      icon: <Phone className="h-5 w-5" />,
      bg: "bg-[#00B18F]",
    },
  ].filter(Boolean) as Array<{
    key: string;
    href?: string;
    label: string;
    icon: JSX.Element;
    bg: string;
  }>;

  if (!mounted) return null;

  return (
    <div
      className="fixed z-50"
      style={{
        right: `calc(1rem + ${insetRight})`,
        bottom: `calc(1rem + ${insetBottom})`,
      }}
      aria-live="polite"
    >
      {/* Panel */}
      <div
        className={[
          "transition-all duration-200 ease-out origin-bottom-right",
          open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95 pointer-events-none",
        ].join(" ")}
      >
        <div className="mb-3 w-56 rounded-2xl border border-gray-200 bg-white/95 shadow-xl backdrop-blur-sm">
          <div className="px-4 pt-3 pb-2">
            <p className="text-sm font-semibold text-gray-900">Мы на связи</p>
            <p className="mt-0.5 text-xs text-gray-500">Выберите удобный способ связи</p>
          </div>
          <div className="px-2 pb-2">
            <ul className="flex flex-col gap-2">
              {actions.map((a) => (
                <li key={a.key}>
                  {a.href ? (
                    <Link
                      href={a.href}
                      target={a.key !== "call" ? "_blank" : undefined}
                      rel={a.key !== "call" ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 rounded-xl border border-gray-200/70 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm transition hover:border-gray-300 hover:bg-gray-50"
                      aria-label={a.label}
                    >
                      <span className={["flex h-8 w-8 items-center justify-center rounded-lg text-white", a.bg].join(" ")}>{a.icon}</span>
                      <span className="flex-1">{a.label}</span>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-3 rounded-xl border border-gray-200/70 bg-white px-3 py-2.5 text-sm text-gray-400">
                      <span className={["flex h-8 w-8 items-center justify-center rounded-lg text-white", a.bg].join(" ")}>{a.icon}</span>
                      <span className="flex-1">{a.label}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00B18F] text-white shadow-lg transition hover:scale-105 hover:bg-[#00997a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B18F]/30"
        aria-label={open ? "Закрыть виджет связи" : "Открыть виджет связи"}
      >
        <span className="sr-only">Contact widget toggle</span>
        <div className="transition-transform duration-200">
          {open ? <X className="h-6 w-6" /> : <Plus className="h-7 w-7" />}
        </div>
      </button>
    </div>
  );
}
