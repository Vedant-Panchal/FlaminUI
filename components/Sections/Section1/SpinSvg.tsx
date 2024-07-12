import { motion } from 'framer-motion';

export const SpinningSVG = () => (
  <motion.svg
    width="186"
    height="66"
    viewBox="0 0 186 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    animate={{ rotate: 360 }}
    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    className={'blur-sm'}
  >
    <g filter="url(#filter0_f_559_22173)">
      <path d="M93.5389 33.1486L11.2547 90.027L-5.09124 16.4773L93.5389 33.1486Z" fill="url(#paint0_linear_559_22173)"/>
      <path d="M92.3327 33.4167L174.617 -23.4617L190.963 50.088L92.3327 33.4167Z" fill="url(#paint1_linear_559_22173)"/>
    </g>
    <defs>
      <linearGradient id="paint0_linear_559_22173" x1="93.5389" y1="33.1486" x2="-27.0706" y2="59.9534" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A578FF"/>
        <stop offset="0.3333" stopColor="#FF83BD"/>
        <stop offset="0.6667" stopColor="#FFBA6D"/>
        <stop offset="1" stopColor="#FBE9BE"/>
      </linearGradient>
      <linearGradient id="paint1_linear_559_22173" x1="92.3327" y1="33.4167" x2="212.942" y2="6.61192" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A578FF"/>
        <stop offset="0.3333" stopColor="#FF83BD"/>
        <stop offset="0.6667" stopColor="#FFBA6D"/>
        <stop offset="1" stopColor="#FBE9BE"/>
      </linearGradient>
    </defs>
  </motion.svg>
);