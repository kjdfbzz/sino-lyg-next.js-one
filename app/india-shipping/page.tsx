// app/india-shipping/page.tsx
import type { Metadata } from "next";
import {
  Ship,
  Plane,
  Truck,
  Globe,
  FileText,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "China to India Shipping | 中国到印度海运整柜/拼箱 | SINOLYG Logistics",
  description:
    "SINOLYG 专注中国到印度海运整柜 FCL、拼箱 LCL、空运及清关服务。覆盖青岛、连云港、上海、宁波等港口发往 Nhava Sheva、Mundra、Chennai 等印度主要港口。提供订舱、拖车、报关、清关、门到门一站式服务。",
  alternates: {
    canonical: "https://www.sinolyg.com/india-shipping",
  },
};

export default function IndiaShippingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* 顶部 Hero */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
              <Globe className="h-4 w-4" />
              China ➜ India Sea & Air Freight
            </div>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              中国到印度海运 / 空运{" "}
              <span className="block text-emerald-300">
                整柜 FCL · 拼箱 LCL · 清关一站式方案
              </span>
            </h1>
            <p className="max-w-xl text-sm text-slate-300 md:text-base">
              专注中国发往印度的进出口物流，长期操作 Nhava Sheva、Mundra、
              Chennai 等主要港口，熟悉当地清关政策与费用结构。支持 EXW
              工厂提货、FOB 港口交货、DDP 门到门服务。
            </p>
            <div className="flex flex-wrap gap-3 text-xs md:text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1">
                <Ship className="h-4 w-4" /> 海运整柜 / 拼箱
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1">
                <Plane className="h-4 w-4" /> 空运快件
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1">
                <Truck className="h-4 w-4" /> 门到门配送
              </span>
            </div>
          </div>

          {/* 联系卡片 */}
          <div className="mt-4 w-full max-w-sm flex-1 md:mt-0">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl">
              <h2 className="mb-3 text-base font-semibold">
                立即咨询中国 ➜ 印度运价
              </h2>
              <p className="mb-4 text-xs text-slate-300 md:text-sm">
                告诉我们您的货物信息（起运港 / 目的港 / 体积 / 重量 / 产品），
                我们通常可在 1 小时内给出运价与方案。
              </p>
              <div className="space-y-2 text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-300" />
                  <span>+86 183 6063 9913（WhatsApp 同号）</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-emerald-300" />
                  <span>bryce.lee@gwl-lianyungang.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-300" />
                  <span>Qingdao / Lianyungang / Shanghai / Ningbo</span>
                </div>
              </div>
              <p className="mt-4 text-[11px] text-slate-400">
                适用贸易条款：EXW / FOB / CIF / DAP / DDP。可根据货量申请舱位与
                Free time 优惠。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 主要港口 & 航程 */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="mb-4 text-xl font-semibold">中国 ➜ 印度主要港口与航程</h2>
        <p className="mb-4 text-sm text-slate-300">
          根据不同货物与最终收货地，我们会从青岛、连云港、上海、宁波等港口，为您匹配至
          Nhava Sheva、Mundra、Chennai 等港口的最优航线与船公司。
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
          <table className="min-w-full text-left text-xs text-slate-200 md:text-sm">
            <thead className="bg-slate-900/80">
              <tr>
                <th className="px-4 py-3">起运港 (China POL)</th>
                <th className="px-4 py-3">目的港 (India POD)</th>
                <th className="px-4 py-3">参考航程 (TT)</th>
                <th className="px-4 py-3">说明</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-slate-800">
                <td className="px-4 py-3">Qingdao</td>
                <td className="px-4 py-3">Nhava Sheva</td>
                <td className="px-4 py-3">18–22 days</td>
                <td className="px-4 py-3">北方港主力航线，舱位稳定，价格优势明显。</td>
              </tr>
              <tr className="border-t border-slate-800">
                <td className="px-4 py-3">Qingdao / Lianyungang</td>
                <td className="px-4 py-3">Mundra</td>
                <td className="px-4 py-3">20–23 days</td>
                <td className="px-4 py-3">适合发往西印度、内陆点的货物，清关效率高。</td>
              </tr>
              <tr className="border-t border-slate-800">
                <td className="px-4 py-3">Shanghai / Ningbo</td>
                <td className="px-4 py-3">Nhava Sheva</td>
                <td className="px-4 py-3">14–17 days</td>
                <td className="px-4 py-3">华东货源集中，班期密集，可选择直航与中转。</td>
              </tr>
              <tr className="border-t border-slate-800">
                <td className="px-4 py-3">Shanghai / Ningbo</td>
                <td className="px-4 py-3">Chennai</td>
                <td className="px-4 py-3">14–18 days</td>
                <td className="px-4 py-3">适合发往南印度工厂、仓库的货物。</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[11px] text-slate-400">
          * 以上为常规参考航程，实际时效会因船公司、航线中转、港口拥堵等因素略有浮动。
        </p>
      </section>

      {/* 3. FCL / LCL 费用结构 */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="mb-2 flex items-center gap-2 text-base font-semibold">
              <Ship className="h-5 w-5 text-emerald-300" />
              FCL 整柜费用结构
            </h3>
            <p className="mb-2 text-sm text-slate-300">
              适用于 20GP / 40GP / 40HQ / 特种柜；大货量、固定出货建议使用整柜。
            </p>
            <ul className="space-y-1 text-sm text-slate-200">
              <li>· Ocean Freight：海运基本运费</li>
              <li>· BAF / CAF / EBS 等附加费（视船司而定）</li>
              <li>· Origin THC / DOC / SEAL / AMS 等费用</li>
              <li>· 目的港 LOCAL CHARGE（D/O、THC、DEM/DET 等）</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">
              我们可根据货量申请更长 Free Time（7/14/21 天），降低印度港口滞箱成本。
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="mb-2 flex items-center gap-2 text-base font-semibold">
              <Truck className="h-5 w-5 text-emerald-300" />
              LCL 拼箱费用结构
            </h3>
            <p className="mb-2 text-sm text-slate-300">
              适合样品、小批量出货或暂时达不到整柜的货量。支持多家工厂集拼。
            </p>
            <ul className="space-y-1 text-sm text-slate-200">
              <li>· 基本运费：按材积/重量计费（W/M）</li>
              <li>· CFS 费、文件费等拼箱附加费用</li>
              <li>· 目的港拆箱费、LOCAL CHARGE</li>
              <li>· 可提供 EXW 上门提货 / 集货仓库服务</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">
              如有长期小批量出货，我们可为您设计固定拼箱方案，控制单票成本。
            </p>
          </div>
        </div>
      </section>

      {/* 4. 出口与清关文件 */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="mb-3 flex items-center gap-2 text-base font-semibold">
              <FileText className="h-5 w-5 text-emerald-300" />
              中国出口常见单证
            </h3>
            <ul className="space-y-1 text-sm text-slate-200">
              <li>· Commercial Invoice（商业发票）</li>
              <li>· Packing List（装箱单）</li>
              <li>· Contract（贸易合同，如需）</li>
              <li>· MSDS / 船运鉴定（化工品）</li>
              <li>· FORM / 原产地证（如客户需要）</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">
              我们可协助审核箱单发票与 HS CODE，降低查验与补料风险。
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="mb-3 flex items-center gap-2 text-base font-semibold">
              <FileText className="h-5 w-5 text-emerald-300" />
              印度清关所需资料
            </h3>
            <ul className="space-y-1 text-sm text-slate-200">
              <li>· IEC Code（印度进口商注册号）</li>
              <li>· GST 号与 KYC 文件</li>
              <li>· Final Invoice &amp; Packing List</li>
              <li>· Original / Telex Release B/L（提单）</li>
              <li>· 若涉及特殊产品，可能需额外许可证</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">
              我们与当地代理合作，可提前预审文件，协助进口商顺利完成清关。
            </p>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="mb-4 text-xl font-semibold">常见问题 FAQ</h2>
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
              <HelpCircle className="h-4 w-4 text-emerald-300" />
              Q：我们是 EXW 工厂交货，可以操作吗？
            </div>
            <p className="text-sm text-slate-300">
              A：可以。我们可安排国内拖车上门提货，负责报关、订舱、出口以及印度清关/派送，全程一对一对接。
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
              <HelpCircle className="h-4 w-4 text-emerald-300" />
              Q：Free Time 可以做到多少天？
            </div>
            <p className="text-sm text-slate-300">
              A：常规为 7–14 天，我们可根据您的出货频率与货量向船公司申请 21
              天或更长 Free Time，具体以当时船期与运价为准。
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
              <HelpCircle className="h-4 w-4 text-emerald-300" />
              Q：可以做 DDP 吗？
            </div>
            <p className="text-sm text-slate-300">
              A：部分城市与部分产品可以做 DDP，需要先确认 HS CODE、货值、目的地，评估当地清关政策后再报价。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
