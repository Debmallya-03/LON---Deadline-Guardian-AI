"use client";

import { motion } from "framer-motion";

const accents = {
  cyanfire: "bg-cyanfire/15 text-cyanfire ring-cyanfire/25",
  signal: "bg-signal/15 text-signal ring-signal/25",
  ember: "bg-ember/15 text-ember ring-ember/25",
  danger: "bg-danger/15 text-danger ring-danger/25",
  aurora: "bg-aurora/15 text-aurora ring-aurora/25"
};

export default function FeatureCard({ icon: Icon, title, text, accent = "cyanfire" }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      className="glass rounded-lg p-6 transition"
    >
      <div className={`mb-6 grid h-12 w-12 place-items-center rounded-lg ring-1 ${accents[accent] || accents.cyanfire}`}>
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/62">{text}</p>
    </motion.article>
  );
}


