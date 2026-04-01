// ==UserScript==
// @name    Userstyle (nixos-manual.css)
// @include    https://nixos.org/manual/*
// @include    https://nix-darwin.github.io/nix-darwin/manual/*
// ==/UserScript==
GM_addStyle(`/* ==UserStyle==
@name NixOS Manual/Nixpkgs Manual Catppuccin
@namespace github.com/catppuccin/userstyles/styles/nixos-manual
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/nixos-manual
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/nixos-manual/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Anixos-manual
@description Soothing pastel theme for NixOS Manual and Nixpkgs Manual
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@import url("https://unpkg.com/@catppuccin/highlightjs@1.0.0/css/catppuccin-variables.important.css");
@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    --ctp-rosewater: #f5e0dc;
    --ctp-flamingo: #f2cdcd;
    --ctp-pink: #f5c2e7;
    --ctp-mauve: #cba6f7;
    --ctp-red: #f38ba8;
    --ctp-maroon: #eba0ac;
    --ctp-peach: #fab387;
    --ctp-yellow: #f9e2af;
    --ctp-green: #a6e3a1;
    --ctp-teal: #94e2d5;
    --ctp-sky: #89dceb;
    --ctp-sapphire: #74c7ec;
    --ctp-blue: #89b4fa;
    --ctp-lavender: #b4befe;
    --ctp-text: #cdd6f4;
    --ctp-subtext1: #bac2de;
    --ctp-subtext0: #a6adc8;
    --ctp-overlay2: #9399b2;
    --ctp-overlay1: #7f849c;
    --ctp-overlay0: #6c7086;
    --ctp-surface2: #585b70;
    --ctp-surface1: #45475a;
    --ctp-surface0: #313244;
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;
    --background: #1e1e2e;
    --main-text-color: #cdd6f4;
    --link-color: #cba6f7;
    --heading-color: #cba6f7;
    --small-heading-color: rgba(203, 166, 247, 0.85);
    --note-text-color: #89b4fa;
    --note-background: #1e1e2e;
    --warning-text-color: #f38ba8;
    --warning-background: #1e1e2e;
    --codeblock-background: #313244;
    --codeblock-text-color: #cdd6f4;
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root div.book .programlisting,
  :root div.appendix .programlisting {
    background-color: #313244 !important;
  }
  :root hr,
  :root div.toc {
    border-top-color: transparent;
    border-bottom-color: #7f849c !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] {
    background-color: #11111b !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"],
  :root div[style^="background: #333333;color: #FFFFFF;"] dt {
    color: #cdd6f4 !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] a {
    color: #cba6f7 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --ctp-rosewater: #f5e0dc;
    --ctp-flamingo: #f2cdcd;
    --ctp-pink: #f5c2e7;
    --ctp-mauve: #cba6f7;
    --ctp-red: #f38ba8;
    --ctp-maroon: #eba0ac;
    --ctp-peach: #fab387;
    --ctp-yellow: #f9e2af;
    --ctp-green: #a6e3a1;
    --ctp-teal: #94e2d5;
    --ctp-sky: #89dceb;
    --ctp-sapphire: #74c7ec;
    --ctp-blue: #89b4fa;
    --ctp-lavender: #b4befe;
    --ctp-text: #cdd6f4;
    --ctp-subtext1: #bac2de;
    --ctp-subtext0: #a6adc8;
    --ctp-overlay2: #9399b2;
    --ctp-overlay1: #7f849c;
    --ctp-overlay0: #6c7086;
    --ctp-surface2: #585b70;
    --ctp-surface1: #45475a;
    --ctp-surface0: #313244;
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;
    --background: #1e1e2e;
    --main-text-color: #cdd6f4;
    --link-color: #cba6f7;
    --heading-color: #cba6f7;
    --small-heading-color: rgba(203, 166, 247, 0.85);
    --note-text-color: #89b4fa;
    --note-background: #1e1e2e;
    --warning-text-color: #f38ba8;
    --warning-background: #1e1e2e;
    --codeblock-background: #313244;
    --codeblock-text-color: #cdd6f4;
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root div.book .programlisting,
  :root div.appendix .programlisting {
    background-color: #313244 !important;
  }
  :root hr,
  :root div.toc {
    border-top-color: transparent;
    border-bottom-color: #7f849c !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] {
    background-color: #11111b !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"],
  :root div[style^="background: #333333;color: #FFFFFF;"] dt {
    color: #cdd6f4 !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] a {
    color: #cba6f7 !important;
  }
}

/* ==UserStyle==
@name NixOS Manual/Nixpkgs Manual Catppuccin
@namespace github.com/catppuccin/userstyles/styles/nixos-manual
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/nixos-manual
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/nixos-manual/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Anixos-manual
@description Soothing pastel theme for NixOS Manual and Nixpkgs Manual
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@import url("https://unpkg.com/@catppuccin/highlightjs@1.0.0/css/catppuccin-variables.important.css");
@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    --ctp-rosewater: #f5e0dc;
    --ctp-flamingo: #f2cdcd;
    --ctp-pink: #f5c2e7;
    --ctp-mauve: #cba6f7;
    --ctp-red: #f38ba8;
    --ctp-maroon: #eba0ac;
    --ctp-peach: #fab387;
    --ctp-yellow: #f9e2af;
    --ctp-green: #a6e3a1;
    --ctp-teal: #94e2d5;
    --ctp-sky: #89dceb;
    --ctp-sapphire: #74c7ec;
    --ctp-blue: #89b4fa;
    --ctp-lavender: #b4befe;
    --ctp-text: #cdd6f4;
    --ctp-subtext1: #bac2de;
    --ctp-subtext0: #a6adc8;
    --ctp-overlay2: #9399b2;
    --ctp-overlay1: #7f849c;
    --ctp-overlay0: #6c7086;
    --ctp-surface2: #585b70;
    --ctp-surface1: #45475a;
    --ctp-surface0: #313244;
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;
    --background: #1e1e2e;
    --main-text-color: #cdd6f4;
    --link-color: #cba6f7;
    --heading-color: #cba6f7;
    --small-heading-color: rgba(203, 166, 247, 0.85);
    --note-text-color: #89b4fa;
    --note-background: #1e1e2e;
    --warning-text-color: #f38ba8;
    --warning-background: #1e1e2e;
    --codeblock-background: #313244;
    --codeblock-text-color: #cdd6f4;
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root div.book .programlisting,
  :root div.appendix .programlisting {
    background-color: #313244 !important;
  }
  :root hr,
  :root div.toc {
    border-top-color: transparent;
    border-bottom-color: #7f849c !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] {
    background-color: #11111b !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"],
  :root div[style^="background: #333333;color: #FFFFFF;"] dt {
    color: #cdd6f4 !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] a {
    color: #cba6f7 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --ctp-rosewater: #f5e0dc;
    --ctp-flamingo: #f2cdcd;
    --ctp-pink: #f5c2e7;
    --ctp-mauve: #cba6f7;
    --ctp-red: #f38ba8;
    --ctp-maroon: #eba0ac;
    --ctp-peach: #fab387;
    --ctp-yellow: #f9e2af;
    --ctp-green: #a6e3a1;
    --ctp-teal: #94e2d5;
    --ctp-sky: #89dceb;
    --ctp-sapphire: #74c7ec;
    --ctp-blue: #89b4fa;
    --ctp-lavender: #b4befe;
    --ctp-text: #cdd6f4;
    --ctp-subtext1: #bac2de;
    --ctp-subtext0: #a6adc8;
    --ctp-overlay2: #9399b2;
    --ctp-overlay1: #7f849c;
    --ctp-overlay0: #6c7086;
    --ctp-surface2: #585b70;
    --ctp-surface1: #45475a;
    --ctp-surface0: #313244;
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;
    --background: #1e1e2e;
    --main-text-color: #cdd6f4;
    --link-color: #cba6f7;
    --heading-color: #cba6f7;
    --small-heading-color: rgba(203, 166, 247, 0.85);
    --note-text-color: #89b4fa;
    --note-background: #1e1e2e;
    --warning-text-color: #f38ba8;
    --warning-background: #1e1e2e;
    --codeblock-background: #313244;
    --codeblock-text-color: #cdd6f4;
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root div.book .programlisting,
  :root div.appendix .programlisting {
    background-color: #313244 !important;
  }
  :root hr,
  :root div.toc {
    border-top-color: transparent;
    border-bottom-color: #7f849c !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] {
    background-color: #11111b !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"],
  :root div[style^="background: #333333;color: #FFFFFF;"] dt {
    color: #cdd6f4 !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] a {
    color: #cba6f7 !important;
  }
}

/* ==UserStyle==
@name NixOS Manual/Nixpkgs Manual Catppuccin
@namespace github.com/catppuccin/userstyles/styles/nixos-manual
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/nixos-manual
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/nixos-manual/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Anixos-manual
@description Soothing pastel theme for NixOS Manual and Nixpkgs Manual
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@import url("https://unpkg.com/@catppuccin/highlightjs@1.0.0/css/catppuccin-variables.important.css");
@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    --ctp-rosewater: #f5e0dc;
    --ctp-flamingo: #f2cdcd;
    --ctp-pink: #f5c2e7;
    --ctp-mauve: #cba6f7;
    --ctp-red: #f38ba8;
    --ctp-maroon: #eba0ac;
    --ctp-peach: #fab387;
    --ctp-yellow: #f9e2af;
    --ctp-green: #a6e3a1;
    --ctp-teal: #94e2d5;
    --ctp-sky: #89dceb;
    --ctp-sapphire: #74c7ec;
    --ctp-blue: #89b4fa;
    --ctp-lavender: #b4befe;
    --ctp-text: #cdd6f4;
    --ctp-subtext1: #bac2de;
    --ctp-subtext0: #a6adc8;
    --ctp-overlay2: #9399b2;
    --ctp-overlay1: #7f849c;
    --ctp-overlay0: #6c7086;
    --ctp-surface2: #585b70;
    --ctp-surface1: #45475a;
    --ctp-surface0: #313244;
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;
    --background: #1e1e2e;
    --main-text-color: #cdd6f4;
    --link-color: #cba6f7;
    --heading-color: #cba6f7;
    --small-heading-color: rgba(203, 166, 247, 0.85);
    --note-text-color: #89b4fa;
    --note-background: #1e1e2e;
    --warning-text-color: #f38ba8;
    --warning-background: #1e1e2e;
    --codeblock-background: #313244;
    --codeblock-text-color: #cdd6f4;
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root div.book .programlisting,
  :root div.appendix .programlisting {
    background-color: #313244 !important;
  }
  :root hr,
  :root div.toc {
    border-top-color: transparent;
    border-bottom-color: #7f849c !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] {
    background-color: #11111b !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"],
  :root div[style^="background: #333333;color: #FFFFFF;"] dt {
    color: #cdd6f4 !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] a {
    color: #cba6f7 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --ctp-rosewater: #f5e0dc;
    --ctp-flamingo: #f2cdcd;
    --ctp-pink: #f5c2e7;
    --ctp-mauve: #cba6f7;
    --ctp-red: #f38ba8;
    --ctp-maroon: #eba0ac;
    --ctp-peach: #fab387;
    --ctp-yellow: #f9e2af;
    --ctp-green: #a6e3a1;
    --ctp-teal: #94e2d5;
    --ctp-sky: #89dceb;
    --ctp-sapphire: #74c7ec;
    --ctp-blue: #89b4fa;
    --ctp-lavender: #b4befe;
    --ctp-text: #cdd6f4;
    --ctp-subtext1: #bac2de;
    --ctp-subtext0: #a6adc8;
    --ctp-overlay2: #9399b2;
    --ctp-overlay1: #7f849c;
    --ctp-overlay0: #6c7086;
    --ctp-surface2: #585b70;
    --ctp-surface1: #45475a;
    --ctp-surface0: #313244;
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;
    --background: #1e1e2e;
    --main-text-color: #cdd6f4;
    --link-color: #cba6f7;
    --heading-color: #cba6f7;
    --small-heading-color: rgba(203, 166, 247, 0.85);
    --note-text-color: #89b4fa;
    --note-background: #1e1e2e;
    --warning-text-color: #f38ba8;
    --warning-background: #1e1e2e;
    --codeblock-background: #313244;
    --codeblock-text-color: #cdd6f4;
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root div.book .programlisting,
  :root div.appendix .programlisting {
    background-color: #313244 !important;
  }
  :root hr,
  :root div.toc {
    border-top-color: transparent;
    border-bottom-color: #7f849c !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] {
    background-color: #11111b !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"],
  :root div[style^="background: #333333;color: #FFFFFF;"] dt {
    color: #cdd6f4 !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] a {
    color: #cba6f7 !important;
  }
}

/* ==UserStyle==
@name NixOS Manual/Nixpkgs Manual Catppuccin
@namespace github.com/catppuccin/userstyles/styles/nixos-manual
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/nixos-manual
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/nixos-manual/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Anixos-manual
@description Soothing pastel theme for NixOS Manual and Nixpkgs Manual
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@import url("https://unpkg.com/@catppuccin/highlightjs@1.0.0/css/catppuccin-variables.important.css");
@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    --ctp-rosewater: #f5e0dc;
    --ctp-flamingo: #f2cdcd;
    --ctp-pink: #f5c2e7;
    --ctp-mauve: #cba6f7;
    --ctp-red: #f38ba8;
    --ctp-maroon: #eba0ac;
    --ctp-peach: #fab387;
    --ctp-yellow: #f9e2af;
    --ctp-green: #a6e3a1;
    --ctp-teal: #94e2d5;
    --ctp-sky: #89dceb;
    --ctp-sapphire: #74c7ec;
    --ctp-blue: #89b4fa;
    --ctp-lavender: #b4befe;
    --ctp-text: #cdd6f4;
    --ctp-subtext1: #bac2de;
    --ctp-subtext0: #a6adc8;
    --ctp-overlay2: #9399b2;
    --ctp-overlay1: #7f849c;
    --ctp-overlay0: #6c7086;
    --ctp-surface2: #585b70;
    --ctp-surface1: #45475a;
    --ctp-surface0: #313244;
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;
    --background: #1e1e2e;
    --main-text-color: #cdd6f4;
    --link-color: #cba6f7;
    --heading-color: #cba6f7;
    --small-heading-color: rgba(203, 166, 247, 0.85);
    --note-text-color: #89b4fa;
    --note-background: #1e1e2e;
    --warning-text-color: #f38ba8;
    --warning-background: #1e1e2e;
    --codeblock-background: #313244;
    --codeblock-text-color: #cdd6f4;
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root div.book .programlisting,
  :root div.appendix .programlisting {
    background-color: #313244 !important;
  }
  :root hr,
  :root div.toc {
    border-top-color: transparent;
    border-bottom-color: #7f849c !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] {
    background-color: #11111b !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"],
  :root div[style^="background: #333333;color: #FFFFFF;"] dt {
    color: #cdd6f4 !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] a {
    color: #cba6f7 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --ctp-rosewater: #f5e0dc;
    --ctp-flamingo: #f2cdcd;
    --ctp-pink: #f5c2e7;
    --ctp-mauve: #cba6f7;
    --ctp-red: #f38ba8;
    --ctp-maroon: #eba0ac;
    --ctp-peach: #fab387;
    --ctp-yellow: #f9e2af;
    --ctp-green: #a6e3a1;
    --ctp-teal: #94e2d5;
    --ctp-sky: #89dceb;
    --ctp-sapphire: #74c7ec;
    --ctp-blue: #89b4fa;
    --ctp-lavender: #b4befe;
    --ctp-text: #cdd6f4;
    --ctp-subtext1: #bac2de;
    --ctp-subtext0: #a6adc8;
    --ctp-overlay2: #9399b2;
    --ctp-overlay1: #7f849c;
    --ctp-overlay0: #6c7086;
    --ctp-surface2: #585b70;
    --ctp-surface1: #45475a;
    --ctp-surface0: #313244;
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;
    --background: #1e1e2e;
    --main-text-color: #cdd6f4;
    --link-color: #cba6f7;
    --heading-color: #cba6f7;
    --small-heading-color: rgba(203, 166, 247, 0.85);
    --note-text-color: #89b4fa;
    --note-background: #1e1e2e;
    --warning-text-color: #f38ba8;
    --warning-background: #1e1e2e;
    --codeblock-background: #313244;
    --codeblock-text-color: #cdd6f4;
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root div.book .programlisting,
  :root div.appendix .programlisting {
    background-color: #313244 !important;
  }
  :root hr,
  :root div.toc {
    border-top-color: transparent;
    border-bottom-color: #7f849c !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] {
    background-color: #11111b !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"],
  :root div[style^="background: #333333;color: #FFFFFF;"] dt {
    color: #cdd6f4 !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] a {
    color: #cba6f7 !important;
  }
}

/* ==UserStyle==
@name NixOS Manual/Nixpkgs Manual Catppuccin
@namespace github.com/catppuccin/userstyles/styles/nixos-manual
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/nixos-manual
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/nixos-manual/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Anixos-manual
@description Soothing pastel theme for NixOS Manual and Nixpkgs Manual
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */

@import url("https://unpkg.com/@catppuccin/highlightjs@1.0.0/css/catppuccin-variables.important.css");
@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    --ctp-rosewater: #f5e0dc;
    --ctp-flamingo: #f2cdcd;
    --ctp-pink: #f5c2e7;
    --ctp-mauve: #cba6f7;
    --ctp-red: #f38ba8;
    --ctp-maroon: #eba0ac;
    --ctp-peach: #fab387;
    --ctp-yellow: #f9e2af;
    --ctp-green: #a6e3a1;
    --ctp-teal: #94e2d5;
    --ctp-sky: #89dceb;
    --ctp-sapphire: #74c7ec;
    --ctp-blue: #89b4fa;
    --ctp-lavender: #b4befe;
    --ctp-text: #cdd6f4;
    --ctp-subtext1: #bac2de;
    --ctp-subtext0: #a6adc8;
    --ctp-overlay2: #9399b2;
    --ctp-overlay1: #7f849c;
    --ctp-overlay0: #6c7086;
    --ctp-surface2: #585b70;
    --ctp-surface1: #45475a;
    --ctp-surface0: #313244;
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;
    --background: #1e1e2e;
    --main-text-color: #cdd6f4;
    --link-color: #cba6f7;
    --heading-color: #cba6f7;
    --small-heading-color: rgba(203, 166, 247, 0.85);
    --note-text-color: #89b4fa;
    --note-background: #1e1e2e;
    --warning-text-color: #f38ba8;
    --warning-background: #1e1e2e;
    --codeblock-background: #313244;
    --codeblock-text-color: #cdd6f4;
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root div.book .programlisting,
  :root div.appendix .programlisting {
    background-color: #313244 !important;
  }
  :root hr,
  :root div.toc {
    border-top-color: transparent;
    border-bottom-color: #7f849c !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] {
    background-color: #11111b !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"],
  :root div[style^="background: #333333;color: #FFFFFF;"] dt {
    color: #cdd6f4 !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] a {
    color: #cba6f7 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --ctp-rosewater: #f5e0dc;
    --ctp-flamingo: #f2cdcd;
    --ctp-pink: #f5c2e7;
    --ctp-mauve: #cba6f7;
    --ctp-red: #f38ba8;
    --ctp-maroon: #eba0ac;
    --ctp-peach: #fab387;
    --ctp-yellow: #f9e2af;
    --ctp-green: #a6e3a1;
    --ctp-teal: #94e2d5;
    --ctp-sky: #89dceb;
    --ctp-sapphire: #74c7ec;
    --ctp-blue: #89b4fa;
    --ctp-lavender: #b4befe;
    --ctp-text: #cdd6f4;
    --ctp-subtext1: #bac2de;
    --ctp-subtext0: #a6adc8;
    --ctp-overlay2: #9399b2;
    --ctp-overlay1: #7f849c;
    --ctp-overlay0: #6c7086;
    --ctp-surface2: #585b70;
    --ctp-surface1: #45475a;
    --ctp-surface0: #313244;
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;
    --background: #1e1e2e;
    --main-text-color: #cdd6f4;
    --link-color: #cba6f7;
    --heading-color: #cba6f7;
    --small-heading-color: rgba(203, 166, 247, 0.85);
    --note-text-color: #89b4fa;
    --note-background: #1e1e2e;
    --warning-text-color: #f38ba8;
    --warning-background: #1e1e2e;
    --codeblock-background: #313244;
    --codeblock-text-color: #cdd6f4;
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root div.book .programlisting,
  :root div.appendix .programlisting {
    background-color: #313244 !important;
  }
  :root hr,
  :root div.toc {
    border-top-color: transparent;
    border-bottom-color: #7f849c !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] {
    background-color: #11111b !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"],
  :root div[style^="background: #333333;color: #FFFFFF;"] dt {
    color: #cdd6f4 !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] a {
    color: #cba6f7 !important;
  }
}

/* ==UserStyle==
@name NixOS Manual/Nixpkgs Manual Catppuccin
@namespace github.com/catppuccin/userstyles/styles/nixos-manual
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/nixos-manual
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/nixos-manual/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Anixos-manual
@description Soothing pastel theme for NixOS Manual and Nixpkgs Manual
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@import url("https://unpkg.com/@catppuccin/highlightjs@1.0.0/css/catppuccin-variables.important.css");
@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    --ctp-rosewater: #f5e0dc;
    --ctp-flamingo: #f2cdcd;
    --ctp-pink: #f5c2e7;
    --ctp-mauve: #cba6f7;
    --ctp-red: #f38ba8;
    --ctp-maroon: #eba0ac;
    --ctp-peach: #fab387;
    --ctp-yellow: #f9e2af;
    --ctp-green: #a6e3a1;
    --ctp-teal: #94e2d5;
    --ctp-sky: #89dceb;
    --ctp-sapphire: #74c7ec;
    --ctp-blue: #89b4fa;
    --ctp-lavender: #b4befe;
    --ctp-text: #cdd6f4;
    --ctp-subtext1: #bac2de;
    --ctp-subtext0: #a6adc8;
    --ctp-overlay2: #9399b2;
    --ctp-overlay1: #7f849c;
    --ctp-overlay0: #6c7086;
    --ctp-surface2: #585b70;
    --ctp-surface1: #45475a;
    --ctp-surface0: #313244;
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;
    --background: #1e1e2e;
    --main-text-color: #cdd6f4;
    --link-color: #cba6f7;
    --heading-color: #cba6f7;
    --small-heading-color: rgba(203, 166, 247, 0.85);
    --note-text-color: #89b4fa;
    --note-background: #1e1e2e;
    --warning-text-color: #f38ba8;
    --warning-background: #1e1e2e;
    --codeblock-background: #313244;
    --codeblock-text-color: #cdd6f4;
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root div.book .programlisting,
  :root div.appendix .programlisting {
    background-color: #313244 !important;
  }
  :root hr,
  :root div.toc {
    border-top-color: transparent;
    border-bottom-color: #7f849c !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] {
    background-color: #11111b !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"],
  :root div[style^="background: #333333;color: #FFFFFF;"] dt {
    color: #cdd6f4 !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] a {
    color: #cba6f7 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --ctp-rosewater: #f5e0dc;
    --ctp-flamingo: #f2cdcd;
    --ctp-pink: #f5c2e7;
    --ctp-mauve: #cba6f7;
    --ctp-red: #f38ba8;
    --ctp-maroon: #eba0ac;
    --ctp-peach: #fab387;
    --ctp-yellow: #f9e2af;
    --ctp-green: #a6e3a1;
    --ctp-teal: #94e2d5;
    --ctp-sky: #89dceb;
    --ctp-sapphire: #74c7ec;
    --ctp-blue: #89b4fa;
    --ctp-lavender: #b4befe;
    --ctp-text: #cdd6f4;
    --ctp-subtext1: #bac2de;
    --ctp-subtext0: #a6adc8;
    --ctp-overlay2: #9399b2;
    --ctp-overlay1: #7f849c;
    --ctp-overlay0: #6c7086;
    --ctp-surface2: #585b70;
    --ctp-surface1: #45475a;
    --ctp-surface0: #313244;
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;
    --background: #1e1e2e;
    --main-text-color: #cdd6f4;
    --link-color: #cba6f7;
    --heading-color: #cba6f7;
    --small-heading-color: rgba(203, 166, 247, 0.85);
    --note-text-color: #89b4fa;
    --note-background: #1e1e2e;
    --warning-text-color: #f38ba8;
    --warning-background: #1e1e2e;
    --codeblock-background: #313244;
    --codeblock-text-color: #cdd6f4;
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root div.book .programlisting,
  :root div.appendix .programlisting {
    background-color: #313244 !important;
  }
  :root hr,
  :root div.toc {
    border-top-color: transparent;
    border-bottom-color: #7f849c !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] {
    background-color: #11111b !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"],
  :root div[style^="background: #333333;color: #FFFFFF;"] dt {
    color: #cdd6f4 !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] a {
    color: #cba6f7 !important;
  }
}

/* ==UserStyle==
@name NixOS Manual/Nixpkgs Manual Catppuccin
@namespace github.com/catppuccin/userstyles/styles/nixos-manual
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/nixos-manual
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/nixos-manual/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Anixos-manual
@description Soothing pastel theme for NixOS Manual and Nixpkgs Manual
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@import url("https://unpkg.com/@catppuccin/highlightjs@1.0.0/css/catppuccin-variables.important.css");
@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    --ctp-rosewater: #f5e0dc;
    --ctp-flamingo: #f2cdcd;
    --ctp-pink: #f5c2e7;
    --ctp-mauve: #cba6f7;
    --ctp-red: #f38ba8;
    --ctp-maroon: #eba0ac;
    --ctp-peach: #fab387;
    --ctp-yellow: #f9e2af;
    --ctp-green: #a6e3a1;
    --ctp-teal: #94e2d5;
    --ctp-sky: #89dceb;
    --ctp-sapphire: #74c7ec;
    --ctp-blue: #89b4fa;
    --ctp-lavender: #b4befe;
    --ctp-text: #cdd6f4;
    --ctp-subtext1: #bac2de;
    --ctp-subtext0: #a6adc8;
    --ctp-overlay2: #9399b2;
    --ctp-overlay1: #7f849c;
    --ctp-overlay0: #6c7086;
    --ctp-surface2: #585b70;
    --ctp-surface1: #45475a;
    --ctp-surface0: #313244;
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;
    --background: #1e1e2e;
    --main-text-color: #cdd6f4;
    --link-color: #cba6f7;
    --heading-color: #cba6f7;
    --small-heading-color: rgba(203, 166, 247, 0.85);
    --note-text-color: #89b4fa;
    --note-background: #1e1e2e;
    --warning-text-color: #f38ba8;
    --warning-background: #1e1e2e;
    --codeblock-background: #313244;
    --codeblock-text-color: #cdd6f4;
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root div.book .programlisting,
  :root div.appendix .programlisting {
    background-color: #313244 !important;
  }
  :root hr,
  :root div.toc {
    border-top-color: transparent;
    border-bottom-color: #7f849c !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] {
    background-color: #11111b !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"],
  :root div[style^="background: #333333;color: #FFFFFF;"] dt {
    color: #cdd6f4 !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] a {
    color: #cba6f7 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --ctp-rosewater: #f5e0dc;
    --ctp-flamingo: #f2cdcd;
    --ctp-pink: #f5c2e7;
    --ctp-mauve: #cba6f7;
    --ctp-red: #f38ba8;
    --ctp-maroon: #eba0ac;
    --ctp-peach: #fab387;
    --ctp-yellow: #f9e2af;
    --ctp-green: #a6e3a1;
    --ctp-teal: #94e2d5;
    --ctp-sky: #89dceb;
    --ctp-sapphire: #74c7ec;
    --ctp-blue: #89b4fa;
    --ctp-lavender: #b4befe;
    --ctp-text: #cdd6f4;
    --ctp-subtext1: #bac2de;
    --ctp-subtext0: #a6adc8;
    --ctp-overlay2: #9399b2;
    --ctp-overlay1: #7f849c;
    --ctp-overlay0: #6c7086;
    --ctp-surface2: #585b70;
    --ctp-surface1: #45475a;
    --ctp-surface0: #313244;
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;
    --background: #1e1e2e;
    --main-text-color: #cdd6f4;
    --link-color: #cba6f7;
    --heading-color: #cba6f7;
    --small-heading-color: rgba(203, 166, 247, 0.85);
    --note-text-color: #89b4fa;
    --note-background: #1e1e2e;
    --warning-text-color: #f38ba8;
    --warning-background: #1e1e2e;
    --codeblock-background: #313244;
    --codeblock-text-color: #cdd6f4;
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root div.book .programlisting,
  :root div.appendix .programlisting {
    background-color: #313244 !important;
  }
  :root hr,
  :root div.toc {
    border-top-color: transparent;
    border-bottom-color: #7f849c !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] {
    background-color: #11111b !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"],
  :root div[style^="background: #333333;color: #FFFFFF;"] dt {
    color: #cdd6f4 !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] a {
    color: #cba6f7 !important;
  }
}

/* ==UserStyle==
@name NixOS Manual/Nixpkgs Manual Catppuccin
@namespace github.com/catppuccin/userstyles/styles/nixos-manual
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/nixos-manual
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/nixos-manual/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Anixos-manual
@description Soothing pastel theme for NixOS Manual and Nixpkgs Manual
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@import url("https://unpkg.com/@catppuccin/highlightjs@1.0.0/css/catppuccin-variables.important.css");
@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    --ctp-rosewater: #f5e0dc;
    --ctp-flamingo: #f2cdcd;
    --ctp-pink: #f5c2e7;
    --ctp-mauve: #cba6f7;
    --ctp-red: #f38ba8;
    --ctp-maroon: #eba0ac;
    --ctp-peach: #fab387;
    --ctp-yellow: #f9e2af;
    --ctp-green: #a6e3a1;
    --ctp-teal: #94e2d5;
    --ctp-sky: #89dceb;
    --ctp-sapphire: #74c7ec;
    --ctp-blue: #89b4fa;
    --ctp-lavender: #b4befe;
    --ctp-text: #cdd6f4;
    --ctp-subtext1: #bac2de;
    --ctp-subtext0: #a6adc8;
    --ctp-overlay2: #9399b2;
    --ctp-overlay1: #7f849c;
    --ctp-overlay0: #6c7086;
    --ctp-surface2: #585b70;
    --ctp-surface1: #45475a;
    --ctp-surface0: #313244;
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;
    --background: #1e1e2e;
    --main-text-color: #cdd6f4;
    --link-color: #cba6f7;
    --heading-color: #cba6f7;
    --small-heading-color: rgba(203, 166, 247, 0.85);
    --note-text-color: #89b4fa;
    --note-background: #1e1e2e;
    --warning-text-color: #f38ba8;
    --warning-background: #1e1e2e;
    --codeblock-background: #313244;
    --codeblock-text-color: #cdd6f4;
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root div.book .programlisting,
  :root div.appendix .programlisting {
    background-color: #313244 !important;
  }
  :root hr,
  :root div.toc {
    border-top-color: transparent;
    border-bottom-color: #7f849c !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] {
    background-color: #11111b !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"],
  :root div[style^="background: #333333;color: #FFFFFF;"] dt {
    color: #cdd6f4 !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] a {
    color: #cba6f7 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --ctp-rosewater: #f5e0dc;
    --ctp-flamingo: #f2cdcd;
    --ctp-pink: #f5c2e7;
    --ctp-mauve: #cba6f7;
    --ctp-red: #f38ba8;
    --ctp-maroon: #eba0ac;
    --ctp-peach: #fab387;
    --ctp-yellow: #f9e2af;
    --ctp-green: #a6e3a1;
    --ctp-teal: #94e2d5;
    --ctp-sky: #89dceb;
    --ctp-sapphire: #74c7ec;
    --ctp-blue: #89b4fa;
    --ctp-lavender: #b4befe;
    --ctp-text: #cdd6f4;
    --ctp-subtext1: #bac2de;
    --ctp-subtext0: #a6adc8;
    --ctp-overlay2: #9399b2;
    --ctp-overlay1: #7f849c;
    --ctp-overlay0: #6c7086;
    --ctp-surface2: #585b70;
    --ctp-surface1: #45475a;
    --ctp-surface0: #313244;
    --ctp-base: #1e1e2e;
    --ctp-mantle: #181825;
    --ctp-crust: #11111b;
    --background: #1e1e2e;
    --main-text-color: #cdd6f4;
    --link-color: #cba6f7;
    --heading-color: #cba6f7;
    --small-heading-color: rgba(203, 166, 247, 0.85);
    --note-text-color: #89b4fa;
    --note-background: #1e1e2e;
    --warning-text-color: #f38ba8;
    --warning-background: #1e1e2e;
    --codeblock-background: #313244;
    --codeblock-text-color: #cdd6f4;
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root div.book .programlisting,
  :root div.appendix .programlisting {
    background-color: #313244 !important;
  }
  :root hr,
  :root div.toc {
    border-top-color: transparent;
    border-bottom-color: #7f849c !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] {
    background-color: #11111b !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"],
  :root div[style^="background: #333333;color: #FFFFFF;"] dt {
    color: #cdd6f4 !important;
  }
  :root div[style^="background: #333333;color: #FFFFFF;"] a {
    color: #cba6f7 !important;
  }
}

`)