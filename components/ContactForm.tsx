"use client";
import { useState } from "react";
import { BUSINESS, SERVICES } from "@/lib/config";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  city: string;
  message: string;
}

const initialForm: FormData = { name: "", phone: "", email: "", service: "", city: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: Partial<FormData> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4}$/.test(form.phone.replace(/\s/g, "")))
      errs.phone = "Please enter a valid phone number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Please enter a valid email address";
    if (!form.service) errs.service = "Please select a service";
    if (!form.city.trim()) errs.city = "City or ZIP is required";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    // Placeholder: log to console until backend is wired
    console.log("Service request:", form);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setSubmitting(false);
  };

  const field = (key: keyof FormData) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      setErrors((er) => ({ ...er, [key]: undefined }));
    },
  });

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-[#0f1f3d] mb-3">Request Received!</h3>
        <p className="text-gray-600 mb-6">
          We&apos;ll call you back shortly. For immediate service call{" "}
          <a href={`tel:${BUSINESS.phoneRaw}`} className="text-[#e8390e] font-bold">{BUSINESS.phone}</a>
        </p>
        <button onClick={() => { setSubmitted(false); setForm(initialForm); }} className="btn-primary">
          Submit Another Request
        </button>
      </div>
    );
  }

  const inputClass = (key: keyof FormData) =>
    `w-full border rounded-lg px-4 py-3 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-[#e8390e] transition ${
      errors[key] ? "border-red-500 bg-red-50" : "border-gray-300"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="name">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input id="name" type="text" placeholder="John Smith" className={inputClass("name")} {...field("name")} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="phone">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input id="phone" type="tel" placeholder="(631) 555-0000" className={inputClass("phone")} {...field("phone")} />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">
            Email Address
          </label>
          <input id="email" type="email" placeholder="john@example.com" className={inputClass("email")} {...field("email")} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="city">
            City / ZIP <span className="text-red-500">*</span>
          </label>
          <input id="city" type="text" placeholder="Bay Shore NY 11706" className={inputClass("city")} {...field("city")} />
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="service">
          Service Needed <span className="text-red-500">*</span>
        </label>
        <select id="service" className={inputClass("service")} {...field("service")}>
          <option value="">Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="Not sure / Other">Not sure / Other</option>
        </select>
        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="message">
          Describe the Problem
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Describe what's happening with your garage door..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-[#e8390e] transition resize-none"
          {...field("message")}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full btn-primary justify-center py-4 text-lg disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Request Service — We'll Call You Back"}
      </button>

      <p className="text-center text-gray-500 text-xs">
        For immediate service call{" "}
        <a href={`tel:${BUSINESS.phoneRaw}`} className="text-[#e8390e] font-bold">{BUSINESS.phone}</a>
        {" "}— available 24/7
      </p>
    </form>
  );
}
