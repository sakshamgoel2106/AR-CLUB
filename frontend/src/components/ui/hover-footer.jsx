import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text,
  duration,
  className





}) => {
  const svgRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (svgRef.current) {
        const svgRect = svgRef.current.getBoundingClientRect();
        const isInside = 
          e.clientX >= svgRect.left && 
          e.clientX <= svgRect.right &&
          e.clientY >= svgRect.top &&
          e.clientY <= svgRect.bottom;
          
        setHovered(isInside);
        
        if (isInside) {
          const cxPercentage = ((e.clientX - svgRect.left) / svgRect.width) * 100;
          const cyPercentage = ((e.clientY - svgRect.top) / svgRect.height) * 100;
          setMaskPosition({
            cx: `${cxPercentage}%`,
            cy: `${cyPercentage}%`
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("select-none uppercase", className)}>
      
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%">
          
          {hovered &&
          <>
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="25%" stopColor="#4ade80" />
              <stop offset="50%" stopColor="#5eead4" />
              <stop offset="75%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#818cf8" />
            </>
          }
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}>
          
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)" />
          
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-700 font-[helvetica] text-7xl font-bold"
        style={{ opacity: hovered ? 0.7 : 0 }}>
        
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-[#22c55e] font-[helvetica] text-7xl font-bold"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000
        }}
        transition={{
          duration: 4,
          ease: "easeInOut"
        }}>
        
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-7xl font-bold">
        
        {text}
      </text>
    </svg>);

};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
        "radial-gradient(125% 125% at 50% 10%, rgba(15, 15, 17, 0.4) 50%, rgba(34, 197, 94, 0.15) 100%)"
      }} />);


};