import SiteHeader from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { useGoToHomeSection } from "@/hooks/useGoToHomeSection";
import { SITE_EMAIL, SITE_WECHAT, copySiteWeChat } from "@/lib/siteNav";
import { ArrowRight, Check, BookOpen, Users } from "lucide-react";
import { toast } from "sonner";

/**
 * 以太数字 - MediaBuy项目详情页
 * 展示中级和高级课程内容、价格、学习路径
 */

export default function MediabuyProject() {
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
              MediaBuy 媒体购买项目
            </span>
          </div>

          <h1 className="text-5xl font-bold font-poppins mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              掌握媒体购买
            </span>
            <br />
            实现广告投放精准化
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            从基础到进阶的完整MediaBuy课程体系。学习如何在Google、Facebook、TikTok等平台进行数据驱动的广告投放，优化ROI，实现可持续增长。
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

      {/* Course Overview */}
      <section className="py-16 px-4 border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-poppins mb-12">课程体系</h2>

          <div className="space-y-8">
            {/* Intermediate Course */}
            <div className="glass p-8 rounded-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-poppins">中级课程</h3>
                  <p className="text-muted-foreground">
                    适合初入MediaBuy领域的学员
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                中级课程涵盖MediaBuy的核心知识和实操技能。通过系统化的学习，掌握广告平台的基本操作、受众定位、预算管理等关键要素。
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold font-poppins mb-4 text-accent">
                    课程模块
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>MediaBuy基础知识</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>返利网平台详解</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>国内二级网盟对比</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>文案撰写与优化</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold font-poppins mb-4 text-accent">
                    实操内容
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>国外渠道推广</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>Ads代理商辅助</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>人工户使用技巧</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>Offer寻找与评估</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 text-sm">
                <p>
                  <span className="font-semibold text-accent">学习周期：</span>
                  4-6周 |{" "}
                  <span className="font-semibold text-accent">授课方式：</span>
                  腾讯会议直播讲解 |{" "}
                  <span className="font-semibold text-accent">班级规模：</span>
                  统一分组，小班教学
                </p>
              </div>
            </div>

            {/* Advanced Course */}
            <div className="glass p-8 rounded-xl border-2 border-accent">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-poppins">高级课程</h3>
                  <p className="text-muted-foreground">
                    适合有一定基础的进阶学员
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                高级课程深入讲解MediaBuy的高阶策略和优化技巧。学习如何通过数据分析、A/B测试、受众细分等方法，最大化广告ROI，实现可持续增长。
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold font-poppins mb-4 text-accent">
                    进阶模块
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>Ads上广告的具体操作</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>广告优化与A/B测试</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>数据分析与拆解</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>ROI优化策略</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold font-poppins mb-4 text-accent">
                    实战项目
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>多平台投放实战</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>预算分配优化</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>受众细分策略</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      <span>案例分析与复盘</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 text-sm">
                <p>
                  <span className="font-semibold text-accent">学习周期：</span>
                  6-8周 |{" "}
                  <span className="font-semibold text-accent">授课方式：</span>
                  直播讲解 + 一对一指导 |{" "}
                  <span className="font-semibold text-accent">班级规模：</span>
                  精英小班
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 px-4 border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-poppins mb-12">学习路径</h2>

          <div className="relative">
            {/* Timeline */}
            <div className="space-y-8">
              {[
                {
                  week: "第1-2周",
                  title: "基础知识",
                  items: [
                    "MediaBuy行业概览",
                    "主流平台对比分析",
                    "账户结构与设置",
                  ],
                },
                {
                  week: "第3-4周",
                  title: "实操技能",
                  items: [
                    "广告创意制作",
                    "受众定位与细分",
                    "预算管理与优化",
                  ],
                },
                {
                  week: "第5-6周",
                  title: "数据分析",
                  items: [
                    "关键指标解读",
                    "数据驱动决策",
                    "性能优化方法",
                  ],
                },
                {
                  week: "第7-8周",
                  title: "实战项目",
                  items: [
                    "完整项目运营",
                    "案例分析与复盘",
                    "职业发展规划",
                  ],
                },
              ].map((phase, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    {idx < 3 && (
                      <div className="w-1 h-16 bg-gradient-to-b from-accent to-transparent mt-2" />
                    )}
                  </div>

                  <div className="glass p-6 rounded-xl flex-1 pb-8">
                    <div className="text-sm text-accent font-semibold mb-2">
                      {phase.week}
                    </div>
                    <h3 className="text-lg font-bold font-poppins mb-3">
                      {phase.title}
                    </h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-poppins mb-12">课程价格</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Intermediate */}
            <div className="glass p-8 rounded-xl border border-border hover:border-accent transition">
              <h3 className="text-2xl font-bold font-poppins mb-2">中级课程</h3>
              <p className="text-muted-foreground mb-6">
                完整的MediaBuy基础培训
              </p>

              <div className="mb-6">
                <div className="text-4xl font-bold text-accent mb-2">
                  ¥2,980
                </div>
                <p className="text-sm text-muted-foreground">
                  单期完整课程
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>完整课程体系</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>腾讯会议直播讲解</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>学员统一分组</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>课程资料下载</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>社区问答支持</span>
                </li>
              </ul>

              <div className="bg-accent/10 border border-accent/30 rounded-lg p-3 text-sm mb-6">
                <p>
                  <span className="font-semibold">定金：</span>1000元锁定名额
                </p>
              </div>

              <Button
                type="button"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => goSection("contact")}
              >
                立即报名
              </Button>
            </div>

            {/* Advanced */}
            <div className="glass p-8 rounded-xl border-2 border-accent">
              <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full mb-4">
                推荐
              </div>

              <h3 className="text-2xl font-bold font-poppins mb-2">
                高级课程 + 指导
              </h3>
              <p className="text-muted-foreground mb-6">
                包含一对一远程指导和实战陪跑
              </p>

              <div className="mb-6">
                <div className="text-4xl font-bold text-accent mb-2">
                  ¥5,980
                </div>
                <p className="text-sm text-muted-foreground">
                  含远程陪跑服务
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>中级课程全部内容</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>高级进阶课程</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>一对一远程指导</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>实战项目陪跑</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>优先问答支持</span>
                </li>
              </ul>

              <div className="bg-accent/10 border border-accent/30 rounded-lg p-3 text-sm mb-6">
                <p>
                  <span className="font-semibold">定金：</span>1000元锁定名额
                </p>
              </div>

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
            准备掌握MediaBuy的核心技能？
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            从基础到进阶的完整学习路径，让您成为专业的媒体购买专家。
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
              onClick={handleGetMaterials}
            >
              获取课程资料
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
