import HeroEnergyVisual from "@/components/HeroEnergyVisual";
import SiteHeader from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { useGoToHomeSection } from "@/hooks/useGoToHomeSection";
import {
  SITE_EMAIL,
  SITE_WECHAT,
  consumePendingScroll,
  copySiteWeChat,
} from "@/lib/siteNav";
import { ArrowRight, Globe, Users, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Link } from "wouter";

/**
 * 以太数字 - 深空极简主义设计
 * 首页展示品牌、核心业务、价值主张、CTA
 * 色彩系统：深蓝黑背景 + 青蓝紫渐变强调
 */

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const goSection = useGoToHomeSection();

  useEffect(() => {
    const pending = consumePendingScroll();
    const targetId = pending || window.location.hash.replace(/^#/, "");
    if (!targetId) return;
    const t = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        {/* Background Image */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663633846827/FCLrK468fn2bhgo3tQePQt/hero-background-az9jY7GAaUAGKmxySQQwsW.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 -z-10 bg-black/40" />

        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
                <span className="text-sm text-accent font-medium">
                  🚀 领先的海外互联网项目专家
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold font-poppins leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  数字增长
                </span>
                <br />
                无限可能
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                以太数字面向全球创业者与企业，提供海外互联网项目培训与指导，聚焦广告联盟、Media Buy 与 EMU 等高性能数字营销与变现路径。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="button"
                  size="lg"
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold"
                  onClick={() => goSection("services")}
                >
                  开始学习 <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10"
                  onClick={() => goSection("about")}
                >
                  了解更多
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div>
                  <div className="text-2xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">学员成功</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">10+</div>
                  <div className="text-sm text-muted-foreground">年行业经验</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">技术支持</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden md:flex items-center justify-center">
              <HeroEnergyVisual />
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-16 md:py-20 px-4 border-t border-border scroll-mt-24"
      >
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
                关于以太数字
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                我们专注跨境出海场景下的广告联盟、EMU 体系与 Media Buy 媒体购买，辅以数据与流程优化。通过体系化课程、直播答疑与远程陪跑，帮助学员把方法沉淀为可复用的增长工作流。
              </p>
            </div>
            <div className="glass rounded-xl p-8 border border-border">
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-semibold shrink-0">使命</span>
                  <span>让独立开发者与团队用更低试错成本进入海外市场。</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-semibold shrink-0">方式</span>
                  <span>视频课 + 文档 + 社群问答 + 一对一远程指导（进阶）。</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-semibold shrink-0">支持</span>
                  <span>课程持续更新，技术问题可在社群与咨询通道获得反馈。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 border-t border-border scroll-mt-24"
      >
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins mb-4">核心服务</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              我们提供全面的海外互联网项目培训和指导，帮助您快速掌握核心技能
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* EMU Project Card */}
            <Link
              href="/emu-project"
              className="group relative overflow-hidden rounded-xl glass p-8 cursor-pointer transition-all duration-300 hover:shadow-xl block no-underline text-inherit"
              onMouseEnter={() => setHoveredCard("emu")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="absolute inset-0 -z-10 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663633846827/FCLrK468fn2bhgo3tQePQt/emu-project-card-VXL7yxEh3kcogeWDrfnAQH.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: hoveredCard === "emu" ? 0.15 : 0.08,
                }}
              />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold font-poppins mb-3">
                  国外广告联盟EMU项目
                </h3>

                <p className="text-muted-foreground mb-4 text-sm">
                  专业的CPA广告联盟培训，掌握国外联盟营销的核心技能，日均收益可达650元。
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    <span>域名主机配置</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    <span>代理IP与环境搭建</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    <span>联盟申请与任务测试</span>
                  </div>
                </div>

                <span className="inline-flex items-center text-accent font-semibold">
                  了解详情 <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* MediaBuy Project Card */}
            <Link
              href="/mediabuy-project"
              className="group relative overflow-hidden rounded-xl glass p-8 cursor-pointer transition-all duration-300 hover:shadow-xl block no-underline text-inherit"
              onMouseEnter={() => setHoveredCard("mediabuy")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="absolute inset-0 -z-10 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663633846827/FCLrK468fn2bhgo3tQePQt/mediabuy-project-card-ajb2q5x2Euc7fb6e46ABVs.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: hoveredCard === "mediabuy" ? 0.15 : 0.08,
                }}
              />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold font-poppins mb-3">
                  MediaBuy媒体购买项目
                </h3>

                <p className="text-muted-foreground mb-4 text-sm">
                  从基础到进阶的完整媒体购买课程体系，掌握多平台投放策略和数据优化技巧。
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    <span>中级课程体系</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    <span>高级进阶培训</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    <span>一对一远程指导</span>
                  </div>
                </div>

                <span className="inline-flex items-center text-accent font-semibold">
                  了解详情 <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Training Support Card */}
            <div
              role="button"
              tabIndex={0}
              className="group relative overflow-hidden rounded-xl glass p-8 cursor-pointer transition-all duration-300 hover:shadow-xl outline-none focus-visible:ring-2 focus-visible:ring-accent"
              onMouseEnter={() => setHoveredCard("training")}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => goSection("contact")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  goSection("contact");
                }
              }}
            >
              <div
                className="absolute inset-0 -z-10 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663633846827/FCLrK468fn2bhgo3tQePQt/training-section-bg-Vmd2FXT6YmgmAiCzgQfusM.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: hoveredCard === "training" ? 0.15 : 0.08,
                }}
              />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold font-poppins mb-3">
                  专业团队支持
                </h3>

                <p className="text-muted-foreground mb-4 text-sm">
                  由10年行业经验的专家团队提供全方位支持，包括视频教程、直播讲解和远程陪跑。
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    <span>知识星球社区</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    <span>实时问答支持</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    <span>持续课程更新</span>
                  </div>
                </div>

                <span className="inline-flex items-center text-accent font-semibold">
                  了解详情 <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 px-4 border-t border-border relative overflow-hidden scroll-mt-24"
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663633846827/FCLrK468fn2bhgo3tQePQt/cta-accent-pattern-FUrBiHo53kvpxnVFs2w7KV.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />

        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-poppins mb-6">
            准备开始您的数字增长之旅？
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            加入500+成功学员的行列，获得专业指导和实战经验。我们提供完整的课程体系和24/7技术支持。
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-stretch sm:items-center">
            <Button
              type="button"
              size="lg"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold"
              onClick={async () => {
                const ok = await copySiteWeChat();
                if (ok) {
                  toast.success("微信号已复制，欢迎添加咨询");
                } else {
                  toast.message(`咨询微信：${SITE_WECHAT}`, {
                    description: `或发送邮件至 ${SITE_EMAIL}`,
                  });
                }
              }}
            >
              复制微信咨询 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
              onClick={() => goSection("services")}
            >
              查看课程详情
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
              onClick={() => {
                window.location.href = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent("课程咨询")}`;
              }}
            >
              发送邮件
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            微信咨询：{SITE_WECHAT} | 邮箱：{SITE_EMAIL}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm leading-none">以</span>
                </div>
                <span className="font-bold font-poppins tracking-tight">以太数字</span>
              </div>
              <p className="text-sm text-muted-foreground">
                以太数字——领先的海外互联网项目专家，为全球创业者提供数字化增长方案。
              </p>
            </div>

            <div>
              <h4 className="font-semibold font-poppins mb-4">服务</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/emu-project"
                    className="hover:text-accent transition text-inherit"
                  >
                    EMU项目
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mediabuy-project"
                    className="hover:text-accent transition text-inherit"
                  >
                    MediaBuy培训
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-accent transition text-left bg-transparent border-0 p-0 cursor-pointer text-inherit text-sm"
                    onClick={() => goSection("contact")}
                  >
                    技术支持
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold font-poppins mb-4">关于</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button
                    type="button"
                    className="hover:text-accent transition text-left bg-transparent border-0 p-0 cursor-pointer text-inherit text-sm"
                    onClick={() => goSection("about")}
                  >
                    公司简介
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-accent transition text-left bg-transparent border-0 p-0 cursor-pointer text-inherit text-sm"
                    onClick={() => goSection("services")}
                  >
                    团队介绍
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-accent transition text-left bg-transparent border-0 p-0 cursor-pointer text-inherit text-sm"
                    onClick={() => goSection("services")}
                  >
                    成功案例
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold font-poppins mb-4">联系</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button
                    type="button"
                    className="hover:text-accent transition text-left bg-transparent border-0 p-0 cursor-pointer text-inherit text-sm"
                    onClick={async () => {
                      const ok = await copySiteWeChat();
                      if (ok) toast.success("微信号已复制");
                      else toast.message(`微信：${SITE_WECHAT}`);
                    }}
                  >
                    微信：{SITE_WECHAT}（点击复制）
                  </button>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="hover:text-accent transition"
                  >
                    邮箱：{SITE_EMAIL}
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-accent transition text-left bg-transparent border-0 p-0 cursor-pointer text-inherit text-sm"
                    onClick={() => goSection("contact")}
                  >
                    预约咨询
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 以太数字. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <button
                type="button"
                className="hover:text-accent transition bg-transparent border-0 p-0 cursor-pointer text-inherit"
                onClick={() => goSection("contact")}
              >
                隐私政策
              </button>
              <button
                type="button"
                className="hover:text-accent transition bg-transparent border-0 p-0 cursor-pointer text-inherit"
                onClick={() => goSection("contact")}
              >
                服务条款
              </button>
              <button
                type="button"
                className="hover:text-accent transition bg-transparent border-0 p-0 cursor-pointer text-inherit"
                onClick={() => goSection("contact")}
              >
                联系我们
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
