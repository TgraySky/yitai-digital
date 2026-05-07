import { motion } from "framer-motion";
import { Zap } from "lucide-react";

/**
 * Hero 右侧能量核心：多层光晕、逆向旋转环、轨道火花与悬浮闪电
 */
export default function HeroEnergyVisual() {
  return (
    <div
      className="relative w-full max-w-[min(100%,32rem)] aspect-square mx-auto flex items-center justify-center select-none"
      aria-hidden
    >
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <linearGradient id="hero-zap-fill" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="45%" stopColor="#00d9ff" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="hero-zap-stroke" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#cffafe" stopOpacity={0.9} />
            <stop offset="100%" stopColor="#e9d5ff" stopOpacity={0.85} />
          </linearGradient>
        </defs>
      </svg>

      {/* 底层呼吸光球 */}
      <motion.div
        className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(0,217,255,0.35)_0%,rgba(147,51,234,0.15)_45%,transparent_70%)] blur-2xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.85, 0.45] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-[20%] rounded-full bg-[radial-gradient(circle,rgba(0,217,255,0.25)_0%,transparent_65%)] blur-xl"
        animate={{ scale: [1.08, 0.95, 1.08] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 外扩脉冲环 */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30"
          style={{ width: "42%", height: "42%" }}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{
            scale: [0.6, 2.4],
            opacity: [0.45, 0],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 1.05,
          }}
        />
      ))}

      {/* 慢速虚线环 */}
      <motion.div
        className="absolute w-[72%] h-[72%] rounded-full border border-dashed border-cyan-400/35"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      {/* 旋转霓虹环（细边框） */}
      <motion.div
        className="absolute w-[62%] h-[62%] rounded-full p-px"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, rgba(0,217,255,0.5), rgba(168,85,247,0.65), rgba(0,217,255,0.5), transparent)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <div className="h-full w-full rounded-full bg-background/75 backdrop-blur-sm" />
      </motion.div>

      {/* 内圈实线 */}
      <motion.div
        className="absolute w-[48%] h-[48%] rounded-full border border-purple-500/30 shadow-[inset_0_0_48px_rgba(0,217,255,0.12)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />

      {/* 外轨火花：三颗同速 */}
      {[0, 120, 240].map((deg) => (
        <div
          key={`o-${deg}`}
          className="absolute flex h-[76%] w-[76%] items-start justify-center"
          style={{ transform: `rotate(${deg}deg)` }}
        >
          <motion.div
            className="relative h-full w-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1 rounded-full bg-cyan-200 shadow-[0_0_16px_4px_rgba(0,217,255,0.95)]" />
          </motion.div>
        </div>
      ))}

      {/* 内轨火花：逆向 */}
      {[60, 180, 300].map((deg) => (
        <div
          key={`i-${deg}`}
          className="absolute flex h-[54%] w-[54%] items-start justify-center"
          style={{ transform: `rotate(${deg}deg)` }}
        >
          <motion.div
            className="relative h-full w-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-purple-300 shadow-[0_0_14px_3px_rgba(192,132,252,0.95)]" />
          </motion.div>
        </div>
      ))}

      {/* 中心闪电：底层光晕副本 */}
      <motion.div
        className="relative z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center blur-xl opacity-70"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.5, 0.85, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap
            className="h-[clamp(6rem,16vw,10.5rem)] w-[clamp(6rem,16vw,10.5rem)] text-cyan-400"
            fill="currentColor"
            strokeWidth={0}
          />
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            filter:
              "drop-shadow(0 0 14px rgba(0,217,255,0.95)) drop-shadow(0 0 32px rgba(168,85,247,0.55)) drop-shadow(0 0 2px rgba(255,255,255,0.4))",
          }}
        >
          <Zap
            className="relative h-[clamp(6rem,16vw,10.5rem)] w-[clamp(6rem,16vw,10.5rem)] text-cyan-300"
            strokeWidth={1.35}
            fill="url(#hero-zap-fill)"
            stroke="url(#hero-zap-stroke)"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
