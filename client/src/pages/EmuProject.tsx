import SiteHeader from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { useGoToHomeSection } from "@/hooks/useGoToHomeSection";
import { SITE_EMAIL, SITE_WECHAT, copySiteWeChat } from "@/lib/siteNav";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";

/**
 * 以太数字 - EMU项目详情页
 * 展示项目概述、投入产出、培训内容、讲师信息等
 */

export default function EmuProject() {
  const goSection = useGoToHomeSection();

  async function handleGetMaterials() {
    const ok = await copySiteWeChat();
    if (ok) {
      toast.success("微信号已复制，添加好友即可获取课程资料");
    } else {
      toast.message("请添加微信或发送邮件获取资料", {
        description: SITE_EMAIL,
      });
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <span className="text-sm text-accent font-medium">
              国外广告联盟 EMU 项目
            </span>
          </div>

          <h1 className="text-5xl font-bold font-poppins mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              国外CPA广告联盟
            </span>
            <br />
            专业培训方案
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            通过模拟国外用户身份完成广告联盟注册任务，赚取佣金。我们提供完整的培训体系，帮助您快速掌握核心技能，实现日均650元的稳定收入。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              type="button"
              size="lg"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold"
              onClick={() => goSection("contact")}
            >
              立即报名 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
              onClick={handleGetMaterials}
            >
              获取课程资料
            </Button>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-poppins mb-12">项目概述</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold font-poppins mb-4">
                什么是EMU项目？
              </h3>
              <p className="text-muted-foreground mb-4">
                EMU是一种高效的广告联盟营销方式。与传统的推广方式不同，EMU通过模拟国外用户身份，直接在广告联盟平台完成注册任务，获得佣金返现。这种方式无需推广流量，周期短，收益快。
              </p>
              <p className="text-muted-foreground">
                一个注册任务的佣金通常在3-5美元，日均可完成100个任务，折合人民币约650元的纯利润。
              </p>
            </div>

            <div className="glass p-8 rounded-xl">
              <h3 className="text-xl font-semibold font-poppins mb-6">
                核心优势
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span>无需推广流量，直接完成任务</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span>初期投入低，仅需128元（域名+主机）</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span>日均收益可达650元，月入可达19500元</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span>支持多账号矩阵，收益可无限扩展</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment & Revenue */}
      <section className="py-16 px-4 border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-poppins mb-12">投入与产出分析</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Initial Investment */}
            <div className="glass p-8 rounded-xl">
              <h3 className="text-lg font-semibold font-poppins mb-6 text-accent">
                初期一次性投入
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span>国外域名（.com）</span>
                  <span className="font-semibold">70元</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span>国外主机（年付）</span>
                  <span className="font-semibold">58元</span>
                </div>
                <div className="flex justify-between items-center pt-3 bg-accent/10 px-4 py-2 rounded">
                  <span className="font-semibold">总计</span>
                  <span className="font-bold text-accent">128元</span>
                </div>
              </div>
            </div>

            {/* Daily Operating Cost */}
            <div className="glass p-8 rounded-xl">
              <h3 className="text-lg font-semibold font-poppins mb-6 text-accent">
                日均运营成本（以100美金为例）
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span>代理IP费用</span>
                  <span className="font-semibold">10元</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span>虚拟身份料子</span>
                  <span className="font-semibold">10元</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span>流量成本</span>
                  <span className="font-semibold">20元</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span>手续费</span>
                  <span className="font-semibold">10元</span>
                </div>
                <div className="flex justify-between items-center pt-3 bg-accent/10 px-4 py-2 rounded">
                  <span className="font-semibold">日均成本</span>
                  <span className="font-bold text-accent">50元</span>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Projection */}
          <div className="glass p-8 rounded-xl">
            <h3 className="text-lg font-semibold font-poppins mb-6 text-accent">
              收益预测
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100美金</div>
                <div className="text-sm text-muted-foreground mb-4">日均任务佣金</div>
                <div className="text-2xl font-bold">700元</div>
              </div>
              <div className="text-center border-l border-r border-border">
                <div className="text-3xl font-bold text-accent mb-2">-50元</div>
                <div className="text-sm text-muted-foreground mb-4">日均成本</div>
                <div className="text-2xl font-bold">650元</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">×30天</div>
                <div className="text-sm text-muted-foreground mb-4">月度计算</div>
                <div className="text-2xl font-bold">19,500元</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              注：以上数据基于稳定完成100美金/天的任务。实际收益因人而异，取决于操作效率和任务难度。
            </p>
          </div>
        </div>
      </section>

      {/* Training Content */}
      <section className="py-16 px-4 border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-poppins mb-12">培训课程内容</h2>

          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "域名主机购买与配置",
                desc: "学习如何选择和购买国外域名、主机，配置DNS解析，搭建独立网站。掌握选择技巧，避免常见坑点。",
              },
              {
                num: "02",
                title: "网站建设与SEO优化",
                desc: "使用WordPress快速搭建英文独立站，添加高质量内容。学习国外网站提交收录，实现真假流量混合。",
              },
              {
                num: "03",
                title: "代理IP与指纹浏览器设置",
                desc: "掌握代理IP的选择和配置，使用指纹浏览器隐藏真实身份。确保操作环境安全，避免被联盟追踪。",
              },
              {
                num: "04",
                title: "环境搭建（关键）",
                desc: "配置Skype、邮箱、收款工具等。学习如何搭配使用，实现完美的干净环境。掌握收款变现的全流程。",
              },
              {
                num: "05",
                title: "联盟寻找与申请",
                desc: "学习如何从成千上万的国外联盟中筛选适合的平台。掌握申请技巧，与联盟经理沟通的方法。",
              },
              {
                num: "06",
                title: "任务测试与优化",
                desc: "学习如何测试任务是否真实加钱。掌握数据分析方法，持续优化操作流程，提升任务完成率。",
              },
            ].map((item, idx) => (
              <div key={idx} className="glass p-8 rounded-xl hover:shadow-lg transition">
                <div className="flex gap-6">
                  <div className="text-3xl font-bold text-accent font-poppins flex-shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-poppins mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-16 px-4 border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-poppins mb-12">讲师介绍</h2>

          <div className="glass p-12 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center flex-shrink-0">
                <span className="text-5xl text-white font-bold">张</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-poppins mb-2">张老师</h3>
                <p className="text-accent font-semibold mb-4">
                  资深海外网赚项目专家
                </p>

                <p className="text-muted-foreground mb-4">
                  拥有10年以上海外互联网项目从业经验，是国内较早从事EMU、MediaBuy等国外广告类项目的高手。精通广告联盟运营、媒体购买策略、数据分析等核心技能。
                </p>

                <p className="text-muted-foreground mb-6">
                  张老师已成功指导500+学员进入海外互联网项目领域，帮助他们实现月入万元以上的目标。擅长解决项目运营中的各类疑难杂症，提供全方位的技术支持和指导。
                </p>

                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-accent/10 rounded-full text-sm text-accent font-semibold">
                    EMU项目专家
                  </div>
                  <div className="px-4 py-2 bg-accent/10 rounded-full text-sm text-accent font-semibold">
                    MediaBuy讲师
                  </div>
                  <div className="px-4 py-2 bg-accent/10 rounded-full text-sm text-accent font-semibold">
                    10年经验
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-poppins mb-12">课程价格</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Package */}
            <div className="glass p-8 rounded-xl border border-border hover:border-accent transition">
              <h3 className="text-2xl font-bold font-poppins mb-2">基础课程</h3>
              <p className="text-muted-foreground mb-6">知识星球社区课程</p>

              <div className="mb-6">
                <div className="text-4xl font-bold text-accent mb-2">
                  ¥1,880
                </div>
                <p className="text-sm text-muted-foreground">一次性投资</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>完整的EMU课程体系</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>知识星球社区访问权限</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>视频教程和文档资料</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>社区问答支持</span>
                </li>
              </ul>

              <Button
                type="button"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => goSection("contact")}
              >
                立即报名
              </Button>
            </div>

            {/* Premium Package */}
            <div className="glass p-8 rounded-xl border-2 border-accent">
              <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full mb-4">
                推荐
              </div>

              <h3 className="text-2xl font-bold font-poppins mb-2">
                高级课程 + 远程陪跑
              </h3>
              <p className="text-muted-foreground mb-6">
                包含一对一远程指导和语音讲解
              </p>

              <div className="mb-6">
                <div className="text-4xl font-bold text-accent mb-2">
                  ¥2,880
                </div>
                <p className="text-sm text-muted-foreground">一次性投资</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>基础课程的全部内容</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>一对一远程语音讲解</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>ToDesk远程陪跑指导</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>优先问答支持</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>后续课程免费更新</span>
                </li>
              </ul>

              <Button
                type="button"
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold"
                onClick={() => goSection("contact")}
              >
                立即报名
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-poppins mb-6">
            准备开始您的EMU之旅？
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            加入500+成功学员的行列，获得专业指导和实战经验。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              type="button"
              size="lg"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold"
              onClick={() => goSection("contact")}
            >
              立即报名 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
              onClick={() => {
                window.location.href = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent("EMU 课程 · 联系讲师")}`;
              }}
            >
              联系讲师
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            微信咨询：{SITE_WECHAT} | 邮箱：{SITE_EMAIL}
          </p>
        </div>
      </section>
    </div>
  );
}
