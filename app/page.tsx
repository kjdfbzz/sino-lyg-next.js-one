// app/page.tsx
"use client";

import React from "react";
import {
  Ship,
  Plane,
  Truck,
  Globe,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* 顶部导航 */}
      <header className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <Ship className="h-7 w-7" />
          <span className="text-lg font-semibold">SINOLYG Logistics</span>
        </div>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#services" className="hover:text-cyan-300">
            服务项目
          </a>
          <a href="#routes" className="hover:text-cyan-300">
            优势航线
          </a>
          <a href="#contact" className="hover:text-cyan-300">
            联系我们
          </a>
        </nav>
      </header>

      {/* Hero 区块 */}
      <section className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center">
        <div className="flex-1 space-y-5">
          <h1 className="text-3xl font-bold leading-snug md:text-4xl">
            中国到全球海运 · 空运 ·
            <span className="block text-cyan-300">
              一站式国际物流解决方案
            </span>
          </h1>
          <p className="text-sm text-slate-300 md:text-base">
            深耕印度、孟加拉、巴基斯坦、中东、非洲、南美等市场，
            提供从订舱、拖车、报关、清关到送货的一条龙服务。
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <div className="flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1">
              <Ship className="h-4 w-4" />
              海运整箱 / 拼箱
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1">
              <Plane className="h-4 w-4" />
              空运快件
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1">
              <Truck className="h-4 w-4" />
              门到门服务
            </div>
          </div>
        </div>

        <div className="mt-6 flex-1 md:mt-0">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg">
            <h2 className="mb-3 flex items-center gap-2 text-base font-semibold">
              <Globe className="h-5 w-5" />
              重点服务航线
            </h2>
            <ul className="space-y-1 text-sm text-slate-200">
              <li>中国 ➜ 印度 / 孟加拉 / 巴基斯坦</li>
              <li>中国 ➜ 中东 / 红海 / 非洲</li>
              <li>中国 ➜ 墨西哥 / 南美各国</li>
              <li>青岛 / 连云港 / 上海 / 宁波 等主要港口</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section
        id="contact"
        className="border-t border-slate-800 bg-slate-900/60"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1 text-sm">
            <p className="font-semibold">立即咨询运价 / 订舱</p>
            <p className="text-slate-300">
              我们根据你的货物信息，提供最快 1 对 1 报价与运输方案。
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+86 183 6063 9913 (WhatsApp 同号)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>bryce.lee@gwl-lianyungang.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>中国 · 连云港 / 青岛</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
