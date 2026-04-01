// ==UserScript==
// @name    Userstyle (indie-wiki-buddy.css)
// @include    *bing.com*
// @include    *search.brave.com*
// @include    *duckduckgo.com*
// @include    *ecosia.org*
// @include    *kagi.com*
// @include    *qwant.com*
// @include    *search.yahoo.com*
// @include    *startpage.com*
// @include    *ya.ru*
// @include    *fandom.com*
// @include    *fextralife.com*
// @include    *neoseeker.com*
// @include    *breezewiki.com*
// @include    *antifandom.com*
// @include    *bw.artemislena.eu*
// @include    *breezewiki.catsarch.com*
// @include    *breezewiki.esmailelbob.xyz*
// @include    *breezewiki.frontendfriendly.xyz*
// @include    *bw.hamstro.dev*
// @include    *breeze.hostux.net*
// @include    *breezewiki.hyperreal.coffee*
// @include    *breeze.mint.lgbt*
// @include    *breezewiki.nadeko.net*
// @include    *nerd.whatever.social*
// @include    *breeze.nohost.network*
// @include    *z.opnxng.com*
// @include    *bw.projectsegfau.lt*
// @include    *breezewiki.pussthecat.org*
// @include    *bw.vern.cc*
// @include    *breeze.whateveritworks.org*
// @include    *breezewiki.woodland.cafe*
// @include    ^https?://(www\\.)?google\\..*
// @include    ^https?://(www\\.)?yandex\\..*
// ==/UserScript==
GM_addStyle(`/* ==UserStyle==
@name Indie Wiki Buddy Catppuccin
@namespace github.com/catppuccin/userstyles/styles/indie-wiki-buddy
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/indie-wiki-buddy
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/indie-wiki-buddy/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Aindie-wiki-buddy
@description Soothing pastel theme for Indie Wiki Buddy
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */
/*
To get a list of supported search engines, run the following command:
curl -s https://raw.githubusercontent.com/KevinPayravi/indie-wiki-buddy/main/manifest-firefox.json | python -c "import sys, json;print(*json.loads(sys.stdin.read())['content_scripts'][2]['matches'], sep='\n')"
*/

@media (prefers-color-scheme: light) {
  :root .iwb-new-link button {
    color: #1e1e2e;
    background: #89b4fa;
  }
  :root .iwb-new-link button:hover {
    background: #89dceb;
  }
  :root .iwb-result-controls {
    color: #cdd6f4 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root .iwb-new-link button {
    color: #1e1e2e;
    background: #89b4fa;
  }
  :root .iwb-new-link button:hover {
    background: #89dceb;
  }
  :root .iwb-result-controls {
    color: #cdd6f4 !important;
  }
}


@media (prefers-color-scheme: light) {
  :root .indie-wiki-banner {
    background: #181825;
    color: #cdd6f4;
  }
  :root .indie-wiki-banner ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root .indie-wiki-banner-exit {
    color: #cdd6f4;
  }
  :root .indie-wiki-banner-link {
    color: #89b4fa;
  }
  :root .indie-wiki-banner-link:hover {
    color: #89dceb;
  }
  :root .indie-wiki-banner-disabled {
    color: #a6adc8;
  }
}
@media (prefers-color-scheme: dark) {
  :root .indie-wiki-banner {
    background: #181825;
    color: #cdd6f4;
  }
  :root .indie-wiki-banner ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root .indie-wiki-banner-exit {
    color: #cdd6f4;
  }
  :root .indie-wiki-banner-link {
    color: #89b4fa;
  }
  :root .indie-wiki-banner-link:hover {
    color: #89dceb;
  }
  :root .indie-wiki-banner-disabled {
    color: #a6adc8;
  }
}

/* ==UserStyle==
@name Indie Wiki Buddy Catppuccin
@namespace github.com/catppuccin/userstyles/styles/indie-wiki-buddy
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/indie-wiki-buddy
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/indie-wiki-buddy/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Aindie-wiki-buddy
@description Soothing pastel theme for Indie Wiki Buddy
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */
/*
To get a list of supported search engines, run the following command:
curl -s https://raw.githubusercontent.com/KevinPayravi/indie-wiki-buddy/main/manifest-firefox.json | python -c "import sys, json;print(*json.loads(sys.stdin.read())['content_scripts'][2]['matches'], sep='\n')"
*/

@media (prefers-color-scheme: light) {
  :root .iwb-new-link button {
    color: #1e1e2e;
    background: #89b4fa;
  }
  :root .iwb-new-link button:hover {
    background: #89dceb;
  }
  :root .iwb-result-controls {
    color: #cdd6f4 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root .iwb-new-link button {
    color: #1e1e2e;
    background: #89b4fa;
  }
  :root .iwb-new-link button:hover {
    background: #89dceb;
  }
  :root .iwb-result-controls {
    color: #cdd6f4 !important;
  }
}


@media (prefers-color-scheme: light) {
  :root .indie-wiki-banner {
    background: #181825;
    color: #cdd6f4;
  }
  :root .indie-wiki-banner ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root .indie-wiki-banner-exit {
    color: #cdd6f4;
  }
  :root .indie-wiki-banner-link {
    color: #89b4fa;
  }
  :root .indie-wiki-banner-link:hover {
    color: #89dceb;
  }
  :root .indie-wiki-banner-disabled {
    color: #a6adc8;
  }
}
@media (prefers-color-scheme: dark) {
  :root .indie-wiki-banner {
    background: #181825;
    color: #cdd6f4;
  }
  :root .indie-wiki-banner ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root .indie-wiki-banner-exit {
    color: #cdd6f4;
  }
  :root .indie-wiki-banner-link {
    color: #89b4fa;
  }
  :root .indie-wiki-banner-link:hover {
    color: #89dceb;
  }
  :root .indie-wiki-banner-disabled {
    color: #a6adc8;
  }
}

/* ==UserStyle==
@name Indie Wiki Buddy Catppuccin
@namespace github.com/catppuccin/userstyles/styles/indie-wiki-buddy
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/indie-wiki-buddy
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/indie-wiki-buddy/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Aindie-wiki-buddy
@description Soothing pastel theme for Indie Wiki Buddy
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */
/*
To get a list of supported search engines, run the following command:
curl -s https://raw.githubusercontent.com/KevinPayravi/indie-wiki-buddy/main/manifest-firefox.json | python -c "import sys, json;print(*json.loads(sys.stdin.read())['content_scripts'][2]['matches'], sep='\n')"
*/

@media (prefers-color-scheme: light) {
  :root .iwb-new-link button {
    color: #1e1e2e;
    background: #89b4fa;
  }
  :root .iwb-new-link button:hover {
    background: #89dceb;
  }
  :root .iwb-result-controls {
    color: #cdd6f4 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root .iwb-new-link button {
    color: #1e1e2e;
    background: #89b4fa;
  }
  :root .iwb-new-link button:hover {
    background: #89dceb;
  }
  :root .iwb-result-controls {
    color: #cdd6f4 !important;
  }
}


@media (prefers-color-scheme: light) {
  :root .indie-wiki-banner {
    background: #181825;
    color: #cdd6f4;
  }
  :root .indie-wiki-banner ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root .indie-wiki-banner-exit {
    color: #cdd6f4;
  }
  :root .indie-wiki-banner-link {
    color: #89b4fa;
  }
  :root .indie-wiki-banner-link:hover {
    color: #89dceb;
  }
  :root .indie-wiki-banner-disabled {
    color: #a6adc8;
  }
}
@media (prefers-color-scheme: dark) {
  :root .indie-wiki-banner {
    background: #181825;
    color: #cdd6f4;
  }
  :root .indie-wiki-banner ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root .indie-wiki-banner-exit {
    color: #cdd6f4;
  }
  :root .indie-wiki-banner-link {
    color: #89b4fa;
  }
  :root .indie-wiki-banner-link:hover {
    color: #89dceb;
  }
  :root .indie-wiki-banner-disabled {
    color: #a6adc8;
  }
}

/* ==UserStyle==
@name Indie Wiki Buddy Catppuccin
@namespace github.com/catppuccin/userstyles/styles/indie-wiki-buddy
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/indie-wiki-buddy
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/indie-wiki-buddy/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Aindie-wiki-buddy
@description Soothing pastel theme for Indie Wiki Buddy
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */
/*
To get a list of supported search engines, run the following command:
curl -s https://raw.githubusercontent.com/KevinPayravi/indie-wiki-buddy/main/manifest-firefox.json | python -c "import sys, json;print(*json.loads(sys.stdin.read())['content_scripts'][2]['matches'], sep='\n')"
*/

@media (prefers-color-scheme: light) {
  :root .iwb-new-link button {
    color: #1e1e2e;
    background: #89b4fa;
  }
  :root .iwb-new-link button:hover {
    background: #89dceb;
  }
  :root .iwb-result-controls {
    color: #cdd6f4 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root .iwb-new-link button {
    color: #1e1e2e;
    background: #89b4fa;
  }
  :root .iwb-new-link button:hover {
    background: #89dceb;
  }
  :root .iwb-result-controls {
    color: #cdd6f4 !important;
  }
}


@media (prefers-color-scheme: light) {
  :root .indie-wiki-banner {
    background: #181825;
    color: #cdd6f4;
  }
  :root .indie-wiki-banner ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root .indie-wiki-banner-exit {
    color: #cdd6f4;
  }
  :root .indie-wiki-banner-link {
    color: #89b4fa;
  }
  :root .indie-wiki-banner-link:hover {
    color: #89dceb;
  }
  :root .indie-wiki-banner-disabled {
    color: #a6adc8;
  }
}
@media (prefers-color-scheme: dark) {
  :root .indie-wiki-banner {
    background: #181825;
    color: #cdd6f4;
  }
  :root .indie-wiki-banner ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root .indie-wiki-banner-exit {
    color: #cdd6f4;
  }
  :root .indie-wiki-banner-link {
    color: #89b4fa;
  }
  :root .indie-wiki-banner-link:hover {
    color: #89dceb;
  }
  :root .indie-wiki-banner-disabled {
    color: #a6adc8;
  }
}

/* ==UserStyle==
@name Indie Wiki Buddy Catppuccin
@namespace github.com/catppuccin/userstyles/styles/indie-wiki-buddy
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/indie-wiki-buddy
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/indie-wiki-buddy/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Aindie-wiki-buddy
@description Soothing pastel theme for Indie Wiki Buddy
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/*
To get a list of supported search engines, run the following command:
curl -s https://raw.githubusercontent.com/KevinPayravi/indie-wiki-buddy/main/manifest-firefox.json | python -c "import sys, json;print(*json.loads(sys.stdin.read())['content_scripts'][2]['matches'], sep='\n')"
*/

@media (prefers-color-scheme: light) {
  :root .iwb-new-link button {
    color: #1e1e2e;
    background: #89b4fa;
  }
  :root .iwb-new-link button:hover {
    background: #89dceb;
  }
  :root .iwb-result-controls {
    color: #cdd6f4 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root .iwb-new-link button {
    color: #1e1e2e;
    background: #89b4fa;
  }
  :root .iwb-new-link button:hover {
    background: #89dceb;
  }
  :root .iwb-result-controls {
    color: #cdd6f4 !important;
  }
}


@media (prefers-color-scheme: light) {
  :root .indie-wiki-banner {
    background: #181825;
    color: #cdd6f4;
  }
  :root .indie-wiki-banner ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root .indie-wiki-banner-exit {
    color: #cdd6f4;
  }
  :root .indie-wiki-banner-link {
    color: #89b4fa;
  }
  :root .indie-wiki-banner-link:hover {
    color: #89dceb;
  }
  :root .indie-wiki-banner-disabled {
    color: #a6adc8;
  }
}
@media (prefers-color-scheme: dark) {
  :root .indie-wiki-banner {
    background: #181825;
    color: #cdd6f4;
  }
  :root .indie-wiki-banner ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root .indie-wiki-banner-exit {
    color: #cdd6f4;
  }
  :root .indie-wiki-banner-link {
    color: #89b4fa;
  }
  :root .indie-wiki-banner-link:hover {
    color: #89dceb;
  }
  :root .indie-wiki-banner-disabled {
    color: #a6adc8;
  }
}

/* ==UserStyle==
@name Indie Wiki Buddy Catppuccin
@namespace github.com/catppuccin/userstyles/styles/indie-wiki-buddy
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/indie-wiki-buddy
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/indie-wiki-buddy/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Aindie-wiki-buddy
@description Soothing pastel theme for Indie Wiki Buddy
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */
/*
To get a list of supported search engines, run the following command:
curl -s https://raw.githubusercontent.com/KevinPayravi/indie-wiki-buddy/main/manifest-firefox.json | python -c "import sys, json;print(*json.loads(sys.stdin.read())['content_scripts'][2]['matches'], sep='\n')"
*/

@media (prefers-color-scheme: light) {
  :root .iwb-new-link button {
    color: #1e1e2e;
    background: #89b4fa;
  }
  :root .iwb-new-link button:hover {
    background: #89dceb;
  }
  :root .iwb-result-controls {
    color: #cdd6f4 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root .iwb-new-link button {
    color: #1e1e2e;
    background: #89b4fa;
  }
  :root .iwb-new-link button:hover {
    background: #89dceb;
  }
  :root .iwb-result-controls {
    color: #cdd6f4 !important;
  }
}


@media (prefers-color-scheme: light) {
  :root .indie-wiki-banner {
    background: #181825;
    color: #cdd6f4;
  }
  :root .indie-wiki-banner ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root .indie-wiki-banner-exit {
    color: #cdd6f4;
  }
  :root .indie-wiki-banner-link {
    color: #89b4fa;
  }
  :root .indie-wiki-banner-link:hover {
    color: #89dceb;
  }
  :root .indie-wiki-banner-disabled {
    color: #a6adc8;
  }
}
@media (prefers-color-scheme: dark) {
  :root .indie-wiki-banner {
    background: #181825;
    color: #cdd6f4;
  }
  :root .indie-wiki-banner ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root .indie-wiki-banner-exit {
    color: #cdd6f4;
  }
  :root .indie-wiki-banner-link {
    color: #89b4fa;
  }
  :root .indie-wiki-banner-link:hover {
    color: #89dceb;
  }
  :root .indie-wiki-banner-disabled {
    color: #a6adc8;
  }
}

/* ==UserStyle==
@name Indie Wiki Buddy Catppuccin
@namespace github.com/catppuccin/userstyles/styles/indie-wiki-buddy
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/indie-wiki-buddy
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/indie-wiki-buddy/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Aindie-wiki-buddy
@description Soothing pastel theme for Indie Wiki Buddy
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */
/*
To get a list of supported search engines, run the following command:
curl -s https://raw.githubusercontent.com/KevinPayravi/indie-wiki-buddy/main/manifest-firefox.json | python -c "import sys, json;print(*json.loads(sys.stdin.read())['content_scripts'][2]['matches'], sep='\n')"
*/

@media (prefers-color-scheme: light) {
  :root .iwb-new-link button {
    color: #1e1e2e;
    background: #89b4fa;
  }
  :root .iwb-new-link button:hover {
    background: #89dceb;
  }
  :root .iwb-result-controls {
    color: #cdd6f4 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root .iwb-new-link button {
    color: #1e1e2e;
    background: #89b4fa;
  }
  :root .iwb-new-link button:hover {
    background: #89dceb;
  }
  :root .iwb-result-controls {
    color: #cdd6f4 !important;
  }
}


@media (prefers-color-scheme: light) {
  :root .indie-wiki-banner {
    background: #181825;
    color: #cdd6f4;
  }
  :root .indie-wiki-banner ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root .indie-wiki-banner-exit {
    color: #cdd6f4;
  }
  :root .indie-wiki-banner-link {
    color: #89b4fa;
  }
  :root .indie-wiki-banner-link:hover {
    color: #89dceb;
  }
  :root .indie-wiki-banner-disabled {
    color: #a6adc8;
  }
}
@media (prefers-color-scheme: dark) {
  :root .indie-wiki-banner {
    background: #181825;
    color: #cdd6f4;
  }
  :root .indie-wiki-banner ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root .indie-wiki-banner-exit {
    color: #cdd6f4;
  }
  :root .indie-wiki-banner-link {
    color: #89b4fa;
  }
  :root .indie-wiki-banner-link:hover {
    color: #89dceb;
  }
  :root .indie-wiki-banner-disabled {
    color: #a6adc8;
  }
}

/* ==UserStyle==
@name Indie Wiki Buddy Catppuccin
@namespace github.com/catppuccin/userstyles/styles/indie-wiki-buddy
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/indie-wiki-buddy
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/indie-wiki-buddy/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Aindie-wiki-buddy
@description Soothing pastel theme for Indie Wiki Buddy
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */
/*
To get a list of supported search engines, run the following command:
curl -s https://raw.githubusercontent.com/KevinPayravi/indie-wiki-buddy/main/manifest-firefox.json | python -c "import sys, json;print(*json.loads(sys.stdin.read())['content_scripts'][2]['matches'], sep='\n')"
*/

@media (prefers-color-scheme: light) {
  :root .iwb-new-link button {
    color: #1e1e2e;
    background: #89b4fa;
  }
  :root .iwb-new-link button:hover {
    background: #89dceb;
  }
  :root .iwb-result-controls {
    color: #cdd6f4 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root .iwb-new-link button {
    color: #1e1e2e;
    background: #89b4fa;
  }
  :root .iwb-new-link button:hover {
    background: #89dceb;
  }
  :root .iwb-result-controls {
    color: #cdd6f4 !important;
  }
}


@media (prefers-color-scheme: light) {
  :root .indie-wiki-banner {
    background: #181825;
    color: #cdd6f4;
  }
  :root .indie-wiki-banner ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root .indie-wiki-banner-exit {
    color: #cdd6f4;
  }
  :root .indie-wiki-banner-link {
    color: #89b4fa;
  }
  :root .indie-wiki-banner-link:hover {
    color: #89dceb;
  }
  :root .indie-wiki-banner-disabled {
    color: #a6adc8;
  }
}
@media (prefers-color-scheme: dark) {
  :root .indie-wiki-banner {
    background: #181825;
    color: #cdd6f4;
  }
  :root .indie-wiki-banner ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root .indie-wiki-banner-exit {
    color: #cdd6f4;
  }
  :root .indie-wiki-banner-link {
    color: #89b4fa;
  }
  :root .indie-wiki-banner-link:hover {
    color: #89dceb;
  }
  :root .indie-wiki-banner-disabled {
    color: #a6adc8;
  }
}

`)