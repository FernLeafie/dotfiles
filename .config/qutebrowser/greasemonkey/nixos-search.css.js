// ==UserScript==
// @name    Userstyle (nixos-search.css)
// @include    *search.nixos.org*
// ==/UserScript==
GM_addStyle(`/* ==UserStyle==
@name NixOS Search Catppuccin
@namespace github.com/catppuccin/userstyles/styles/nixos-search
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/nixos-search
@version 2026.03.10
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/nixos-search/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Anixos-search
@description Soothing pastel theme for NixOS Search
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    --background-color: #1e1e2e;
    --badge-background: #585b70;
    --button-active-background: #45475a;
    --button-active-hover-background: #585b70;
    --button-background: #313244;
    --button-hover-background: #585b70;
    --color-active-hover-tab: #45475a;
    --color-active-tab: #313244;
    --color-hover-tab: #45475a;
    --headerbar-background-color: #181825;
    --hover-background: #313244;
    --link-color: #cba6f7;
    --info-label-background: #cba6f7;
    --dark-blue: #cba6f7;
    --light-blue: #cba6f7;
    --line-color: #313244;
    --search-result-short-details-color: #bac2de;
    --search-result-divider-line-color: #313244;
    --search-result-title-color: #cba6f7;
    --search-sidebar-link-color: #cdd6f4;
    --search-sidebar-selected-link-background: #cba6f7;
    --search-sidebar-selected-link-color: #11111b;
    --terminal-background: #313244;
    --terminal-color: #cdd6f4;
    --text-color: #cdd6f4;
    --text-color-light: #cdd6f4;
    --text-color-warning: #f9e2af;
    /* Experimental Flakes label */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root .badge {
    color: #cdd6f4;
  }
  :root .label {
    color: #1e1e2e;
    text-shadow: none;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --background-color: #1e1e2e;
    --badge-background: #585b70;
    --button-active-background: #45475a;
    --button-active-hover-background: #585b70;
    --button-background: #313244;
    --button-hover-background: #585b70;
    --color-active-hover-tab: #45475a;
    --color-active-tab: #313244;
    --color-hover-tab: #45475a;
    --headerbar-background-color: #181825;
    --hover-background: #313244;
    --link-color: #cba6f7;
    --info-label-background: #cba6f7;
    --dark-blue: #cba6f7;
    --light-blue: #cba6f7;
    --line-color: #313244;
    --search-result-short-details-color: #bac2de;
    --search-result-divider-line-color: #313244;
    --search-result-title-color: #cba6f7;
    --search-sidebar-link-color: #cdd6f4;
    --search-sidebar-selected-link-background: #cba6f7;
    --search-sidebar-selected-link-color: #11111b;
    --terminal-background: #313244;
    --terminal-color: #cdd6f4;
    --text-color: #cdd6f4;
    --text-color-light: #cdd6f4;
    --text-color-warning: #f9e2af;
    /* Experimental Flakes label */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root .badge {
    color: #cdd6f4;
  }
  :root .label {
    color: #1e1e2e;
    text-shadow: none;
  }
}

/* ==UserStyle==
@name NixOS Search Catppuccin
@namespace github.com/catppuccin/userstyles/styles/nixos-search
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/nixos-search
@version 2026.03.10
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/nixos-search/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Anixos-search
@description Soothing pastel theme for NixOS Search
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    --background-color: #1e1e2e;
    --badge-background: #585b70;
    --button-active-background: #45475a;
    --button-active-hover-background: #585b70;
    --button-background: #313244;
    --button-hover-background: #585b70;
    --color-active-hover-tab: #45475a;
    --color-active-tab: #313244;
    --color-hover-tab: #45475a;
    --headerbar-background-color: #181825;
    --hover-background: #313244;
    --link-color: #cba6f7;
    --info-label-background: #cba6f7;
    --dark-blue: #cba6f7;
    --light-blue: #cba6f7;
    --line-color: #313244;
    --search-result-short-details-color: #bac2de;
    --search-result-divider-line-color: #313244;
    --search-result-title-color: #cba6f7;
    --search-sidebar-link-color: #cdd6f4;
    --search-sidebar-selected-link-background: #cba6f7;
    --search-sidebar-selected-link-color: #11111b;
    --terminal-background: #313244;
    --terminal-color: #cdd6f4;
    --text-color: #cdd6f4;
    --text-color-light: #cdd6f4;
    --text-color-warning: #f9e2af;
    /* Experimental Flakes label */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root .badge {
    color: #cdd6f4;
  }
  :root .label {
    color: #1e1e2e;
    text-shadow: none;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --background-color: #1e1e2e;
    --badge-background: #585b70;
    --button-active-background: #45475a;
    --button-active-hover-background: #585b70;
    --button-background: #313244;
    --button-hover-background: #585b70;
    --color-active-hover-tab: #45475a;
    --color-active-tab: #313244;
    --color-hover-tab: #45475a;
    --headerbar-background-color: #181825;
    --hover-background: #313244;
    --link-color: #cba6f7;
    --info-label-background: #cba6f7;
    --dark-blue: #cba6f7;
    --light-blue: #cba6f7;
    --line-color: #313244;
    --search-result-short-details-color: #bac2de;
    --search-result-divider-line-color: #313244;
    --search-result-title-color: #cba6f7;
    --search-sidebar-link-color: #cdd6f4;
    --search-sidebar-selected-link-background: #cba6f7;
    --search-sidebar-selected-link-color: #11111b;
    --terminal-background: #313244;
    --terminal-color: #cdd6f4;
    --text-color: #cdd6f4;
    --text-color-light: #cdd6f4;
    --text-color-warning: #f9e2af;
    /* Experimental Flakes label */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root .badge {
    color: #cdd6f4;
  }
  :root .label {
    color: #1e1e2e;
    text-shadow: none;
  }
}

/* ==UserStyle==
@name NixOS Search Catppuccin
@namespace github.com/catppuccin/userstyles/styles/nixos-search
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/nixos-search
@version 2026.03.10
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/nixos-search/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Anixos-search
@description Soothing pastel theme for NixOS Search
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    --background-color: #1e1e2e;
    --badge-background: #585b70;
    --button-active-background: #45475a;
    --button-active-hover-background: #585b70;
    --button-background: #313244;
    --button-hover-background: #585b70;
    --color-active-hover-tab: #45475a;
    --color-active-tab: #313244;
    --color-hover-tab: #45475a;
    --headerbar-background-color: #181825;
    --hover-background: #313244;
    --link-color: #cba6f7;
    --info-label-background: #cba6f7;
    --dark-blue: #cba6f7;
    --light-blue: #cba6f7;
    --line-color: #313244;
    --search-result-short-details-color: #bac2de;
    --search-result-divider-line-color: #313244;
    --search-result-title-color: #cba6f7;
    --search-sidebar-link-color: #cdd6f4;
    --search-sidebar-selected-link-background: #cba6f7;
    --search-sidebar-selected-link-color: #11111b;
    --terminal-background: #313244;
    --terminal-color: #cdd6f4;
    --text-color: #cdd6f4;
    --text-color-light: #cdd6f4;
    --text-color-warning: #f9e2af;
    /* Experimental Flakes label */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root .badge {
    color: #cdd6f4;
  }
  :root .label {
    color: #1e1e2e;
    text-shadow: none;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --background-color: #1e1e2e;
    --badge-background: #585b70;
    --button-active-background: #45475a;
    --button-active-hover-background: #585b70;
    --button-background: #313244;
    --button-hover-background: #585b70;
    --color-active-hover-tab: #45475a;
    --color-active-tab: #313244;
    --color-hover-tab: #45475a;
    --headerbar-background-color: #181825;
    --hover-background: #313244;
    --link-color: #cba6f7;
    --info-label-background: #cba6f7;
    --dark-blue: #cba6f7;
    --light-blue: #cba6f7;
    --line-color: #313244;
    --search-result-short-details-color: #bac2de;
    --search-result-divider-line-color: #313244;
    --search-result-title-color: #cba6f7;
    --search-sidebar-link-color: #cdd6f4;
    --search-sidebar-selected-link-background: #cba6f7;
    --search-sidebar-selected-link-color: #11111b;
    --terminal-background: #313244;
    --terminal-color: #cdd6f4;
    --text-color: #cdd6f4;
    --text-color-light: #cdd6f4;
    --text-color-warning: #f9e2af;
    /* Experimental Flakes label */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root .badge {
    color: #cdd6f4;
  }
  :root .label {
    color: #1e1e2e;
    text-shadow: none;
  }
}

/* ==UserStyle==
@name NixOS Search Catppuccin
@namespace github.com/catppuccin/userstyles/styles/nixos-search
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/nixos-search
@version 2026.03.10
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/nixos-search/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Anixos-search
@description Soothing pastel theme for NixOS Search
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    --background-color: #1e1e2e;
    --badge-background: #585b70;
    --button-active-background: #45475a;
    --button-active-hover-background: #585b70;
    --button-background: #313244;
    --button-hover-background: #585b70;
    --color-active-hover-tab: #45475a;
    --color-active-tab: #313244;
    --color-hover-tab: #45475a;
    --headerbar-background-color: #181825;
    --hover-background: #313244;
    --link-color: #cba6f7;
    --info-label-background: #cba6f7;
    --dark-blue: #cba6f7;
    --light-blue: #cba6f7;
    --line-color: #313244;
    --search-result-short-details-color: #bac2de;
    --search-result-divider-line-color: #313244;
    --search-result-title-color: #cba6f7;
    --search-sidebar-link-color: #cdd6f4;
    --search-sidebar-selected-link-background: #cba6f7;
    --search-sidebar-selected-link-color: #11111b;
    --terminal-background: #313244;
    --terminal-color: #cdd6f4;
    --text-color: #cdd6f4;
    --text-color-light: #cdd6f4;
    --text-color-warning: #f9e2af;
    /* Experimental Flakes label */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root .badge {
    color: #cdd6f4;
  }
  :root .label {
    color: #1e1e2e;
    text-shadow: none;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --background-color: #1e1e2e;
    --badge-background: #585b70;
    --button-active-background: #45475a;
    --button-active-hover-background: #585b70;
    --button-background: #313244;
    --button-hover-background: #585b70;
    --color-active-hover-tab: #45475a;
    --color-active-tab: #313244;
    --color-hover-tab: #45475a;
    --headerbar-background-color: #181825;
    --hover-background: #313244;
    --link-color: #cba6f7;
    --info-label-background: #cba6f7;
    --dark-blue: #cba6f7;
    --light-blue: #cba6f7;
    --line-color: #313244;
    --search-result-short-details-color: #bac2de;
    --search-result-divider-line-color: #313244;
    --search-result-title-color: #cba6f7;
    --search-sidebar-link-color: #cdd6f4;
    --search-sidebar-selected-link-background: #cba6f7;
    --search-sidebar-selected-link-color: #11111b;
    --terminal-background: #313244;
    --terminal-color: #cdd6f4;
    --text-color: #cdd6f4;
    --text-color-light: #cdd6f4;
    --text-color-warning: #f9e2af;
    /* Experimental Flakes label */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root .badge {
    color: #cdd6f4;
  }
  :root .label {
    color: #1e1e2e;
    text-shadow: none;
  }
}

/* ==UserStyle==
@name NixOS Search Catppuccin
@namespace github.com/catppuccin/userstyles/styles/nixos-search
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/nixos-search
@version 2026.03.10
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/nixos-search/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Anixos-search
@description Soothing pastel theme for NixOS Search
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    --background-color: #1e1e2e;
    --badge-background: #585b70;
    --button-active-background: #45475a;
    --button-active-hover-background: #585b70;
    --button-background: #313244;
    --button-hover-background: #585b70;
    --color-active-hover-tab: #45475a;
    --color-active-tab: #313244;
    --color-hover-tab: #45475a;
    --headerbar-background-color: #181825;
    --hover-background: #313244;
    --link-color: #cba6f7;
    --info-label-background: #cba6f7;
    --dark-blue: #cba6f7;
    --light-blue: #cba6f7;
    --line-color: #313244;
    --search-result-short-details-color: #bac2de;
    --search-result-divider-line-color: #313244;
    --search-result-title-color: #cba6f7;
    --search-sidebar-link-color: #cdd6f4;
    --search-sidebar-selected-link-background: #cba6f7;
    --search-sidebar-selected-link-color: #11111b;
    --terminal-background: #313244;
    --terminal-color: #cdd6f4;
    --text-color: #cdd6f4;
    --text-color-light: #cdd6f4;
    --text-color-warning: #f9e2af;
    /* Experimental Flakes label */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root .badge {
    color: #cdd6f4;
  }
  :root .label {
    color: #1e1e2e;
    text-shadow: none;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --background-color: #1e1e2e;
    --badge-background: #585b70;
    --button-active-background: #45475a;
    --button-active-hover-background: #585b70;
    --button-background: #313244;
    --button-hover-background: #585b70;
    --color-active-hover-tab: #45475a;
    --color-active-tab: #313244;
    --color-hover-tab: #45475a;
    --headerbar-background-color: #181825;
    --hover-background: #313244;
    --link-color: #cba6f7;
    --info-label-background: #cba6f7;
    --dark-blue: #cba6f7;
    --light-blue: #cba6f7;
    --line-color: #313244;
    --search-result-short-details-color: #bac2de;
    --search-result-divider-line-color: #313244;
    --search-result-title-color: #cba6f7;
    --search-sidebar-link-color: #cdd6f4;
    --search-sidebar-selected-link-background: #cba6f7;
    --search-sidebar-selected-link-color: #11111b;
    --terminal-background: #313244;
    --terminal-color: #cdd6f4;
    --text-color: #cdd6f4;
    --text-color-light: #cdd6f4;
    --text-color-warning: #f9e2af;
    /* Experimental Flakes label */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root .badge {
    color: #cdd6f4;
  }
  :root .label {
    color: #1e1e2e;
    text-shadow: none;
  }
}

/* ==UserStyle==
@name NixOS Search Catppuccin
@namespace github.com/catppuccin/userstyles/styles/nixos-search
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/nixos-search
@version 2026.03.10
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/nixos-search/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Anixos-search
@description Soothing pastel theme for NixOS Search
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    --background-color: #1e1e2e;
    --badge-background: #585b70;
    --button-active-background: #45475a;
    --button-active-hover-background: #585b70;
    --button-background: #313244;
    --button-hover-background: #585b70;
    --color-active-hover-tab: #45475a;
    --color-active-tab: #313244;
    --color-hover-tab: #45475a;
    --headerbar-background-color: #181825;
    --hover-background: #313244;
    --link-color: #cba6f7;
    --info-label-background: #cba6f7;
    --dark-blue: #cba6f7;
    --light-blue: #cba6f7;
    --line-color: #313244;
    --search-result-short-details-color: #bac2de;
    --search-result-divider-line-color: #313244;
    --search-result-title-color: #cba6f7;
    --search-sidebar-link-color: #cdd6f4;
    --search-sidebar-selected-link-background: #cba6f7;
    --search-sidebar-selected-link-color: #11111b;
    --terminal-background: #313244;
    --terminal-color: #cdd6f4;
    --text-color: #cdd6f4;
    --text-color-light: #cdd6f4;
    --text-color-warning: #f9e2af;
    /* Experimental Flakes label */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root .badge {
    color: #cdd6f4;
  }
  :root .label {
    color: #1e1e2e;
    text-shadow: none;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --background-color: #1e1e2e;
    --badge-background: #585b70;
    --button-active-background: #45475a;
    --button-active-hover-background: #585b70;
    --button-background: #313244;
    --button-hover-background: #585b70;
    --color-active-hover-tab: #45475a;
    --color-active-tab: #313244;
    --color-hover-tab: #45475a;
    --headerbar-background-color: #181825;
    --hover-background: #313244;
    --link-color: #cba6f7;
    --info-label-background: #cba6f7;
    --dark-blue: #cba6f7;
    --light-blue: #cba6f7;
    --line-color: #313244;
    --search-result-short-details-color: #bac2de;
    --search-result-divider-line-color: #313244;
    --search-result-title-color: #cba6f7;
    --search-sidebar-link-color: #cdd6f4;
    --search-sidebar-selected-link-background: #cba6f7;
    --search-sidebar-selected-link-color: #11111b;
    --terminal-background: #313244;
    --terminal-color: #cdd6f4;
    --text-color: #cdd6f4;
    --text-color-light: #cdd6f4;
    --text-color-warning: #f9e2af;
    /* Experimental Flakes label */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root .badge {
    color: #cdd6f4;
  }
  :root .label {
    color: #1e1e2e;
    text-shadow: none;
  }
}

/* ==UserStyle==
@name NixOS Search Catppuccin
@namespace github.com/catppuccin/userstyles/styles/nixos-search
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/nixos-search
@version 2026.03.10
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/nixos-search/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Anixos-search
@description Soothing pastel theme for NixOS Search
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    --background-color: #1e1e2e;
    --badge-background: #585b70;
    --button-active-background: #45475a;
    --button-active-hover-background: #585b70;
    --button-background: #313244;
    --button-hover-background: #585b70;
    --color-active-hover-tab: #45475a;
    --color-active-tab: #313244;
    --color-hover-tab: #45475a;
    --headerbar-background-color: #181825;
    --hover-background: #313244;
    --link-color: #cba6f7;
    --info-label-background: #cba6f7;
    --dark-blue: #cba6f7;
    --light-blue: #cba6f7;
    --line-color: #313244;
    --search-result-short-details-color: #bac2de;
    --search-result-divider-line-color: #313244;
    --search-result-title-color: #cba6f7;
    --search-sidebar-link-color: #cdd6f4;
    --search-sidebar-selected-link-background: #cba6f7;
    --search-sidebar-selected-link-color: #11111b;
    --terminal-background: #313244;
    --terminal-color: #cdd6f4;
    --text-color: #cdd6f4;
    --text-color-light: #cdd6f4;
    --text-color-warning: #f9e2af;
    /* Experimental Flakes label */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root .badge {
    color: #cdd6f4;
  }
  :root .label {
    color: #1e1e2e;
    text-shadow: none;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --background-color: #1e1e2e;
    --badge-background: #585b70;
    --button-active-background: #45475a;
    --button-active-hover-background: #585b70;
    --button-background: #313244;
    --button-hover-background: #585b70;
    --color-active-hover-tab: #45475a;
    --color-active-tab: #313244;
    --color-hover-tab: #45475a;
    --headerbar-background-color: #181825;
    --hover-background: #313244;
    --link-color: #cba6f7;
    --info-label-background: #cba6f7;
    --dark-blue: #cba6f7;
    --light-blue: #cba6f7;
    --line-color: #313244;
    --search-result-short-details-color: #bac2de;
    --search-result-divider-line-color: #313244;
    --search-result-title-color: #cba6f7;
    --search-sidebar-link-color: #cdd6f4;
    --search-sidebar-selected-link-background: #cba6f7;
    --search-sidebar-selected-link-color: #11111b;
    --terminal-background: #313244;
    --terminal-color: #cdd6f4;
    --text-color: #cdd6f4;
    --text-color-light: #cdd6f4;
    --text-color-warning: #f9e2af;
    /* Experimental Flakes label */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root .badge {
    color: #cdd6f4;
  }
  :root .label {
    color: #1e1e2e;
    text-shadow: none;
  }
}

/* ==UserStyle==
@name NixOS Search Catppuccin
@namespace github.com/catppuccin/userstyles/styles/nixos-search
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/nixos-search
@version 2026.03.10
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/nixos-search/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Anixos-search
@description Soothing pastel theme for NixOS Search
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    --background-color: #1e1e2e;
    --badge-background: #585b70;
    --button-active-background: #45475a;
    --button-active-hover-background: #585b70;
    --button-background: #313244;
    --button-hover-background: #585b70;
    --color-active-hover-tab: #45475a;
    --color-active-tab: #313244;
    --color-hover-tab: #45475a;
    --headerbar-background-color: #181825;
    --hover-background: #313244;
    --link-color: #cba6f7;
    --info-label-background: #cba6f7;
    --dark-blue: #cba6f7;
    --light-blue: #cba6f7;
    --line-color: #313244;
    --search-result-short-details-color: #bac2de;
    --search-result-divider-line-color: #313244;
    --search-result-title-color: #cba6f7;
    --search-sidebar-link-color: #cdd6f4;
    --search-sidebar-selected-link-background: #cba6f7;
    --search-sidebar-selected-link-color: #11111b;
    --terminal-background: #313244;
    --terminal-color: #cdd6f4;
    --text-color: #cdd6f4;
    --text-color-light: #cdd6f4;
    --text-color-warning: #f9e2af;
    /* Experimental Flakes label */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root .badge {
    color: #cdd6f4;
  }
  :root .label {
    color: #1e1e2e;
    text-shadow: none;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --background-color: #1e1e2e;
    --badge-background: #585b70;
    --button-active-background: #45475a;
    --button-active-hover-background: #585b70;
    --button-background: #313244;
    --button-hover-background: #585b70;
    --color-active-hover-tab: #45475a;
    --color-active-tab: #313244;
    --color-hover-tab: #45475a;
    --headerbar-background-color: #181825;
    --hover-background: #313244;
    --link-color: #cba6f7;
    --info-label-background: #cba6f7;
    --dark-blue: #cba6f7;
    --light-blue: #cba6f7;
    --line-color: #313244;
    --search-result-short-details-color: #bac2de;
    --search-result-divider-line-color: #313244;
    --search-result-title-color: #cba6f7;
    --search-sidebar-link-color: #cdd6f4;
    --search-sidebar-selected-link-background: #cba6f7;
    --search-sidebar-selected-link-color: #11111b;
    --terminal-background: #313244;
    --terminal-color: #cdd6f4;
    --text-color: #cdd6f4;
    --text-color-light: #cdd6f4;
    --text-color-warning: #f9e2af;
    /* Experimental Flakes label */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root .badge {
    color: #cdd6f4;
  }
  :root .label {
    color: #1e1e2e;
    text-shadow: none;
  }
}

`)