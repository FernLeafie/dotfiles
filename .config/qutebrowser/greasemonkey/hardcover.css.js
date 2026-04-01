// ==UserScript==
// @name    Userstyle (hardcover.css)
// @include    https://hardcover.app*
// @include    https://staging.hardcover.app*
// ==/UserScript==
GM_addStyle(`/* ==UserStyle==
@name Hardcover Catppuccin
@namespace github.com/catppuccin/userstyles/styles/hardcover
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/hardcover
@version 2000.01.01
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/hardcover/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Ahardcover
@description Soothing pastel theme for Hardcover
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

:root.dark {
  color-scheme: dark;
  --chart-colorful-1: #89dceb;
  --chart-colorful-2: #89b4fa;
  --chart-colorful-3: #f38ba8;
  --chart-colorful-4: #f9e2af;
  --chart-colorful-5: #a6e3a1;
  --chart-colorful-6: #cba6f7;
  --chart-colorful-7: #f38ba8;
  --chart-colorful-8: #fab387;
  --chart-colorful-9: #94e2d5;
  --chart-mono-10: #cdd6f4;
  --chart-mono-9: #cdd6f4;
  --chart-mono-8: #cdd6f4;
  --chart-mono-7: #cdd6f4;
  --chart-mono-6: #a6adc8;
  --chart-mono-5: #a6adc8;
  --chart-mono-4: #a6adc8;
  --chart-mono-3: #bac2de;
  --chart-mono-2: #bac2de;
  --chart-mono-1: #bac2de;
}
:root.dark ::selection {
  background-color: rgba(203, 166, 247, 0.3);
}
:root.dark input::placeholder,
:root.dark textarea::placeholder {
  color: #a6adc8 !important;
}
:root.dark,
:root.dark body {
  background-color: #1e1e2e !important;
  color: #cdd6f4;
}
:root.dark select,
:root.dark input {
  --tw-ring-color: #cba6f7 !important;
}
:root.dark body {
  --background: #1e1e2e;
  --foreground: #cdd6f4;
  --card: #181825;
  --card-foreground: #cdd6f4;
  --popover: #11111b;
  --popover-foreground: #cdd6f4;
  --secondary: #313244;
  --secondary-foreground: #cdd6f4;
  --tertiary: #313244;
  --tertiary-foreground: #cdd6f4;
  --muted: #313244;
  --muted-foreground: #a6adc8;
  --primary: #cba6f7;
  --primary-foreground: #1e1e2e;
  --accent: #f9e2af;
  --accent-foreground: #1e1e2e;
  --success: #a6e3a1;
  --success-foreground: #1e1e2e;
  --destructive: #f38ba8;
  --destructive-foreground: #1e1e2e;
  --info: #89b4fa;
  --info-foreground: #1e1e2e;
  --border: #313244;
  --input: #181825;
  --ring: #cba6f7;
}
:root.dark .text-black,
:root.dark .text-white,
:root.dark .text-gray-50,
:root.dark .hover\:text-gray-500:hover,
:root.dark .hover\:text-gray-600:hover,
:root.dark .text-gray-800,
:root.dark .text-gray-900,
:root.dark .hover\:text-gray-900:hover,
:root.dark .group:hover .group-hover\:text-gray-900,
:root.dark .text-indigo-200,
:root.dark .text-stone-800 {
  color: #cdd6f4 !important;
}
:root.dark .text-gray-400,
:root.dark .text-gray-500,
:root.dark .text-gray-600,
:root.dark .text-gray-700,
:root.dark .group:hover .group-hover\:text-gray-600,
:root.dark .text-secondary {
  color: #a6adc8 !important;
}
:root.dark .fill-gray-900,
:root.dark .group:hover .group-hover\:fill-gray-900,
:root.dark .hover\:fill-gray-600:hover {
  fill: #cdd6f4 !important;
}
:root.dark .fill-gray-700 {
  fill: #585b70;
}
:root.dark .dark\:bg-gray-700,
:root.dark .bg-gray-100\/40,
:root.dark .bg-smoke-400,
:root.dark .bg-gray-900\/30 {
  background-color: #11111b !important;
}
:root.dark .dark\:bg-gray-800,
:root.dark .bg-gray-800,
:root.dark .dark\:bg-gray-900,
:root.dark .bg-gray-200,
:root.dark .focus\:bg-gray-50:focus,
:root.dark .group-hover\:bg-gray-100:hover,
:root.dark .group:hover .group-hover\:bg-gray-100,
:root.dark .hover\:bg-gray-100:hover,
:root.dark .hover\:bg-gray-50:hover,
:root.dark .hover\:bg-grey-100:hover,
:root.dark .hover\:bg-stone-300:hover,
:root.dark .hover\:bg-gray-300:hover {
  background-color: #181825 !important;
}
:root.dark .md\:bg-white\/70,
:root.dark .bg-white,
:root.dark .dark\:bg-gray-600 {
  background-color: #1e1e2e !important;
}
:root.dark .bg-slate-100,
:root.dark .bg-stone-300,
:root.dark .bg-white\/80,
:root.dark .bg-gray-50,
:root.dark .bg-gray-100,
:root.dark .bg-gray-100\/30,
:root.dark .bg-gray-300\/30,
:root.dark .hover\:bg-gray-200:hover {
  background-color: #313244 !important;
}
:root.dark .bg-gray-300,
:root.dark .bg-gray-400,
:root.dark .bg-gray-600,
:root.dark .hover\:bg-white:hover {
  background-color: #45475a !important;
}
:root.dark .hover\:bg-gray-100:hover {
  border-color: #181825;
}
:root.dark .border-gray-100,
:root.dark .border-gray-200,
:root.dark .border-gray-300,
:root.dark .border-gray-400,
:root.dark .dark\:border-gray-700 {
  border-color: #313244;
}
:root.dark [class*=" border-green"],
:root.dark [class^="border-green"] {
  border-color: #a6e3a1;
}
:root.dark [class*=" text-green"],
:root.dark [class^="text-green"] {
  color: #a6e3a1;
}
:root.dark [class*=" fill-green"],
:root.dark [class^="fill-green"] {
  fill: #a6e3a1;
}
:root.dark [class*=" bg-green"],
:root.dark [class^="bg-green"] {
  background-color: #a6e3a1 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #a6e3a1;
}
:root.dark [class*=" bg-green"] path[stroke="#fff"],
:root.dark [class^="bg-green"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" bg-green"] [class*="text-"],
:root.dark [class^="bg-green"] [class*="text-"],
:root.dark [class*=" bg-green"] [class*="fill-"],
:root.dark [class^="bg-green"] [class*="fill-"],
:root.dark [class*=" bg-green"][class*="text-"],
:root.dark [class^="bg-green"][class*="text-"],
:root.dark [class*=" bg-green"][class*="fill-"],
:root.dark [class^="bg-green"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" hover\:text-green"]:hover,
:root.dark [class^="hover\:text-green"]:hover,
:root.dark .group:hover [class*=" group-hover\:text-green"],
:root.dark .group:hover [class^="group-hover\:text-green"] {
  color: #b9e9b5 !important;
}
:root.dark [class*=" hover\:border-green"]:hover,
:root.dark [class^="hover\:border-green"]:hover,
:root.dark .group:hover [class*=" group-hover\:border-green"],
:root.dark .group:hover [class^="group-hover\:border-green"] {
  border-color: #a6e3a1 !important;
}
:root.dark [class*=" hover\:fill-green"]:hover,
:root.dark [class^="hover\:fill-green"]:hover,
:root.dark .group:hover [class*=" group-hover\:fill-green"],
:root.dark .group:hover [class^="group-hover\:fill-green"] {
  fill: #b9e9b5 !important;
}
:root.dark [class*=" hover\:bg-green"]:hover,
:root.dark [class^="hover\:bg-green"]:hover,
:root.dark .group:hover [class*=" group-hover\:bg-green"],
:root.dark .group:hover [class^="group-hover\:bg-green"] {
  background-color: #a6e3a1 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #a6e3a1;
}
:root.dark [class*=" hover\:bg-green"]:hover path[stroke="#fff"],
:root.dark [class^="hover\:bg-green"]:hover path[stroke="#fff"],
:root.dark .group:hover [class*=" group-hover\:bg-green"] path[stroke="#fff"],
:root.dark .group:hover [class^="group-hover\:bg-green"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" hover\:bg-green"]:hover [class*="text-"],
:root.dark [class^="hover\:bg-green"]:hover [class*="text-"],
:root.dark .group:hover [class*=" group-hover\:bg-green"] [class*="text-"],
:root.dark .group:hover [class^="group-hover\:bg-green"] [class*="text-"],
:root.dark [class*=" hover\:bg-green"]:hover [class*="fill-"],
:root.dark [class^="hover\:bg-green"]:hover [class*="fill-"],
:root.dark .group:hover [class*=" group-hover\:bg-green"] [class*="fill-"],
:root.dark .group:hover [class^="group-hover\:bg-green"] [class*="fill-"],
:root.dark [class*=" hover\:bg-green"]:hover[class*="text-"],
:root.dark [class^="hover\:bg-green"]:hover[class*="text-"],
:root.dark .group:hover [class*=" group-hover\:bg-green"][class*="text-"],
:root.dark .group:hover [class^="group-hover\:bg-green"][class*="text-"],
:root.dark [class*=" hover\:bg-green"]:hover[class*="fill-"],
:root.dark [class^="hover\:bg-green"]:hover[class*="fill-"],
:root.dark .group:hover [class*=" group-hover\:bg-green"][class*="fill-"],
:root.dark .group:hover [class^="group-hover\:bg-green"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" focus\:text-green"]:focus,
:root.dark [class^="focus\:text-green"]:focus,
:root.dark .group:focus [class*=" group-focus\:text-green"],
:root.dark .group:focus [class^="group-focus\:text-green"] {
  color: #b9e9b5 !important;
}
:root.dark [class*=" focus\:border-green"]:focus,
:root.dark [class^="focus\:border-green"]:focus,
:root.dark .group:focus [class*=" group-focus\:border-green"],
:root.dark .group:focus [class^="group-focus\:border-green"] {
  border-color: #a6e3a1 !important;
}
:root.dark [class*=" focus\:fill-green"]:focus,
:root.dark [class^="focus\:fill-green"]:focus,
:root.dark .group:focus [class*=" group-focus\:fill-green"],
:root.dark .group:focus [class^="group-focus\:fill-green"] {
  fill: #b9e9b5 !important;
}
:root.dark [class*=" focus\:bg-green"]:focus,
:root.dark [class^="focus\:bg-green"]:focus,
:root.dark .group:focus [class*=" group-focus\:bg-green"],
:root.dark .group:focus [class^="group-focus\:bg-green"] {
  background-color: #a6e3a1 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #a6e3a1;
}
:root.dark [class*=" focus\:bg-green"]:focus path[stroke="#fff"],
:root.dark [class^="focus\:bg-green"]:focus path[stroke="#fff"],
:root.dark .group:focus [class*=" group-focus\:bg-green"] path[stroke="#fff"],
:root.dark .group:focus [class^="group-focus\:bg-green"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" focus\:bg-green"]:focus [class*="text-"],
:root.dark [class^="focus\:bg-green"]:focus [class*="text-"],
:root.dark .group:focus [class*=" group-focus\:bg-green"] [class*="text-"],
:root.dark .group:focus [class^="group-focus\:bg-green"] [class*="text-"],
:root.dark [class*=" focus\:bg-green"]:focus [class*="fill-"],
:root.dark [class^="focus\:bg-green"]:focus [class*="fill-"],
:root.dark .group:focus [class*=" group-focus\:bg-green"] [class*="fill-"],
:root.dark .group:focus [class^="group-focus\:bg-green"] [class*="fill-"],
:root.dark [class*=" focus\:bg-green"]:focus[class*="text-"],
:root.dark [class^="focus\:bg-green"]:focus[class*="text-"],
:root.dark .group:focus [class*=" group-focus\:bg-green"][class*="text-"],
:root.dark .group:focus [class^="group-focus\:bg-green"][class*="text-"],
:root.dark [class*=" focus\:bg-green"]:focus[class*="fill-"],
:root.dark [class^="focus\:bg-green"]:focus[class*="fill-"],
:root.dark .group:focus [class*=" group-focus\:bg-green"][class*="fill-"],
:root.dark .group:focus [class^="group-focus\:bg-green"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" border-red"],
:root.dark [class^="border-red"] {
  border-color: #f38ba8;
}
:root.dark [class*=" text-red"],
:root.dark [class^="text-red"] {
  color: #f38ba8;
}
:root.dark [class*=" fill-red"],
:root.dark [class^="fill-red"] {
  fill: #f38ba8;
}
:root.dark [class*=" bg-red"],
:root.dark [class^="bg-red"] {
  background-color: #f38ba8 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f38ba8;
}
:root.dark [class*=" bg-red"] path[stroke="#fff"],
:root.dark [class^="bg-red"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" bg-red"] [class*="text-"],
:root.dark [class^="bg-red"] [class*="text-"],
:root.dark [class*=" bg-red"] [class*="fill-"],
:root.dark [class^="bg-red"] [class*="fill-"],
:root.dark [class*=" bg-red"][class*="text-"],
:root.dark [class^="bg-red"][class*="text-"],
:root.dark [class*=" bg-red"][class*="fill-"],
:root.dark [class^="bg-red"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" hover\:text-red"]:hover,
:root.dark [class^="hover\:text-red"]:hover,
:root.dark .group:hover [class*=" group-hover\:text-red"],
:root.dark .group:hover [class^="group-hover\:text-red"] {
  color: #f5a2b9 !important;
}
:root.dark [class*=" hover\:border-red"]:hover,
:root.dark [class^="hover\:border-red"]:hover,
:root.dark .group:hover [class*=" group-hover\:border-red"],
:root.dark .group:hover [class^="group-hover\:border-red"] {
  border-color: #f38ba8 !important;
}
:root.dark [class*=" hover\:fill-red"]:hover,
:root.dark [class^="hover\:fill-red"]:hover,
:root.dark .group:hover [class*=" group-hover\:fill-red"],
:root.dark .group:hover [class^="group-hover\:fill-red"] {
  fill: #f5a2b9 !important;
}
:root.dark [class*=" hover\:bg-red"]:hover,
:root.dark [class^="hover\:bg-red"]:hover,
:root.dark .group:hover [class*=" group-hover\:bg-red"],
:root.dark .group:hover [class^="group-hover\:bg-red"] {
  background-color: #f38ba8 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f38ba8;
}
:root.dark [class*=" hover\:bg-red"]:hover path[stroke="#fff"],
:root.dark [class^="hover\:bg-red"]:hover path[stroke="#fff"],
:root.dark .group:hover [class*=" group-hover\:bg-red"] path[stroke="#fff"],
:root.dark .group:hover [class^="group-hover\:bg-red"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" hover\:bg-red"]:hover [class*="text-"],
:root.dark [class^="hover\:bg-red"]:hover [class*="text-"],
:root.dark .group:hover [class*=" group-hover\:bg-red"] [class*="text-"],
:root.dark .group:hover [class^="group-hover\:bg-red"] [class*="text-"],
:root.dark [class*=" hover\:bg-red"]:hover [class*="fill-"],
:root.dark [class^="hover\:bg-red"]:hover [class*="fill-"],
:root.dark .group:hover [class*=" group-hover\:bg-red"] [class*="fill-"],
:root.dark .group:hover [class^="group-hover\:bg-red"] [class*="fill-"],
:root.dark [class*=" hover\:bg-red"]:hover[class*="text-"],
:root.dark [class^="hover\:bg-red"]:hover[class*="text-"],
:root.dark .group:hover [class*=" group-hover\:bg-red"][class*="text-"],
:root.dark .group:hover [class^="group-hover\:bg-red"][class*="text-"],
:root.dark [class*=" hover\:bg-red"]:hover[class*="fill-"],
:root.dark [class^="hover\:bg-red"]:hover[class*="fill-"],
:root.dark .group:hover [class*=" group-hover\:bg-red"][class*="fill-"],
:root.dark .group:hover [class^="group-hover\:bg-red"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" focus\:text-red"]:focus,
:root.dark [class^="focus\:text-red"]:focus,
:root.dark .group:focus [class*=" group-focus\:text-red"],
:root.dark .group:focus [class^="group-focus\:text-red"] {
  color: #f5a2b9 !important;
}
:root.dark [class*=" focus\:border-red"]:focus,
:root.dark [class^="focus\:border-red"]:focus,
:root.dark .group:focus [class*=" group-focus\:border-red"],
:root.dark .group:focus [class^="group-focus\:border-red"] {
  border-color: #f38ba8 !important;
}
:root.dark [class*=" focus\:fill-red"]:focus,
:root.dark [class^="focus\:fill-red"]:focus,
:root.dark .group:focus [class*=" group-focus\:fill-red"],
:root.dark .group:focus [class^="group-focus\:fill-red"] {
  fill: #f5a2b9 !important;
}
:root.dark [class*=" focus\:bg-red"]:focus,
:root.dark [class^="focus\:bg-red"]:focus,
:root.dark .group:focus [class*=" group-focus\:bg-red"],
:root.dark .group:focus [class^="group-focus\:bg-red"] {
  background-color: #f38ba8 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f38ba8;
}
:root.dark [class*=" focus\:bg-red"]:focus path[stroke="#fff"],
:root.dark [class^="focus\:bg-red"]:focus path[stroke="#fff"],
:root.dark .group:focus [class*=" group-focus\:bg-red"] path[stroke="#fff"],
:root.dark .group:focus [class^="group-focus\:bg-red"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" focus\:bg-red"]:focus [class*="text-"],
:root.dark [class^="focus\:bg-red"]:focus [class*="text-"],
:root.dark .group:focus [class*=" group-focus\:bg-red"] [class*="text-"],
:root.dark .group:focus [class^="group-focus\:bg-red"] [class*="text-"],
:root.dark [class*=" focus\:bg-red"]:focus [class*="fill-"],
:root.dark [class^="focus\:bg-red"]:focus [class*="fill-"],
:root.dark .group:focus [class*=" group-focus\:bg-red"] [class*="fill-"],
:root.dark .group:focus [class^="group-focus\:bg-red"] [class*="fill-"],
:root.dark [class*=" focus\:bg-red"]:focus[class*="text-"],
:root.dark [class^="focus\:bg-red"]:focus[class*="text-"],
:root.dark .group:focus [class*=" group-focus\:bg-red"][class*="text-"],
:root.dark .group:focus [class^="group-focus\:bg-red"][class*="text-"],
:root.dark [class*=" focus\:bg-red"]:focus[class*="fill-"],
:root.dark [class^="focus\:bg-red"]:focus[class*="fill-"],
:root.dark .group:focus [class*=" group-focus\:bg-red"][class*="fill-"],
:root.dark .group:focus [class^="group-focus\:bg-red"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" border-yellow"],
:root.dark [class^="border-yellow"] {
  border-color: #f9e2af;
}
:root.dark [class*=" text-yellow"],
:root.dark [class^="text-yellow"] {
  color: #f9e2af;
}
:root.dark [class*=" fill-yellow"],
:root.dark [class^="fill-yellow"] {
  fill: #f9e2af;
}
:root.dark [class*=" bg-yellow"],
:root.dark [class^="bg-yellow"] {
  background-color: #f9e2af !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f9e2af;
}
:root.dark [class*=" bg-yellow"] path[stroke="#fff"],
:root.dark [class^="bg-yellow"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" bg-yellow"] [class*="text-"],
:root.dark [class^="bg-yellow"] [class*="text-"],
:root.dark [class*=" bg-yellow"] [class*="fill-"],
:root.dark [class^="bg-yellow"] [class*="fill-"],
:root.dark [class*=" bg-yellow"][class*="text-"],
:root.dark [class^="bg-yellow"][class*="text-"],
:root.dark [class*=" bg-yellow"][class*="fill-"],
:root.dark [class^="bg-yellow"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" hover\:text-yellow"]:hover,
:root.dark [class^="hover\:text-yellow"]:hover,
:root.dark .group:hover [class*=" group-hover\:text-yellow"],
:root.dark .group:hover [class^="group-hover\:text-yellow"] {
  color: #fbebc7 !important;
}
:root.dark [class*=" hover\:border-yellow"]:hover,
:root.dark [class^="hover\:border-yellow"]:hover,
:root.dark .group:hover [class*=" group-hover\:border-yellow"],
:root.dark .group:hover [class^="group-hover\:border-yellow"] {
  border-color: #f9e2af !important;
}
:root.dark [class*=" hover\:fill-yellow"]:hover,
:root.dark [class^="hover\:fill-yellow"]:hover,
:root.dark .group:hover [class*=" group-hover\:fill-yellow"],
:root.dark .group:hover [class^="group-hover\:fill-yellow"] {
  fill: #fbebc7 !important;
}
:root.dark [class*=" hover\:bg-yellow"]:hover,
:root.dark [class^="hover\:bg-yellow"]:hover,
:root.dark .group:hover [class*=" group-hover\:bg-yellow"],
:root.dark .group:hover [class^="group-hover\:bg-yellow"] {
  background-color: #f9e2af !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f9e2af;
}
:root.dark [class*=" hover\:bg-yellow"]:hover path[stroke="#fff"],
:root.dark [class^="hover\:bg-yellow"]:hover path[stroke="#fff"],
:root.dark .group:hover [class*=" group-hover\:bg-yellow"] path[stroke="#fff"],
:root.dark .group:hover [class^="group-hover\:bg-yellow"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" hover\:bg-yellow"]:hover [class*="text-"],
:root.dark [class^="hover\:bg-yellow"]:hover [class*="text-"],
:root.dark .group:hover [class*=" group-hover\:bg-yellow"] [class*="text-"],
:root.dark .group:hover [class^="group-hover\:bg-yellow"] [class*="text-"],
:root.dark [class*=" hover\:bg-yellow"]:hover [class*="fill-"],
:root.dark [class^="hover\:bg-yellow"]:hover [class*="fill-"],
:root.dark .group:hover [class*=" group-hover\:bg-yellow"] [class*="fill-"],
:root.dark .group:hover [class^="group-hover\:bg-yellow"] [class*="fill-"],
:root.dark [class*=" hover\:bg-yellow"]:hover[class*="text-"],
:root.dark [class^="hover\:bg-yellow"]:hover[class*="text-"],
:root.dark .group:hover [class*=" group-hover\:bg-yellow"][class*="text-"],
:root.dark .group:hover [class^="group-hover\:bg-yellow"][class*="text-"],
:root.dark [class*=" hover\:bg-yellow"]:hover[class*="fill-"],
:root.dark [class^="hover\:bg-yellow"]:hover[class*="fill-"],
:root.dark .group:hover [class*=" group-hover\:bg-yellow"][class*="fill-"],
:root.dark .group:hover [class^="group-hover\:bg-yellow"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" focus\:text-yellow"]:focus,
:root.dark [class^="focus\:text-yellow"]:focus,
:root.dark .group:focus [class*=" group-focus\:text-yellow"],
:root.dark .group:focus [class^="group-focus\:text-yellow"] {
  color: #fbebc7 !important;
}
:root.dark [class*=" focus\:border-yellow"]:focus,
:root.dark [class^="focus\:border-yellow"]:focus,
:root.dark .group:focus [class*=" group-focus\:border-yellow"],
:root.dark .group:focus [class^="group-focus\:border-yellow"] {
  border-color: #f9e2af !important;
}
:root.dark [class*=" focus\:fill-yellow"]:focus,
:root.dark [class^="focus\:fill-yellow"]:focus,
:root.dark .group:focus [class*=" group-focus\:fill-yellow"],
:root.dark .group:focus [class^="group-focus\:fill-yellow"] {
  fill: #fbebc7 !important;
}
:root.dark [class*=" focus\:bg-yellow"]:focus,
:root.dark [class^="focus\:bg-yellow"]:focus,
:root.dark .group:focus [class*=" group-focus\:bg-yellow"],
:root.dark .group:focus [class^="group-focus\:bg-yellow"] {
  background-color: #f9e2af !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f9e2af;
}
:root.dark [class*=" focus\:bg-yellow"]:focus path[stroke="#fff"],
:root.dark [class^="focus\:bg-yellow"]:focus path[stroke="#fff"],
:root.dark .group:focus [class*=" group-focus\:bg-yellow"] path[stroke="#fff"],
:root.dark .group:focus [class^="group-focus\:bg-yellow"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" focus\:bg-yellow"]:focus [class*="text-"],
:root.dark [class^="focus\:bg-yellow"]:focus [class*="text-"],
:root.dark .group:focus [class*=" group-focus\:bg-yellow"] [class*="text-"],
:root.dark .group:focus [class^="group-focus\:bg-yellow"] [class*="text-"],
:root.dark [class*=" focus\:bg-yellow"]:focus [class*="fill-"],
:root.dark [class^="focus\:bg-yellow"]:focus [class*="fill-"],
:root.dark .group:focus [class*=" group-focus\:bg-yellow"] [class*="fill-"],
:root.dark .group:focus [class^="group-focus\:bg-yellow"] [class*="fill-"],
:root.dark [class*=" focus\:bg-yellow"]:focus[class*="text-"],
:root.dark [class^="focus\:bg-yellow"]:focus[class*="text-"],
:root.dark .group:focus [class*=" group-focus\:bg-yellow"][class*="text-"],
:root.dark .group:focus [class^="group-focus\:bg-yellow"][class*="text-"],
:root.dark [class*=" focus\:bg-yellow"]:focus[class*="fill-"],
:root.dark [class^="focus\:bg-yellow"]:focus[class*="fill-"],
:root.dark .group:focus [class*=" group-focus\:bg-yellow"][class*="fill-"],
:root.dark .group:focus [class^="group-focus\:bg-yellow"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" border-amber"],
:root.dark [class^="border-amber"] {
  border-color: #f9e2af;
}
:root.dark [class*=" text-amber"],
:root.dark [class^="text-amber"] {
  color: #f9e2af;
}
:root.dark [class*=" fill-amber"],
:root.dark [class^="fill-amber"] {
  fill: #f9e2af;
}
:root.dark [class*=" bg-amber"],
:root.dark [class^="bg-amber"] {
  background-color: #f9e2af !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f9e2af;
}
:root.dark [class*=" bg-amber"] path[stroke="#fff"],
:root.dark [class^="bg-amber"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" bg-amber"] [class*="text-"],
:root.dark [class^="bg-amber"] [class*="text-"],
:root.dark [class*=" bg-amber"] [class*="fill-"],
:root.dark [class^="bg-amber"] [class*="fill-"],
:root.dark [class*=" bg-amber"][class*="text-"],
:root.dark [class^="bg-amber"][class*="text-"],
:root.dark [class*=" bg-amber"][class*="fill-"],
:root.dark [class^="bg-amber"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" hover\:text-amber"]:hover,
:root.dark [class^="hover\:text-amber"]:hover,
:root.dark .group:hover [class*=" group-hover\:text-amber"],
:root.dark .group:hover [class^="group-hover\:text-amber"] {
  color: #fbebc7 !important;
}
:root.dark [class*=" hover\:border-amber"]:hover,
:root.dark [class^="hover\:border-amber"]:hover,
:root.dark .group:hover [class*=" group-hover\:border-amber"],
:root.dark .group:hover [class^="group-hover\:border-amber"] {
  border-color: #f9e2af !important;
}
:root.dark [class*=" hover\:fill-amber"]:hover,
:root.dark [class^="hover\:fill-amber"]:hover,
:root.dark .group:hover [class*=" group-hover\:fill-amber"],
:root.dark .group:hover [class^="group-hover\:fill-amber"] {
  fill: #fbebc7 !important;
}
:root.dark [class*=" hover\:bg-amber"]:hover,
:root.dark [class^="hover\:bg-amber"]:hover,
:root.dark .group:hover [class*=" group-hover\:bg-amber"],
:root.dark .group:hover [class^="group-hover\:bg-amber"] {
  background-color: #f9e2af !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f9e2af;
}
:root.dark [class*=" hover\:bg-amber"]:hover path[stroke="#fff"],
:root.dark [class^="hover\:bg-amber"]:hover path[stroke="#fff"],
:root.dark .group:hover [class*=" group-hover\:bg-amber"] path[stroke="#fff"],
:root.dark .group:hover [class^="group-hover\:bg-amber"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" hover\:bg-amber"]:hover [class*="text-"],
:root.dark [class^="hover\:bg-amber"]:hover [class*="text-"],
:root.dark .group:hover [class*=" group-hover\:bg-amber"] [class*="text-"],
:root.dark .group:hover [class^="group-hover\:bg-amber"] [class*="text-"],
:root.dark [class*=" hover\:bg-amber"]:hover [class*="fill-"],
:root.dark [class^="hover\:bg-amber"]:hover [class*="fill-"],
:root.dark .group:hover [class*=" group-hover\:bg-amber"] [class*="fill-"],
:root.dark .group:hover [class^="group-hover\:bg-amber"] [class*="fill-"],
:root.dark [class*=" hover\:bg-amber"]:hover[class*="text-"],
:root.dark [class^="hover\:bg-amber"]:hover[class*="text-"],
:root.dark .group:hover [class*=" group-hover\:bg-amber"][class*="text-"],
:root.dark .group:hover [class^="group-hover\:bg-amber"][class*="text-"],
:root.dark [class*=" hover\:bg-amber"]:hover[class*="fill-"],
:root.dark [class^="hover\:bg-amber"]:hover[class*="fill-"],
:root.dark .group:hover [class*=" group-hover\:bg-amber"][class*="fill-"],
:root.dark .group:hover [class^="group-hover\:bg-amber"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" focus\:text-amber"]:focus,
:root.dark [class^="focus\:text-amber"]:focus,
:root.dark .group:focus [class*=" group-focus\:text-amber"],
:root.dark .group:focus [class^="group-focus\:text-amber"] {
  color: #fbebc7 !important;
}
:root.dark [class*=" focus\:border-amber"]:focus,
:root.dark [class^="focus\:border-amber"]:focus,
:root.dark .group:focus [class*=" group-focus\:border-amber"],
:root.dark .group:focus [class^="group-focus\:border-amber"] {
  border-color: #f9e2af !important;
}
:root.dark [class*=" focus\:fill-amber"]:focus,
:root.dark [class^="focus\:fill-amber"]:focus,
:root.dark .group:focus [class*=" group-focus\:fill-amber"],
:root.dark .group:focus [class^="group-focus\:fill-amber"] {
  fill: #fbebc7 !important;
}
:root.dark [class*=" focus\:bg-amber"]:focus,
:root.dark [class^="focus\:bg-amber"]:focus,
:root.dark .group:focus [class*=" group-focus\:bg-amber"],
:root.dark .group:focus [class^="group-focus\:bg-amber"] {
  background-color: #f9e2af !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f9e2af;
}
:root.dark [class*=" focus\:bg-amber"]:focus path[stroke="#fff"],
:root.dark [class^="focus\:bg-amber"]:focus path[stroke="#fff"],
:root.dark .group:focus [class*=" group-focus\:bg-amber"] path[stroke="#fff"],
:root.dark .group:focus [class^="group-focus\:bg-amber"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" focus\:bg-amber"]:focus [class*="text-"],
:root.dark [class^="focus\:bg-amber"]:focus [class*="text-"],
:root.dark .group:focus [class*=" group-focus\:bg-amber"] [class*="text-"],
:root.dark .group:focus [class^="group-focus\:bg-amber"] [class*="text-"],
:root.dark [class*=" focus\:bg-amber"]:focus [class*="fill-"],
:root.dark [class^="focus\:bg-amber"]:focus [class*="fill-"],
:root.dark .group:focus [class*=" group-focus\:bg-amber"] [class*="fill-"],
:root.dark .group:focus [class^="group-focus\:bg-amber"] [class*="fill-"],
:root.dark [class*=" focus\:bg-amber"]:focus[class*="text-"],
:root.dark [class^="focus\:bg-amber"]:focus[class*="text-"],
:root.dark .group:focus [class*=" group-focus\:bg-amber"][class*="text-"],
:root.dark .group:focus [class^="group-focus\:bg-amber"][class*="text-"],
:root.dark [class*=" focus\:bg-amber"]:focus[class*="fill-"],
:root.dark [class^="focus\:bg-amber"]:focus[class*="fill-"],
:root.dark .group:focus [class*=" group-focus\:bg-amber"][class*="fill-"],
:root.dark .group:focus [class^="group-focus\:bg-amber"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" border-blue"],
:root.dark [class^="border-blue"] {
  border-color: #89b4fa;
}
:root.dark [class*=" text-blue"],
:root.dark [class^="text-blue"] {
  color: #89b4fa;
}
:root.dark [class*=" fill-blue"],
:root.dark [class^="fill-blue"] {
  fill: #89b4fa;
}
:root.dark [class*=" bg-blue"],
:root.dark [class^="bg-blue"] {
  background-color: #89b4fa !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #89b4fa;
}
:root.dark [class*=" bg-blue"] path[stroke="#fff"],
:root.dark [class^="bg-blue"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" bg-blue"] [class*="text-"],
:root.dark [class^="bg-blue"] [class*="text-"],
:root.dark [class*=" bg-blue"] [class*="fill-"],
:root.dark [class^="bg-blue"] [class*="fill-"],
:root.dark [class*=" bg-blue"][class*="text-"],
:root.dark [class^="bg-blue"][class*="text-"],
:root.dark [class*=" bg-blue"][class*="fill-"],
:root.dark [class^="bg-blue"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" hover\:text-blue"]:hover,
:root.dark [class^="hover\:text-blue"]:hover,
:root.dark .group:hover [class*=" group-hover\:text-blue"],
:root.dark .group:hover [class^="group-hover\:text-blue"] {
  color: #a1c4fb !important;
}
:root.dark [class*=" hover\:border-blue"]:hover,
:root.dark [class^="hover\:border-blue"]:hover,
:root.dark .group:hover [class*=" group-hover\:border-blue"],
:root.dark .group:hover [class^="group-hover\:border-blue"] {
  border-color: #89b4fa !important;
}
:root.dark [class*=" hover\:fill-blue"]:hover,
:root.dark [class^="hover\:fill-blue"]:hover,
:root.dark .group:hover [class*=" group-hover\:fill-blue"],
:root.dark .group:hover [class^="group-hover\:fill-blue"] {
  fill: #a1c4fb !important;
}
:root.dark [class*=" hover\:bg-blue"]:hover,
:root.dark [class^="hover\:bg-blue"]:hover,
:root.dark .group:hover [class*=" group-hover\:bg-blue"],
:root.dark .group:hover [class^="group-hover\:bg-blue"] {
  background-color: #89b4fa !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #89b4fa;
}
:root.dark [class*=" hover\:bg-blue"]:hover path[stroke="#fff"],
:root.dark [class^="hover\:bg-blue"]:hover path[stroke="#fff"],
:root.dark .group:hover [class*=" group-hover\:bg-blue"] path[stroke="#fff"],
:root.dark .group:hover [class^="group-hover\:bg-blue"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" hover\:bg-blue"]:hover [class*="text-"],
:root.dark [class^="hover\:bg-blue"]:hover [class*="text-"],
:root.dark .group:hover [class*=" group-hover\:bg-blue"] [class*="text-"],
:root.dark .group:hover [class^="group-hover\:bg-blue"] [class*="text-"],
:root.dark [class*=" hover\:bg-blue"]:hover [class*="fill-"],
:root.dark [class^="hover\:bg-blue"]:hover [class*="fill-"],
:root.dark .group:hover [class*=" group-hover\:bg-blue"] [class*="fill-"],
:root.dark .group:hover [class^="group-hover\:bg-blue"] [class*="fill-"],
:root.dark [class*=" hover\:bg-blue"]:hover[class*="text-"],
:root.dark [class^="hover\:bg-blue"]:hover[class*="text-"],
:root.dark .group:hover [class*=" group-hover\:bg-blue"][class*="text-"],
:root.dark .group:hover [class^="group-hover\:bg-blue"][class*="text-"],
:root.dark [class*=" hover\:bg-blue"]:hover[class*="fill-"],
:root.dark [class^="hover\:bg-blue"]:hover[class*="fill-"],
:root.dark .group:hover [class*=" group-hover\:bg-blue"][class*="fill-"],
:root.dark .group:hover [class^="group-hover\:bg-blue"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" focus\:text-blue"]:focus,
:root.dark [class^="focus\:text-blue"]:focus,
:root.dark .group:focus [class*=" group-focus\:text-blue"],
:root.dark .group:focus [class^="group-focus\:text-blue"] {
  color: #a1c4fb !important;
}
:root.dark [class*=" focus\:border-blue"]:focus,
:root.dark [class^="focus\:border-blue"]:focus,
:root.dark .group:focus [class*=" group-focus\:border-blue"],
:root.dark .group:focus [class^="group-focus\:border-blue"] {
  border-color: #89b4fa !important;
}
:root.dark [class*=" focus\:fill-blue"]:focus,
:root.dark [class^="focus\:fill-blue"]:focus,
:root.dark .group:focus [class*=" group-focus\:fill-blue"],
:root.dark .group:focus [class^="group-focus\:fill-blue"] {
  fill: #a1c4fb !important;
}
:root.dark [class*=" focus\:bg-blue"]:focus,
:root.dark [class^="focus\:bg-blue"]:focus,
:root.dark .group:focus [class*=" group-focus\:bg-blue"],
:root.dark .group:focus [class^="group-focus\:bg-blue"] {
  background-color: #89b4fa !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #89b4fa;
}
:root.dark [class*=" focus\:bg-blue"]:focus path[stroke="#fff"],
:root.dark [class^="focus\:bg-blue"]:focus path[stroke="#fff"],
:root.dark .group:focus [class*=" group-focus\:bg-blue"] path[stroke="#fff"],
:root.dark .group:focus [class^="group-focus\:bg-blue"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" focus\:bg-blue"]:focus [class*="text-"],
:root.dark [class^="focus\:bg-blue"]:focus [class*="text-"],
:root.dark .group:focus [class*=" group-focus\:bg-blue"] [class*="text-"],
:root.dark .group:focus [class^="group-focus\:bg-blue"] [class*="text-"],
:root.dark [class*=" focus\:bg-blue"]:focus [class*="fill-"],
:root.dark [class^="focus\:bg-blue"]:focus [class*="fill-"],
:root.dark .group:focus [class*=" group-focus\:bg-blue"] [class*="fill-"],
:root.dark .group:focus [class^="group-focus\:bg-blue"] [class*="fill-"],
:root.dark [class*=" focus\:bg-blue"]:focus[class*="text-"],
:root.dark [class^="focus\:bg-blue"]:focus[class*="text-"],
:root.dark .group:focus [class*=" group-focus\:bg-blue"][class*="text-"],
:root.dark .group:focus [class^="group-focus\:bg-blue"][class*="text-"],
:root.dark [class*=" focus\:bg-blue"]:focus[class*="fill-"],
:root.dark [class^="focus\:bg-blue"]:focus[class*="fill-"],
:root.dark .group:focus [class*=" group-focus\:bg-blue"][class*="fill-"],
:root.dark .group:focus [class^="group-focus\:bg-blue"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" border-orange"],
:root.dark [class^="border-orange"] {
  border-color: #fab387;
}
:root.dark [class*=" text-orange"],
:root.dark [class^="text-orange"] {
  color: #fab387;
}
:root.dark [class*=" fill-orange"],
:root.dark [class^="fill-orange"] {
  fill: #fab387;
}
:root.dark [class*=" bg-orange"],
:root.dark [class^="bg-orange"] {
  background-color: #fab387 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #fab387;
}
:root.dark [class*=" bg-orange"] path[stroke="#fff"],
:root.dark [class^="bg-orange"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" bg-orange"] [class*="text-"],
:root.dark [class^="bg-orange"] [class*="text-"],
:root.dark [class*=" bg-orange"] [class*="fill-"],
:root.dark [class^="bg-orange"] [class*="fill-"],
:root.dark [class*=" bg-orange"][class*="text-"],
:root.dark [class^="bg-orange"][class*="text-"],
:root.dark [class*=" bg-orange"][class*="fill-"],
:root.dark [class^="bg-orange"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" hover\:text-orange"]:hover,
:root.dark [class^="hover\:text-orange"]:hover,
:root.dark .group:hover [class*=" group-hover\:text-orange"],
:root.dark .group:hover [class^="group-hover\:text-orange"] {
  color: #fbc39f !important;
}
:root.dark [class*=" hover\:border-orange"]:hover,
:root.dark [class^="hover\:border-orange"]:hover,
:root.dark .group:hover [class*=" group-hover\:border-orange"],
:root.dark .group:hover [class^="group-hover\:border-orange"] {
  border-color: #fab387 !important;
}
:root.dark [class*=" hover\:fill-orange"]:hover,
:root.dark [class^="hover\:fill-orange"]:hover,
:root.dark .group:hover [class*=" group-hover\:fill-orange"],
:root.dark .group:hover [class^="group-hover\:fill-orange"] {
  fill: #fbc39f !important;
}
:root.dark [class*=" hover\:bg-orange"]:hover,
:root.dark [class^="hover\:bg-orange"]:hover,
:root.dark .group:hover [class*=" group-hover\:bg-orange"],
:root.dark .group:hover [class^="group-hover\:bg-orange"] {
  background-color: #fab387 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #fab387;
}
:root.dark [class*=" hover\:bg-orange"]:hover path[stroke="#fff"],
:root.dark [class^="hover\:bg-orange"]:hover path[stroke="#fff"],
:root.dark .group:hover [class*=" group-hover\:bg-orange"] path[stroke="#fff"],
:root.dark .group:hover [class^="group-hover\:bg-orange"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" hover\:bg-orange"]:hover [class*="text-"],
:root.dark [class^="hover\:bg-orange"]:hover [class*="text-"],
:root.dark .group:hover [class*=" group-hover\:bg-orange"] [class*="text-"],
:root.dark .group:hover [class^="group-hover\:bg-orange"] [class*="text-"],
:root.dark [class*=" hover\:bg-orange"]:hover [class*="fill-"],
:root.dark [class^="hover\:bg-orange"]:hover [class*="fill-"],
:root.dark .group:hover [class*=" group-hover\:bg-orange"] [class*="fill-"],
:root.dark .group:hover [class^="group-hover\:bg-orange"] [class*="fill-"],
:root.dark [class*=" hover\:bg-orange"]:hover[class*="text-"],
:root.dark [class^="hover\:bg-orange"]:hover[class*="text-"],
:root.dark .group:hover [class*=" group-hover\:bg-orange"][class*="text-"],
:root.dark .group:hover [class^="group-hover\:bg-orange"][class*="text-"],
:root.dark [class*=" hover\:bg-orange"]:hover[class*="fill-"],
:root.dark [class^="hover\:bg-orange"]:hover[class*="fill-"],
:root.dark .group:hover [class*=" group-hover\:bg-orange"][class*="fill-"],
:root.dark .group:hover [class^="group-hover\:bg-orange"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" focus\:text-orange"]:focus,
:root.dark [class^="focus\:text-orange"]:focus,
:root.dark .group:focus [class*=" group-focus\:text-orange"],
:root.dark .group:focus [class^="group-focus\:text-orange"] {
  color: #fbc39f !important;
}
:root.dark [class*=" focus\:border-orange"]:focus,
:root.dark [class^="focus\:border-orange"]:focus,
:root.dark .group:focus [class*=" group-focus\:border-orange"],
:root.dark .group:focus [class^="group-focus\:border-orange"] {
  border-color: #fab387 !important;
}
:root.dark [class*=" focus\:fill-orange"]:focus,
:root.dark [class^="focus\:fill-orange"]:focus,
:root.dark .group:focus [class*=" group-focus\:fill-orange"],
:root.dark .group:focus [class^="group-focus\:fill-orange"] {
  fill: #fbc39f !important;
}
:root.dark [class*=" focus\:bg-orange"]:focus,
:root.dark [class^="focus\:bg-orange"]:focus,
:root.dark .group:focus [class*=" group-focus\:bg-orange"],
:root.dark .group:focus [class^="group-focus\:bg-orange"] {
  background-color: #fab387 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #fab387;
}
:root.dark [class*=" focus\:bg-orange"]:focus path[stroke="#fff"],
:root.dark [class^="focus\:bg-orange"]:focus path[stroke="#fff"],
:root.dark .group:focus [class*=" group-focus\:bg-orange"] path[stroke="#fff"],
:root.dark .group:focus [class^="group-focus\:bg-orange"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" focus\:bg-orange"]:focus [class*="text-"],
:root.dark [class^="focus\:bg-orange"]:focus [class*="text-"],
:root.dark .group:focus [class*=" group-focus\:bg-orange"] [class*="text-"],
:root.dark .group:focus [class^="group-focus\:bg-orange"] [class*="text-"],
:root.dark [class*=" focus\:bg-orange"]:focus [class*="fill-"],
:root.dark [class^="focus\:bg-orange"]:focus [class*="fill-"],
:root.dark .group:focus [class*=" group-focus\:bg-orange"] [class*="fill-"],
:root.dark .group:focus [class^="group-focus\:bg-orange"] [class*="fill-"],
:root.dark [class*=" focus\:bg-orange"]:focus[class*="text-"],
:root.dark [class^="focus\:bg-orange"]:focus[class*="text-"],
:root.dark .group:focus [class*=" group-focus\:bg-orange"][class*="text-"],
:root.dark .group:focus [class^="group-focus\:bg-orange"][class*="text-"],
:root.dark [class*=" focus\:bg-orange"]:focus[class*="fill-"],
:root.dark [class^="focus\:bg-orange"]:focus[class*="fill-"],
:root.dark .group:focus [class*=" group-focus\:bg-orange"][class*="fill-"],
:root.dark .group:focus [class^="group-focus\:bg-orange"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" border-indigo"],
:root.dark [class^="border-indigo"] {
  border-color: #cba6f7;
}
:root.dark [class*=" text-indigo"],
:root.dark [class^="text-indigo"] {
  color: #cba6f7;
}
:root.dark [class*=" fill-indigo"],
:root.dark [class^="fill-indigo"] {
  fill: #cba6f7;
}
:root.dark [class*=" bg-indigo"],
:root.dark [class^="bg-indigo"] {
  background-color: #cba6f7 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #cba6f7;
}
:root.dark [class*=" bg-indigo"] path[stroke="#fff"],
:root.dark [class^="bg-indigo"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" bg-indigo"] [class*="text-"],
:root.dark [class^="bg-indigo"] [class*="text-"],
:root.dark [class*=" bg-indigo"] [class*="fill-"],
:root.dark [class^="bg-indigo"] [class*="fill-"],
:root.dark [class*=" bg-indigo"][class*="text-"],
:root.dark [class^="bg-indigo"][class*="text-"],
:root.dark [class*=" bg-indigo"][class*="fill-"],
:root.dark [class^="bg-indigo"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" hover\:text-indigo"]:hover,
:root.dark [class^="hover\:text-indigo"]:hover,
:root.dark .group:hover [class*=" group-hover\:text-indigo"],
:root.dark .group:hover [class^="group-hover\:text-indigo"] {
  color: #d9bdf9 !important;
}
:root.dark [class*=" hover\:border-indigo"]:hover,
:root.dark [class^="hover\:border-indigo"]:hover,
:root.dark .group:hover [class*=" group-hover\:border-indigo"],
:root.dark .group:hover [class^="group-hover\:border-indigo"] {
  border-color: #cba6f7 !important;
}
:root.dark [class*=" hover\:fill-indigo"]:hover,
:root.dark [class^="hover\:fill-indigo"]:hover,
:root.dark .group:hover [class*=" group-hover\:fill-indigo"],
:root.dark .group:hover [class^="group-hover\:fill-indigo"] {
  fill: #d9bdf9 !important;
}
:root.dark [class*=" hover\:bg-indigo"]:hover,
:root.dark [class^="hover\:bg-indigo"]:hover,
:root.dark .group:hover [class*=" group-hover\:bg-indigo"],
:root.dark .group:hover [class^="group-hover\:bg-indigo"] {
  background-color: #cba6f7 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #cba6f7;
}
:root.dark [class*=" hover\:bg-indigo"]:hover path[stroke="#fff"],
:root.dark [class^="hover\:bg-indigo"]:hover path[stroke="#fff"],
:root.dark .group:hover [class*=" group-hover\:bg-indigo"] path[stroke="#fff"],
:root.dark .group:hover [class^="group-hover\:bg-indigo"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" hover\:bg-indigo"]:hover [class*="text-"],
:root.dark [class^="hover\:bg-indigo"]:hover [class*="text-"],
:root.dark .group:hover [class*=" group-hover\:bg-indigo"] [class*="text-"],
:root.dark .group:hover [class^="group-hover\:bg-indigo"] [class*="text-"],
:root.dark [class*=" hover\:bg-indigo"]:hover [class*="fill-"],
:root.dark [class^="hover\:bg-indigo"]:hover [class*="fill-"],
:root.dark .group:hover [class*=" group-hover\:bg-indigo"] [class*="fill-"],
:root.dark .group:hover [class^="group-hover\:bg-indigo"] [class*="fill-"],
:root.dark [class*=" hover\:bg-indigo"]:hover[class*="text-"],
:root.dark [class^="hover\:bg-indigo"]:hover[class*="text-"],
:root.dark .group:hover [class*=" group-hover\:bg-indigo"][class*="text-"],
:root.dark .group:hover [class^="group-hover\:bg-indigo"][class*="text-"],
:root.dark [class*=" hover\:bg-indigo"]:hover[class*="fill-"],
:root.dark [class^="hover\:bg-indigo"]:hover[class*="fill-"],
:root.dark .group:hover [class*=" group-hover\:bg-indigo"][class*="fill-"],
:root.dark .group:hover [class^="group-hover\:bg-indigo"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" focus\:text-indigo"]:focus,
:root.dark [class^="focus\:text-indigo"]:focus,
:root.dark .group:focus [class*=" group-focus\:text-indigo"],
:root.dark .group:focus [class^="group-focus\:text-indigo"] {
  color: #d9bdf9 !important;
}
:root.dark [class*=" focus\:border-indigo"]:focus,
:root.dark [class^="focus\:border-indigo"]:focus,
:root.dark .group:focus [class*=" group-focus\:border-indigo"],
:root.dark .group:focus [class^="group-focus\:border-indigo"] {
  border-color: #cba6f7 !important;
}
:root.dark [class*=" focus\:fill-indigo"]:focus,
:root.dark [class^="focus\:fill-indigo"]:focus,
:root.dark .group:focus [class*=" group-focus\:fill-indigo"],
:root.dark .group:focus [class^="group-focus\:fill-indigo"] {
  fill: #d9bdf9 !important;
}
:root.dark [class*=" focus\:bg-indigo"]:focus,
:root.dark [class^="focus\:bg-indigo"]:focus,
:root.dark .group:focus [class*=" group-focus\:bg-indigo"],
:root.dark .group:focus [class^="group-focus\:bg-indigo"] {
  background-color: #cba6f7 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #cba6f7;
}
:root.dark [class*=" focus\:bg-indigo"]:focus path[stroke="#fff"],
:root.dark [class^="focus\:bg-indigo"]:focus path[stroke="#fff"],
:root.dark .group:focus [class*=" group-focus\:bg-indigo"] path[stroke="#fff"],
:root.dark .group:focus [class^="group-focus\:bg-indigo"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" focus\:bg-indigo"]:focus [class*="text-"],
:root.dark [class^="focus\:bg-indigo"]:focus [class*="text-"],
:root.dark .group:focus [class*=" group-focus\:bg-indigo"] [class*="text-"],
:root.dark .group:focus [class^="group-focus\:bg-indigo"] [class*="text-"],
:root.dark [class*=" focus\:bg-indigo"]:focus [class*="fill-"],
:root.dark [class^="focus\:bg-indigo"]:focus [class*="fill-"],
:root.dark .group:focus [class*=" group-focus\:bg-indigo"] [class*="fill-"],
:root.dark .group:focus [class^="group-focus\:bg-indigo"] [class*="fill-"],
:root.dark [class*=" focus\:bg-indigo"]:focus[class*="text-"],
:root.dark [class^="focus\:bg-indigo"]:focus[class*="text-"],
:root.dark .group:focus [class*=" group-focus\:bg-indigo"][class*="text-"],
:root.dark .group:focus [class^="group-focus\:bg-indigo"][class*="text-"],
:root.dark [class*=" focus\:bg-indigo"]:focus[class*="fill-"],
:root.dark [class^="focus\:bg-indigo"]:focus[class*="fill-"],
:root.dark .group:focus [class*=" group-focus\:bg-indigo"][class*="fill-"],
:root.dark .group:focus [class^="group-focus\:bg-indigo"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" border-accent"],
:root.dark [class^="border-accent"] {
  border-color: #cba6f7;
}
:root.dark [class*=" text-accent"],
:root.dark [class^="text-accent"] {
  color: #cba6f7;
}
:root.dark [class*=" fill-accent"],
:root.dark [class^="fill-accent"] {
  fill: #cba6f7;
}
:root.dark [class*=" bg-accent"],
:root.dark [class^="bg-accent"] {
  background-color: #cba6f7 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #cba6f7;
}
:root.dark [class*=" bg-accent"] path[stroke="#fff"],
:root.dark [class^="bg-accent"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" bg-accent"] [class*="text-"],
:root.dark [class^="bg-accent"] [class*="text-"],
:root.dark [class*=" bg-accent"] [class*="fill-"],
:root.dark [class^="bg-accent"] [class*="fill-"],
:root.dark [class*=" bg-accent"][class*="text-"],
:root.dark [class^="bg-accent"][class*="text-"],
:root.dark [class*=" bg-accent"][class*="fill-"],
:root.dark [class^="bg-accent"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" hover\:text-accent"]:hover,
:root.dark [class^="hover\:text-accent"]:hover,
:root.dark .group:hover [class*=" group-hover\:text-accent"],
:root.dark .group:hover [class^="group-hover\:text-accent"] {
  color: #d9bdf9 !important;
}
:root.dark [class*=" hover\:border-accent"]:hover,
:root.dark [class^="hover\:border-accent"]:hover,
:root.dark .group:hover [class*=" group-hover\:border-accent"],
:root.dark .group:hover [class^="group-hover\:border-accent"] {
  border-color: #cba6f7 !important;
}
:root.dark [class*=" hover\:fill-accent"]:hover,
:root.dark [class^="hover\:fill-accent"]:hover,
:root.dark .group:hover [class*=" group-hover\:fill-accent"],
:root.dark .group:hover [class^="group-hover\:fill-accent"] {
  fill: #d9bdf9 !important;
}
:root.dark [class*=" hover\:bg-accent"]:hover,
:root.dark [class^="hover\:bg-accent"]:hover,
:root.dark .group:hover [class*=" group-hover\:bg-accent"],
:root.dark .group:hover [class^="group-hover\:bg-accent"] {
  background-color: #cba6f7 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #cba6f7;
}
:root.dark [class*=" hover\:bg-accent"]:hover path[stroke="#fff"],
:root.dark [class^="hover\:bg-accent"]:hover path[stroke="#fff"],
:root.dark .group:hover [class*=" group-hover\:bg-accent"] path[stroke="#fff"],
:root.dark .group:hover [class^="group-hover\:bg-accent"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" hover\:bg-accent"]:hover [class*="text-"],
:root.dark [class^="hover\:bg-accent"]:hover [class*="text-"],
:root.dark .group:hover [class*=" group-hover\:bg-accent"] [class*="text-"],
:root.dark .group:hover [class^="group-hover\:bg-accent"] [class*="text-"],
:root.dark [class*=" hover\:bg-accent"]:hover [class*="fill-"],
:root.dark [class^="hover\:bg-accent"]:hover [class*="fill-"],
:root.dark .group:hover [class*=" group-hover\:bg-accent"] [class*="fill-"],
:root.dark .group:hover [class^="group-hover\:bg-accent"] [class*="fill-"],
:root.dark [class*=" hover\:bg-accent"]:hover[class*="text-"],
:root.dark [class^="hover\:bg-accent"]:hover[class*="text-"],
:root.dark .group:hover [class*=" group-hover\:bg-accent"][class*="text-"],
:root.dark .group:hover [class^="group-hover\:bg-accent"][class*="text-"],
:root.dark [class*=" hover\:bg-accent"]:hover[class*="fill-"],
:root.dark [class^="hover\:bg-accent"]:hover[class*="fill-"],
:root.dark .group:hover [class*=" group-hover\:bg-accent"][class*="fill-"],
:root.dark .group:hover [class^="group-hover\:bg-accent"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark [class*=" focus\:text-accent"]:focus,
:root.dark [class^="focus\:text-accent"]:focus,
:root.dark .group:focus [class*=" group-focus\:text-accent"],
:root.dark .group:focus [class^="group-focus\:text-accent"] {
  color: #d9bdf9 !important;
}
:root.dark [class*=" focus\:border-accent"]:focus,
:root.dark [class^="focus\:border-accent"]:focus,
:root.dark .group:focus [class*=" group-focus\:border-accent"],
:root.dark .group:focus [class^="group-focus\:border-accent"] {
  border-color: #cba6f7 !important;
}
:root.dark [class*=" focus\:fill-accent"]:focus,
:root.dark [class^="focus\:fill-accent"]:focus,
:root.dark .group:focus [class*=" group-focus\:fill-accent"],
:root.dark .group:focus [class^="group-focus\:fill-accent"] {
  fill: #d9bdf9 !important;
}
:root.dark [class*=" focus\:bg-accent"]:focus,
:root.dark [class^="focus\:bg-accent"]:focus,
:root.dark .group:focus [class*=" group-focus\:bg-accent"],
:root.dark .group:focus [class^="group-focus\:bg-accent"] {
  background-color: #cba6f7 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #cba6f7;
}
:root.dark [class*=" focus\:bg-accent"]:focus path[stroke="#fff"],
:root.dark [class^="focus\:bg-accent"]:focus path[stroke="#fff"],
:root.dark .group:focus [class*=" group-focus\:bg-accent"] path[stroke="#fff"],
:root.dark .group:focus [class^="group-focus\:bg-accent"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark [class*=" focus\:bg-accent"]:focus [class*="text-"],
:root.dark [class^="focus\:bg-accent"]:focus [class*="text-"],
:root.dark .group:focus [class*=" group-focus\:bg-accent"] [class*="text-"],
:root.dark .group:focus [class^="group-focus\:bg-accent"] [class*="text-"],
:root.dark [class*=" focus\:bg-accent"]:focus [class*="fill-"],
:root.dark [class^="focus\:bg-accent"]:focus [class*="fill-"],
:root.dark .group:focus [class*=" group-focus\:bg-accent"] [class*="fill-"],
:root.dark .group:focus [class^="group-focus\:bg-accent"] [class*="fill-"],
:root.dark [class*=" focus\:bg-accent"]:focus[class*="text-"],
:root.dark [class^="focus\:bg-accent"]:focus[class*="text-"],
:root.dark .group:focus [class*=" group-focus\:bg-accent"][class*="text-"],
:root.dark .group:focus [class^="group-focus\:bg-accent"][class*="text-"],
:root.dark [class*=" focus\:bg-accent"]:focus[class*="fill-"],
:root.dark [class^="focus\:bg-accent"]:focus[class*="fill-"],
:root.dark .group:focus [class*=" group-focus\:bg-accent"][class*="fill-"],
:root.dark .group:focus [class^="group-focus\:bg-accent"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark .bg-primary {
  background-color: #cba6f7 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #cba6f7;
}
:root.dark .bg-primary path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark .bg-primary [class*="text-"],
:root.dark .bg-primary [class*="fill-"],
:root.dark .bg-primary[class*="text-"],
:root.dark .bg-primary[class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark .bg-accent {
  background-color: #cba6f7 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #cba6f7;
}
:root.dark .bg-accent path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark .bg-accent [class*="text-"],
:root.dark .bg-accent [class*="fill-"],
:root.dark .bg-accent[class*="text-"],
:root.dark .bg-accent[class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark .bg-destructive {
  background-color: #f38ba8 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f38ba8;
}
:root.dark .bg-destructive path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark .bg-destructive [class*="text-"],
:root.dark .bg-destructive [class*="fill-"],
:root.dark .bg-destructive[class*="text-"],
:root.dark .bg-destructive[class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark .bg-info {
  background-color: #89b4fa !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #89b4fa;
}
:root.dark .bg-info path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark .bg-info [class*="text-"],
:root.dark .bg-info [class*="fill-"],
:root.dark .bg-info[class*="text-"],
:root.dark .bg-info[class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark .bg-success {
  background-color: #a6e3a1 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #a6e3a1;
}
:root.dark .bg-success path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark .bg-success [class*="text-"],
:root.dark .bg-success [class*="fill-"],
:root.dark .bg-success[class*="text-"],
:root.dark .bg-success[class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark .text-yellow-900 {
  color: #1e1e2e;
}
:root.dark .border-orange-800 {
  border-color: #fab387;
}
:root.dark .hover\:bg-gray-700:hover {
  background-color: #cba6f7 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #cba6f7;
}
:root.dark .hover\:bg-gray-700:hover path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark .hover\:bg-gray-700:hover [class*="text-"],
:root.dark .hover\:bg-gray-700:hover [class*="fill-"],
:root.dark .hover\:bg-gray-700:hover[class*="text-"],
:root.dark .hover\:bg-gray-700:hover[class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark .hover\:bg-indigo-700:hover {
  background-color: #d9bdf9 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #d9bdf9;
}
:root.dark .hover\:bg-indigo-700:hover path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark .hover\:bg-indigo-700:hover [class*="text-"],
:root.dark .hover\:bg-indigo-700:hover [class*="fill-"],
:root.dark .hover\:bg-indigo-700:hover[class*="text-"],
:root.dark .hover\:bg-indigo-700:hover[class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark .bg-indigo-500,
:root.dark .hover\:bg-yellow-500:hover {
  background-color: #e6d5fb !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #e6d5fb;
}
:root.dark .bg-indigo-500 path[stroke="#fff"],
:root.dark .hover\:bg-yellow-500:hover path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root.dark .bg-indigo-500 [class*="text-"],
:root.dark .hover\:bg-yellow-500:hover [class*="text-"],
:root.dark .bg-indigo-500 [class*="fill-"],
:root.dark .hover\:bg-yellow-500:hover [class*="fill-"],
:root.dark .bg-indigo-500[class*="text-"],
:root.dark .hover\:bg-yellow-500:hover[class*="text-"],
:root.dark .bg-indigo-500[class*="fill-"],
:root.dark .hover\:bg-yellow-500:hover[class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark .dark\:fill-gray-300 {
  fill: #cdd6f4;
}
:root.dark .dark\:text-gray-300 {
  color: #cdd6f4;
}
:root.dark .bg-white.text-black {
  color: #cdd6f4 !important;
}
:root.dark .bg-black\/30.backdrop-brightness-50 {
  backdrop-filter: none;
  background-color: #11111b;
}
:root.dark .focus\:ring-indigo-500,
:root.dark .hover\:ring-white:hover,
:root.dark .ring-accent,
:root.dark .focus\:ring-primary,
:root.dark .focus\:ring-ring:focus {
  --tw-ring-color: #cba6f7;
}
:root.dark .ring-secondary,
:root.dark .focus\:ring-gray-200 {
  --tw-ring-color: #181825;
}
:root.dark .ring-card {
  --tw-ring-color: #11111b;
}
:root.dark .ring-gray-200 {
  --tw-ring-color: #313244;
}
:root.dark .divide-secondary > :not(:last-child),
:root.dark .divide-gray-200 > :not(:last-child),
:root.dark .divide-gray-100 > :not(:last-child) {
  border-color: #313244 !important;
}
:root.dark .decoration-gray-300 {
  text-decoration-color: #6c7086;
}
:root.dark .decoration-accent\/50 {
  text-decoration-color: #cba6f7;
}
:root.dark .to-white.bg-gradient-to-b {
  background-image: linear-gradient(to bottom, #11111b 28%, transparent 50%, #1e1e2e 100%);
}
:root.dark .via-70\%.to-white.bg-gradient-to-b {
  background-image: linear-gradient(to bottom, transparent 50%, #1e1e2e 100%);
  background-color: transparent;
}
:root.dark .bg-gradient-to-b.from-transparent.to-gray-100 {
  background-image: linear-gradient(to bottom, transparent 50%, #11111b 100%);
  background-color: transparent;
}
:root.dark .to-white.from-transparent {
  background-image: linear-gradient(to bottom, transparent 50%, #1e1e2e 100%);
  background-color: transparent;
}
:root.dark .to-background {
  --tw-gradient-to: #1e1e2e var(--tw-gradient-to-position) !important;
}
:root.dark .from-indigo-700.to-indigo-900 {
  background-image: none;
  background-color: #cba6f7;
}
:root.dark .from-indigo-700.to-indigo-900 p,
:root.dark .from-indigo-700.to-indigo-900 div,
:root.dark .from-indigo-700.to-indigo-900 .text-indigo-400,
:root.dark .from-indigo-700.to-indigo-900 .fill-indigo-400 {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root.dark .from-indigo-700.to-indigo-900 svg.animate-reversespin {
  fill: initial;
}
:root.dark .to-gray-200 {
  --tw-gradient-to: #313244;
}
:root.dark .fill-white {
  fill: #1e1e2e;
}
:root.dark .dark\:text-white {
  color: #cdd6f4;
}
:root.dark .stroke-gray-200 {
  stroke: #313244;
}
:root.dark .text-accent[fill="currentColor"] {
  fill: #f9e2af;
}
:root.dark .dark\:bg-gray-900 > div > svg {
  fill: #cdd6f4;
}
:root.dark [fill="#4F46E5"],
:root.dark [fill="#4338CA"] {
  fill: #cba6f7;
}
:root.dark [fill="#6366F1"] {
  fill: #d9bdf9;
}
:root.dark [fill="#EEF2FF"],
:root.dark [fill="#312E81"] {
  fill: #11111b;
}
:root.dark [fill="#A5B4FC"],
:root.dark [fill="#F9FAFB"],
:root.dark [fill="white"] {
  fill: #cdd6f4;
}
:root.dark [fill="#C7D2FE"] {
  fill: #bac2de;
}
:root.dark [stroke="#6366F1"] {
  stroke: #bd8ff5;
}
:root.dark [fill="url(#paint0_linear_4558_14242)"] {
  fill: #cba6f7;
}
:root.dark [fill="url(#paint1_linear_4558_14242)"] {
  fill: #b077f3;
}
:root.dark [fill="#0F0E26"],
:root.dark [fill="#78350F"] {
  fill: #11111b;
}
:root.dark [fill="#FBBF24"],
:root.dark [fill="url(#paint2_linear_4558_14242)"],
:root.dark [fill="url(#paint3_linear_4558_14242)"],
:root.dark [fill="url(#paint4_linear_4558_14242)"],
:root.dark [fill="url(#paint5_linear_4558_14242)"] {
  fill: #f9e2af;
}
:root.dark [fill="#818CF8"] {
  fill: #e6d5fb;
}
:root.dark [fill="#facc15"] {
  fill: #f9e2af;
}
:root.dark [fill="#6b7280"] {
  fill: #45475a;
}
:root.dark [fill="#111827"][stroke="#374151"],
:root.dark [fill="#111827"] {
  fill: #181825;
  stroke: #181825;
}
:root.dark [fill="#FFFFFF"] {
  fill: #181825;
}
:root.dark [stroke="#E5E7EB"] {
  stroke: #181825;
}
:root.dark [fill="#d30001"] {
  fill: #cba6f7;
}
:root.dark [fill="#4B5563"] {
  fill: #313244;
}
:root.dark [fill="#9CA3AF"],
:root.dark [fill="#374151"] {
  fill: #45475a;
}
:root.dark [fill="#6B7280"] {
  fill: #585b70;
}
:root.dark [stroke="#6B7280"],
:root.dark [stroke="#374151"],
:root.dark [stroke="#4B5563"] {
  stroke: #585b70;
}
:root.dark [fill="#F3F4F6"],
:root.dark [fill="#FFFBEB"],
:root.dark [fill="#fff"] {
  fill: #cdd6f4;
}
:root.dark [fill="#1F2937"] {
  fill: #1e1e2e;
}
:root.dark [fill="#3730A3"] {
  fill: #bd8ff5;
}
:root.dark [fill="url(#paint1_linear_15306_236)"] {
  fill: #181825;
}
:root.dark .prose {
  color: #cdd6f4;
}
:root.dark .prose strong {
  color: #cdd6f4;
}
:root.dark .prose :where(a):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: #cba6f7;
  text-decoration-color: rgba(203, 166, 247, 0.3);
}
:root.dark .prose hr {
  border-color: #cdd6f4;
}
:root.dark #tooltip.react-tooltip {
  background-color: #cba6f7 !important;
  border-color: #cba6f7 !important;
  color: #1e1e2e !important;
}
:root.dark #tooltip.react-tooltip span,
:root.dark #tooltip.react-tooltip a,
:root.dark #tooltip.react-tooltip h1,
:root.dark #tooltip.react-tooltip h2,
:root.dark #tooltip.react-tooltip div {
  color: #1e1e2e !important;
}
:root.dark .md\:bg-transparent {
  background: rgba(30, 30, 46, 0.5) !important;
}
:root.dark .shadow-button {
  box-shadow: none;
}
:root.dark input.bg-background,
:root.dark textarea.bg-background {
  background-color: #11111b;
}
:root.dark .form-radio,
:root.dark [type="radio"] {
  background-color: #11111b;
  --tw-ring-offset-color: #cba6f7;
}
:root.dark .form-radio:checked,
:root.dark [type="radio"]:checked {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22%231e1e2e%22%20viewBox%3D%220%200%2016%2016%22%3E%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%223%22/%3E%3C/svg%3E");
  background-color: #cba6f7;
}
:root.dark .form-checkbox,
:root.dark [type="checkbox"] {
  background-color: #11111b;
  --tw-ring-offset-color: #cba6f7;
}
:root.dark .form-checkbox:checked,
:root.dark [type="checkbox"]:checked {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22%231e1e2e%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M12.207%204.793a1%201%200%200%201%200%201.414l-5%205a1%201%200%200%201-1.414%200l-2-2a1%201%200%200%201%201.414-1.414L6.5%209.086l4.293-4.293a1%201%200%200%201%201.414%200%22/%3E%3C/svg%3E");
  background-color: #cba6f7;
}
:root.dark main > .from-transparent.to-gray-100 {
  --tw-gradient-to: #11111b !important;
  --tw-gradient-from: #181825 !important;
}
:root.dark a[href^="/account"] {
  border-color: #6c7086;
}
:root.dark .bg-\[rgba\(255\,255\,255\,0\.7\)\] {
  background-color: rgba(30, 30, 46, 0.7);
}
:root.dark :where([data-close-button]) {
  background-color: #f38ba8 !important;
  color: #1e1e2e !important;
  border-color: #f38ba8;
}
:root.dark div[id*="headlessui-menu-item-"] {
  border-color: #313244;
}
@property --tw-ring-offset-color {
  syntax: "*";
  initial-value: #313244;
  inherits: false;
}
:root {
  color-scheme: dark;
  --chart-colorful-1: #89dceb;
  --chart-colorful-2: #89b4fa;
  --chart-colorful-3: #f38ba8;
  --chart-colorful-4: #f9e2af;
  --chart-colorful-5: #a6e3a1;
  --chart-colorful-6: #cba6f7;
  --chart-colorful-7: #f38ba8;
  --chart-colorful-8: #fab387;
  --chart-colorful-9: #94e2d5;
  --chart-mono-10: #cdd6f4;
  --chart-mono-9: #cdd6f4;
  --chart-mono-8: #cdd6f4;
  --chart-mono-7: #cdd6f4;
  --chart-mono-6: #a6adc8;
  --chart-mono-5: #a6adc8;
  --chart-mono-4: #a6adc8;
  --chart-mono-3: #bac2de;
  --chart-mono-2: #bac2de;
  --chart-mono-1: #bac2de;
}
:root ::selection {
  background-color: rgba(203, 166, 247, 0.3);
}
:root input::placeholder,
:root textarea::placeholder {
  color: #a6adc8 !important;
}
:root,
:root body {
  background-color: #1e1e2e !important;
  color: #cdd6f4;
}
:root select,
:root input {
  --tw-ring-color: #cba6f7 !important;
}
:root body {
  --background: #1e1e2e;
  --foreground: #cdd6f4;
  --card: #181825;
  --card-foreground: #cdd6f4;
  --popover: #11111b;
  --popover-foreground: #cdd6f4;
  --secondary: #313244;
  --secondary-foreground: #cdd6f4;
  --tertiary: #313244;
  --tertiary-foreground: #cdd6f4;
  --muted: #313244;
  --muted-foreground: #a6adc8;
  --primary: #cba6f7;
  --primary-foreground: #1e1e2e;
  --accent: #f9e2af;
  --accent-foreground: #1e1e2e;
  --success: #a6e3a1;
  --success-foreground: #1e1e2e;
  --destructive: #f38ba8;
  --destructive-foreground: #1e1e2e;
  --info: #89b4fa;
  --info-foreground: #1e1e2e;
  --border: #313244;
  --input: #181825;
  --ring: #cba6f7;
}
:root .text-black,
:root .text-white,
:root .text-gray-50,
:root .hover\:text-gray-500:hover,
:root .hover\:text-gray-600:hover,
:root .text-gray-800,
:root .text-gray-900,
:root .hover\:text-gray-900:hover,
:root .group:hover .group-hover\:text-gray-900,
:root .text-indigo-200,
:root .text-stone-800 {
  color: #cdd6f4 !important;
}
:root .text-gray-400,
:root .text-gray-500,
:root .text-gray-600,
:root .text-gray-700,
:root .group:hover .group-hover\:text-gray-600,
:root .text-secondary {
  color: #a6adc8 !important;
}
:root .fill-gray-900,
:root .group:hover .group-hover\:fill-gray-900,
:root .hover\:fill-gray-600:hover {
  fill: #cdd6f4 !important;
}
:root .fill-gray-700 {
  fill: #585b70;
}
:root .dark\:bg-gray-700,
:root .bg-gray-100\/40,
:root .bg-smoke-400,
:root .bg-gray-900\/30 {
  background-color: #11111b !important;
}
:root .dark\:bg-gray-800,
:root .bg-gray-800,
:root .dark\:bg-gray-900,
:root .bg-gray-200,
:root .focus\:bg-gray-50:focus,
:root .group-hover\:bg-gray-100:hover,
:root .group:hover .group-hover\:bg-gray-100,
:root .hover\:bg-gray-100:hover,
:root .hover\:bg-gray-50:hover,
:root .hover\:bg-grey-100:hover,
:root .hover\:bg-stone-300:hover,
:root .hover\:bg-gray-300:hover {
  background-color: #181825 !important;
}
:root .md\:bg-white\/70,
:root .bg-white,
:root .dark\:bg-gray-600 {
  background-color: #1e1e2e !important;
}
:root .bg-slate-100,
:root .bg-stone-300,
:root .bg-white\/80,
:root .bg-gray-50,
:root .bg-gray-100,
:root .bg-gray-100\/30,
:root .bg-gray-300\/30,
:root .hover\:bg-gray-200:hover {
  background-color: #313244 !important;
}
:root .bg-gray-300,
:root .bg-gray-400,
:root .bg-gray-600,
:root .hover\:bg-white:hover {
  background-color: #45475a !important;
}
:root .hover\:bg-gray-100:hover {
  border-color: #181825;
}
:root .border-gray-100,
:root .border-gray-200,
:root .border-gray-300,
:root .border-gray-400,
:root .dark\:border-gray-700 {
  border-color: #313244;
}
:root [class*=" border-green"],
:root [class^="border-green"] {
  border-color: #a6e3a1;
}
:root [class*=" text-green"],
:root [class^="text-green"] {
  color: #a6e3a1;
}
:root [class*=" fill-green"],
:root [class^="fill-green"] {
  fill: #a6e3a1;
}
:root [class*=" bg-green"],
:root [class^="bg-green"] {
  background-color: #a6e3a1 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #a6e3a1;
}
:root [class*=" bg-green"] path[stroke="#fff"],
:root [class^="bg-green"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" bg-green"] [class*="text-"],
:root [class^="bg-green"] [class*="text-"],
:root [class*=" bg-green"] [class*="fill-"],
:root [class^="bg-green"] [class*="fill-"],
:root [class*=" bg-green"][class*="text-"],
:root [class^="bg-green"][class*="text-"],
:root [class*=" bg-green"][class*="fill-"],
:root [class^="bg-green"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" hover\:text-green"]:hover,
:root [class^="hover\:text-green"]:hover,
:root .group:hover [class*=" group-hover\:text-green"],
:root .group:hover [class^="group-hover\:text-green"] {
  color: #b9e9b5 !important;
}
:root [class*=" hover\:border-green"]:hover,
:root [class^="hover\:border-green"]:hover,
:root .group:hover [class*=" group-hover\:border-green"],
:root .group:hover [class^="group-hover\:border-green"] {
  border-color: #a6e3a1 !important;
}
:root [class*=" hover\:fill-green"]:hover,
:root [class^="hover\:fill-green"]:hover,
:root .group:hover [class*=" group-hover\:fill-green"],
:root .group:hover [class^="group-hover\:fill-green"] {
  fill: #b9e9b5 !important;
}
:root [class*=" hover\:bg-green"]:hover,
:root [class^="hover\:bg-green"]:hover,
:root .group:hover [class*=" group-hover\:bg-green"],
:root .group:hover [class^="group-hover\:bg-green"] {
  background-color: #a6e3a1 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #a6e3a1;
}
:root [class*=" hover\:bg-green"]:hover path[stroke="#fff"],
:root [class^="hover\:bg-green"]:hover path[stroke="#fff"],
:root .group:hover [class*=" group-hover\:bg-green"] path[stroke="#fff"],
:root .group:hover [class^="group-hover\:bg-green"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" hover\:bg-green"]:hover [class*="text-"],
:root [class^="hover\:bg-green"]:hover [class*="text-"],
:root .group:hover [class*=" group-hover\:bg-green"] [class*="text-"],
:root .group:hover [class^="group-hover\:bg-green"] [class*="text-"],
:root [class*=" hover\:bg-green"]:hover [class*="fill-"],
:root [class^="hover\:bg-green"]:hover [class*="fill-"],
:root .group:hover [class*=" group-hover\:bg-green"] [class*="fill-"],
:root .group:hover [class^="group-hover\:bg-green"] [class*="fill-"],
:root [class*=" hover\:bg-green"]:hover[class*="text-"],
:root [class^="hover\:bg-green"]:hover[class*="text-"],
:root .group:hover [class*=" group-hover\:bg-green"][class*="text-"],
:root .group:hover [class^="group-hover\:bg-green"][class*="text-"],
:root [class*=" hover\:bg-green"]:hover[class*="fill-"],
:root [class^="hover\:bg-green"]:hover[class*="fill-"],
:root .group:hover [class*=" group-hover\:bg-green"][class*="fill-"],
:root .group:hover [class^="group-hover\:bg-green"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" focus\:text-green"]:focus,
:root [class^="focus\:text-green"]:focus,
:root .group:focus [class*=" group-focus\:text-green"],
:root .group:focus [class^="group-focus\:text-green"] {
  color: #b9e9b5 !important;
}
:root [class*=" focus\:border-green"]:focus,
:root [class^="focus\:border-green"]:focus,
:root .group:focus [class*=" group-focus\:border-green"],
:root .group:focus [class^="group-focus\:border-green"] {
  border-color: #a6e3a1 !important;
}
:root [class*=" focus\:fill-green"]:focus,
:root [class^="focus\:fill-green"]:focus,
:root .group:focus [class*=" group-focus\:fill-green"],
:root .group:focus [class^="group-focus\:fill-green"] {
  fill: #b9e9b5 !important;
}
:root [class*=" focus\:bg-green"]:focus,
:root [class^="focus\:bg-green"]:focus,
:root .group:focus [class*=" group-focus\:bg-green"],
:root .group:focus [class^="group-focus\:bg-green"] {
  background-color: #a6e3a1 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #a6e3a1;
}
:root [class*=" focus\:bg-green"]:focus path[stroke="#fff"],
:root [class^="focus\:bg-green"]:focus path[stroke="#fff"],
:root .group:focus [class*=" group-focus\:bg-green"] path[stroke="#fff"],
:root .group:focus [class^="group-focus\:bg-green"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" focus\:bg-green"]:focus [class*="text-"],
:root [class^="focus\:bg-green"]:focus [class*="text-"],
:root .group:focus [class*=" group-focus\:bg-green"] [class*="text-"],
:root .group:focus [class^="group-focus\:bg-green"] [class*="text-"],
:root [class*=" focus\:bg-green"]:focus [class*="fill-"],
:root [class^="focus\:bg-green"]:focus [class*="fill-"],
:root .group:focus [class*=" group-focus\:bg-green"] [class*="fill-"],
:root .group:focus [class^="group-focus\:bg-green"] [class*="fill-"],
:root [class*=" focus\:bg-green"]:focus[class*="text-"],
:root [class^="focus\:bg-green"]:focus[class*="text-"],
:root .group:focus [class*=" group-focus\:bg-green"][class*="text-"],
:root .group:focus [class^="group-focus\:bg-green"][class*="text-"],
:root [class*=" focus\:bg-green"]:focus[class*="fill-"],
:root [class^="focus\:bg-green"]:focus[class*="fill-"],
:root .group:focus [class*=" group-focus\:bg-green"][class*="fill-"],
:root .group:focus [class^="group-focus\:bg-green"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" border-red"],
:root [class^="border-red"] {
  border-color: #f38ba8;
}
:root [class*=" text-red"],
:root [class^="text-red"] {
  color: #f38ba8;
}
:root [class*=" fill-red"],
:root [class^="fill-red"] {
  fill: #f38ba8;
}
:root [class*=" bg-red"],
:root [class^="bg-red"] {
  background-color: #f38ba8 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f38ba8;
}
:root [class*=" bg-red"] path[stroke="#fff"],
:root [class^="bg-red"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" bg-red"] [class*="text-"],
:root [class^="bg-red"] [class*="text-"],
:root [class*=" bg-red"] [class*="fill-"],
:root [class^="bg-red"] [class*="fill-"],
:root [class*=" bg-red"][class*="text-"],
:root [class^="bg-red"][class*="text-"],
:root [class*=" bg-red"][class*="fill-"],
:root [class^="bg-red"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" hover\:text-red"]:hover,
:root [class^="hover\:text-red"]:hover,
:root .group:hover [class*=" group-hover\:text-red"],
:root .group:hover [class^="group-hover\:text-red"] {
  color: #f5a2b9 !important;
}
:root [class*=" hover\:border-red"]:hover,
:root [class^="hover\:border-red"]:hover,
:root .group:hover [class*=" group-hover\:border-red"],
:root .group:hover [class^="group-hover\:border-red"] {
  border-color: #f38ba8 !important;
}
:root [class*=" hover\:fill-red"]:hover,
:root [class^="hover\:fill-red"]:hover,
:root .group:hover [class*=" group-hover\:fill-red"],
:root .group:hover [class^="group-hover\:fill-red"] {
  fill: #f5a2b9 !important;
}
:root [class*=" hover\:bg-red"]:hover,
:root [class^="hover\:bg-red"]:hover,
:root .group:hover [class*=" group-hover\:bg-red"],
:root .group:hover [class^="group-hover\:bg-red"] {
  background-color: #f38ba8 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f38ba8;
}
:root [class*=" hover\:bg-red"]:hover path[stroke="#fff"],
:root [class^="hover\:bg-red"]:hover path[stroke="#fff"],
:root .group:hover [class*=" group-hover\:bg-red"] path[stroke="#fff"],
:root .group:hover [class^="group-hover\:bg-red"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" hover\:bg-red"]:hover [class*="text-"],
:root [class^="hover\:bg-red"]:hover [class*="text-"],
:root .group:hover [class*=" group-hover\:bg-red"] [class*="text-"],
:root .group:hover [class^="group-hover\:bg-red"] [class*="text-"],
:root [class*=" hover\:bg-red"]:hover [class*="fill-"],
:root [class^="hover\:bg-red"]:hover [class*="fill-"],
:root .group:hover [class*=" group-hover\:bg-red"] [class*="fill-"],
:root .group:hover [class^="group-hover\:bg-red"] [class*="fill-"],
:root [class*=" hover\:bg-red"]:hover[class*="text-"],
:root [class^="hover\:bg-red"]:hover[class*="text-"],
:root .group:hover [class*=" group-hover\:bg-red"][class*="text-"],
:root .group:hover [class^="group-hover\:bg-red"][class*="text-"],
:root [class*=" hover\:bg-red"]:hover[class*="fill-"],
:root [class^="hover\:bg-red"]:hover[class*="fill-"],
:root .group:hover [class*=" group-hover\:bg-red"][class*="fill-"],
:root .group:hover [class^="group-hover\:bg-red"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" focus\:text-red"]:focus,
:root [class^="focus\:text-red"]:focus,
:root .group:focus [class*=" group-focus\:text-red"],
:root .group:focus [class^="group-focus\:text-red"] {
  color: #f5a2b9 !important;
}
:root [class*=" focus\:border-red"]:focus,
:root [class^="focus\:border-red"]:focus,
:root .group:focus [class*=" group-focus\:border-red"],
:root .group:focus [class^="group-focus\:border-red"] {
  border-color: #f38ba8 !important;
}
:root [class*=" focus\:fill-red"]:focus,
:root [class^="focus\:fill-red"]:focus,
:root .group:focus [class*=" group-focus\:fill-red"],
:root .group:focus [class^="group-focus\:fill-red"] {
  fill: #f5a2b9 !important;
}
:root [class*=" focus\:bg-red"]:focus,
:root [class^="focus\:bg-red"]:focus,
:root .group:focus [class*=" group-focus\:bg-red"],
:root .group:focus [class^="group-focus\:bg-red"] {
  background-color: #f38ba8 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f38ba8;
}
:root [class*=" focus\:bg-red"]:focus path[stroke="#fff"],
:root [class^="focus\:bg-red"]:focus path[stroke="#fff"],
:root .group:focus [class*=" group-focus\:bg-red"] path[stroke="#fff"],
:root .group:focus [class^="group-focus\:bg-red"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" focus\:bg-red"]:focus [class*="text-"],
:root [class^="focus\:bg-red"]:focus [class*="text-"],
:root .group:focus [class*=" group-focus\:bg-red"] [class*="text-"],
:root .group:focus [class^="group-focus\:bg-red"] [class*="text-"],
:root [class*=" focus\:bg-red"]:focus [class*="fill-"],
:root [class^="focus\:bg-red"]:focus [class*="fill-"],
:root .group:focus [class*=" group-focus\:bg-red"] [class*="fill-"],
:root .group:focus [class^="group-focus\:bg-red"] [class*="fill-"],
:root [class*=" focus\:bg-red"]:focus[class*="text-"],
:root [class^="focus\:bg-red"]:focus[class*="text-"],
:root .group:focus [class*=" group-focus\:bg-red"][class*="text-"],
:root .group:focus [class^="group-focus\:bg-red"][class*="text-"],
:root [class*=" focus\:bg-red"]:focus[class*="fill-"],
:root [class^="focus\:bg-red"]:focus[class*="fill-"],
:root .group:focus [class*=" group-focus\:bg-red"][class*="fill-"],
:root .group:focus [class^="group-focus\:bg-red"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" border-yellow"],
:root [class^="border-yellow"] {
  border-color: #f9e2af;
}
:root [class*=" text-yellow"],
:root [class^="text-yellow"] {
  color: #f9e2af;
}
:root [class*=" fill-yellow"],
:root [class^="fill-yellow"] {
  fill: #f9e2af;
}
:root [class*=" bg-yellow"],
:root [class^="bg-yellow"] {
  background-color: #f9e2af !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f9e2af;
}
:root [class*=" bg-yellow"] path[stroke="#fff"],
:root [class^="bg-yellow"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" bg-yellow"] [class*="text-"],
:root [class^="bg-yellow"] [class*="text-"],
:root [class*=" bg-yellow"] [class*="fill-"],
:root [class^="bg-yellow"] [class*="fill-"],
:root [class*=" bg-yellow"][class*="text-"],
:root [class^="bg-yellow"][class*="text-"],
:root [class*=" bg-yellow"][class*="fill-"],
:root [class^="bg-yellow"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" hover\:text-yellow"]:hover,
:root [class^="hover\:text-yellow"]:hover,
:root .group:hover [class*=" group-hover\:text-yellow"],
:root .group:hover [class^="group-hover\:text-yellow"] {
  color: #fbebc7 !important;
}
:root [class*=" hover\:border-yellow"]:hover,
:root [class^="hover\:border-yellow"]:hover,
:root .group:hover [class*=" group-hover\:border-yellow"],
:root .group:hover [class^="group-hover\:border-yellow"] {
  border-color: #f9e2af !important;
}
:root [class*=" hover\:fill-yellow"]:hover,
:root [class^="hover\:fill-yellow"]:hover,
:root .group:hover [class*=" group-hover\:fill-yellow"],
:root .group:hover [class^="group-hover\:fill-yellow"] {
  fill: #fbebc7 !important;
}
:root [class*=" hover\:bg-yellow"]:hover,
:root [class^="hover\:bg-yellow"]:hover,
:root .group:hover [class*=" group-hover\:bg-yellow"],
:root .group:hover [class^="group-hover\:bg-yellow"] {
  background-color: #f9e2af !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f9e2af;
}
:root [class*=" hover\:bg-yellow"]:hover path[stroke="#fff"],
:root [class^="hover\:bg-yellow"]:hover path[stroke="#fff"],
:root .group:hover [class*=" group-hover\:bg-yellow"] path[stroke="#fff"],
:root .group:hover [class^="group-hover\:bg-yellow"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" hover\:bg-yellow"]:hover [class*="text-"],
:root [class^="hover\:bg-yellow"]:hover [class*="text-"],
:root .group:hover [class*=" group-hover\:bg-yellow"] [class*="text-"],
:root .group:hover [class^="group-hover\:bg-yellow"] [class*="text-"],
:root [class*=" hover\:bg-yellow"]:hover [class*="fill-"],
:root [class^="hover\:bg-yellow"]:hover [class*="fill-"],
:root .group:hover [class*=" group-hover\:bg-yellow"] [class*="fill-"],
:root .group:hover [class^="group-hover\:bg-yellow"] [class*="fill-"],
:root [class*=" hover\:bg-yellow"]:hover[class*="text-"],
:root [class^="hover\:bg-yellow"]:hover[class*="text-"],
:root .group:hover [class*=" group-hover\:bg-yellow"][class*="text-"],
:root .group:hover [class^="group-hover\:bg-yellow"][class*="text-"],
:root [class*=" hover\:bg-yellow"]:hover[class*="fill-"],
:root [class^="hover\:bg-yellow"]:hover[class*="fill-"],
:root .group:hover [class*=" group-hover\:bg-yellow"][class*="fill-"],
:root .group:hover [class^="group-hover\:bg-yellow"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" focus\:text-yellow"]:focus,
:root [class^="focus\:text-yellow"]:focus,
:root .group:focus [class*=" group-focus\:text-yellow"],
:root .group:focus [class^="group-focus\:text-yellow"] {
  color: #fbebc7 !important;
}
:root [class*=" focus\:border-yellow"]:focus,
:root [class^="focus\:border-yellow"]:focus,
:root .group:focus [class*=" group-focus\:border-yellow"],
:root .group:focus [class^="group-focus\:border-yellow"] {
  border-color: #f9e2af !important;
}
:root [class*=" focus\:fill-yellow"]:focus,
:root [class^="focus\:fill-yellow"]:focus,
:root .group:focus [class*=" group-focus\:fill-yellow"],
:root .group:focus [class^="group-focus\:fill-yellow"] {
  fill: #fbebc7 !important;
}
:root [class*=" focus\:bg-yellow"]:focus,
:root [class^="focus\:bg-yellow"]:focus,
:root .group:focus [class*=" group-focus\:bg-yellow"],
:root .group:focus [class^="group-focus\:bg-yellow"] {
  background-color: #f9e2af !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f9e2af;
}
:root [class*=" focus\:bg-yellow"]:focus path[stroke="#fff"],
:root [class^="focus\:bg-yellow"]:focus path[stroke="#fff"],
:root .group:focus [class*=" group-focus\:bg-yellow"] path[stroke="#fff"],
:root .group:focus [class^="group-focus\:bg-yellow"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" focus\:bg-yellow"]:focus [class*="text-"],
:root [class^="focus\:bg-yellow"]:focus [class*="text-"],
:root .group:focus [class*=" group-focus\:bg-yellow"] [class*="text-"],
:root .group:focus [class^="group-focus\:bg-yellow"] [class*="text-"],
:root [class*=" focus\:bg-yellow"]:focus [class*="fill-"],
:root [class^="focus\:bg-yellow"]:focus [class*="fill-"],
:root .group:focus [class*=" group-focus\:bg-yellow"] [class*="fill-"],
:root .group:focus [class^="group-focus\:bg-yellow"] [class*="fill-"],
:root [class*=" focus\:bg-yellow"]:focus[class*="text-"],
:root [class^="focus\:bg-yellow"]:focus[class*="text-"],
:root .group:focus [class*=" group-focus\:bg-yellow"][class*="text-"],
:root .group:focus [class^="group-focus\:bg-yellow"][class*="text-"],
:root [class*=" focus\:bg-yellow"]:focus[class*="fill-"],
:root [class^="focus\:bg-yellow"]:focus[class*="fill-"],
:root .group:focus [class*=" group-focus\:bg-yellow"][class*="fill-"],
:root .group:focus [class^="group-focus\:bg-yellow"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" border-amber"],
:root [class^="border-amber"] {
  border-color: #f9e2af;
}
:root [class*=" text-amber"],
:root [class^="text-amber"] {
  color: #f9e2af;
}
:root [class*=" fill-amber"],
:root [class^="fill-amber"] {
  fill: #f9e2af;
}
:root [class*=" bg-amber"],
:root [class^="bg-amber"] {
  background-color: #f9e2af !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f9e2af;
}
:root [class*=" bg-amber"] path[stroke="#fff"],
:root [class^="bg-amber"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" bg-amber"] [class*="text-"],
:root [class^="bg-amber"] [class*="text-"],
:root [class*=" bg-amber"] [class*="fill-"],
:root [class^="bg-amber"] [class*="fill-"],
:root [class*=" bg-amber"][class*="text-"],
:root [class^="bg-amber"][class*="text-"],
:root [class*=" bg-amber"][class*="fill-"],
:root [class^="bg-amber"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" hover\:text-amber"]:hover,
:root [class^="hover\:text-amber"]:hover,
:root .group:hover [class*=" group-hover\:text-amber"],
:root .group:hover [class^="group-hover\:text-amber"] {
  color: #fbebc7 !important;
}
:root [class*=" hover\:border-amber"]:hover,
:root [class^="hover\:border-amber"]:hover,
:root .group:hover [class*=" group-hover\:border-amber"],
:root .group:hover [class^="group-hover\:border-amber"] {
  border-color: #f9e2af !important;
}
:root [class*=" hover\:fill-amber"]:hover,
:root [class^="hover\:fill-amber"]:hover,
:root .group:hover [class*=" group-hover\:fill-amber"],
:root .group:hover [class^="group-hover\:fill-amber"] {
  fill: #fbebc7 !important;
}
:root [class*=" hover\:bg-amber"]:hover,
:root [class^="hover\:bg-amber"]:hover,
:root .group:hover [class*=" group-hover\:bg-amber"],
:root .group:hover [class^="group-hover\:bg-amber"] {
  background-color: #f9e2af !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f9e2af;
}
:root [class*=" hover\:bg-amber"]:hover path[stroke="#fff"],
:root [class^="hover\:bg-amber"]:hover path[stroke="#fff"],
:root .group:hover [class*=" group-hover\:bg-amber"] path[stroke="#fff"],
:root .group:hover [class^="group-hover\:bg-amber"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" hover\:bg-amber"]:hover [class*="text-"],
:root [class^="hover\:bg-amber"]:hover [class*="text-"],
:root .group:hover [class*=" group-hover\:bg-amber"] [class*="text-"],
:root .group:hover [class^="group-hover\:bg-amber"] [class*="text-"],
:root [class*=" hover\:bg-amber"]:hover [class*="fill-"],
:root [class^="hover\:bg-amber"]:hover [class*="fill-"],
:root .group:hover [class*=" group-hover\:bg-amber"] [class*="fill-"],
:root .group:hover [class^="group-hover\:bg-amber"] [class*="fill-"],
:root [class*=" hover\:bg-amber"]:hover[class*="text-"],
:root [class^="hover\:bg-amber"]:hover[class*="text-"],
:root .group:hover [class*=" group-hover\:bg-amber"][class*="text-"],
:root .group:hover [class^="group-hover\:bg-amber"][class*="text-"],
:root [class*=" hover\:bg-amber"]:hover[class*="fill-"],
:root [class^="hover\:bg-amber"]:hover[class*="fill-"],
:root .group:hover [class*=" group-hover\:bg-amber"][class*="fill-"],
:root .group:hover [class^="group-hover\:bg-amber"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" focus\:text-amber"]:focus,
:root [class^="focus\:text-amber"]:focus,
:root .group:focus [class*=" group-focus\:text-amber"],
:root .group:focus [class^="group-focus\:text-amber"] {
  color: #fbebc7 !important;
}
:root [class*=" focus\:border-amber"]:focus,
:root [class^="focus\:border-amber"]:focus,
:root .group:focus [class*=" group-focus\:border-amber"],
:root .group:focus [class^="group-focus\:border-amber"] {
  border-color: #f9e2af !important;
}
:root [class*=" focus\:fill-amber"]:focus,
:root [class^="focus\:fill-amber"]:focus,
:root .group:focus [class*=" group-focus\:fill-amber"],
:root .group:focus [class^="group-focus\:fill-amber"] {
  fill: #fbebc7 !important;
}
:root [class*=" focus\:bg-amber"]:focus,
:root [class^="focus\:bg-amber"]:focus,
:root .group:focus [class*=" group-focus\:bg-amber"],
:root .group:focus [class^="group-focus\:bg-amber"] {
  background-color: #f9e2af !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f9e2af;
}
:root [class*=" focus\:bg-amber"]:focus path[stroke="#fff"],
:root [class^="focus\:bg-amber"]:focus path[stroke="#fff"],
:root .group:focus [class*=" group-focus\:bg-amber"] path[stroke="#fff"],
:root .group:focus [class^="group-focus\:bg-amber"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" focus\:bg-amber"]:focus [class*="text-"],
:root [class^="focus\:bg-amber"]:focus [class*="text-"],
:root .group:focus [class*=" group-focus\:bg-amber"] [class*="text-"],
:root .group:focus [class^="group-focus\:bg-amber"] [class*="text-"],
:root [class*=" focus\:bg-amber"]:focus [class*="fill-"],
:root [class^="focus\:bg-amber"]:focus [class*="fill-"],
:root .group:focus [class*=" group-focus\:bg-amber"] [class*="fill-"],
:root .group:focus [class^="group-focus\:bg-amber"] [class*="fill-"],
:root [class*=" focus\:bg-amber"]:focus[class*="text-"],
:root [class^="focus\:bg-amber"]:focus[class*="text-"],
:root .group:focus [class*=" group-focus\:bg-amber"][class*="text-"],
:root .group:focus [class^="group-focus\:bg-amber"][class*="text-"],
:root [class*=" focus\:bg-amber"]:focus[class*="fill-"],
:root [class^="focus\:bg-amber"]:focus[class*="fill-"],
:root .group:focus [class*=" group-focus\:bg-amber"][class*="fill-"],
:root .group:focus [class^="group-focus\:bg-amber"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" border-blue"],
:root [class^="border-blue"] {
  border-color: #89b4fa;
}
:root [class*=" text-blue"],
:root [class^="text-blue"] {
  color: #89b4fa;
}
:root [class*=" fill-blue"],
:root [class^="fill-blue"] {
  fill: #89b4fa;
}
:root [class*=" bg-blue"],
:root [class^="bg-blue"] {
  background-color: #89b4fa !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #89b4fa;
}
:root [class*=" bg-blue"] path[stroke="#fff"],
:root [class^="bg-blue"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" bg-blue"] [class*="text-"],
:root [class^="bg-blue"] [class*="text-"],
:root [class*=" bg-blue"] [class*="fill-"],
:root [class^="bg-blue"] [class*="fill-"],
:root [class*=" bg-blue"][class*="text-"],
:root [class^="bg-blue"][class*="text-"],
:root [class*=" bg-blue"][class*="fill-"],
:root [class^="bg-blue"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" hover\:text-blue"]:hover,
:root [class^="hover\:text-blue"]:hover,
:root .group:hover [class*=" group-hover\:text-blue"],
:root .group:hover [class^="group-hover\:text-blue"] {
  color: #a1c4fb !important;
}
:root [class*=" hover\:border-blue"]:hover,
:root [class^="hover\:border-blue"]:hover,
:root .group:hover [class*=" group-hover\:border-blue"],
:root .group:hover [class^="group-hover\:border-blue"] {
  border-color: #89b4fa !important;
}
:root [class*=" hover\:fill-blue"]:hover,
:root [class^="hover\:fill-blue"]:hover,
:root .group:hover [class*=" group-hover\:fill-blue"],
:root .group:hover [class^="group-hover\:fill-blue"] {
  fill: #a1c4fb !important;
}
:root [class*=" hover\:bg-blue"]:hover,
:root [class^="hover\:bg-blue"]:hover,
:root .group:hover [class*=" group-hover\:bg-blue"],
:root .group:hover [class^="group-hover\:bg-blue"] {
  background-color: #89b4fa !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #89b4fa;
}
:root [class*=" hover\:bg-blue"]:hover path[stroke="#fff"],
:root [class^="hover\:bg-blue"]:hover path[stroke="#fff"],
:root .group:hover [class*=" group-hover\:bg-blue"] path[stroke="#fff"],
:root .group:hover [class^="group-hover\:bg-blue"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" hover\:bg-blue"]:hover [class*="text-"],
:root [class^="hover\:bg-blue"]:hover [class*="text-"],
:root .group:hover [class*=" group-hover\:bg-blue"] [class*="text-"],
:root .group:hover [class^="group-hover\:bg-blue"] [class*="text-"],
:root [class*=" hover\:bg-blue"]:hover [class*="fill-"],
:root [class^="hover\:bg-blue"]:hover [class*="fill-"],
:root .group:hover [class*=" group-hover\:bg-blue"] [class*="fill-"],
:root .group:hover [class^="group-hover\:bg-blue"] [class*="fill-"],
:root [class*=" hover\:bg-blue"]:hover[class*="text-"],
:root [class^="hover\:bg-blue"]:hover[class*="text-"],
:root .group:hover [class*=" group-hover\:bg-blue"][class*="text-"],
:root .group:hover [class^="group-hover\:bg-blue"][class*="text-"],
:root [class*=" hover\:bg-blue"]:hover[class*="fill-"],
:root [class^="hover\:bg-blue"]:hover[class*="fill-"],
:root .group:hover [class*=" group-hover\:bg-blue"][class*="fill-"],
:root .group:hover [class^="group-hover\:bg-blue"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" focus\:text-blue"]:focus,
:root [class^="focus\:text-blue"]:focus,
:root .group:focus [class*=" group-focus\:text-blue"],
:root .group:focus [class^="group-focus\:text-blue"] {
  color: #a1c4fb !important;
}
:root [class*=" focus\:border-blue"]:focus,
:root [class^="focus\:border-blue"]:focus,
:root .group:focus [class*=" group-focus\:border-blue"],
:root .group:focus [class^="group-focus\:border-blue"] {
  border-color: #89b4fa !important;
}
:root [class*=" focus\:fill-blue"]:focus,
:root [class^="focus\:fill-blue"]:focus,
:root .group:focus [class*=" group-focus\:fill-blue"],
:root .group:focus [class^="group-focus\:fill-blue"] {
  fill: #a1c4fb !important;
}
:root [class*=" focus\:bg-blue"]:focus,
:root [class^="focus\:bg-blue"]:focus,
:root .group:focus [class*=" group-focus\:bg-blue"],
:root .group:focus [class^="group-focus\:bg-blue"] {
  background-color: #89b4fa !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #89b4fa;
}
:root [class*=" focus\:bg-blue"]:focus path[stroke="#fff"],
:root [class^="focus\:bg-blue"]:focus path[stroke="#fff"],
:root .group:focus [class*=" group-focus\:bg-blue"] path[stroke="#fff"],
:root .group:focus [class^="group-focus\:bg-blue"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" focus\:bg-blue"]:focus [class*="text-"],
:root [class^="focus\:bg-blue"]:focus [class*="text-"],
:root .group:focus [class*=" group-focus\:bg-blue"] [class*="text-"],
:root .group:focus [class^="group-focus\:bg-blue"] [class*="text-"],
:root [class*=" focus\:bg-blue"]:focus [class*="fill-"],
:root [class^="focus\:bg-blue"]:focus [class*="fill-"],
:root .group:focus [class*=" group-focus\:bg-blue"] [class*="fill-"],
:root .group:focus [class^="group-focus\:bg-blue"] [class*="fill-"],
:root [class*=" focus\:bg-blue"]:focus[class*="text-"],
:root [class^="focus\:bg-blue"]:focus[class*="text-"],
:root .group:focus [class*=" group-focus\:bg-blue"][class*="text-"],
:root .group:focus [class^="group-focus\:bg-blue"][class*="text-"],
:root [class*=" focus\:bg-blue"]:focus[class*="fill-"],
:root [class^="focus\:bg-blue"]:focus[class*="fill-"],
:root .group:focus [class*=" group-focus\:bg-blue"][class*="fill-"],
:root .group:focus [class^="group-focus\:bg-blue"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" border-orange"],
:root [class^="border-orange"] {
  border-color: #fab387;
}
:root [class*=" text-orange"],
:root [class^="text-orange"] {
  color: #fab387;
}
:root [class*=" fill-orange"],
:root [class^="fill-orange"] {
  fill: #fab387;
}
:root [class*=" bg-orange"],
:root [class^="bg-orange"] {
  background-color: #fab387 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #fab387;
}
:root [class*=" bg-orange"] path[stroke="#fff"],
:root [class^="bg-orange"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" bg-orange"] [class*="text-"],
:root [class^="bg-orange"] [class*="text-"],
:root [class*=" bg-orange"] [class*="fill-"],
:root [class^="bg-orange"] [class*="fill-"],
:root [class*=" bg-orange"][class*="text-"],
:root [class^="bg-orange"][class*="text-"],
:root [class*=" bg-orange"][class*="fill-"],
:root [class^="bg-orange"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" hover\:text-orange"]:hover,
:root [class^="hover\:text-orange"]:hover,
:root .group:hover [class*=" group-hover\:text-orange"],
:root .group:hover [class^="group-hover\:text-orange"] {
  color: #fbc39f !important;
}
:root [class*=" hover\:border-orange"]:hover,
:root [class^="hover\:border-orange"]:hover,
:root .group:hover [class*=" group-hover\:border-orange"],
:root .group:hover [class^="group-hover\:border-orange"] {
  border-color: #fab387 !important;
}
:root [class*=" hover\:fill-orange"]:hover,
:root [class^="hover\:fill-orange"]:hover,
:root .group:hover [class*=" group-hover\:fill-orange"],
:root .group:hover [class^="group-hover\:fill-orange"] {
  fill: #fbc39f !important;
}
:root [class*=" hover\:bg-orange"]:hover,
:root [class^="hover\:bg-orange"]:hover,
:root .group:hover [class*=" group-hover\:bg-orange"],
:root .group:hover [class^="group-hover\:bg-orange"] {
  background-color: #fab387 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #fab387;
}
:root [class*=" hover\:bg-orange"]:hover path[stroke="#fff"],
:root [class^="hover\:bg-orange"]:hover path[stroke="#fff"],
:root .group:hover [class*=" group-hover\:bg-orange"] path[stroke="#fff"],
:root .group:hover [class^="group-hover\:bg-orange"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" hover\:bg-orange"]:hover [class*="text-"],
:root [class^="hover\:bg-orange"]:hover [class*="text-"],
:root .group:hover [class*=" group-hover\:bg-orange"] [class*="text-"],
:root .group:hover [class^="group-hover\:bg-orange"] [class*="text-"],
:root [class*=" hover\:bg-orange"]:hover [class*="fill-"],
:root [class^="hover\:bg-orange"]:hover [class*="fill-"],
:root .group:hover [class*=" group-hover\:bg-orange"] [class*="fill-"],
:root .group:hover [class^="group-hover\:bg-orange"] [class*="fill-"],
:root [class*=" hover\:bg-orange"]:hover[class*="text-"],
:root [class^="hover\:bg-orange"]:hover[class*="text-"],
:root .group:hover [class*=" group-hover\:bg-orange"][class*="text-"],
:root .group:hover [class^="group-hover\:bg-orange"][class*="text-"],
:root [class*=" hover\:bg-orange"]:hover[class*="fill-"],
:root [class^="hover\:bg-orange"]:hover[class*="fill-"],
:root .group:hover [class*=" group-hover\:bg-orange"][class*="fill-"],
:root .group:hover [class^="group-hover\:bg-orange"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" focus\:text-orange"]:focus,
:root [class^="focus\:text-orange"]:focus,
:root .group:focus [class*=" group-focus\:text-orange"],
:root .group:focus [class^="group-focus\:text-orange"] {
  color: #fbc39f !important;
}
:root [class*=" focus\:border-orange"]:focus,
:root [class^="focus\:border-orange"]:focus,
:root .group:focus [class*=" group-focus\:border-orange"],
:root .group:focus [class^="group-focus\:border-orange"] {
  border-color: #fab387 !important;
}
:root [class*=" focus\:fill-orange"]:focus,
:root [class^="focus\:fill-orange"]:focus,
:root .group:focus [class*=" group-focus\:fill-orange"],
:root .group:focus [class^="group-focus\:fill-orange"] {
  fill: #fbc39f !important;
}
:root [class*=" focus\:bg-orange"]:focus,
:root [class^="focus\:bg-orange"]:focus,
:root .group:focus [class*=" group-focus\:bg-orange"],
:root .group:focus [class^="group-focus\:bg-orange"] {
  background-color: #fab387 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #fab387;
}
:root [class*=" focus\:bg-orange"]:focus path[stroke="#fff"],
:root [class^="focus\:bg-orange"]:focus path[stroke="#fff"],
:root .group:focus [class*=" group-focus\:bg-orange"] path[stroke="#fff"],
:root .group:focus [class^="group-focus\:bg-orange"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" focus\:bg-orange"]:focus [class*="text-"],
:root [class^="focus\:bg-orange"]:focus [class*="text-"],
:root .group:focus [class*=" group-focus\:bg-orange"] [class*="text-"],
:root .group:focus [class^="group-focus\:bg-orange"] [class*="text-"],
:root [class*=" focus\:bg-orange"]:focus [class*="fill-"],
:root [class^="focus\:bg-orange"]:focus [class*="fill-"],
:root .group:focus [class*=" group-focus\:bg-orange"] [class*="fill-"],
:root .group:focus [class^="group-focus\:bg-orange"] [class*="fill-"],
:root [class*=" focus\:bg-orange"]:focus[class*="text-"],
:root [class^="focus\:bg-orange"]:focus[class*="text-"],
:root .group:focus [class*=" group-focus\:bg-orange"][class*="text-"],
:root .group:focus [class^="group-focus\:bg-orange"][class*="text-"],
:root [class*=" focus\:bg-orange"]:focus[class*="fill-"],
:root [class^="focus\:bg-orange"]:focus[class*="fill-"],
:root .group:focus [class*=" group-focus\:bg-orange"][class*="fill-"],
:root .group:focus [class^="group-focus\:bg-orange"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" border-indigo"],
:root [class^="border-indigo"] {
  border-color: #cba6f7;
}
:root [class*=" text-indigo"],
:root [class^="text-indigo"] {
  color: #cba6f7;
}
:root [class*=" fill-indigo"],
:root [class^="fill-indigo"] {
  fill: #cba6f7;
}
:root [class*=" bg-indigo"],
:root [class^="bg-indigo"] {
  background-color: #cba6f7 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #cba6f7;
}
:root [class*=" bg-indigo"] path[stroke="#fff"],
:root [class^="bg-indigo"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" bg-indigo"] [class*="text-"],
:root [class^="bg-indigo"] [class*="text-"],
:root [class*=" bg-indigo"] [class*="fill-"],
:root [class^="bg-indigo"] [class*="fill-"],
:root [class*=" bg-indigo"][class*="text-"],
:root [class^="bg-indigo"][class*="text-"],
:root [class*=" bg-indigo"][class*="fill-"],
:root [class^="bg-indigo"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" hover\:text-indigo"]:hover,
:root [class^="hover\:text-indigo"]:hover,
:root .group:hover [class*=" group-hover\:text-indigo"],
:root .group:hover [class^="group-hover\:text-indigo"] {
  color: #d9bdf9 !important;
}
:root [class*=" hover\:border-indigo"]:hover,
:root [class^="hover\:border-indigo"]:hover,
:root .group:hover [class*=" group-hover\:border-indigo"],
:root .group:hover [class^="group-hover\:border-indigo"] {
  border-color: #cba6f7 !important;
}
:root [class*=" hover\:fill-indigo"]:hover,
:root [class^="hover\:fill-indigo"]:hover,
:root .group:hover [class*=" group-hover\:fill-indigo"],
:root .group:hover [class^="group-hover\:fill-indigo"] {
  fill: #d9bdf9 !important;
}
:root [class*=" hover\:bg-indigo"]:hover,
:root [class^="hover\:bg-indigo"]:hover,
:root .group:hover [class*=" group-hover\:bg-indigo"],
:root .group:hover [class^="group-hover\:bg-indigo"] {
  background-color: #cba6f7 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #cba6f7;
}
:root [class*=" hover\:bg-indigo"]:hover path[stroke="#fff"],
:root [class^="hover\:bg-indigo"]:hover path[stroke="#fff"],
:root .group:hover [class*=" group-hover\:bg-indigo"] path[stroke="#fff"],
:root .group:hover [class^="group-hover\:bg-indigo"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" hover\:bg-indigo"]:hover [class*="text-"],
:root [class^="hover\:bg-indigo"]:hover [class*="text-"],
:root .group:hover [class*=" group-hover\:bg-indigo"] [class*="text-"],
:root .group:hover [class^="group-hover\:bg-indigo"] [class*="text-"],
:root [class*=" hover\:bg-indigo"]:hover [class*="fill-"],
:root [class^="hover\:bg-indigo"]:hover [class*="fill-"],
:root .group:hover [class*=" group-hover\:bg-indigo"] [class*="fill-"],
:root .group:hover [class^="group-hover\:bg-indigo"] [class*="fill-"],
:root [class*=" hover\:bg-indigo"]:hover[class*="text-"],
:root [class^="hover\:bg-indigo"]:hover[class*="text-"],
:root .group:hover [class*=" group-hover\:bg-indigo"][class*="text-"],
:root .group:hover [class^="group-hover\:bg-indigo"][class*="text-"],
:root [class*=" hover\:bg-indigo"]:hover[class*="fill-"],
:root [class^="hover\:bg-indigo"]:hover[class*="fill-"],
:root .group:hover [class*=" group-hover\:bg-indigo"][class*="fill-"],
:root .group:hover [class^="group-hover\:bg-indigo"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" focus\:text-indigo"]:focus,
:root [class^="focus\:text-indigo"]:focus,
:root .group:focus [class*=" group-focus\:text-indigo"],
:root .group:focus [class^="group-focus\:text-indigo"] {
  color: #d9bdf9 !important;
}
:root [class*=" focus\:border-indigo"]:focus,
:root [class^="focus\:border-indigo"]:focus,
:root .group:focus [class*=" group-focus\:border-indigo"],
:root .group:focus [class^="group-focus\:border-indigo"] {
  border-color: #cba6f7 !important;
}
:root [class*=" focus\:fill-indigo"]:focus,
:root [class^="focus\:fill-indigo"]:focus,
:root .group:focus [class*=" group-focus\:fill-indigo"],
:root .group:focus [class^="group-focus\:fill-indigo"] {
  fill: #d9bdf9 !important;
}
:root [class*=" focus\:bg-indigo"]:focus,
:root [class^="focus\:bg-indigo"]:focus,
:root .group:focus [class*=" group-focus\:bg-indigo"],
:root .group:focus [class^="group-focus\:bg-indigo"] {
  background-color: #cba6f7 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #cba6f7;
}
:root [class*=" focus\:bg-indigo"]:focus path[stroke="#fff"],
:root [class^="focus\:bg-indigo"]:focus path[stroke="#fff"],
:root .group:focus [class*=" group-focus\:bg-indigo"] path[stroke="#fff"],
:root .group:focus [class^="group-focus\:bg-indigo"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" focus\:bg-indigo"]:focus [class*="text-"],
:root [class^="focus\:bg-indigo"]:focus [class*="text-"],
:root .group:focus [class*=" group-focus\:bg-indigo"] [class*="text-"],
:root .group:focus [class^="group-focus\:bg-indigo"] [class*="text-"],
:root [class*=" focus\:bg-indigo"]:focus [class*="fill-"],
:root [class^="focus\:bg-indigo"]:focus [class*="fill-"],
:root .group:focus [class*=" group-focus\:bg-indigo"] [class*="fill-"],
:root .group:focus [class^="group-focus\:bg-indigo"] [class*="fill-"],
:root [class*=" focus\:bg-indigo"]:focus[class*="text-"],
:root [class^="focus\:bg-indigo"]:focus[class*="text-"],
:root .group:focus [class*=" group-focus\:bg-indigo"][class*="text-"],
:root .group:focus [class^="group-focus\:bg-indigo"][class*="text-"],
:root [class*=" focus\:bg-indigo"]:focus[class*="fill-"],
:root [class^="focus\:bg-indigo"]:focus[class*="fill-"],
:root .group:focus [class*=" group-focus\:bg-indigo"][class*="fill-"],
:root .group:focus [class^="group-focus\:bg-indigo"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" border-accent"],
:root [class^="border-accent"] {
  border-color: #cba6f7;
}
:root [class*=" text-accent"],
:root [class^="text-accent"] {
  color: #cba6f7;
}
:root [class*=" fill-accent"],
:root [class^="fill-accent"] {
  fill: #cba6f7;
}
:root [class*=" bg-accent"],
:root [class^="bg-accent"] {
  background-color: #cba6f7 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #cba6f7;
}
:root [class*=" bg-accent"] path[stroke="#fff"],
:root [class^="bg-accent"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" bg-accent"] [class*="text-"],
:root [class^="bg-accent"] [class*="text-"],
:root [class*=" bg-accent"] [class*="fill-"],
:root [class^="bg-accent"] [class*="fill-"],
:root [class*=" bg-accent"][class*="text-"],
:root [class^="bg-accent"][class*="text-"],
:root [class*=" bg-accent"][class*="fill-"],
:root [class^="bg-accent"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" hover\:text-accent"]:hover,
:root [class^="hover\:text-accent"]:hover,
:root .group:hover [class*=" group-hover\:text-accent"],
:root .group:hover [class^="group-hover\:text-accent"] {
  color: #d9bdf9 !important;
}
:root [class*=" hover\:border-accent"]:hover,
:root [class^="hover\:border-accent"]:hover,
:root .group:hover [class*=" group-hover\:border-accent"],
:root .group:hover [class^="group-hover\:border-accent"] {
  border-color: #cba6f7 !important;
}
:root [class*=" hover\:fill-accent"]:hover,
:root [class^="hover\:fill-accent"]:hover,
:root .group:hover [class*=" group-hover\:fill-accent"],
:root .group:hover [class^="group-hover\:fill-accent"] {
  fill: #d9bdf9 !important;
}
:root [class*=" hover\:bg-accent"]:hover,
:root [class^="hover\:bg-accent"]:hover,
:root .group:hover [class*=" group-hover\:bg-accent"],
:root .group:hover [class^="group-hover\:bg-accent"] {
  background-color: #cba6f7 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #cba6f7;
}
:root [class*=" hover\:bg-accent"]:hover path[stroke="#fff"],
:root [class^="hover\:bg-accent"]:hover path[stroke="#fff"],
:root .group:hover [class*=" group-hover\:bg-accent"] path[stroke="#fff"],
:root .group:hover [class^="group-hover\:bg-accent"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" hover\:bg-accent"]:hover [class*="text-"],
:root [class^="hover\:bg-accent"]:hover [class*="text-"],
:root .group:hover [class*=" group-hover\:bg-accent"] [class*="text-"],
:root .group:hover [class^="group-hover\:bg-accent"] [class*="text-"],
:root [class*=" hover\:bg-accent"]:hover [class*="fill-"],
:root [class^="hover\:bg-accent"]:hover [class*="fill-"],
:root .group:hover [class*=" group-hover\:bg-accent"] [class*="fill-"],
:root .group:hover [class^="group-hover\:bg-accent"] [class*="fill-"],
:root [class*=" hover\:bg-accent"]:hover[class*="text-"],
:root [class^="hover\:bg-accent"]:hover[class*="text-"],
:root .group:hover [class*=" group-hover\:bg-accent"][class*="text-"],
:root .group:hover [class^="group-hover\:bg-accent"][class*="text-"],
:root [class*=" hover\:bg-accent"]:hover[class*="fill-"],
:root [class^="hover\:bg-accent"]:hover[class*="fill-"],
:root .group:hover [class*=" group-hover\:bg-accent"][class*="fill-"],
:root .group:hover [class^="group-hover\:bg-accent"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root [class*=" focus\:text-accent"]:focus,
:root [class^="focus\:text-accent"]:focus,
:root .group:focus [class*=" group-focus\:text-accent"],
:root .group:focus [class^="group-focus\:text-accent"] {
  color: #d9bdf9 !important;
}
:root [class*=" focus\:border-accent"]:focus,
:root [class^="focus\:border-accent"]:focus,
:root .group:focus [class*=" group-focus\:border-accent"],
:root .group:focus [class^="group-focus\:border-accent"] {
  border-color: #cba6f7 !important;
}
:root [class*=" focus\:fill-accent"]:focus,
:root [class^="focus\:fill-accent"]:focus,
:root .group:focus [class*=" group-focus\:fill-accent"],
:root .group:focus [class^="group-focus\:fill-accent"] {
  fill: #d9bdf9 !important;
}
:root [class*=" focus\:bg-accent"]:focus,
:root [class^="focus\:bg-accent"]:focus,
:root .group:focus [class*=" group-focus\:bg-accent"],
:root .group:focus [class^="group-focus\:bg-accent"] {
  background-color: #cba6f7 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #cba6f7;
}
:root [class*=" focus\:bg-accent"]:focus path[stroke="#fff"],
:root [class^="focus\:bg-accent"]:focus path[stroke="#fff"],
:root .group:focus [class*=" group-focus\:bg-accent"] path[stroke="#fff"],
:root .group:focus [class^="group-focus\:bg-accent"] path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root [class*=" focus\:bg-accent"]:focus [class*="text-"],
:root [class^="focus\:bg-accent"]:focus [class*="text-"],
:root .group:focus [class*=" group-focus\:bg-accent"] [class*="text-"],
:root .group:focus [class^="group-focus\:bg-accent"] [class*="text-"],
:root [class*=" focus\:bg-accent"]:focus [class*="fill-"],
:root [class^="focus\:bg-accent"]:focus [class*="fill-"],
:root .group:focus [class*=" group-focus\:bg-accent"] [class*="fill-"],
:root .group:focus [class^="group-focus\:bg-accent"] [class*="fill-"],
:root [class*=" focus\:bg-accent"]:focus[class*="text-"],
:root [class^="focus\:bg-accent"]:focus[class*="text-"],
:root .group:focus [class*=" group-focus\:bg-accent"][class*="text-"],
:root .group:focus [class^="group-focus\:bg-accent"][class*="text-"],
:root [class*=" focus\:bg-accent"]:focus[class*="fill-"],
:root [class^="focus\:bg-accent"]:focus[class*="fill-"],
:root .group:focus [class*=" group-focus\:bg-accent"][class*="fill-"],
:root .group:focus [class^="group-focus\:bg-accent"][class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root .bg-primary {
  background-color: #cba6f7 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #cba6f7;
}
:root .bg-primary path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root .bg-primary [class*="text-"],
:root .bg-primary [class*="fill-"],
:root .bg-primary[class*="text-"],
:root .bg-primary[class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root .bg-accent {
  background-color: #cba6f7 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #cba6f7;
}
:root .bg-accent path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root .bg-accent [class*="text-"],
:root .bg-accent [class*="fill-"],
:root .bg-accent[class*="text-"],
:root .bg-accent[class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root .bg-destructive {
  background-color: #f38ba8 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #f38ba8;
}
:root .bg-destructive path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root .bg-destructive [class*="text-"],
:root .bg-destructive [class*="fill-"],
:root .bg-destructive[class*="text-"],
:root .bg-destructive[class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root .bg-info {
  background-color: #89b4fa !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #89b4fa;
}
:root .bg-info path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root .bg-info [class*="text-"],
:root .bg-info [class*="fill-"],
:root .bg-info[class*="text-"],
:root .bg-info[class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root .bg-success {
  background-color: #a6e3a1 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #a6e3a1;
}
:root .bg-success path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root .bg-success [class*="text-"],
:root .bg-success [class*="fill-"],
:root .bg-success[class*="text-"],
:root .bg-success[class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root .text-yellow-900 {
  color: #1e1e2e;
}
:root .border-orange-800 {
  border-color: #fab387;
}
:root .hover\:bg-gray-700:hover {
  background-color: #cba6f7 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #cba6f7;
}
:root .hover\:bg-gray-700:hover path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root .hover\:bg-gray-700:hover [class*="text-"],
:root .hover\:bg-gray-700:hover [class*="fill-"],
:root .hover\:bg-gray-700:hover[class*="text-"],
:root .hover\:bg-gray-700:hover[class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root .hover\:bg-indigo-700:hover {
  background-color: #d9bdf9 !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #d9bdf9;
}
:root .hover\:bg-indigo-700:hover path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root .hover\:bg-indigo-700:hover [class*="text-"],
:root .hover\:bg-indigo-700:hover [class*="fill-"],
:root .hover\:bg-indigo-700:hover[class*="text-"],
:root .hover\:bg-indigo-700:hover[class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root .bg-indigo-500,
:root .hover\:bg-yellow-500:hover {
  background-color: #e6d5fb !important;
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
  --tw-ring-color: #e6d5fb;
}
:root .bg-indigo-500 path[stroke="#fff"],
:root .hover\:bg-yellow-500:hover path[stroke="#fff"] {
  stroke: #1e1e2e !important;
}
:root .bg-indigo-500 [class*="text-"],
:root .hover\:bg-yellow-500:hover [class*="text-"],
:root .bg-indigo-500 [class*="fill-"],
:root .hover\:bg-yellow-500:hover [class*="fill-"],
:root .bg-indigo-500[class*="text-"],
:root .hover\:bg-yellow-500:hover[class*="text-"],
:root .bg-indigo-500[class*="fill-"],
:root .hover\:bg-yellow-500:hover[class*="fill-"] {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root .dark\:fill-gray-300 {
  fill: #cdd6f4;
}
:root .dark\:text-gray-300 {
  color: #cdd6f4;
}
:root .bg-white.text-black {
  color: #cdd6f4 !important;
}
:root .bg-black\/30.backdrop-brightness-50 {
  backdrop-filter: none;
  background-color: #11111b;
}
:root .focus\:ring-indigo-500,
:root .hover\:ring-white:hover,
:root .ring-accent,
:root .focus\:ring-primary,
:root .focus\:ring-ring:focus {
  --tw-ring-color: #cba6f7;
}
:root .ring-secondary,
:root .focus\:ring-gray-200 {
  --tw-ring-color: #181825;
}
:root .ring-card {
  --tw-ring-color: #11111b;
}
:root .ring-gray-200 {
  --tw-ring-color: #313244;
}
:root .divide-secondary > :not(:last-child),
:root .divide-gray-200 > :not(:last-child),
:root .divide-gray-100 > :not(:last-child) {
  border-color: #313244 !important;
}
:root .decoration-gray-300 {
  text-decoration-color: #6c7086;
}
:root .decoration-accent\/50 {
  text-decoration-color: #cba6f7;
}
:root .to-white.bg-gradient-to-b {
  background-image: linear-gradient(to bottom, #11111b 28%, transparent 50%, #1e1e2e 100%);
}
:root .via-70\%.to-white.bg-gradient-to-b {
  background-image: linear-gradient(to bottom, transparent 50%, #1e1e2e 100%);
  background-color: transparent;
}
:root .bg-gradient-to-b.from-transparent.to-gray-100 {
  background-image: linear-gradient(to bottom, transparent 50%, #11111b 100%);
  background-color: transparent;
}
:root .to-white.from-transparent {
  background-image: linear-gradient(to bottom, transparent 50%, #1e1e2e 100%);
  background-color: transparent;
}
:root .to-background {
  --tw-gradient-to: #1e1e2e var(--tw-gradient-to-position) !important;
}
:root .from-indigo-700.to-indigo-900 {
  background-image: none;
  background-color: #cba6f7;
}
:root .from-indigo-700.to-indigo-900 p,
:root .from-indigo-700.to-indigo-900 div,
:root .from-indigo-700.to-indigo-900 .text-indigo-400,
:root .from-indigo-700.to-indigo-900 .fill-indigo-400 {
  color: #1e1e2e !important;
  fill: #1e1e2e !important;
}
:root .from-indigo-700.to-indigo-900 svg.animate-reversespin {
  fill: initial;
}
:root .to-gray-200 {
  --tw-gradient-to: #313244;
}
:root .fill-white {
  fill: #1e1e2e;
}
:root .dark\:text-white {
  color: #cdd6f4;
}
:root .stroke-gray-200 {
  stroke: #313244;
}
:root .text-accent[fill="currentColor"] {
  fill: #f9e2af;
}
:root .dark\:bg-gray-900 > div > svg {
  fill: #cdd6f4;
}
:root [fill="#4F46E5"],
:root [fill="#4338CA"] {
  fill: #cba6f7;
}
:root [fill="#6366F1"] {
  fill: #d9bdf9;
}
:root [fill="#EEF2FF"],
:root [fill="#312E81"] {
  fill: #11111b;
}
:root [fill="#A5B4FC"],
:root [fill="#F9FAFB"],
:root [fill="white"] {
  fill: #cdd6f4;
}
:root [fill="#C7D2FE"] {
  fill: #bac2de;
}
:root [stroke="#6366F1"] {
  stroke: #bd8ff5;
}
:root [fill="url(#paint0_linear_4558_14242)"] {
  fill: #cba6f7;
}
:root [fill="url(#paint1_linear_4558_14242)"] {
  fill: #b077f3;
}
:root [fill="#0F0E26"],
:root [fill="#78350F"] {
  fill: #11111b;
}
:root [fill="#FBBF24"],
:root [fill="url(#paint2_linear_4558_14242)"],
:root [fill="url(#paint3_linear_4558_14242)"],
:root [fill="url(#paint4_linear_4558_14242)"],
:root [fill="url(#paint5_linear_4558_14242)"] {
  fill: #f9e2af;
}
:root [fill="#818CF8"] {
  fill: #e6d5fb;
}
:root [fill="#facc15"] {
  fill: #f9e2af;
}
:root [fill="#6b7280"] {
  fill: #45475a;
}
:root [fill="#111827"][stroke="#374151"],
:root [fill="#111827"] {
  fill: #181825;
  stroke: #181825;
}
:root [fill="#FFFFFF"] {
  fill: #181825;
}
:root [stroke="#E5E7EB"] {
  stroke: #181825;
}
:root [fill="#d30001"] {
  fill: #cba6f7;
}
:root [fill="#4B5563"] {
  fill: #313244;
}
:root [fill="#9CA3AF"],
:root [fill="#374151"] {
  fill: #45475a;
}
:root [fill="#6B7280"] {
  fill: #585b70;
}
:root [stroke="#6B7280"],
:root [stroke="#374151"],
:root [stroke="#4B5563"] {
  stroke: #585b70;
}
:root [fill="#F3F4F6"],
:root [fill="#FFFBEB"],
:root [fill="#fff"] {
  fill: #cdd6f4;
}
:root [fill="#1F2937"] {
  fill: #1e1e2e;
}
:root [fill="#3730A3"] {
  fill: #bd8ff5;
}
:root [fill="url(#paint1_linear_15306_236)"] {
  fill: #181825;
}
:root .prose {
  color: #cdd6f4;
}
:root .prose strong {
  color: #cdd6f4;
}
:root .prose :where(a):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: #cba6f7;
  text-decoration-color: rgba(203, 166, 247, 0.3);
}
:root .prose hr {
  border-color: #cdd6f4;
}
:root #tooltip.react-tooltip {
  background-color: #cba6f7 !important;
  border-color: #cba6f7 !important;
  color: #1e1e2e !important;
}
:root #tooltip.react-tooltip span,
:root #tooltip.react-tooltip a,
:root #tooltip.react-tooltip h1,
:root #tooltip.react-tooltip h2,
:root #tooltip.react-tooltip div {
  color: #1e1e2e !important;
}
:root .md\:bg-transparent {
  background: rgba(30, 30, 46, 0.5) !important;
}
:root .shadow-button {
  box-shadow: none;
}
:root input.bg-background,
:root textarea.bg-background {
  background-color: #11111b;
}
:root .form-radio,
:root [type="radio"] {
  background-color: #11111b;
  --tw-ring-offset-color: #cba6f7;
}
:root .form-radio:checked,
:root [type="radio"]:checked {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22%231e1e2e%22%20viewBox%3D%220%200%2016%2016%22%3E%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%223%22/%3E%3C/svg%3E");
  background-color: #cba6f7;
}
:root .form-checkbox,
:root [type="checkbox"] {
  background-color: #11111b;
  --tw-ring-offset-color: #cba6f7;
}
:root .form-checkbox:checked,
:root [type="checkbox"]:checked {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22%231e1e2e%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M12.207%204.793a1%201%200%200%201%200%201.414l-5%205a1%201%200%200%201-1.414%200l-2-2a1%201%200%200%201%201.414-1.414L6.5%209.086l4.293-4.293a1%201%200%200%201%201.414%200%22/%3E%3C/svg%3E");
  background-color: #cba6f7;
}
:root main > .from-transparent.to-gray-100 {
  --tw-gradient-to: #11111b !important;
  --tw-gradient-from: #181825 !important;
}
:root a[href^="/account"] {
  border-color: #6c7086;
}
:root .bg-\[rgba\(255\,255\,255\,0\.7\)\] {
  background-color: rgba(30, 30, 46, 0.7);
}
:root :where([data-close-button]) {
  background-color: #f38ba8 !important;
  color: #1e1e2e !important;
  border-color: #f38ba8;
}
:root div[id*="headlessui-menu-item-"] {
  border-color: #313244;
}
@property --tw-ring-offset-color {
  syntax: "*";
  initial-value: #313244;
  inherits: false;
}

`)