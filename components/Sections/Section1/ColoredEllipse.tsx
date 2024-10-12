import React from "react";

export function ColoredEllipse({ className }: { className: string }) {
  return (
    <div className={className}>
      <svg
        width="431"
        height="599"
        viewBox="0 0 431 599"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_499_6833)">
          <ellipse
            cx="240.332"
            cy="299.38"
            rx="152.5"
            ry="233.048"
            transform="rotate(-21.1566 240.332 299.38)"
            fill="url(#paint0_linear_499_6833)"
          />
        </g>
        <defs>
          {/* <filter
            id="filter0_f_499_6833"
            x="0.274704"
            y="0.325485"
            width="480.116"
            height="598.109"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="37.4"
              result="effect1_foregroundBlur_499_6833"
            />
          </filter> */}
          <linearGradient
            id="paint0_linear_499_6833"
            x1="240.332"
            y1="66.332"
            x2="240.332"
            y2="532.428"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A578FF" />
            <stop offset="0.3333" stopColor="#FF83BD" />
            <stop offset="0.6667" stopColor="#FFBA6D" />
            <stop offset="1" stopColor="#FBE9BE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
