import React from "react";

export function EllipseRight({ className }: { className: string }) {
  return (
    <div className={className}>
      <svg
        width="1120"
        height="1379"
        viewBox="0 0 1120 1379"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="559.975"
          cy="689.067"
          rx="690"
          ry="558.5"
          transform="rotate(-95.3114 559.975 689.067)"
          fill="url(#paint0_linear_495_6792)"
        />
        <ellipse
          cx="559.975"
          cy="689.067"
          rx="690"
          ry="558.5"
          transform="rotate(-95.3114 559.975 689.067)"
          fill="url(#paint1_linear_495_6792)"
          fill-opacity="0.2"
        />
        <path
          d="M496.148 2.52774C802.907 -25.9911 1080.32 258.145 1115.58 637.414C1150.84 1016.68 930.56 1347.09 623.801 1375.61C317.043 1404.13 39.6307 1119.99 4.37069 740.721C-30.8893 361.452 189.39 31.0466 496.148 2.52774Z"
          stroke="url(#paint2_linear_495_6792)"
          stroke-opacity="0.2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_495_6792"
            x1="559.975"
            y1="130.567"
            x2="559.975"
            y2="1247.57"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#000000" />
            <stop offset="1" stop-color="#6F6F6F" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_495_6792"
            x1="611.975"
            y1="130.567"
            x2="559.975"
            y2="727.567"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.5" />
            <stop offset="0.314326" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_495_6792"
            x1="3.87284"
            y1="740.767"
            x2="601.297"
            y2="685.226"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.4" />
            <stop offset="1" stop-color="#999999" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function EllipseLeft({ className }: { className: string }) {
  return (
    <div className={className}>
      <svg
        width="1117"
        height="1380"
        viewBox="0 0 1117 1380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="690"
          cy="558.5"
          rx="690"
          ry="558.5"
          transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 1117 1380)"
          fill="url(#paint0_linear_495_6791)"
        />
        <ellipse
          cx="690"
          cy="558.5"
          rx="690"
          ry="558.5"
          transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 1117 1380)"
          fill="url(#paint1_linear_495_6791)"
          fill-opacity="0.2"
        />
        <path
          d="M558.5 0.500024C250.419 0.500038 0.499953 309.096 0.49997 690C0.499986 1070.9 250.419 1379.5 558.5 1379.5C866.581 1379.5 1116.5 1070.9 1116.5 690C1116.5 309.096 866.581 0.500011 558.5 0.500024Z"
          stroke="url(#paint2_linear_495_6791)"
          stroke-opacity="0.2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_495_6791"
            x1="690"
            y1="0"
            x2="690"
            y2="1117"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#000000" />
            <stop offset="1" stop-color="#6F6F6F" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_495_6791"
            x1="742"
            y1="-2.98234e-06"
            x2="690"
            y2="597"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.5" />
            <stop offset="0.314326" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_495_6791"
            x1="1117"
            y1="690"
            x2="517"
            y2="690"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.4" />
            <stop offset="1" stop-color="#999999" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
