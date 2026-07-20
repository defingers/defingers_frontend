import React from "react";
import { Linkedin, Mail } from "lucide-react";

import staff1 from "../../assets/team_members/avatars/staff1.jpg";
import staff2 from "../../assets/team_members/avatars/staff2.jpg";
import staff3 from "../../assets/team_members/avatars/staff3.jpg";
import staff4 from "../../assets/team_members/avatars/staff4.jpg";
import staff5 from "../../assets/team_members/avatars/staff5.jpg";
import staff6 from "../../assets/team_members/avatars/staff6.jpg";


const staff = [
  { name: "Aarav Mehta", role: "Chief Security Officer", tag: "Strategy", image: staff1, tint: "#f97316", rotate: "-2deg" },
  { name: "Priya Nair", role: "Head of SOC Operations", tag: "24×7 SOC", image: staff2, tint: "#d97706", rotate: "1.5deg" },
  { name: "Rohan Kapoor", role: "Lead Threat Analyst", tag: "Threat Intel", image: staff3, tint: "#f97316", rotate: "-1deg" },
  { name: "Ishita Rao", role: "Cloud Security Architect", tag: "Cloud & IAM", image: staff4, tint: "#d97706", rotate: "2deg" },
  { name: "Vikram Shah", role: "Principal Pen Tester", tag: "Offensive", image: staff5, tint: "#f97316", rotate: "-1.5deg" },
  { name: "Neha Iyer", role: "Compliance & Risk Lead", tag: "Governance", image: staff6, tint: "#d97706", rotate: "1deg" },
];


const Staff = () => (
  <section className="relative overflow-hidden bg-[#f9f1e5]">
    <div
      className="pointer-events-none absolute inset-0 opacity-70"

    />

    <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-16 flex flex-col gap-6">
        <div>
          <h2 className="mx-auto mb-3 text-center font-poppins text-4xl font-bold text-slate-900 md:text-4xl">
            Meet the humans behind the shield.
          </h2>
          <div className="w-40 h-1 bg-yellow-400 mx-auto mb-10 rounded"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {staff.map((p, i) => (
          <article key={p.name} className="group relative" style={{ transform: `rotate(${p.rotate})` }}>
            <div className="relative transition-transform duration-500 ease-out group-hover:-translate-y-3 group-hover:rotate-0">
              <div className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white/85 shadow-[0_20px_60px_rgba(124,74,19,0.12)] backdrop-blur-sm">
                <div
                  className="relative aspect-square overflow-hidden"
                  style={{
                    background: `linear-gradient(160deg, color-mix(in oklab, ${p.tint} 20%, white) 0%, color-mix(in oklab, ${p.tint} 8%, white) 100%)`,
                  }}
                >
                  <div
                    className="absolute inset-5 rounded-[45%] opacity-90 transition-transform duration-700 group-hover:scale-110"
                    style={{
                      background: `radial-gradient(circle at 50% 40%, color-mix(in oklab, ${p.tint} 34%, transparent), transparent 66%)`,
                    }}
                  />
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="relative z-10 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full border border-orange-100 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-800 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.tint }} />
                    {p.tag}
                  </span>
                  <span className="absolute bottom-3 right-4 z-20 select-none font-poppins text-6xl font-semibold leading-none tabular-nums text-white/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative h-4">

                  <div className="absolute inset-x-4 top-1/2 border-t border-dashed border-orange-100" />
                </div>

                <div className="flex items-center justify-between gap-3 p-5">
                  <div className="min-w-0">
                    <h3 className="truncate font-poppins text-lg font-semibold text-slate-900">
                      {p.name}
                    </h3>
                    <p className="truncate text-sm text-slate-600">{p.role}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1.5">
                    <a
                      href="#"
                      aria-label={`${p.name} LinkedIn`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-orange-100 text-slate-600 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    {/* <a
                      href="#"
                      aria-label={`Email ${p.name}`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-orange-100 text-slate-600 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                    >
                      <Mail className="h-4 w-4" />
                    </a> */}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 -z-10 translate-x-2 translate-y-3 rounded-[2rem] bg-orange-300/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Staff;