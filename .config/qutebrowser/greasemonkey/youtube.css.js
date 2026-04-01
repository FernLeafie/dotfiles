// ==UserScript==
// @name    Userstyle (youtube.css)
// @include    *youtube.com*
// @include    *m.youtube.com*
// @include    https://studio.youtube.com*
// ==/UserScript==
GM_addStyle(`/* ==UserStyle==
@name YouTube Catppuccin
@namespace github.com/catppuccin/userstyles/styles/youtube
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/youtube
@version 2026.02.18.1
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/youtube/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Ayoutube
@description Soothing pastel theme for YouTube
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]

@var checkbox logo "Enable YouTube logo" 1
@var checkbox oled "Enable black bars" 0
@var checkbox sponsorBlock "Enable SponsorBlock segments" 1
@var checkbox hideColorSampleTint "Hide color-sampled tint" 1
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

:root[dark] {
  color-scheme: dark !important;
  color: #cdd6f4 !important;
  background: #1e1e2e !important;
  /* Misc */
  /* Selected chapter */
  /* Skeleton */
  /* Ambient mode */
  /* Icons */
  /* verification badge */
  /* Buttons */
  /* Search box */
  /* "Suggestion removed" */
  /* Video description */
  /* Thumbnails */
  /* Panels, popups, tooltips */
  /* Video player */
  /* Video highlight */
  /* Shorts titles and views on homepage */
  /* Buy super thanks bar */
  /* Channel pages */
  /* channel details */
  /* Profiles */
  /* Horizontal list arrows */
  /* Live chat replay */
  /* AI-generated video summary */
  /* Playlist collapsed sidebar */
  /* Playlist metadata */
  /* Playlist titles in search results */
  /* Category tag pills */
  /* Vertical ellipsis menu on main page */
}
:root[dark] ::selection {
  background-color: rgba(203, 166, 247, 0.3) !important;
}
:root[dark] input::placeholder,
:root[dark] textarea::placeholder {
  color: #a6adc8 !important;
}
:root[dark],
:root[dark] [dark],
:root[dark] [system-icons],
:root[dark] [darker-dark-theme],
:root[dark][dark],
:root[dark][system-icons],
:root[dark][darker-dark-theme] {
  --efyt-control-bar-background-color: #181825 !important;
  --dimmer-text: #cdd6f4 !important;
  --yt-spec-white-1: #cdd6f4 !important;
  --yt-spec-white-2: #a6adc8 !important;
  --yt-spec-white-3: #bac2de !important;
  --yt-spec-white-4: #a9b3d6 !important;
  --yt-spec-black-1: #7f849c !important;
  --yt-spec-black-2: #6c7086 !important;
  --yt-spec-black-3: #585b70 !important;
  --yt-spec-black-4: #45475a !important;
  --yt-spec-black-pure: #313244 !important;
  --yt-spec-grey-1: #cdd6f4 !important;
  --yt-spec-grey-2: #a6adc8 !important;
  --yt-spec-grey-3: #bac2de !important;
  --yt-spec-grey-4: #9399b2 !important;
  --yt-spec-grey-5: #7f849c !important;
  --yt-brand-youtube-red: #cba6f7 !important;
  --yt-brand-medium-red: #cba6f7 !important;
  --yt-brand-light-red: #cba6f7 !important;
  --yt-spec-red-30: #fab387 !important;
  --yt-spec-red-70: #f38ba8 !important;
  --yt-spec-red-indicator: #cba6f7 !important;
  --yt-spec-pale-blue: #89dceb !important;
  --yt-spec-light-blue: #89dceb !important;
  --yt-spec-dark-blue: #74c7ec !important;
  --yt-spec-navy-blue: #94e2d5 !important;
  --yt-spec-light-green: #a6e3a1 !important;
  --yt-spec-dark-green: #a6e3a1 !important;
  --yt-spec-yellow: #fab387 !important;
  --yt-spec-black-pure-alpha-5: #a6adc8 !important;
  --yt-spec-black-pure-alpha-10: #9399b2 !important;
  --yt-spec-black-pure-alpha-15: rgba(17, 17, 27, 0.85) !important;
  --yt-spec-black-pure-alpha-30: rgba(17, 17, 27, 0.7) !important;
  --yt-spec-black-pure-alpha-60: rgba(17, 17, 27, 0.4) !important;
  --yt-spec-black-pure-alpha-80: rgba(17, 17, 27, 0.2) !important;
  --yt-spec-black-1-alpha-98: rgba(17, 17, 27, 0.02) !important;
  --yt-spec-black-1-alpha-95: rgba(17, 17, 27, 0.05) !important;
  --yt-spec-white-1-alpha-10: rgba(205, 214, 244, 0.9) !important;
  --yt-spec-white-1-alpha-20: rgba(205, 214, 244, 0.8) !important;
  --yt-spec-white-1-alpha-25: rgba(205, 214, 244, 0.75) !important;
  --yt-spec-white-1-alpha-30: rgba(205, 214, 244, 0.7) !important;
  --yt-spec-white-1-alpha-70: rgba(205, 214, 244, 0.3) !important;
  --yt-spec-white-1-alpha-95: rgba(205, 214, 244, 0.05) !important;
  --yt-spec-white-1-alpha-98: rgba(205, 214, 244, 0.02) !important;
  --yt-brand-medium-red-alpha-90: rgba(203, 166, 247, 0.1) !important;
  --yt-brand-medium-red-alpha-30: rgba(203, 166, 247, 0.7) !important;
  --yt-brand-light-red-alpha-30: rgba(203, 166, 247, 0.7) !important;
  --yt-spec-light-blue-alpha-30: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-dark-blue-alpha-30: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-base-background: #1e1e2e !important;
  --yt-spec-raised-background: #1e1e2e !important;
  --yt-spec-menu-background: #181825 !important;
  --yt-spec-inverted-background: #cdd6f4 !important;
  --yt-spec-additive-background: #313244 !important;
  --yt-spec-outline: #313244 !important;
  --yt-spec-shadow: rgba(17, 17, 27, 0.75) !important;
  --yt-spec-text-primary: #cdd6f4 !important;
  --yt-spec-text-secondary: #a6adc8 !important;
  --yt-spec-text-disabled: #bac2de !important;
  --yt-spec-text-primary-inverse: #11111b !important;
  --yt-spec-call-to-action: #cba6f7 !important;
  --yt-spec-call-to-action-inverse: #cba6f7 !important;
  --yt-spec-suggested-action: rgba(203, 166, 247, 0.2) !important;
  --yt-spec-suggested-action-inverse: #cdd6f4 !important;
  --yt-spec-icon-active-other: #cdd6f4 !important;
  --yt-spec-button-chip-background-hover: #45475a !important;
  --yt-spec-touch-response: #313244 !important;
  --yt-spec-touch-response-inverse: #cba6f7 !important;
  --yt-spec-brand-icon-active: #cba6f7 !important;
  --yt-spec-brand-button-background: #cba6f7 !important;
  --yt-spec-brand-link-text: #74c7ec !important;
  --yt-spec-wordmark-text: #cdd6f4 !important;
  --yt-spec-error-indicator: #f38ba8 !important;
  --yt-spec-themed-blue: #cba6f7 !important;
  --yt-spec-themed-green: #a6e3a1 !important;
  --yt-spec-ad-indicator: #94e2d5 !important;
  --yt-spec-themed-overlay-background: rgba(17, 17, 27, 0.8) !important;
  --yt-spec-commerce-badge-background: #a6e3a1 !important;
  --yt-spec-static-brand-red: #cba6f7 !important;
  --yt-spec-static-brand-white: #cdd6f4 !important;
  --yt-spec-static-brand-black: #1e1e2e !important;
  --yt-spec-static-clear-color: #11111b !important;
  --yt-spec-static-clear-black: #11111b !important;
  --yt-spec-static-ad-yellow: #fab387 !important;
  --yt-spec-static-grey: #a6adc8 !important;
  --yt-spec-static-overlay-background-solid: #11111b !important;
  --yt-spec-static-overlay-background-heavy: #11111b !important;
  --yt-spec-static-overlay-background-medium: rgba(17, 17, 27, 0.5) !important;
  --yt-spec-static-overlay-background-light: rgba(17, 17, 27, 0.9) !important;
  --yt-spec-static-overlay-text-primary: #cdd6f4 !important;
  --yt-spec-static-overlay-text-secondary: rgba(166, 173, 200, 0.3) !important;
  --yt-spec-static-overlay-text-disabled: rgba(166, 173, 200, 0.7) !important;
  --yt-spec-static-overlay-call-to-action: #cba6f7 !important;
  --yt-spec-static-overlay-icon-active-other: #11111b !important;
  --yt-spec-static-overlay-icon-inactive: #45475a !important;
  --yt-spec-static-overlay-icon-disabled: #585b70 !important;
  --yt-spec-static-overlay-button-primary: #cba6f7 !important;
  --yt-spec-static-overlay-touch-response: #7f849c !important;
  --yt-spec-static-overlay-touch-response-inverse: #45475a !important;
  --yt-spec-static-overlay-background-brand: #cba6f7 !important;
  --yt-spec-assistive-feed-themed-gradient-1: #a6adc8 !important;
  --yt-spec-assistive-feed-themed-gradient-2: #b4befe !important;
  --yt-spec-assistive-feed-themed-gradient-3: #f38ba8 !important;
  --yt-spec-brand-background-solid: #1e1e2e !important;
  --yt-spec-brand-background-primary: #1e1e2e !important;
  --yt-spec-brand-background-secondary: #181825 !important;
  --yt-spec-general-background-a: #1e1e2e !important;
  --yt-spec-general-background-b: #1e1e2e !important;
  --yt-spec-general-background-c: #11111b !important;
  --yt-spec-error-background: #1e1e2e !important;
  --yt-spec-10-percent-layer: #45475a !important;
  --yt-spec-snackbar-background: #181825 !important;
  --yt-spec-snackbar-background-updated: #181825 !important;
  --yt-spec-badge-chip-background: #313244 !important;
  --yt-spec-verified-badge-background: #6c7086 !important;
  --yt-spec-call-to-action-fadeoutd: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-call-to-action-hover: #cba6f7 !important;
  --yt-spec-brand-button-background-hover: #cba6f7 !important;
  --yt-spec-brand-link-text-fadeoutd: rgba(203, 166, 247, 0.7) !important;
  --yt-spec-filled-button-focus-outline: #313244 !important;
  --yt-spec-static-overlay-button-hover: #45475a !important;
  --yt-spec-mono-filled-hover: #45475a !important;
  --yt-spec-commerce-filled-hover: #cba6f7 !important;
  --yt-spec-mono-tonal-hover: #45475a !important;
  --yt-spec-commerce-tonal-hover: #585b70 !important;
  --yt-spec-static-overlay-filled-hover: #7f849c !important;
  --yt-spec-static-overlay-tonal-hover: #45475a !important;
  --yt-spec-paper-tab-ink: rgba(205, 214, 244, 0.7) !important;
  --yt-spec-filled-button-text: #cdd6f4 !important;
  --yt-spec-selected-nav-text: #cdd6f4 !important;
  --iron-icon-fill-color: #cdd6f4 !important;
  /* Search bar */
  --ytd-searchbox-border-color: #313244 !important;
  --ytd-searchbox-legacy-border-color: #313244 !important;
  --ytd-searchbox-legacy-border-shadow-color: #11111b !important;
  --ytd-searchbox-legacy-button-color: #181825 !important;
  --ytd-searchbox-legacy-button-border-color: #313244 !important;
  --ytd-searchbox-legacy-button-focus-color: #cba6f7 !important;
  --ytd-searchbox-legacy-button-hover-color: #181825 !important;
  --ytd-searchbox-legacy-button-hover-border-color: #313244 !important;
  --ytd-searchbox-legacy-button-icon-color: #cba6f7 !important;
  --ytd-searchbox-background: #1e1e2e !important;
  --ytd-searchbox-text-color: #cdd6f4 !important;
  /* System icons */
  --yt-spec-icon-inactive: #cdd6f4 !important;
  --yt-spec-icon-disabled: #7f849c !important;
  --yt-spec-brand-icon-inactive: #9399b2 !important;
  /* Yt video Page */
  --yt-live-chat-background-color: #1e1e2e !important;
  --yt-live-chat-action-panel-background-color: #1e1e2e !important;
  --yt-live-chat-secondary-background-color: #45475a !important;
  --yt-live-chat-toast-background-color: #585b70 !important;
  --yt-live-chat-mode-change-background-color: #1e1e2e !important;
  --yt-live-chat-secondary-text-color: #a6adc8 !important;
  --yt-live-chat-tertiary-text-color: rgba(205, 214, 244, 0.46) !important;
  --yt-live-chat-text-input-field-inactive-underline-color: #a6adc8 !important;
  --yt-live-chat-text-input-field-placeholder-color: #a6adc8 !important;
  --yt-live-chat-enabled-send-button-color: #cdd6f4 !important;
  --yt-live-chat-disabled-icon-button-color: #bac2de !important;
  --yt-live-chat-picker-button-hover-color: #cba6f7 !important;
  --yt-live-chat-mention-background-color: #cba6f7 !important;
  --yt-live-chat-mention-text-color: #cdd6f4 !important;
  --yt-live-chat-deleted-message-color: #a6adc8 !important;
  --yt-live-chat-deleted-message-bar-color: #bac2de !important;
  --yt-live-chat-reconnect-message-color: #cdd6f4 !important;
  --yt-live-chat-disabled-button-background-color: #6c7086 !important;
  --yt-live-chat-sub-panel-background-color: #1e1e2e !important;
  --yt-live-chat-sub-panel-background-color-transparent: #181825 !important;
  --yt-live-chat-moderator-color: #b4befe !important;
  --yt-live-chat-owner-color: #fab387 !important;
  --yt-live-chat-message-highlight-background-color: #1e1e2e !important;
  --yt-live-chat-sponsor-color: #a6e3a1 !important;
  --yt-live-chat-overlay-color: rgba(24, 24, 37, 0.5) !important;
  --yt-live-chat-dialog-background-color: #1e1e2e !important;
  --yt-emoji-picker-variant-selector-bg-color: #1e1e2e !important;
  --yt-live-chat-moderation-mode-hover-background-color: rgba(24, 24, 37, 0.7) !important;
  --yt-grey: #a6adc8 !important;
  --yt-live-chat-text-input-field-suggestion-background-color: #a6adc8 !important;
  --yt-live-chat-text-input-field-suggestion-background-color-hover: #bac2de !important;
  --yt-emoji-picker-search-background-color: #313244 !important;
  --yt-emoji-picker-search-color: #cdd6f4 !important;
  --yt-emoji-picker-search-placeholder-color: #cba6f7 !important;
  --yt-live-chat-slider-active-color: #cba6f7 !important;
  --yt-live-chat-slider-container-color: #313244 !important;
  --yt-live-chat-slider-markers-color: #cdd6f4 !important;
  --yt-live-chat-banner-gradient-scrim: linear-gradient(#181825, transparent) !important;
  --yt-live-chat-action-panel-gradient-scrim: linear-gradient(to top, #181825, transparent) !important;
  --yt-live-chat-automod-button-background-color-hover: rgba(17, 17, 27, 0.5) !important;
  --yt-live-chat-automod-button-explanation-color: rgba(203, 166, 247, 0.3) !important;
  --yt-live-chat-shimmer-background-color: rgba(17, 17, 27, 0.6) !important;
  --yt-live-chat-shimmer-linear-gradient: linear-gradient(0deg, rgba(205, 214, 244, 0.9) 40%, rgba(30, 30, 46, 0.7) 50%, rgba(205, 214, 244, 0.9) 60%) !important;
  --yt-live-chat-vem-background-color: #181825 !important;
  --yt-live-chat-product-picker-icon-color: rgba(205, 214, 244, 0.5) !important;
  --yt-live-chat-product-picker-hover-color: #6c7086 !important;
  --yt-live-chat-product-picker-disabled-icon-color: rgba(205, 214, 244, 0.7) !important;
  --yt-live-chat-action-panel-background-color-transparent: (null) !important;
  --paper-tooltip-background: #6c7086 !important;
  --paper-tooltip-text-color: #cdd6f4 !important;
  /* Links */
  --yt-endpoint-color: #cba6f7 !important;
  --yt-endpoint-visited-color: #cba6f7 !important;
  --yt-endpoint-hover-color: #cba6f7 !important;
  --sb-dark-red-outline: #cba6f7 !important;
  --sb-main-bg-color: #1e1e2e !important;
  --sb-main-fg-color: #cdd6f4 !important;
  --sb-grey-bg-color: #1e1e2e !important;
  --sb-grey-fg-color: #a6adc8 !important;
  --sb-red-bg-color: #cba6f7 !important;
  --sb-category-sponsor: #a6e3a1 !important;
  --sb-category-selfpromo: #f9e2af !important;
  --sb-category-exclusive_access: #94e2d5 !important;
  --sb-category-interaction: #cba6f7 !important;
  --sb-category-poi_highlight: #f5c2e7 !important;
  --sb-category-intro: #89dceb !important;
  --sb-category-outro: #89b4fa !important;
  --sb-category-preview: #74c7ec !important;
  --sb-category-filler: #b4befe !important;
  --sb-category-music_offtopic: #fab387 !important;
}
:root[dark]:not(.style-scope) {
  --primary-text-color: #cdd6f4 !important;
  --primary-background-color: #1e1e2e !important;
  --secondary-text-color: #a6adc8 !important;
  --disabled-text-color: #bac2de !important;
  --divider-color: #6c7086 !important;
  --error-color: #f38ba8 !important;
  --primary-color: #cba6f7 !important;
  --light-primary-color: #cba6f7 !important;
  --dark-primary-color: #89b4fa !important;
  --accent-color: #cba6f7 !important;
  --light-accent-color: #cba6f7 !important;
  --dark-accent-color: #cba6f7 !important;
  --light-theme-background-color: #1e1e2e !important;
  --light-theme-base-color: #cdd6f4 !important;
  --light-theme-text-color: #cdd6f4 !important;
  --light-theme-secondary-color: #a6adc8 !important;
  --light-theme-disabled-color: #bac2de !important;
  --light-theme-divider-color: #6c7086 !important;
  --dark-theme-background-color: #1e1e2e !important;
  --dark-theme-base-color: #cdd6f4 !important;
  --dark-theme-text-color: #cdd6f4 !important;
  --dark-theme-secondary-color: #a6adc8 !important;
  --dark-theme-disabled-color: #bac2de !important;
  --dark-theme-divider-color: #6c7086 !important;
}
:root[dark] .yt-spec-touch-feedback-shape__hover-effect {
  background-color: #313244 !important;
}
:root[dark] ytd-watch-metadata {
  --yt-saturated-raised-background: #45475a !important;
  --yt-saturated-text-primary: #cdd6f4 !important;
  --yt-saturated-text-secondary: #bac2de !important;
}
:root[dark] .yt-core-attributed-string--link-inherit-color {
  color: #cdd6f4 !important;
}
:root[dark] .yt-core-attributed-string--highlight-text-decorator {
  background-color: #585b70 !important;
}
:root[dark] #channel-name.ytd-video-meta-block {
  --yt-endpoint-color: #cba6f7 !important;
  --yt-endpoint-visited-color: #cba6f7 !important;
  color: #cba6f7 !important;
}
:root[dark] .yt-page-navigation-progress {
  background: #cba6f7 !important;
}
:root[dark] ytd-macro-markers-list-item-renderer {
  --ytd-macro-markers-list-item-background-color: #313244 !important;
  --ytd-macro-markers-list-item-title-color: #cdd6f4 !important;
  --ytd-macro-markers-list-item-secondary-color: #bac2de !important;
  --ytd-macro-markers-list-item-timestamp-background-color: #45475a !important;
}
:root[dark] ytd-playlist-panel-video-renderer {
  --yt-lightsource-section2-color: #45475a !important;
  --yt-lightsource-section4-color: #585b70 !important;
  --yt-lightsource-primary-title-color: #cdd6f4 !important;
  --yt-lightsource-secondary-title-color: #cdd6f4 !important;
  --yt-active-playlist-panel-background-color: #313244 !important;
}
:root[dark] ytd-playlist-panel-renderer[collapsible][collapsed][use-color-palette] .header.ytd-playlist-panel-renderer {
  --iron-icon-fill-color: #cdd6f4 !important;
  background-color: #1e1e2e !important;
}
:root[dark] #container.ytd-masthead {
  --iron-icon-fill-color: #cdd6f4 !important;
}
:root[dark] #background.ytd-masthead,
:root[dark] #frosted-glass {
  --yt-frosted-glass-desktop: #1e1e2e !important;
  --yt-spec-frosted-glass-desktop: #1e1e2e !important;
}
:root[dark] ytd-feed-filter-chip-bar-renderer[expand-instead-of-scroll] #chips-wrapper.ytd-feed-filter-chip-bar-renderer {
  --iron-icon-fill-color: #cdd6f4 !important;
  background-color: #1e1e2e !important;
}
:root[dark] #ytd-player #container {
  background: #11111b !important;
}
:root[dark] .ytp-progress-list {
  background: rgba(49, 50, 68, 0.8) !important;
}
:root[dark] .ytp-load-progress {
  background: #6c7086 !important;
}
:root[dark] ytd-expandable-metadata-renderer {
  --yt-lightsource-section1-color: #1e1e2e !important;
  --yt-lightsource-section2-color: #313244 !important;
  --yt-lightsource-section3-color: #45475a !important;
  --yt-lightsource-section4-color: #585b70 !important;
  --yt-lightsource-primary-title-color: #cdd6f4 !important;
  --yt-lightsource-secondary-title-color: #a6adc8 !important;
}
:root[dark] yt-live-chat-renderer {
  --yt-button-default-text-color: #cdd6f4 !important;
  --yt-button-default-background-color: #1e1e2e !important;
  --yt-button-dark-text-color: #1e1e2e !important;
  --yt-button-dark-background-color: #cba6f7 !important;
  --yt-button-payment-background-color: #cba6f7 !important;
}
:root[dark] yt-icon-button.yt-live-chat-item-list-renderer {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] yt-icon-button.yt-live-chat-item-list-renderer:hover {
  background-color: #bd8ff5 !important;
}
:root[dark] ytd-author-comment-badge-renderer:not(
    [style*="--ytd-author-comment-badge-icon-background-color: transparent;"]
  ) {
  --yt-basic-background-color: #313244 !important;
  --yt-basic-foreground-title-color: #313244 !important;
  --ytd-author-comment-badge-background-color: #313244 !important;
  --ytd-author-comment-badge-name-color: #cdd6f4 !important;
  --ytd-author-comment-badge-icon-color: #cdd6f4 !important;
}
:root[dark] #guide-skeleton,
:root[dark] #home-container-skeleton,
:root[dark] #home-chips {
  background-color: #1e1e2e !important;
  z-index: -1 !important;
}
:root[dark] #guide-skeleton .guide-ghost-icon,
:root[dark] #guide-skeleton .guide-ghost-text,
:root[dark] .masthead-skeleton-icon,
:root[dark] #home-page-skeleton .skeleton-bg-color,
:root[dark] .watch-skeleton .skeleton-bg-color {
  background-color: #45475a !important;
}
:root[dark] #cinematics,
:root[dark] #cinematic-container {
  mix-blend-mode: lighten !important;
}
:root[dark] .ytp-settings-button.ytp-hd-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-hdr-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-4k-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-5k-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-8k-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-3d-badge-grey::after,
:root[dark] .ytp-settings-button.ytp-3d-badge::after {
  background-color: #cba6f7 !important;
}
:root[dark] [fill="red"],
:root[dark] [fill="#F00"],
:root[dark] [fill="#FF0000"],
:root[dark] [fill="#f03"],
:root[dark] [fill="#FF0033"] {
  fill: #cba6f7 !important;
}
:root[dark] [fill="white"] {
  fill: #cdd6f4 !important;
}
:root[dark] [src*="https://www.gstatic.com/images/icons/material/system/1x/check_circle_grey600_36dp.png"] {
  filter: brightness(0) saturate(100%) invert(75%) sepia(82%) saturate(1008%) hue-rotate(189deg) brightness(120%) contrast(90%) !important;
}
:root[dark] yt-icon.ytd-logo [fill="white"] {
  fill: #11111b !important;
}
:root[dark] .yt-spec-icon-shape [fill="#FAFAFA"],
:root[dark] .yt-spec-icon-shape [fill="#000"],
:root[dark] .yt-spec-icon-shape [fill="#fff"],
:root[dark] .yt-spec-icon-shape [fill="#FFF"],
:root[dark] .yt-spec-icon-shape [fill="#FFFFFF"] {
  fill: #11111b !important;
}
:root[dark] .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon,
:root[dark] .yt-spec-icon-badge-shape {
  color: #cdd6f4 !important;
}
:root[dark] .yt-spec-icon-badge-shape--type-notification .yt-spec-icon-badge-shape__badge {
  background-color: #cba6f7 !important;
  color: #313244 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
  background-color: #313244 !important;
  /* Accent for filled-in thumbs up (like button) */
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(3,3,3)"],
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(0,0,0)"],
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(255,255,255)"] {
  fill: #cdd6f4 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(0,0,0)"],
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(255,255,255)"] {
  stroke: #cdd6f4 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] {
  fill: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] + [stroke] {
  stroke: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal:hover {
  background-color: #45475a !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline {
  color: #cdd6f4 !important;
  border-color: #585b70 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline:hover {
  background-color: #585b70 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text {
  color: #cdd6f4 !important;
  /* Accent for filled-in thumbs up (like button) */
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text path[d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"] {
  fill: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text:hover {
  background-color: #45475a !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled:hover {
  background-color: #bd8ff5 !important;
}
:root[dark] .yt-spec-button-shape-next--disabled {
  color: #7f849c !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
  background-color: #313244 !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal:hover {
  background-color: #45475a !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
  color: #cdd6f4 !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--outline {
  color: #cdd6f4 !important;
  border-color: #45475a !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--outline:hover {
  background: #313244 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline {
  color: #cba6f7 !important;
  border-color: #585b70 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline:hover {
  background-color: rgba(203, 166, 247, 0.3) !important;
  color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text {
  color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text:hover {
  background-color: rgba(203, 166, 247, 0.3) !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--filled:hover {
  background-color: #d9bdf9 !important;
}
:root[dark] .yt-spec-button-shape-next--disabled.yt-spec-button-shape-next--filled {
  color: #a6adc8 !important;
  background-color: rgba(69, 71, 90, 0.7) !important;
}
:root[dark] ytd-searchbox[has-focus] #container.ytd-searchbox {
  border-color: #cba6f7 !important;
}
:root[dark] .ytSearchboxComponentInputBox,
:root[dark] .ytSearchboxComponentInputBoxDark {
  background: var(--ytd-searchbox-background) !important;
  color: var(--ytd-searchbox-text-color) !important;
  border-color: var(--ytd-searchbox-border-color) !important;
  box-shadow: none !important;
}
:root[dark] .ytSearchboxComponentInputBoxHasFocus,
:root[dark] .ytSearchboxComponentInputBoxHasFocusDark {
  border-color: #cba6f7 !important;
}
:root[dark] .ytSuggestionComponentSuggestionHover:hover,
:root[dark] .ytSuggestionComponentSuggestionHoverDark:hover {
  background: #45475a !important;
}
:root[dark] .ytSearchboxComponentSuggestionsContainer,
:root[dark] .ytSearchboxComponentSuggestionsContainerDark {
  background: var(--yt-spec-raised-background) !important;
  border-color: var(--yt-spec-raised-background) !important;
}
:root[dark] .ytSuggestionComponentSuggestion,
:root[dark] .ytSuggestionComponentSuggestionDark {
  color: var(--ytd-searchbox-text-color) !important;
}
:root[dark] .ytSearchboxComponentSearchButton,
:root[dark] .ytSearchboxComponentSearchButtonDark {
  color: var(--ytd-searchbox-text-color) !important;
  background: #313244 !important;
  border-color: var(--ytd-searchbox-border-color) !important;
}
:root[dark] .ytSearchboxComponentClearButtonIcon,
:root[dark] .ytSearchboxComponentClearButtonIconDark {
  color: var(--ytd-searchbox-text-color) !important;
}
:root[dark] .ytSearchboxComponentReportButton,
:root[dark] .ytSearchboxComponentReportButtonDark,
:root[dark] .ytSuggestionComponentRemoveLink,
:root[dark] .ytSuggestionComponentRemoveLinkDark {
  color: #a6adc8 !important;
}
:root[dark] .sbsb_a {
  background: #313244 !important;
}
:root[dark] .sbdd_b {
  border-color: var(--yt-spec-raised-background) !important;
  background-color: var(--yt-spec-raised-background) !important;
}
:root[dark] .sbpqs_a,
:root[dark] .gsfs {
  color: var(--yt-spec-text-primary) !important;
}
:root[dark] .sbsb_i {
  color: var(--yt-spec-call-to-action) !important;
}
:root[dark] .sbsb_d {
  background-color: var(--yt-spec-additive-background) !important;
}
:root[dark] .sbdd_c {
  visibility: hidden !important;
}
:root[dark] .sbpqs_c {
  color: #7f849c !important;
}
:root[dark] .sbpqs_a::before,
:root[dark] .sbqs_c::before {
  content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20enable-background%3D%22new%200%200%2024%2024%22%20height%3D%2224%22%20viewBox%3D%221%201%2027%2027%22%20width%3D%2224%22%20focusable%3D%22false%22%20style%3D%22width%3A100%25%3Bheight%3A100%25%22%20pointer-events%3D%22none%22%20display%3D%22block%22%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20d%3D%22m20.87%2020.17-5.59-5.59A6.96%206.96%200%200%200%2017%2010c0-3.87-3.13-7-7-7s-7%203.13-7%207a6.995%206.995%200%200%200%2011.58%205.29l5.59%205.59zM10%2016c-3.31%200-6-2.69-6-6s2.69-6%206-6%206%202.69%206%206-2.69%206-6%206%22/%3E%3C/svg%3E") !important;
  background: none !important;
}
:root[dark] .yt-core-attributed-string__link--call-to-action-color {
  color: #cba6f7 !important;
}
:root[dark] .YtwCourseProgressViewModelHostProgressTitle,
:root[dark] .YtwCourseProgressViewModelHostProgressSubtitle {
  color: #cdd6f4 !important;
}
:root[dark] .YtwCourseProgressViewModelHostProgressBar {
  background-color: rgba(205, 214, 244, 0.2) !important;
}
:root[dark] .YtwCourseProgressViewModelHostProgressBar .YtwCourseProgressViewModelHostProgressBarFill {
  background-color: #cdd6f4 !important;
}
:root[dark] .ytwHowThisWasMadeSectionViewModelSectionTitle,
:root[dark] .ytwHowThisWasMadeSectionViewModelBodyHeader {
  color: #cdd6f4 !important;
}
:root[dark] .ytwHowThisWasMadeSectionViewModelBodyText {
  color: #a6adc8 !important;
}
:root[dark] #time-status:has([aria-label="LIVE"]),
:root[dark] .badge[aria-label="LIVE"],
:root[dark] .badge[aria-label="PREMIERE"],
:root[dark] .badge-shape-wiz--live.badge-shape-wiz--overlay,
:root[dark] .badge-shape-wiz--thumbnail-live {
  background: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] #thumbnail [style="background-color: rgba(51, 51, 51, 0.8);"],
:root[dark] .YtInlinePlayerControlsTopRightControlsCircleButton,
:root[dark] .badge-shape-wiz--default.badge-shape-wiz--overlay,
:root[dark] .branding-context-container-inner {
  background-color: #313244 !important;
  color: #cdd6f4 !important;
}
:root[dark] .ytp-sb-unsubscribe {
  background-color: #585b70 !important;
  color: #cdd6f4 !important;
}
:root[dark] .ytp-sb-subscribe {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] ytd-thumbnail-overlay-resume-playback-renderer {
  background-color: #45475a !important;
}
:root[dark] .badge-shape-wiz--thumbnail-default {
  color: #cdd6f4 !important;
  background: rgba(17, 17, 27, 0.8) !important;
}
:root[dark] .ytp-tooltip-bottom-text {
  background: rgba(49, 50, 68, 0.9) !important;
  color: #cdd6f4 !important;
  text-shadow: none !important;
}
:root[dark] .ytp-popup {
  background: rgba(49, 50, 68, 0.9) !important;
  text-shadow: none !important;
}
:root[dark] .ytp-panel-menu,
:root[dark] .ytp-panel-header,
:root[dark] .ytp-panel-footer,
:root[dark] .ytp-menuitem-label,
:root[dark] .ytp-premium-label,
:root[dark] .ytp-menuitem-content,
:root[dark] .ytp-menuitem-label-count,
:root[dark] .ytp-menu-label-secondary,
:root[dark] .ytd-menu-title-renderer {
  color: #cdd6f4 !important;
}
:root[dark] .ytp-panel-header {
  border-bottom-color: #585b70 !important;
}
:root[dark] .yt-spec-dialog-layout {
  background-color: #181825 !important;
}
:root[dark] .ytp-panel-footer-content-link {
  color: #cba6f7 !important;
}
:root[dark] .ytp-panel-back-button {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m19.41%2020.09-4.58-4.59%204.58-4.59L18%209.5l-6%206%206%206z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root[dark] .ytp-menuitem[aria-checked="true"] .ytp-menuitem-toggle-checkbox {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22M9%2016.2%204.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
  background-color: #cba6f7 !important;
}
:root[dark] .ytp-menuitem:not([aria-disabled="true"]):hover {
  background-color: #45475a !important;
}
:root[dark] .ytp-menuitem svg > path:not([fill="none"]) {
  fill: #cdd6f4 !important;
}
:root[dark] .ytp-menuitem[aria-haspopup="true"] .ytp-menuitem-content {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m12.59%2020.34%204.58-4.59-4.58-4.59L14%209.75l6%206-6%206z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root[dark] .ytp-menuitem[role="menuitemradio"][aria-checked="true"] .ytp-menuitem-label {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22M9%2016.2%204.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root[dark] yt-progress-bar .ytProgressBarLineProgressBarPlayed,
:root[dark] yt-progress-bar .ytProgressBarPlayheadProgressBarPlayheadDot {
  background: #cba6f7 !important;
}
:root[dark] yt-progress-bar .ytProgressBarLineProgressBarHovered,
:root[dark] yt-progress-bar .ytProgressBarLineProgressBarBackground {
  background: #cdd6f4 !important;
}
:root[dark] .ytp-cards-button .ytp-cards-button-icon use {
  fill: #1e1e2e !important;
}
:root[dark] .ytp-cards-button .ytp-cards-button-icon path {
  fill: #cdd6f4 !important;
}
:root[dark] .ytp-cards-teaser .ytp-cards-teaser-box {
  background-color: #585b70 !important;
  border-bottom-color: #585b70 !important;
}
:root[dark] .ytp-cards-teaser .ytp-cards-teaser-text {
  color: #cdd6f4 !important;
}
:root[dark] .html5-video-player {
  color: #cdd6f4 !important;
  /* youtube live ring */
  /* stats for nerds */
}
:root[dark] .html5-video-player .ytp-swatch-background-color,
:root[dark] .html5-video-player .ytp-play-progress {
  background: #cba6f7 !important;
}
:root[dark] .html5-video-player .ytp-svg-fill,
:root[dark] .html5-video-player [fill="#fff"] {
  fill: #cdd6f4 !important;
}
:root[dark] .html5-video-player .ytp-volume-slider-handle,
:root[dark] .html5-video-player .ytp-volume-slider-handle::before {
  background-color: #cdd6f4 !important;
}
:root[dark] .html5-video-player .ytp-volume-slider-handle::after {
  background-color: rgba(205, 214, 244, 0.2) !important;
}
:root[dark] .html5-video-player .ytp-time-current,
:root[dark] .html5-video-player .ytp-time-separator,
:root[dark] .html5-video-player .ytp-time-duration {
  color: #cdd6f4 !important;
}
:root[dark] .html5-video-player .ytp-live-badge[disabled]::before {
  background: #cba6f7 !important;
}
:root[dark] .html5-video-player .ytp-live-badge::before {
  background: #6c7086 !important;
}
:root[dark] .html5-video-player .yt-spec-avatar-shape__badge-text {
  color: #11111b !important;
}
:root[dark] .html5-video-player .yt-spec-avatar-shape--live-ring {
  border-color: #cba6f7 !important;
}
:root[dark] .html5-video-player .yt-spec-avatar-shape__live-badge {
  background-color: #cba6f7 !important;
}
:root[dark] .html5-video-player .ytp-button[aria-pressed]::after,
:root[dark] .html5-video-player .ytp-subtitles-button[aria-pressed]::after {
  background-color: #cba6f7 !important;
}
:root[dark] .html5-video-player .ytp-sfn {
  background: rgba(30, 30, 46, 0.8) !important;
  color: #cdd6f4 !important;
}
:root[dark] .html5-video-player .ytp-autonav-toggle-button {
  background-color: #585b70 !important;
}
:root[dark] .html5-video-player .ytp-autonav-toggle-button::after {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M12.75%204.5h-3c-.6%200-1.17.23-1.6.65-.42.43-.65%201-.65%201.6v22.5c0%20.59.23%201.16.65%201.59.43.42%201%20.66%201.6.66h3c.59%200%201.16-.24%201.59-.66.42-.43.66-1%20.66-1.59V6.75c0-.6-.24-1.17-.66-1.6-.43-.42-1-.65-1.59-.65m13.5%200h-3c-.6%200-1.17.23-1.6.65-.42.43-.65%201-.65%201.6v22.5c0%20.59.23%201.16.65%201.59.43.42%201%20.66%201.6.66h3c.59%200%201.16-.24%201.59-.66.42-.43.66-1%20.66-1.59V6.75c0-.6-.24-1.17-.66-1.6-.43-.42-1-.65-1.59-.65%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
  background-color: #7f849c !important;
}
:root[dark] .html5-video-player .ytp-autonav-toggle-button[aria-checked="true"]::after {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22m17%208.6-6.11-3.61c-1.5-.88-3.39.2-3.39%201.94v22.13c0%201.74%201.89%202.82%203.39%201.94L17%2027.4zm0%200v18.8L33%2018z%22%20fill%3D%22%231e1e2e%22/%3E%3C/svg%3E") !important;
  background-color: #cdd6f4 !important;
}
:root[dark] ytd-rich-item-renderer.ytd-rich-item-renderer-highlight {
  background-color: rgba(203, 166, 247, 0.1) !important;
  box-shadow: rgba(203, 166, 247, 0.1) 0 0 0 10px !important;
}
:root[dark] #shorts-container {
  --yt-spec-static-overlay-text-primary: #cdd6f4 !important;
  /* Buy super thanks button */
}
:root[dark] #shorts-container .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container .YtwFactoidRendererLabel {
  color: #a6adc8 !important;
}
:root[dark] #shorts-container .YtwFactoidRendererValue {
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container ytd-reel-video-renderer:not([is-watch-while-mode]) .yt-spec-button-shape-with-label__label {
  color: #bac2de !important;
}
:root[dark] #shorts-container ytd-reel-video-renderer[is-watch-while-mode] .yt-spec-button-shape-with-label__label {
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container .yt-spec-button-shape-next--overlay-dark.yt-spec-button-shape-next--tonal,
:root[dark] #shorts-container .YtdDesktopShortsVolumeControlsBackgroundScrim {
  background-color: rgba(30, 30, 46, 0.6) !important;
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container .yt-spec-button-shape-next--overlay-dark.yt-spec-button-shape-next--filled {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] #shorts-container .YtdDesktopShortsVolumeControlsMuteIcon {
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container .YtdShortsSuggestedActionStaticHostContainer {
  background-color: rgba(30, 30, 46, 0.6) !important;
}
:root[dark] #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostLeadingIcon,
:root[dark] #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostPrimaryText {
  color: #cdd6f4 !important;
}
:root[dark] .shortsLockupViewModelHostOutsideMetadataEndpoint {
  color: #cdd6f4 !important;
}
:root[dark] .shortsLockupViewModelHostOutsideMetadataSubhead {
  color: #a6adc8 !important;
}
:root[dark] #progressContainer.tp-yt-paper-progress {
  background-color: #181825 !important;
}
:root[dark] #comment-chip-container.yt-pdg-comment-chip-renderer,
:root[dark] .slider-knob-inner.tp-yt-paper-slider {
  background: #cba6f7 !important;
}
:root[dark] #primaryProgress.tp-yt-paper-progress {
  background: linear-gradient(139deg, #fab387, #eba0ac, #f38ba8, #f5c2e7) !important;
}
:root[dark] #container.ytd-pdg-comment-preview-renderer {
  background-color: #181825 !important;
}
:root[dark] #comment-chip-price.yt-pdg-comment-chip-renderer,
:root[dark] yt-icon.yt-pdg-comment-chip-renderer {
  color: #11111b !important;
}
:root[dark] .yt-tab-shape-wiz__tab {
  color: #bac2de !important;
}
:root[dark] .yt-tab-shape-wiz__tab--tab-selected {
  color: #cdd6f4 !important;
}
:root[dark] .yt-tab-group-shape-wiz__slider {
  background-color: #cdd6f4 !important;
}
:root[dark] .yt-tab-shape-wiz:hover .yt-tab-shape-wiz__tab-bar {
  background-color: #bac2de !important;
}
:root[dark] .truncated-text-wiz,
:root[dark] .page-header-view-model-wiz__page-header-content-metadata {
  color: #bac2de !important;
}
:root[dark] .page-header-view-model-wiz__page-header-title,
:root[dark] [style="color: rgb(255, 255, 255);"]:has(svg),
:root[dark] .truncated-text-wiz__absolute-button {
  color: #cdd6f4 !important;
}
:root[dark] .yt-contextual-sheet-layout-wiz {
  background-color: #181825 !important;
}
:root[dark] .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__container--tappable:hover {
  background-color: #313244 !important;
}
:root[dark] .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__title,
:root[dark] .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__accessory,
:root[dark] .yt-contextual-sheet-layout-wiz .radio-shape-wiz__label-container {
  color: #cdd6f4 !important;
}
:root[dark] .profile-badge-view-model-wiz__badge-description {
  color: #cdd6f4 !important;
}
:root[dark] .profile-badge-view-model-wiz__badge-subtitle {
  color: #a6adc8 !important;
}
:root[dark] .yt-profile-identity-info-view-model-wiz__divider {
  border-color: #313244 !important;
}
:root[dark] .yt-profile-card-view-model-wiz {
  background-color: #181825 !important;
}
:root[dark] .yt-profile-identity-info-view-model-wiz__channel-name,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-handle-with-bold-font,
:root[dark] .yt-profile-info-view-model-wiz__section-title,
:root[dark] .yt-comment-interaction-view-model-wiz__video-title,
:root[dark] .yt-shared-subscription-view-model-wiz__channel-name {
  color: #cdd6f4 !important;
}
:root[dark] .yt-profile-identity-info-view-model-wiz__badge,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-handle,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-content,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-delimiter,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-pronouns,
:root[dark] .yt-profile-info-view-model-wiz__section-divider,
:root[dark] .yt-profile-info-view-model-wiz__section-subtitle,
:root[dark] .yt-comment-interaction-view-model-wiz__comment-content {
  color: #a6adc8 !important;
}
:root[dark] .arrow.yt-horizontal-list-renderer {
  background: #313244 !important;
}
:root[dark] .ytVideoMetadataCarouselViewModelHost,
:root[dark] .YtVideoMetadataCarouselViewModelHost {
  background-color: #313244 !important;
}
:root[dark] .ytVideoMetadataCarouselViewModelHost .ytCarouselTitleViewModelTitle,
:root[dark] .YtVideoMetadataCarouselViewModelHost .ytCarouselTitleViewModelTitle,
:root[dark] .ytVideoMetadataCarouselViewModelHost .YtCarouselTitleViewModelTitle,
:root[dark] .YtVideoMetadataCarouselViewModelHost .YtCarouselTitleViewModelTitle,
:root[dark] .ytVideoMetadataCarouselViewModelHost .yt-core-attributed-string,
:root[dark] .YtVideoMetadataCarouselViewModelHost .yt-core-attributed-string,
:root[dark] .ytVideoMetadataCarouselViewModelHost .yt-icon-shape,
:root[dark] .YtVideoMetadataCarouselViewModelHost .yt-icon-shape {
  color: #cdd6f4 !important;
}
:root[dark] .video-summary-content-view-model-wiz__paragraph {
  color: #cdd6f4 !important;
}
:root[dark] #next-video-title {
  color: #cdd6f4 !important;
}
:root[dark] #publisher-container .yt-simple-endpoint.style-scope.yt-formatted-string,
:root[dark] #publisher-container .index-message-wrapper.style-scope.ytd-playlist-panel-renderer,
:root[dark] #publisher-container .index-message-wrapper.style-scope.ytd-playlist-panel-renderer::before {
  color: #a6adc8 !important;
}
:root[dark] .metadata-stats.style-scope.ytd-playlist-byline-renderer,
:root[dark] .yt-lockup-metadata-view-model-wiz__metadata {
  color: #a6adc8 !important;
}
:root[dark] .yt-core-attributed-string.yt-core-attributed-string--white-space-pre-wrap {
  color: #cdd6f4 !important;
}
:root[dark] .ytChipShapeInactive {
  background-color: #313244 !important;
  color: #cdd6f4 !important;
}
:root[dark] .ytChipShapeActive {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] .ytListViewModelHost {
  background-color: #181825 !important;
  color: #cdd6f4 !important;
}
:root[dark] .ytListViewModelHost .yt-icon-shape {
  color: #cdd6f4 !important;
}
:root:not([dark]) {
  color-scheme: dark !important;
  color: #cdd6f4 !important;
  background: #1e1e2e !important;
  /* Misc */
  /* Selected chapter */
  /* Skeleton */
  /* Ambient mode */
  /* Icons */
  /* verification badge */
  /* Buttons */
  /* Search box */
  /* "Suggestion removed" */
  /* Video description */
  /* Thumbnails */
  /* Panels, popups, tooltips */
  /* Video player */
  /* Video highlight */
  /* Shorts titles and views on homepage */
  /* Buy super thanks bar */
  /* Channel pages */
  /* channel details */
  /* Profiles */
  /* Horizontal list arrows */
  /* Live chat replay */
  /* AI-generated video summary */
  /* Playlist collapsed sidebar */
  /* Playlist metadata */
  /* Playlist titles in search results */
  /* Category tag pills */
  /* Vertical ellipsis menu on main page */
}
:root:not([dark]) ::selection {
  background-color: rgba(203, 166, 247, 0.3) !important;
}
:root:not([dark]) input::placeholder,
:root:not([dark]) textarea::placeholder {
  color: #a6adc8 !important;
}
:root:not([dark]),
:root:not([dark]) [dark],
:root:not([dark]) [system-icons],
:root:not([dark]) [darker-dark-theme],
:root:not([dark])[dark],
:root:not([dark])[system-icons],
:root:not([dark])[darker-dark-theme] {
  --efyt-control-bar-background-color: #181825 !important;
  --dimmer-text: #cdd6f4 !important;
  --yt-spec-white-1: #cdd6f4 !important;
  --yt-spec-white-2: #a6adc8 !important;
  --yt-spec-white-3: #bac2de !important;
  --yt-spec-white-4: #a9b3d6 !important;
  --yt-spec-black-1: #7f849c !important;
  --yt-spec-black-2: #6c7086 !important;
  --yt-spec-black-3: #585b70 !important;
  --yt-spec-black-4: #45475a !important;
  --yt-spec-black-pure: #313244 !important;
  --yt-spec-grey-1: #cdd6f4 !important;
  --yt-spec-grey-2: #a6adc8 !important;
  --yt-spec-grey-3: #bac2de !important;
  --yt-spec-grey-4: #9399b2 !important;
  --yt-spec-grey-5: #7f849c !important;
  --yt-brand-youtube-red: #cba6f7 !important;
  --yt-brand-medium-red: #cba6f7 !important;
  --yt-brand-light-red: #cba6f7 !important;
  --yt-spec-red-30: #fab387 !important;
  --yt-spec-red-70: #f38ba8 !important;
  --yt-spec-red-indicator: #cba6f7 !important;
  --yt-spec-pale-blue: #89dceb !important;
  --yt-spec-light-blue: #89dceb !important;
  --yt-spec-dark-blue: #74c7ec !important;
  --yt-spec-navy-blue: #94e2d5 !important;
  --yt-spec-light-green: #a6e3a1 !important;
  --yt-spec-dark-green: #a6e3a1 !important;
  --yt-spec-yellow: #fab387 !important;
  --yt-spec-black-pure-alpha-5: #a6adc8 !important;
  --yt-spec-black-pure-alpha-10: #9399b2 !important;
  --yt-spec-black-pure-alpha-15: rgba(17, 17, 27, 0.85) !important;
  --yt-spec-black-pure-alpha-30: rgba(17, 17, 27, 0.7) !important;
  --yt-spec-black-pure-alpha-60: rgba(17, 17, 27, 0.4) !important;
  --yt-spec-black-pure-alpha-80: rgba(17, 17, 27, 0.2) !important;
  --yt-spec-black-1-alpha-98: rgba(17, 17, 27, 0.02) !important;
  --yt-spec-black-1-alpha-95: rgba(17, 17, 27, 0.05) !important;
  --yt-spec-white-1-alpha-10: rgba(205, 214, 244, 0.9) !important;
  --yt-spec-white-1-alpha-20: rgba(205, 214, 244, 0.8) !important;
  --yt-spec-white-1-alpha-25: rgba(205, 214, 244, 0.75) !important;
  --yt-spec-white-1-alpha-30: rgba(205, 214, 244, 0.7) !important;
  --yt-spec-white-1-alpha-70: rgba(205, 214, 244, 0.3) !important;
  --yt-spec-white-1-alpha-95: rgba(205, 214, 244, 0.05) !important;
  --yt-spec-white-1-alpha-98: rgba(205, 214, 244, 0.02) !important;
  --yt-brand-medium-red-alpha-90: rgba(203, 166, 247, 0.1) !important;
  --yt-brand-medium-red-alpha-30: rgba(203, 166, 247, 0.7) !important;
  --yt-brand-light-red-alpha-30: rgba(203, 166, 247, 0.7) !important;
  --yt-spec-light-blue-alpha-30: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-dark-blue-alpha-30: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-base-background: #1e1e2e !important;
  --yt-spec-raised-background: #1e1e2e !important;
  --yt-spec-menu-background: #181825 !important;
  --yt-spec-inverted-background: #cdd6f4 !important;
  --yt-spec-additive-background: #313244 !important;
  --yt-spec-outline: #313244 !important;
  --yt-spec-shadow: rgba(17, 17, 27, 0.75) !important;
  --yt-spec-text-primary: #cdd6f4 !important;
  --yt-spec-text-secondary: #a6adc8 !important;
  --yt-spec-text-disabled: #bac2de !important;
  --yt-spec-text-primary-inverse: #11111b !important;
  --yt-spec-call-to-action: #cba6f7 !important;
  --yt-spec-call-to-action-inverse: #cba6f7 !important;
  --yt-spec-suggested-action: rgba(203, 166, 247, 0.2) !important;
  --yt-spec-suggested-action-inverse: #cdd6f4 !important;
  --yt-spec-icon-active-other: #cdd6f4 !important;
  --yt-spec-button-chip-background-hover: #45475a !important;
  --yt-spec-touch-response: #313244 !important;
  --yt-spec-touch-response-inverse: #cba6f7 !important;
  --yt-spec-brand-icon-active: #cba6f7 !important;
  --yt-spec-brand-button-background: #cba6f7 !important;
  --yt-spec-brand-link-text: #74c7ec !important;
  --yt-spec-wordmark-text: #cdd6f4 !important;
  --yt-spec-error-indicator: #f38ba8 !important;
  --yt-spec-themed-blue: #cba6f7 !important;
  --yt-spec-themed-green: #a6e3a1 !important;
  --yt-spec-ad-indicator: #94e2d5 !important;
  --yt-spec-themed-overlay-background: rgba(17, 17, 27, 0.8) !important;
  --yt-spec-commerce-badge-background: #a6e3a1 !important;
  --yt-spec-static-brand-red: #cba6f7 !important;
  --yt-spec-static-brand-white: #cdd6f4 !important;
  --yt-spec-static-brand-black: #1e1e2e !important;
  --yt-spec-static-clear-color: #11111b !important;
  --yt-spec-static-clear-black: #11111b !important;
  --yt-spec-static-ad-yellow: #fab387 !important;
  --yt-spec-static-grey: #a6adc8 !important;
  --yt-spec-static-overlay-background-solid: #11111b !important;
  --yt-spec-static-overlay-background-heavy: #11111b !important;
  --yt-spec-static-overlay-background-medium: rgba(17, 17, 27, 0.5) !important;
  --yt-spec-static-overlay-background-light: rgba(17, 17, 27, 0.9) !important;
  --yt-spec-static-overlay-text-primary: #cdd6f4 !important;
  --yt-spec-static-overlay-text-secondary: rgba(166, 173, 200, 0.3) !important;
  --yt-spec-static-overlay-text-disabled: rgba(166, 173, 200, 0.7) !important;
  --yt-spec-static-overlay-call-to-action: #cba6f7 !important;
  --yt-spec-static-overlay-icon-active-other: #11111b !important;
  --yt-spec-static-overlay-icon-inactive: #45475a !important;
  --yt-spec-static-overlay-icon-disabled: #585b70 !important;
  --yt-spec-static-overlay-button-primary: #cba6f7 !important;
  --yt-spec-static-overlay-touch-response: #7f849c !important;
  --yt-spec-static-overlay-touch-response-inverse: #45475a !important;
  --yt-spec-static-overlay-background-brand: #cba6f7 !important;
  --yt-spec-assistive-feed-themed-gradient-1: #a6adc8 !important;
  --yt-spec-assistive-feed-themed-gradient-2: #b4befe !important;
  --yt-spec-assistive-feed-themed-gradient-3: #f38ba8 !important;
  --yt-spec-brand-background-solid: #1e1e2e !important;
  --yt-spec-brand-background-primary: #1e1e2e !important;
  --yt-spec-brand-background-secondary: #181825 !important;
  --yt-spec-general-background-a: #1e1e2e !important;
  --yt-spec-general-background-b: #1e1e2e !important;
  --yt-spec-general-background-c: #11111b !important;
  --yt-spec-error-background: #1e1e2e !important;
  --yt-spec-10-percent-layer: #45475a !important;
  --yt-spec-snackbar-background: #181825 !important;
  --yt-spec-snackbar-background-updated: #181825 !important;
  --yt-spec-badge-chip-background: #313244 !important;
  --yt-spec-verified-badge-background: #6c7086 !important;
  --yt-spec-call-to-action-fadeoutd: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-call-to-action-hover: #cba6f7 !important;
  --yt-spec-brand-button-background-hover: #cba6f7 !important;
  --yt-spec-brand-link-text-fadeoutd: rgba(203, 166, 247, 0.7) !important;
  --yt-spec-filled-button-focus-outline: #313244 !important;
  --yt-spec-static-overlay-button-hover: #45475a !important;
  --yt-spec-mono-filled-hover: #45475a !important;
  --yt-spec-commerce-filled-hover: #cba6f7 !important;
  --yt-spec-mono-tonal-hover: #45475a !important;
  --yt-spec-commerce-tonal-hover: #585b70 !important;
  --yt-spec-static-overlay-filled-hover: #7f849c !important;
  --yt-spec-static-overlay-tonal-hover: #45475a !important;
  --yt-spec-paper-tab-ink: rgba(205, 214, 244, 0.7) !important;
  --yt-spec-filled-button-text: #cdd6f4 !important;
  --yt-spec-selected-nav-text: #cdd6f4 !important;
  --iron-icon-fill-color: #cdd6f4 !important;
  /* Search bar */
  --ytd-searchbox-border-color: #313244 !important;
  --ytd-searchbox-legacy-border-color: #313244 !important;
  --ytd-searchbox-legacy-border-shadow-color: #11111b !important;
  --ytd-searchbox-legacy-button-color: #181825 !important;
  --ytd-searchbox-legacy-button-border-color: #313244 !important;
  --ytd-searchbox-legacy-button-focus-color: #cba6f7 !important;
  --ytd-searchbox-legacy-button-hover-color: #181825 !important;
  --ytd-searchbox-legacy-button-hover-border-color: #313244 !important;
  --ytd-searchbox-legacy-button-icon-color: #cba6f7 !important;
  --ytd-searchbox-background: #1e1e2e !important;
  --ytd-searchbox-text-color: #cdd6f4 !important;
  /* System icons */
  --yt-spec-icon-inactive: #cdd6f4 !important;
  --yt-spec-icon-disabled: #7f849c !important;
  --yt-spec-brand-icon-inactive: #9399b2 !important;
  /* Yt video Page */
  --yt-live-chat-background-color: #1e1e2e !important;
  --yt-live-chat-action-panel-background-color: #1e1e2e !important;
  --yt-live-chat-secondary-background-color: #45475a !important;
  --yt-live-chat-toast-background-color: #585b70 !important;
  --yt-live-chat-mode-change-background-color: #1e1e2e !important;
  --yt-live-chat-secondary-text-color: #a6adc8 !important;
  --yt-live-chat-tertiary-text-color: rgba(205, 214, 244, 0.46) !important;
  --yt-live-chat-text-input-field-inactive-underline-color: #a6adc8 !important;
  --yt-live-chat-text-input-field-placeholder-color: #a6adc8 !important;
  --yt-live-chat-enabled-send-button-color: #cdd6f4 !important;
  --yt-live-chat-disabled-icon-button-color: #bac2de !important;
  --yt-live-chat-picker-button-hover-color: #cba6f7 !important;
  --yt-live-chat-mention-background-color: #cba6f7 !important;
  --yt-live-chat-mention-text-color: #cdd6f4 !important;
  --yt-live-chat-deleted-message-color: #a6adc8 !important;
  --yt-live-chat-deleted-message-bar-color: #bac2de !important;
  --yt-live-chat-reconnect-message-color: #cdd6f4 !important;
  --yt-live-chat-disabled-button-background-color: #6c7086 !important;
  --yt-live-chat-sub-panel-background-color: #1e1e2e !important;
  --yt-live-chat-sub-panel-background-color-transparent: #181825 !important;
  --yt-live-chat-moderator-color: #b4befe !important;
  --yt-live-chat-owner-color: #fab387 !important;
  --yt-live-chat-message-highlight-background-color: #1e1e2e !important;
  --yt-live-chat-sponsor-color: #a6e3a1 !important;
  --yt-live-chat-overlay-color: rgba(24, 24, 37, 0.5) !important;
  --yt-live-chat-dialog-background-color: #1e1e2e !important;
  --yt-emoji-picker-variant-selector-bg-color: #1e1e2e !important;
  --yt-live-chat-moderation-mode-hover-background-color: rgba(24, 24, 37, 0.7) !important;
  --yt-grey: #a6adc8 !important;
  --yt-live-chat-text-input-field-suggestion-background-color: #a6adc8 !important;
  --yt-live-chat-text-input-field-suggestion-background-color-hover: #bac2de !important;
  --yt-emoji-picker-search-background-color: #313244 !important;
  --yt-emoji-picker-search-color: #cdd6f4 !important;
  --yt-emoji-picker-search-placeholder-color: #cba6f7 !important;
  --yt-live-chat-slider-active-color: #cba6f7 !important;
  --yt-live-chat-slider-container-color: #313244 !important;
  --yt-live-chat-slider-markers-color: #cdd6f4 !important;
  --yt-live-chat-banner-gradient-scrim: linear-gradient(#181825, transparent) !important;
  --yt-live-chat-action-panel-gradient-scrim: linear-gradient(to top, #181825, transparent) !important;
  --yt-live-chat-automod-button-background-color-hover: rgba(17, 17, 27, 0.5) !important;
  --yt-live-chat-automod-button-explanation-color: rgba(203, 166, 247, 0.3) !important;
  --yt-live-chat-shimmer-background-color: rgba(17, 17, 27, 0.6) !important;
  --yt-live-chat-shimmer-linear-gradient: linear-gradient(0deg, rgba(205, 214, 244, 0.9) 40%, rgba(30, 30, 46, 0.7) 50%, rgba(205, 214, 244, 0.9) 60%) !important;
  --yt-live-chat-vem-background-color: #181825 !important;
  --yt-live-chat-product-picker-icon-color: rgba(205, 214, 244, 0.5) !important;
  --yt-live-chat-product-picker-hover-color: #6c7086 !important;
  --yt-live-chat-product-picker-disabled-icon-color: rgba(205, 214, 244, 0.7) !important;
  --yt-live-chat-action-panel-background-color-transparent: (null) !important;
  --paper-tooltip-background: #6c7086 !important;
  --paper-tooltip-text-color: #cdd6f4 !important;
  /* Links */
  --yt-endpoint-color: #cba6f7 !important;
  --yt-endpoint-visited-color: #cba6f7 !important;
  --yt-endpoint-hover-color: #cba6f7 !important;
  --sb-dark-red-outline: #cba6f7 !important;
  --sb-main-bg-color: #1e1e2e !important;
  --sb-main-fg-color: #cdd6f4 !important;
  --sb-grey-bg-color: #1e1e2e !important;
  --sb-grey-fg-color: #a6adc8 !important;
  --sb-red-bg-color: #cba6f7 !important;
  --sb-category-sponsor: #a6e3a1 !important;
  --sb-category-selfpromo: #f9e2af !important;
  --sb-category-exclusive_access: #94e2d5 !important;
  --sb-category-interaction: #cba6f7 !important;
  --sb-category-poi_highlight: #f5c2e7 !important;
  --sb-category-intro: #89dceb !important;
  --sb-category-outro: #89b4fa !important;
  --sb-category-preview: #74c7ec !important;
  --sb-category-filler: #b4befe !important;
  --sb-category-music_offtopic: #fab387 !important;
}
:root:not([dark]):not(.style-scope) {
  --primary-text-color: #cdd6f4 !important;
  --primary-background-color: #1e1e2e !important;
  --secondary-text-color: #a6adc8 !important;
  --disabled-text-color: #bac2de !important;
  --divider-color: #6c7086 !important;
  --error-color: #f38ba8 !important;
  --primary-color: #cba6f7 !important;
  --light-primary-color: #cba6f7 !important;
  --dark-primary-color: #89b4fa !important;
  --accent-color: #cba6f7 !important;
  --light-accent-color: #cba6f7 !important;
  --dark-accent-color: #cba6f7 !important;
  --light-theme-background-color: #1e1e2e !important;
  --light-theme-base-color: #cdd6f4 !important;
  --light-theme-text-color: #cdd6f4 !important;
  --light-theme-secondary-color: #a6adc8 !important;
  --light-theme-disabled-color: #bac2de !important;
  --light-theme-divider-color: #6c7086 !important;
  --dark-theme-background-color: #1e1e2e !important;
  --dark-theme-base-color: #cdd6f4 !important;
  --dark-theme-text-color: #cdd6f4 !important;
  --dark-theme-secondary-color: #a6adc8 !important;
  --dark-theme-disabled-color: #bac2de !important;
  --dark-theme-divider-color: #6c7086 !important;
}
:root:not([dark]) .yt-spec-touch-feedback-shape__hover-effect {
  background-color: #313244 !important;
}
:root:not([dark]) ytd-watch-metadata {
  --yt-saturated-raised-background: #45475a !important;
  --yt-saturated-text-primary: #cdd6f4 !important;
  --yt-saturated-text-secondary: #bac2de !important;
}
:root:not([dark]) .yt-core-attributed-string--link-inherit-color {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-core-attributed-string--highlight-text-decorator {
  background-color: #585b70 !important;
}
:root:not([dark]) #channel-name.ytd-video-meta-block {
  --yt-endpoint-color: #cba6f7 !important;
  --yt-endpoint-visited-color: #cba6f7 !important;
  color: #cba6f7 !important;
}
:root:not([dark]) .yt-page-navigation-progress {
  background: #cba6f7 !important;
}
:root:not([dark]) ytd-macro-markers-list-item-renderer {
  --ytd-macro-markers-list-item-background-color: #313244 !important;
  --ytd-macro-markers-list-item-title-color: #cdd6f4 !important;
  --ytd-macro-markers-list-item-secondary-color: #bac2de !important;
  --ytd-macro-markers-list-item-timestamp-background-color: #45475a !important;
}
:root:not([dark]) ytd-playlist-panel-video-renderer {
  --yt-lightsource-section2-color: #45475a !important;
  --yt-lightsource-section4-color: #585b70 !important;
  --yt-lightsource-primary-title-color: #cdd6f4 !important;
  --yt-lightsource-secondary-title-color: #cdd6f4 !important;
  --yt-active-playlist-panel-background-color: #313244 !important;
}
:root:not([dark]) ytd-playlist-panel-renderer[collapsible][collapsed][use-color-palette] .header.ytd-playlist-panel-renderer {
  --iron-icon-fill-color: #cdd6f4 !important;
  background-color: #1e1e2e !important;
}
:root:not([dark]) #container.ytd-masthead {
  --iron-icon-fill-color: #cdd6f4 !important;
}
:root:not([dark]) #background.ytd-masthead,
:root:not([dark]) #frosted-glass {
  --yt-frosted-glass-desktop: #1e1e2e !important;
  --yt-spec-frosted-glass-desktop: #1e1e2e !important;
}
:root:not([dark]) ytd-feed-filter-chip-bar-renderer[expand-instead-of-scroll] #chips-wrapper.ytd-feed-filter-chip-bar-renderer {
  --iron-icon-fill-color: #cdd6f4 !important;
  background-color: #1e1e2e !important;
}
:root:not([dark]) #ytd-player #container {
  background: #11111b !important;
}
:root:not([dark]) .ytp-progress-list {
  background: rgba(49, 50, 68, 0.8) !important;
}
:root:not([dark]) .ytp-load-progress {
  background: #6c7086 !important;
}
:root:not([dark]) ytd-expandable-metadata-renderer {
  --yt-lightsource-section1-color: #1e1e2e !important;
  --yt-lightsource-section2-color: #313244 !important;
  --yt-lightsource-section3-color: #45475a !important;
  --yt-lightsource-section4-color: #585b70 !important;
  --yt-lightsource-primary-title-color: #cdd6f4 !important;
  --yt-lightsource-secondary-title-color: #a6adc8 !important;
}
:root:not([dark]) yt-live-chat-renderer {
  --yt-button-default-text-color: #cdd6f4 !important;
  --yt-button-default-background-color: #1e1e2e !important;
  --yt-button-dark-text-color: #1e1e2e !important;
  --yt-button-dark-background-color: #cba6f7 !important;
  --yt-button-payment-background-color: #cba6f7 !important;
}
:root:not([dark]) yt-icon-button.yt-live-chat-item-list-renderer {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) yt-icon-button.yt-live-chat-item-list-renderer:hover {
  background-color: #bd8ff5 !important;
}
:root:not([dark]) ytd-author-comment-badge-renderer:not(
    [style*="--ytd-author-comment-badge-icon-background-color: transparent;"]
  ) {
  --yt-basic-background-color: #313244 !important;
  --yt-basic-foreground-title-color: #313244 !important;
  --ytd-author-comment-badge-background-color: #313244 !important;
  --ytd-author-comment-badge-name-color: #cdd6f4 !important;
  --ytd-author-comment-badge-icon-color: #cdd6f4 !important;
}
:root:not([dark]) #guide-skeleton,
:root:not([dark]) #home-container-skeleton,
:root:not([dark]) #home-chips {
  background-color: #1e1e2e !important;
  z-index: -1 !important;
}
:root:not([dark]) #guide-skeleton .guide-ghost-icon,
:root:not([dark]) #guide-skeleton .guide-ghost-text,
:root:not([dark]) .masthead-skeleton-icon,
:root:not([dark]) #home-page-skeleton .skeleton-bg-color,
:root:not([dark]) .watch-skeleton .skeleton-bg-color {
  background-color: #45475a !important;
}
:root:not([dark]) #cinematics,
:root:not([dark]) #cinematic-container {
  mix-blend-mode: lighten !important;
}
:root:not([dark]) .ytp-settings-button.ytp-hd-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-hdr-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-4k-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-5k-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-8k-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-3d-badge-grey::after,
:root:not([dark]) .ytp-settings-button.ytp-3d-badge::after {
  background-color: #cba6f7 !important;
}
:root:not([dark]) [fill="red"],
:root:not([dark]) [fill="#F00"],
:root:not([dark]) [fill="#FF0000"],
:root:not([dark]) [fill="#f03"],
:root:not([dark]) [fill="#FF0033"] {
  fill: #cba6f7 !important;
}
:root:not([dark]) [fill="white"] {
  fill: #cdd6f4 !important;
}
:root:not([dark]) [src*="https://www.gstatic.com/images/icons/material/system/1x/check_circle_grey600_36dp.png"] {
  filter: brightness(0) saturate(100%) invert(75%) sepia(82%) saturate(1008%) hue-rotate(189deg) brightness(120%) contrast(90%) !important;
}
:root:not([dark]) yt-icon.ytd-logo [fill="white"] {
  fill: #11111b !important;
}
:root:not([dark]) .yt-spec-icon-shape [fill="#FAFAFA"],
:root:not([dark]) .yt-spec-icon-shape [fill="#000"],
:root:not([dark]) .yt-spec-icon-shape [fill="#fff"],
:root:not([dark]) .yt-spec-icon-shape [fill="#FFF"],
:root:not([dark]) .yt-spec-icon-shape [fill="#FFFFFF"] {
  fill: #11111b !important;
}
:root:not([dark]) .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon,
:root:not([dark]) .yt-spec-icon-badge-shape {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-spec-icon-badge-shape--type-notification .yt-spec-icon-badge-shape__badge {
  background-color: #cba6f7 !important;
  color: #313244 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
  background-color: #313244 !important;
  /* Accent for filled-in thumbs up (like button) */
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(3,3,3)"],
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(0,0,0)"],
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(255,255,255)"] {
  fill: #cdd6f4 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(0,0,0)"],
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(255,255,255)"] {
  stroke: #cdd6f4 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] {
  fill: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] + [stroke] {
  stroke: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal:hover {
  background-color: #45475a !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline {
  color: #cdd6f4 !important;
  border-color: #585b70 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline:hover {
  background-color: #585b70 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text {
  color: #cdd6f4 !important;
  /* Accent for filled-in thumbs up (like button) */
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text path[d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"] {
  fill: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text:hover {
  background-color: #45475a !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled:hover {
  background-color: #bd8ff5 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--disabled {
  color: #7f849c !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
  background-color: #313244 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal:hover {
  background-color: #45475a !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--outline {
  color: #cdd6f4 !important;
  border-color: #45475a !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--outline:hover {
  background: #313244 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline {
  color: #cba6f7 !important;
  border-color: #585b70 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline:hover {
  background-color: rgba(203, 166, 247, 0.3) !important;
  color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text {
  color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text:hover {
  background-color: rgba(203, 166, 247, 0.3) !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--filled:hover {
  background-color: #d9bdf9 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--disabled.yt-spec-button-shape-next--filled {
  color: #a6adc8 !important;
  background-color: rgba(69, 71, 90, 0.7) !important;
}
:root:not([dark]) ytd-searchbox[has-focus] #container.ytd-searchbox {
  border-color: #cba6f7 !important;
}
:root:not([dark]) .ytSearchboxComponentInputBox,
:root:not([dark]) .ytSearchboxComponentInputBoxDark {
  background: var(--ytd-searchbox-background) !important;
  color: var(--ytd-searchbox-text-color) !important;
  border-color: var(--ytd-searchbox-border-color) !important;
  box-shadow: none !important;
}
:root:not([dark]) .ytSearchboxComponentInputBoxHasFocus,
:root:not([dark]) .ytSearchboxComponentInputBoxHasFocusDark {
  border-color: #cba6f7 !important;
}
:root:not([dark]) .ytSuggestionComponentSuggestionHover:hover,
:root:not([dark]) .ytSuggestionComponentSuggestionHoverDark:hover {
  background: #45475a !important;
}
:root:not([dark]) .ytSearchboxComponentSuggestionsContainer,
:root:not([dark]) .ytSearchboxComponentSuggestionsContainerDark {
  background: var(--yt-spec-raised-background) !important;
  border-color: var(--yt-spec-raised-background) !important;
}
:root:not([dark]) .ytSuggestionComponentSuggestion,
:root:not([dark]) .ytSuggestionComponentSuggestionDark {
  color: var(--ytd-searchbox-text-color) !important;
}
:root:not([dark]) .ytSearchboxComponentSearchButton,
:root:not([dark]) .ytSearchboxComponentSearchButtonDark {
  color: var(--ytd-searchbox-text-color) !important;
  background: #313244 !important;
  border-color: var(--ytd-searchbox-border-color) !important;
}
:root:not([dark]) .ytSearchboxComponentClearButtonIcon,
:root:not([dark]) .ytSearchboxComponentClearButtonIconDark {
  color: var(--ytd-searchbox-text-color) !important;
}
:root:not([dark]) .ytSearchboxComponentReportButton,
:root:not([dark]) .ytSearchboxComponentReportButtonDark,
:root:not([dark]) .ytSuggestionComponentRemoveLink,
:root:not([dark]) .ytSuggestionComponentRemoveLinkDark {
  color: #a6adc8 !important;
}
:root:not([dark]) .sbsb_a {
  background: #313244 !important;
}
:root:not([dark]) .sbdd_b {
  border-color: var(--yt-spec-raised-background) !important;
  background-color: var(--yt-spec-raised-background) !important;
}
:root:not([dark]) .sbpqs_a,
:root:not([dark]) .gsfs {
  color: var(--yt-spec-text-primary) !important;
}
:root:not([dark]) .sbsb_i {
  color: var(--yt-spec-call-to-action) !important;
}
:root:not([dark]) .sbsb_d {
  background-color: var(--yt-spec-additive-background) !important;
}
:root:not([dark]) .sbdd_c {
  visibility: hidden !important;
}
:root:not([dark]) .sbpqs_c {
  color: #7f849c !important;
}
:root:not([dark]) .sbpqs_a::before,
:root:not([dark]) .sbqs_c::before {
  content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20enable-background%3D%22new%200%200%2024%2024%22%20height%3D%2224%22%20viewBox%3D%221%201%2027%2027%22%20width%3D%2224%22%20focusable%3D%22false%22%20style%3D%22width%3A100%25%3Bheight%3A100%25%22%20pointer-events%3D%22none%22%20display%3D%22block%22%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20d%3D%22m20.87%2020.17-5.59-5.59A6.96%206.96%200%200%200%2017%2010c0-3.87-3.13-7-7-7s-7%203.13-7%207a6.995%206.995%200%200%200%2011.58%205.29l5.59%205.59zM10%2016c-3.31%200-6-2.69-6-6s2.69-6%206-6%206%202.69%206%206-2.69%206-6%206%22/%3E%3C/svg%3E") !important;
  background: none !important;
}
:root:not([dark]) .yt-core-attributed-string__link--call-to-action-color {
  color: #cba6f7 !important;
}
:root:not([dark]) .YtwCourseProgressViewModelHostProgressTitle,
:root:not([dark]) .YtwCourseProgressViewModelHostProgressSubtitle {
  color: #cdd6f4 !important;
}
:root:not([dark]) .YtwCourseProgressViewModelHostProgressBar {
  background-color: rgba(205, 214, 244, 0.2) !important;
}
:root:not([dark]) .YtwCourseProgressViewModelHostProgressBar .YtwCourseProgressViewModelHostProgressBarFill {
  background-color: #cdd6f4 !important;
}
:root:not([dark]) .ytwHowThisWasMadeSectionViewModelSectionTitle,
:root:not([dark]) .ytwHowThisWasMadeSectionViewModelBodyHeader {
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytwHowThisWasMadeSectionViewModelBodyText {
  color: #a6adc8 !important;
}
:root:not([dark]) #time-status:has([aria-label="LIVE"]),
:root:not([dark]) .badge[aria-label="LIVE"],
:root:not([dark]) .badge[aria-label="PREMIERE"],
:root:not([dark]) .badge-shape-wiz--live.badge-shape-wiz--overlay,
:root:not([dark]) .badge-shape-wiz--thumbnail-live {
  background: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) #thumbnail [style="background-color: rgba(51, 51, 51, 0.8);"],
:root:not([dark]) .YtInlinePlayerControlsTopRightControlsCircleButton,
:root:not([dark]) .badge-shape-wiz--default.badge-shape-wiz--overlay,
:root:not([dark]) .branding-context-container-inner {
  background-color: #313244 !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytp-sb-unsubscribe {
  background-color: #585b70 !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytp-sb-subscribe {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) ytd-thumbnail-overlay-resume-playback-renderer {
  background-color: #45475a !important;
}
:root:not([dark]) .badge-shape-wiz--thumbnail-default {
  color: #cdd6f4 !important;
  background: rgba(17, 17, 27, 0.8) !important;
}
:root:not([dark]) .ytp-tooltip-bottom-text {
  background: rgba(49, 50, 68, 0.9) !important;
  color: #cdd6f4 !important;
  text-shadow: none !important;
}
:root:not([dark]) .ytp-popup {
  background: rgba(49, 50, 68, 0.9) !important;
  text-shadow: none !important;
}
:root:not([dark]) .ytp-panel-menu,
:root:not([dark]) .ytp-panel-header,
:root:not([dark]) .ytp-panel-footer,
:root:not([dark]) .ytp-menuitem-label,
:root:not([dark]) .ytp-premium-label,
:root:not([dark]) .ytp-menuitem-content,
:root:not([dark]) .ytp-menuitem-label-count,
:root:not([dark]) .ytp-menu-label-secondary,
:root:not([dark]) .ytd-menu-title-renderer {
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytp-panel-header {
  border-bottom-color: #585b70 !important;
}
:root:not([dark]) .yt-spec-dialog-layout {
  background-color: #181825 !important;
}
:root:not([dark]) .ytp-panel-footer-content-link {
  color: #cba6f7 !important;
}
:root:not([dark]) .ytp-panel-back-button {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m19.41%2020.09-4.58-4.59%204.58-4.59L18%209.5l-6%206%206%206z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root:not([dark]) .ytp-menuitem[aria-checked="true"] .ytp-menuitem-toggle-checkbox {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22M9%2016.2%204.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
  background-color: #cba6f7 !important;
}
:root:not([dark]) .ytp-menuitem:not([aria-disabled="true"]):hover {
  background-color: #45475a !important;
}
:root:not([dark]) .ytp-menuitem svg > path:not([fill="none"]) {
  fill: #cdd6f4 !important;
}
:root:not([dark]) .ytp-menuitem[aria-haspopup="true"] .ytp-menuitem-content {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m12.59%2020.34%204.58-4.59-4.58-4.59L14%209.75l6%206-6%206z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root:not([dark]) .ytp-menuitem[role="menuitemradio"][aria-checked="true"] .ytp-menuitem-label {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22M9%2016.2%204.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root:not([dark]) yt-progress-bar .ytProgressBarLineProgressBarPlayed,
:root:not([dark]) yt-progress-bar .ytProgressBarPlayheadProgressBarPlayheadDot {
  background: #cba6f7 !important;
}
:root:not([dark]) yt-progress-bar .ytProgressBarLineProgressBarHovered,
:root:not([dark]) yt-progress-bar .ytProgressBarLineProgressBarBackground {
  background: #cdd6f4 !important;
}
:root:not([dark]) .ytp-cards-button .ytp-cards-button-icon use {
  fill: #1e1e2e !important;
}
:root:not([dark]) .ytp-cards-button .ytp-cards-button-icon path {
  fill: #cdd6f4 !important;
}
:root:not([dark]) .ytp-cards-teaser .ytp-cards-teaser-box {
  background-color: #585b70 !important;
  border-bottom-color: #585b70 !important;
}
:root:not([dark]) .ytp-cards-teaser .ytp-cards-teaser-text {
  color: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player {
  color: #cdd6f4 !important;
  /* youtube live ring */
  /* stats for nerds */
}
:root:not([dark]) .html5-video-player .ytp-swatch-background-color,
:root:not([dark]) .html5-video-player .ytp-play-progress {
  background: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .ytp-svg-fill,
:root:not([dark]) .html5-video-player [fill="#fff"] {
  fill: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player .ytp-volume-slider-handle,
:root:not([dark]) .html5-video-player .ytp-volume-slider-handle::before {
  background-color: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player .ytp-volume-slider-handle::after {
  background-color: rgba(205, 214, 244, 0.2) !important;
}
:root:not([dark]) .html5-video-player .ytp-time-current,
:root:not([dark]) .html5-video-player .ytp-time-separator,
:root:not([dark]) .html5-video-player .ytp-time-duration {
  color: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player .ytp-live-badge[disabled]::before {
  background: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .ytp-live-badge::before {
  background: #6c7086 !important;
}
:root:not([dark]) .html5-video-player .yt-spec-avatar-shape__badge-text {
  color: #11111b !important;
}
:root:not([dark]) .html5-video-player .yt-spec-avatar-shape--live-ring {
  border-color: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .yt-spec-avatar-shape__live-badge {
  background-color: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .ytp-button[aria-pressed]::after,
:root:not([dark]) .html5-video-player .ytp-subtitles-button[aria-pressed]::after {
  background-color: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .ytp-sfn {
  background: rgba(30, 30, 46, 0.8) !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player .ytp-autonav-toggle-button {
  background-color: #585b70 !important;
}
:root:not([dark]) .html5-video-player .ytp-autonav-toggle-button::after {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M12.75%204.5h-3c-.6%200-1.17.23-1.6.65-.42.43-.65%201-.65%201.6v22.5c0%20.59.23%201.16.65%201.59.43.42%201%20.66%201.6.66h3c.59%200%201.16-.24%201.59-.66.42-.43.66-1%20.66-1.59V6.75c0-.6-.24-1.17-.66-1.6-.43-.42-1-.65-1.59-.65m13.5%200h-3c-.6%200-1.17.23-1.6.65-.42.43-.65%201-.65%201.6v22.5c0%20.59.23%201.16.65%201.59.43.42%201%20.66%201.6.66h3c.59%200%201.16-.24%201.59-.66.42-.43.66-1%20.66-1.59V6.75c0-.6-.24-1.17-.66-1.6-.43-.42-1-.65-1.59-.65%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
  background-color: #7f849c !important;
}
:root:not([dark]) .html5-video-player .ytp-autonav-toggle-button[aria-checked="true"]::after {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22m17%208.6-6.11-3.61c-1.5-.88-3.39.2-3.39%201.94v22.13c0%201.74%201.89%202.82%203.39%201.94L17%2027.4zm0%200v18.8L33%2018z%22%20fill%3D%22%231e1e2e%22/%3E%3C/svg%3E") !important;
  background-color: #cdd6f4 !important;
}
:root:not([dark]) ytd-rich-item-renderer.ytd-rich-item-renderer-highlight {
  background-color: rgba(203, 166, 247, 0.1) !important;
  box-shadow: rgba(203, 166, 247, 0.1) 0 0 0 10px !important;
}
:root:not([dark]) #shorts-container {
  --yt-spec-static-overlay-text-primary: #cdd6f4 !important;
  /* Buy super thanks button */
}
:root:not([dark]) #shorts-container .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container .YtwFactoidRendererLabel {
  color: #a6adc8 !important;
}
:root:not([dark]) #shorts-container .YtwFactoidRendererValue {
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container ytd-reel-video-renderer:not([is-watch-while-mode]) .yt-spec-button-shape-with-label__label {
  color: #bac2de !important;
}
:root:not([dark]) #shorts-container ytd-reel-video-renderer[is-watch-while-mode] .yt-spec-button-shape-with-label__label {
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container .yt-spec-button-shape-next--overlay-dark.yt-spec-button-shape-next--tonal,
:root:not([dark]) #shorts-container .YtdDesktopShortsVolumeControlsBackgroundScrim {
  background-color: rgba(30, 30, 46, 0.6) !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container .yt-spec-button-shape-next--overlay-dark.yt-spec-button-shape-next--filled {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) #shorts-container .YtdDesktopShortsVolumeControlsMuteIcon {
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container .YtdShortsSuggestedActionStaticHostContainer {
  background-color: rgba(30, 30, 46, 0.6) !important;
}
:root:not([dark]) #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostLeadingIcon,
:root:not([dark]) #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostPrimaryText {
  color: #cdd6f4 !important;
}
:root:not([dark]) .shortsLockupViewModelHostOutsideMetadataEndpoint {
  color: #cdd6f4 !important;
}
:root:not([dark]) .shortsLockupViewModelHostOutsideMetadataSubhead {
  color: #a6adc8 !important;
}
:root:not([dark]) #progressContainer.tp-yt-paper-progress {
  background-color: #181825 !important;
}
:root:not([dark]) #comment-chip-container.yt-pdg-comment-chip-renderer,
:root:not([dark]) .slider-knob-inner.tp-yt-paper-slider {
  background: #cba6f7 !important;
}
:root:not([dark]) #primaryProgress.tp-yt-paper-progress {
  background: linear-gradient(139deg, #fab387, #eba0ac, #f38ba8, #f5c2e7) !important;
}
:root:not([dark]) #container.ytd-pdg-comment-preview-renderer {
  background-color: #181825 !important;
}
:root:not([dark]) #comment-chip-price.yt-pdg-comment-chip-renderer,
:root:not([dark]) yt-icon.yt-pdg-comment-chip-renderer {
  color: #11111b !important;
}
:root:not([dark]) .yt-tab-shape-wiz__tab {
  color: #bac2de !important;
}
:root:not([dark]) .yt-tab-shape-wiz__tab--tab-selected {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-tab-group-shape-wiz__slider {
  background-color: #cdd6f4 !important;
}
:root:not([dark]) .yt-tab-shape-wiz:hover .yt-tab-shape-wiz__tab-bar {
  background-color: #bac2de !important;
}
:root:not([dark]) .truncated-text-wiz,
:root:not([dark]) .page-header-view-model-wiz__page-header-content-metadata {
  color: #bac2de !important;
}
:root:not([dark]) .page-header-view-model-wiz__page-header-title,
:root:not([dark]) [style="color: rgb(255, 255, 255);"]:has(svg),
:root:not([dark]) .truncated-text-wiz__absolute-button {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-contextual-sheet-layout-wiz {
  background-color: #181825 !important;
}
:root:not([dark]) .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__container--tappable:hover {
  background-color: #313244 !important;
}
:root:not([dark]) .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__title,
:root:not([dark]) .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__accessory,
:root:not([dark]) .yt-contextual-sheet-layout-wiz .radio-shape-wiz__label-container {
  color: #cdd6f4 !important;
}
:root:not([dark]) .profile-badge-view-model-wiz__badge-description {
  color: #cdd6f4 !important;
}
:root:not([dark]) .profile-badge-view-model-wiz__badge-subtitle {
  color: #a6adc8 !important;
}
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__divider {
  border-color: #313244 !important;
}
:root:not([dark]) .yt-profile-card-view-model-wiz {
  background-color: #181825 !important;
}
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__channel-name,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-handle-with-bold-font,
:root:not([dark]) .yt-profile-info-view-model-wiz__section-title,
:root:not([dark]) .yt-comment-interaction-view-model-wiz__video-title,
:root:not([dark]) .yt-shared-subscription-view-model-wiz__channel-name {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__badge,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-handle,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-content,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-delimiter,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-pronouns,
:root:not([dark]) .yt-profile-info-view-model-wiz__section-divider,
:root:not([dark]) .yt-profile-info-view-model-wiz__section-subtitle,
:root:not([dark]) .yt-comment-interaction-view-model-wiz__comment-content {
  color: #a6adc8 !important;
}
:root:not([dark]) .arrow.yt-horizontal-list-renderer {
  background: #313244 !important;
}
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost {
  background-color: #313244 !important;
}
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost .ytCarouselTitleViewModelTitle,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost .ytCarouselTitleViewModelTitle,
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost .YtCarouselTitleViewModelTitle,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost .YtCarouselTitleViewModelTitle,
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost .yt-core-attributed-string,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost .yt-core-attributed-string,
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost .yt-icon-shape,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost .yt-icon-shape {
  color: #cdd6f4 !important;
}
:root:not([dark]) .video-summary-content-view-model-wiz__paragraph {
  color: #cdd6f4 !important;
}
:root:not([dark]) #next-video-title {
  color: #cdd6f4 !important;
}
:root:not([dark]) #publisher-container .yt-simple-endpoint.style-scope.yt-formatted-string,
:root:not([dark]) #publisher-container .index-message-wrapper.style-scope.ytd-playlist-panel-renderer,
:root:not([dark]) #publisher-container .index-message-wrapper.style-scope.ytd-playlist-panel-renderer::before {
  color: #a6adc8 !important;
}
:root:not([dark]) .metadata-stats.style-scope.ytd-playlist-byline-renderer,
:root:not([dark]) .yt-lockup-metadata-view-model-wiz__metadata {
  color: #a6adc8 !important;
}
:root:not([dark]) .yt-core-attributed-string.yt-core-attributed-string--white-space-pre-wrap {
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytChipShapeInactive {
  background-color: #313244 !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytChipShapeActive {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) .ytListViewModelHost {
  background-color: #181825 !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytListViewModelHost .yt-icon-shape {
  color: #cdd6f4 !important;
}


:root[dark] [src="https://www.gstatic.com/youtube/img/creator/yt_studio_logo_white.svg"] {
  content: url("data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2097.55%2024%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23cba6f7%22%20d%3D%22M17.1%200S6.4%200%203.8.7a4.15%204.15%200%200%200-3%203C0%206.4%200%2012%200%2012a45%2045%200%200%200%20.7%208.2%204.32%204.32%200%200%200%203%203c2.7.8%2013.4.8%2013.4.8s10.7%200%2013.4-.7a4.32%204.32%200%200%200%203-3%2045%2045%200%200%200%20.7-8.2s.1-5.7-.6-8.3a4.32%204.32%200%200%200-3-3C27.9%200%2017.1%200%2017.1%200m-3.4%206.9%208.9%205.1-8.9%205.1z%22/%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20d%3D%22M76.3.9v4.4c0%201.1%200%202%20.1%203.3h-.1A3.36%203.36%200%200%200%2073.4%207c-2.3%200-3.3%202-3.3%206.6V16c0%204.9.8%206.6%203.2%206.6a3.42%203.42%200%200%200%203.2-2.4h.1l.4%202.1h2.6V.9zm6.688.4c-1.126.032-1.687.55-1.687%202.1%200%201.7.599%202.1%201.799%202.1s1.8-.5%201.8-2.1-.6-2.1-1.8-2.1zM45%201.4c-3.6%200-5%201.7-5%204.9s1.1%204.5%203.7%206.8c1.6%201.4%202.8%202.5%202.8%204.8%200%201.5-.4%202.2-1.6%202.2s-1.7-.8-1.6-3.6h-3.1c-.6%204.2.8%206.1%204.5%206.2%203.5%200%205-1.5%205-5.4%200-3.1-1.3-4.4-3.7-6.6-1.9-1.8-2.8-2.5-2.8-4.6%200-1.4.3-2.2%201.6-2.2s1.6%201.1%201.5%203.9l3.1-.2c.5-4.2-.8-6.2-4.4-6.2m7.6%201.4-.4%204.5h-1.4v2.6H52v8.8c0%202.7.4%203.8%202.6%203.8a7.4%207.4%200%200%200%203.1-.6l-.6-2.2a5.2%205.2%200%200%201-1.3.2c-.5%200-.7-.3-.7-1.7V9.9h2.2V7.3H55V2.8zM91%207c-3.3%200-4.7%201.8-4.7%206.7v2.2c0%204.7%201.1%206.7%204.6%206.7s4.7-2%204.7-6.7v-2.2C95.6%208.9%2094.3%207%2091%207m-31.8.3v11.4c0%202.7.9%204%202.9%204a3.46%203.46%200%200%200%203.2-2.1h.1l.3%201.8h2.7V7.3H65v12a1.51%201.51%200%200%201-1.4%201c-.7%200-1-.6-1-1.9V7.3zm22.3%200v15.1h3.2V7.3zm9.4%202c1%200%201.3%201%201.3%203.1v4.7c0%202.2-.4%203.1-1.3%203.1s-1.2-.9-1.2-3.1v-4.7c0-2%20.2-3.1%201.2-3.1M75%209.4a1.56%201.56%200%200%201%201.3.8v8.5c-.2.9-.9%201.4-1.4%201.3-1%200-1.3-1-1.3-4.4v-1.9c0-3.3.3-4.3%201.4-4.3%22/%3E%3C/svg%3E");
}
:root[dark],
:root[dark] html,
:root[dark] html[dark],
:root[dark] html[dark][dark],
:root[dark][dark],
:root[dark][light],
:root[dark] [light],
:root[dark] html[light],
:root[dark] html[light][light] {
  --yt-spec-black-pure-alpha-80: (null);
  --yt-spec-black-pure-alpha-60: (null);
  --yt-spec-black-1-alpha-98: (null);
  --yt-spec-black-1-alpha-95: (null);
  --iron-icon-fill-color: unset;
  --yt-spec-text-primary: #cdd6f4;
  --ytcp-text-primary: #cdd6f4;
  --ytcp-text-primary-inverse: #1e1e2e;
  --ytcp-static-overlay-text-primary-inverse: #1e1e2e;
  --ytcp-wordmark-text: #cdd6f4;
  --ytcp-text-secondary: #a6adc8;
  --ytcp-text-disabled: #bac2de;
  --ytcp-overlay-text-primary: #9399b2;
  --ytcp-general-background-a: #1e1e2e;
  --yt-spec-base-background: #1e1e2e;
  --yt-spec-black-3: #1e1e2e;
  --yt-spec-brand-background-solid: #181825;
  --ytcp-brand-background-solid: #181825;
  --yt-spec-raised-background: #181825;
  --ytcp-general-background-b: #181825;
  --ytcp-analytics-reach-background: #181825;
  --yt-spec-black-2: #181825;
  --ytcp-general-background-c: #11111b;
  --ytcp-menu-background: #313244;
  --ytcp-container-border-color: #313244;
  --ytcp-container-hovered-border-color: #313244;
  --ytcp-line-divider-solid: #313244;
  --ytcp-container-border-color-inverse: #a6adc8;
  --ytcp-line-divider-solid-inverse: #a6adc8;
  --ytcp-call-to-action: #cba6f7;
  --ytcp-call-to-action-inverse: #181825;
  --ytcp-call-to-action-raised-background: #cba6f7;
  --yt-spec-brand-button-background: #cba6f7;
  --ytcp-call-to-action-raised-disabled: #585b70;
  --ytcp-call-to-action-raised-disabled-background: #9399b2;
  --ytcp-call-to-action-raised-background-inverse: #1e1e2e;
  --ytcp-call-to-action-raised-disabled-inverse: #585b70;
  --ytcp-call-to-action-raised-disabled-background-inverse: #9399b2;
  --yt-spec-brand-background-primary: #313244;
  --yt-compact-link-icon-color: #9399b2;
  --ytcp-icon-active: #cba6f7;
  --ytcp-icon-inactive: #9399b2;
  --ytcp-icon-disabled: #6c7086;
  --ytcp-icon-active-inverse: #7f849c;
  --ytcp-icon-disabled-inverse: #bac2de;
  --ytcp-error-red: #f38ba8;
  --ytcp-badge-red: #f38ba8;
  --ytcp-error-red-inverse: #f38ba8;
  --ytcp-themed-red-inverse: #f38ba8;
  --ytcp-themed-red: #cba6f7;
  --ytcp-themed-blue: #cba6f7;
  --ytcp-badge-blue: rgba(203, 166, 247, 0.3);
  --ytcp-badge-blue-solid: #89b4fa;
  --ytcp-themed-blue-inverse: #89b4fa;
  --ytcp-themed-green: #a6e3a1;
  --ytmus-genre-primary-melon: #a6e3a1;
  --ytcp-themed-green-inverse: #a6e3a1;
  --ytcp-analytics-pine: #a6e3a1;
  --ytcp-analytics-pine-inverse: #a6e3a1;
  --ytcp-analytics-parrot: #a6e3a1;
  --ytcp-themed-yellow: #fab387;
  --ytmus-genre-primary-gold: #fab387;
  --ytcp-yellow-inverse: #fab387;
  --ytcp-badge-yellow: #fab387;
  --ytcp-analytics-yellow: #fab387;
  --ytcp-analytics-apricot: #fab387;
  --ytcp-suggested-action: #94e2d5;
  --ytcp-analytics-overview: #94e2d5;
  --ytcp-analytics-revenue: #94e2d5;
  --ytcp-analytics-default-secondary: #94e2d5;
  --ytcp-analytics-royal-blue: #b4befe;
  --ytcp-analytics-reach: #b4befe;
  --ytcp-analytics-audience: #b4befe;
  --ytcp-analytics-engagement: #f5c2e7;
  --ytcp-analytics-revenue-secondary: #f5c2e7;
  --ytcp-analytics-bubblegum: #f2cdcd;
  --ytmus-genre-primary-ruby: #f2cdcd;
  --ytmus-genre-primary-salmon: #cba6f7;
  --ytmus-genre-primary-orange: #eba0ac;
  --ytmus-genre-primary-sky: #89dceb;
  --ytmus-genre-primary-sky-inverse: #89dceb;
  --yt-spec-badge-chip-background: #45475a;
  --ytcp-focus-inverse: #cba6f7;
  --ytcp-focus: #cba6f7;
  --ytcp-selected-item: #cba6f7;
  --ytcp-hover-item: #9399b2;
  --ytcp-chip-active-focus: #cba6f7;
  --ytcp-playhead: #9399b2;
  --ytcp-playhead-inverse: #9399b2;
}
:root[dark] ytcp-button.destructive.ytls-error-dialog {
  color: #1e1e2e;
}
:root[dark] yt-formatted-string.ytls-error-dialog,
:root[dark] tp-yt-iron-icon.ytls-error-dialog {
  color: #cdd6f4;
}
:root [src="https://www.gstatic.com/youtube/img/creator/yt_studio_logo_white.svg"] {
  content: url("data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2097.55%2024%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23cba6f7%22%20d%3D%22M17.1%200S6.4%200%203.8.7a4.15%204.15%200%200%200-3%203C0%206.4%200%2012%200%2012a45%2045%200%200%200%20.7%208.2%204.32%204.32%200%200%200%203%203c2.7.8%2013.4.8%2013.4.8s10.7%200%2013.4-.7a4.32%204.32%200%200%200%203-3%2045%2045%200%200%200%20.7-8.2s.1-5.7-.6-8.3a4.32%204.32%200%200%200-3-3C27.9%200%2017.1%200%2017.1%200m-3.4%206.9%208.9%205.1-8.9%205.1z%22/%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20d%3D%22M76.3.9v4.4c0%201.1%200%202%20.1%203.3h-.1A3.36%203.36%200%200%200%2073.4%207c-2.3%200-3.3%202-3.3%206.6V16c0%204.9.8%206.6%203.2%206.6a3.42%203.42%200%200%200%203.2-2.4h.1l.4%202.1h2.6V.9zm6.688.4c-1.126.032-1.687.55-1.687%202.1%200%201.7.599%202.1%201.799%202.1s1.8-.5%201.8-2.1-.6-2.1-1.8-2.1zM45%201.4c-3.6%200-5%201.7-5%204.9s1.1%204.5%203.7%206.8c1.6%201.4%202.8%202.5%202.8%204.8%200%201.5-.4%202.2-1.6%202.2s-1.7-.8-1.6-3.6h-3.1c-.6%204.2.8%206.1%204.5%206.2%203.5%200%205-1.5%205-5.4%200-3.1-1.3-4.4-3.7-6.6-1.9-1.8-2.8-2.5-2.8-4.6%200-1.4.3-2.2%201.6-2.2s1.6%201.1%201.5%203.9l3.1-.2c.5-4.2-.8-6.2-4.4-6.2m7.6%201.4-.4%204.5h-1.4v2.6H52v8.8c0%202.7.4%203.8%202.6%203.8a7.4%207.4%200%200%200%203.1-.6l-.6-2.2a5.2%205.2%200%200%201-1.3.2c-.5%200-.7-.3-.7-1.7V9.9h2.2V7.3H55V2.8zM91%207c-3.3%200-4.7%201.8-4.7%206.7v2.2c0%204.7%201.1%206.7%204.6%206.7s4.7-2%204.7-6.7v-2.2C95.6%208.9%2094.3%207%2091%207m-31.8.3v11.4c0%202.7.9%204%202.9%204a3.46%203.46%200%200%200%203.2-2.1h.1l.3%201.8h2.7V7.3H65v12a1.51%201.51%200%200%201-1.4%201c-.7%200-1-.6-1-1.9V7.3zm22.3%200v15.1h3.2V7.3zm9.4%202c1%200%201.3%201%201.3%203.1v4.7c0%202.2-.4%203.1-1.3%203.1s-1.2-.9-1.2-3.1v-4.7c0-2%20.2-3.1%201.2-3.1M75%209.4a1.56%201.56%200%200%201%201.3.8v8.5c-.2.9-.9%201.4-1.4%201.3-1%200-1.3-1-1.3-4.4v-1.9c0-3.3.3-4.3%201.4-4.3%22/%3E%3C/svg%3E");
}
:root,
:root html,
:root html[dark],
:root html[dark][dark],
:root[dark],
:root[light],
:root [light],
:root html[light],
:root html[light][light] {
  --yt-spec-black-pure-alpha-80: (null);
  --yt-spec-black-pure-alpha-60: (null);
  --yt-spec-black-1-alpha-98: (null);
  --yt-spec-black-1-alpha-95: (null);
  --iron-icon-fill-color: unset;
  --yt-spec-text-primary: #cdd6f4;
  --ytcp-text-primary: #cdd6f4;
  --ytcp-text-primary-inverse: #1e1e2e;
  --ytcp-static-overlay-text-primary-inverse: #1e1e2e;
  --ytcp-wordmark-text: #cdd6f4;
  --ytcp-text-secondary: #a6adc8;
  --ytcp-text-disabled: #bac2de;
  --ytcp-overlay-text-primary: #9399b2;
  --ytcp-general-background-a: #1e1e2e;
  --yt-spec-base-background: #1e1e2e;
  --yt-spec-black-3: #1e1e2e;
  --yt-spec-brand-background-solid: #181825;
  --ytcp-brand-background-solid: #181825;
  --yt-spec-raised-background: #181825;
  --ytcp-general-background-b: #181825;
  --ytcp-analytics-reach-background: #181825;
  --yt-spec-black-2: #181825;
  --ytcp-general-background-c: #11111b;
  --ytcp-menu-background: #313244;
  --ytcp-container-border-color: #313244;
  --ytcp-container-hovered-border-color: #313244;
  --ytcp-line-divider-solid: #313244;
  --ytcp-container-border-color-inverse: #a6adc8;
  --ytcp-line-divider-solid-inverse: #a6adc8;
  --ytcp-call-to-action: #cba6f7;
  --ytcp-call-to-action-inverse: #181825;
  --ytcp-call-to-action-raised-background: #cba6f7;
  --yt-spec-brand-button-background: #cba6f7;
  --ytcp-call-to-action-raised-disabled: #585b70;
  --ytcp-call-to-action-raised-disabled-background: #9399b2;
  --ytcp-call-to-action-raised-background-inverse: #1e1e2e;
  --ytcp-call-to-action-raised-disabled-inverse: #585b70;
  --ytcp-call-to-action-raised-disabled-background-inverse: #9399b2;
  --yt-spec-brand-background-primary: #313244;
  --yt-compact-link-icon-color: #9399b2;
  --ytcp-icon-active: #cba6f7;
  --ytcp-icon-inactive: #9399b2;
  --ytcp-icon-disabled: #6c7086;
  --ytcp-icon-active-inverse: #7f849c;
  --ytcp-icon-disabled-inverse: #bac2de;
  --ytcp-error-red: #f38ba8;
  --ytcp-badge-red: #f38ba8;
  --ytcp-error-red-inverse: #f38ba8;
  --ytcp-themed-red-inverse: #f38ba8;
  --ytcp-themed-red: #cba6f7;
  --ytcp-themed-blue: #cba6f7;
  --ytcp-badge-blue: rgba(203, 166, 247, 0.3);
  --ytcp-badge-blue-solid: #89b4fa;
  --ytcp-themed-blue-inverse: #89b4fa;
  --ytcp-themed-green: #a6e3a1;
  --ytmus-genre-primary-melon: #a6e3a1;
  --ytcp-themed-green-inverse: #a6e3a1;
  --ytcp-analytics-pine: #a6e3a1;
  --ytcp-analytics-pine-inverse: #a6e3a1;
  --ytcp-analytics-parrot: #a6e3a1;
  --ytcp-themed-yellow: #fab387;
  --ytmus-genre-primary-gold: #fab387;
  --ytcp-yellow-inverse: #fab387;
  --ytcp-badge-yellow: #fab387;
  --ytcp-analytics-yellow: #fab387;
  --ytcp-analytics-apricot: #fab387;
  --ytcp-suggested-action: #94e2d5;
  --ytcp-analytics-overview: #94e2d5;
  --ytcp-analytics-revenue: #94e2d5;
  --ytcp-analytics-default-secondary: #94e2d5;
  --ytcp-analytics-royal-blue: #b4befe;
  --ytcp-analytics-reach: #b4befe;
  --ytcp-analytics-audience: #b4befe;
  --ytcp-analytics-engagement: #f5c2e7;
  --ytcp-analytics-revenue-secondary: #f5c2e7;
  --ytcp-analytics-bubblegum: #f2cdcd;
  --ytmus-genre-primary-ruby: #f2cdcd;
  --ytmus-genre-primary-salmon: #cba6f7;
  --ytmus-genre-primary-orange: #eba0ac;
  --ytmus-genre-primary-sky: #89dceb;
  --ytmus-genre-primary-sky-inverse: #89dceb;
  --yt-spec-badge-chip-background: #45475a;
  --ytcp-focus-inverse: #cba6f7;
  --ytcp-focus: #cba6f7;
  --ytcp-selected-item: #cba6f7;
  --ytcp-hover-item: #9399b2;
  --ytcp-chip-active-focus: #cba6f7;
  --ytcp-playhead: #9399b2;
  --ytcp-playhead-inverse: #9399b2;
}
:root ytcp-button.destructive.ytls-error-dialog {
  color: #1e1e2e;
}
:root yt-formatted-string.ytls-error-dialog,
:root tp-yt-iron-icon.ytls-error-dialog {
  color: #cdd6f4;
}


html[darker-dark-theme] {
  background-color: #1e1e2e !important;
  color: #cdd6f4 !important;
  /* Ambient mode */
  /* Comment box */
  /* Bottom bar */
  /* Chips */
  /* Buttons */
}
html[darker-dark-theme] #cinematics {
  mix-blend-mode: lighten;
}
html[darker-dark-theme] .mobile-topbar-header[data-mode="watch"],
html[darker-dark-theme] ytm-mobile-topbar-renderer:not([ambient-topbar]) {
  background: #1e1e2e;
}
html[darker-dark-theme] .mobile-topbar-header[data-mode="watch"] .mobile-topbar-logo,
html[darker-dark-theme] .mobile-topbar-header[data-mode="watch"] .mobile-topbar-title,
html[darker-dark-theme] .mobile-topbar-header[data-mode="watch"] .mobile-topbar-header-content {
  color: #cdd6f4;
}
html[darker-dark-theme] .yt-spec-bottom-sheet-layout__bottom-sheet-renderer-container,
html[darker-dark-theme] .modern-styling {
  background: #313244;
}
html[darker-dark-theme] .yt-spec-bottom-sheet-layout__bottom-sheet-layout-header-wrapper {
  border-bottom-color: #313244;
}
html[darker-dark-theme] .yt-spec-bottom-sheet-layout__bottom-sheet-content {
  color: #cdd6f4;
}
html[darker-dark-theme] .engagement-panel-container {
  background: #181825;
}
html[darker-dark-theme] ytm-pivot-bar-renderer {
  background: #181825;
  color: #cdd6f4;
  border-top-color: #313244;
}
html[darker-dark-theme] .chip-bar {
  background-color: #1e1e2e;
}
html[darker-dark-theme] [chip-style*="STYLE_"] .chip-container {
  color: #cdd6f4;
  background-color: #313244;
}
html[darker-dark-theme] [chip-style*="STYLE_"].selected .chip-container {
  color: #11111b;
  background-color: #cba6f7;
}
html[darker-dark-theme] .yt-spec-touch-feedback-shape--touch-response .yt-spec-touch-feedback-shape__fill {
  background-color: #cdd6f4;
}
html[darker-dark-theme] .yt-spec-touch-feedback-shape--touch-response .yt-spec-touch-feedback-shape__stroke {
  border-color: #45475a;
}
html[darker-dark-theme] .yt-spec-touch-feedback-shape--overlay-touch-response-inverse .yt-spec-touch-feedback-shape__fill {
  background-color: #cba6f7;
}
html[darker-dark-theme] .yt-spec-touch-feedback-shape--overlay-touch-response .yt-spec-touch-feedback-shape__fill {
  background-color: #cdd6f4;
}
html {
  background-color: #1e1e2e !important;
  color: #cdd6f4 !important;
  /* Ambient mode */
  /* Comment box */
  /* Bottom bar */
  /* Chips */
  /* Buttons */
}
html #cinematics {
  mix-blend-mode: lighten;
}
html .mobile-topbar-header[data-mode="watch"],
html ytm-mobile-topbar-renderer:not([ambient-topbar]) {
  background: #1e1e2e;
}
html .mobile-topbar-header[data-mode="watch"] .mobile-topbar-logo,
html .mobile-topbar-header[data-mode="watch"] .mobile-topbar-title,
html .mobile-topbar-header[data-mode="watch"] .mobile-topbar-header-content {
  color: #cdd6f4;
}
html .yt-spec-bottom-sheet-layout__bottom-sheet-renderer-container,
html .modern-styling {
  background: #313244;
}
html .yt-spec-bottom-sheet-layout__bottom-sheet-layout-header-wrapper {
  border-bottom-color: #313244;
}
html .yt-spec-bottom-sheet-layout__bottom-sheet-content {
  color: #cdd6f4;
}
html .engagement-panel-container {
  background: #181825;
}
html ytm-pivot-bar-renderer {
  background: #181825;
  color: #cdd6f4;
  border-top-color: #313244;
}
html .chip-bar {
  background-color: #1e1e2e;
}
html [chip-style*="STYLE_"] .chip-container {
  color: #cdd6f4;
  background-color: #313244;
}
html [chip-style*="STYLE_"].selected .chip-container {
  color: #11111b;
  background-color: #cba6f7;
}
html .yt-spec-touch-feedback-shape--touch-response .yt-spec-touch-feedback-shape__fill {
  background-color: #cdd6f4;
}
html .yt-spec-touch-feedback-shape--touch-response .yt-spec-touch-feedback-shape__stroke {
  border-color: #45475a;
}
html .yt-spec-touch-feedback-shape--overlay-touch-response-inverse .yt-spec-touch-feedback-shape__fill {
  background-color: #cba6f7;
}
html .yt-spec-touch-feedback-shape--overlay-touch-response .yt-spec-touch-feedback-shape__fill {
  background-color: #cdd6f4;
}

/* ==UserStyle==
@name YouTube Catppuccin
@namespace github.com/catppuccin/userstyles/styles/youtube
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/youtube
@version 2026.02.18.1
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/youtube/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Ayoutube
@description Soothing pastel theme for YouTube
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]

@var checkbox logo "Enable YouTube logo" 1
@var checkbox oled "Enable black bars" 0
@var checkbox sponsorBlock "Enable SponsorBlock segments" 1
@var checkbox hideColorSampleTint "Hide color-sampled tint" 1
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

:root[dark] {
  color-scheme: dark !important;
  color: #cdd6f4 !important;
  background: #1e1e2e !important;
  /* Misc */
  /* Selected chapter */
  /* Skeleton */
  /* Ambient mode */
  /* Icons */
  /* verification badge */
  /* Buttons */
  /* Search box */
  /* "Suggestion removed" */
  /* Video description */
  /* Thumbnails */
  /* Panels, popups, tooltips */
  /* Video player */
  /* Video highlight */
  /* Shorts titles and views on homepage */
  /* Buy super thanks bar */
  /* Channel pages */
  /* channel details */
  /* Profiles */
  /* Horizontal list arrows */
  /* Live chat replay */
  /* AI-generated video summary */
  /* Playlist collapsed sidebar */
  /* Playlist metadata */
  /* Playlist titles in search results */
  /* Category tag pills */
  /* Vertical ellipsis menu on main page */
}
:root[dark] ::selection {
  background-color: rgba(203, 166, 247, 0.3) !important;
}
:root[dark] input::placeholder,
:root[dark] textarea::placeholder {
  color: #a6adc8 !important;
}
:root[dark],
:root[dark] [dark],
:root[dark] [system-icons],
:root[dark] [darker-dark-theme],
:root[dark][dark],
:root[dark][system-icons],
:root[dark][darker-dark-theme] {
  --efyt-control-bar-background-color: #181825 !important;
  --dimmer-text: #cdd6f4 !important;
  --yt-spec-white-1: #cdd6f4 !important;
  --yt-spec-white-2: #a6adc8 !important;
  --yt-spec-white-3: #bac2de !important;
  --yt-spec-white-4: #a9b3d6 !important;
  --yt-spec-black-1: #7f849c !important;
  --yt-spec-black-2: #6c7086 !important;
  --yt-spec-black-3: #585b70 !important;
  --yt-spec-black-4: #45475a !important;
  --yt-spec-black-pure: #313244 !important;
  --yt-spec-grey-1: #cdd6f4 !important;
  --yt-spec-grey-2: #a6adc8 !important;
  --yt-spec-grey-3: #bac2de !important;
  --yt-spec-grey-4: #9399b2 !important;
  --yt-spec-grey-5: #7f849c !important;
  --yt-brand-youtube-red: #cba6f7 !important;
  --yt-brand-medium-red: #cba6f7 !important;
  --yt-brand-light-red: #cba6f7 !important;
  --yt-spec-red-30: #fab387 !important;
  --yt-spec-red-70: #f38ba8 !important;
  --yt-spec-red-indicator: #cba6f7 !important;
  --yt-spec-pale-blue: #89dceb !important;
  --yt-spec-light-blue: #89dceb !important;
  --yt-spec-dark-blue: #74c7ec !important;
  --yt-spec-navy-blue: #94e2d5 !important;
  --yt-spec-light-green: #a6e3a1 !important;
  --yt-spec-dark-green: #a6e3a1 !important;
  --yt-spec-yellow: #fab387 !important;
  --yt-spec-black-pure-alpha-5: #a6adc8 !important;
  --yt-spec-black-pure-alpha-10: #9399b2 !important;
  --yt-spec-black-pure-alpha-15: rgba(17, 17, 27, 0.85) !important;
  --yt-spec-black-pure-alpha-30: rgba(17, 17, 27, 0.7) !important;
  --yt-spec-black-pure-alpha-60: rgba(17, 17, 27, 0.4) !important;
  --yt-spec-black-pure-alpha-80: rgba(17, 17, 27, 0.2) !important;
  --yt-spec-black-1-alpha-98: rgba(17, 17, 27, 0.02) !important;
  --yt-spec-black-1-alpha-95: rgba(17, 17, 27, 0.05) !important;
  --yt-spec-white-1-alpha-10: rgba(205, 214, 244, 0.9) !important;
  --yt-spec-white-1-alpha-20: rgba(205, 214, 244, 0.8) !important;
  --yt-spec-white-1-alpha-25: rgba(205, 214, 244, 0.75) !important;
  --yt-spec-white-1-alpha-30: rgba(205, 214, 244, 0.7) !important;
  --yt-spec-white-1-alpha-70: rgba(205, 214, 244, 0.3) !important;
  --yt-spec-white-1-alpha-95: rgba(205, 214, 244, 0.05) !important;
  --yt-spec-white-1-alpha-98: rgba(205, 214, 244, 0.02) !important;
  --yt-brand-medium-red-alpha-90: rgba(203, 166, 247, 0.1) !important;
  --yt-brand-medium-red-alpha-30: rgba(203, 166, 247, 0.7) !important;
  --yt-brand-light-red-alpha-30: rgba(203, 166, 247, 0.7) !important;
  --yt-spec-light-blue-alpha-30: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-dark-blue-alpha-30: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-base-background: #1e1e2e !important;
  --yt-spec-raised-background: #1e1e2e !important;
  --yt-spec-menu-background: #181825 !important;
  --yt-spec-inverted-background: #cdd6f4 !important;
  --yt-spec-additive-background: #313244 !important;
  --yt-spec-outline: #313244 !important;
  --yt-spec-shadow: rgba(17, 17, 27, 0.75) !important;
  --yt-spec-text-primary: #cdd6f4 !important;
  --yt-spec-text-secondary: #a6adc8 !important;
  --yt-spec-text-disabled: #bac2de !important;
  --yt-spec-text-primary-inverse: #11111b !important;
  --yt-spec-call-to-action: #cba6f7 !important;
  --yt-spec-call-to-action-inverse: #cba6f7 !important;
  --yt-spec-suggested-action: rgba(203, 166, 247, 0.2) !important;
  --yt-spec-suggested-action-inverse: #cdd6f4 !important;
  --yt-spec-icon-active-other: #cdd6f4 !important;
  --yt-spec-button-chip-background-hover: #45475a !important;
  --yt-spec-touch-response: #313244 !important;
  --yt-spec-touch-response-inverse: #cba6f7 !important;
  --yt-spec-brand-icon-active: #cba6f7 !important;
  --yt-spec-brand-button-background: #cba6f7 !important;
  --yt-spec-brand-link-text: #74c7ec !important;
  --yt-spec-wordmark-text: #cdd6f4 !important;
  --yt-spec-error-indicator: #f38ba8 !important;
  --yt-spec-themed-blue: #cba6f7 !important;
  --yt-spec-themed-green: #a6e3a1 !important;
  --yt-spec-ad-indicator: #94e2d5 !important;
  --yt-spec-themed-overlay-background: rgba(17, 17, 27, 0.8) !important;
  --yt-spec-commerce-badge-background: #a6e3a1 !important;
  --yt-spec-static-brand-red: #cba6f7 !important;
  --yt-spec-static-brand-white: #cdd6f4 !important;
  --yt-spec-static-brand-black: #1e1e2e !important;
  --yt-spec-static-clear-color: #11111b !important;
  --yt-spec-static-clear-black: #11111b !important;
  --yt-spec-static-ad-yellow: #fab387 !important;
  --yt-spec-static-grey: #a6adc8 !important;
  --yt-spec-static-overlay-background-solid: #11111b !important;
  --yt-spec-static-overlay-background-heavy: #11111b !important;
  --yt-spec-static-overlay-background-medium: rgba(17, 17, 27, 0.5) !important;
  --yt-spec-static-overlay-background-light: rgba(17, 17, 27, 0.9) !important;
  --yt-spec-static-overlay-text-primary: #cdd6f4 !important;
  --yt-spec-static-overlay-text-secondary: rgba(166, 173, 200, 0.3) !important;
  --yt-spec-static-overlay-text-disabled: rgba(166, 173, 200, 0.7) !important;
  --yt-spec-static-overlay-call-to-action: #cba6f7 !important;
  --yt-spec-static-overlay-icon-active-other: #11111b !important;
  --yt-spec-static-overlay-icon-inactive: #45475a !important;
  --yt-spec-static-overlay-icon-disabled: #585b70 !important;
  --yt-spec-static-overlay-button-primary: #cba6f7 !important;
  --yt-spec-static-overlay-touch-response: #7f849c !important;
  --yt-spec-static-overlay-touch-response-inverse: #45475a !important;
  --yt-spec-static-overlay-background-brand: #cba6f7 !important;
  --yt-spec-assistive-feed-themed-gradient-1: #a6adc8 !important;
  --yt-spec-assistive-feed-themed-gradient-2: #b4befe !important;
  --yt-spec-assistive-feed-themed-gradient-3: #f38ba8 !important;
  --yt-spec-brand-background-solid: #1e1e2e !important;
  --yt-spec-brand-background-primary: #1e1e2e !important;
  --yt-spec-brand-background-secondary: #181825 !important;
  --yt-spec-general-background-a: #1e1e2e !important;
  --yt-spec-general-background-b: #1e1e2e !important;
  --yt-spec-general-background-c: #11111b !important;
  --yt-spec-error-background: #1e1e2e !important;
  --yt-spec-10-percent-layer: #45475a !important;
  --yt-spec-snackbar-background: #181825 !important;
  --yt-spec-snackbar-background-updated: #181825 !important;
  --yt-spec-badge-chip-background: #313244 !important;
  --yt-spec-verified-badge-background: #6c7086 !important;
  --yt-spec-call-to-action-fadeoutd: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-call-to-action-hover: #cba6f7 !important;
  --yt-spec-brand-button-background-hover: #cba6f7 !important;
  --yt-spec-brand-link-text-fadeoutd: rgba(203, 166, 247, 0.7) !important;
  --yt-spec-filled-button-focus-outline: #313244 !important;
  --yt-spec-static-overlay-button-hover: #45475a !important;
  --yt-spec-mono-filled-hover: #45475a !important;
  --yt-spec-commerce-filled-hover: #cba6f7 !important;
  --yt-spec-mono-tonal-hover: #45475a !important;
  --yt-spec-commerce-tonal-hover: #585b70 !important;
  --yt-spec-static-overlay-filled-hover: #7f849c !important;
  --yt-spec-static-overlay-tonal-hover: #45475a !important;
  --yt-spec-paper-tab-ink: rgba(205, 214, 244, 0.7) !important;
  --yt-spec-filled-button-text: #cdd6f4 !important;
  --yt-spec-selected-nav-text: #cdd6f4 !important;
  --iron-icon-fill-color: #cdd6f4 !important;
  /* Search bar */
  --ytd-searchbox-border-color: #313244 !important;
  --ytd-searchbox-legacy-border-color: #313244 !important;
  --ytd-searchbox-legacy-border-shadow-color: #11111b !important;
  --ytd-searchbox-legacy-button-color: #181825 !important;
  --ytd-searchbox-legacy-button-border-color: #313244 !important;
  --ytd-searchbox-legacy-button-focus-color: #cba6f7 !important;
  --ytd-searchbox-legacy-button-hover-color: #181825 !important;
  --ytd-searchbox-legacy-button-hover-border-color: #313244 !important;
  --ytd-searchbox-legacy-button-icon-color: #cba6f7 !important;
  --ytd-searchbox-background: #1e1e2e !important;
  --ytd-searchbox-text-color: #cdd6f4 !important;
  /* System icons */
  --yt-spec-icon-inactive: #cdd6f4 !important;
  --yt-spec-icon-disabled: #7f849c !important;
  --yt-spec-brand-icon-inactive: #9399b2 !important;
  /* Yt video Page */
  --yt-live-chat-background-color: #1e1e2e !important;
  --yt-live-chat-action-panel-background-color: #1e1e2e !important;
  --yt-live-chat-secondary-background-color: #45475a !important;
  --yt-live-chat-toast-background-color: #585b70 !important;
  --yt-live-chat-mode-change-background-color: #1e1e2e !important;
  --yt-live-chat-secondary-text-color: #a6adc8 !important;
  --yt-live-chat-tertiary-text-color: rgba(205, 214, 244, 0.46) !important;
  --yt-live-chat-text-input-field-inactive-underline-color: #a6adc8 !important;
  --yt-live-chat-text-input-field-placeholder-color: #a6adc8 !important;
  --yt-live-chat-enabled-send-button-color: #cdd6f4 !important;
  --yt-live-chat-disabled-icon-button-color: #bac2de !important;
  --yt-live-chat-picker-button-hover-color: #cba6f7 !important;
  --yt-live-chat-mention-background-color: #cba6f7 !important;
  --yt-live-chat-mention-text-color: #cdd6f4 !important;
  --yt-live-chat-deleted-message-color: #a6adc8 !important;
  --yt-live-chat-deleted-message-bar-color: #bac2de !important;
  --yt-live-chat-reconnect-message-color: #cdd6f4 !important;
  --yt-live-chat-disabled-button-background-color: #6c7086 !important;
  --yt-live-chat-sub-panel-background-color: #1e1e2e !important;
  --yt-live-chat-sub-panel-background-color-transparent: #181825 !important;
  --yt-live-chat-moderator-color: #b4befe !important;
  --yt-live-chat-owner-color: #fab387 !important;
  --yt-live-chat-message-highlight-background-color: #1e1e2e !important;
  --yt-live-chat-sponsor-color: #a6e3a1 !important;
  --yt-live-chat-overlay-color: rgba(24, 24, 37, 0.5) !important;
  --yt-live-chat-dialog-background-color: #1e1e2e !important;
  --yt-emoji-picker-variant-selector-bg-color: #1e1e2e !important;
  --yt-live-chat-moderation-mode-hover-background-color: rgba(24, 24, 37, 0.7) !important;
  --yt-grey: #a6adc8 !important;
  --yt-live-chat-text-input-field-suggestion-background-color: #a6adc8 !important;
  --yt-live-chat-text-input-field-suggestion-background-color-hover: #bac2de !important;
  --yt-emoji-picker-search-background-color: #313244 !important;
  --yt-emoji-picker-search-color: #cdd6f4 !important;
  --yt-emoji-picker-search-placeholder-color: #cba6f7 !important;
  --yt-live-chat-slider-active-color: #cba6f7 !important;
  --yt-live-chat-slider-container-color: #313244 !important;
  --yt-live-chat-slider-markers-color: #cdd6f4 !important;
  --yt-live-chat-banner-gradient-scrim: linear-gradient(#181825, transparent) !important;
  --yt-live-chat-action-panel-gradient-scrim: linear-gradient(to top, #181825, transparent) !important;
  --yt-live-chat-automod-button-background-color-hover: rgba(17, 17, 27, 0.5) !important;
  --yt-live-chat-automod-button-explanation-color: rgba(203, 166, 247, 0.3) !important;
  --yt-live-chat-shimmer-background-color: rgba(17, 17, 27, 0.6) !important;
  --yt-live-chat-shimmer-linear-gradient: linear-gradient(0deg, rgba(205, 214, 244, 0.9) 40%, rgba(30, 30, 46, 0.7) 50%, rgba(205, 214, 244, 0.9) 60%) !important;
  --yt-live-chat-vem-background-color: #181825 !important;
  --yt-live-chat-product-picker-icon-color: rgba(205, 214, 244, 0.5) !important;
  --yt-live-chat-product-picker-hover-color: #6c7086 !important;
  --yt-live-chat-product-picker-disabled-icon-color: rgba(205, 214, 244, 0.7) !important;
  --yt-live-chat-action-panel-background-color-transparent: (null) !important;
  --paper-tooltip-background: #6c7086 !important;
  --paper-tooltip-text-color: #cdd6f4 !important;
  /* Links */
  --yt-endpoint-color: #cba6f7 !important;
  --yt-endpoint-visited-color: #cba6f7 !important;
  --yt-endpoint-hover-color: #cba6f7 !important;
  --sb-dark-red-outline: #cba6f7 !important;
  --sb-main-bg-color: #1e1e2e !important;
  --sb-main-fg-color: #cdd6f4 !important;
  --sb-grey-bg-color: #1e1e2e !important;
  --sb-grey-fg-color: #a6adc8 !important;
  --sb-red-bg-color: #cba6f7 !important;
  --sb-category-sponsor: #a6e3a1 !important;
  --sb-category-selfpromo: #f9e2af !important;
  --sb-category-exclusive_access: #94e2d5 !important;
  --sb-category-interaction: #cba6f7 !important;
  --sb-category-poi_highlight: #f5c2e7 !important;
  --sb-category-intro: #89dceb !important;
  --sb-category-outro: #89b4fa !important;
  --sb-category-preview: #74c7ec !important;
  --sb-category-filler: #b4befe !important;
  --sb-category-music_offtopic: #fab387 !important;
}
:root[dark]:not(.style-scope) {
  --primary-text-color: #cdd6f4 !important;
  --primary-background-color: #1e1e2e !important;
  --secondary-text-color: #a6adc8 !important;
  --disabled-text-color: #bac2de !important;
  --divider-color: #6c7086 !important;
  --error-color: #f38ba8 !important;
  --primary-color: #cba6f7 !important;
  --light-primary-color: #cba6f7 !important;
  --dark-primary-color: #89b4fa !important;
  --accent-color: #cba6f7 !important;
  --light-accent-color: #cba6f7 !important;
  --dark-accent-color: #cba6f7 !important;
  --light-theme-background-color: #1e1e2e !important;
  --light-theme-base-color: #cdd6f4 !important;
  --light-theme-text-color: #cdd6f4 !important;
  --light-theme-secondary-color: #a6adc8 !important;
  --light-theme-disabled-color: #bac2de !important;
  --light-theme-divider-color: #6c7086 !important;
  --dark-theme-background-color: #1e1e2e !important;
  --dark-theme-base-color: #cdd6f4 !important;
  --dark-theme-text-color: #cdd6f4 !important;
  --dark-theme-secondary-color: #a6adc8 !important;
  --dark-theme-disabled-color: #bac2de !important;
  --dark-theme-divider-color: #6c7086 !important;
}
:root[dark] .yt-spec-touch-feedback-shape__hover-effect {
  background-color: #313244 !important;
}
:root[dark] ytd-watch-metadata {
  --yt-saturated-raised-background: #45475a !important;
  --yt-saturated-text-primary: #cdd6f4 !important;
  --yt-saturated-text-secondary: #bac2de !important;
}
:root[dark] .yt-core-attributed-string--link-inherit-color {
  color: #cdd6f4 !important;
}
:root[dark] .yt-core-attributed-string--highlight-text-decorator {
  background-color: #585b70 !important;
}
:root[dark] #channel-name.ytd-video-meta-block {
  --yt-endpoint-color: #cba6f7 !important;
  --yt-endpoint-visited-color: #cba6f7 !important;
  color: #cba6f7 !important;
}
:root[dark] .yt-page-navigation-progress {
  background: #cba6f7 !important;
}
:root[dark] ytd-macro-markers-list-item-renderer {
  --ytd-macro-markers-list-item-background-color: #313244 !important;
  --ytd-macro-markers-list-item-title-color: #cdd6f4 !important;
  --ytd-macro-markers-list-item-secondary-color: #bac2de !important;
  --ytd-macro-markers-list-item-timestamp-background-color: #45475a !important;
}
:root[dark] ytd-playlist-panel-video-renderer {
  --yt-lightsource-section2-color: #45475a !important;
  --yt-lightsource-section4-color: #585b70 !important;
  --yt-lightsource-primary-title-color: #cdd6f4 !important;
  --yt-lightsource-secondary-title-color: #cdd6f4 !important;
  --yt-active-playlist-panel-background-color: #313244 !important;
}
:root[dark] ytd-playlist-panel-renderer[collapsible][collapsed][use-color-palette] .header.ytd-playlist-panel-renderer {
  --iron-icon-fill-color: #cdd6f4 !important;
  background-color: #1e1e2e !important;
}
:root[dark] #container.ytd-masthead {
  --iron-icon-fill-color: #cdd6f4 !important;
}
:root[dark] #background.ytd-masthead,
:root[dark] #frosted-glass {
  --yt-frosted-glass-desktop: #1e1e2e !important;
  --yt-spec-frosted-glass-desktop: #1e1e2e !important;
}
:root[dark] ytd-feed-filter-chip-bar-renderer[expand-instead-of-scroll] #chips-wrapper.ytd-feed-filter-chip-bar-renderer {
  --iron-icon-fill-color: #cdd6f4 !important;
  background-color: #1e1e2e !important;
}
:root[dark] #ytd-player #container {
  background: #11111b !important;
}
:root[dark] .ytp-progress-list {
  background: rgba(49, 50, 68, 0.8) !important;
}
:root[dark] .ytp-load-progress {
  background: #6c7086 !important;
}
:root[dark] ytd-expandable-metadata-renderer {
  --yt-lightsource-section1-color: #1e1e2e !important;
  --yt-lightsource-section2-color: #313244 !important;
  --yt-lightsource-section3-color: #45475a !important;
  --yt-lightsource-section4-color: #585b70 !important;
  --yt-lightsource-primary-title-color: #cdd6f4 !important;
  --yt-lightsource-secondary-title-color: #a6adc8 !important;
}
:root[dark] yt-live-chat-renderer {
  --yt-button-default-text-color: #cdd6f4 !important;
  --yt-button-default-background-color: #1e1e2e !important;
  --yt-button-dark-text-color: #1e1e2e !important;
  --yt-button-dark-background-color: #cba6f7 !important;
  --yt-button-payment-background-color: #cba6f7 !important;
}
:root[dark] yt-icon-button.yt-live-chat-item-list-renderer {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] yt-icon-button.yt-live-chat-item-list-renderer:hover {
  background-color: #bd8ff5 !important;
}
:root[dark] ytd-author-comment-badge-renderer:not(
    [style*="--ytd-author-comment-badge-icon-background-color: transparent;"]
  ) {
  --yt-basic-background-color: #313244 !important;
  --yt-basic-foreground-title-color: #313244 !important;
  --ytd-author-comment-badge-background-color: #313244 !important;
  --ytd-author-comment-badge-name-color: #cdd6f4 !important;
  --ytd-author-comment-badge-icon-color: #cdd6f4 !important;
}
:root[dark] #guide-skeleton,
:root[dark] #home-container-skeleton,
:root[dark] #home-chips {
  background-color: #1e1e2e !important;
  z-index: -1 !important;
}
:root[dark] #guide-skeleton .guide-ghost-icon,
:root[dark] #guide-skeleton .guide-ghost-text,
:root[dark] .masthead-skeleton-icon,
:root[dark] #home-page-skeleton .skeleton-bg-color,
:root[dark] .watch-skeleton .skeleton-bg-color {
  background-color: #45475a !important;
}
:root[dark] #cinematics,
:root[dark] #cinematic-container {
  mix-blend-mode: lighten !important;
}
:root[dark] .ytp-settings-button.ytp-hd-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-hdr-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-4k-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-5k-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-8k-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-3d-badge-grey::after,
:root[dark] .ytp-settings-button.ytp-3d-badge::after {
  background-color: #cba6f7 !important;
}
:root[dark] [fill="red"],
:root[dark] [fill="#F00"],
:root[dark] [fill="#FF0000"],
:root[dark] [fill="#f03"],
:root[dark] [fill="#FF0033"] {
  fill: #cba6f7 !important;
}
:root[dark] [fill="white"] {
  fill: #cdd6f4 !important;
}
:root[dark] [src*="https://www.gstatic.com/images/icons/material/system/1x/check_circle_grey600_36dp.png"] {
  filter: brightness(0) saturate(100%) invert(75%) sepia(82%) saturate(1008%) hue-rotate(189deg) brightness(120%) contrast(90%) !important;
}
:root[dark] yt-icon.ytd-logo [fill="white"] {
  fill: #11111b !important;
}
:root[dark] .yt-spec-icon-shape [fill="#FAFAFA"],
:root[dark] .yt-spec-icon-shape [fill="#000"],
:root[dark] .yt-spec-icon-shape [fill="#fff"],
:root[dark] .yt-spec-icon-shape [fill="#FFF"],
:root[dark] .yt-spec-icon-shape [fill="#FFFFFF"] {
  fill: #11111b !important;
}
:root[dark] .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon,
:root[dark] .yt-spec-icon-badge-shape {
  color: #cdd6f4 !important;
}
:root[dark] .yt-spec-icon-badge-shape--type-notification .yt-spec-icon-badge-shape__badge {
  background-color: #cba6f7 !important;
  color: #313244 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
  background-color: #313244 !important;
  /* Accent for filled-in thumbs up (like button) */
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(3,3,3)"],
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(0,0,0)"],
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(255,255,255)"] {
  fill: #cdd6f4 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(0,0,0)"],
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(255,255,255)"] {
  stroke: #cdd6f4 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] {
  fill: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] + [stroke] {
  stroke: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal:hover {
  background-color: #45475a !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline {
  color: #cdd6f4 !important;
  border-color: #585b70 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline:hover {
  background-color: #585b70 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text {
  color: #cdd6f4 !important;
  /* Accent for filled-in thumbs up (like button) */
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text path[d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"] {
  fill: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text:hover {
  background-color: #45475a !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled:hover {
  background-color: #bd8ff5 !important;
}
:root[dark] .yt-spec-button-shape-next--disabled {
  color: #7f849c !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
  background-color: #313244 !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal:hover {
  background-color: #45475a !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
  color: #cdd6f4 !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--outline {
  color: #cdd6f4 !important;
  border-color: #45475a !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--outline:hover {
  background: #313244 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline {
  color: #cba6f7 !important;
  border-color: #585b70 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline:hover {
  background-color: rgba(203, 166, 247, 0.3) !important;
  color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text {
  color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text:hover {
  background-color: rgba(203, 166, 247, 0.3) !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--filled:hover {
  background-color: #d9bdf9 !important;
}
:root[dark] .yt-spec-button-shape-next--disabled.yt-spec-button-shape-next--filled {
  color: #a6adc8 !important;
  background-color: rgba(69, 71, 90, 0.7) !important;
}
:root[dark] ytd-searchbox[has-focus] #container.ytd-searchbox {
  border-color: #cba6f7 !important;
}
:root[dark] .ytSearchboxComponentInputBox,
:root[dark] .ytSearchboxComponentInputBoxDark {
  background: var(--ytd-searchbox-background) !important;
  color: var(--ytd-searchbox-text-color) !important;
  border-color: var(--ytd-searchbox-border-color) !important;
  box-shadow: none !important;
}
:root[dark] .ytSearchboxComponentInputBoxHasFocus,
:root[dark] .ytSearchboxComponentInputBoxHasFocusDark {
  border-color: #cba6f7 !important;
}
:root[dark] .ytSuggestionComponentSuggestionHover:hover,
:root[dark] .ytSuggestionComponentSuggestionHoverDark:hover {
  background: #45475a !important;
}
:root[dark] .ytSearchboxComponentSuggestionsContainer,
:root[dark] .ytSearchboxComponentSuggestionsContainerDark {
  background: var(--yt-spec-raised-background) !important;
  border-color: var(--yt-spec-raised-background) !important;
}
:root[dark] .ytSuggestionComponentSuggestion,
:root[dark] .ytSuggestionComponentSuggestionDark {
  color: var(--ytd-searchbox-text-color) !important;
}
:root[dark] .ytSearchboxComponentSearchButton,
:root[dark] .ytSearchboxComponentSearchButtonDark {
  color: var(--ytd-searchbox-text-color) !important;
  background: #313244 !important;
  border-color: var(--ytd-searchbox-border-color) !important;
}
:root[dark] .ytSearchboxComponentClearButtonIcon,
:root[dark] .ytSearchboxComponentClearButtonIconDark {
  color: var(--ytd-searchbox-text-color) !important;
}
:root[dark] .ytSearchboxComponentReportButton,
:root[dark] .ytSearchboxComponentReportButtonDark,
:root[dark] .ytSuggestionComponentRemoveLink,
:root[dark] .ytSuggestionComponentRemoveLinkDark {
  color: #a6adc8 !important;
}
:root[dark] .sbsb_a {
  background: #313244 !important;
}
:root[dark] .sbdd_b {
  border-color: var(--yt-spec-raised-background) !important;
  background-color: var(--yt-spec-raised-background) !important;
}
:root[dark] .sbpqs_a,
:root[dark] .gsfs {
  color: var(--yt-spec-text-primary) !important;
}
:root[dark] .sbsb_i {
  color: var(--yt-spec-call-to-action) !important;
}
:root[dark] .sbsb_d {
  background-color: var(--yt-spec-additive-background) !important;
}
:root[dark] .sbdd_c {
  visibility: hidden !important;
}
:root[dark] .sbpqs_c {
  color: #7f849c !important;
}
:root[dark] .sbpqs_a::before,
:root[dark] .sbqs_c::before {
  content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20enable-background%3D%22new%200%200%2024%2024%22%20height%3D%2224%22%20viewBox%3D%221%201%2027%2027%22%20width%3D%2224%22%20focusable%3D%22false%22%20style%3D%22width%3A100%25%3Bheight%3A100%25%22%20pointer-events%3D%22none%22%20display%3D%22block%22%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20d%3D%22m20.87%2020.17-5.59-5.59A6.96%206.96%200%200%200%2017%2010c0-3.87-3.13-7-7-7s-7%203.13-7%207a6.995%206.995%200%200%200%2011.58%205.29l5.59%205.59zM10%2016c-3.31%200-6-2.69-6-6s2.69-6%206-6%206%202.69%206%206-2.69%206-6%206%22/%3E%3C/svg%3E") !important;
  background: none !important;
}
:root[dark] .yt-core-attributed-string__link--call-to-action-color {
  color: #cba6f7 !important;
}
:root[dark] .YtwCourseProgressViewModelHostProgressTitle,
:root[dark] .YtwCourseProgressViewModelHostProgressSubtitle {
  color: #cdd6f4 !important;
}
:root[dark] .YtwCourseProgressViewModelHostProgressBar {
  background-color: rgba(205, 214, 244, 0.2) !important;
}
:root[dark] .YtwCourseProgressViewModelHostProgressBar .YtwCourseProgressViewModelHostProgressBarFill {
  background-color: #cdd6f4 !important;
}
:root[dark] .ytwHowThisWasMadeSectionViewModelSectionTitle,
:root[dark] .ytwHowThisWasMadeSectionViewModelBodyHeader {
  color: #cdd6f4 !important;
}
:root[dark] .ytwHowThisWasMadeSectionViewModelBodyText {
  color: #a6adc8 !important;
}
:root[dark] #time-status:has([aria-label="LIVE"]),
:root[dark] .badge[aria-label="LIVE"],
:root[dark] .badge[aria-label="PREMIERE"],
:root[dark] .badge-shape-wiz--live.badge-shape-wiz--overlay,
:root[dark] .badge-shape-wiz--thumbnail-live {
  background: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] #thumbnail [style="background-color: rgba(51, 51, 51, 0.8);"],
:root[dark] .YtInlinePlayerControlsTopRightControlsCircleButton,
:root[dark] .badge-shape-wiz--default.badge-shape-wiz--overlay,
:root[dark] .branding-context-container-inner {
  background-color: #313244 !important;
  color: #cdd6f4 !important;
}
:root[dark] .ytp-sb-unsubscribe {
  background-color: #585b70 !important;
  color: #cdd6f4 !important;
}
:root[dark] .ytp-sb-subscribe {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] ytd-thumbnail-overlay-resume-playback-renderer {
  background-color: #45475a !important;
}
:root[dark] .badge-shape-wiz--thumbnail-default {
  color: #cdd6f4 !important;
  background: rgba(17, 17, 27, 0.8) !important;
}
:root[dark] .ytp-tooltip-bottom-text {
  background: rgba(49, 50, 68, 0.9) !important;
  color: #cdd6f4 !important;
  text-shadow: none !important;
}
:root[dark] .ytp-popup {
  background: rgba(49, 50, 68, 0.9) !important;
  text-shadow: none !important;
}
:root[dark] .ytp-panel-menu,
:root[dark] .ytp-panel-header,
:root[dark] .ytp-panel-footer,
:root[dark] .ytp-menuitem-label,
:root[dark] .ytp-premium-label,
:root[dark] .ytp-menuitem-content,
:root[dark] .ytp-menuitem-label-count,
:root[dark] .ytp-menu-label-secondary,
:root[dark] .ytd-menu-title-renderer {
  color: #cdd6f4 !important;
}
:root[dark] .ytp-panel-header {
  border-bottom-color: #585b70 !important;
}
:root[dark] .yt-spec-dialog-layout {
  background-color: #181825 !important;
}
:root[dark] .ytp-panel-footer-content-link {
  color: #cba6f7 !important;
}
:root[dark] .ytp-panel-back-button {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m19.41%2020.09-4.58-4.59%204.58-4.59L18%209.5l-6%206%206%206z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root[dark] .ytp-menuitem[aria-checked="true"] .ytp-menuitem-toggle-checkbox {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22M9%2016.2%204.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
  background-color: #cba6f7 !important;
}
:root[dark] .ytp-menuitem:not([aria-disabled="true"]):hover {
  background-color: #45475a !important;
}
:root[dark] .ytp-menuitem svg > path:not([fill="none"]) {
  fill: #cdd6f4 !important;
}
:root[dark] .ytp-menuitem[aria-haspopup="true"] .ytp-menuitem-content {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m12.59%2020.34%204.58-4.59-4.58-4.59L14%209.75l6%206-6%206z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root[dark] .ytp-menuitem[role="menuitemradio"][aria-checked="true"] .ytp-menuitem-label {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22M9%2016.2%204.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root[dark] yt-progress-bar .ytProgressBarLineProgressBarPlayed,
:root[dark] yt-progress-bar .ytProgressBarPlayheadProgressBarPlayheadDot {
  background: #cba6f7 !important;
}
:root[dark] yt-progress-bar .ytProgressBarLineProgressBarHovered,
:root[dark] yt-progress-bar .ytProgressBarLineProgressBarBackground {
  background: #cdd6f4 !important;
}
:root[dark] .ytp-cards-button .ytp-cards-button-icon use {
  fill: #1e1e2e !important;
}
:root[dark] .ytp-cards-button .ytp-cards-button-icon path {
  fill: #cdd6f4 !important;
}
:root[dark] .ytp-cards-teaser .ytp-cards-teaser-box {
  background-color: #585b70 !important;
  border-bottom-color: #585b70 !important;
}
:root[dark] .ytp-cards-teaser .ytp-cards-teaser-text {
  color: #cdd6f4 !important;
}
:root[dark] .html5-video-player {
  color: #cdd6f4 !important;
  /* youtube live ring */
  /* stats for nerds */
}
:root[dark] .html5-video-player .ytp-swatch-background-color,
:root[dark] .html5-video-player .ytp-play-progress {
  background: #cba6f7 !important;
}
:root[dark] .html5-video-player .ytp-svg-fill,
:root[dark] .html5-video-player [fill="#fff"] {
  fill: #cdd6f4 !important;
}
:root[dark] .html5-video-player .ytp-volume-slider-handle,
:root[dark] .html5-video-player .ytp-volume-slider-handle::before {
  background-color: #cdd6f4 !important;
}
:root[dark] .html5-video-player .ytp-volume-slider-handle::after {
  background-color: rgba(205, 214, 244, 0.2) !important;
}
:root[dark] .html5-video-player .ytp-time-current,
:root[dark] .html5-video-player .ytp-time-separator,
:root[dark] .html5-video-player .ytp-time-duration {
  color: #cdd6f4 !important;
}
:root[dark] .html5-video-player .ytp-live-badge[disabled]::before {
  background: #cba6f7 !important;
}
:root[dark] .html5-video-player .ytp-live-badge::before {
  background: #6c7086 !important;
}
:root[dark] .html5-video-player .yt-spec-avatar-shape__badge-text {
  color: #11111b !important;
}
:root[dark] .html5-video-player .yt-spec-avatar-shape--live-ring {
  border-color: #cba6f7 !important;
}
:root[dark] .html5-video-player .yt-spec-avatar-shape__live-badge {
  background-color: #cba6f7 !important;
}
:root[dark] .html5-video-player .ytp-button[aria-pressed]::after,
:root[dark] .html5-video-player .ytp-subtitles-button[aria-pressed]::after {
  background-color: #cba6f7 !important;
}
:root[dark] .html5-video-player .ytp-sfn {
  background: rgba(30, 30, 46, 0.8) !important;
  color: #cdd6f4 !important;
}
:root[dark] .html5-video-player .ytp-autonav-toggle-button {
  background-color: #585b70 !important;
}
:root[dark] .html5-video-player .ytp-autonav-toggle-button::after {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M12.75%204.5h-3c-.6%200-1.17.23-1.6.65-.42.43-.65%201-.65%201.6v22.5c0%20.59.23%201.16.65%201.59.43.42%201%20.66%201.6.66h3c.59%200%201.16-.24%201.59-.66.42-.43.66-1%20.66-1.59V6.75c0-.6-.24-1.17-.66-1.6-.43-.42-1-.65-1.59-.65m13.5%200h-3c-.6%200-1.17.23-1.6.65-.42.43-.65%201-.65%201.6v22.5c0%20.59.23%201.16.65%201.59.43.42%201%20.66%201.6.66h3c.59%200%201.16-.24%201.59-.66.42-.43.66-1%20.66-1.59V6.75c0-.6-.24-1.17-.66-1.6-.43-.42-1-.65-1.59-.65%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
  background-color: #7f849c !important;
}
:root[dark] .html5-video-player .ytp-autonav-toggle-button[aria-checked="true"]::after {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22m17%208.6-6.11-3.61c-1.5-.88-3.39.2-3.39%201.94v22.13c0%201.74%201.89%202.82%203.39%201.94L17%2027.4zm0%200v18.8L33%2018z%22%20fill%3D%22%231e1e2e%22/%3E%3C/svg%3E") !important;
  background-color: #cdd6f4 !important;
}
:root[dark] ytd-rich-item-renderer.ytd-rich-item-renderer-highlight {
  background-color: rgba(203, 166, 247, 0.1) !important;
  box-shadow: rgba(203, 166, 247, 0.1) 0 0 0 10px !important;
}
:root[dark] #shorts-container {
  --yt-spec-static-overlay-text-primary: #cdd6f4 !important;
  /* Buy super thanks button */
}
:root[dark] #shorts-container .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container .YtwFactoidRendererLabel {
  color: #a6adc8 !important;
}
:root[dark] #shorts-container .YtwFactoidRendererValue {
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container ytd-reel-video-renderer:not([is-watch-while-mode]) .yt-spec-button-shape-with-label__label {
  color: #bac2de !important;
}
:root[dark] #shorts-container ytd-reel-video-renderer[is-watch-while-mode] .yt-spec-button-shape-with-label__label {
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container .yt-spec-button-shape-next--overlay-dark.yt-spec-button-shape-next--tonal,
:root[dark] #shorts-container .YtdDesktopShortsVolumeControlsBackgroundScrim {
  background-color: rgba(30, 30, 46, 0.6) !important;
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container .yt-spec-button-shape-next--overlay-dark.yt-spec-button-shape-next--filled {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] #shorts-container .YtdDesktopShortsVolumeControlsMuteIcon {
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container .YtdShortsSuggestedActionStaticHostContainer {
  background-color: rgba(30, 30, 46, 0.6) !important;
}
:root[dark] #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostLeadingIcon,
:root[dark] #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostPrimaryText {
  color: #cdd6f4 !important;
}
:root[dark] .shortsLockupViewModelHostOutsideMetadataEndpoint {
  color: #cdd6f4 !important;
}
:root[dark] .shortsLockupViewModelHostOutsideMetadataSubhead {
  color: #a6adc8 !important;
}
:root[dark] #progressContainer.tp-yt-paper-progress {
  background-color: #181825 !important;
}
:root[dark] #comment-chip-container.yt-pdg-comment-chip-renderer,
:root[dark] .slider-knob-inner.tp-yt-paper-slider {
  background: #cba6f7 !important;
}
:root[dark] #primaryProgress.tp-yt-paper-progress {
  background: linear-gradient(139deg, #fab387, #eba0ac, #f38ba8, #f5c2e7) !important;
}
:root[dark] #container.ytd-pdg-comment-preview-renderer {
  background-color: #181825 !important;
}
:root[dark] #comment-chip-price.yt-pdg-comment-chip-renderer,
:root[dark] yt-icon.yt-pdg-comment-chip-renderer {
  color: #11111b !important;
}
:root[dark] .yt-tab-shape-wiz__tab {
  color: #bac2de !important;
}
:root[dark] .yt-tab-shape-wiz__tab--tab-selected {
  color: #cdd6f4 !important;
}
:root[dark] .yt-tab-group-shape-wiz__slider {
  background-color: #cdd6f4 !important;
}
:root[dark] .yt-tab-shape-wiz:hover .yt-tab-shape-wiz__tab-bar {
  background-color: #bac2de !important;
}
:root[dark] .truncated-text-wiz,
:root[dark] .page-header-view-model-wiz__page-header-content-metadata {
  color: #bac2de !important;
}
:root[dark] .page-header-view-model-wiz__page-header-title,
:root[dark] [style="color: rgb(255, 255, 255);"]:has(svg),
:root[dark] .truncated-text-wiz__absolute-button {
  color: #cdd6f4 !important;
}
:root[dark] .yt-contextual-sheet-layout-wiz {
  background-color: #181825 !important;
}
:root[dark] .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__container--tappable:hover {
  background-color: #313244 !important;
}
:root[dark] .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__title,
:root[dark] .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__accessory,
:root[dark] .yt-contextual-sheet-layout-wiz .radio-shape-wiz__label-container {
  color: #cdd6f4 !important;
}
:root[dark] .profile-badge-view-model-wiz__badge-description {
  color: #cdd6f4 !important;
}
:root[dark] .profile-badge-view-model-wiz__badge-subtitle {
  color: #a6adc8 !important;
}
:root[dark] .yt-profile-identity-info-view-model-wiz__divider {
  border-color: #313244 !important;
}
:root[dark] .yt-profile-card-view-model-wiz {
  background-color: #181825 !important;
}
:root[dark] .yt-profile-identity-info-view-model-wiz__channel-name,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-handle-with-bold-font,
:root[dark] .yt-profile-info-view-model-wiz__section-title,
:root[dark] .yt-comment-interaction-view-model-wiz__video-title,
:root[dark] .yt-shared-subscription-view-model-wiz__channel-name {
  color: #cdd6f4 !important;
}
:root[dark] .yt-profile-identity-info-view-model-wiz__badge,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-handle,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-content,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-delimiter,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-pronouns,
:root[dark] .yt-profile-info-view-model-wiz__section-divider,
:root[dark] .yt-profile-info-view-model-wiz__section-subtitle,
:root[dark] .yt-comment-interaction-view-model-wiz__comment-content {
  color: #a6adc8 !important;
}
:root[dark] .arrow.yt-horizontal-list-renderer {
  background: #313244 !important;
}
:root[dark] .ytVideoMetadataCarouselViewModelHost,
:root[dark] .YtVideoMetadataCarouselViewModelHost {
  background-color: #313244 !important;
}
:root[dark] .ytVideoMetadataCarouselViewModelHost .ytCarouselTitleViewModelTitle,
:root[dark] .YtVideoMetadataCarouselViewModelHost .ytCarouselTitleViewModelTitle,
:root[dark] .ytVideoMetadataCarouselViewModelHost .YtCarouselTitleViewModelTitle,
:root[dark] .YtVideoMetadataCarouselViewModelHost .YtCarouselTitleViewModelTitle,
:root[dark] .ytVideoMetadataCarouselViewModelHost .yt-core-attributed-string,
:root[dark] .YtVideoMetadataCarouselViewModelHost .yt-core-attributed-string,
:root[dark] .ytVideoMetadataCarouselViewModelHost .yt-icon-shape,
:root[dark] .YtVideoMetadataCarouselViewModelHost .yt-icon-shape {
  color: #cdd6f4 !important;
}
:root[dark] .video-summary-content-view-model-wiz__paragraph {
  color: #cdd6f4 !important;
}
:root[dark] #next-video-title {
  color: #cdd6f4 !important;
}
:root[dark] #publisher-container .yt-simple-endpoint.style-scope.yt-formatted-string,
:root[dark] #publisher-container .index-message-wrapper.style-scope.ytd-playlist-panel-renderer,
:root[dark] #publisher-container .index-message-wrapper.style-scope.ytd-playlist-panel-renderer::before {
  color: #a6adc8 !important;
}
:root[dark] .metadata-stats.style-scope.ytd-playlist-byline-renderer,
:root[dark] .yt-lockup-metadata-view-model-wiz__metadata {
  color: #a6adc8 !important;
}
:root[dark] .yt-core-attributed-string.yt-core-attributed-string--white-space-pre-wrap {
  color: #cdd6f4 !important;
}
:root[dark] .ytChipShapeInactive {
  background-color: #313244 !important;
  color: #cdd6f4 !important;
}
:root[dark] .ytChipShapeActive {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] .ytListViewModelHost {
  background-color: #181825 !important;
  color: #cdd6f4 !important;
}
:root[dark] .ytListViewModelHost .yt-icon-shape {
  color: #cdd6f4 !important;
}
:root:not([dark]) {
  color-scheme: dark !important;
  color: #cdd6f4 !important;
  background: #1e1e2e !important;
  /* Misc */
  /* Selected chapter */
  /* Skeleton */
  /* Ambient mode */
  /* Icons */
  /* verification badge */
  /* Buttons */
  /* Search box */
  /* "Suggestion removed" */
  /* Video description */
  /* Thumbnails */
  /* Panels, popups, tooltips */
  /* Video player */
  /* Video highlight */
  /* Shorts titles and views on homepage */
  /* Buy super thanks bar */
  /* Channel pages */
  /* channel details */
  /* Profiles */
  /* Horizontal list arrows */
  /* Live chat replay */
  /* AI-generated video summary */
  /* Playlist collapsed sidebar */
  /* Playlist metadata */
  /* Playlist titles in search results */
  /* Category tag pills */
  /* Vertical ellipsis menu on main page */
}
:root:not([dark]) ::selection {
  background-color: rgba(203, 166, 247, 0.3) !important;
}
:root:not([dark]) input::placeholder,
:root:not([dark]) textarea::placeholder {
  color: #a6adc8 !important;
}
:root:not([dark]),
:root:not([dark]) [dark],
:root:not([dark]) [system-icons],
:root:not([dark]) [darker-dark-theme],
:root:not([dark])[dark],
:root:not([dark])[system-icons],
:root:not([dark])[darker-dark-theme] {
  --efyt-control-bar-background-color: #181825 !important;
  --dimmer-text: #cdd6f4 !important;
  --yt-spec-white-1: #cdd6f4 !important;
  --yt-spec-white-2: #a6adc8 !important;
  --yt-spec-white-3: #bac2de !important;
  --yt-spec-white-4: #a9b3d6 !important;
  --yt-spec-black-1: #7f849c !important;
  --yt-spec-black-2: #6c7086 !important;
  --yt-spec-black-3: #585b70 !important;
  --yt-spec-black-4: #45475a !important;
  --yt-spec-black-pure: #313244 !important;
  --yt-spec-grey-1: #cdd6f4 !important;
  --yt-spec-grey-2: #a6adc8 !important;
  --yt-spec-grey-3: #bac2de !important;
  --yt-spec-grey-4: #9399b2 !important;
  --yt-spec-grey-5: #7f849c !important;
  --yt-brand-youtube-red: #cba6f7 !important;
  --yt-brand-medium-red: #cba6f7 !important;
  --yt-brand-light-red: #cba6f7 !important;
  --yt-spec-red-30: #fab387 !important;
  --yt-spec-red-70: #f38ba8 !important;
  --yt-spec-red-indicator: #cba6f7 !important;
  --yt-spec-pale-blue: #89dceb !important;
  --yt-spec-light-blue: #89dceb !important;
  --yt-spec-dark-blue: #74c7ec !important;
  --yt-spec-navy-blue: #94e2d5 !important;
  --yt-spec-light-green: #a6e3a1 !important;
  --yt-spec-dark-green: #a6e3a1 !important;
  --yt-spec-yellow: #fab387 !important;
  --yt-spec-black-pure-alpha-5: #a6adc8 !important;
  --yt-spec-black-pure-alpha-10: #9399b2 !important;
  --yt-spec-black-pure-alpha-15: rgba(17, 17, 27, 0.85) !important;
  --yt-spec-black-pure-alpha-30: rgba(17, 17, 27, 0.7) !important;
  --yt-spec-black-pure-alpha-60: rgba(17, 17, 27, 0.4) !important;
  --yt-spec-black-pure-alpha-80: rgba(17, 17, 27, 0.2) !important;
  --yt-spec-black-1-alpha-98: rgba(17, 17, 27, 0.02) !important;
  --yt-spec-black-1-alpha-95: rgba(17, 17, 27, 0.05) !important;
  --yt-spec-white-1-alpha-10: rgba(205, 214, 244, 0.9) !important;
  --yt-spec-white-1-alpha-20: rgba(205, 214, 244, 0.8) !important;
  --yt-spec-white-1-alpha-25: rgba(205, 214, 244, 0.75) !important;
  --yt-spec-white-1-alpha-30: rgba(205, 214, 244, 0.7) !important;
  --yt-spec-white-1-alpha-70: rgba(205, 214, 244, 0.3) !important;
  --yt-spec-white-1-alpha-95: rgba(205, 214, 244, 0.05) !important;
  --yt-spec-white-1-alpha-98: rgba(205, 214, 244, 0.02) !important;
  --yt-brand-medium-red-alpha-90: rgba(203, 166, 247, 0.1) !important;
  --yt-brand-medium-red-alpha-30: rgba(203, 166, 247, 0.7) !important;
  --yt-brand-light-red-alpha-30: rgba(203, 166, 247, 0.7) !important;
  --yt-spec-light-blue-alpha-30: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-dark-blue-alpha-30: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-base-background: #1e1e2e !important;
  --yt-spec-raised-background: #1e1e2e !important;
  --yt-spec-menu-background: #181825 !important;
  --yt-spec-inverted-background: #cdd6f4 !important;
  --yt-spec-additive-background: #313244 !important;
  --yt-spec-outline: #313244 !important;
  --yt-spec-shadow: rgba(17, 17, 27, 0.75) !important;
  --yt-spec-text-primary: #cdd6f4 !important;
  --yt-spec-text-secondary: #a6adc8 !important;
  --yt-spec-text-disabled: #bac2de !important;
  --yt-spec-text-primary-inverse: #11111b !important;
  --yt-spec-call-to-action: #cba6f7 !important;
  --yt-spec-call-to-action-inverse: #cba6f7 !important;
  --yt-spec-suggested-action: rgba(203, 166, 247, 0.2) !important;
  --yt-spec-suggested-action-inverse: #cdd6f4 !important;
  --yt-spec-icon-active-other: #cdd6f4 !important;
  --yt-spec-button-chip-background-hover: #45475a !important;
  --yt-spec-touch-response: #313244 !important;
  --yt-spec-touch-response-inverse: #cba6f7 !important;
  --yt-spec-brand-icon-active: #cba6f7 !important;
  --yt-spec-brand-button-background: #cba6f7 !important;
  --yt-spec-brand-link-text: #74c7ec !important;
  --yt-spec-wordmark-text: #cdd6f4 !important;
  --yt-spec-error-indicator: #f38ba8 !important;
  --yt-spec-themed-blue: #cba6f7 !important;
  --yt-spec-themed-green: #a6e3a1 !important;
  --yt-spec-ad-indicator: #94e2d5 !important;
  --yt-spec-themed-overlay-background: rgba(17, 17, 27, 0.8) !important;
  --yt-spec-commerce-badge-background: #a6e3a1 !important;
  --yt-spec-static-brand-red: #cba6f7 !important;
  --yt-spec-static-brand-white: #cdd6f4 !important;
  --yt-spec-static-brand-black: #1e1e2e !important;
  --yt-spec-static-clear-color: #11111b !important;
  --yt-spec-static-clear-black: #11111b !important;
  --yt-spec-static-ad-yellow: #fab387 !important;
  --yt-spec-static-grey: #a6adc8 !important;
  --yt-spec-static-overlay-background-solid: #11111b !important;
  --yt-spec-static-overlay-background-heavy: #11111b !important;
  --yt-spec-static-overlay-background-medium: rgba(17, 17, 27, 0.5) !important;
  --yt-spec-static-overlay-background-light: rgba(17, 17, 27, 0.9) !important;
  --yt-spec-static-overlay-text-primary: #cdd6f4 !important;
  --yt-spec-static-overlay-text-secondary: rgba(166, 173, 200, 0.3) !important;
  --yt-spec-static-overlay-text-disabled: rgba(166, 173, 200, 0.7) !important;
  --yt-spec-static-overlay-call-to-action: #cba6f7 !important;
  --yt-spec-static-overlay-icon-active-other: #11111b !important;
  --yt-spec-static-overlay-icon-inactive: #45475a !important;
  --yt-spec-static-overlay-icon-disabled: #585b70 !important;
  --yt-spec-static-overlay-button-primary: #cba6f7 !important;
  --yt-spec-static-overlay-touch-response: #7f849c !important;
  --yt-spec-static-overlay-touch-response-inverse: #45475a !important;
  --yt-spec-static-overlay-background-brand: #cba6f7 !important;
  --yt-spec-assistive-feed-themed-gradient-1: #a6adc8 !important;
  --yt-spec-assistive-feed-themed-gradient-2: #b4befe !important;
  --yt-spec-assistive-feed-themed-gradient-3: #f38ba8 !important;
  --yt-spec-brand-background-solid: #1e1e2e !important;
  --yt-spec-brand-background-primary: #1e1e2e !important;
  --yt-spec-brand-background-secondary: #181825 !important;
  --yt-spec-general-background-a: #1e1e2e !important;
  --yt-spec-general-background-b: #1e1e2e !important;
  --yt-spec-general-background-c: #11111b !important;
  --yt-spec-error-background: #1e1e2e !important;
  --yt-spec-10-percent-layer: #45475a !important;
  --yt-spec-snackbar-background: #181825 !important;
  --yt-spec-snackbar-background-updated: #181825 !important;
  --yt-spec-badge-chip-background: #313244 !important;
  --yt-spec-verified-badge-background: #6c7086 !important;
  --yt-spec-call-to-action-fadeoutd: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-call-to-action-hover: #cba6f7 !important;
  --yt-spec-brand-button-background-hover: #cba6f7 !important;
  --yt-spec-brand-link-text-fadeoutd: rgba(203, 166, 247, 0.7) !important;
  --yt-spec-filled-button-focus-outline: #313244 !important;
  --yt-spec-static-overlay-button-hover: #45475a !important;
  --yt-spec-mono-filled-hover: #45475a !important;
  --yt-spec-commerce-filled-hover: #cba6f7 !important;
  --yt-spec-mono-tonal-hover: #45475a !important;
  --yt-spec-commerce-tonal-hover: #585b70 !important;
  --yt-spec-static-overlay-filled-hover: #7f849c !important;
  --yt-spec-static-overlay-tonal-hover: #45475a !important;
  --yt-spec-paper-tab-ink: rgba(205, 214, 244, 0.7) !important;
  --yt-spec-filled-button-text: #cdd6f4 !important;
  --yt-spec-selected-nav-text: #cdd6f4 !important;
  --iron-icon-fill-color: #cdd6f4 !important;
  /* Search bar */
  --ytd-searchbox-border-color: #313244 !important;
  --ytd-searchbox-legacy-border-color: #313244 !important;
  --ytd-searchbox-legacy-border-shadow-color: #11111b !important;
  --ytd-searchbox-legacy-button-color: #181825 !important;
  --ytd-searchbox-legacy-button-border-color: #313244 !important;
  --ytd-searchbox-legacy-button-focus-color: #cba6f7 !important;
  --ytd-searchbox-legacy-button-hover-color: #181825 !important;
  --ytd-searchbox-legacy-button-hover-border-color: #313244 !important;
  --ytd-searchbox-legacy-button-icon-color: #cba6f7 !important;
  --ytd-searchbox-background: #1e1e2e !important;
  --ytd-searchbox-text-color: #cdd6f4 !important;
  /* System icons */
  --yt-spec-icon-inactive: #cdd6f4 !important;
  --yt-spec-icon-disabled: #7f849c !important;
  --yt-spec-brand-icon-inactive: #9399b2 !important;
  /* Yt video Page */
  --yt-live-chat-background-color: #1e1e2e !important;
  --yt-live-chat-action-panel-background-color: #1e1e2e !important;
  --yt-live-chat-secondary-background-color: #45475a !important;
  --yt-live-chat-toast-background-color: #585b70 !important;
  --yt-live-chat-mode-change-background-color: #1e1e2e !important;
  --yt-live-chat-secondary-text-color: #a6adc8 !important;
  --yt-live-chat-tertiary-text-color: rgba(205, 214, 244, 0.46) !important;
  --yt-live-chat-text-input-field-inactive-underline-color: #a6adc8 !important;
  --yt-live-chat-text-input-field-placeholder-color: #a6adc8 !important;
  --yt-live-chat-enabled-send-button-color: #cdd6f4 !important;
  --yt-live-chat-disabled-icon-button-color: #bac2de !important;
  --yt-live-chat-picker-button-hover-color: #cba6f7 !important;
  --yt-live-chat-mention-background-color: #cba6f7 !important;
  --yt-live-chat-mention-text-color: #cdd6f4 !important;
  --yt-live-chat-deleted-message-color: #a6adc8 !important;
  --yt-live-chat-deleted-message-bar-color: #bac2de !important;
  --yt-live-chat-reconnect-message-color: #cdd6f4 !important;
  --yt-live-chat-disabled-button-background-color: #6c7086 !important;
  --yt-live-chat-sub-panel-background-color: #1e1e2e !important;
  --yt-live-chat-sub-panel-background-color-transparent: #181825 !important;
  --yt-live-chat-moderator-color: #b4befe !important;
  --yt-live-chat-owner-color: #fab387 !important;
  --yt-live-chat-message-highlight-background-color: #1e1e2e !important;
  --yt-live-chat-sponsor-color: #a6e3a1 !important;
  --yt-live-chat-overlay-color: rgba(24, 24, 37, 0.5) !important;
  --yt-live-chat-dialog-background-color: #1e1e2e !important;
  --yt-emoji-picker-variant-selector-bg-color: #1e1e2e !important;
  --yt-live-chat-moderation-mode-hover-background-color: rgba(24, 24, 37, 0.7) !important;
  --yt-grey: #a6adc8 !important;
  --yt-live-chat-text-input-field-suggestion-background-color: #a6adc8 !important;
  --yt-live-chat-text-input-field-suggestion-background-color-hover: #bac2de !important;
  --yt-emoji-picker-search-background-color: #313244 !important;
  --yt-emoji-picker-search-color: #cdd6f4 !important;
  --yt-emoji-picker-search-placeholder-color: #cba6f7 !important;
  --yt-live-chat-slider-active-color: #cba6f7 !important;
  --yt-live-chat-slider-container-color: #313244 !important;
  --yt-live-chat-slider-markers-color: #cdd6f4 !important;
  --yt-live-chat-banner-gradient-scrim: linear-gradient(#181825, transparent) !important;
  --yt-live-chat-action-panel-gradient-scrim: linear-gradient(to top, #181825, transparent) !important;
  --yt-live-chat-automod-button-background-color-hover: rgba(17, 17, 27, 0.5) !important;
  --yt-live-chat-automod-button-explanation-color: rgba(203, 166, 247, 0.3) !important;
  --yt-live-chat-shimmer-background-color: rgba(17, 17, 27, 0.6) !important;
  --yt-live-chat-shimmer-linear-gradient: linear-gradient(0deg, rgba(205, 214, 244, 0.9) 40%, rgba(30, 30, 46, 0.7) 50%, rgba(205, 214, 244, 0.9) 60%) !important;
  --yt-live-chat-vem-background-color: #181825 !important;
  --yt-live-chat-product-picker-icon-color: rgba(205, 214, 244, 0.5) !important;
  --yt-live-chat-product-picker-hover-color: #6c7086 !important;
  --yt-live-chat-product-picker-disabled-icon-color: rgba(205, 214, 244, 0.7) !important;
  --yt-live-chat-action-panel-background-color-transparent: (null) !important;
  --paper-tooltip-background: #6c7086 !important;
  --paper-tooltip-text-color: #cdd6f4 !important;
  /* Links */
  --yt-endpoint-color: #cba6f7 !important;
  --yt-endpoint-visited-color: #cba6f7 !important;
  --yt-endpoint-hover-color: #cba6f7 !important;
  --sb-dark-red-outline: #cba6f7 !important;
  --sb-main-bg-color: #1e1e2e !important;
  --sb-main-fg-color: #cdd6f4 !important;
  --sb-grey-bg-color: #1e1e2e !important;
  --sb-grey-fg-color: #a6adc8 !important;
  --sb-red-bg-color: #cba6f7 !important;
  --sb-category-sponsor: #a6e3a1 !important;
  --sb-category-selfpromo: #f9e2af !important;
  --sb-category-exclusive_access: #94e2d5 !important;
  --sb-category-interaction: #cba6f7 !important;
  --sb-category-poi_highlight: #f5c2e7 !important;
  --sb-category-intro: #89dceb !important;
  --sb-category-outro: #89b4fa !important;
  --sb-category-preview: #74c7ec !important;
  --sb-category-filler: #b4befe !important;
  --sb-category-music_offtopic: #fab387 !important;
}
:root:not([dark]):not(.style-scope) {
  --primary-text-color: #cdd6f4 !important;
  --primary-background-color: #1e1e2e !important;
  --secondary-text-color: #a6adc8 !important;
  --disabled-text-color: #bac2de !important;
  --divider-color: #6c7086 !important;
  --error-color: #f38ba8 !important;
  --primary-color: #cba6f7 !important;
  --light-primary-color: #cba6f7 !important;
  --dark-primary-color: #89b4fa !important;
  --accent-color: #cba6f7 !important;
  --light-accent-color: #cba6f7 !important;
  --dark-accent-color: #cba6f7 !important;
  --light-theme-background-color: #1e1e2e !important;
  --light-theme-base-color: #cdd6f4 !important;
  --light-theme-text-color: #cdd6f4 !important;
  --light-theme-secondary-color: #a6adc8 !important;
  --light-theme-disabled-color: #bac2de !important;
  --light-theme-divider-color: #6c7086 !important;
  --dark-theme-background-color: #1e1e2e !important;
  --dark-theme-base-color: #cdd6f4 !important;
  --dark-theme-text-color: #cdd6f4 !important;
  --dark-theme-secondary-color: #a6adc8 !important;
  --dark-theme-disabled-color: #bac2de !important;
  --dark-theme-divider-color: #6c7086 !important;
}
:root:not([dark]) .yt-spec-touch-feedback-shape__hover-effect {
  background-color: #313244 !important;
}
:root:not([dark]) ytd-watch-metadata {
  --yt-saturated-raised-background: #45475a !important;
  --yt-saturated-text-primary: #cdd6f4 !important;
  --yt-saturated-text-secondary: #bac2de !important;
}
:root:not([dark]) .yt-core-attributed-string--link-inherit-color {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-core-attributed-string--highlight-text-decorator {
  background-color: #585b70 !important;
}
:root:not([dark]) #channel-name.ytd-video-meta-block {
  --yt-endpoint-color: #cba6f7 !important;
  --yt-endpoint-visited-color: #cba6f7 !important;
  color: #cba6f7 !important;
}
:root:not([dark]) .yt-page-navigation-progress {
  background: #cba6f7 !important;
}
:root:not([dark]) ytd-macro-markers-list-item-renderer {
  --ytd-macro-markers-list-item-background-color: #313244 !important;
  --ytd-macro-markers-list-item-title-color: #cdd6f4 !important;
  --ytd-macro-markers-list-item-secondary-color: #bac2de !important;
  --ytd-macro-markers-list-item-timestamp-background-color: #45475a !important;
}
:root:not([dark]) ytd-playlist-panel-video-renderer {
  --yt-lightsource-section2-color: #45475a !important;
  --yt-lightsource-section4-color: #585b70 !important;
  --yt-lightsource-primary-title-color: #cdd6f4 !important;
  --yt-lightsource-secondary-title-color: #cdd6f4 !important;
  --yt-active-playlist-panel-background-color: #313244 !important;
}
:root:not([dark]) ytd-playlist-panel-renderer[collapsible][collapsed][use-color-palette] .header.ytd-playlist-panel-renderer {
  --iron-icon-fill-color: #cdd6f4 !important;
  background-color: #1e1e2e !important;
}
:root:not([dark]) #container.ytd-masthead {
  --iron-icon-fill-color: #cdd6f4 !important;
}
:root:not([dark]) #background.ytd-masthead,
:root:not([dark]) #frosted-glass {
  --yt-frosted-glass-desktop: #1e1e2e !important;
  --yt-spec-frosted-glass-desktop: #1e1e2e !important;
}
:root:not([dark]) ytd-feed-filter-chip-bar-renderer[expand-instead-of-scroll] #chips-wrapper.ytd-feed-filter-chip-bar-renderer {
  --iron-icon-fill-color: #cdd6f4 !important;
  background-color: #1e1e2e !important;
}
:root:not([dark]) #ytd-player #container {
  background: #11111b !important;
}
:root:not([dark]) .ytp-progress-list {
  background: rgba(49, 50, 68, 0.8) !important;
}
:root:not([dark]) .ytp-load-progress {
  background: #6c7086 !important;
}
:root:not([dark]) ytd-expandable-metadata-renderer {
  --yt-lightsource-section1-color: #1e1e2e !important;
  --yt-lightsource-section2-color: #313244 !important;
  --yt-lightsource-section3-color: #45475a !important;
  --yt-lightsource-section4-color: #585b70 !important;
  --yt-lightsource-primary-title-color: #cdd6f4 !important;
  --yt-lightsource-secondary-title-color: #a6adc8 !important;
}
:root:not([dark]) yt-live-chat-renderer {
  --yt-button-default-text-color: #cdd6f4 !important;
  --yt-button-default-background-color: #1e1e2e !important;
  --yt-button-dark-text-color: #1e1e2e !important;
  --yt-button-dark-background-color: #cba6f7 !important;
  --yt-button-payment-background-color: #cba6f7 !important;
}
:root:not([dark]) yt-icon-button.yt-live-chat-item-list-renderer {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) yt-icon-button.yt-live-chat-item-list-renderer:hover {
  background-color: #bd8ff5 !important;
}
:root:not([dark]) ytd-author-comment-badge-renderer:not(
    [style*="--ytd-author-comment-badge-icon-background-color: transparent;"]
  ) {
  --yt-basic-background-color: #313244 !important;
  --yt-basic-foreground-title-color: #313244 !important;
  --ytd-author-comment-badge-background-color: #313244 !important;
  --ytd-author-comment-badge-name-color: #cdd6f4 !important;
  --ytd-author-comment-badge-icon-color: #cdd6f4 !important;
}
:root:not([dark]) #guide-skeleton,
:root:not([dark]) #home-container-skeleton,
:root:not([dark]) #home-chips {
  background-color: #1e1e2e !important;
  z-index: -1 !important;
}
:root:not([dark]) #guide-skeleton .guide-ghost-icon,
:root:not([dark]) #guide-skeleton .guide-ghost-text,
:root:not([dark]) .masthead-skeleton-icon,
:root:not([dark]) #home-page-skeleton .skeleton-bg-color,
:root:not([dark]) .watch-skeleton .skeleton-bg-color {
  background-color: #45475a !important;
}
:root:not([dark]) #cinematics,
:root:not([dark]) #cinematic-container {
  mix-blend-mode: lighten !important;
}
:root:not([dark]) .ytp-settings-button.ytp-hd-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-hdr-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-4k-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-5k-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-8k-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-3d-badge-grey::after,
:root:not([dark]) .ytp-settings-button.ytp-3d-badge::after {
  background-color: #cba6f7 !important;
}
:root:not([dark]) [fill="red"],
:root:not([dark]) [fill="#F00"],
:root:not([dark]) [fill="#FF0000"],
:root:not([dark]) [fill="#f03"],
:root:not([dark]) [fill="#FF0033"] {
  fill: #cba6f7 !important;
}
:root:not([dark]) [fill="white"] {
  fill: #cdd6f4 !important;
}
:root:not([dark]) [src*="https://www.gstatic.com/images/icons/material/system/1x/check_circle_grey600_36dp.png"] {
  filter: brightness(0) saturate(100%) invert(75%) sepia(82%) saturate(1008%) hue-rotate(189deg) brightness(120%) contrast(90%) !important;
}
:root:not([dark]) yt-icon.ytd-logo [fill="white"] {
  fill: #11111b !important;
}
:root:not([dark]) .yt-spec-icon-shape [fill="#FAFAFA"],
:root:not([dark]) .yt-spec-icon-shape [fill="#000"],
:root:not([dark]) .yt-spec-icon-shape [fill="#fff"],
:root:not([dark]) .yt-spec-icon-shape [fill="#FFF"],
:root:not([dark]) .yt-spec-icon-shape [fill="#FFFFFF"] {
  fill: #11111b !important;
}
:root:not([dark]) .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon,
:root:not([dark]) .yt-spec-icon-badge-shape {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-spec-icon-badge-shape--type-notification .yt-spec-icon-badge-shape__badge {
  background-color: #cba6f7 !important;
  color: #313244 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
  background-color: #313244 !important;
  /* Accent for filled-in thumbs up (like button) */
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(3,3,3)"],
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(0,0,0)"],
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(255,255,255)"] {
  fill: #cdd6f4 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(0,0,0)"],
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(255,255,255)"] {
  stroke: #cdd6f4 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] {
  fill: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] + [stroke] {
  stroke: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal:hover {
  background-color: #45475a !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline {
  color: #cdd6f4 !important;
  border-color: #585b70 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline:hover {
  background-color: #585b70 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text {
  color: #cdd6f4 !important;
  /* Accent for filled-in thumbs up (like button) */
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text path[d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"] {
  fill: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text:hover {
  background-color: #45475a !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled:hover {
  background-color: #bd8ff5 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--disabled {
  color: #7f849c !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
  background-color: #313244 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal:hover {
  background-color: #45475a !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--outline {
  color: #cdd6f4 !important;
  border-color: #45475a !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--outline:hover {
  background: #313244 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline {
  color: #cba6f7 !important;
  border-color: #585b70 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline:hover {
  background-color: rgba(203, 166, 247, 0.3) !important;
  color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text {
  color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text:hover {
  background-color: rgba(203, 166, 247, 0.3) !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--filled:hover {
  background-color: #d9bdf9 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--disabled.yt-spec-button-shape-next--filled {
  color: #a6adc8 !important;
  background-color: rgba(69, 71, 90, 0.7) !important;
}
:root:not([dark]) ytd-searchbox[has-focus] #container.ytd-searchbox {
  border-color: #cba6f7 !important;
}
:root:not([dark]) .ytSearchboxComponentInputBox,
:root:not([dark]) .ytSearchboxComponentInputBoxDark {
  background: var(--ytd-searchbox-background) !important;
  color: var(--ytd-searchbox-text-color) !important;
  border-color: var(--ytd-searchbox-border-color) !important;
  box-shadow: none !important;
}
:root:not([dark]) .ytSearchboxComponentInputBoxHasFocus,
:root:not([dark]) .ytSearchboxComponentInputBoxHasFocusDark {
  border-color: #cba6f7 !important;
}
:root:not([dark]) .ytSuggestionComponentSuggestionHover:hover,
:root:not([dark]) .ytSuggestionComponentSuggestionHoverDark:hover {
  background: #45475a !important;
}
:root:not([dark]) .ytSearchboxComponentSuggestionsContainer,
:root:not([dark]) .ytSearchboxComponentSuggestionsContainerDark {
  background: var(--yt-spec-raised-background) !important;
  border-color: var(--yt-spec-raised-background) !important;
}
:root:not([dark]) .ytSuggestionComponentSuggestion,
:root:not([dark]) .ytSuggestionComponentSuggestionDark {
  color: var(--ytd-searchbox-text-color) !important;
}
:root:not([dark]) .ytSearchboxComponentSearchButton,
:root:not([dark]) .ytSearchboxComponentSearchButtonDark {
  color: var(--ytd-searchbox-text-color) !important;
  background: #313244 !important;
  border-color: var(--ytd-searchbox-border-color) !important;
}
:root:not([dark]) .ytSearchboxComponentClearButtonIcon,
:root:not([dark]) .ytSearchboxComponentClearButtonIconDark {
  color: var(--ytd-searchbox-text-color) !important;
}
:root:not([dark]) .ytSearchboxComponentReportButton,
:root:not([dark]) .ytSearchboxComponentReportButtonDark,
:root:not([dark]) .ytSuggestionComponentRemoveLink,
:root:not([dark]) .ytSuggestionComponentRemoveLinkDark {
  color: #a6adc8 !important;
}
:root:not([dark]) .sbsb_a {
  background: #313244 !important;
}
:root:not([dark]) .sbdd_b {
  border-color: var(--yt-spec-raised-background) !important;
  background-color: var(--yt-spec-raised-background) !important;
}
:root:not([dark]) .sbpqs_a,
:root:not([dark]) .gsfs {
  color: var(--yt-spec-text-primary) !important;
}
:root:not([dark]) .sbsb_i {
  color: var(--yt-spec-call-to-action) !important;
}
:root:not([dark]) .sbsb_d {
  background-color: var(--yt-spec-additive-background) !important;
}
:root:not([dark]) .sbdd_c {
  visibility: hidden !important;
}
:root:not([dark]) .sbpqs_c {
  color: #7f849c !important;
}
:root:not([dark]) .sbpqs_a::before,
:root:not([dark]) .sbqs_c::before {
  content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20enable-background%3D%22new%200%200%2024%2024%22%20height%3D%2224%22%20viewBox%3D%221%201%2027%2027%22%20width%3D%2224%22%20focusable%3D%22false%22%20style%3D%22width%3A100%25%3Bheight%3A100%25%22%20pointer-events%3D%22none%22%20display%3D%22block%22%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20d%3D%22m20.87%2020.17-5.59-5.59A6.96%206.96%200%200%200%2017%2010c0-3.87-3.13-7-7-7s-7%203.13-7%207a6.995%206.995%200%200%200%2011.58%205.29l5.59%205.59zM10%2016c-3.31%200-6-2.69-6-6s2.69-6%206-6%206%202.69%206%206-2.69%206-6%206%22/%3E%3C/svg%3E") !important;
  background: none !important;
}
:root:not([dark]) .yt-core-attributed-string__link--call-to-action-color {
  color: #cba6f7 !important;
}
:root:not([dark]) .YtwCourseProgressViewModelHostProgressTitle,
:root:not([dark]) .YtwCourseProgressViewModelHostProgressSubtitle {
  color: #cdd6f4 !important;
}
:root:not([dark]) .YtwCourseProgressViewModelHostProgressBar {
  background-color: rgba(205, 214, 244, 0.2) !important;
}
:root:not([dark]) .YtwCourseProgressViewModelHostProgressBar .YtwCourseProgressViewModelHostProgressBarFill {
  background-color: #cdd6f4 !important;
}
:root:not([dark]) .ytwHowThisWasMadeSectionViewModelSectionTitle,
:root:not([dark]) .ytwHowThisWasMadeSectionViewModelBodyHeader {
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytwHowThisWasMadeSectionViewModelBodyText {
  color: #a6adc8 !important;
}
:root:not([dark]) #time-status:has([aria-label="LIVE"]),
:root:not([dark]) .badge[aria-label="LIVE"],
:root:not([dark]) .badge[aria-label="PREMIERE"],
:root:not([dark]) .badge-shape-wiz--live.badge-shape-wiz--overlay,
:root:not([dark]) .badge-shape-wiz--thumbnail-live {
  background: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) #thumbnail [style="background-color: rgba(51, 51, 51, 0.8);"],
:root:not([dark]) .YtInlinePlayerControlsTopRightControlsCircleButton,
:root:not([dark]) .badge-shape-wiz--default.badge-shape-wiz--overlay,
:root:not([dark]) .branding-context-container-inner {
  background-color: #313244 !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytp-sb-unsubscribe {
  background-color: #585b70 !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytp-sb-subscribe {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) ytd-thumbnail-overlay-resume-playback-renderer {
  background-color: #45475a !important;
}
:root:not([dark]) .badge-shape-wiz--thumbnail-default {
  color: #cdd6f4 !important;
  background: rgba(17, 17, 27, 0.8) !important;
}
:root:not([dark]) .ytp-tooltip-bottom-text {
  background: rgba(49, 50, 68, 0.9) !important;
  color: #cdd6f4 !important;
  text-shadow: none !important;
}
:root:not([dark]) .ytp-popup {
  background: rgba(49, 50, 68, 0.9) !important;
  text-shadow: none !important;
}
:root:not([dark]) .ytp-panel-menu,
:root:not([dark]) .ytp-panel-header,
:root:not([dark]) .ytp-panel-footer,
:root:not([dark]) .ytp-menuitem-label,
:root:not([dark]) .ytp-premium-label,
:root:not([dark]) .ytp-menuitem-content,
:root:not([dark]) .ytp-menuitem-label-count,
:root:not([dark]) .ytp-menu-label-secondary,
:root:not([dark]) .ytd-menu-title-renderer {
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytp-panel-header {
  border-bottom-color: #585b70 !important;
}
:root:not([dark]) .yt-spec-dialog-layout {
  background-color: #181825 !important;
}
:root:not([dark]) .ytp-panel-footer-content-link {
  color: #cba6f7 !important;
}
:root:not([dark]) .ytp-panel-back-button {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m19.41%2020.09-4.58-4.59%204.58-4.59L18%209.5l-6%206%206%206z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root:not([dark]) .ytp-menuitem[aria-checked="true"] .ytp-menuitem-toggle-checkbox {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22M9%2016.2%204.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
  background-color: #cba6f7 !important;
}
:root:not([dark]) .ytp-menuitem:not([aria-disabled="true"]):hover {
  background-color: #45475a !important;
}
:root:not([dark]) .ytp-menuitem svg > path:not([fill="none"]) {
  fill: #cdd6f4 !important;
}
:root:not([dark]) .ytp-menuitem[aria-haspopup="true"] .ytp-menuitem-content {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m12.59%2020.34%204.58-4.59-4.58-4.59L14%209.75l6%206-6%206z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root:not([dark]) .ytp-menuitem[role="menuitemradio"][aria-checked="true"] .ytp-menuitem-label {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22M9%2016.2%204.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root:not([dark]) yt-progress-bar .ytProgressBarLineProgressBarPlayed,
:root:not([dark]) yt-progress-bar .ytProgressBarPlayheadProgressBarPlayheadDot {
  background: #cba6f7 !important;
}
:root:not([dark]) yt-progress-bar .ytProgressBarLineProgressBarHovered,
:root:not([dark]) yt-progress-bar .ytProgressBarLineProgressBarBackground {
  background: #cdd6f4 !important;
}
:root:not([dark]) .ytp-cards-button .ytp-cards-button-icon use {
  fill: #1e1e2e !important;
}
:root:not([dark]) .ytp-cards-button .ytp-cards-button-icon path {
  fill: #cdd6f4 !important;
}
:root:not([dark]) .ytp-cards-teaser .ytp-cards-teaser-box {
  background-color: #585b70 !important;
  border-bottom-color: #585b70 !important;
}
:root:not([dark]) .ytp-cards-teaser .ytp-cards-teaser-text {
  color: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player {
  color: #cdd6f4 !important;
  /* youtube live ring */
  /* stats for nerds */
}
:root:not([dark]) .html5-video-player .ytp-swatch-background-color,
:root:not([dark]) .html5-video-player .ytp-play-progress {
  background: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .ytp-svg-fill,
:root:not([dark]) .html5-video-player [fill="#fff"] {
  fill: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player .ytp-volume-slider-handle,
:root:not([dark]) .html5-video-player .ytp-volume-slider-handle::before {
  background-color: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player .ytp-volume-slider-handle::after {
  background-color: rgba(205, 214, 244, 0.2) !important;
}
:root:not([dark]) .html5-video-player .ytp-time-current,
:root:not([dark]) .html5-video-player .ytp-time-separator,
:root:not([dark]) .html5-video-player .ytp-time-duration {
  color: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player .ytp-live-badge[disabled]::before {
  background: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .ytp-live-badge::before {
  background: #6c7086 !important;
}
:root:not([dark]) .html5-video-player .yt-spec-avatar-shape__badge-text {
  color: #11111b !important;
}
:root:not([dark]) .html5-video-player .yt-spec-avatar-shape--live-ring {
  border-color: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .yt-spec-avatar-shape__live-badge {
  background-color: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .ytp-button[aria-pressed]::after,
:root:not([dark]) .html5-video-player .ytp-subtitles-button[aria-pressed]::after {
  background-color: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .ytp-sfn {
  background: rgba(30, 30, 46, 0.8) !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player .ytp-autonav-toggle-button {
  background-color: #585b70 !important;
}
:root:not([dark]) .html5-video-player .ytp-autonav-toggle-button::after {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M12.75%204.5h-3c-.6%200-1.17.23-1.6.65-.42.43-.65%201-.65%201.6v22.5c0%20.59.23%201.16.65%201.59.43.42%201%20.66%201.6.66h3c.59%200%201.16-.24%201.59-.66.42-.43.66-1%20.66-1.59V6.75c0-.6-.24-1.17-.66-1.6-.43-.42-1-.65-1.59-.65m13.5%200h-3c-.6%200-1.17.23-1.6.65-.42.43-.65%201-.65%201.6v22.5c0%20.59.23%201.16.65%201.59.43.42%201%20.66%201.6.66h3c.59%200%201.16-.24%201.59-.66.42-.43.66-1%20.66-1.59V6.75c0-.6-.24-1.17-.66-1.6-.43-.42-1-.65-1.59-.65%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
  background-color: #7f849c !important;
}
:root:not([dark]) .html5-video-player .ytp-autonav-toggle-button[aria-checked="true"]::after {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22m17%208.6-6.11-3.61c-1.5-.88-3.39.2-3.39%201.94v22.13c0%201.74%201.89%202.82%203.39%201.94L17%2027.4zm0%200v18.8L33%2018z%22%20fill%3D%22%231e1e2e%22/%3E%3C/svg%3E") !important;
  background-color: #cdd6f4 !important;
}
:root:not([dark]) ytd-rich-item-renderer.ytd-rich-item-renderer-highlight {
  background-color: rgba(203, 166, 247, 0.1) !important;
  box-shadow: rgba(203, 166, 247, 0.1) 0 0 0 10px !important;
}
:root:not([dark]) #shorts-container {
  --yt-spec-static-overlay-text-primary: #cdd6f4 !important;
  /* Buy super thanks button */
}
:root:not([dark]) #shorts-container .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container .YtwFactoidRendererLabel {
  color: #a6adc8 !important;
}
:root:not([dark]) #shorts-container .YtwFactoidRendererValue {
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container ytd-reel-video-renderer:not([is-watch-while-mode]) .yt-spec-button-shape-with-label__label {
  color: #bac2de !important;
}
:root:not([dark]) #shorts-container ytd-reel-video-renderer[is-watch-while-mode] .yt-spec-button-shape-with-label__label {
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container .yt-spec-button-shape-next--overlay-dark.yt-spec-button-shape-next--tonal,
:root:not([dark]) #shorts-container .YtdDesktopShortsVolumeControlsBackgroundScrim {
  background-color: rgba(30, 30, 46, 0.6) !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container .yt-spec-button-shape-next--overlay-dark.yt-spec-button-shape-next--filled {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) #shorts-container .YtdDesktopShortsVolumeControlsMuteIcon {
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container .YtdShortsSuggestedActionStaticHostContainer {
  background-color: rgba(30, 30, 46, 0.6) !important;
}
:root:not([dark]) #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostLeadingIcon,
:root:not([dark]) #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostPrimaryText {
  color: #cdd6f4 !important;
}
:root:not([dark]) .shortsLockupViewModelHostOutsideMetadataEndpoint {
  color: #cdd6f4 !important;
}
:root:not([dark]) .shortsLockupViewModelHostOutsideMetadataSubhead {
  color: #a6adc8 !important;
}
:root:not([dark]) #progressContainer.tp-yt-paper-progress {
  background-color: #181825 !important;
}
:root:not([dark]) #comment-chip-container.yt-pdg-comment-chip-renderer,
:root:not([dark]) .slider-knob-inner.tp-yt-paper-slider {
  background: #cba6f7 !important;
}
:root:not([dark]) #primaryProgress.tp-yt-paper-progress {
  background: linear-gradient(139deg, #fab387, #eba0ac, #f38ba8, #f5c2e7) !important;
}
:root:not([dark]) #container.ytd-pdg-comment-preview-renderer {
  background-color: #181825 !important;
}
:root:not([dark]) #comment-chip-price.yt-pdg-comment-chip-renderer,
:root:not([dark]) yt-icon.yt-pdg-comment-chip-renderer {
  color: #11111b !important;
}
:root:not([dark]) .yt-tab-shape-wiz__tab {
  color: #bac2de !important;
}
:root:not([dark]) .yt-tab-shape-wiz__tab--tab-selected {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-tab-group-shape-wiz__slider {
  background-color: #cdd6f4 !important;
}
:root:not([dark]) .yt-tab-shape-wiz:hover .yt-tab-shape-wiz__tab-bar {
  background-color: #bac2de !important;
}
:root:not([dark]) .truncated-text-wiz,
:root:not([dark]) .page-header-view-model-wiz__page-header-content-metadata {
  color: #bac2de !important;
}
:root:not([dark]) .page-header-view-model-wiz__page-header-title,
:root:not([dark]) [style="color: rgb(255, 255, 255);"]:has(svg),
:root:not([dark]) .truncated-text-wiz__absolute-button {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-contextual-sheet-layout-wiz {
  background-color: #181825 !important;
}
:root:not([dark]) .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__container--tappable:hover {
  background-color: #313244 !important;
}
:root:not([dark]) .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__title,
:root:not([dark]) .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__accessory,
:root:not([dark]) .yt-contextual-sheet-layout-wiz .radio-shape-wiz__label-container {
  color: #cdd6f4 !important;
}
:root:not([dark]) .profile-badge-view-model-wiz__badge-description {
  color: #cdd6f4 !important;
}
:root:not([dark]) .profile-badge-view-model-wiz__badge-subtitle {
  color: #a6adc8 !important;
}
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__divider {
  border-color: #313244 !important;
}
:root:not([dark]) .yt-profile-card-view-model-wiz {
  background-color: #181825 !important;
}
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__channel-name,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-handle-with-bold-font,
:root:not([dark]) .yt-profile-info-view-model-wiz__section-title,
:root:not([dark]) .yt-comment-interaction-view-model-wiz__video-title,
:root:not([dark]) .yt-shared-subscription-view-model-wiz__channel-name {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__badge,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-handle,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-content,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-delimiter,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-pronouns,
:root:not([dark]) .yt-profile-info-view-model-wiz__section-divider,
:root:not([dark]) .yt-profile-info-view-model-wiz__section-subtitle,
:root:not([dark]) .yt-comment-interaction-view-model-wiz__comment-content {
  color: #a6adc8 !important;
}
:root:not([dark]) .arrow.yt-horizontal-list-renderer {
  background: #313244 !important;
}
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost {
  background-color: #313244 !important;
}
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost .ytCarouselTitleViewModelTitle,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost .ytCarouselTitleViewModelTitle,
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost .YtCarouselTitleViewModelTitle,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost .YtCarouselTitleViewModelTitle,
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost .yt-core-attributed-string,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost .yt-core-attributed-string,
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost .yt-icon-shape,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost .yt-icon-shape {
  color: #cdd6f4 !important;
}
:root:not([dark]) .video-summary-content-view-model-wiz__paragraph {
  color: #cdd6f4 !important;
}
:root:not([dark]) #next-video-title {
  color: #cdd6f4 !important;
}
:root:not([dark]) #publisher-container .yt-simple-endpoint.style-scope.yt-formatted-string,
:root:not([dark]) #publisher-container .index-message-wrapper.style-scope.ytd-playlist-panel-renderer,
:root:not([dark]) #publisher-container .index-message-wrapper.style-scope.ytd-playlist-panel-renderer::before {
  color: #a6adc8 !important;
}
:root:not([dark]) .metadata-stats.style-scope.ytd-playlist-byline-renderer,
:root:not([dark]) .yt-lockup-metadata-view-model-wiz__metadata {
  color: #a6adc8 !important;
}
:root:not([dark]) .yt-core-attributed-string.yt-core-attributed-string--white-space-pre-wrap {
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytChipShapeInactive {
  background-color: #313244 !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytChipShapeActive {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) .ytListViewModelHost {
  background-color: #181825 !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytListViewModelHost .yt-icon-shape {
  color: #cdd6f4 !important;
}


:root[dark] [src="https://www.gstatic.com/youtube/img/creator/yt_studio_logo_white.svg"] {
  content: url("data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2097.55%2024%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23cba6f7%22%20d%3D%22M17.1%200S6.4%200%203.8.7a4.15%204.15%200%200%200-3%203C0%206.4%200%2012%200%2012a45%2045%200%200%200%20.7%208.2%204.32%204.32%200%200%200%203%203c2.7.8%2013.4.8%2013.4.8s10.7%200%2013.4-.7a4.32%204.32%200%200%200%203-3%2045%2045%200%200%200%20.7-8.2s.1-5.7-.6-8.3a4.32%204.32%200%200%200-3-3C27.9%200%2017.1%200%2017.1%200m-3.4%206.9%208.9%205.1-8.9%205.1z%22/%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20d%3D%22M76.3.9v4.4c0%201.1%200%202%20.1%203.3h-.1A3.36%203.36%200%200%200%2073.4%207c-2.3%200-3.3%202-3.3%206.6V16c0%204.9.8%206.6%203.2%206.6a3.42%203.42%200%200%200%203.2-2.4h.1l.4%202.1h2.6V.9zm6.688.4c-1.126.032-1.687.55-1.687%202.1%200%201.7.599%202.1%201.799%202.1s1.8-.5%201.8-2.1-.6-2.1-1.8-2.1zM45%201.4c-3.6%200-5%201.7-5%204.9s1.1%204.5%203.7%206.8c1.6%201.4%202.8%202.5%202.8%204.8%200%201.5-.4%202.2-1.6%202.2s-1.7-.8-1.6-3.6h-3.1c-.6%204.2.8%206.1%204.5%206.2%203.5%200%205-1.5%205-5.4%200-3.1-1.3-4.4-3.7-6.6-1.9-1.8-2.8-2.5-2.8-4.6%200-1.4.3-2.2%201.6-2.2s1.6%201.1%201.5%203.9l3.1-.2c.5-4.2-.8-6.2-4.4-6.2m7.6%201.4-.4%204.5h-1.4v2.6H52v8.8c0%202.7.4%203.8%202.6%203.8a7.4%207.4%200%200%200%203.1-.6l-.6-2.2a5.2%205.2%200%200%201-1.3.2c-.5%200-.7-.3-.7-1.7V9.9h2.2V7.3H55V2.8zM91%207c-3.3%200-4.7%201.8-4.7%206.7v2.2c0%204.7%201.1%206.7%204.6%206.7s4.7-2%204.7-6.7v-2.2C95.6%208.9%2094.3%207%2091%207m-31.8.3v11.4c0%202.7.9%204%202.9%204a3.46%203.46%200%200%200%203.2-2.1h.1l.3%201.8h2.7V7.3H65v12a1.51%201.51%200%200%201-1.4%201c-.7%200-1-.6-1-1.9V7.3zm22.3%200v15.1h3.2V7.3zm9.4%202c1%200%201.3%201%201.3%203.1v4.7c0%202.2-.4%203.1-1.3%203.1s-1.2-.9-1.2-3.1v-4.7c0-2%20.2-3.1%201.2-3.1M75%209.4a1.56%201.56%200%200%201%201.3.8v8.5c-.2.9-.9%201.4-1.4%201.3-1%200-1.3-1-1.3-4.4v-1.9c0-3.3.3-4.3%201.4-4.3%22/%3E%3C/svg%3E");
}
:root[dark],
:root[dark] html,
:root[dark] html[dark],
:root[dark] html[dark][dark],
:root[dark][dark],
:root[dark][light],
:root[dark] [light],
:root[dark] html[light],
:root[dark] html[light][light] {
  --yt-spec-black-pure-alpha-80: (null);
  --yt-spec-black-pure-alpha-60: (null);
  --yt-spec-black-1-alpha-98: (null);
  --yt-spec-black-1-alpha-95: (null);
  --iron-icon-fill-color: unset;
  --yt-spec-text-primary: #cdd6f4;
  --ytcp-text-primary: #cdd6f4;
  --ytcp-text-primary-inverse: #1e1e2e;
  --ytcp-static-overlay-text-primary-inverse: #1e1e2e;
  --ytcp-wordmark-text: #cdd6f4;
  --ytcp-text-secondary: #a6adc8;
  --ytcp-text-disabled: #bac2de;
  --ytcp-overlay-text-primary: #9399b2;
  --ytcp-general-background-a: #1e1e2e;
  --yt-spec-base-background: #1e1e2e;
  --yt-spec-black-3: #1e1e2e;
  --yt-spec-brand-background-solid: #181825;
  --ytcp-brand-background-solid: #181825;
  --yt-spec-raised-background: #181825;
  --ytcp-general-background-b: #181825;
  --ytcp-analytics-reach-background: #181825;
  --yt-spec-black-2: #181825;
  --ytcp-general-background-c: #11111b;
  --ytcp-menu-background: #313244;
  --ytcp-container-border-color: #313244;
  --ytcp-container-hovered-border-color: #313244;
  --ytcp-line-divider-solid: #313244;
  --ytcp-container-border-color-inverse: #a6adc8;
  --ytcp-line-divider-solid-inverse: #a6adc8;
  --ytcp-call-to-action: #cba6f7;
  --ytcp-call-to-action-inverse: #181825;
  --ytcp-call-to-action-raised-background: #cba6f7;
  --yt-spec-brand-button-background: #cba6f7;
  --ytcp-call-to-action-raised-disabled: #585b70;
  --ytcp-call-to-action-raised-disabled-background: #9399b2;
  --ytcp-call-to-action-raised-background-inverse: #1e1e2e;
  --ytcp-call-to-action-raised-disabled-inverse: #585b70;
  --ytcp-call-to-action-raised-disabled-background-inverse: #9399b2;
  --yt-spec-brand-background-primary: #313244;
  --yt-compact-link-icon-color: #9399b2;
  --ytcp-icon-active: #cba6f7;
  --ytcp-icon-inactive: #9399b2;
  --ytcp-icon-disabled: #6c7086;
  --ytcp-icon-active-inverse: #7f849c;
  --ytcp-icon-disabled-inverse: #bac2de;
  --ytcp-error-red: #f38ba8;
  --ytcp-badge-red: #f38ba8;
  --ytcp-error-red-inverse: #f38ba8;
  --ytcp-themed-red-inverse: #f38ba8;
  --ytcp-themed-red: #cba6f7;
  --ytcp-themed-blue: #cba6f7;
  --ytcp-badge-blue: rgba(203, 166, 247, 0.3);
  --ytcp-badge-blue-solid: #89b4fa;
  --ytcp-themed-blue-inverse: #89b4fa;
  --ytcp-themed-green: #a6e3a1;
  --ytmus-genre-primary-melon: #a6e3a1;
  --ytcp-themed-green-inverse: #a6e3a1;
  --ytcp-analytics-pine: #a6e3a1;
  --ytcp-analytics-pine-inverse: #a6e3a1;
  --ytcp-analytics-parrot: #a6e3a1;
  --ytcp-themed-yellow: #fab387;
  --ytmus-genre-primary-gold: #fab387;
  --ytcp-yellow-inverse: #fab387;
  --ytcp-badge-yellow: #fab387;
  --ytcp-analytics-yellow: #fab387;
  --ytcp-analytics-apricot: #fab387;
  --ytcp-suggested-action: #94e2d5;
  --ytcp-analytics-overview: #94e2d5;
  --ytcp-analytics-revenue: #94e2d5;
  --ytcp-analytics-default-secondary: #94e2d5;
  --ytcp-analytics-royal-blue: #b4befe;
  --ytcp-analytics-reach: #b4befe;
  --ytcp-analytics-audience: #b4befe;
  --ytcp-analytics-engagement: #f5c2e7;
  --ytcp-analytics-revenue-secondary: #f5c2e7;
  --ytcp-analytics-bubblegum: #f2cdcd;
  --ytmus-genre-primary-ruby: #f2cdcd;
  --ytmus-genre-primary-salmon: #cba6f7;
  --ytmus-genre-primary-orange: #eba0ac;
  --ytmus-genre-primary-sky: #89dceb;
  --ytmus-genre-primary-sky-inverse: #89dceb;
  --yt-spec-badge-chip-background: #45475a;
  --ytcp-focus-inverse: #cba6f7;
  --ytcp-focus: #cba6f7;
  --ytcp-selected-item: #cba6f7;
  --ytcp-hover-item: #9399b2;
  --ytcp-chip-active-focus: #cba6f7;
  --ytcp-playhead: #9399b2;
  --ytcp-playhead-inverse: #9399b2;
}
:root[dark] ytcp-button.destructive.ytls-error-dialog {
  color: #1e1e2e;
}
:root[dark] yt-formatted-string.ytls-error-dialog,
:root[dark] tp-yt-iron-icon.ytls-error-dialog {
  color: #cdd6f4;
}
:root [src="https://www.gstatic.com/youtube/img/creator/yt_studio_logo_white.svg"] {
  content: url("data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2097.55%2024%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23cba6f7%22%20d%3D%22M17.1%200S6.4%200%203.8.7a4.15%204.15%200%200%200-3%203C0%206.4%200%2012%200%2012a45%2045%200%200%200%20.7%208.2%204.32%204.32%200%200%200%203%203c2.7.8%2013.4.8%2013.4.8s10.7%200%2013.4-.7a4.32%204.32%200%200%200%203-3%2045%2045%200%200%200%20.7-8.2s.1-5.7-.6-8.3a4.32%204.32%200%200%200-3-3C27.9%200%2017.1%200%2017.1%200m-3.4%206.9%208.9%205.1-8.9%205.1z%22/%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20d%3D%22M76.3.9v4.4c0%201.1%200%202%20.1%203.3h-.1A3.36%203.36%200%200%200%2073.4%207c-2.3%200-3.3%202-3.3%206.6V16c0%204.9.8%206.6%203.2%206.6a3.42%203.42%200%200%200%203.2-2.4h.1l.4%202.1h2.6V.9zm6.688.4c-1.126.032-1.687.55-1.687%202.1%200%201.7.599%202.1%201.799%202.1s1.8-.5%201.8-2.1-.6-2.1-1.8-2.1zM45%201.4c-3.6%200-5%201.7-5%204.9s1.1%204.5%203.7%206.8c1.6%201.4%202.8%202.5%202.8%204.8%200%201.5-.4%202.2-1.6%202.2s-1.7-.8-1.6-3.6h-3.1c-.6%204.2.8%206.1%204.5%206.2%203.5%200%205-1.5%205-5.4%200-3.1-1.3-4.4-3.7-6.6-1.9-1.8-2.8-2.5-2.8-4.6%200-1.4.3-2.2%201.6-2.2s1.6%201.1%201.5%203.9l3.1-.2c.5-4.2-.8-6.2-4.4-6.2m7.6%201.4-.4%204.5h-1.4v2.6H52v8.8c0%202.7.4%203.8%202.6%203.8a7.4%207.4%200%200%200%203.1-.6l-.6-2.2a5.2%205.2%200%200%201-1.3.2c-.5%200-.7-.3-.7-1.7V9.9h2.2V7.3H55V2.8zM91%207c-3.3%200-4.7%201.8-4.7%206.7v2.2c0%204.7%201.1%206.7%204.6%206.7s4.7-2%204.7-6.7v-2.2C95.6%208.9%2094.3%207%2091%207m-31.8.3v11.4c0%202.7.9%204%202.9%204a3.46%203.46%200%200%200%203.2-2.1h.1l.3%201.8h2.7V7.3H65v12a1.51%201.51%200%200%201-1.4%201c-.7%200-1-.6-1-1.9V7.3zm22.3%200v15.1h3.2V7.3zm9.4%202c1%200%201.3%201%201.3%203.1v4.7c0%202.2-.4%203.1-1.3%203.1s-1.2-.9-1.2-3.1v-4.7c0-2%20.2-3.1%201.2-3.1M75%209.4a1.56%201.56%200%200%201%201.3.8v8.5c-.2.9-.9%201.4-1.4%201.3-1%200-1.3-1-1.3-4.4v-1.9c0-3.3.3-4.3%201.4-4.3%22/%3E%3C/svg%3E");
}
:root,
:root html,
:root html[dark],
:root html[dark][dark],
:root[dark],
:root[light],
:root [light],
:root html[light],
:root html[light][light] {
  --yt-spec-black-pure-alpha-80: (null);
  --yt-spec-black-pure-alpha-60: (null);
  --yt-spec-black-1-alpha-98: (null);
  --yt-spec-black-1-alpha-95: (null);
  --iron-icon-fill-color: unset;
  --yt-spec-text-primary: #cdd6f4;
  --ytcp-text-primary: #cdd6f4;
  --ytcp-text-primary-inverse: #1e1e2e;
  --ytcp-static-overlay-text-primary-inverse: #1e1e2e;
  --ytcp-wordmark-text: #cdd6f4;
  --ytcp-text-secondary: #a6adc8;
  --ytcp-text-disabled: #bac2de;
  --ytcp-overlay-text-primary: #9399b2;
  --ytcp-general-background-a: #1e1e2e;
  --yt-spec-base-background: #1e1e2e;
  --yt-spec-black-3: #1e1e2e;
  --yt-spec-brand-background-solid: #181825;
  --ytcp-brand-background-solid: #181825;
  --yt-spec-raised-background: #181825;
  --ytcp-general-background-b: #181825;
  --ytcp-analytics-reach-background: #181825;
  --yt-spec-black-2: #181825;
  --ytcp-general-background-c: #11111b;
  --ytcp-menu-background: #313244;
  --ytcp-container-border-color: #313244;
  --ytcp-container-hovered-border-color: #313244;
  --ytcp-line-divider-solid: #313244;
  --ytcp-container-border-color-inverse: #a6adc8;
  --ytcp-line-divider-solid-inverse: #a6adc8;
  --ytcp-call-to-action: #cba6f7;
  --ytcp-call-to-action-inverse: #181825;
  --ytcp-call-to-action-raised-background: #cba6f7;
  --yt-spec-brand-button-background: #cba6f7;
  --ytcp-call-to-action-raised-disabled: #585b70;
  --ytcp-call-to-action-raised-disabled-background: #9399b2;
  --ytcp-call-to-action-raised-background-inverse: #1e1e2e;
  --ytcp-call-to-action-raised-disabled-inverse: #585b70;
  --ytcp-call-to-action-raised-disabled-background-inverse: #9399b2;
  --yt-spec-brand-background-primary: #313244;
  --yt-compact-link-icon-color: #9399b2;
  --ytcp-icon-active: #cba6f7;
  --ytcp-icon-inactive: #9399b2;
  --ytcp-icon-disabled: #6c7086;
  --ytcp-icon-active-inverse: #7f849c;
  --ytcp-icon-disabled-inverse: #bac2de;
  --ytcp-error-red: #f38ba8;
  --ytcp-badge-red: #f38ba8;
  --ytcp-error-red-inverse: #f38ba8;
  --ytcp-themed-red-inverse: #f38ba8;
  --ytcp-themed-red: #cba6f7;
  --ytcp-themed-blue: #cba6f7;
  --ytcp-badge-blue: rgba(203, 166, 247, 0.3);
  --ytcp-badge-blue-solid: #89b4fa;
  --ytcp-themed-blue-inverse: #89b4fa;
  --ytcp-themed-green: #a6e3a1;
  --ytmus-genre-primary-melon: #a6e3a1;
  --ytcp-themed-green-inverse: #a6e3a1;
  --ytcp-analytics-pine: #a6e3a1;
  --ytcp-analytics-pine-inverse: #a6e3a1;
  --ytcp-analytics-parrot: #a6e3a1;
  --ytcp-themed-yellow: #fab387;
  --ytmus-genre-primary-gold: #fab387;
  --ytcp-yellow-inverse: #fab387;
  --ytcp-badge-yellow: #fab387;
  --ytcp-analytics-yellow: #fab387;
  --ytcp-analytics-apricot: #fab387;
  --ytcp-suggested-action: #94e2d5;
  --ytcp-analytics-overview: #94e2d5;
  --ytcp-analytics-revenue: #94e2d5;
  --ytcp-analytics-default-secondary: #94e2d5;
  --ytcp-analytics-royal-blue: #b4befe;
  --ytcp-analytics-reach: #b4befe;
  --ytcp-analytics-audience: #b4befe;
  --ytcp-analytics-engagement: #f5c2e7;
  --ytcp-analytics-revenue-secondary: #f5c2e7;
  --ytcp-analytics-bubblegum: #f2cdcd;
  --ytmus-genre-primary-ruby: #f2cdcd;
  --ytmus-genre-primary-salmon: #cba6f7;
  --ytmus-genre-primary-orange: #eba0ac;
  --ytmus-genre-primary-sky: #89dceb;
  --ytmus-genre-primary-sky-inverse: #89dceb;
  --yt-spec-badge-chip-background: #45475a;
  --ytcp-focus-inverse: #cba6f7;
  --ytcp-focus: #cba6f7;
  --ytcp-selected-item: #cba6f7;
  --ytcp-hover-item: #9399b2;
  --ytcp-chip-active-focus: #cba6f7;
  --ytcp-playhead: #9399b2;
  --ytcp-playhead-inverse: #9399b2;
}
:root ytcp-button.destructive.ytls-error-dialog {
  color: #1e1e2e;
}
:root yt-formatted-string.ytls-error-dialog,
:root tp-yt-iron-icon.ytls-error-dialog {
  color: #cdd6f4;
}


html[darker-dark-theme] {
  background-color: #1e1e2e !important;
  color: #cdd6f4 !important;
  /* Ambient mode */
  /* Comment box */
  /* Bottom bar */
  /* Chips */
  /* Buttons */
}
html[darker-dark-theme] #cinematics {
  mix-blend-mode: lighten;
}
html[darker-dark-theme] .mobile-topbar-header[data-mode="watch"],
html[darker-dark-theme] ytm-mobile-topbar-renderer:not([ambient-topbar]) {
  background: #1e1e2e;
}
html[darker-dark-theme] .mobile-topbar-header[data-mode="watch"] .mobile-topbar-logo,
html[darker-dark-theme] .mobile-topbar-header[data-mode="watch"] .mobile-topbar-title,
html[darker-dark-theme] .mobile-topbar-header[data-mode="watch"] .mobile-topbar-header-content {
  color: #cdd6f4;
}
html[darker-dark-theme] .yt-spec-bottom-sheet-layout__bottom-sheet-renderer-container,
html[darker-dark-theme] .modern-styling {
  background: #313244;
}
html[darker-dark-theme] .yt-spec-bottom-sheet-layout__bottom-sheet-layout-header-wrapper {
  border-bottom-color: #313244;
}
html[darker-dark-theme] .yt-spec-bottom-sheet-layout__bottom-sheet-content {
  color: #cdd6f4;
}
html[darker-dark-theme] .engagement-panel-container {
  background: #181825;
}
html[darker-dark-theme] ytm-pivot-bar-renderer {
  background: #181825;
  color: #cdd6f4;
  border-top-color: #313244;
}
html[darker-dark-theme] .chip-bar {
  background-color: #1e1e2e;
}
html[darker-dark-theme] [chip-style*="STYLE_"] .chip-container {
  color: #cdd6f4;
  background-color: #313244;
}
html[darker-dark-theme] [chip-style*="STYLE_"].selected .chip-container {
  color: #11111b;
  background-color: #cba6f7;
}
html[darker-dark-theme] .yt-spec-touch-feedback-shape--touch-response .yt-spec-touch-feedback-shape__fill {
  background-color: #cdd6f4;
}
html[darker-dark-theme] .yt-spec-touch-feedback-shape--touch-response .yt-spec-touch-feedback-shape__stroke {
  border-color: #45475a;
}
html[darker-dark-theme] .yt-spec-touch-feedback-shape--overlay-touch-response-inverse .yt-spec-touch-feedback-shape__fill {
  background-color: #cba6f7;
}
html[darker-dark-theme] .yt-spec-touch-feedback-shape--overlay-touch-response .yt-spec-touch-feedback-shape__fill {
  background-color: #cdd6f4;
}
html {
  background-color: #1e1e2e !important;
  color: #cdd6f4 !important;
  /* Ambient mode */
  /* Comment box */
  /* Bottom bar */
  /* Chips */
  /* Buttons */
}
html #cinematics {
  mix-blend-mode: lighten;
}
html .mobile-topbar-header[data-mode="watch"],
html ytm-mobile-topbar-renderer:not([ambient-topbar]) {
  background: #1e1e2e;
}
html .mobile-topbar-header[data-mode="watch"] .mobile-topbar-logo,
html .mobile-topbar-header[data-mode="watch"] .mobile-topbar-title,
html .mobile-topbar-header[data-mode="watch"] .mobile-topbar-header-content {
  color: #cdd6f4;
}
html .yt-spec-bottom-sheet-layout__bottom-sheet-renderer-container,
html .modern-styling {
  background: #313244;
}
html .yt-spec-bottom-sheet-layout__bottom-sheet-layout-header-wrapper {
  border-bottom-color: #313244;
}
html .yt-spec-bottom-sheet-layout__bottom-sheet-content {
  color: #cdd6f4;
}
html .engagement-panel-container {
  background: #181825;
}
html ytm-pivot-bar-renderer {
  background: #181825;
  color: #cdd6f4;
  border-top-color: #313244;
}
html .chip-bar {
  background-color: #1e1e2e;
}
html [chip-style*="STYLE_"] .chip-container {
  color: #cdd6f4;
  background-color: #313244;
}
html [chip-style*="STYLE_"].selected .chip-container {
  color: #11111b;
  background-color: #cba6f7;
}
html .yt-spec-touch-feedback-shape--touch-response .yt-spec-touch-feedback-shape__fill {
  background-color: #cdd6f4;
}
html .yt-spec-touch-feedback-shape--touch-response .yt-spec-touch-feedback-shape__stroke {
  border-color: #45475a;
}
html .yt-spec-touch-feedback-shape--overlay-touch-response-inverse .yt-spec-touch-feedback-shape__fill {
  background-color: #cba6f7;
}
html .yt-spec-touch-feedback-shape--overlay-touch-response .yt-spec-touch-feedback-shape__fill {
  background-color: #cdd6f4;
}

/* ==UserStyle==
@name YouTube Catppuccin
@namespace github.com/catppuccin/userstyles/styles/youtube
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/youtube
@version 2026.02.18.1
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/youtube/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Ayoutube
@description Soothing pastel theme for YouTube
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]

@var checkbox logo "Enable YouTube logo" 1
@var checkbox oled "Enable black bars" 0
@var checkbox sponsorBlock "Enable SponsorBlock segments" 1
@var checkbox hideColorSampleTint "Hide color-sampled tint" 1
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

:root[dark] {
  color-scheme: dark !important;
  color: #cdd6f4 !important;
  background: #1e1e2e !important;
  /* Misc */
  /* Selected chapter */
  /* Skeleton */
  /* Ambient mode */
  /* Icons */
  /* verification badge */
  /* Buttons */
  /* Search box */
  /* "Suggestion removed" */
  /* Video description */
  /* Thumbnails */
  /* Panels, popups, tooltips */
  /* Video player */
  /* Video highlight */
  /* Shorts titles and views on homepage */
  /* Buy super thanks bar */
  /* Channel pages */
  /* channel details */
  /* Profiles */
  /* Horizontal list arrows */
  /* Live chat replay */
  /* AI-generated video summary */
  /* Playlist collapsed sidebar */
  /* Playlist metadata */
  /* Playlist titles in search results */
  /* Category tag pills */
  /* Vertical ellipsis menu on main page */
}
:root[dark] ::selection {
  background-color: rgba(203, 166, 247, 0.3) !important;
}
:root[dark] input::placeholder,
:root[dark] textarea::placeholder {
  color: #a6adc8 !important;
}
:root[dark],
:root[dark] [dark],
:root[dark] [system-icons],
:root[dark] [darker-dark-theme],
:root[dark][dark],
:root[dark][system-icons],
:root[dark][darker-dark-theme] {
  --efyt-control-bar-background-color: #181825 !important;
  --dimmer-text: #cdd6f4 !important;
  --yt-spec-white-1: #cdd6f4 !important;
  --yt-spec-white-2: #a6adc8 !important;
  --yt-spec-white-3: #bac2de !important;
  --yt-spec-white-4: #a9b3d6 !important;
  --yt-spec-black-1: #7f849c !important;
  --yt-spec-black-2: #6c7086 !important;
  --yt-spec-black-3: #585b70 !important;
  --yt-spec-black-4: #45475a !important;
  --yt-spec-black-pure: #313244 !important;
  --yt-spec-grey-1: #cdd6f4 !important;
  --yt-spec-grey-2: #a6adc8 !important;
  --yt-spec-grey-3: #bac2de !important;
  --yt-spec-grey-4: #9399b2 !important;
  --yt-spec-grey-5: #7f849c !important;
  --yt-brand-youtube-red: #cba6f7 !important;
  --yt-brand-medium-red: #cba6f7 !important;
  --yt-brand-light-red: #cba6f7 !important;
  --yt-spec-red-30: #fab387 !important;
  --yt-spec-red-70: #f38ba8 !important;
  --yt-spec-red-indicator: #cba6f7 !important;
  --yt-spec-pale-blue: #89dceb !important;
  --yt-spec-light-blue: #89dceb !important;
  --yt-spec-dark-blue: #74c7ec !important;
  --yt-spec-navy-blue: #94e2d5 !important;
  --yt-spec-light-green: #a6e3a1 !important;
  --yt-spec-dark-green: #a6e3a1 !important;
  --yt-spec-yellow: #fab387 !important;
  --yt-spec-black-pure-alpha-5: #a6adc8 !important;
  --yt-spec-black-pure-alpha-10: #9399b2 !important;
  --yt-spec-black-pure-alpha-15: rgba(17, 17, 27, 0.85) !important;
  --yt-spec-black-pure-alpha-30: rgba(17, 17, 27, 0.7) !important;
  --yt-spec-black-pure-alpha-60: rgba(17, 17, 27, 0.4) !important;
  --yt-spec-black-pure-alpha-80: rgba(17, 17, 27, 0.2) !important;
  --yt-spec-black-1-alpha-98: rgba(17, 17, 27, 0.02) !important;
  --yt-spec-black-1-alpha-95: rgba(17, 17, 27, 0.05) !important;
  --yt-spec-white-1-alpha-10: rgba(205, 214, 244, 0.9) !important;
  --yt-spec-white-1-alpha-20: rgba(205, 214, 244, 0.8) !important;
  --yt-spec-white-1-alpha-25: rgba(205, 214, 244, 0.75) !important;
  --yt-spec-white-1-alpha-30: rgba(205, 214, 244, 0.7) !important;
  --yt-spec-white-1-alpha-70: rgba(205, 214, 244, 0.3) !important;
  --yt-spec-white-1-alpha-95: rgba(205, 214, 244, 0.05) !important;
  --yt-spec-white-1-alpha-98: rgba(205, 214, 244, 0.02) !important;
  --yt-brand-medium-red-alpha-90: rgba(203, 166, 247, 0.1) !important;
  --yt-brand-medium-red-alpha-30: rgba(203, 166, 247, 0.7) !important;
  --yt-brand-light-red-alpha-30: rgba(203, 166, 247, 0.7) !important;
  --yt-spec-light-blue-alpha-30: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-dark-blue-alpha-30: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-base-background: #1e1e2e !important;
  --yt-spec-raised-background: #1e1e2e !important;
  --yt-spec-menu-background: #181825 !important;
  --yt-spec-inverted-background: #cdd6f4 !important;
  --yt-spec-additive-background: #313244 !important;
  --yt-spec-outline: #313244 !important;
  --yt-spec-shadow: rgba(17, 17, 27, 0.75) !important;
  --yt-spec-text-primary: #cdd6f4 !important;
  --yt-spec-text-secondary: #a6adc8 !important;
  --yt-spec-text-disabled: #bac2de !important;
  --yt-spec-text-primary-inverse: #11111b !important;
  --yt-spec-call-to-action: #cba6f7 !important;
  --yt-spec-call-to-action-inverse: #cba6f7 !important;
  --yt-spec-suggested-action: rgba(203, 166, 247, 0.2) !important;
  --yt-spec-suggested-action-inverse: #cdd6f4 !important;
  --yt-spec-icon-active-other: #cdd6f4 !important;
  --yt-spec-button-chip-background-hover: #45475a !important;
  --yt-spec-touch-response: #313244 !important;
  --yt-spec-touch-response-inverse: #cba6f7 !important;
  --yt-spec-brand-icon-active: #cba6f7 !important;
  --yt-spec-brand-button-background: #cba6f7 !important;
  --yt-spec-brand-link-text: #74c7ec !important;
  --yt-spec-wordmark-text: #cdd6f4 !important;
  --yt-spec-error-indicator: #f38ba8 !important;
  --yt-spec-themed-blue: #cba6f7 !important;
  --yt-spec-themed-green: #a6e3a1 !important;
  --yt-spec-ad-indicator: #94e2d5 !important;
  --yt-spec-themed-overlay-background: rgba(17, 17, 27, 0.8) !important;
  --yt-spec-commerce-badge-background: #a6e3a1 !important;
  --yt-spec-static-brand-red: #cba6f7 !important;
  --yt-spec-static-brand-white: #cdd6f4 !important;
  --yt-spec-static-brand-black: #1e1e2e !important;
  --yt-spec-static-clear-color: #11111b !important;
  --yt-spec-static-clear-black: #11111b !important;
  --yt-spec-static-ad-yellow: #fab387 !important;
  --yt-spec-static-grey: #a6adc8 !important;
  --yt-spec-static-overlay-background-solid: #11111b !important;
  --yt-spec-static-overlay-background-heavy: #11111b !important;
  --yt-spec-static-overlay-background-medium: rgba(17, 17, 27, 0.5) !important;
  --yt-spec-static-overlay-background-light: rgba(17, 17, 27, 0.9) !important;
  --yt-spec-static-overlay-text-primary: #cdd6f4 !important;
  --yt-spec-static-overlay-text-secondary: rgba(166, 173, 200, 0.3) !important;
  --yt-spec-static-overlay-text-disabled: rgba(166, 173, 200, 0.7) !important;
  --yt-spec-static-overlay-call-to-action: #cba6f7 !important;
  --yt-spec-static-overlay-icon-active-other: #11111b !important;
  --yt-spec-static-overlay-icon-inactive: #45475a !important;
  --yt-spec-static-overlay-icon-disabled: #585b70 !important;
  --yt-spec-static-overlay-button-primary: #cba6f7 !important;
  --yt-spec-static-overlay-touch-response: #7f849c !important;
  --yt-spec-static-overlay-touch-response-inverse: #45475a !important;
  --yt-spec-static-overlay-background-brand: #cba6f7 !important;
  --yt-spec-assistive-feed-themed-gradient-1: #a6adc8 !important;
  --yt-spec-assistive-feed-themed-gradient-2: #b4befe !important;
  --yt-spec-assistive-feed-themed-gradient-3: #f38ba8 !important;
  --yt-spec-brand-background-solid: #1e1e2e !important;
  --yt-spec-brand-background-primary: #1e1e2e !important;
  --yt-spec-brand-background-secondary: #181825 !important;
  --yt-spec-general-background-a: #1e1e2e !important;
  --yt-spec-general-background-b: #1e1e2e !important;
  --yt-spec-general-background-c: #11111b !important;
  --yt-spec-error-background: #1e1e2e !important;
  --yt-spec-10-percent-layer: #45475a !important;
  --yt-spec-snackbar-background: #181825 !important;
  --yt-spec-snackbar-background-updated: #181825 !important;
  --yt-spec-badge-chip-background: #313244 !important;
  --yt-spec-verified-badge-background: #6c7086 !important;
  --yt-spec-call-to-action-fadeoutd: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-call-to-action-hover: #cba6f7 !important;
  --yt-spec-brand-button-background-hover: #cba6f7 !important;
  --yt-spec-brand-link-text-fadeoutd: rgba(203, 166, 247, 0.7) !important;
  --yt-spec-filled-button-focus-outline: #313244 !important;
  --yt-spec-static-overlay-button-hover: #45475a !important;
  --yt-spec-mono-filled-hover: #45475a !important;
  --yt-spec-commerce-filled-hover: #cba6f7 !important;
  --yt-spec-mono-tonal-hover: #45475a !important;
  --yt-spec-commerce-tonal-hover: #585b70 !important;
  --yt-spec-static-overlay-filled-hover: #7f849c !important;
  --yt-spec-static-overlay-tonal-hover: #45475a !important;
  --yt-spec-paper-tab-ink: rgba(205, 214, 244, 0.7) !important;
  --yt-spec-filled-button-text: #cdd6f4 !important;
  --yt-spec-selected-nav-text: #cdd6f4 !important;
  --iron-icon-fill-color: #cdd6f4 !important;
  /* Search bar */
  --ytd-searchbox-border-color: #313244 !important;
  --ytd-searchbox-legacy-border-color: #313244 !important;
  --ytd-searchbox-legacy-border-shadow-color: #11111b !important;
  --ytd-searchbox-legacy-button-color: #181825 !important;
  --ytd-searchbox-legacy-button-border-color: #313244 !important;
  --ytd-searchbox-legacy-button-focus-color: #cba6f7 !important;
  --ytd-searchbox-legacy-button-hover-color: #181825 !important;
  --ytd-searchbox-legacy-button-hover-border-color: #313244 !important;
  --ytd-searchbox-legacy-button-icon-color: #cba6f7 !important;
  --ytd-searchbox-background: #1e1e2e !important;
  --ytd-searchbox-text-color: #cdd6f4 !important;
  /* System icons */
  --yt-spec-icon-inactive: #cdd6f4 !important;
  --yt-spec-icon-disabled: #7f849c !important;
  --yt-spec-brand-icon-inactive: #9399b2 !important;
  /* Yt video Page */
  --yt-live-chat-background-color: #1e1e2e !important;
  --yt-live-chat-action-panel-background-color: #1e1e2e !important;
  --yt-live-chat-secondary-background-color: #45475a !important;
  --yt-live-chat-toast-background-color: #585b70 !important;
  --yt-live-chat-mode-change-background-color: #1e1e2e !important;
  --yt-live-chat-secondary-text-color: #a6adc8 !important;
  --yt-live-chat-tertiary-text-color: rgba(205, 214, 244, 0.46) !important;
  --yt-live-chat-text-input-field-inactive-underline-color: #a6adc8 !important;
  --yt-live-chat-text-input-field-placeholder-color: #a6adc8 !important;
  --yt-live-chat-enabled-send-button-color: #cdd6f4 !important;
  --yt-live-chat-disabled-icon-button-color: #bac2de !important;
  --yt-live-chat-picker-button-hover-color: #cba6f7 !important;
  --yt-live-chat-mention-background-color: #cba6f7 !important;
  --yt-live-chat-mention-text-color: #cdd6f4 !important;
  --yt-live-chat-deleted-message-color: #a6adc8 !important;
  --yt-live-chat-deleted-message-bar-color: #bac2de !important;
  --yt-live-chat-reconnect-message-color: #cdd6f4 !important;
  --yt-live-chat-disabled-button-background-color: #6c7086 !important;
  --yt-live-chat-sub-panel-background-color: #1e1e2e !important;
  --yt-live-chat-sub-panel-background-color-transparent: #181825 !important;
  --yt-live-chat-moderator-color: #b4befe !important;
  --yt-live-chat-owner-color: #fab387 !important;
  --yt-live-chat-message-highlight-background-color: #1e1e2e !important;
  --yt-live-chat-sponsor-color: #a6e3a1 !important;
  --yt-live-chat-overlay-color: rgba(24, 24, 37, 0.5) !important;
  --yt-live-chat-dialog-background-color: #1e1e2e !important;
  --yt-emoji-picker-variant-selector-bg-color: #1e1e2e !important;
  --yt-live-chat-moderation-mode-hover-background-color: rgba(24, 24, 37, 0.7) !important;
  --yt-grey: #a6adc8 !important;
  --yt-live-chat-text-input-field-suggestion-background-color: #a6adc8 !important;
  --yt-live-chat-text-input-field-suggestion-background-color-hover: #bac2de !important;
  --yt-emoji-picker-search-background-color: #313244 !important;
  --yt-emoji-picker-search-color: #cdd6f4 !important;
  --yt-emoji-picker-search-placeholder-color: #cba6f7 !important;
  --yt-live-chat-slider-active-color: #cba6f7 !important;
  --yt-live-chat-slider-container-color: #313244 !important;
  --yt-live-chat-slider-markers-color: #cdd6f4 !important;
  --yt-live-chat-banner-gradient-scrim: linear-gradient(#181825, transparent) !important;
  --yt-live-chat-action-panel-gradient-scrim: linear-gradient(to top, #181825, transparent) !important;
  --yt-live-chat-automod-button-background-color-hover: rgba(17, 17, 27, 0.5) !important;
  --yt-live-chat-automod-button-explanation-color: rgba(203, 166, 247, 0.3) !important;
  --yt-live-chat-shimmer-background-color: rgba(17, 17, 27, 0.6) !important;
  --yt-live-chat-shimmer-linear-gradient: linear-gradient(0deg, rgba(205, 214, 244, 0.9) 40%, rgba(30, 30, 46, 0.7) 50%, rgba(205, 214, 244, 0.9) 60%) !important;
  --yt-live-chat-vem-background-color: #181825 !important;
  --yt-live-chat-product-picker-icon-color: rgba(205, 214, 244, 0.5) !important;
  --yt-live-chat-product-picker-hover-color: #6c7086 !important;
  --yt-live-chat-product-picker-disabled-icon-color: rgba(205, 214, 244, 0.7) !important;
  --yt-live-chat-action-panel-background-color-transparent: (null) !important;
  --paper-tooltip-background: #6c7086 !important;
  --paper-tooltip-text-color: #cdd6f4 !important;
  /* Links */
  --yt-endpoint-color: #cba6f7 !important;
  --yt-endpoint-visited-color: #cba6f7 !important;
  --yt-endpoint-hover-color: #cba6f7 !important;
  --sb-dark-red-outline: #cba6f7 !important;
  --sb-main-bg-color: #1e1e2e !important;
  --sb-main-fg-color: #cdd6f4 !important;
  --sb-grey-bg-color: #1e1e2e !important;
  --sb-grey-fg-color: #a6adc8 !important;
  --sb-red-bg-color: #cba6f7 !important;
  --sb-category-sponsor: #a6e3a1 !important;
  --sb-category-selfpromo: #f9e2af !important;
  --sb-category-exclusive_access: #94e2d5 !important;
  --sb-category-interaction: #cba6f7 !important;
  --sb-category-poi_highlight: #f5c2e7 !important;
  --sb-category-intro: #89dceb !important;
  --sb-category-outro: #89b4fa !important;
  --sb-category-preview: #74c7ec !important;
  --sb-category-filler: #b4befe !important;
  --sb-category-music_offtopic: #fab387 !important;
}
:root[dark]:not(.style-scope) {
  --primary-text-color: #cdd6f4 !important;
  --primary-background-color: #1e1e2e !important;
  --secondary-text-color: #a6adc8 !important;
  --disabled-text-color: #bac2de !important;
  --divider-color: #6c7086 !important;
  --error-color: #f38ba8 !important;
  --primary-color: #cba6f7 !important;
  --light-primary-color: #cba6f7 !important;
  --dark-primary-color: #89b4fa !important;
  --accent-color: #cba6f7 !important;
  --light-accent-color: #cba6f7 !important;
  --dark-accent-color: #cba6f7 !important;
  --light-theme-background-color: #1e1e2e !important;
  --light-theme-base-color: #cdd6f4 !important;
  --light-theme-text-color: #cdd6f4 !important;
  --light-theme-secondary-color: #a6adc8 !important;
  --light-theme-disabled-color: #bac2de !important;
  --light-theme-divider-color: #6c7086 !important;
  --dark-theme-background-color: #1e1e2e !important;
  --dark-theme-base-color: #cdd6f4 !important;
  --dark-theme-text-color: #cdd6f4 !important;
  --dark-theme-secondary-color: #a6adc8 !important;
  --dark-theme-disabled-color: #bac2de !important;
  --dark-theme-divider-color: #6c7086 !important;
}
:root[dark] .yt-spec-touch-feedback-shape__hover-effect {
  background-color: #313244 !important;
}
:root[dark] ytd-watch-metadata {
  --yt-saturated-raised-background: #45475a !important;
  --yt-saturated-text-primary: #cdd6f4 !important;
  --yt-saturated-text-secondary: #bac2de !important;
}
:root[dark] .yt-core-attributed-string--link-inherit-color {
  color: #cdd6f4 !important;
}
:root[dark] .yt-core-attributed-string--highlight-text-decorator {
  background-color: #585b70 !important;
}
:root[dark] #channel-name.ytd-video-meta-block {
  --yt-endpoint-color: #cba6f7 !important;
  --yt-endpoint-visited-color: #cba6f7 !important;
  color: #cba6f7 !important;
}
:root[dark] .yt-page-navigation-progress {
  background: #cba6f7 !important;
}
:root[dark] ytd-macro-markers-list-item-renderer {
  --ytd-macro-markers-list-item-background-color: #313244 !important;
  --ytd-macro-markers-list-item-title-color: #cdd6f4 !important;
  --ytd-macro-markers-list-item-secondary-color: #bac2de !important;
  --ytd-macro-markers-list-item-timestamp-background-color: #45475a !important;
}
:root[dark] ytd-playlist-panel-video-renderer {
  --yt-lightsource-section2-color: #45475a !important;
  --yt-lightsource-section4-color: #585b70 !important;
  --yt-lightsource-primary-title-color: #cdd6f4 !important;
  --yt-lightsource-secondary-title-color: #cdd6f4 !important;
  --yt-active-playlist-panel-background-color: #313244 !important;
}
:root[dark] ytd-playlist-panel-renderer[collapsible][collapsed][use-color-palette] .header.ytd-playlist-panel-renderer {
  --iron-icon-fill-color: #cdd6f4 !important;
  background-color: #1e1e2e !important;
}
:root[dark] #container.ytd-masthead {
  --iron-icon-fill-color: #cdd6f4 !important;
}
:root[dark] #background.ytd-masthead,
:root[dark] #frosted-glass {
  --yt-frosted-glass-desktop: #1e1e2e !important;
  --yt-spec-frosted-glass-desktop: #1e1e2e !important;
}
:root[dark] ytd-feed-filter-chip-bar-renderer[expand-instead-of-scroll] #chips-wrapper.ytd-feed-filter-chip-bar-renderer {
  --iron-icon-fill-color: #cdd6f4 !important;
  background-color: #1e1e2e !important;
}
:root[dark] #ytd-player #container {
  background: #11111b !important;
}
:root[dark] .ytp-progress-list {
  background: rgba(49, 50, 68, 0.8) !important;
}
:root[dark] .ytp-load-progress {
  background: #6c7086 !important;
}
:root[dark] ytd-expandable-metadata-renderer {
  --yt-lightsource-section1-color: #1e1e2e !important;
  --yt-lightsource-section2-color: #313244 !important;
  --yt-lightsource-section3-color: #45475a !important;
  --yt-lightsource-section4-color: #585b70 !important;
  --yt-lightsource-primary-title-color: #cdd6f4 !important;
  --yt-lightsource-secondary-title-color: #a6adc8 !important;
}
:root[dark] yt-live-chat-renderer {
  --yt-button-default-text-color: #cdd6f4 !important;
  --yt-button-default-background-color: #1e1e2e !important;
  --yt-button-dark-text-color: #1e1e2e !important;
  --yt-button-dark-background-color: #cba6f7 !important;
  --yt-button-payment-background-color: #cba6f7 !important;
}
:root[dark] yt-icon-button.yt-live-chat-item-list-renderer {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] yt-icon-button.yt-live-chat-item-list-renderer:hover {
  background-color: #bd8ff5 !important;
}
:root[dark] ytd-author-comment-badge-renderer:not(
    [style*="--ytd-author-comment-badge-icon-background-color: transparent;"]
  ) {
  --yt-basic-background-color: #313244 !important;
  --yt-basic-foreground-title-color: #313244 !important;
  --ytd-author-comment-badge-background-color: #313244 !important;
  --ytd-author-comment-badge-name-color: #cdd6f4 !important;
  --ytd-author-comment-badge-icon-color: #cdd6f4 !important;
}
:root[dark] #guide-skeleton,
:root[dark] #home-container-skeleton,
:root[dark] #home-chips {
  background-color: #1e1e2e !important;
  z-index: -1 !important;
}
:root[dark] #guide-skeleton .guide-ghost-icon,
:root[dark] #guide-skeleton .guide-ghost-text,
:root[dark] .masthead-skeleton-icon,
:root[dark] #home-page-skeleton .skeleton-bg-color,
:root[dark] .watch-skeleton .skeleton-bg-color {
  background-color: #45475a !important;
}
:root[dark] #cinematics,
:root[dark] #cinematic-container {
  mix-blend-mode: lighten !important;
}
:root[dark] .ytp-settings-button.ytp-hd-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-hdr-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-4k-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-5k-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-8k-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-3d-badge-grey::after,
:root[dark] .ytp-settings-button.ytp-3d-badge::after {
  background-color: #cba6f7 !important;
}
:root[dark] [fill="red"],
:root[dark] [fill="#F00"],
:root[dark] [fill="#FF0000"],
:root[dark] [fill="#f03"],
:root[dark] [fill="#FF0033"] {
  fill: #cba6f7 !important;
}
:root[dark] [fill="white"] {
  fill: #cdd6f4 !important;
}
:root[dark] [src*="https://www.gstatic.com/images/icons/material/system/1x/check_circle_grey600_36dp.png"] {
  filter: brightness(0) saturate(100%) invert(75%) sepia(82%) saturate(1008%) hue-rotate(189deg) brightness(120%) contrast(90%) !important;
}
:root[dark] yt-icon.ytd-logo [fill="white"] {
  fill: #11111b !important;
}
:root[dark] .yt-spec-icon-shape [fill="#FAFAFA"],
:root[dark] .yt-spec-icon-shape [fill="#000"],
:root[dark] .yt-spec-icon-shape [fill="#fff"],
:root[dark] .yt-spec-icon-shape [fill="#FFF"],
:root[dark] .yt-spec-icon-shape [fill="#FFFFFF"] {
  fill: #11111b !important;
}
:root[dark] .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon,
:root[dark] .yt-spec-icon-badge-shape {
  color: #cdd6f4 !important;
}
:root[dark] .yt-spec-icon-badge-shape--type-notification .yt-spec-icon-badge-shape__badge {
  background-color: #cba6f7 !important;
  color: #313244 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
  background-color: #313244 !important;
  /* Accent for filled-in thumbs up (like button) */
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(3,3,3)"],
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(0,0,0)"],
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(255,255,255)"] {
  fill: #cdd6f4 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(0,0,0)"],
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(255,255,255)"] {
  stroke: #cdd6f4 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] {
  fill: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] + [stroke] {
  stroke: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal:hover {
  background-color: #45475a !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline {
  color: #cdd6f4 !important;
  border-color: #585b70 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline:hover {
  background-color: #585b70 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text {
  color: #cdd6f4 !important;
  /* Accent for filled-in thumbs up (like button) */
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text path[d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"] {
  fill: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text:hover {
  background-color: #45475a !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled:hover {
  background-color: #bd8ff5 !important;
}
:root[dark] .yt-spec-button-shape-next--disabled {
  color: #7f849c !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
  background-color: #313244 !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal:hover {
  background-color: #45475a !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
  color: #cdd6f4 !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--outline {
  color: #cdd6f4 !important;
  border-color: #45475a !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--outline:hover {
  background: #313244 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline {
  color: #cba6f7 !important;
  border-color: #585b70 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline:hover {
  background-color: rgba(203, 166, 247, 0.3) !important;
  color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text {
  color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text:hover {
  background-color: rgba(203, 166, 247, 0.3) !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--filled:hover {
  background-color: #d9bdf9 !important;
}
:root[dark] .yt-spec-button-shape-next--disabled.yt-spec-button-shape-next--filled {
  color: #a6adc8 !important;
  background-color: rgba(69, 71, 90, 0.7) !important;
}
:root[dark] ytd-searchbox[has-focus] #container.ytd-searchbox {
  border-color: #cba6f7 !important;
}
:root[dark] .ytSearchboxComponentInputBox,
:root[dark] .ytSearchboxComponentInputBoxDark {
  background: var(--ytd-searchbox-background) !important;
  color: var(--ytd-searchbox-text-color) !important;
  border-color: var(--ytd-searchbox-border-color) !important;
  box-shadow: none !important;
}
:root[dark] .ytSearchboxComponentInputBoxHasFocus,
:root[dark] .ytSearchboxComponentInputBoxHasFocusDark {
  border-color: #cba6f7 !important;
}
:root[dark] .ytSuggestionComponentSuggestionHover:hover,
:root[dark] .ytSuggestionComponentSuggestionHoverDark:hover {
  background: #45475a !important;
}
:root[dark] .ytSearchboxComponentSuggestionsContainer,
:root[dark] .ytSearchboxComponentSuggestionsContainerDark {
  background: var(--yt-spec-raised-background) !important;
  border-color: var(--yt-spec-raised-background) !important;
}
:root[dark] .ytSuggestionComponentSuggestion,
:root[dark] .ytSuggestionComponentSuggestionDark {
  color: var(--ytd-searchbox-text-color) !important;
}
:root[dark] .ytSearchboxComponentSearchButton,
:root[dark] .ytSearchboxComponentSearchButtonDark {
  color: var(--ytd-searchbox-text-color) !important;
  background: #313244 !important;
  border-color: var(--ytd-searchbox-border-color) !important;
}
:root[dark] .ytSearchboxComponentClearButtonIcon,
:root[dark] .ytSearchboxComponentClearButtonIconDark {
  color: var(--ytd-searchbox-text-color) !important;
}
:root[dark] .ytSearchboxComponentReportButton,
:root[dark] .ytSearchboxComponentReportButtonDark,
:root[dark] .ytSuggestionComponentRemoveLink,
:root[dark] .ytSuggestionComponentRemoveLinkDark {
  color: #a6adc8 !important;
}
:root[dark] .sbsb_a {
  background: #313244 !important;
}
:root[dark] .sbdd_b {
  border-color: var(--yt-spec-raised-background) !important;
  background-color: var(--yt-spec-raised-background) !important;
}
:root[dark] .sbpqs_a,
:root[dark] .gsfs {
  color: var(--yt-spec-text-primary) !important;
}
:root[dark] .sbsb_i {
  color: var(--yt-spec-call-to-action) !important;
}
:root[dark] .sbsb_d {
  background-color: var(--yt-spec-additive-background) !important;
}
:root[dark] .sbdd_c {
  visibility: hidden !important;
}
:root[dark] .sbpqs_c {
  color: #7f849c !important;
}
:root[dark] .sbpqs_a::before,
:root[dark] .sbqs_c::before {
  content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20enable-background%3D%22new%200%200%2024%2024%22%20height%3D%2224%22%20viewBox%3D%221%201%2027%2027%22%20width%3D%2224%22%20focusable%3D%22false%22%20style%3D%22width%3A100%25%3Bheight%3A100%25%22%20pointer-events%3D%22none%22%20display%3D%22block%22%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20d%3D%22m20.87%2020.17-5.59-5.59A6.96%206.96%200%200%200%2017%2010c0-3.87-3.13-7-7-7s-7%203.13-7%207a6.995%206.995%200%200%200%2011.58%205.29l5.59%205.59zM10%2016c-3.31%200-6-2.69-6-6s2.69-6%206-6%206%202.69%206%206-2.69%206-6%206%22/%3E%3C/svg%3E") !important;
  background: none !important;
}
:root[dark] .yt-core-attributed-string__link--call-to-action-color {
  color: #cba6f7 !important;
}
:root[dark] .YtwCourseProgressViewModelHostProgressTitle,
:root[dark] .YtwCourseProgressViewModelHostProgressSubtitle {
  color: #cdd6f4 !important;
}
:root[dark] .YtwCourseProgressViewModelHostProgressBar {
  background-color: rgba(205, 214, 244, 0.2) !important;
}
:root[dark] .YtwCourseProgressViewModelHostProgressBar .YtwCourseProgressViewModelHostProgressBarFill {
  background-color: #cdd6f4 !important;
}
:root[dark] .ytwHowThisWasMadeSectionViewModelSectionTitle,
:root[dark] .ytwHowThisWasMadeSectionViewModelBodyHeader {
  color: #cdd6f4 !important;
}
:root[dark] .ytwHowThisWasMadeSectionViewModelBodyText {
  color: #a6adc8 !important;
}
:root[dark] #time-status:has([aria-label="LIVE"]),
:root[dark] .badge[aria-label="LIVE"],
:root[dark] .badge[aria-label="PREMIERE"],
:root[dark] .badge-shape-wiz--live.badge-shape-wiz--overlay,
:root[dark] .badge-shape-wiz--thumbnail-live {
  background: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] #thumbnail [style="background-color: rgba(51, 51, 51, 0.8);"],
:root[dark] .YtInlinePlayerControlsTopRightControlsCircleButton,
:root[dark] .badge-shape-wiz--default.badge-shape-wiz--overlay,
:root[dark] .branding-context-container-inner {
  background-color: #313244 !important;
  color: #cdd6f4 !important;
}
:root[dark] .ytp-sb-unsubscribe {
  background-color: #585b70 !important;
  color: #cdd6f4 !important;
}
:root[dark] .ytp-sb-subscribe {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] ytd-thumbnail-overlay-resume-playback-renderer {
  background-color: #45475a !important;
}
:root[dark] .badge-shape-wiz--thumbnail-default {
  color: #cdd6f4 !important;
  background: rgba(17, 17, 27, 0.8) !important;
}
:root[dark] .ytp-tooltip-bottom-text {
  background: rgba(49, 50, 68, 0.9) !important;
  color: #cdd6f4 !important;
  text-shadow: none !important;
}
:root[dark] .ytp-popup {
  background: rgba(49, 50, 68, 0.9) !important;
  text-shadow: none !important;
}
:root[dark] .ytp-panel-menu,
:root[dark] .ytp-panel-header,
:root[dark] .ytp-panel-footer,
:root[dark] .ytp-menuitem-label,
:root[dark] .ytp-premium-label,
:root[dark] .ytp-menuitem-content,
:root[dark] .ytp-menuitem-label-count,
:root[dark] .ytp-menu-label-secondary,
:root[dark] .ytd-menu-title-renderer {
  color: #cdd6f4 !important;
}
:root[dark] .ytp-panel-header {
  border-bottom-color: #585b70 !important;
}
:root[dark] .yt-spec-dialog-layout {
  background-color: #181825 !important;
}
:root[dark] .ytp-panel-footer-content-link {
  color: #cba6f7 !important;
}
:root[dark] .ytp-panel-back-button {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m19.41%2020.09-4.58-4.59%204.58-4.59L18%209.5l-6%206%206%206z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root[dark] .ytp-menuitem[aria-checked="true"] .ytp-menuitem-toggle-checkbox {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22M9%2016.2%204.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
  background-color: #cba6f7 !important;
}
:root[dark] .ytp-menuitem:not([aria-disabled="true"]):hover {
  background-color: #45475a !important;
}
:root[dark] .ytp-menuitem svg > path:not([fill="none"]) {
  fill: #cdd6f4 !important;
}
:root[dark] .ytp-menuitem[aria-haspopup="true"] .ytp-menuitem-content {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m12.59%2020.34%204.58-4.59-4.58-4.59L14%209.75l6%206-6%206z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root[dark] .ytp-menuitem[role="menuitemradio"][aria-checked="true"] .ytp-menuitem-label {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22M9%2016.2%204.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root[dark] yt-progress-bar .ytProgressBarLineProgressBarPlayed,
:root[dark] yt-progress-bar .ytProgressBarPlayheadProgressBarPlayheadDot {
  background: #cba6f7 !important;
}
:root[dark] yt-progress-bar .ytProgressBarLineProgressBarHovered,
:root[dark] yt-progress-bar .ytProgressBarLineProgressBarBackground {
  background: #cdd6f4 !important;
}
:root[dark] .ytp-cards-button .ytp-cards-button-icon use {
  fill: #1e1e2e !important;
}
:root[dark] .ytp-cards-button .ytp-cards-button-icon path {
  fill: #cdd6f4 !important;
}
:root[dark] .ytp-cards-teaser .ytp-cards-teaser-box {
  background-color: #585b70 !important;
  border-bottom-color: #585b70 !important;
}
:root[dark] .ytp-cards-teaser .ytp-cards-teaser-text {
  color: #cdd6f4 !important;
}
:root[dark] .html5-video-player {
  color: #cdd6f4 !important;
  /* youtube live ring */
  /* stats for nerds */
}
:root[dark] .html5-video-player .ytp-swatch-background-color,
:root[dark] .html5-video-player .ytp-play-progress {
  background: #cba6f7 !important;
}
:root[dark] .html5-video-player .ytp-svg-fill,
:root[dark] .html5-video-player [fill="#fff"] {
  fill: #cdd6f4 !important;
}
:root[dark] .html5-video-player .ytp-volume-slider-handle,
:root[dark] .html5-video-player .ytp-volume-slider-handle::before {
  background-color: #cdd6f4 !important;
}
:root[dark] .html5-video-player .ytp-volume-slider-handle::after {
  background-color: rgba(205, 214, 244, 0.2) !important;
}
:root[dark] .html5-video-player .ytp-time-current,
:root[dark] .html5-video-player .ytp-time-separator,
:root[dark] .html5-video-player .ytp-time-duration {
  color: #cdd6f4 !important;
}
:root[dark] .html5-video-player .ytp-live-badge[disabled]::before {
  background: #cba6f7 !important;
}
:root[dark] .html5-video-player .ytp-live-badge::before {
  background: #6c7086 !important;
}
:root[dark] .html5-video-player .yt-spec-avatar-shape__badge-text {
  color: #11111b !important;
}
:root[dark] .html5-video-player .yt-spec-avatar-shape--live-ring {
  border-color: #cba6f7 !important;
}
:root[dark] .html5-video-player .yt-spec-avatar-shape__live-badge {
  background-color: #cba6f7 !important;
}
:root[dark] .html5-video-player .ytp-button[aria-pressed]::after,
:root[dark] .html5-video-player .ytp-subtitles-button[aria-pressed]::after {
  background-color: #cba6f7 !important;
}
:root[dark] .html5-video-player .ytp-sfn {
  background: rgba(30, 30, 46, 0.8) !important;
  color: #cdd6f4 !important;
}
:root[dark] .html5-video-player .ytp-autonav-toggle-button {
  background-color: #585b70 !important;
}
:root[dark] .html5-video-player .ytp-autonav-toggle-button::after {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M12.75%204.5h-3c-.6%200-1.17.23-1.6.65-.42.43-.65%201-.65%201.6v22.5c0%20.59.23%201.16.65%201.59.43.42%201%20.66%201.6.66h3c.59%200%201.16-.24%201.59-.66.42-.43.66-1%20.66-1.59V6.75c0-.6-.24-1.17-.66-1.6-.43-.42-1-.65-1.59-.65m13.5%200h-3c-.6%200-1.17.23-1.6.65-.42.43-.65%201-.65%201.6v22.5c0%20.59.23%201.16.65%201.59.43.42%201%20.66%201.6.66h3c.59%200%201.16-.24%201.59-.66.42-.43.66-1%20.66-1.59V6.75c0-.6-.24-1.17-.66-1.6-.43-.42-1-.65-1.59-.65%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
  background-color: #7f849c !important;
}
:root[dark] .html5-video-player .ytp-autonav-toggle-button[aria-checked="true"]::after {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22m17%208.6-6.11-3.61c-1.5-.88-3.39.2-3.39%201.94v22.13c0%201.74%201.89%202.82%203.39%201.94L17%2027.4zm0%200v18.8L33%2018z%22%20fill%3D%22%231e1e2e%22/%3E%3C/svg%3E") !important;
  background-color: #cdd6f4 !important;
}
:root[dark] ytd-rich-item-renderer.ytd-rich-item-renderer-highlight {
  background-color: rgba(203, 166, 247, 0.1) !important;
  box-shadow: rgba(203, 166, 247, 0.1) 0 0 0 10px !important;
}
:root[dark] #shorts-container {
  --yt-spec-static-overlay-text-primary: #cdd6f4 !important;
  /* Buy super thanks button */
}
:root[dark] #shorts-container .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container .YtwFactoidRendererLabel {
  color: #a6adc8 !important;
}
:root[dark] #shorts-container .YtwFactoidRendererValue {
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container ytd-reel-video-renderer:not([is-watch-while-mode]) .yt-spec-button-shape-with-label__label {
  color: #bac2de !important;
}
:root[dark] #shorts-container ytd-reel-video-renderer[is-watch-while-mode] .yt-spec-button-shape-with-label__label {
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container .yt-spec-button-shape-next--overlay-dark.yt-spec-button-shape-next--tonal,
:root[dark] #shorts-container .YtdDesktopShortsVolumeControlsBackgroundScrim {
  background-color: rgba(30, 30, 46, 0.6) !important;
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container .yt-spec-button-shape-next--overlay-dark.yt-spec-button-shape-next--filled {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] #shorts-container .YtdDesktopShortsVolumeControlsMuteIcon {
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container .YtdShortsSuggestedActionStaticHostContainer {
  background-color: rgba(30, 30, 46, 0.6) !important;
}
:root[dark] #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostLeadingIcon,
:root[dark] #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostPrimaryText {
  color: #cdd6f4 !important;
}
:root[dark] .shortsLockupViewModelHostOutsideMetadataEndpoint {
  color: #cdd6f4 !important;
}
:root[dark] .shortsLockupViewModelHostOutsideMetadataSubhead {
  color: #a6adc8 !important;
}
:root[dark] #progressContainer.tp-yt-paper-progress {
  background-color: #181825 !important;
}
:root[dark] #comment-chip-container.yt-pdg-comment-chip-renderer,
:root[dark] .slider-knob-inner.tp-yt-paper-slider {
  background: #cba6f7 !important;
}
:root[dark] #primaryProgress.tp-yt-paper-progress {
  background: linear-gradient(139deg, #fab387, #eba0ac, #f38ba8, #f5c2e7) !important;
}
:root[dark] #container.ytd-pdg-comment-preview-renderer {
  background-color: #181825 !important;
}
:root[dark] #comment-chip-price.yt-pdg-comment-chip-renderer,
:root[dark] yt-icon.yt-pdg-comment-chip-renderer {
  color: #11111b !important;
}
:root[dark] .yt-tab-shape-wiz__tab {
  color: #bac2de !important;
}
:root[dark] .yt-tab-shape-wiz__tab--tab-selected {
  color: #cdd6f4 !important;
}
:root[dark] .yt-tab-group-shape-wiz__slider {
  background-color: #cdd6f4 !important;
}
:root[dark] .yt-tab-shape-wiz:hover .yt-tab-shape-wiz__tab-bar {
  background-color: #bac2de !important;
}
:root[dark] .truncated-text-wiz,
:root[dark] .page-header-view-model-wiz__page-header-content-metadata {
  color: #bac2de !important;
}
:root[dark] .page-header-view-model-wiz__page-header-title,
:root[dark] [style="color: rgb(255, 255, 255);"]:has(svg),
:root[dark] .truncated-text-wiz__absolute-button {
  color: #cdd6f4 !important;
}
:root[dark] .yt-contextual-sheet-layout-wiz {
  background-color: #181825 !important;
}
:root[dark] .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__container--tappable:hover {
  background-color: #313244 !important;
}
:root[dark] .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__title,
:root[dark] .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__accessory,
:root[dark] .yt-contextual-sheet-layout-wiz .radio-shape-wiz__label-container {
  color: #cdd6f4 !important;
}
:root[dark] .profile-badge-view-model-wiz__badge-description {
  color: #cdd6f4 !important;
}
:root[dark] .profile-badge-view-model-wiz__badge-subtitle {
  color: #a6adc8 !important;
}
:root[dark] .yt-profile-identity-info-view-model-wiz__divider {
  border-color: #313244 !important;
}
:root[dark] .yt-profile-card-view-model-wiz {
  background-color: #181825 !important;
}
:root[dark] .yt-profile-identity-info-view-model-wiz__channel-name,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-handle-with-bold-font,
:root[dark] .yt-profile-info-view-model-wiz__section-title,
:root[dark] .yt-comment-interaction-view-model-wiz__video-title,
:root[dark] .yt-shared-subscription-view-model-wiz__channel-name {
  color: #cdd6f4 !important;
}
:root[dark] .yt-profile-identity-info-view-model-wiz__badge,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-handle,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-content,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-delimiter,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-pronouns,
:root[dark] .yt-profile-info-view-model-wiz__section-divider,
:root[dark] .yt-profile-info-view-model-wiz__section-subtitle,
:root[dark] .yt-comment-interaction-view-model-wiz__comment-content {
  color: #a6adc8 !important;
}
:root[dark] .arrow.yt-horizontal-list-renderer {
  background: #313244 !important;
}
:root[dark] .ytVideoMetadataCarouselViewModelHost,
:root[dark] .YtVideoMetadataCarouselViewModelHost {
  background-color: #313244 !important;
}
:root[dark] .ytVideoMetadataCarouselViewModelHost .ytCarouselTitleViewModelTitle,
:root[dark] .YtVideoMetadataCarouselViewModelHost .ytCarouselTitleViewModelTitle,
:root[dark] .ytVideoMetadataCarouselViewModelHost .YtCarouselTitleViewModelTitle,
:root[dark] .YtVideoMetadataCarouselViewModelHost .YtCarouselTitleViewModelTitle,
:root[dark] .ytVideoMetadataCarouselViewModelHost .yt-core-attributed-string,
:root[dark] .YtVideoMetadataCarouselViewModelHost .yt-core-attributed-string,
:root[dark] .ytVideoMetadataCarouselViewModelHost .yt-icon-shape,
:root[dark] .YtVideoMetadataCarouselViewModelHost .yt-icon-shape {
  color: #cdd6f4 !important;
}
:root[dark] .video-summary-content-view-model-wiz__paragraph {
  color: #cdd6f4 !important;
}
:root[dark] #next-video-title {
  color: #cdd6f4 !important;
}
:root[dark] #publisher-container .yt-simple-endpoint.style-scope.yt-formatted-string,
:root[dark] #publisher-container .index-message-wrapper.style-scope.ytd-playlist-panel-renderer,
:root[dark] #publisher-container .index-message-wrapper.style-scope.ytd-playlist-panel-renderer::before {
  color: #a6adc8 !important;
}
:root[dark] .metadata-stats.style-scope.ytd-playlist-byline-renderer,
:root[dark] .yt-lockup-metadata-view-model-wiz__metadata {
  color: #a6adc8 !important;
}
:root[dark] .yt-core-attributed-string.yt-core-attributed-string--white-space-pre-wrap {
  color: #cdd6f4 !important;
}
:root[dark] .ytChipShapeInactive {
  background-color: #313244 !important;
  color: #cdd6f4 !important;
}
:root[dark] .ytChipShapeActive {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] .ytListViewModelHost {
  background-color: #181825 !important;
  color: #cdd6f4 !important;
}
:root[dark] .ytListViewModelHost .yt-icon-shape {
  color: #cdd6f4 !important;
}
:root:not([dark]) {
  color-scheme: dark !important;
  color: #cdd6f4 !important;
  background: #1e1e2e !important;
  /* Misc */
  /* Selected chapter */
  /* Skeleton */
  /* Ambient mode */
  /* Icons */
  /* verification badge */
  /* Buttons */
  /* Search box */
  /* "Suggestion removed" */
  /* Video description */
  /* Thumbnails */
  /* Panels, popups, tooltips */
  /* Video player */
  /* Video highlight */
  /* Shorts titles and views on homepage */
  /* Buy super thanks bar */
  /* Channel pages */
  /* channel details */
  /* Profiles */
  /* Horizontal list arrows */
  /* Live chat replay */
  /* AI-generated video summary */
  /* Playlist collapsed sidebar */
  /* Playlist metadata */
  /* Playlist titles in search results */
  /* Category tag pills */
  /* Vertical ellipsis menu on main page */
}
:root:not([dark]) ::selection {
  background-color: rgba(203, 166, 247, 0.3) !important;
}
:root:not([dark]) input::placeholder,
:root:not([dark]) textarea::placeholder {
  color: #a6adc8 !important;
}
:root:not([dark]),
:root:not([dark]) [dark],
:root:not([dark]) [system-icons],
:root:not([dark]) [darker-dark-theme],
:root:not([dark])[dark],
:root:not([dark])[system-icons],
:root:not([dark])[darker-dark-theme] {
  --efyt-control-bar-background-color: #181825 !important;
  --dimmer-text: #cdd6f4 !important;
  --yt-spec-white-1: #cdd6f4 !important;
  --yt-spec-white-2: #a6adc8 !important;
  --yt-spec-white-3: #bac2de !important;
  --yt-spec-white-4: #a9b3d6 !important;
  --yt-spec-black-1: #7f849c !important;
  --yt-spec-black-2: #6c7086 !important;
  --yt-spec-black-3: #585b70 !important;
  --yt-spec-black-4: #45475a !important;
  --yt-spec-black-pure: #313244 !important;
  --yt-spec-grey-1: #cdd6f4 !important;
  --yt-spec-grey-2: #a6adc8 !important;
  --yt-spec-grey-3: #bac2de !important;
  --yt-spec-grey-4: #9399b2 !important;
  --yt-spec-grey-5: #7f849c !important;
  --yt-brand-youtube-red: #cba6f7 !important;
  --yt-brand-medium-red: #cba6f7 !important;
  --yt-brand-light-red: #cba6f7 !important;
  --yt-spec-red-30: #fab387 !important;
  --yt-spec-red-70: #f38ba8 !important;
  --yt-spec-red-indicator: #cba6f7 !important;
  --yt-spec-pale-blue: #89dceb !important;
  --yt-spec-light-blue: #89dceb !important;
  --yt-spec-dark-blue: #74c7ec !important;
  --yt-spec-navy-blue: #94e2d5 !important;
  --yt-spec-light-green: #a6e3a1 !important;
  --yt-spec-dark-green: #a6e3a1 !important;
  --yt-spec-yellow: #fab387 !important;
  --yt-spec-black-pure-alpha-5: #a6adc8 !important;
  --yt-spec-black-pure-alpha-10: #9399b2 !important;
  --yt-spec-black-pure-alpha-15: rgba(17, 17, 27, 0.85) !important;
  --yt-spec-black-pure-alpha-30: rgba(17, 17, 27, 0.7) !important;
  --yt-spec-black-pure-alpha-60: rgba(17, 17, 27, 0.4) !important;
  --yt-spec-black-pure-alpha-80: rgba(17, 17, 27, 0.2) !important;
  --yt-spec-black-1-alpha-98: rgba(17, 17, 27, 0.02) !important;
  --yt-spec-black-1-alpha-95: rgba(17, 17, 27, 0.05) !important;
  --yt-spec-white-1-alpha-10: rgba(205, 214, 244, 0.9) !important;
  --yt-spec-white-1-alpha-20: rgba(205, 214, 244, 0.8) !important;
  --yt-spec-white-1-alpha-25: rgba(205, 214, 244, 0.75) !important;
  --yt-spec-white-1-alpha-30: rgba(205, 214, 244, 0.7) !important;
  --yt-spec-white-1-alpha-70: rgba(205, 214, 244, 0.3) !important;
  --yt-spec-white-1-alpha-95: rgba(205, 214, 244, 0.05) !important;
  --yt-spec-white-1-alpha-98: rgba(205, 214, 244, 0.02) !important;
  --yt-brand-medium-red-alpha-90: rgba(203, 166, 247, 0.1) !important;
  --yt-brand-medium-red-alpha-30: rgba(203, 166, 247, 0.7) !important;
  --yt-brand-light-red-alpha-30: rgba(203, 166, 247, 0.7) !important;
  --yt-spec-light-blue-alpha-30: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-dark-blue-alpha-30: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-base-background: #1e1e2e !important;
  --yt-spec-raised-background: #1e1e2e !important;
  --yt-spec-menu-background: #181825 !important;
  --yt-spec-inverted-background: #cdd6f4 !important;
  --yt-spec-additive-background: #313244 !important;
  --yt-spec-outline: #313244 !important;
  --yt-spec-shadow: rgba(17, 17, 27, 0.75) !important;
  --yt-spec-text-primary: #cdd6f4 !important;
  --yt-spec-text-secondary: #a6adc8 !important;
  --yt-spec-text-disabled: #bac2de !important;
  --yt-spec-text-primary-inverse: #11111b !important;
  --yt-spec-call-to-action: #cba6f7 !important;
  --yt-spec-call-to-action-inverse: #cba6f7 !important;
  --yt-spec-suggested-action: rgba(203, 166, 247, 0.2) !important;
  --yt-spec-suggested-action-inverse: #cdd6f4 !important;
  --yt-spec-icon-active-other: #cdd6f4 !important;
  --yt-spec-button-chip-background-hover: #45475a !important;
  --yt-spec-touch-response: #313244 !important;
  --yt-spec-touch-response-inverse: #cba6f7 !important;
  --yt-spec-brand-icon-active: #cba6f7 !important;
  --yt-spec-brand-button-background: #cba6f7 !important;
  --yt-spec-brand-link-text: #74c7ec !important;
  --yt-spec-wordmark-text: #cdd6f4 !important;
  --yt-spec-error-indicator: #f38ba8 !important;
  --yt-spec-themed-blue: #cba6f7 !important;
  --yt-spec-themed-green: #a6e3a1 !important;
  --yt-spec-ad-indicator: #94e2d5 !important;
  --yt-spec-themed-overlay-background: rgba(17, 17, 27, 0.8) !important;
  --yt-spec-commerce-badge-background: #a6e3a1 !important;
  --yt-spec-static-brand-red: #cba6f7 !important;
  --yt-spec-static-brand-white: #cdd6f4 !important;
  --yt-spec-static-brand-black: #1e1e2e !important;
  --yt-spec-static-clear-color: #11111b !important;
  --yt-spec-static-clear-black: #11111b !important;
  --yt-spec-static-ad-yellow: #fab387 !important;
  --yt-spec-static-grey: #a6adc8 !important;
  --yt-spec-static-overlay-background-solid: #11111b !important;
  --yt-spec-static-overlay-background-heavy: #11111b !important;
  --yt-spec-static-overlay-background-medium: rgba(17, 17, 27, 0.5) !important;
  --yt-spec-static-overlay-background-light: rgba(17, 17, 27, 0.9) !important;
  --yt-spec-static-overlay-text-primary: #cdd6f4 !important;
  --yt-spec-static-overlay-text-secondary: rgba(166, 173, 200, 0.3) !important;
  --yt-spec-static-overlay-text-disabled: rgba(166, 173, 200, 0.7) !important;
  --yt-spec-static-overlay-call-to-action: #cba6f7 !important;
  --yt-spec-static-overlay-icon-active-other: #11111b !important;
  --yt-spec-static-overlay-icon-inactive: #45475a !important;
  --yt-spec-static-overlay-icon-disabled: #585b70 !important;
  --yt-spec-static-overlay-button-primary: #cba6f7 !important;
  --yt-spec-static-overlay-touch-response: #7f849c !important;
  --yt-spec-static-overlay-touch-response-inverse: #45475a !important;
  --yt-spec-static-overlay-background-brand: #cba6f7 !important;
  --yt-spec-assistive-feed-themed-gradient-1: #a6adc8 !important;
  --yt-spec-assistive-feed-themed-gradient-2: #b4befe !important;
  --yt-spec-assistive-feed-themed-gradient-3: #f38ba8 !important;
  --yt-spec-brand-background-solid: #1e1e2e !important;
  --yt-spec-brand-background-primary: #1e1e2e !important;
  --yt-spec-brand-background-secondary: #181825 !important;
  --yt-spec-general-background-a: #1e1e2e !important;
  --yt-spec-general-background-b: #1e1e2e !important;
  --yt-spec-general-background-c: #11111b !important;
  --yt-spec-error-background: #1e1e2e !important;
  --yt-spec-10-percent-layer: #45475a !important;
  --yt-spec-snackbar-background: #181825 !important;
  --yt-spec-snackbar-background-updated: #181825 !important;
  --yt-spec-badge-chip-background: #313244 !important;
  --yt-spec-verified-badge-background: #6c7086 !important;
  --yt-spec-call-to-action-fadeoutd: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-call-to-action-hover: #cba6f7 !important;
  --yt-spec-brand-button-background-hover: #cba6f7 !important;
  --yt-spec-brand-link-text-fadeoutd: rgba(203, 166, 247, 0.7) !important;
  --yt-spec-filled-button-focus-outline: #313244 !important;
  --yt-spec-static-overlay-button-hover: #45475a !important;
  --yt-spec-mono-filled-hover: #45475a !important;
  --yt-spec-commerce-filled-hover: #cba6f7 !important;
  --yt-spec-mono-tonal-hover: #45475a !important;
  --yt-spec-commerce-tonal-hover: #585b70 !important;
  --yt-spec-static-overlay-filled-hover: #7f849c !important;
  --yt-spec-static-overlay-tonal-hover: #45475a !important;
  --yt-spec-paper-tab-ink: rgba(205, 214, 244, 0.7) !important;
  --yt-spec-filled-button-text: #cdd6f4 !important;
  --yt-spec-selected-nav-text: #cdd6f4 !important;
  --iron-icon-fill-color: #cdd6f4 !important;
  /* Search bar */
  --ytd-searchbox-border-color: #313244 !important;
  --ytd-searchbox-legacy-border-color: #313244 !important;
  --ytd-searchbox-legacy-border-shadow-color: #11111b !important;
  --ytd-searchbox-legacy-button-color: #181825 !important;
  --ytd-searchbox-legacy-button-border-color: #313244 !important;
  --ytd-searchbox-legacy-button-focus-color: #cba6f7 !important;
  --ytd-searchbox-legacy-button-hover-color: #181825 !important;
  --ytd-searchbox-legacy-button-hover-border-color: #313244 !important;
  --ytd-searchbox-legacy-button-icon-color: #cba6f7 !important;
  --ytd-searchbox-background: #1e1e2e !important;
  --ytd-searchbox-text-color: #cdd6f4 !important;
  /* System icons */
  --yt-spec-icon-inactive: #cdd6f4 !important;
  --yt-spec-icon-disabled: #7f849c !important;
  --yt-spec-brand-icon-inactive: #9399b2 !important;
  /* Yt video Page */
  --yt-live-chat-background-color: #1e1e2e !important;
  --yt-live-chat-action-panel-background-color: #1e1e2e !important;
  --yt-live-chat-secondary-background-color: #45475a !important;
  --yt-live-chat-toast-background-color: #585b70 !important;
  --yt-live-chat-mode-change-background-color: #1e1e2e !important;
  --yt-live-chat-secondary-text-color: #a6adc8 !important;
  --yt-live-chat-tertiary-text-color: rgba(205, 214, 244, 0.46) !important;
  --yt-live-chat-text-input-field-inactive-underline-color: #a6adc8 !important;
  --yt-live-chat-text-input-field-placeholder-color: #a6adc8 !important;
  --yt-live-chat-enabled-send-button-color: #cdd6f4 !important;
  --yt-live-chat-disabled-icon-button-color: #bac2de !important;
  --yt-live-chat-picker-button-hover-color: #cba6f7 !important;
  --yt-live-chat-mention-background-color: #cba6f7 !important;
  --yt-live-chat-mention-text-color: #cdd6f4 !important;
  --yt-live-chat-deleted-message-color: #a6adc8 !important;
  --yt-live-chat-deleted-message-bar-color: #bac2de !important;
  --yt-live-chat-reconnect-message-color: #cdd6f4 !important;
  --yt-live-chat-disabled-button-background-color: #6c7086 !important;
  --yt-live-chat-sub-panel-background-color: #1e1e2e !important;
  --yt-live-chat-sub-panel-background-color-transparent: #181825 !important;
  --yt-live-chat-moderator-color: #b4befe !important;
  --yt-live-chat-owner-color: #fab387 !important;
  --yt-live-chat-message-highlight-background-color: #1e1e2e !important;
  --yt-live-chat-sponsor-color: #a6e3a1 !important;
  --yt-live-chat-overlay-color: rgba(24, 24, 37, 0.5) !important;
  --yt-live-chat-dialog-background-color: #1e1e2e !important;
  --yt-emoji-picker-variant-selector-bg-color: #1e1e2e !important;
  --yt-live-chat-moderation-mode-hover-background-color: rgba(24, 24, 37, 0.7) !important;
  --yt-grey: #a6adc8 !important;
  --yt-live-chat-text-input-field-suggestion-background-color: #a6adc8 !important;
  --yt-live-chat-text-input-field-suggestion-background-color-hover: #bac2de !important;
  --yt-emoji-picker-search-background-color: #313244 !important;
  --yt-emoji-picker-search-color: #cdd6f4 !important;
  --yt-emoji-picker-search-placeholder-color: #cba6f7 !important;
  --yt-live-chat-slider-active-color: #cba6f7 !important;
  --yt-live-chat-slider-container-color: #313244 !important;
  --yt-live-chat-slider-markers-color: #cdd6f4 !important;
  --yt-live-chat-banner-gradient-scrim: linear-gradient(#181825, transparent) !important;
  --yt-live-chat-action-panel-gradient-scrim: linear-gradient(to top, #181825, transparent) !important;
  --yt-live-chat-automod-button-background-color-hover: rgba(17, 17, 27, 0.5) !important;
  --yt-live-chat-automod-button-explanation-color: rgba(203, 166, 247, 0.3) !important;
  --yt-live-chat-shimmer-background-color: rgba(17, 17, 27, 0.6) !important;
  --yt-live-chat-shimmer-linear-gradient: linear-gradient(0deg, rgba(205, 214, 244, 0.9) 40%, rgba(30, 30, 46, 0.7) 50%, rgba(205, 214, 244, 0.9) 60%) !important;
  --yt-live-chat-vem-background-color: #181825 !important;
  --yt-live-chat-product-picker-icon-color: rgba(205, 214, 244, 0.5) !important;
  --yt-live-chat-product-picker-hover-color: #6c7086 !important;
  --yt-live-chat-product-picker-disabled-icon-color: rgba(205, 214, 244, 0.7) !important;
  --yt-live-chat-action-panel-background-color-transparent: (null) !important;
  --paper-tooltip-background: #6c7086 !important;
  --paper-tooltip-text-color: #cdd6f4 !important;
  /* Links */
  --yt-endpoint-color: #cba6f7 !important;
  --yt-endpoint-visited-color: #cba6f7 !important;
  --yt-endpoint-hover-color: #cba6f7 !important;
  --sb-dark-red-outline: #cba6f7 !important;
  --sb-main-bg-color: #1e1e2e !important;
  --sb-main-fg-color: #cdd6f4 !important;
  --sb-grey-bg-color: #1e1e2e !important;
  --sb-grey-fg-color: #a6adc8 !important;
  --sb-red-bg-color: #cba6f7 !important;
  --sb-category-sponsor: #a6e3a1 !important;
  --sb-category-selfpromo: #f9e2af !important;
  --sb-category-exclusive_access: #94e2d5 !important;
  --sb-category-interaction: #cba6f7 !important;
  --sb-category-poi_highlight: #f5c2e7 !important;
  --sb-category-intro: #89dceb !important;
  --sb-category-outro: #89b4fa !important;
  --sb-category-preview: #74c7ec !important;
  --sb-category-filler: #b4befe !important;
  --sb-category-music_offtopic: #fab387 !important;
}
:root:not([dark]):not(.style-scope) {
  --primary-text-color: #cdd6f4 !important;
  --primary-background-color: #1e1e2e !important;
  --secondary-text-color: #a6adc8 !important;
  --disabled-text-color: #bac2de !important;
  --divider-color: #6c7086 !important;
  --error-color: #f38ba8 !important;
  --primary-color: #cba6f7 !important;
  --light-primary-color: #cba6f7 !important;
  --dark-primary-color: #89b4fa !important;
  --accent-color: #cba6f7 !important;
  --light-accent-color: #cba6f7 !important;
  --dark-accent-color: #cba6f7 !important;
  --light-theme-background-color: #1e1e2e !important;
  --light-theme-base-color: #cdd6f4 !important;
  --light-theme-text-color: #cdd6f4 !important;
  --light-theme-secondary-color: #a6adc8 !important;
  --light-theme-disabled-color: #bac2de !important;
  --light-theme-divider-color: #6c7086 !important;
  --dark-theme-background-color: #1e1e2e !important;
  --dark-theme-base-color: #cdd6f4 !important;
  --dark-theme-text-color: #cdd6f4 !important;
  --dark-theme-secondary-color: #a6adc8 !important;
  --dark-theme-disabled-color: #bac2de !important;
  --dark-theme-divider-color: #6c7086 !important;
}
:root:not([dark]) .yt-spec-touch-feedback-shape__hover-effect {
  background-color: #313244 !important;
}
:root:not([dark]) ytd-watch-metadata {
  --yt-saturated-raised-background: #45475a !important;
  --yt-saturated-text-primary: #cdd6f4 !important;
  --yt-saturated-text-secondary: #bac2de !important;
}
:root:not([dark]) .yt-core-attributed-string--link-inherit-color {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-core-attributed-string--highlight-text-decorator {
  background-color: #585b70 !important;
}
:root:not([dark]) #channel-name.ytd-video-meta-block {
  --yt-endpoint-color: #cba6f7 !important;
  --yt-endpoint-visited-color: #cba6f7 !important;
  color: #cba6f7 !important;
}
:root:not([dark]) .yt-page-navigation-progress {
  background: #cba6f7 !important;
}
:root:not([dark]) ytd-macro-markers-list-item-renderer {
  --ytd-macro-markers-list-item-background-color: #313244 !important;
  --ytd-macro-markers-list-item-title-color: #cdd6f4 !important;
  --ytd-macro-markers-list-item-secondary-color: #bac2de !important;
  --ytd-macro-markers-list-item-timestamp-background-color: #45475a !important;
}
:root:not([dark]) ytd-playlist-panel-video-renderer {
  --yt-lightsource-section2-color: #45475a !important;
  --yt-lightsource-section4-color: #585b70 !important;
  --yt-lightsource-primary-title-color: #cdd6f4 !important;
  --yt-lightsource-secondary-title-color: #cdd6f4 !important;
  --yt-active-playlist-panel-background-color: #313244 !important;
}
:root:not([dark]) ytd-playlist-panel-renderer[collapsible][collapsed][use-color-palette] .header.ytd-playlist-panel-renderer {
  --iron-icon-fill-color: #cdd6f4 !important;
  background-color: #1e1e2e !important;
}
:root:not([dark]) #container.ytd-masthead {
  --iron-icon-fill-color: #cdd6f4 !important;
}
:root:not([dark]) #background.ytd-masthead,
:root:not([dark]) #frosted-glass {
  --yt-frosted-glass-desktop: #1e1e2e !important;
  --yt-spec-frosted-glass-desktop: #1e1e2e !important;
}
:root:not([dark]) ytd-feed-filter-chip-bar-renderer[expand-instead-of-scroll] #chips-wrapper.ytd-feed-filter-chip-bar-renderer {
  --iron-icon-fill-color: #cdd6f4 !important;
  background-color: #1e1e2e !important;
}
:root:not([dark]) #ytd-player #container {
  background: #11111b !important;
}
:root:not([dark]) .ytp-progress-list {
  background: rgba(49, 50, 68, 0.8) !important;
}
:root:not([dark]) .ytp-load-progress {
  background: #6c7086 !important;
}
:root:not([dark]) ytd-expandable-metadata-renderer {
  --yt-lightsource-section1-color: #1e1e2e !important;
  --yt-lightsource-section2-color: #313244 !important;
  --yt-lightsource-section3-color: #45475a !important;
  --yt-lightsource-section4-color: #585b70 !important;
  --yt-lightsource-primary-title-color: #cdd6f4 !important;
  --yt-lightsource-secondary-title-color: #a6adc8 !important;
}
:root:not([dark]) yt-live-chat-renderer {
  --yt-button-default-text-color: #cdd6f4 !important;
  --yt-button-default-background-color: #1e1e2e !important;
  --yt-button-dark-text-color: #1e1e2e !important;
  --yt-button-dark-background-color: #cba6f7 !important;
  --yt-button-payment-background-color: #cba6f7 !important;
}
:root:not([dark]) yt-icon-button.yt-live-chat-item-list-renderer {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) yt-icon-button.yt-live-chat-item-list-renderer:hover {
  background-color: #bd8ff5 !important;
}
:root:not([dark]) ytd-author-comment-badge-renderer:not(
    [style*="--ytd-author-comment-badge-icon-background-color: transparent;"]
  ) {
  --yt-basic-background-color: #313244 !important;
  --yt-basic-foreground-title-color: #313244 !important;
  --ytd-author-comment-badge-background-color: #313244 !important;
  --ytd-author-comment-badge-name-color: #cdd6f4 !important;
  --ytd-author-comment-badge-icon-color: #cdd6f4 !important;
}
:root:not([dark]) #guide-skeleton,
:root:not([dark]) #home-container-skeleton,
:root:not([dark]) #home-chips {
  background-color: #1e1e2e !important;
  z-index: -1 !important;
}
:root:not([dark]) #guide-skeleton .guide-ghost-icon,
:root:not([dark]) #guide-skeleton .guide-ghost-text,
:root:not([dark]) .masthead-skeleton-icon,
:root:not([dark]) #home-page-skeleton .skeleton-bg-color,
:root:not([dark]) .watch-skeleton .skeleton-bg-color {
  background-color: #45475a !important;
}
:root:not([dark]) #cinematics,
:root:not([dark]) #cinematic-container {
  mix-blend-mode: lighten !important;
}
:root:not([dark]) .ytp-settings-button.ytp-hd-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-hdr-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-4k-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-5k-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-8k-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-3d-badge-grey::after,
:root:not([dark]) .ytp-settings-button.ytp-3d-badge::after {
  background-color: #cba6f7 !important;
}
:root:not([dark]) [fill="red"],
:root:not([dark]) [fill="#F00"],
:root:not([dark]) [fill="#FF0000"],
:root:not([dark]) [fill="#f03"],
:root:not([dark]) [fill="#FF0033"] {
  fill: #cba6f7 !important;
}
:root:not([dark]) [fill="white"] {
  fill: #cdd6f4 !important;
}
:root:not([dark]) [src*="https://www.gstatic.com/images/icons/material/system/1x/check_circle_grey600_36dp.png"] {
  filter: brightness(0) saturate(100%) invert(75%) sepia(82%) saturate(1008%) hue-rotate(189deg) brightness(120%) contrast(90%) !important;
}
:root:not([dark]) yt-icon.ytd-logo [fill="white"] {
  fill: #11111b !important;
}
:root:not([dark]) .yt-spec-icon-shape [fill="#FAFAFA"],
:root:not([dark]) .yt-spec-icon-shape [fill="#000"],
:root:not([dark]) .yt-spec-icon-shape [fill="#fff"],
:root:not([dark]) .yt-spec-icon-shape [fill="#FFF"],
:root:not([dark]) .yt-spec-icon-shape [fill="#FFFFFF"] {
  fill: #11111b !important;
}
:root:not([dark]) .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon,
:root:not([dark]) .yt-spec-icon-badge-shape {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-spec-icon-badge-shape--type-notification .yt-spec-icon-badge-shape__badge {
  background-color: #cba6f7 !important;
  color: #313244 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
  background-color: #313244 !important;
  /* Accent for filled-in thumbs up (like button) */
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(3,3,3)"],
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(0,0,0)"],
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(255,255,255)"] {
  fill: #cdd6f4 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(0,0,0)"],
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(255,255,255)"] {
  stroke: #cdd6f4 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] {
  fill: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] + [stroke] {
  stroke: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal:hover {
  background-color: #45475a !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline {
  color: #cdd6f4 !important;
  border-color: #585b70 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline:hover {
  background-color: #585b70 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text {
  color: #cdd6f4 !important;
  /* Accent for filled-in thumbs up (like button) */
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text path[d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"] {
  fill: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text:hover {
  background-color: #45475a !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled:hover {
  background-color: #bd8ff5 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--disabled {
  color: #7f849c !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
  background-color: #313244 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal:hover {
  background-color: #45475a !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--outline {
  color: #cdd6f4 !important;
  border-color: #45475a !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--outline:hover {
  background: #313244 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline {
  color: #cba6f7 !important;
  border-color: #585b70 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline:hover {
  background-color: rgba(203, 166, 247, 0.3) !important;
  color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text {
  color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text:hover {
  background-color: rgba(203, 166, 247, 0.3) !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--filled:hover {
  background-color: #d9bdf9 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--disabled.yt-spec-button-shape-next--filled {
  color: #a6adc8 !important;
  background-color: rgba(69, 71, 90, 0.7) !important;
}
:root:not([dark]) ytd-searchbox[has-focus] #container.ytd-searchbox {
  border-color: #cba6f7 !important;
}
:root:not([dark]) .ytSearchboxComponentInputBox,
:root:not([dark]) .ytSearchboxComponentInputBoxDark {
  background: var(--ytd-searchbox-background) !important;
  color: var(--ytd-searchbox-text-color) !important;
  border-color: var(--ytd-searchbox-border-color) !important;
  box-shadow: none !important;
}
:root:not([dark]) .ytSearchboxComponentInputBoxHasFocus,
:root:not([dark]) .ytSearchboxComponentInputBoxHasFocusDark {
  border-color: #cba6f7 !important;
}
:root:not([dark]) .ytSuggestionComponentSuggestionHover:hover,
:root:not([dark]) .ytSuggestionComponentSuggestionHoverDark:hover {
  background: #45475a !important;
}
:root:not([dark]) .ytSearchboxComponentSuggestionsContainer,
:root:not([dark]) .ytSearchboxComponentSuggestionsContainerDark {
  background: var(--yt-spec-raised-background) !important;
  border-color: var(--yt-spec-raised-background) !important;
}
:root:not([dark]) .ytSuggestionComponentSuggestion,
:root:not([dark]) .ytSuggestionComponentSuggestionDark {
  color: var(--ytd-searchbox-text-color) !important;
}
:root:not([dark]) .ytSearchboxComponentSearchButton,
:root:not([dark]) .ytSearchboxComponentSearchButtonDark {
  color: var(--ytd-searchbox-text-color) !important;
  background: #313244 !important;
  border-color: var(--ytd-searchbox-border-color) !important;
}
:root:not([dark]) .ytSearchboxComponentClearButtonIcon,
:root:not([dark]) .ytSearchboxComponentClearButtonIconDark {
  color: var(--ytd-searchbox-text-color) !important;
}
:root:not([dark]) .ytSearchboxComponentReportButton,
:root:not([dark]) .ytSearchboxComponentReportButtonDark,
:root:not([dark]) .ytSuggestionComponentRemoveLink,
:root:not([dark]) .ytSuggestionComponentRemoveLinkDark {
  color: #a6adc8 !important;
}
:root:not([dark]) .sbsb_a {
  background: #313244 !important;
}
:root:not([dark]) .sbdd_b {
  border-color: var(--yt-spec-raised-background) !important;
  background-color: var(--yt-spec-raised-background) !important;
}
:root:not([dark]) .sbpqs_a,
:root:not([dark]) .gsfs {
  color: var(--yt-spec-text-primary) !important;
}
:root:not([dark]) .sbsb_i {
  color: var(--yt-spec-call-to-action) !important;
}
:root:not([dark]) .sbsb_d {
  background-color: var(--yt-spec-additive-background) !important;
}
:root:not([dark]) .sbdd_c {
  visibility: hidden !important;
}
:root:not([dark]) .sbpqs_c {
  color: #7f849c !important;
}
:root:not([dark]) .sbpqs_a::before,
:root:not([dark]) .sbqs_c::before {
  content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20enable-background%3D%22new%200%200%2024%2024%22%20height%3D%2224%22%20viewBox%3D%221%201%2027%2027%22%20width%3D%2224%22%20focusable%3D%22false%22%20style%3D%22width%3A100%25%3Bheight%3A100%25%22%20pointer-events%3D%22none%22%20display%3D%22block%22%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20d%3D%22m20.87%2020.17-5.59-5.59A6.96%206.96%200%200%200%2017%2010c0-3.87-3.13-7-7-7s-7%203.13-7%207a6.995%206.995%200%200%200%2011.58%205.29l5.59%205.59zM10%2016c-3.31%200-6-2.69-6-6s2.69-6%206-6%206%202.69%206%206-2.69%206-6%206%22/%3E%3C/svg%3E") !important;
  background: none !important;
}
:root:not([dark]) .yt-core-attributed-string__link--call-to-action-color {
  color: #cba6f7 !important;
}
:root:not([dark]) .YtwCourseProgressViewModelHostProgressTitle,
:root:not([dark]) .YtwCourseProgressViewModelHostProgressSubtitle {
  color: #cdd6f4 !important;
}
:root:not([dark]) .YtwCourseProgressViewModelHostProgressBar {
  background-color: rgba(205, 214, 244, 0.2) !important;
}
:root:not([dark]) .YtwCourseProgressViewModelHostProgressBar .YtwCourseProgressViewModelHostProgressBarFill {
  background-color: #cdd6f4 !important;
}
:root:not([dark]) .ytwHowThisWasMadeSectionViewModelSectionTitle,
:root:not([dark]) .ytwHowThisWasMadeSectionViewModelBodyHeader {
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytwHowThisWasMadeSectionViewModelBodyText {
  color: #a6adc8 !important;
}
:root:not([dark]) #time-status:has([aria-label="LIVE"]),
:root:not([dark]) .badge[aria-label="LIVE"],
:root:not([dark]) .badge[aria-label="PREMIERE"],
:root:not([dark]) .badge-shape-wiz--live.badge-shape-wiz--overlay,
:root:not([dark]) .badge-shape-wiz--thumbnail-live {
  background: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) #thumbnail [style="background-color: rgba(51, 51, 51, 0.8);"],
:root:not([dark]) .YtInlinePlayerControlsTopRightControlsCircleButton,
:root:not([dark]) .badge-shape-wiz--default.badge-shape-wiz--overlay,
:root:not([dark]) .branding-context-container-inner {
  background-color: #313244 !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytp-sb-unsubscribe {
  background-color: #585b70 !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytp-sb-subscribe {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) ytd-thumbnail-overlay-resume-playback-renderer {
  background-color: #45475a !important;
}
:root:not([dark]) .badge-shape-wiz--thumbnail-default {
  color: #cdd6f4 !important;
  background: rgba(17, 17, 27, 0.8) !important;
}
:root:not([dark]) .ytp-tooltip-bottom-text {
  background: rgba(49, 50, 68, 0.9) !important;
  color: #cdd6f4 !important;
  text-shadow: none !important;
}
:root:not([dark]) .ytp-popup {
  background: rgba(49, 50, 68, 0.9) !important;
  text-shadow: none !important;
}
:root:not([dark]) .ytp-panel-menu,
:root:not([dark]) .ytp-panel-header,
:root:not([dark]) .ytp-panel-footer,
:root:not([dark]) .ytp-menuitem-label,
:root:not([dark]) .ytp-premium-label,
:root:not([dark]) .ytp-menuitem-content,
:root:not([dark]) .ytp-menuitem-label-count,
:root:not([dark]) .ytp-menu-label-secondary,
:root:not([dark]) .ytd-menu-title-renderer {
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytp-panel-header {
  border-bottom-color: #585b70 !important;
}
:root:not([dark]) .yt-spec-dialog-layout {
  background-color: #181825 !important;
}
:root:not([dark]) .ytp-panel-footer-content-link {
  color: #cba6f7 !important;
}
:root:not([dark]) .ytp-panel-back-button {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m19.41%2020.09-4.58-4.59%204.58-4.59L18%209.5l-6%206%206%206z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root:not([dark]) .ytp-menuitem[aria-checked="true"] .ytp-menuitem-toggle-checkbox {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22M9%2016.2%204.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
  background-color: #cba6f7 !important;
}
:root:not([dark]) .ytp-menuitem:not([aria-disabled="true"]):hover {
  background-color: #45475a !important;
}
:root:not([dark]) .ytp-menuitem svg > path:not([fill="none"]) {
  fill: #cdd6f4 !important;
}
:root:not([dark]) .ytp-menuitem[aria-haspopup="true"] .ytp-menuitem-content {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m12.59%2020.34%204.58-4.59-4.58-4.59L14%209.75l6%206-6%206z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root:not([dark]) .ytp-menuitem[role="menuitemradio"][aria-checked="true"] .ytp-menuitem-label {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22M9%2016.2%204.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root:not([dark]) yt-progress-bar .ytProgressBarLineProgressBarPlayed,
:root:not([dark]) yt-progress-bar .ytProgressBarPlayheadProgressBarPlayheadDot {
  background: #cba6f7 !important;
}
:root:not([dark]) yt-progress-bar .ytProgressBarLineProgressBarHovered,
:root:not([dark]) yt-progress-bar .ytProgressBarLineProgressBarBackground {
  background: #cdd6f4 !important;
}
:root:not([dark]) .ytp-cards-button .ytp-cards-button-icon use {
  fill: #1e1e2e !important;
}
:root:not([dark]) .ytp-cards-button .ytp-cards-button-icon path {
  fill: #cdd6f4 !important;
}
:root:not([dark]) .ytp-cards-teaser .ytp-cards-teaser-box {
  background-color: #585b70 !important;
  border-bottom-color: #585b70 !important;
}
:root:not([dark]) .ytp-cards-teaser .ytp-cards-teaser-text {
  color: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player {
  color: #cdd6f4 !important;
  /* youtube live ring */
  /* stats for nerds */
}
:root:not([dark]) .html5-video-player .ytp-swatch-background-color,
:root:not([dark]) .html5-video-player .ytp-play-progress {
  background: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .ytp-svg-fill,
:root:not([dark]) .html5-video-player [fill="#fff"] {
  fill: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player .ytp-volume-slider-handle,
:root:not([dark]) .html5-video-player .ytp-volume-slider-handle::before {
  background-color: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player .ytp-volume-slider-handle::after {
  background-color: rgba(205, 214, 244, 0.2) !important;
}
:root:not([dark]) .html5-video-player .ytp-time-current,
:root:not([dark]) .html5-video-player .ytp-time-separator,
:root:not([dark]) .html5-video-player .ytp-time-duration {
  color: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player .ytp-live-badge[disabled]::before {
  background: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .ytp-live-badge::before {
  background: #6c7086 !important;
}
:root:not([dark]) .html5-video-player .yt-spec-avatar-shape__badge-text {
  color: #11111b !important;
}
:root:not([dark]) .html5-video-player .yt-spec-avatar-shape--live-ring {
  border-color: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .yt-spec-avatar-shape__live-badge {
  background-color: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .ytp-button[aria-pressed]::after,
:root:not([dark]) .html5-video-player .ytp-subtitles-button[aria-pressed]::after {
  background-color: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .ytp-sfn {
  background: rgba(30, 30, 46, 0.8) !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player .ytp-autonav-toggle-button {
  background-color: #585b70 !important;
}
:root:not([dark]) .html5-video-player .ytp-autonav-toggle-button::after {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M12.75%204.5h-3c-.6%200-1.17.23-1.6.65-.42.43-.65%201-.65%201.6v22.5c0%20.59.23%201.16.65%201.59.43.42%201%20.66%201.6.66h3c.59%200%201.16-.24%201.59-.66.42-.43.66-1%20.66-1.59V6.75c0-.6-.24-1.17-.66-1.6-.43-.42-1-.65-1.59-.65m13.5%200h-3c-.6%200-1.17.23-1.6.65-.42.43-.65%201-.65%201.6v22.5c0%20.59.23%201.16.65%201.59.43.42%201%20.66%201.6.66h3c.59%200%201.16-.24%201.59-.66.42-.43.66-1%20.66-1.59V6.75c0-.6-.24-1.17-.66-1.6-.43-.42-1-.65-1.59-.65%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
  background-color: #7f849c !important;
}
:root:not([dark]) .html5-video-player .ytp-autonav-toggle-button[aria-checked="true"]::after {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22m17%208.6-6.11-3.61c-1.5-.88-3.39.2-3.39%201.94v22.13c0%201.74%201.89%202.82%203.39%201.94L17%2027.4zm0%200v18.8L33%2018z%22%20fill%3D%22%231e1e2e%22/%3E%3C/svg%3E") !important;
  background-color: #cdd6f4 !important;
}
:root:not([dark]) ytd-rich-item-renderer.ytd-rich-item-renderer-highlight {
  background-color: rgba(203, 166, 247, 0.1) !important;
  box-shadow: rgba(203, 166, 247, 0.1) 0 0 0 10px !important;
}
:root:not([dark]) #shorts-container {
  --yt-spec-static-overlay-text-primary: #cdd6f4 !important;
  /* Buy super thanks button */
}
:root:not([dark]) #shorts-container .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container .YtwFactoidRendererLabel {
  color: #a6adc8 !important;
}
:root:not([dark]) #shorts-container .YtwFactoidRendererValue {
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container ytd-reel-video-renderer:not([is-watch-while-mode]) .yt-spec-button-shape-with-label__label {
  color: #bac2de !important;
}
:root:not([dark]) #shorts-container ytd-reel-video-renderer[is-watch-while-mode] .yt-spec-button-shape-with-label__label {
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container .yt-spec-button-shape-next--overlay-dark.yt-spec-button-shape-next--tonal,
:root:not([dark]) #shorts-container .YtdDesktopShortsVolumeControlsBackgroundScrim {
  background-color: rgba(30, 30, 46, 0.6) !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container .yt-spec-button-shape-next--overlay-dark.yt-spec-button-shape-next--filled {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) #shorts-container .YtdDesktopShortsVolumeControlsMuteIcon {
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container .YtdShortsSuggestedActionStaticHostContainer {
  background-color: rgba(30, 30, 46, 0.6) !important;
}
:root:not([dark]) #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostLeadingIcon,
:root:not([dark]) #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostPrimaryText {
  color: #cdd6f4 !important;
}
:root:not([dark]) .shortsLockupViewModelHostOutsideMetadataEndpoint {
  color: #cdd6f4 !important;
}
:root:not([dark]) .shortsLockupViewModelHostOutsideMetadataSubhead {
  color: #a6adc8 !important;
}
:root:not([dark]) #progressContainer.tp-yt-paper-progress {
  background-color: #181825 !important;
}
:root:not([dark]) #comment-chip-container.yt-pdg-comment-chip-renderer,
:root:not([dark]) .slider-knob-inner.tp-yt-paper-slider {
  background: #cba6f7 !important;
}
:root:not([dark]) #primaryProgress.tp-yt-paper-progress {
  background: linear-gradient(139deg, #fab387, #eba0ac, #f38ba8, #f5c2e7) !important;
}
:root:not([dark]) #container.ytd-pdg-comment-preview-renderer {
  background-color: #181825 !important;
}
:root:not([dark]) #comment-chip-price.yt-pdg-comment-chip-renderer,
:root:not([dark]) yt-icon.yt-pdg-comment-chip-renderer {
  color: #11111b !important;
}
:root:not([dark]) .yt-tab-shape-wiz__tab {
  color: #bac2de !important;
}
:root:not([dark]) .yt-tab-shape-wiz__tab--tab-selected {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-tab-group-shape-wiz__slider {
  background-color: #cdd6f4 !important;
}
:root:not([dark]) .yt-tab-shape-wiz:hover .yt-tab-shape-wiz__tab-bar {
  background-color: #bac2de !important;
}
:root:not([dark]) .truncated-text-wiz,
:root:not([dark]) .page-header-view-model-wiz__page-header-content-metadata {
  color: #bac2de !important;
}
:root:not([dark]) .page-header-view-model-wiz__page-header-title,
:root:not([dark]) [style="color: rgb(255, 255, 255);"]:has(svg),
:root:not([dark]) .truncated-text-wiz__absolute-button {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-contextual-sheet-layout-wiz {
  background-color: #181825 !important;
}
:root:not([dark]) .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__container--tappable:hover {
  background-color: #313244 !important;
}
:root:not([dark]) .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__title,
:root:not([dark]) .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__accessory,
:root:not([dark]) .yt-contextual-sheet-layout-wiz .radio-shape-wiz__label-container {
  color: #cdd6f4 !important;
}
:root:not([dark]) .profile-badge-view-model-wiz__badge-description {
  color: #cdd6f4 !important;
}
:root:not([dark]) .profile-badge-view-model-wiz__badge-subtitle {
  color: #a6adc8 !important;
}
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__divider {
  border-color: #313244 !important;
}
:root:not([dark]) .yt-profile-card-view-model-wiz {
  background-color: #181825 !important;
}
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__channel-name,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-handle-with-bold-font,
:root:not([dark]) .yt-profile-info-view-model-wiz__section-title,
:root:not([dark]) .yt-comment-interaction-view-model-wiz__video-title,
:root:not([dark]) .yt-shared-subscription-view-model-wiz__channel-name {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__badge,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-handle,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-content,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-delimiter,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-pronouns,
:root:not([dark]) .yt-profile-info-view-model-wiz__section-divider,
:root:not([dark]) .yt-profile-info-view-model-wiz__section-subtitle,
:root:not([dark]) .yt-comment-interaction-view-model-wiz__comment-content {
  color: #a6adc8 !important;
}
:root:not([dark]) .arrow.yt-horizontal-list-renderer {
  background: #313244 !important;
}
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost {
  background-color: #313244 !important;
}
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost .ytCarouselTitleViewModelTitle,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost .ytCarouselTitleViewModelTitle,
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost .YtCarouselTitleViewModelTitle,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost .YtCarouselTitleViewModelTitle,
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost .yt-core-attributed-string,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost .yt-core-attributed-string,
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost .yt-icon-shape,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost .yt-icon-shape {
  color: #cdd6f4 !important;
}
:root:not([dark]) .video-summary-content-view-model-wiz__paragraph {
  color: #cdd6f4 !important;
}
:root:not([dark]) #next-video-title {
  color: #cdd6f4 !important;
}
:root:not([dark]) #publisher-container .yt-simple-endpoint.style-scope.yt-formatted-string,
:root:not([dark]) #publisher-container .index-message-wrapper.style-scope.ytd-playlist-panel-renderer,
:root:not([dark]) #publisher-container .index-message-wrapper.style-scope.ytd-playlist-panel-renderer::before {
  color: #a6adc8 !important;
}
:root:not([dark]) .metadata-stats.style-scope.ytd-playlist-byline-renderer,
:root:not([dark]) .yt-lockup-metadata-view-model-wiz__metadata {
  color: #a6adc8 !important;
}
:root:not([dark]) .yt-core-attributed-string.yt-core-attributed-string--white-space-pre-wrap {
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytChipShapeInactive {
  background-color: #313244 !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytChipShapeActive {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) .ytListViewModelHost {
  background-color: #181825 !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytListViewModelHost .yt-icon-shape {
  color: #cdd6f4 !important;
}


:root[dark] [src="https://www.gstatic.com/youtube/img/creator/yt_studio_logo_white.svg"] {
  content: url("data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2097.55%2024%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23cba6f7%22%20d%3D%22M17.1%200S6.4%200%203.8.7a4.15%204.15%200%200%200-3%203C0%206.4%200%2012%200%2012a45%2045%200%200%200%20.7%208.2%204.32%204.32%200%200%200%203%203c2.7.8%2013.4.8%2013.4.8s10.7%200%2013.4-.7a4.32%204.32%200%200%200%203-3%2045%2045%200%200%200%20.7-8.2s.1-5.7-.6-8.3a4.32%204.32%200%200%200-3-3C27.9%200%2017.1%200%2017.1%200m-3.4%206.9%208.9%205.1-8.9%205.1z%22/%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20d%3D%22M76.3.9v4.4c0%201.1%200%202%20.1%203.3h-.1A3.36%203.36%200%200%200%2073.4%207c-2.3%200-3.3%202-3.3%206.6V16c0%204.9.8%206.6%203.2%206.6a3.42%203.42%200%200%200%203.2-2.4h.1l.4%202.1h2.6V.9zm6.688.4c-1.126.032-1.687.55-1.687%202.1%200%201.7.599%202.1%201.799%202.1s1.8-.5%201.8-2.1-.6-2.1-1.8-2.1zM45%201.4c-3.6%200-5%201.7-5%204.9s1.1%204.5%203.7%206.8c1.6%201.4%202.8%202.5%202.8%204.8%200%201.5-.4%202.2-1.6%202.2s-1.7-.8-1.6-3.6h-3.1c-.6%204.2.8%206.1%204.5%206.2%203.5%200%205-1.5%205-5.4%200-3.1-1.3-4.4-3.7-6.6-1.9-1.8-2.8-2.5-2.8-4.6%200-1.4.3-2.2%201.6-2.2s1.6%201.1%201.5%203.9l3.1-.2c.5-4.2-.8-6.2-4.4-6.2m7.6%201.4-.4%204.5h-1.4v2.6H52v8.8c0%202.7.4%203.8%202.6%203.8a7.4%207.4%200%200%200%203.1-.6l-.6-2.2a5.2%205.2%200%200%201-1.3.2c-.5%200-.7-.3-.7-1.7V9.9h2.2V7.3H55V2.8zM91%207c-3.3%200-4.7%201.8-4.7%206.7v2.2c0%204.7%201.1%206.7%204.6%206.7s4.7-2%204.7-6.7v-2.2C95.6%208.9%2094.3%207%2091%207m-31.8.3v11.4c0%202.7.9%204%202.9%204a3.46%203.46%200%200%200%203.2-2.1h.1l.3%201.8h2.7V7.3H65v12a1.51%201.51%200%200%201-1.4%201c-.7%200-1-.6-1-1.9V7.3zm22.3%200v15.1h3.2V7.3zm9.4%202c1%200%201.3%201%201.3%203.1v4.7c0%202.2-.4%203.1-1.3%203.1s-1.2-.9-1.2-3.1v-4.7c0-2%20.2-3.1%201.2-3.1M75%209.4a1.56%201.56%200%200%201%201.3.8v8.5c-.2.9-.9%201.4-1.4%201.3-1%200-1.3-1-1.3-4.4v-1.9c0-3.3.3-4.3%201.4-4.3%22/%3E%3C/svg%3E");
}
:root[dark],
:root[dark] html,
:root[dark] html[dark],
:root[dark] html[dark][dark],
:root[dark][dark],
:root[dark][light],
:root[dark] [light],
:root[dark] html[light],
:root[dark] html[light][light] {
  --yt-spec-black-pure-alpha-80: (null);
  --yt-spec-black-pure-alpha-60: (null);
  --yt-spec-black-1-alpha-98: (null);
  --yt-spec-black-1-alpha-95: (null);
  --iron-icon-fill-color: unset;
  --yt-spec-text-primary: #cdd6f4;
  --ytcp-text-primary: #cdd6f4;
  --ytcp-text-primary-inverse: #1e1e2e;
  --ytcp-static-overlay-text-primary-inverse: #1e1e2e;
  --ytcp-wordmark-text: #cdd6f4;
  --ytcp-text-secondary: #a6adc8;
  --ytcp-text-disabled: #bac2de;
  --ytcp-overlay-text-primary: #9399b2;
  --ytcp-general-background-a: #1e1e2e;
  --yt-spec-base-background: #1e1e2e;
  --yt-spec-black-3: #1e1e2e;
  --yt-spec-brand-background-solid: #181825;
  --ytcp-brand-background-solid: #181825;
  --yt-spec-raised-background: #181825;
  --ytcp-general-background-b: #181825;
  --ytcp-analytics-reach-background: #181825;
  --yt-spec-black-2: #181825;
  --ytcp-general-background-c: #11111b;
  --ytcp-menu-background: #313244;
  --ytcp-container-border-color: #313244;
  --ytcp-container-hovered-border-color: #313244;
  --ytcp-line-divider-solid: #313244;
  --ytcp-container-border-color-inverse: #a6adc8;
  --ytcp-line-divider-solid-inverse: #a6adc8;
  --ytcp-call-to-action: #cba6f7;
  --ytcp-call-to-action-inverse: #181825;
  --ytcp-call-to-action-raised-background: #cba6f7;
  --yt-spec-brand-button-background: #cba6f7;
  --ytcp-call-to-action-raised-disabled: #585b70;
  --ytcp-call-to-action-raised-disabled-background: #9399b2;
  --ytcp-call-to-action-raised-background-inverse: #1e1e2e;
  --ytcp-call-to-action-raised-disabled-inverse: #585b70;
  --ytcp-call-to-action-raised-disabled-background-inverse: #9399b2;
  --yt-spec-brand-background-primary: #313244;
  --yt-compact-link-icon-color: #9399b2;
  --ytcp-icon-active: #cba6f7;
  --ytcp-icon-inactive: #9399b2;
  --ytcp-icon-disabled: #6c7086;
  --ytcp-icon-active-inverse: #7f849c;
  --ytcp-icon-disabled-inverse: #bac2de;
  --ytcp-error-red: #f38ba8;
  --ytcp-badge-red: #f38ba8;
  --ytcp-error-red-inverse: #f38ba8;
  --ytcp-themed-red-inverse: #f38ba8;
  --ytcp-themed-red: #cba6f7;
  --ytcp-themed-blue: #cba6f7;
  --ytcp-badge-blue: rgba(203, 166, 247, 0.3);
  --ytcp-badge-blue-solid: #89b4fa;
  --ytcp-themed-blue-inverse: #89b4fa;
  --ytcp-themed-green: #a6e3a1;
  --ytmus-genre-primary-melon: #a6e3a1;
  --ytcp-themed-green-inverse: #a6e3a1;
  --ytcp-analytics-pine: #a6e3a1;
  --ytcp-analytics-pine-inverse: #a6e3a1;
  --ytcp-analytics-parrot: #a6e3a1;
  --ytcp-themed-yellow: #fab387;
  --ytmus-genre-primary-gold: #fab387;
  --ytcp-yellow-inverse: #fab387;
  --ytcp-badge-yellow: #fab387;
  --ytcp-analytics-yellow: #fab387;
  --ytcp-analytics-apricot: #fab387;
  --ytcp-suggested-action: #94e2d5;
  --ytcp-analytics-overview: #94e2d5;
  --ytcp-analytics-revenue: #94e2d5;
  --ytcp-analytics-default-secondary: #94e2d5;
  --ytcp-analytics-royal-blue: #b4befe;
  --ytcp-analytics-reach: #b4befe;
  --ytcp-analytics-audience: #b4befe;
  --ytcp-analytics-engagement: #f5c2e7;
  --ytcp-analytics-revenue-secondary: #f5c2e7;
  --ytcp-analytics-bubblegum: #f2cdcd;
  --ytmus-genre-primary-ruby: #f2cdcd;
  --ytmus-genre-primary-salmon: #cba6f7;
  --ytmus-genre-primary-orange: #eba0ac;
  --ytmus-genre-primary-sky: #89dceb;
  --ytmus-genre-primary-sky-inverse: #89dceb;
  --yt-spec-badge-chip-background: #45475a;
  --ytcp-focus-inverse: #cba6f7;
  --ytcp-focus: #cba6f7;
  --ytcp-selected-item: #cba6f7;
  --ytcp-hover-item: #9399b2;
  --ytcp-chip-active-focus: #cba6f7;
  --ytcp-playhead: #9399b2;
  --ytcp-playhead-inverse: #9399b2;
}
:root[dark] ytcp-button.destructive.ytls-error-dialog {
  color: #1e1e2e;
}
:root[dark] yt-formatted-string.ytls-error-dialog,
:root[dark] tp-yt-iron-icon.ytls-error-dialog {
  color: #cdd6f4;
}
:root [src="https://www.gstatic.com/youtube/img/creator/yt_studio_logo_white.svg"] {
  content: url("data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2097.55%2024%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23cba6f7%22%20d%3D%22M17.1%200S6.4%200%203.8.7a4.15%204.15%200%200%200-3%203C0%206.4%200%2012%200%2012a45%2045%200%200%200%20.7%208.2%204.32%204.32%200%200%200%203%203c2.7.8%2013.4.8%2013.4.8s10.7%200%2013.4-.7a4.32%204.32%200%200%200%203-3%2045%2045%200%200%200%20.7-8.2s.1-5.7-.6-8.3a4.32%204.32%200%200%200-3-3C27.9%200%2017.1%200%2017.1%200m-3.4%206.9%208.9%205.1-8.9%205.1z%22/%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20d%3D%22M76.3.9v4.4c0%201.1%200%202%20.1%203.3h-.1A3.36%203.36%200%200%200%2073.4%207c-2.3%200-3.3%202-3.3%206.6V16c0%204.9.8%206.6%203.2%206.6a3.42%203.42%200%200%200%203.2-2.4h.1l.4%202.1h2.6V.9zm6.688.4c-1.126.032-1.687.55-1.687%202.1%200%201.7.599%202.1%201.799%202.1s1.8-.5%201.8-2.1-.6-2.1-1.8-2.1zM45%201.4c-3.6%200-5%201.7-5%204.9s1.1%204.5%203.7%206.8c1.6%201.4%202.8%202.5%202.8%204.8%200%201.5-.4%202.2-1.6%202.2s-1.7-.8-1.6-3.6h-3.1c-.6%204.2.8%206.1%204.5%206.2%203.5%200%205-1.5%205-5.4%200-3.1-1.3-4.4-3.7-6.6-1.9-1.8-2.8-2.5-2.8-4.6%200-1.4.3-2.2%201.6-2.2s1.6%201.1%201.5%203.9l3.1-.2c.5-4.2-.8-6.2-4.4-6.2m7.6%201.4-.4%204.5h-1.4v2.6H52v8.8c0%202.7.4%203.8%202.6%203.8a7.4%207.4%200%200%200%203.1-.6l-.6-2.2a5.2%205.2%200%200%201-1.3.2c-.5%200-.7-.3-.7-1.7V9.9h2.2V7.3H55V2.8zM91%207c-3.3%200-4.7%201.8-4.7%206.7v2.2c0%204.7%201.1%206.7%204.6%206.7s4.7-2%204.7-6.7v-2.2C95.6%208.9%2094.3%207%2091%207m-31.8.3v11.4c0%202.7.9%204%202.9%204a3.46%203.46%200%200%200%203.2-2.1h.1l.3%201.8h2.7V7.3H65v12a1.51%201.51%200%200%201-1.4%201c-.7%200-1-.6-1-1.9V7.3zm22.3%200v15.1h3.2V7.3zm9.4%202c1%200%201.3%201%201.3%203.1v4.7c0%202.2-.4%203.1-1.3%203.1s-1.2-.9-1.2-3.1v-4.7c0-2%20.2-3.1%201.2-3.1M75%209.4a1.56%201.56%200%200%201%201.3.8v8.5c-.2.9-.9%201.4-1.4%201.3-1%200-1.3-1-1.3-4.4v-1.9c0-3.3.3-4.3%201.4-4.3%22/%3E%3C/svg%3E");
}
:root,
:root html,
:root html[dark],
:root html[dark][dark],
:root[dark],
:root[light],
:root [light],
:root html[light],
:root html[light][light] {
  --yt-spec-black-pure-alpha-80: (null);
  --yt-spec-black-pure-alpha-60: (null);
  --yt-spec-black-1-alpha-98: (null);
  --yt-spec-black-1-alpha-95: (null);
  --iron-icon-fill-color: unset;
  --yt-spec-text-primary: #cdd6f4;
  --ytcp-text-primary: #cdd6f4;
  --ytcp-text-primary-inverse: #1e1e2e;
  --ytcp-static-overlay-text-primary-inverse: #1e1e2e;
  --ytcp-wordmark-text: #cdd6f4;
  --ytcp-text-secondary: #a6adc8;
  --ytcp-text-disabled: #bac2de;
  --ytcp-overlay-text-primary: #9399b2;
  --ytcp-general-background-a: #1e1e2e;
  --yt-spec-base-background: #1e1e2e;
  --yt-spec-black-3: #1e1e2e;
  --yt-spec-brand-background-solid: #181825;
  --ytcp-brand-background-solid: #181825;
  --yt-spec-raised-background: #181825;
  --ytcp-general-background-b: #181825;
  --ytcp-analytics-reach-background: #181825;
  --yt-spec-black-2: #181825;
  --ytcp-general-background-c: #11111b;
  --ytcp-menu-background: #313244;
  --ytcp-container-border-color: #313244;
  --ytcp-container-hovered-border-color: #313244;
  --ytcp-line-divider-solid: #313244;
  --ytcp-container-border-color-inverse: #a6adc8;
  --ytcp-line-divider-solid-inverse: #a6adc8;
  --ytcp-call-to-action: #cba6f7;
  --ytcp-call-to-action-inverse: #181825;
  --ytcp-call-to-action-raised-background: #cba6f7;
  --yt-spec-brand-button-background: #cba6f7;
  --ytcp-call-to-action-raised-disabled: #585b70;
  --ytcp-call-to-action-raised-disabled-background: #9399b2;
  --ytcp-call-to-action-raised-background-inverse: #1e1e2e;
  --ytcp-call-to-action-raised-disabled-inverse: #585b70;
  --ytcp-call-to-action-raised-disabled-background-inverse: #9399b2;
  --yt-spec-brand-background-primary: #313244;
  --yt-compact-link-icon-color: #9399b2;
  --ytcp-icon-active: #cba6f7;
  --ytcp-icon-inactive: #9399b2;
  --ytcp-icon-disabled: #6c7086;
  --ytcp-icon-active-inverse: #7f849c;
  --ytcp-icon-disabled-inverse: #bac2de;
  --ytcp-error-red: #f38ba8;
  --ytcp-badge-red: #f38ba8;
  --ytcp-error-red-inverse: #f38ba8;
  --ytcp-themed-red-inverse: #f38ba8;
  --ytcp-themed-red: #cba6f7;
  --ytcp-themed-blue: #cba6f7;
  --ytcp-badge-blue: rgba(203, 166, 247, 0.3);
  --ytcp-badge-blue-solid: #89b4fa;
  --ytcp-themed-blue-inverse: #89b4fa;
  --ytcp-themed-green: #a6e3a1;
  --ytmus-genre-primary-melon: #a6e3a1;
  --ytcp-themed-green-inverse: #a6e3a1;
  --ytcp-analytics-pine: #a6e3a1;
  --ytcp-analytics-pine-inverse: #a6e3a1;
  --ytcp-analytics-parrot: #a6e3a1;
  --ytcp-themed-yellow: #fab387;
  --ytmus-genre-primary-gold: #fab387;
  --ytcp-yellow-inverse: #fab387;
  --ytcp-badge-yellow: #fab387;
  --ytcp-analytics-yellow: #fab387;
  --ytcp-analytics-apricot: #fab387;
  --ytcp-suggested-action: #94e2d5;
  --ytcp-analytics-overview: #94e2d5;
  --ytcp-analytics-revenue: #94e2d5;
  --ytcp-analytics-default-secondary: #94e2d5;
  --ytcp-analytics-royal-blue: #b4befe;
  --ytcp-analytics-reach: #b4befe;
  --ytcp-analytics-audience: #b4befe;
  --ytcp-analytics-engagement: #f5c2e7;
  --ytcp-analytics-revenue-secondary: #f5c2e7;
  --ytcp-analytics-bubblegum: #f2cdcd;
  --ytmus-genre-primary-ruby: #f2cdcd;
  --ytmus-genre-primary-salmon: #cba6f7;
  --ytmus-genre-primary-orange: #eba0ac;
  --ytmus-genre-primary-sky: #89dceb;
  --ytmus-genre-primary-sky-inverse: #89dceb;
  --yt-spec-badge-chip-background: #45475a;
  --ytcp-focus-inverse: #cba6f7;
  --ytcp-focus: #cba6f7;
  --ytcp-selected-item: #cba6f7;
  --ytcp-hover-item: #9399b2;
  --ytcp-chip-active-focus: #cba6f7;
  --ytcp-playhead: #9399b2;
  --ytcp-playhead-inverse: #9399b2;
}
:root ytcp-button.destructive.ytls-error-dialog {
  color: #1e1e2e;
}
:root yt-formatted-string.ytls-error-dialog,
:root tp-yt-iron-icon.ytls-error-dialog {
  color: #cdd6f4;
}


html[darker-dark-theme] {
  background-color: #1e1e2e !important;
  color: #cdd6f4 !important;
  /* Ambient mode */
  /* Comment box */
  /* Bottom bar */
  /* Chips */
  /* Buttons */
}
html[darker-dark-theme] #cinematics {
  mix-blend-mode: lighten;
}
html[darker-dark-theme] .mobile-topbar-header[data-mode="watch"],
html[darker-dark-theme] ytm-mobile-topbar-renderer:not([ambient-topbar]) {
  background: #1e1e2e;
}
html[darker-dark-theme] .mobile-topbar-header[data-mode="watch"] .mobile-topbar-logo,
html[darker-dark-theme] .mobile-topbar-header[data-mode="watch"] .mobile-topbar-title,
html[darker-dark-theme] .mobile-topbar-header[data-mode="watch"] .mobile-topbar-header-content {
  color: #cdd6f4;
}
html[darker-dark-theme] .yt-spec-bottom-sheet-layout__bottom-sheet-renderer-container,
html[darker-dark-theme] .modern-styling {
  background: #313244;
}
html[darker-dark-theme] .yt-spec-bottom-sheet-layout__bottom-sheet-layout-header-wrapper {
  border-bottom-color: #313244;
}
html[darker-dark-theme] .yt-spec-bottom-sheet-layout__bottom-sheet-content {
  color: #cdd6f4;
}
html[darker-dark-theme] .engagement-panel-container {
  background: #181825;
}
html[darker-dark-theme] ytm-pivot-bar-renderer {
  background: #181825;
  color: #cdd6f4;
  border-top-color: #313244;
}
html[darker-dark-theme] .chip-bar {
  background-color: #1e1e2e;
}
html[darker-dark-theme] [chip-style*="STYLE_"] .chip-container {
  color: #cdd6f4;
  background-color: #313244;
}
html[darker-dark-theme] [chip-style*="STYLE_"].selected .chip-container {
  color: #11111b;
  background-color: #cba6f7;
}
html[darker-dark-theme] .yt-spec-touch-feedback-shape--touch-response .yt-spec-touch-feedback-shape__fill {
  background-color: #cdd6f4;
}
html[darker-dark-theme] .yt-spec-touch-feedback-shape--touch-response .yt-spec-touch-feedback-shape__stroke {
  border-color: #45475a;
}
html[darker-dark-theme] .yt-spec-touch-feedback-shape--overlay-touch-response-inverse .yt-spec-touch-feedback-shape__fill {
  background-color: #cba6f7;
}
html[darker-dark-theme] .yt-spec-touch-feedback-shape--overlay-touch-response .yt-spec-touch-feedback-shape__fill {
  background-color: #cdd6f4;
}
html {
  background-color: #1e1e2e !important;
  color: #cdd6f4 !important;
  /* Ambient mode */
  /* Comment box */
  /* Bottom bar */
  /* Chips */
  /* Buttons */
}
html #cinematics {
  mix-blend-mode: lighten;
}
html .mobile-topbar-header[data-mode="watch"],
html ytm-mobile-topbar-renderer:not([ambient-topbar]) {
  background: #1e1e2e;
}
html .mobile-topbar-header[data-mode="watch"] .mobile-topbar-logo,
html .mobile-topbar-header[data-mode="watch"] .mobile-topbar-title,
html .mobile-topbar-header[data-mode="watch"] .mobile-topbar-header-content {
  color: #cdd6f4;
}
html .yt-spec-bottom-sheet-layout__bottom-sheet-renderer-container,
html .modern-styling {
  background: #313244;
}
html .yt-spec-bottom-sheet-layout__bottom-sheet-layout-header-wrapper {
  border-bottom-color: #313244;
}
html .yt-spec-bottom-sheet-layout__bottom-sheet-content {
  color: #cdd6f4;
}
html .engagement-panel-container {
  background: #181825;
}
html ytm-pivot-bar-renderer {
  background: #181825;
  color: #cdd6f4;
  border-top-color: #313244;
}
html .chip-bar {
  background-color: #1e1e2e;
}
html [chip-style*="STYLE_"] .chip-container {
  color: #cdd6f4;
  background-color: #313244;
}
html [chip-style*="STYLE_"].selected .chip-container {
  color: #11111b;
  background-color: #cba6f7;
}
html .yt-spec-touch-feedback-shape--touch-response .yt-spec-touch-feedback-shape__fill {
  background-color: #cdd6f4;
}
html .yt-spec-touch-feedback-shape--touch-response .yt-spec-touch-feedback-shape__stroke {
  border-color: #45475a;
}
html .yt-spec-touch-feedback-shape--overlay-touch-response-inverse .yt-spec-touch-feedback-shape__fill {
  background-color: #cba6f7;
}
html .yt-spec-touch-feedback-shape--overlay-touch-response .yt-spec-touch-feedback-shape__fill {
  background-color: #cdd6f4;
}

/* ==UserStyle==
@name YouTube Catppuccin
@namespace github.com/catppuccin/userstyles/styles/youtube
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/youtube
@version 2026.02.18.1
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/youtube/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Ayoutube
@description Soothing pastel theme for YouTube
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]

@var checkbox logo "Enable YouTube logo" 1
@var checkbox oled "Enable black bars" 0
@var checkbox sponsorBlock "Enable SponsorBlock segments" 1
@var checkbox hideColorSampleTint "Hide color-sampled tint" 1
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

:root[dark] {
  color-scheme: dark !important;
  color: #cdd6f4 !important;
  background: #1e1e2e !important;
  /* Misc */
  /* Selected chapter */
  /* Skeleton */
  /* Ambient mode */
  /* Icons */
  /* verification badge */
  /* Buttons */
  /* Search box */
  /* "Suggestion removed" */
  /* Video description */
  /* Thumbnails */
  /* Panels, popups, tooltips */
  /* Video player */
  /* Video highlight */
  /* Shorts titles and views on homepage */
  /* Buy super thanks bar */
  /* Channel pages */
  /* channel details */
  /* Profiles */
  /* Horizontal list arrows */
  /* Live chat replay */
  /* AI-generated video summary */
  /* Playlist collapsed sidebar */
  /* Playlist metadata */
  /* Playlist titles in search results */
  /* Category tag pills */
  /* Vertical ellipsis menu on main page */
}
:root[dark] ::selection {
  background-color: rgba(203, 166, 247, 0.3) !important;
}
:root[dark] input::placeholder,
:root[dark] textarea::placeholder {
  color: #a6adc8 !important;
}
:root[dark],
:root[dark] [dark],
:root[dark] [system-icons],
:root[dark] [darker-dark-theme],
:root[dark][dark],
:root[dark][system-icons],
:root[dark][darker-dark-theme] {
  --efyt-control-bar-background-color: #181825 !important;
  --dimmer-text: #cdd6f4 !important;
  --yt-spec-white-1: #cdd6f4 !important;
  --yt-spec-white-2: #a6adc8 !important;
  --yt-spec-white-3: #bac2de !important;
  --yt-spec-white-4: #a9b3d6 !important;
  --yt-spec-black-1: #7f849c !important;
  --yt-spec-black-2: #6c7086 !important;
  --yt-spec-black-3: #585b70 !important;
  --yt-spec-black-4: #45475a !important;
  --yt-spec-black-pure: #313244 !important;
  --yt-spec-grey-1: #cdd6f4 !important;
  --yt-spec-grey-2: #a6adc8 !important;
  --yt-spec-grey-3: #bac2de !important;
  --yt-spec-grey-4: #9399b2 !important;
  --yt-spec-grey-5: #7f849c !important;
  --yt-brand-youtube-red: #cba6f7 !important;
  --yt-brand-medium-red: #cba6f7 !important;
  --yt-brand-light-red: #cba6f7 !important;
  --yt-spec-red-30: #fab387 !important;
  --yt-spec-red-70: #f38ba8 !important;
  --yt-spec-red-indicator: #cba6f7 !important;
  --yt-spec-pale-blue: #89dceb !important;
  --yt-spec-light-blue: #89dceb !important;
  --yt-spec-dark-blue: #74c7ec !important;
  --yt-spec-navy-blue: #94e2d5 !important;
  --yt-spec-light-green: #a6e3a1 !important;
  --yt-spec-dark-green: #a6e3a1 !important;
  --yt-spec-yellow: #fab387 !important;
  --yt-spec-black-pure-alpha-5: #a6adc8 !important;
  --yt-spec-black-pure-alpha-10: #9399b2 !important;
  --yt-spec-black-pure-alpha-15: rgba(17, 17, 27, 0.85) !important;
  --yt-spec-black-pure-alpha-30: rgba(17, 17, 27, 0.7) !important;
  --yt-spec-black-pure-alpha-60: rgba(17, 17, 27, 0.4) !important;
  --yt-spec-black-pure-alpha-80: rgba(17, 17, 27, 0.2) !important;
  --yt-spec-black-1-alpha-98: rgba(17, 17, 27, 0.02) !important;
  --yt-spec-black-1-alpha-95: rgba(17, 17, 27, 0.05) !important;
  --yt-spec-white-1-alpha-10: rgba(205, 214, 244, 0.9) !important;
  --yt-spec-white-1-alpha-20: rgba(205, 214, 244, 0.8) !important;
  --yt-spec-white-1-alpha-25: rgba(205, 214, 244, 0.75) !important;
  --yt-spec-white-1-alpha-30: rgba(205, 214, 244, 0.7) !important;
  --yt-spec-white-1-alpha-70: rgba(205, 214, 244, 0.3) !important;
  --yt-spec-white-1-alpha-95: rgba(205, 214, 244, 0.05) !important;
  --yt-spec-white-1-alpha-98: rgba(205, 214, 244, 0.02) !important;
  --yt-brand-medium-red-alpha-90: rgba(203, 166, 247, 0.1) !important;
  --yt-brand-medium-red-alpha-30: rgba(203, 166, 247, 0.7) !important;
  --yt-brand-light-red-alpha-30: rgba(203, 166, 247, 0.7) !important;
  --yt-spec-light-blue-alpha-30: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-dark-blue-alpha-30: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-base-background: #1e1e2e !important;
  --yt-spec-raised-background: #1e1e2e !important;
  --yt-spec-menu-background: #181825 !important;
  --yt-spec-inverted-background: #cdd6f4 !important;
  --yt-spec-additive-background: #313244 !important;
  --yt-spec-outline: #313244 !important;
  --yt-spec-shadow: rgba(17, 17, 27, 0.75) !important;
  --yt-spec-text-primary: #cdd6f4 !important;
  --yt-spec-text-secondary: #a6adc8 !important;
  --yt-spec-text-disabled: #bac2de !important;
  --yt-spec-text-primary-inverse: #11111b !important;
  --yt-spec-call-to-action: #cba6f7 !important;
  --yt-spec-call-to-action-inverse: #cba6f7 !important;
  --yt-spec-suggested-action: rgba(203, 166, 247, 0.2) !important;
  --yt-spec-suggested-action-inverse: #cdd6f4 !important;
  --yt-spec-icon-active-other: #cdd6f4 !important;
  --yt-spec-button-chip-background-hover: #45475a !important;
  --yt-spec-touch-response: #313244 !important;
  --yt-spec-touch-response-inverse: #cba6f7 !important;
  --yt-spec-brand-icon-active: #cba6f7 !important;
  --yt-spec-brand-button-background: #cba6f7 !important;
  --yt-spec-brand-link-text: #74c7ec !important;
  --yt-spec-wordmark-text: #cdd6f4 !important;
  --yt-spec-error-indicator: #f38ba8 !important;
  --yt-spec-themed-blue: #cba6f7 !important;
  --yt-spec-themed-green: #a6e3a1 !important;
  --yt-spec-ad-indicator: #94e2d5 !important;
  --yt-spec-themed-overlay-background: rgba(17, 17, 27, 0.8) !important;
  --yt-spec-commerce-badge-background: #a6e3a1 !important;
  --yt-spec-static-brand-red: #cba6f7 !important;
  --yt-spec-static-brand-white: #cdd6f4 !important;
  --yt-spec-static-brand-black: #1e1e2e !important;
  --yt-spec-static-clear-color: #11111b !important;
  --yt-spec-static-clear-black: #11111b !important;
  --yt-spec-static-ad-yellow: #fab387 !important;
  --yt-spec-static-grey: #a6adc8 !important;
  --yt-spec-static-overlay-background-solid: #11111b !important;
  --yt-spec-static-overlay-background-heavy: #11111b !important;
  --yt-spec-static-overlay-background-medium: rgba(17, 17, 27, 0.5) !important;
  --yt-spec-static-overlay-background-light: rgba(17, 17, 27, 0.9) !important;
  --yt-spec-static-overlay-text-primary: #cdd6f4 !important;
  --yt-spec-static-overlay-text-secondary: rgba(166, 173, 200, 0.3) !important;
  --yt-spec-static-overlay-text-disabled: rgba(166, 173, 200, 0.7) !important;
  --yt-spec-static-overlay-call-to-action: #cba6f7 !important;
  --yt-spec-static-overlay-icon-active-other: #11111b !important;
  --yt-spec-static-overlay-icon-inactive: #45475a !important;
  --yt-spec-static-overlay-icon-disabled: #585b70 !important;
  --yt-spec-static-overlay-button-primary: #cba6f7 !important;
  --yt-spec-static-overlay-touch-response: #7f849c !important;
  --yt-spec-static-overlay-touch-response-inverse: #45475a !important;
  --yt-spec-static-overlay-background-brand: #cba6f7 !important;
  --yt-spec-assistive-feed-themed-gradient-1: #a6adc8 !important;
  --yt-spec-assistive-feed-themed-gradient-2: #b4befe !important;
  --yt-spec-assistive-feed-themed-gradient-3: #f38ba8 !important;
  --yt-spec-brand-background-solid: #1e1e2e !important;
  --yt-spec-brand-background-primary: #1e1e2e !important;
  --yt-spec-brand-background-secondary: #181825 !important;
  --yt-spec-general-background-a: #1e1e2e !important;
  --yt-spec-general-background-b: #1e1e2e !important;
  --yt-spec-general-background-c: #11111b !important;
  --yt-spec-error-background: #1e1e2e !important;
  --yt-spec-10-percent-layer: #45475a !important;
  --yt-spec-snackbar-background: #181825 !important;
  --yt-spec-snackbar-background-updated: #181825 !important;
  --yt-spec-badge-chip-background: #313244 !important;
  --yt-spec-verified-badge-background: #6c7086 !important;
  --yt-spec-call-to-action-fadeoutd: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-call-to-action-hover: #cba6f7 !important;
  --yt-spec-brand-button-background-hover: #cba6f7 !important;
  --yt-spec-brand-link-text-fadeoutd: rgba(203, 166, 247, 0.7) !important;
  --yt-spec-filled-button-focus-outline: #313244 !important;
  --yt-spec-static-overlay-button-hover: #45475a !important;
  --yt-spec-mono-filled-hover: #45475a !important;
  --yt-spec-commerce-filled-hover: #cba6f7 !important;
  --yt-spec-mono-tonal-hover: #45475a !important;
  --yt-spec-commerce-tonal-hover: #585b70 !important;
  --yt-spec-static-overlay-filled-hover: #7f849c !important;
  --yt-spec-static-overlay-tonal-hover: #45475a !important;
  --yt-spec-paper-tab-ink: rgba(205, 214, 244, 0.7) !important;
  --yt-spec-filled-button-text: #cdd6f4 !important;
  --yt-spec-selected-nav-text: #cdd6f4 !important;
  --iron-icon-fill-color: #cdd6f4 !important;
  /* Search bar */
  --ytd-searchbox-border-color: #313244 !important;
  --ytd-searchbox-legacy-border-color: #313244 !important;
  --ytd-searchbox-legacy-border-shadow-color: #11111b !important;
  --ytd-searchbox-legacy-button-color: #181825 !important;
  --ytd-searchbox-legacy-button-border-color: #313244 !important;
  --ytd-searchbox-legacy-button-focus-color: #cba6f7 !important;
  --ytd-searchbox-legacy-button-hover-color: #181825 !important;
  --ytd-searchbox-legacy-button-hover-border-color: #313244 !important;
  --ytd-searchbox-legacy-button-icon-color: #cba6f7 !important;
  --ytd-searchbox-background: #1e1e2e !important;
  --ytd-searchbox-text-color: #cdd6f4 !important;
  /* System icons */
  --yt-spec-icon-inactive: #cdd6f4 !important;
  --yt-spec-icon-disabled: #7f849c !important;
  --yt-spec-brand-icon-inactive: #9399b2 !important;
  /* Yt video Page */
  --yt-live-chat-background-color: #1e1e2e !important;
  --yt-live-chat-action-panel-background-color: #1e1e2e !important;
  --yt-live-chat-secondary-background-color: #45475a !important;
  --yt-live-chat-toast-background-color: #585b70 !important;
  --yt-live-chat-mode-change-background-color: #1e1e2e !important;
  --yt-live-chat-secondary-text-color: #a6adc8 !important;
  --yt-live-chat-tertiary-text-color: rgba(205, 214, 244, 0.46) !important;
  --yt-live-chat-text-input-field-inactive-underline-color: #a6adc8 !important;
  --yt-live-chat-text-input-field-placeholder-color: #a6adc8 !important;
  --yt-live-chat-enabled-send-button-color: #cdd6f4 !important;
  --yt-live-chat-disabled-icon-button-color: #bac2de !important;
  --yt-live-chat-picker-button-hover-color: #cba6f7 !important;
  --yt-live-chat-mention-background-color: #cba6f7 !important;
  --yt-live-chat-mention-text-color: #cdd6f4 !important;
  --yt-live-chat-deleted-message-color: #a6adc8 !important;
  --yt-live-chat-deleted-message-bar-color: #bac2de !important;
  --yt-live-chat-reconnect-message-color: #cdd6f4 !important;
  --yt-live-chat-disabled-button-background-color: #6c7086 !important;
  --yt-live-chat-sub-panel-background-color: #1e1e2e !important;
  --yt-live-chat-sub-panel-background-color-transparent: #181825 !important;
  --yt-live-chat-moderator-color: #b4befe !important;
  --yt-live-chat-owner-color: #fab387 !important;
  --yt-live-chat-message-highlight-background-color: #1e1e2e !important;
  --yt-live-chat-sponsor-color: #a6e3a1 !important;
  --yt-live-chat-overlay-color: rgba(24, 24, 37, 0.5) !important;
  --yt-live-chat-dialog-background-color: #1e1e2e !important;
  --yt-emoji-picker-variant-selector-bg-color: #1e1e2e !important;
  --yt-live-chat-moderation-mode-hover-background-color: rgba(24, 24, 37, 0.7) !important;
  --yt-grey: #a6adc8 !important;
  --yt-live-chat-text-input-field-suggestion-background-color: #a6adc8 !important;
  --yt-live-chat-text-input-field-suggestion-background-color-hover: #bac2de !important;
  --yt-emoji-picker-search-background-color: #313244 !important;
  --yt-emoji-picker-search-color: #cdd6f4 !important;
  --yt-emoji-picker-search-placeholder-color: #cba6f7 !important;
  --yt-live-chat-slider-active-color: #cba6f7 !important;
  --yt-live-chat-slider-container-color: #313244 !important;
  --yt-live-chat-slider-markers-color: #cdd6f4 !important;
  --yt-live-chat-banner-gradient-scrim: linear-gradient(#181825, transparent) !important;
  --yt-live-chat-action-panel-gradient-scrim: linear-gradient(to top, #181825, transparent) !important;
  --yt-live-chat-automod-button-background-color-hover: rgba(17, 17, 27, 0.5) !important;
  --yt-live-chat-automod-button-explanation-color: rgba(203, 166, 247, 0.3) !important;
  --yt-live-chat-shimmer-background-color: rgba(17, 17, 27, 0.6) !important;
  --yt-live-chat-shimmer-linear-gradient: linear-gradient(0deg, rgba(205, 214, 244, 0.9) 40%, rgba(30, 30, 46, 0.7) 50%, rgba(205, 214, 244, 0.9) 60%) !important;
  --yt-live-chat-vem-background-color: #181825 !important;
  --yt-live-chat-product-picker-icon-color: rgba(205, 214, 244, 0.5) !important;
  --yt-live-chat-product-picker-hover-color: #6c7086 !important;
  --yt-live-chat-product-picker-disabled-icon-color: rgba(205, 214, 244, 0.7) !important;
  --yt-live-chat-action-panel-background-color-transparent: (null) !important;
  --paper-tooltip-background: #6c7086 !important;
  --paper-tooltip-text-color: #cdd6f4 !important;
  /* Links */
  --yt-endpoint-color: #cba6f7 !important;
  --yt-endpoint-visited-color: #cba6f7 !important;
  --yt-endpoint-hover-color: #cba6f7 !important;
  --sb-dark-red-outline: #cba6f7 !important;
  --sb-main-bg-color: #1e1e2e !important;
  --sb-main-fg-color: #cdd6f4 !important;
  --sb-grey-bg-color: #1e1e2e !important;
  --sb-grey-fg-color: #a6adc8 !important;
  --sb-red-bg-color: #cba6f7 !important;
  --sb-category-sponsor: #a6e3a1 !important;
  --sb-category-selfpromo: #f9e2af !important;
  --sb-category-exclusive_access: #94e2d5 !important;
  --sb-category-interaction: #cba6f7 !important;
  --sb-category-poi_highlight: #f5c2e7 !important;
  --sb-category-intro: #89dceb !important;
  --sb-category-outro: #89b4fa !important;
  --sb-category-preview: #74c7ec !important;
  --sb-category-filler: #b4befe !important;
  --sb-category-music_offtopic: #fab387 !important;
}
:root[dark]:not(.style-scope) {
  --primary-text-color: #cdd6f4 !important;
  --primary-background-color: #1e1e2e !important;
  --secondary-text-color: #a6adc8 !important;
  --disabled-text-color: #bac2de !important;
  --divider-color: #6c7086 !important;
  --error-color: #f38ba8 !important;
  --primary-color: #cba6f7 !important;
  --light-primary-color: #cba6f7 !important;
  --dark-primary-color: #89b4fa !important;
  --accent-color: #cba6f7 !important;
  --light-accent-color: #cba6f7 !important;
  --dark-accent-color: #cba6f7 !important;
  --light-theme-background-color: #1e1e2e !important;
  --light-theme-base-color: #cdd6f4 !important;
  --light-theme-text-color: #cdd6f4 !important;
  --light-theme-secondary-color: #a6adc8 !important;
  --light-theme-disabled-color: #bac2de !important;
  --light-theme-divider-color: #6c7086 !important;
  --dark-theme-background-color: #1e1e2e !important;
  --dark-theme-base-color: #cdd6f4 !important;
  --dark-theme-text-color: #cdd6f4 !important;
  --dark-theme-secondary-color: #a6adc8 !important;
  --dark-theme-disabled-color: #bac2de !important;
  --dark-theme-divider-color: #6c7086 !important;
}
:root[dark] .yt-spec-touch-feedback-shape__hover-effect {
  background-color: #313244 !important;
}
:root[dark] ytd-watch-metadata {
  --yt-saturated-raised-background: #45475a !important;
  --yt-saturated-text-primary: #cdd6f4 !important;
  --yt-saturated-text-secondary: #bac2de !important;
}
:root[dark] .yt-core-attributed-string--link-inherit-color {
  color: #cdd6f4 !important;
}
:root[dark] .yt-core-attributed-string--highlight-text-decorator {
  background-color: #585b70 !important;
}
:root[dark] #channel-name.ytd-video-meta-block {
  --yt-endpoint-color: #cba6f7 !important;
  --yt-endpoint-visited-color: #cba6f7 !important;
  color: #cba6f7 !important;
}
:root[dark] .yt-page-navigation-progress {
  background: #cba6f7 !important;
}
:root[dark] ytd-macro-markers-list-item-renderer {
  --ytd-macro-markers-list-item-background-color: #313244 !important;
  --ytd-macro-markers-list-item-title-color: #cdd6f4 !important;
  --ytd-macro-markers-list-item-secondary-color: #bac2de !important;
  --ytd-macro-markers-list-item-timestamp-background-color: #45475a !important;
}
:root[dark] ytd-playlist-panel-video-renderer {
  --yt-lightsource-section2-color: #45475a !important;
  --yt-lightsource-section4-color: #585b70 !important;
  --yt-lightsource-primary-title-color: #cdd6f4 !important;
  --yt-lightsource-secondary-title-color: #cdd6f4 !important;
  --yt-active-playlist-panel-background-color: #313244 !important;
}
:root[dark] ytd-playlist-panel-renderer[collapsible][collapsed][use-color-palette] .header.ytd-playlist-panel-renderer {
  --iron-icon-fill-color: #cdd6f4 !important;
  background-color: #1e1e2e !important;
}
:root[dark] #container.ytd-masthead {
  --iron-icon-fill-color: #cdd6f4 !important;
}
:root[dark] #background.ytd-masthead,
:root[dark] #frosted-glass {
  --yt-frosted-glass-desktop: #1e1e2e !important;
  --yt-spec-frosted-glass-desktop: #1e1e2e !important;
}
:root[dark] ytd-feed-filter-chip-bar-renderer[expand-instead-of-scroll] #chips-wrapper.ytd-feed-filter-chip-bar-renderer {
  --iron-icon-fill-color: #cdd6f4 !important;
  background-color: #1e1e2e !important;
}
:root[dark] #ytd-player #container {
  background: #11111b !important;
}
:root[dark] .ytp-progress-list {
  background: rgba(49, 50, 68, 0.8) !important;
}
:root[dark] .ytp-load-progress {
  background: #6c7086 !important;
}
:root[dark] ytd-expandable-metadata-renderer {
  --yt-lightsource-section1-color: #1e1e2e !important;
  --yt-lightsource-section2-color: #313244 !important;
  --yt-lightsource-section3-color: #45475a !important;
  --yt-lightsource-section4-color: #585b70 !important;
  --yt-lightsource-primary-title-color: #cdd6f4 !important;
  --yt-lightsource-secondary-title-color: #a6adc8 !important;
}
:root[dark] yt-live-chat-renderer {
  --yt-button-default-text-color: #cdd6f4 !important;
  --yt-button-default-background-color: #1e1e2e !important;
  --yt-button-dark-text-color: #1e1e2e !important;
  --yt-button-dark-background-color: #cba6f7 !important;
  --yt-button-payment-background-color: #cba6f7 !important;
}
:root[dark] yt-icon-button.yt-live-chat-item-list-renderer {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] yt-icon-button.yt-live-chat-item-list-renderer:hover {
  background-color: #bd8ff5 !important;
}
:root[dark] ytd-author-comment-badge-renderer:not(
    [style*="--ytd-author-comment-badge-icon-background-color: transparent;"]
  ) {
  --yt-basic-background-color: #313244 !important;
  --yt-basic-foreground-title-color: #313244 !important;
  --ytd-author-comment-badge-background-color: #313244 !important;
  --ytd-author-comment-badge-name-color: #cdd6f4 !important;
  --ytd-author-comment-badge-icon-color: #cdd6f4 !important;
}
:root[dark] #guide-skeleton,
:root[dark] #home-container-skeleton,
:root[dark] #home-chips {
  background-color: #1e1e2e !important;
  z-index: -1 !important;
}
:root[dark] #guide-skeleton .guide-ghost-icon,
:root[dark] #guide-skeleton .guide-ghost-text,
:root[dark] .masthead-skeleton-icon,
:root[dark] #home-page-skeleton .skeleton-bg-color,
:root[dark] .watch-skeleton .skeleton-bg-color {
  background-color: #45475a !important;
}
:root[dark] #cinematics,
:root[dark] #cinematic-container {
  mix-blend-mode: lighten !important;
}
:root[dark] .ytp-settings-button.ytp-hd-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-hdr-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-4k-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-5k-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-8k-quality-badge::after,
:root[dark] .ytp-settings-button.ytp-3d-badge-grey::after,
:root[dark] .ytp-settings-button.ytp-3d-badge::after {
  background-color: #cba6f7 !important;
}
:root[dark] [fill="red"],
:root[dark] [fill="#F00"],
:root[dark] [fill="#FF0000"],
:root[dark] [fill="#f03"],
:root[dark] [fill="#FF0033"] {
  fill: #cba6f7 !important;
}
:root[dark] [fill="white"] {
  fill: #cdd6f4 !important;
}
:root[dark] [src*="https://www.gstatic.com/images/icons/material/system/1x/check_circle_grey600_36dp.png"] {
  filter: brightness(0) saturate(100%) invert(75%) sepia(82%) saturate(1008%) hue-rotate(189deg) brightness(120%) contrast(90%) !important;
}
:root[dark] yt-icon.ytd-logo [fill="white"] {
  fill: #11111b !important;
}
:root[dark] .yt-spec-icon-shape [fill="#FAFAFA"],
:root[dark] .yt-spec-icon-shape [fill="#000"],
:root[dark] .yt-spec-icon-shape [fill="#fff"],
:root[dark] .yt-spec-icon-shape [fill="#FFF"],
:root[dark] .yt-spec-icon-shape [fill="#FFFFFF"] {
  fill: #11111b !important;
}
:root[dark] .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon,
:root[dark] .yt-spec-icon-badge-shape {
  color: #cdd6f4 !important;
}
:root[dark] .yt-spec-icon-badge-shape--type-notification .yt-spec-icon-badge-shape__badge {
  background-color: #cba6f7 !important;
  color: #313244 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
  background-color: #313244 !important;
  /* Accent for filled-in thumbs up (like button) */
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(3,3,3)"],
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(0,0,0)"],
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(255,255,255)"] {
  fill: #cdd6f4 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(0,0,0)"],
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(255,255,255)"] {
  stroke: #cdd6f4 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] {
  fill: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] + [stroke] {
  stroke: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal:hover {
  background-color: #45475a !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline {
  color: #cdd6f4 !important;
  border-color: #585b70 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline:hover {
  background-color: #585b70 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text {
  color: #cdd6f4 !important;
  /* Accent for filled-in thumbs up (like button) */
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text path[d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"] {
  fill: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text:hover {
  background-color: #45475a !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled:hover {
  background-color: #bd8ff5 !important;
}
:root[dark] .yt-spec-button-shape-next--disabled {
  color: #7f849c !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
  background-color: #313244 !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal:hover {
  background-color: #45475a !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
  color: #cdd6f4 !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--outline {
  color: #cdd6f4 !important;
  border-color: #45475a !important;
}
:root[dark] .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--outline:hover {
  background: #313244 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline {
  color: #cba6f7 !important;
  border-color: #585b70 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline:hover {
  background-color: rgba(203, 166, 247, 0.3) !important;
  color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text {
  color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text:hover {
  background-color: rgba(203, 166, 247, 0.3) !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root[dark] .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--filled:hover {
  background-color: #d9bdf9 !important;
}
:root[dark] .yt-spec-button-shape-next--disabled.yt-spec-button-shape-next--filled {
  color: #a6adc8 !important;
  background-color: rgba(69, 71, 90, 0.7) !important;
}
:root[dark] ytd-searchbox[has-focus] #container.ytd-searchbox {
  border-color: #cba6f7 !important;
}
:root[dark] .ytSearchboxComponentInputBox,
:root[dark] .ytSearchboxComponentInputBoxDark {
  background: var(--ytd-searchbox-background) !important;
  color: var(--ytd-searchbox-text-color) !important;
  border-color: var(--ytd-searchbox-border-color) !important;
  box-shadow: none !important;
}
:root[dark] .ytSearchboxComponentInputBoxHasFocus,
:root[dark] .ytSearchboxComponentInputBoxHasFocusDark {
  border-color: #cba6f7 !important;
}
:root[dark] .ytSuggestionComponentSuggestionHover:hover,
:root[dark] .ytSuggestionComponentSuggestionHoverDark:hover {
  background: #45475a !important;
}
:root[dark] .ytSearchboxComponentSuggestionsContainer,
:root[dark] .ytSearchboxComponentSuggestionsContainerDark {
  background: var(--yt-spec-raised-background) !important;
  border-color: var(--yt-spec-raised-background) !important;
}
:root[dark] .ytSuggestionComponentSuggestion,
:root[dark] .ytSuggestionComponentSuggestionDark {
  color: var(--ytd-searchbox-text-color) !important;
}
:root[dark] .ytSearchboxComponentSearchButton,
:root[dark] .ytSearchboxComponentSearchButtonDark {
  color: var(--ytd-searchbox-text-color) !important;
  background: #313244 !important;
  border-color: var(--ytd-searchbox-border-color) !important;
}
:root[dark] .ytSearchboxComponentClearButtonIcon,
:root[dark] .ytSearchboxComponentClearButtonIconDark {
  color: var(--ytd-searchbox-text-color) !important;
}
:root[dark] .ytSearchboxComponentReportButton,
:root[dark] .ytSearchboxComponentReportButtonDark,
:root[dark] .ytSuggestionComponentRemoveLink,
:root[dark] .ytSuggestionComponentRemoveLinkDark {
  color: #a6adc8 !important;
}
:root[dark] .sbsb_a {
  background: #313244 !important;
}
:root[dark] .sbdd_b {
  border-color: var(--yt-spec-raised-background) !important;
  background-color: var(--yt-spec-raised-background) !important;
}
:root[dark] .sbpqs_a,
:root[dark] .gsfs {
  color: var(--yt-spec-text-primary) !important;
}
:root[dark] .sbsb_i {
  color: var(--yt-spec-call-to-action) !important;
}
:root[dark] .sbsb_d {
  background-color: var(--yt-spec-additive-background) !important;
}
:root[dark] .sbdd_c {
  visibility: hidden !important;
}
:root[dark] .sbpqs_c {
  color: #7f849c !important;
}
:root[dark] .sbpqs_a::before,
:root[dark] .sbqs_c::before {
  content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20enable-background%3D%22new%200%200%2024%2024%22%20height%3D%2224%22%20viewBox%3D%221%201%2027%2027%22%20width%3D%2224%22%20focusable%3D%22false%22%20style%3D%22width%3A100%25%3Bheight%3A100%25%22%20pointer-events%3D%22none%22%20display%3D%22block%22%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20d%3D%22m20.87%2020.17-5.59-5.59A6.96%206.96%200%200%200%2017%2010c0-3.87-3.13-7-7-7s-7%203.13-7%207a6.995%206.995%200%200%200%2011.58%205.29l5.59%205.59zM10%2016c-3.31%200-6-2.69-6-6s2.69-6%206-6%206%202.69%206%206-2.69%206-6%206%22/%3E%3C/svg%3E") !important;
  background: none !important;
}
:root[dark] .yt-core-attributed-string__link--call-to-action-color {
  color: #cba6f7 !important;
}
:root[dark] .YtwCourseProgressViewModelHostProgressTitle,
:root[dark] .YtwCourseProgressViewModelHostProgressSubtitle {
  color: #cdd6f4 !important;
}
:root[dark] .YtwCourseProgressViewModelHostProgressBar {
  background-color: rgba(205, 214, 244, 0.2) !important;
}
:root[dark] .YtwCourseProgressViewModelHostProgressBar .YtwCourseProgressViewModelHostProgressBarFill {
  background-color: #cdd6f4 !important;
}
:root[dark] .ytwHowThisWasMadeSectionViewModelSectionTitle,
:root[dark] .ytwHowThisWasMadeSectionViewModelBodyHeader {
  color: #cdd6f4 !important;
}
:root[dark] .ytwHowThisWasMadeSectionViewModelBodyText {
  color: #a6adc8 !important;
}
:root[dark] #time-status:has([aria-label="LIVE"]),
:root[dark] .badge[aria-label="LIVE"],
:root[dark] .badge[aria-label="PREMIERE"],
:root[dark] .badge-shape-wiz--live.badge-shape-wiz--overlay,
:root[dark] .badge-shape-wiz--thumbnail-live {
  background: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] #thumbnail [style="background-color: rgba(51, 51, 51, 0.8);"],
:root[dark] .YtInlinePlayerControlsTopRightControlsCircleButton,
:root[dark] .badge-shape-wiz--default.badge-shape-wiz--overlay,
:root[dark] .branding-context-container-inner {
  background-color: #313244 !important;
  color: #cdd6f4 !important;
}
:root[dark] .ytp-sb-unsubscribe {
  background-color: #585b70 !important;
  color: #cdd6f4 !important;
}
:root[dark] .ytp-sb-subscribe {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] ytd-thumbnail-overlay-resume-playback-renderer {
  background-color: #45475a !important;
}
:root[dark] .badge-shape-wiz--thumbnail-default {
  color: #cdd6f4 !important;
  background: rgba(17, 17, 27, 0.8) !important;
}
:root[dark] .ytp-tooltip-bottom-text {
  background: rgba(49, 50, 68, 0.9) !important;
  color: #cdd6f4 !important;
  text-shadow: none !important;
}
:root[dark] .ytp-popup {
  background: rgba(49, 50, 68, 0.9) !important;
  text-shadow: none !important;
}
:root[dark] .ytp-panel-menu,
:root[dark] .ytp-panel-header,
:root[dark] .ytp-panel-footer,
:root[dark] .ytp-menuitem-label,
:root[dark] .ytp-premium-label,
:root[dark] .ytp-menuitem-content,
:root[dark] .ytp-menuitem-label-count,
:root[dark] .ytp-menu-label-secondary,
:root[dark] .ytd-menu-title-renderer {
  color: #cdd6f4 !important;
}
:root[dark] .ytp-panel-header {
  border-bottom-color: #585b70 !important;
}
:root[dark] .yt-spec-dialog-layout {
  background-color: #181825 !important;
}
:root[dark] .ytp-panel-footer-content-link {
  color: #cba6f7 !important;
}
:root[dark] .ytp-panel-back-button {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m19.41%2020.09-4.58-4.59%204.58-4.59L18%209.5l-6%206%206%206z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root[dark] .ytp-menuitem[aria-checked="true"] .ytp-menuitem-toggle-checkbox {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22M9%2016.2%204.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
  background-color: #cba6f7 !important;
}
:root[dark] .ytp-menuitem:not([aria-disabled="true"]):hover {
  background-color: #45475a !important;
}
:root[dark] .ytp-menuitem svg > path:not([fill="none"]) {
  fill: #cdd6f4 !important;
}
:root[dark] .ytp-menuitem[aria-haspopup="true"] .ytp-menuitem-content {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m12.59%2020.34%204.58-4.59-4.58-4.59L14%209.75l6%206-6%206z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root[dark] .ytp-menuitem[role="menuitemradio"][aria-checked="true"] .ytp-menuitem-label {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22M9%2016.2%204.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root[dark] yt-progress-bar .ytProgressBarLineProgressBarPlayed,
:root[dark] yt-progress-bar .ytProgressBarPlayheadProgressBarPlayheadDot {
  background: #cba6f7 !important;
}
:root[dark] yt-progress-bar .ytProgressBarLineProgressBarHovered,
:root[dark] yt-progress-bar .ytProgressBarLineProgressBarBackground {
  background: #cdd6f4 !important;
}
:root[dark] .ytp-cards-button .ytp-cards-button-icon use {
  fill: #1e1e2e !important;
}
:root[dark] .ytp-cards-button .ytp-cards-button-icon path {
  fill: #cdd6f4 !important;
}
:root[dark] .ytp-cards-teaser .ytp-cards-teaser-box {
  background-color: #585b70 !important;
  border-bottom-color: #585b70 !important;
}
:root[dark] .ytp-cards-teaser .ytp-cards-teaser-text {
  color: #cdd6f4 !important;
}
:root[dark] .html5-video-player {
  color: #cdd6f4 !important;
  /* youtube live ring */
  /* stats for nerds */
}
:root[dark] .html5-video-player .ytp-swatch-background-color,
:root[dark] .html5-video-player .ytp-play-progress {
  background: #cba6f7 !important;
}
:root[dark] .html5-video-player .ytp-svg-fill,
:root[dark] .html5-video-player [fill="#fff"] {
  fill: #cdd6f4 !important;
}
:root[dark] .html5-video-player .ytp-volume-slider-handle,
:root[dark] .html5-video-player .ytp-volume-slider-handle::before {
  background-color: #cdd6f4 !important;
}
:root[dark] .html5-video-player .ytp-volume-slider-handle::after {
  background-color: rgba(205, 214, 244, 0.2) !important;
}
:root[dark] .html5-video-player .ytp-time-current,
:root[dark] .html5-video-player .ytp-time-separator,
:root[dark] .html5-video-player .ytp-time-duration {
  color: #cdd6f4 !important;
}
:root[dark] .html5-video-player .ytp-live-badge[disabled]::before {
  background: #cba6f7 !important;
}
:root[dark] .html5-video-player .ytp-live-badge::before {
  background: #6c7086 !important;
}
:root[dark] .html5-video-player .yt-spec-avatar-shape__badge-text {
  color: #11111b !important;
}
:root[dark] .html5-video-player .yt-spec-avatar-shape--live-ring {
  border-color: #cba6f7 !important;
}
:root[dark] .html5-video-player .yt-spec-avatar-shape__live-badge {
  background-color: #cba6f7 !important;
}
:root[dark] .html5-video-player .ytp-button[aria-pressed]::after,
:root[dark] .html5-video-player .ytp-subtitles-button[aria-pressed]::after {
  background-color: #cba6f7 !important;
}
:root[dark] .html5-video-player .ytp-sfn {
  background: rgba(30, 30, 46, 0.8) !important;
  color: #cdd6f4 !important;
}
:root[dark] .html5-video-player .ytp-autonav-toggle-button {
  background-color: #585b70 !important;
}
:root[dark] .html5-video-player .ytp-autonav-toggle-button::after {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M12.75%204.5h-3c-.6%200-1.17.23-1.6.65-.42.43-.65%201-.65%201.6v22.5c0%20.59.23%201.16.65%201.59.43.42%201%20.66%201.6.66h3c.59%200%201.16-.24%201.59-.66.42-.43.66-1%20.66-1.59V6.75c0-.6-.24-1.17-.66-1.6-.43-.42-1-.65-1.59-.65m13.5%200h-3c-.6%200-1.17.23-1.6.65-.42.43-.65%201-.65%201.6v22.5c0%20.59.23%201.16.65%201.59.43.42%201%20.66%201.6.66h3c.59%200%201.16-.24%201.59-.66.42-.43.66-1%20.66-1.59V6.75c0-.6-.24-1.17-.66-1.6-.43-.42-1-.65-1.59-.65%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
  background-color: #7f849c !important;
}
:root[dark] .html5-video-player .ytp-autonav-toggle-button[aria-checked="true"]::after {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22m17%208.6-6.11-3.61c-1.5-.88-3.39.2-3.39%201.94v22.13c0%201.74%201.89%202.82%203.39%201.94L17%2027.4zm0%200v18.8L33%2018z%22%20fill%3D%22%231e1e2e%22/%3E%3C/svg%3E") !important;
  background-color: #cdd6f4 !important;
}
:root[dark] ytd-rich-item-renderer.ytd-rich-item-renderer-highlight {
  background-color: rgba(203, 166, 247, 0.1) !important;
  box-shadow: rgba(203, 166, 247, 0.1) 0 0 0 10px !important;
}
:root[dark] #shorts-container {
  --yt-spec-static-overlay-text-primary: #cdd6f4 !important;
  /* Buy super thanks button */
}
:root[dark] #shorts-container .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container .YtwFactoidRendererLabel {
  color: #a6adc8 !important;
}
:root[dark] #shorts-container .YtwFactoidRendererValue {
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container ytd-reel-video-renderer:not([is-watch-while-mode]) .yt-spec-button-shape-with-label__label {
  color: #bac2de !important;
}
:root[dark] #shorts-container ytd-reel-video-renderer[is-watch-while-mode] .yt-spec-button-shape-with-label__label {
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container .yt-spec-button-shape-next--overlay-dark.yt-spec-button-shape-next--tonal,
:root[dark] #shorts-container .YtdDesktopShortsVolumeControlsBackgroundScrim {
  background-color: rgba(30, 30, 46, 0.6) !important;
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container .yt-spec-button-shape-next--overlay-dark.yt-spec-button-shape-next--filled {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] #shorts-container .YtdDesktopShortsVolumeControlsMuteIcon {
  color: #cdd6f4 !important;
}
:root[dark] #shorts-container .YtdShortsSuggestedActionStaticHostContainer {
  background-color: rgba(30, 30, 46, 0.6) !important;
}
:root[dark] #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostLeadingIcon,
:root[dark] #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostPrimaryText {
  color: #cdd6f4 !important;
}
:root[dark] .shortsLockupViewModelHostOutsideMetadataEndpoint {
  color: #cdd6f4 !important;
}
:root[dark] .shortsLockupViewModelHostOutsideMetadataSubhead {
  color: #a6adc8 !important;
}
:root[dark] #progressContainer.tp-yt-paper-progress {
  background-color: #181825 !important;
}
:root[dark] #comment-chip-container.yt-pdg-comment-chip-renderer,
:root[dark] .slider-knob-inner.tp-yt-paper-slider {
  background: #cba6f7 !important;
}
:root[dark] #primaryProgress.tp-yt-paper-progress {
  background: linear-gradient(139deg, #fab387, #eba0ac, #f38ba8, #f5c2e7) !important;
}
:root[dark] #container.ytd-pdg-comment-preview-renderer {
  background-color: #181825 !important;
}
:root[dark] #comment-chip-price.yt-pdg-comment-chip-renderer,
:root[dark] yt-icon.yt-pdg-comment-chip-renderer {
  color: #11111b !important;
}
:root[dark] .yt-tab-shape-wiz__tab {
  color: #bac2de !important;
}
:root[dark] .yt-tab-shape-wiz__tab--tab-selected {
  color: #cdd6f4 !important;
}
:root[dark] .yt-tab-group-shape-wiz__slider {
  background-color: #cdd6f4 !important;
}
:root[dark] .yt-tab-shape-wiz:hover .yt-tab-shape-wiz__tab-bar {
  background-color: #bac2de !important;
}
:root[dark] .truncated-text-wiz,
:root[dark] .page-header-view-model-wiz__page-header-content-metadata {
  color: #bac2de !important;
}
:root[dark] .page-header-view-model-wiz__page-header-title,
:root[dark] [style="color: rgb(255, 255, 255);"]:has(svg),
:root[dark] .truncated-text-wiz__absolute-button {
  color: #cdd6f4 !important;
}
:root[dark] .yt-contextual-sheet-layout-wiz {
  background-color: #181825 !important;
}
:root[dark] .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__container--tappable:hover {
  background-color: #313244 !important;
}
:root[dark] .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__title,
:root[dark] .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__accessory,
:root[dark] .yt-contextual-sheet-layout-wiz .radio-shape-wiz__label-container {
  color: #cdd6f4 !important;
}
:root[dark] .profile-badge-view-model-wiz__badge-description {
  color: #cdd6f4 !important;
}
:root[dark] .profile-badge-view-model-wiz__badge-subtitle {
  color: #a6adc8 !important;
}
:root[dark] .yt-profile-identity-info-view-model-wiz__divider {
  border-color: #313244 !important;
}
:root[dark] .yt-profile-card-view-model-wiz {
  background-color: #181825 !important;
}
:root[dark] .yt-profile-identity-info-view-model-wiz__channel-name,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-handle-with-bold-font,
:root[dark] .yt-profile-info-view-model-wiz__section-title,
:root[dark] .yt-comment-interaction-view-model-wiz__video-title,
:root[dark] .yt-shared-subscription-view-model-wiz__channel-name {
  color: #cdd6f4 !important;
}
:root[dark] .yt-profile-identity-info-view-model-wiz__badge,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-handle,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-content,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-delimiter,
:root[dark] .yt-profile-identity-info-view-model-wiz__metadata-pronouns,
:root[dark] .yt-profile-info-view-model-wiz__section-divider,
:root[dark] .yt-profile-info-view-model-wiz__section-subtitle,
:root[dark] .yt-comment-interaction-view-model-wiz__comment-content {
  color: #a6adc8 !important;
}
:root[dark] .arrow.yt-horizontal-list-renderer {
  background: #313244 !important;
}
:root[dark] .ytVideoMetadataCarouselViewModelHost,
:root[dark] .YtVideoMetadataCarouselViewModelHost {
  background-color: #313244 !important;
}
:root[dark] .ytVideoMetadataCarouselViewModelHost .ytCarouselTitleViewModelTitle,
:root[dark] .YtVideoMetadataCarouselViewModelHost .ytCarouselTitleViewModelTitle,
:root[dark] .ytVideoMetadataCarouselViewModelHost .YtCarouselTitleViewModelTitle,
:root[dark] .YtVideoMetadataCarouselViewModelHost .YtCarouselTitleViewModelTitle,
:root[dark] .ytVideoMetadataCarouselViewModelHost .yt-core-attributed-string,
:root[dark] .YtVideoMetadataCarouselViewModelHost .yt-core-attributed-string,
:root[dark] .ytVideoMetadataCarouselViewModelHost .yt-icon-shape,
:root[dark] .YtVideoMetadataCarouselViewModelHost .yt-icon-shape {
  color: #cdd6f4 !important;
}
:root[dark] .video-summary-content-view-model-wiz__paragraph {
  color: #cdd6f4 !important;
}
:root[dark] #next-video-title {
  color: #cdd6f4 !important;
}
:root[dark] #publisher-container .yt-simple-endpoint.style-scope.yt-formatted-string,
:root[dark] #publisher-container .index-message-wrapper.style-scope.ytd-playlist-panel-renderer,
:root[dark] #publisher-container .index-message-wrapper.style-scope.ytd-playlist-panel-renderer::before {
  color: #a6adc8 !important;
}
:root[dark] .metadata-stats.style-scope.ytd-playlist-byline-renderer,
:root[dark] .yt-lockup-metadata-view-model-wiz__metadata {
  color: #a6adc8 !important;
}
:root[dark] .yt-core-attributed-string.yt-core-attributed-string--white-space-pre-wrap {
  color: #cdd6f4 !important;
}
:root[dark] .ytChipShapeInactive {
  background-color: #313244 !important;
  color: #cdd6f4 !important;
}
:root[dark] .ytChipShapeActive {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root[dark] .ytListViewModelHost {
  background-color: #181825 !important;
  color: #cdd6f4 !important;
}
:root[dark] .ytListViewModelHost .yt-icon-shape {
  color: #cdd6f4 !important;
}
:root:not([dark]) {
  color-scheme: dark !important;
  color: #cdd6f4 !important;
  background: #1e1e2e !important;
  /* Misc */
  /* Selected chapter */
  /* Skeleton */
  /* Ambient mode */
  /* Icons */
  /* verification badge */
  /* Buttons */
  /* Search box */
  /* "Suggestion removed" */
  /* Video description */
  /* Thumbnails */
  /* Panels, popups, tooltips */
  /* Video player */
  /* Video highlight */
  /* Shorts titles and views on homepage */
  /* Buy super thanks bar */
  /* Channel pages */
  /* channel details */
  /* Profiles */
  /* Horizontal list arrows */
  /* Live chat replay */
  /* AI-generated video summary */
  /* Playlist collapsed sidebar */
  /* Playlist metadata */
  /* Playlist titles in search results */
  /* Category tag pills */
  /* Vertical ellipsis menu on main page */
}
:root:not([dark]) ::selection {
  background-color: rgba(203, 166, 247, 0.3) !important;
}
:root:not([dark]) input::placeholder,
:root:not([dark]) textarea::placeholder {
  color: #a6adc8 !important;
}
:root:not([dark]),
:root:not([dark]) [dark],
:root:not([dark]) [system-icons],
:root:not([dark]) [darker-dark-theme],
:root:not([dark])[dark],
:root:not([dark])[system-icons],
:root:not([dark])[darker-dark-theme] {
  --efyt-control-bar-background-color: #181825 !important;
  --dimmer-text: #cdd6f4 !important;
  --yt-spec-white-1: #cdd6f4 !important;
  --yt-spec-white-2: #a6adc8 !important;
  --yt-spec-white-3: #bac2de !important;
  --yt-spec-white-4: #a9b3d6 !important;
  --yt-spec-black-1: #7f849c !important;
  --yt-spec-black-2: #6c7086 !important;
  --yt-spec-black-3: #585b70 !important;
  --yt-spec-black-4: #45475a !important;
  --yt-spec-black-pure: #313244 !important;
  --yt-spec-grey-1: #cdd6f4 !important;
  --yt-spec-grey-2: #a6adc8 !important;
  --yt-spec-grey-3: #bac2de !important;
  --yt-spec-grey-4: #9399b2 !important;
  --yt-spec-grey-5: #7f849c !important;
  --yt-brand-youtube-red: #cba6f7 !important;
  --yt-brand-medium-red: #cba6f7 !important;
  --yt-brand-light-red: #cba6f7 !important;
  --yt-spec-red-30: #fab387 !important;
  --yt-spec-red-70: #f38ba8 !important;
  --yt-spec-red-indicator: #cba6f7 !important;
  --yt-spec-pale-blue: #89dceb !important;
  --yt-spec-light-blue: #89dceb !important;
  --yt-spec-dark-blue: #74c7ec !important;
  --yt-spec-navy-blue: #94e2d5 !important;
  --yt-spec-light-green: #a6e3a1 !important;
  --yt-spec-dark-green: #a6e3a1 !important;
  --yt-spec-yellow: #fab387 !important;
  --yt-spec-black-pure-alpha-5: #a6adc8 !important;
  --yt-spec-black-pure-alpha-10: #9399b2 !important;
  --yt-spec-black-pure-alpha-15: rgba(17, 17, 27, 0.85) !important;
  --yt-spec-black-pure-alpha-30: rgba(17, 17, 27, 0.7) !important;
  --yt-spec-black-pure-alpha-60: rgba(17, 17, 27, 0.4) !important;
  --yt-spec-black-pure-alpha-80: rgba(17, 17, 27, 0.2) !important;
  --yt-spec-black-1-alpha-98: rgba(17, 17, 27, 0.02) !important;
  --yt-spec-black-1-alpha-95: rgba(17, 17, 27, 0.05) !important;
  --yt-spec-white-1-alpha-10: rgba(205, 214, 244, 0.9) !important;
  --yt-spec-white-1-alpha-20: rgba(205, 214, 244, 0.8) !important;
  --yt-spec-white-1-alpha-25: rgba(205, 214, 244, 0.75) !important;
  --yt-spec-white-1-alpha-30: rgba(205, 214, 244, 0.7) !important;
  --yt-spec-white-1-alpha-70: rgba(205, 214, 244, 0.3) !important;
  --yt-spec-white-1-alpha-95: rgba(205, 214, 244, 0.05) !important;
  --yt-spec-white-1-alpha-98: rgba(205, 214, 244, 0.02) !important;
  --yt-brand-medium-red-alpha-90: rgba(203, 166, 247, 0.1) !important;
  --yt-brand-medium-red-alpha-30: rgba(203, 166, 247, 0.7) !important;
  --yt-brand-light-red-alpha-30: rgba(203, 166, 247, 0.7) !important;
  --yt-spec-light-blue-alpha-30: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-dark-blue-alpha-30: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-base-background: #1e1e2e !important;
  --yt-spec-raised-background: #1e1e2e !important;
  --yt-spec-menu-background: #181825 !important;
  --yt-spec-inverted-background: #cdd6f4 !important;
  --yt-spec-additive-background: #313244 !important;
  --yt-spec-outline: #313244 !important;
  --yt-spec-shadow: rgba(17, 17, 27, 0.75) !important;
  --yt-spec-text-primary: #cdd6f4 !important;
  --yt-spec-text-secondary: #a6adc8 !important;
  --yt-spec-text-disabled: #bac2de !important;
  --yt-spec-text-primary-inverse: #11111b !important;
  --yt-spec-call-to-action: #cba6f7 !important;
  --yt-spec-call-to-action-inverse: #cba6f7 !important;
  --yt-spec-suggested-action: rgba(203, 166, 247, 0.2) !important;
  --yt-spec-suggested-action-inverse: #cdd6f4 !important;
  --yt-spec-icon-active-other: #cdd6f4 !important;
  --yt-spec-button-chip-background-hover: #45475a !important;
  --yt-spec-touch-response: #313244 !important;
  --yt-spec-touch-response-inverse: #cba6f7 !important;
  --yt-spec-brand-icon-active: #cba6f7 !important;
  --yt-spec-brand-button-background: #cba6f7 !important;
  --yt-spec-brand-link-text: #74c7ec !important;
  --yt-spec-wordmark-text: #cdd6f4 !important;
  --yt-spec-error-indicator: #f38ba8 !important;
  --yt-spec-themed-blue: #cba6f7 !important;
  --yt-spec-themed-green: #a6e3a1 !important;
  --yt-spec-ad-indicator: #94e2d5 !important;
  --yt-spec-themed-overlay-background: rgba(17, 17, 27, 0.8) !important;
  --yt-spec-commerce-badge-background: #a6e3a1 !important;
  --yt-spec-static-brand-red: #cba6f7 !important;
  --yt-spec-static-brand-white: #cdd6f4 !important;
  --yt-spec-static-brand-black: #1e1e2e !important;
  --yt-spec-static-clear-color: #11111b !important;
  --yt-spec-static-clear-black: #11111b !important;
  --yt-spec-static-ad-yellow: #fab387 !important;
  --yt-spec-static-grey: #a6adc8 !important;
  --yt-spec-static-overlay-background-solid: #11111b !important;
  --yt-spec-static-overlay-background-heavy: #11111b !important;
  --yt-spec-static-overlay-background-medium: rgba(17, 17, 27, 0.5) !important;
  --yt-spec-static-overlay-background-light: rgba(17, 17, 27, 0.9) !important;
  --yt-spec-static-overlay-text-primary: #cdd6f4 !important;
  --yt-spec-static-overlay-text-secondary: rgba(166, 173, 200, 0.3) !important;
  --yt-spec-static-overlay-text-disabled: rgba(166, 173, 200, 0.7) !important;
  --yt-spec-static-overlay-call-to-action: #cba6f7 !important;
  --yt-spec-static-overlay-icon-active-other: #11111b !important;
  --yt-spec-static-overlay-icon-inactive: #45475a !important;
  --yt-spec-static-overlay-icon-disabled: #585b70 !important;
  --yt-spec-static-overlay-button-primary: #cba6f7 !important;
  --yt-spec-static-overlay-touch-response: #7f849c !important;
  --yt-spec-static-overlay-touch-response-inverse: #45475a !important;
  --yt-spec-static-overlay-background-brand: #cba6f7 !important;
  --yt-spec-assistive-feed-themed-gradient-1: #a6adc8 !important;
  --yt-spec-assistive-feed-themed-gradient-2: #b4befe !important;
  --yt-spec-assistive-feed-themed-gradient-3: #f38ba8 !important;
  --yt-spec-brand-background-solid: #1e1e2e !important;
  --yt-spec-brand-background-primary: #1e1e2e !important;
  --yt-spec-brand-background-secondary: #181825 !important;
  --yt-spec-general-background-a: #1e1e2e !important;
  --yt-spec-general-background-b: #1e1e2e !important;
  --yt-spec-general-background-c: #11111b !important;
  --yt-spec-error-background: #1e1e2e !important;
  --yt-spec-10-percent-layer: #45475a !important;
  --yt-spec-snackbar-background: #181825 !important;
  --yt-spec-snackbar-background-updated: #181825 !important;
  --yt-spec-badge-chip-background: #313244 !important;
  --yt-spec-verified-badge-background: #6c7086 !important;
  --yt-spec-call-to-action-fadeoutd: rgba(116, 199, 236, 0.7) !important;
  --yt-spec-call-to-action-hover: #cba6f7 !important;
  --yt-spec-brand-button-background-hover: #cba6f7 !important;
  --yt-spec-brand-link-text-fadeoutd: rgba(203, 166, 247, 0.7) !important;
  --yt-spec-filled-button-focus-outline: #313244 !important;
  --yt-spec-static-overlay-button-hover: #45475a !important;
  --yt-spec-mono-filled-hover: #45475a !important;
  --yt-spec-commerce-filled-hover: #cba6f7 !important;
  --yt-spec-mono-tonal-hover: #45475a !important;
  --yt-spec-commerce-tonal-hover: #585b70 !important;
  --yt-spec-static-overlay-filled-hover: #7f849c !important;
  --yt-spec-static-overlay-tonal-hover: #45475a !important;
  --yt-spec-paper-tab-ink: rgba(205, 214, 244, 0.7) !important;
  --yt-spec-filled-button-text: #cdd6f4 !important;
  --yt-spec-selected-nav-text: #cdd6f4 !important;
  --iron-icon-fill-color: #cdd6f4 !important;
  /* Search bar */
  --ytd-searchbox-border-color: #313244 !important;
  --ytd-searchbox-legacy-border-color: #313244 !important;
  --ytd-searchbox-legacy-border-shadow-color: #11111b !important;
  --ytd-searchbox-legacy-button-color: #181825 !important;
  --ytd-searchbox-legacy-button-border-color: #313244 !important;
  --ytd-searchbox-legacy-button-focus-color: #cba6f7 !important;
  --ytd-searchbox-legacy-button-hover-color: #181825 !important;
  --ytd-searchbox-legacy-button-hover-border-color: #313244 !important;
  --ytd-searchbox-legacy-button-icon-color: #cba6f7 !important;
  --ytd-searchbox-background: #1e1e2e !important;
  --ytd-searchbox-text-color: #cdd6f4 !important;
  /* System icons */
  --yt-spec-icon-inactive: #cdd6f4 !important;
  --yt-spec-icon-disabled: #7f849c !important;
  --yt-spec-brand-icon-inactive: #9399b2 !important;
  /* Yt video Page */
  --yt-live-chat-background-color: #1e1e2e !important;
  --yt-live-chat-action-panel-background-color: #1e1e2e !important;
  --yt-live-chat-secondary-background-color: #45475a !important;
  --yt-live-chat-toast-background-color: #585b70 !important;
  --yt-live-chat-mode-change-background-color: #1e1e2e !important;
  --yt-live-chat-secondary-text-color: #a6adc8 !important;
  --yt-live-chat-tertiary-text-color: rgba(205, 214, 244, 0.46) !important;
  --yt-live-chat-text-input-field-inactive-underline-color: #a6adc8 !important;
  --yt-live-chat-text-input-field-placeholder-color: #a6adc8 !important;
  --yt-live-chat-enabled-send-button-color: #cdd6f4 !important;
  --yt-live-chat-disabled-icon-button-color: #bac2de !important;
  --yt-live-chat-picker-button-hover-color: #cba6f7 !important;
  --yt-live-chat-mention-background-color: #cba6f7 !important;
  --yt-live-chat-mention-text-color: #cdd6f4 !important;
  --yt-live-chat-deleted-message-color: #a6adc8 !important;
  --yt-live-chat-deleted-message-bar-color: #bac2de !important;
  --yt-live-chat-reconnect-message-color: #cdd6f4 !important;
  --yt-live-chat-disabled-button-background-color: #6c7086 !important;
  --yt-live-chat-sub-panel-background-color: #1e1e2e !important;
  --yt-live-chat-sub-panel-background-color-transparent: #181825 !important;
  --yt-live-chat-moderator-color: #b4befe !important;
  --yt-live-chat-owner-color: #fab387 !important;
  --yt-live-chat-message-highlight-background-color: #1e1e2e !important;
  --yt-live-chat-sponsor-color: #a6e3a1 !important;
  --yt-live-chat-overlay-color: rgba(24, 24, 37, 0.5) !important;
  --yt-live-chat-dialog-background-color: #1e1e2e !important;
  --yt-emoji-picker-variant-selector-bg-color: #1e1e2e !important;
  --yt-live-chat-moderation-mode-hover-background-color: rgba(24, 24, 37, 0.7) !important;
  --yt-grey: #a6adc8 !important;
  --yt-live-chat-text-input-field-suggestion-background-color: #a6adc8 !important;
  --yt-live-chat-text-input-field-suggestion-background-color-hover: #bac2de !important;
  --yt-emoji-picker-search-background-color: #313244 !important;
  --yt-emoji-picker-search-color: #cdd6f4 !important;
  --yt-emoji-picker-search-placeholder-color: #cba6f7 !important;
  --yt-live-chat-slider-active-color: #cba6f7 !important;
  --yt-live-chat-slider-container-color: #313244 !important;
  --yt-live-chat-slider-markers-color: #cdd6f4 !important;
  --yt-live-chat-banner-gradient-scrim: linear-gradient(#181825, transparent) !important;
  --yt-live-chat-action-panel-gradient-scrim: linear-gradient(to top, #181825, transparent) !important;
  --yt-live-chat-automod-button-background-color-hover: rgba(17, 17, 27, 0.5) !important;
  --yt-live-chat-automod-button-explanation-color: rgba(203, 166, 247, 0.3) !important;
  --yt-live-chat-shimmer-background-color: rgba(17, 17, 27, 0.6) !important;
  --yt-live-chat-shimmer-linear-gradient: linear-gradient(0deg, rgba(205, 214, 244, 0.9) 40%, rgba(30, 30, 46, 0.7) 50%, rgba(205, 214, 244, 0.9) 60%) !important;
  --yt-live-chat-vem-background-color: #181825 !important;
  --yt-live-chat-product-picker-icon-color: rgba(205, 214, 244, 0.5) !important;
  --yt-live-chat-product-picker-hover-color: #6c7086 !important;
  --yt-live-chat-product-picker-disabled-icon-color: rgba(205, 214, 244, 0.7) !important;
  --yt-live-chat-action-panel-background-color-transparent: (null) !important;
  --paper-tooltip-background: #6c7086 !important;
  --paper-tooltip-text-color: #cdd6f4 !important;
  /* Links */
  --yt-endpoint-color: #cba6f7 !important;
  --yt-endpoint-visited-color: #cba6f7 !important;
  --yt-endpoint-hover-color: #cba6f7 !important;
  --sb-dark-red-outline: #cba6f7 !important;
  --sb-main-bg-color: #1e1e2e !important;
  --sb-main-fg-color: #cdd6f4 !important;
  --sb-grey-bg-color: #1e1e2e !important;
  --sb-grey-fg-color: #a6adc8 !important;
  --sb-red-bg-color: #cba6f7 !important;
  --sb-category-sponsor: #a6e3a1 !important;
  --sb-category-selfpromo: #f9e2af !important;
  --sb-category-exclusive_access: #94e2d5 !important;
  --sb-category-interaction: #cba6f7 !important;
  --sb-category-poi_highlight: #f5c2e7 !important;
  --sb-category-intro: #89dceb !important;
  --sb-category-outro: #89b4fa !important;
  --sb-category-preview: #74c7ec !important;
  --sb-category-filler: #b4befe !important;
  --sb-category-music_offtopic: #fab387 !important;
}
:root:not([dark]):not(.style-scope) {
  --primary-text-color: #cdd6f4 !important;
  --primary-background-color: #1e1e2e !important;
  --secondary-text-color: #a6adc8 !important;
  --disabled-text-color: #bac2de !important;
  --divider-color: #6c7086 !important;
  --error-color: #f38ba8 !important;
  --primary-color: #cba6f7 !important;
  --light-primary-color: #cba6f7 !important;
  --dark-primary-color: #89b4fa !important;
  --accent-color: #cba6f7 !important;
  --light-accent-color: #cba6f7 !important;
  --dark-accent-color: #cba6f7 !important;
  --light-theme-background-color: #1e1e2e !important;
  --light-theme-base-color: #cdd6f4 !important;
  --light-theme-text-color: #cdd6f4 !important;
  --light-theme-secondary-color: #a6adc8 !important;
  --light-theme-disabled-color: #bac2de !important;
  --light-theme-divider-color: #6c7086 !important;
  --dark-theme-background-color: #1e1e2e !important;
  --dark-theme-base-color: #cdd6f4 !important;
  --dark-theme-text-color: #cdd6f4 !important;
  --dark-theme-secondary-color: #a6adc8 !important;
  --dark-theme-disabled-color: #bac2de !important;
  --dark-theme-divider-color: #6c7086 !important;
}
:root:not([dark]) .yt-spec-touch-feedback-shape__hover-effect {
  background-color: #313244 !important;
}
:root:not([dark]) ytd-watch-metadata {
  --yt-saturated-raised-background: #45475a !important;
  --yt-saturated-text-primary: #cdd6f4 !important;
  --yt-saturated-text-secondary: #bac2de !important;
}
:root:not([dark]) .yt-core-attributed-string--link-inherit-color {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-core-attributed-string--highlight-text-decorator {
  background-color: #585b70 !important;
}
:root:not([dark]) #channel-name.ytd-video-meta-block {
  --yt-endpoint-color: #cba6f7 !important;
  --yt-endpoint-visited-color: #cba6f7 !important;
  color: #cba6f7 !important;
}
:root:not([dark]) .yt-page-navigation-progress {
  background: #cba6f7 !important;
}
:root:not([dark]) ytd-macro-markers-list-item-renderer {
  --ytd-macro-markers-list-item-background-color: #313244 !important;
  --ytd-macro-markers-list-item-title-color: #cdd6f4 !important;
  --ytd-macro-markers-list-item-secondary-color: #bac2de !important;
  --ytd-macro-markers-list-item-timestamp-background-color: #45475a !important;
}
:root:not([dark]) ytd-playlist-panel-video-renderer {
  --yt-lightsource-section2-color: #45475a !important;
  --yt-lightsource-section4-color: #585b70 !important;
  --yt-lightsource-primary-title-color: #cdd6f4 !important;
  --yt-lightsource-secondary-title-color: #cdd6f4 !important;
  --yt-active-playlist-panel-background-color: #313244 !important;
}
:root:not([dark]) ytd-playlist-panel-renderer[collapsible][collapsed][use-color-palette] .header.ytd-playlist-panel-renderer {
  --iron-icon-fill-color: #cdd6f4 !important;
  background-color: #1e1e2e !important;
}
:root:not([dark]) #container.ytd-masthead {
  --iron-icon-fill-color: #cdd6f4 !important;
}
:root:not([dark]) #background.ytd-masthead,
:root:not([dark]) #frosted-glass {
  --yt-frosted-glass-desktop: #1e1e2e !important;
  --yt-spec-frosted-glass-desktop: #1e1e2e !important;
}
:root:not([dark]) ytd-feed-filter-chip-bar-renderer[expand-instead-of-scroll] #chips-wrapper.ytd-feed-filter-chip-bar-renderer {
  --iron-icon-fill-color: #cdd6f4 !important;
  background-color: #1e1e2e !important;
}
:root:not([dark]) #ytd-player #container {
  background: #11111b !important;
}
:root:not([dark]) .ytp-progress-list {
  background: rgba(49, 50, 68, 0.8) !important;
}
:root:not([dark]) .ytp-load-progress {
  background: #6c7086 !important;
}
:root:not([dark]) ytd-expandable-metadata-renderer {
  --yt-lightsource-section1-color: #1e1e2e !important;
  --yt-lightsource-section2-color: #313244 !important;
  --yt-lightsource-section3-color: #45475a !important;
  --yt-lightsource-section4-color: #585b70 !important;
  --yt-lightsource-primary-title-color: #cdd6f4 !important;
  --yt-lightsource-secondary-title-color: #a6adc8 !important;
}
:root:not([dark]) yt-live-chat-renderer {
  --yt-button-default-text-color: #cdd6f4 !important;
  --yt-button-default-background-color: #1e1e2e !important;
  --yt-button-dark-text-color: #1e1e2e !important;
  --yt-button-dark-background-color: #cba6f7 !important;
  --yt-button-payment-background-color: #cba6f7 !important;
}
:root:not([dark]) yt-icon-button.yt-live-chat-item-list-renderer {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) yt-icon-button.yt-live-chat-item-list-renderer:hover {
  background-color: #bd8ff5 !important;
}
:root:not([dark]) ytd-author-comment-badge-renderer:not(
    [style*="--ytd-author-comment-badge-icon-background-color: transparent;"]
  ) {
  --yt-basic-background-color: #313244 !important;
  --yt-basic-foreground-title-color: #313244 !important;
  --ytd-author-comment-badge-background-color: #313244 !important;
  --ytd-author-comment-badge-name-color: #cdd6f4 !important;
  --ytd-author-comment-badge-icon-color: #cdd6f4 !important;
}
:root:not([dark]) #guide-skeleton,
:root:not([dark]) #home-container-skeleton,
:root:not([dark]) #home-chips {
  background-color: #1e1e2e !important;
  z-index: -1 !important;
}
:root:not([dark]) #guide-skeleton .guide-ghost-icon,
:root:not([dark]) #guide-skeleton .guide-ghost-text,
:root:not([dark]) .masthead-skeleton-icon,
:root:not([dark]) #home-page-skeleton .skeleton-bg-color,
:root:not([dark]) .watch-skeleton .skeleton-bg-color {
  background-color: #45475a !important;
}
:root:not([dark]) #cinematics,
:root:not([dark]) #cinematic-container {
  mix-blend-mode: lighten !important;
}
:root:not([dark]) .ytp-settings-button.ytp-hd-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-hdr-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-4k-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-5k-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-8k-quality-badge::after,
:root:not([dark]) .ytp-settings-button.ytp-3d-badge-grey::after,
:root:not([dark]) .ytp-settings-button.ytp-3d-badge::after {
  background-color: #cba6f7 !important;
}
:root:not([dark]) [fill="red"],
:root:not([dark]) [fill="#F00"],
:root:not([dark]) [fill="#FF0000"],
:root:not([dark]) [fill="#f03"],
:root:not([dark]) [fill="#FF0033"] {
  fill: #cba6f7 !important;
}
:root:not([dark]) [fill="white"] {
  fill: #cdd6f4 !important;
}
:root:not([dark]) [src*="https://www.gstatic.com/images/icons/material/system/1x/check_circle_grey600_36dp.png"] {
  filter: brightness(0) saturate(100%) invert(75%) sepia(82%) saturate(1008%) hue-rotate(189deg) brightness(120%) contrast(90%) !important;
}
:root:not([dark]) yt-icon.ytd-logo [fill="white"] {
  fill: #11111b !important;
}
:root:not([dark]) .yt-spec-icon-shape [fill="#FAFAFA"],
:root:not([dark]) .yt-spec-icon-shape [fill="#000"],
:root:not([dark]) .yt-spec-icon-shape [fill="#fff"],
:root:not([dark]) .yt-spec-icon-shape [fill="#FFF"],
:root:not([dark]) .yt-spec-icon-shape [fill="#FFFFFF"] {
  fill: #11111b !important;
}
:root:not([dark]) .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon,
:root:not([dark]) .yt-spec-icon-badge-shape {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-spec-icon-badge-shape--type-notification .yt-spec-icon-badge-shape__badge {
  background-color: #cba6f7 !important;
  color: #313244 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
  background-color: #313244 !important;
  /* Accent for filled-in thumbs up (like button) */
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(3,3,3)"],
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(0,0,0)"],
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [fill="rgb(255,255,255)"] {
  fill: #cdd6f4 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(0,0,0)"],
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [stroke="rgb(255,255,255)"] {
  stroke: #cdd6f4 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] {
  fill: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal [animated-icon-type="LIKE"] g path[fill] + [stroke] {
  stroke: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal:hover {
  background-color: #45475a !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline {
  color: #cdd6f4 !important;
  border-color: #585b70 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--outline:hover {
  background-color: #585b70 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text {
  color: #cdd6f4 !important;
  /* Accent for filled-in thumbs up (like button) */
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text path[d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"] {
  fill: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text:hover {
  background-color: #45475a !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled:hover {
  background-color: #bd8ff5 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--disabled {
  color: #7f849c !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
  background-color: #313244 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal:hover {
  background-color: #45475a !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--outline {
  color: #cdd6f4 !important;
  border-color: #45475a !important;
}
:root:not([dark]) .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--outline:hover {
  background: #313244 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline {
  color: #cba6f7 !important;
  border-color: #585b70 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline:hover {
  background-color: rgba(203, 166, 247, 0.3) !important;
  color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text {
  color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text:hover {
  background-color: rgba(203, 166, 247, 0.3) !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--filled {
  color: #11111b !important;
  background-color: #cba6f7 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--filled:hover {
  background-color: #d9bdf9 !important;
}
:root:not([dark]) .yt-spec-button-shape-next--disabled.yt-spec-button-shape-next--filled {
  color: #a6adc8 !important;
  background-color: rgba(69, 71, 90, 0.7) !important;
}
:root:not([dark]) ytd-searchbox[has-focus] #container.ytd-searchbox {
  border-color: #cba6f7 !important;
}
:root:not([dark]) .ytSearchboxComponentInputBox,
:root:not([dark]) .ytSearchboxComponentInputBoxDark {
  background: var(--ytd-searchbox-background) !important;
  color: var(--ytd-searchbox-text-color) !important;
  border-color: var(--ytd-searchbox-border-color) !important;
  box-shadow: none !important;
}
:root:not([dark]) .ytSearchboxComponentInputBoxHasFocus,
:root:not([dark]) .ytSearchboxComponentInputBoxHasFocusDark {
  border-color: #cba6f7 !important;
}
:root:not([dark]) .ytSuggestionComponentSuggestionHover:hover,
:root:not([dark]) .ytSuggestionComponentSuggestionHoverDark:hover {
  background: #45475a !important;
}
:root:not([dark]) .ytSearchboxComponentSuggestionsContainer,
:root:not([dark]) .ytSearchboxComponentSuggestionsContainerDark {
  background: var(--yt-spec-raised-background) !important;
  border-color: var(--yt-spec-raised-background) !important;
}
:root:not([dark]) .ytSuggestionComponentSuggestion,
:root:not([dark]) .ytSuggestionComponentSuggestionDark {
  color: var(--ytd-searchbox-text-color) !important;
}
:root:not([dark]) .ytSearchboxComponentSearchButton,
:root:not([dark]) .ytSearchboxComponentSearchButtonDark {
  color: var(--ytd-searchbox-text-color) !important;
  background: #313244 !important;
  border-color: var(--ytd-searchbox-border-color) !important;
}
:root:not([dark]) .ytSearchboxComponentClearButtonIcon,
:root:not([dark]) .ytSearchboxComponentClearButtonIconDark {
  color: var(--ytd-searchbox-text-color) !important;
}
:root:not([dark]) .ytSearchboxComponentReportButton,
:root:not([dark]) .ytSearchboxComponentReportButtonDark,
:root:not([dark]) .ytSuggestionComponentRemoveLink,
:root:not([dark]) .ytSuggestionComponentRemoveLinkDark {
  color: #a6adc8 !important;
}
:root:not([dark]) .sbsb_a {
  background: #313244 !important;
}
:root:not([dark]) .sbdd_b {
  border-color: var(--yt-spec-raised-background) !important;
  background-color: var(--yt-spec-raised-background) !important;
}
:root:not([dark]) .sbpqs_a,
:root:not([dark]) .gsfs {
  color: var(--yt-spec-text-primary) !important;
}
:root:not([dark]) .sbsb_i {
  color: var(--yt-spec-call-to-action) !important;
}
:root:not([dark]) .sbsb_d {
  background-color: var(--yt-spec-additive-background) !important;
}
:root:not([dark]) .sbdd_c {
  visibility: hidden !important;
}
:root:not([dark]) .sbpqs_c {
  color: #7f849c !important;
}
:root:not([dark]) .sbpqs_a::before,
:root:not([dark]) .sbqs_c::before {
  content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20enable-background%3D%22new%200%200%2024%2024%22%20height%3D%2224%22%20viewBox%3D%221%201%2027%2027%22%20width%3D%2224%22%20focusable%3D%22false%22%20style%3D%22width%3A100%25%3Bheight%3A100%25%22%20pointer-events%3D%22none%22%20display%3D%22block%22%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20d%3D%22m20.87%2020.17-5.59-5.59A6.96%206.96%200%200%200%2017%2010c0-3.87-3.13-7-7-7s-7%203.13-7%207a6.995%206.995%200%200%200%2011.58%205.29l5.59%205.59zM10%2016c-3.31%200-6-2.69-6-6s2.69-6%206-6%206%202.69%206%206-2.69%206-6%206%22/%3E%3C/svg%3E") !important;
  background: none !important;
}
:root:not([dark]) .yt-core-attributed-string__link--call-to-action-color {
  color: #cba6f7 !important;
}
:root:not([dark]) .YtwCourseProgressViewModelHostProgressTitle,
:root:not([dark]) .YtwCourseProgressViewModelHostProgressSubtitle {
  color: #cdd6f4 !important;
}
:root:not([dark]) .YtwCourseProgressViewModelHostProgressBar {
  background-color: rgba(205, 214, 244, 0.2) !important;
}
:root:not([dark]) .YtwCourseProgressViewModelHostProgressBar .YtwCourseProgressViewModelHostProgressBarFill {
  background-color: #cdd6f4 !important;
}
:root:not([dark]) .ytwHowThisWasMadeSectionViewModelSectionTitle,
:root:not([dark]) .ytwHowThisWasMadeSectionViewModelBodyHeader {
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytwHowThisWasMadeSectionViewModelBodyText {
  color: #a6adc8 !important;
}
:root:not([dark]) #time-status:has([aria-label="LIVE"]),
:root:not([dark]) .badge[aria-label="LIVE"],
:root:not([dark]) .badge[aria-label="PREMIERE"],
:root:not([dark]) .badge-shape-wiz--live.badge-shape-wiz--overlay,
:root:not([dark]) .badge-shape-wiz--thumbnail-live {
  background: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) #thumbnail [style="background-color: rgba(51, 51, 51, 0.8);"],
:root:not([dark]) .YtInlinePlayerControlsTopRightControlsCircleButton,
:root:not([dark]) .badge-shape-wiz--default.badge-shape-wiz--overlay,
:root:not([dark]) .branding-context-container-inner {
  background-color: #313244 !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytp-sb-unsubscribe {
  background-color: #585b70 !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytp-sb-subscribe {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) ytd-thumbnail-overlay-resume-playback-renderer {
  background-color: #45475a !important;
}
:root:not([dark]) .badge-shape-wiz--thumbnail-default {
  color: #cdd6f4 !important;
  background: rgba(17, 17, 27, 0.8) !important;
}
:root:not([dark]) .ytp-tooltip-bottom-text {
  background: rgba(49, 50, 68, 0.9) !important;
  color: #cdd6f4 !important;
  text-shadow: none !important;
}
:root:not([dark]) .ytp-popup {
  background: rgba(49, 50, 68, 0.9) !important;
  text-shadow: none !important;
}
:root:not([dark]) .ytp-panel-menu,
:root:not([dark]) .ytp-panel-header,
:root:not([dark]) .ytp-panel-footer,
:root:not([dark]) .ytp-menuitem-label,
:root:not([dark]) .ytp-premium-label,
:root:not([dark]) .ytp-menuitem-content,
:root:not([dark]) .ytp-menuitem-label-count,
:root:not([dark]) .ytp-menu-label-secondary,
:root:not([dark]) .ytd-menu-title-renderer {
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytp-panel-header {
  border-bottom-color: #585b70 !important;
}
:root:not([dark]) .yt-spec-dialog-layout {
  background-color: #181825 !important;
}
:root:not([dark]) .ytp-panel-footer-content-link {
  color: #cba6f7 !important;
}
:root:not([dark]) .ytp-panel-back-button {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m19.41%2020.09-4.58-4.59%204.58-4.59L18%209.5l-6%206%206%206z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root:not([dark]) .ytp-menuitem[aria-checked="true"] .ytp-menuitem-toggle-checkbox {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22M9%2016.2%204.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
  background-color: #cba6f7 !important;
}
:root:not([dark]) .ytp-menuitem:not([aria-disabled="true"]):hover {
  background-color: #45475a !important;
}
:root:not([dark]) .ytp-menuitem svg > path:not([fill="none"]) {
  fill: #cdd6f4 !important;
}
:root:not([dark]) .ytp-menuitem[aria-haspopup="true"] .ytp-menuitem-content {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22m12.59%2020.34%204.58-4.59-4.58-4.59L14%209.75l6%206-6%206z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root:not([dark]) .ytp-menuitem[role="menuitemradio"][aria-checked="true"] .ytp-menuitem-label {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%3E%3Cpath%20d%3D%22M9%2016.2%204.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4z%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
}
:root:not([dark]) yt-progress-bar .ytProgressBarLineProgressBarPlayed,
:root:not([dark]) yt-progress-bar .ytProgressBarPlayheadProgressBarPlayheadDot {
  background: #cba6f7 !important;
}
:root:not([dark]) yt-progress-bar .ytProgressBarLineProgressBarHovered,
:root:not([dark]) yt-progress-bar .ytProgressBarLineProgressBarBackground {
  background: #cdd6f4 !important;
}
:root:not([dark]) .ytp-cards-button .ytp-cards-button-icon use {
  fill: #1e1e2e !important;
}
:root:not([dark]) .ytp-cards-button .ytp-cards-button-icon path {
  fill: #cdd6f4 !important;
}
:root:not([dark]) .ytp-cards-teaser .ytp-cards-teaser-box {
  background-color: #585b70 !important;
  border-bottom-color: #585b70 !important;
}
:root:not([dark]) .ytp-cards-teaser .ytp-cards-teaser-text {
  color: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player {
  color: #cdd6f4 !important;
  /* youtube live ring */
  /* stats for nerds */
}
:root:not([dark]) .html5-video-player .ytp-swatch-background-color,
:root:not([dark]) .html5-video-player .ytp-play-progress {
  background: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .ytp-svg-fill,
:root:not([dark]) .html5-video-player [fill="#fff"] {
  fill: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player .ytp-volume-slider-handle,
:root:not([dark]) .html5-video-player .ytp-volume-slider-handle::before {
  background-color: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player .ytp-volume-slider-handle::after {
  background-color: rgba(205, 214, 244, 0.2) !important;
}
:root:not([dark]) .html5-video-player .ytp-time-current,
:root:not([dark]) .html5-video-player .ytp-time-separator,
:root:not([dark]) .html5-video-player .ytp-time-duration {
  color: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player .ytp-live-badge[disabled]::before {
  background: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .ytp-live-badge::before {
  background: #6c7086 !important;
}
:root:not([dark]) .html5-video-player .yt-spec-avatar-shape__badge-text {
  color: #11111b !important;
}
:root:not([dark]) .html5-video-player .yt-spec-avatar-shape--live-ring {
  border-color: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .yt-spec-avatar-shape__live-badge {
  background-color: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .ytp-button[aria-pressed]::after,
:root:not([dark]) .html5-video-player .ytp-subtitles-button[aria-pressed]::after {
  background-color: #cba6f7 !important;
}
:root:not([dark]) .html5-video-player .ytp-sfn {
  background: rgba(30, 30, 46, 0.8) !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .html5-video-player .ytp-autonav-toggle-button {
  background-color: #585b70 !important;
}
:root:not([dark]) .html5-video-player .ytp-autonav-toggle-button::after {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M12.75%204.5h-3c-.6%200-1.17.23-1.6.65-.42.43-.65%201-.65%201.6v22.5c0%20.59.23%201.16.65%201.59.43.42%201%20.66%201.6.66h3c.59%200%201.16-.24%201.59-.66.42-.43.66-1%20.66-1.59V6.75c0-.6-.24-1.17-.66-1.6-.43-.42-1-.65-1.59-.65m13.5%200h-3c-.6%200-1.17.23-1.6.65-.42.43-.65%201-.65%201.6v22.5c0%20.59.23%201.16.65%201.59.43.42%201%20.66%201.6.66h3c.59%200%201.16-.24%201.59-.66.42-.43.66-1%20.66-1.59V6.75c0-.6-.24-1.17-.66-1.6-.43-.42-1-.65-1.59-.65%22%20fill%3D%22%23cdd6f4%22/%3E%3C/svg%3E") !important;
  background-color: #7f849c !important;
}
:root:not([dark]) .html5-video-player .ytp-autonav-toggle-button[aria-checked="true"]::after {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22m17%208.6-6.11-3.61c-1.5-.88-3.39.2-3.39%201.94v22.13c0%201.74%201.89%202.82%203.39%201.94L17%2027.4zm0%200v18.8L33%2018z%22%20fill%3D%22%231e1e2e%22/%3E%3C/svg%3E") !important;
  background-color: #cdd6f4 !important;
}
:root:not([dark]) ytd-rich-item-renderer.ytd-rich-item-renderer-highlight {
  background-color: rgba(203, 166, 247, 0.1) !important;
  box-shadow: rgba(203, 166, 247, 0.1) 0 0 0 10px !important;
}
:root:not([dark]) #shorts-container {
  --yt-spec-static-overlay-text-primary: #cdd6f4 !important;
  /* Buy super thanks button */
}
:root:not([dark]) #shorts-container .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--tonal {
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container .YtwFactoidRendererLabel {
  color: #a6adc8 !important;
}
:root:not([dark]) #shorts-container .YtwFactoidRendererValue {
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container ytd-reel-video-renderer:not([is-watch-while-mode]) .yt-spec-button-shape-with-label__label {
  color: #bac2de !important;
}
:root:not([dark]) #shorts-container ytd-reel-video-renderer[is-watch-while-mode] .yt-spec-button-shape-with-label__label {
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container .yt-spec-button-shape-next--overlay-dark.yt-spec-button-shape-next--tonal,
:root:not([dark]) #shorts-container .YtdDesktopShortsVolumeControlsBackgroundScrim {
  background-color: rgba(30, 30, 46, 0.6) !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container .yt-spec-button-shape-next--overlay-dark.yt-spec-button-shape-next--filled {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) #shorts-container .YtdDesktopShortsVolumeControlsMuteIcon {
  color: #cdd6f4 !important;
}
:root:not([dark]) #shorts-container .YtdShortsSuggestedActionStaticHostContainer {
  background-color: rgba(30, 30, 46, 0.6) !important;
}
:root:not([dark]) #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostLeadingIcon,
:root:not([dark]) #shorts-container .YtdShortsSuggestedActionStaticHostContainer .YtdShortsSuggestedActionStaticHostPrimaryText {
  color: #cdd6f4 !important;
}
:root:not([dark]) .shortsLockupViewModelHostOutsideMetadataEndpoint {
  color: #cdd6f4 !important;
}
:root:not([dark]) .shortsLockupViewModelHostOutsideMetadataSubhead {
  color: #a6adc8 !important;
}
:root:not([dark]) #progressContainer.tp-yt-paper-progress {
  background-color: #181825 !important;
}
:root:not([dark]) #comment-chip-container.yt-pdg-comment-chip-renderer,
:root:not([dark]) .slider-knob-inner.tp-yt-paper-slider {
  background: #cba6f7 !important;
}
:root:not([dark]) #primaryProgress.tp-yt-paper-progress {
  background: linear-gradient(139deg, #fab387, #eba0ac, #f38ba8, #f5c2e7) !important;
}
:root:not([dark]) #container.ytd-pdg-comment-preview-renderer {
  background-color: #181825 !important;
}
:root:not([dark]) #comment-chip-price.yt-pdg-comment-chip-renderer,
:root:not([dark]) yt-icon.yt-pdg-comment-chip-renderer {
  color: #11111b !important;
}
:root:not([dark]) .yt-tab-shape-wiz__tab {
  color: #bac2de !important;
}
:root:not([dark]) .yt-tab-shape-wiz__tab--tab-selected {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-tab-group-shape-wiz__slider {
  background-color: #cdd6f4 !important;
}
:root:not([dark]) .yt-tab-shape-wiz:hover .yt-tab-shape-wiz__tab-bar {
  background-color: #bac2de !important;
}
:root:not([dark]) .truncated-text-wiz,
:root:not([dark]) .page-header-view-model-wiz__page-header-content-metadata {
  color: #bac2de !important;
}
:root:not([dark]) .page-header-view-model-wiz__page-header-title,
:root:not([dark]) [style="color: rgb(255, 255, 255);"]:has(svg),
:root:not([dark]) .truncated-text-wiz__absolute-button {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-contextual-sheet-layout-wiz {
  background-color: #181825 !important;
}
:root:not([dark]) .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__container--tappable:hover {
  background-color: #313244 !important;
}
:root:not([dark]) .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__title,
:root:not([dark]) .yt-contextual-sheet-layout-wiz .yt-list-item-view-model-wiz__accessory,
:root:not([dark]) .yt-contextual-sheet-layout-wiz .radio-shape-wiz__label-container {
  color: #cdd6f4 !important;
}
:root:not([dark]) .profile-badge-view-model-wiz__badge-description {
  color: #cdd6f4 !important;
}
:root:not([dark]) .profile-badge-view-model-wiz__badge-subtitle {
  color: #a6adc8 !important;
}
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__divider {
  border-color: #313244 !important;
}
:root:not([dark]) .yt-profile-card-view-model-wiz {
  background-color: #181825 !important;
}
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__channel-name,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-handle-with-bold-font,
:root:not([dark]) .yt-profile-info-view-model-wiz__section-title,
:root:not([dark]) .yt-comment-interaction-view-model-wiz__video-title,
:root:not([dark]) .yt-shared-subscription-view-model-wiz__channel-name {
  color: #cdd6f4 !important;
}
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__badge,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-handle,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-content,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-delimiter,
:root:not([dark]) .yt-profile-identity-info-view-model-wiz__metadata-pronouns,
:root:not([dark]) .yt-profile-info-view-model-wiz__section-divider,
:root:not([dark]) .yt-profile-info-view-model-wiz__section-subtitle,
:root:not([dark]) .yt-comment-interaction-view-model-wiz__comment-content {
  color: #a6adc8 !important;
}
:root:not([dark]) .arrow.yt-horizontal-list-renderer {
  background: #313244 !important;
}
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost {
  background-color: #313244 !important;
}
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost .ytCarouselTitleViewModelTitle,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost .ytCarouselTitleViewModelTitle,
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost .YtCarouselTitleViewModelTitle,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost .YtCarouselTitleViewModelTitle,
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost .yt-core-attributed-string,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost .yt-core-attributed-string,
:root:not([dark]) .ytVideoMetadataCarouselViewModelHost .yt-icon-shape,
:root:not([dark]) .YtVideoMetadataCarouselViewModelHost .yt-icon-shape {
  color: #cdd6f4 !important;
}
:root:not([dark]) .video-summary-content-view-model-wiz__paragraph {
  color: #cdd6f4 !important;
}
:root:not([dark]) #next-video-title {
  color: #cdd6f4 !important;
}
:root:not([dark]) #publisher-container .yt-simple-endpoint.style-scope.yt-formatted-string,
:root:not([dark]) #publisher-container .index-message-wrapper.style-scope.ytd-playlist-panel-renderer,
:root:not([dark]) #publisher-container .index-message-wrapper.style-scope.ytd-playlist-panel-renderer::before {
  color: #a6adc8 !important;
}
:root:not([dark]) .metadata-stats.style-scope.ytd-playlist-byline-renderer,
:root:not([dark]) .yt-lockup-metadata-view-model-wiz__metadata {
  color: #a6adc8 !important;
}
:root:not([dark]) .yt-core-attributed-string.yt-core-attributed-string--white-space-pre-wrap {
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytChipShapeInactive {
  background-color: #313244 !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytChipShapeActive {
  background-color: #cba6f7 !important;
  color: #11111b !important;
}
:root:not([dark]) .ytListViewModelHost {
  background-color: #181825 !important;
  color: #cdd6f4 !important;
}
:root:not([dark]) .ytListViewModelHost .yt-icon-shape {
  color: #cdd6f4 !important;
}


:root[dark] [src="https://www.gstatic.com/youtube/img/creator/yt_studio_logo_white.svg"] {
  content: url("data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2097.55%2024%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23cba6f7%22%20d%3D%22M17.1%200S6.4%200%203.8.7a4.15%204.15%200%200%200-3%203C0%206.4%200%2012%200%2012a45%2045%200%200%200%20.7%208.2%204.32%204.32%200%200%200%203%203c2.7.8%2013.4.8%2013.4.8s10.7%200%2013.4-.7a4.32%204.32%200%200%200%203-3%2045%2045%200%200%200%20.7-8.2s.1-5.7-.6-8.3a4.32%204.32%200%200%200-3-3C27.9%200%2017.1%200%2017.1%200m-3.4%206.9%208.9%205.1-8.9%205.1z%22/%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20d%3D%22M76.3.9v4.4c0%201.1%200%202%20.1%203.3h-.1A3.36%203.36%200%200%200%2073.4%207c-2.3%200-3.3%202-3.3%206.6V16c0%204.9.8%206.6%203.2%206.6a3.42%203.42%200%200%200%203.2-2.4h.1l.4%202.1h2.6V.9zm6.688.4c-1.126.032-1.687.55-1.687%202.1%200%201.7.599%202.1%201.799%202.1s1.8-.5%201.8-2.1-.6-2.1-1.8-2.1zM45%201.4c-3.6%200-5%201.7-5%204.9s1.1%204.5%203.7%206.8c1.6%201.4%202.8%202.5%202.8%204.8%200%201.5-.4%202.2-1.6%202.2s-1.7-.8-1.6-3.6h-3.1c-.6%204.2.8%206.1%204.5%206.2%203.5%200%205-1.5%205-5.4%200-3.1-1.3-4.4-3.7-6.6-1.9-1.8-2.8-2.5-2.8-4.6%200-1.4.3-2.2%201.6-2.2s1.6%201.1%201.5%203.9l3.1-.2c.5-4.2-.8-6.2-4.4-6.2m7.6%201.4-.4%204.5h-1.4v2.6H52v8.8c0%202.7.4%203.8%202.6%203.8a7.4%207.4%200%200%200%203.1-.6l-.6-2.2a5.2%205.2%200%200%201-1.3.2c-.5%200-.7-.3-.7-1.7V9.9h2.2V7.3H55V2.8zM91%207c-3.3%200-4.7%201.8-4.7%206.7v2.2c0%204.7%201.1%206.7%204.6%206.7s4.7-2%204.7-6.7v-2.2C95.6%208.9%2094.3%207%2091%207m-31.8.3v11.4c0%202.7.9%204%202.9%204a3.46%203.46%200%200%200%203.2-2.1h.1l.3%201.8h2.7V7.3H65v12a1.51%201.51%200%200%201-1.4%201c-.7%200-1-.6-1-1.9V7.3zm22.3%200v15.1h3.2V7.3zm9.4%202c1%200%201.3%201%201.3%203.1v4.7c0%202.2-.4%203.1-1.3%203.1s-1.2-.9-1.2-3.1v-4.7c0-2%20.2-3.1%201.2-3.1M75%209.4a1.56%201.56%200%200%201%201.3.8v8.5c-.2.9-.9%201.4-1.4%201.3-1%200-1.3-1-1.3-4.4v-1.9c0-3.3.3-4.3%201.4-4.3%22/%3E%3C/svg%3E");
}
:root[dark],
:root[dark] html,
:root[dark] html[dark],
:root[dark] html[dark][dark],
:root[dark][dark],
:root[dark][light],
:root[dark] [light],
:root[dark] html[light],
:root[dark] html[light][light] {
  --yt-spec-black-pure-alpha-80: (null);
  --yt-spec-black-pure-alpha-60: (null);
  --yt-spec-black-1-alpha-98: (null);
  --yt-spec-black-1-alpha-95: (null);
  --iron-icon-fill-color: unset;
  --yt-spec-text-primary: #cdd6f4;
  --ytcp-text-primary: #cdd6f4;
  --ytcp-text-primary-inverse: #1e1e2e;
  --ytcp-static-overlay-text-primary-inverse: #1e1e2e;
  --ytcp-wordmark-text: #cdd6f4;
  --ytcp-text-secondary: #a6adc8;
  --ytcp-text-disabled: #bac2de;
  --ytcp-overlay-text-primary: #9399b2;
  --ytcp-general-background-a: #1e1e2e;
  --yt-spec-base-background: #1e1e2e;
  --yt-spec-black-3: #1e1e2e;
  --yt-spec-brand-background-solid: #181825;
  --ytcp-brand-background-solid: #181825;
  --yt-spec-raised-background: #181825;
  --ytcp-general-background-b: #181825;
  --ytcp-analytics-reach-background: #181825;
  --yt-spec-black-2: #181825;
  --ytcp-general-background-c: #11111b;
  --ytcp-menu-background: #313244;
  --ytcp-container-border-color: #313244;
  --ytcp-container-hovered-border-color: #313244;
  --ytcp-line-divider-solid: #313244;
  --ytcp-container-border-color-inverse: #a6adc8;
  --ytcp-line-divider-solid-inverse: #a6adc8;
  --ytcp-call-to-action: #cba6f7;
  --ytcp-call-to-action-inverse: #181825;
  --ytcp-call-to-action-raised-background: #cba6f7;
  --yt-spec-brand-button-background: #cba6f7;
  --ytcp-call-to-action-raised-disabled: #585b70;
  --ytcp-call-to-action-raised-disabled-background: #9399b2;
  --ytcp-call-to-action-raised-background-inverse: #1e1e2e;
  --ytcp-call-to-action-raised-disabled-inverse: #585b70;
  --ytcp-call-to-action-raised-disabled-background-inverse: #9399b2;
  --yt-spec-brand-background-primary: #313244;
  --yt-compact-link-icon-color: #9399b2;
  --ytcp-icon-active: #cba6f7;
  --ytcp-icon-inactive: #9399b2;
  --ytcp-icon-disabled: #6c7086;
  --ytcp-icon-active-inverse: #7f849c;
  --ytcp-icon-disabled-inverse: #bac2de;
  --ytcp-error-red: #f38ba8;
  --ytcp-badge-red: #f38ba8;
  --ytcp-error-red-inverse: #f38ba8;
  --ytcp-themed-red-inverse: #f38ba8;
  --ytcp-themed-red: #cba6f7;
  --ytcp-themed-blue: #cba6f7;
  --ytcp-badge-blue: rgba(203, 166, 247, 0.3);
  --ytcp-badge-blue-solid: #89b4fa;
  --ytcp-themed-blue-inverse: #89b4fa;
  --ytcp-themed-green: #a6e3a1;
  --ytmus-genre-primary-melon: #a6e3a1;
  --ytcp-themed-green-inverse: #a6e3a1;
  --ytcp-analytics-pine: #a6e3a1;
  --ytcp-analytics-pine-inverse: #a6e3a1;
  --ytcp-analytics-parrot: #a6e3a1;
  --ytcp-themed-yellow: #fab387;
  --ytmus-genre-primary-gold: #fab387;
  --ytcp-yellow-inverse: #fab387;
  --ytcp-badge-yellow: #fab387;
  --ytcp-analytics-yellow: #fab387;
  --ytcp-analytics-apricot: #fab387;
  --ytcp-suggested-action: #94e2d5;
  --ytcp-analytics-overview: #94e2d5;
  --ytcp-analytics-revenue: #94e2d5;
  --ytcp-analytics-default-secondary: #94e2d5;
  --ytcp-analytics-royal-blue: #b4befe;
  --ytcp-analytics-reach: #b4befe;
  --ytcp-analytics-audience: #b4befe;
  --ytcp-analytics-engagement: #f5c2e7;
  --ytcp-analytics-revenue-secondary: #f5c2e7;
  --ytcp-analytics-bubblegum: #f2cdcd;
  --ytmus-genre-primary-ruby: #f2cdcd;
  --ytmus-genre-primary-salmon: #cba6f7;
  --ytmus-genre-primary-orange: #eba0ac;
  --ytmus-genre-primary-sky: #89dceb;
  --ytmus-genre-primary-sky-inverse: #89dceb;
  --yt-spec-badge-chip-background: #45475a;
  --ytcp-focus-inverse: #cba6f7;
  --ytcp-focus: #cba6f7;
  --ytcp-selected-item: #cba6f7;
  --ytcp-hover-item: #9399b2;
  --ytcp-chip-active-focus: #cba6f7;
  --ytcp-playhead: #9399b2;
  --ytcp-playhead-inverse: #9399b2;
}
:root[dark] ytcp-button.destructive.ytls-error-dialog {
  color: #1e1e2e;
}
:root[dark] yt-formatted-string.ytls-error-dialog,
:root[dark] tp-yt-iron-icon.ytls-error-dialog {
  color: #cdd6f4;
}
:root [src="https://www.gstatic.com/youtube/img/creator/yt_studio_logo_white.svg"] {
  content: url("data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2097.55%2024%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill%3D%22%23cba6f7%22%20d%3D%22M17.1%200S6.4%200%203.8.7a4.15%204.15%200%200%200-3%203C0%206.4%200%2012%200%2012a45%2045%200%200%200%20.7%208.2%204.32%204.32%200%200%200%203%203c2.7.8%2013.4.8%2013.4.8s10.7%200%2013.4-.7a4.32%204.32%200%200%200%203-3%2045%2045%200%200%200%20.7-8.2s.1-5.7-.6-8.3a4.32%204.32%200%200%200-3-3C27.9%200%2017.1%200%2017.1%200m-3.4%206.9%208.9%205.1-8.9%205.1z%22/%3E%3Cpath%20fill%3D%22%23cdd6f4%22%20d%3D%22M76.3.9v4.4c0%201.1%200%202%20.1%203.3h-.1A3.36%203.36%200%200%200%2073.4%207c-2.3%200-3.3%202-3.3%206.6V16c0%204.9.8%206.6%203.2%206.6a3.42%203.42%200%200%200%203.2-2.4h.1l.4%202.1h2.6V.9zm6.688.4c-1.126.032-1.687.55-1.687%202.1%200%201.7.599%202.1%201.799%202.1s1.8-.5%201.8-2.1-.6-2.1-1.8-2.1zM45%201.4c-3.6%200-5%201.7-5%204.9s1.1%204.5%203.7%206.8c1.6%201.4%202.8%202.5%202.8%204.8%200%201.5-.4%202.2-1.6%202.2s-1.7-.8-1.6-3.6h-3.1c-.6%204.2.8%206.1%204.5%206.2%203.5%200%205-1.5%205-5.4%200-3.1-1.3-4.4-3.7-6.6-1.9-1.8-2.8-2.5-2.8-4.6%200-1.4.3-2.2%201.6-2.2s1.6%201.1%201.5%203.9l3.1-.2c.5-4.2-.8-6.2-4.4-6.2m7.6%201.4-.4%204.5h-1.4v2.6H52v8.8c0%202.7.4%203.8%202.6%203.8a7.4%207.4%200%200%200%203.1-.6l-.6-2.2a5.2%205.2%200%200%201-1.3.2c-.5%200-.7-.3-.7-1.7V9.9h2.2V7.3H55V2.8zM91%207c-3.3%200-4.7%201.8-4.7%206.7v2.2c0%204.7%201.1%206.7%204.6%206.7s4.7-2%204.7-6.7v-2.2C95.6%208.9%2094.3%207%2091%207m-31.8.3v11.4c0%202.7.9%204%202.9%204a3.46%203.46%200%200%200%203.2-2.1h.1l.3%201.8h2.7V7.3H65v12a1.51%201.51%200%200%201-1.4%201c-.7%200-1-.6-1-1.9V7.3zm22.3%200v15.1h3.2V7.3zm9.4%202c1%200%201.3%201%201.3%203.1v4.7c0%202.2-.4%203.1-1.3%203.1s-1.2-.9-1.2-3.1v-4.7c0-2%20.2-3.1%201.2-3.1M75%209.4a1.56%201.56%200%200%201%201.3.8v8.5c-.2.9-.9%201.4-1.4%201.3-1%200-1.3-1-1.3-4.4v-1.9c0-3.3.3-4.3%201.4-4.3%22/%3E%3C/svg%3E");
}
:root,
:root html,
:root html[dark],
:root html[dark][dark],
:root[dark],
:root[light],
:root [light],
:root html[light],
:root html[light][light] {
  --yt-spec-black-pure-alpha-80: (null);
  --yt-spec-black-pure-alpha-60: (null);
  --yt-spec-black-1-alpha-98: (null);
  --yt-spec-black-1-alpha-95: (null);
  --iron-icon-fill-color: unset;
  --yt-spec-text-primary: #cdd6f4;
  --ytcp-text-primary: #cdd6f4;
  --ytcp-text-primary-inverse: #1e1e2e;
  --ytcp-static-overlay-text-primary-inverse: #1e1e2e;
  --ytcp-wordmark-text: #cdd6f4;
  --ytcp-text-secondary: #a6adc8;
  --ytcp-text-disabled: #bac2de;
  --ytcp-overlay-text-primary: #9399b2;
  --ytcp-general-background-a: #1e1e2e;
  --yt-spec-base-background: #1e1e2e;
  --yt-spec-black-3: #1e1e2e;
  --yt-spec-brand-background-solid: #181825;
  --ytcp-brand-background-solid: #181825;
  --yt-spec-raised-background: #181825;
  --ytcp-general-background-b: #181825;
  --ytcp-analytics-reach-background: #181825;
  --yt-spec-black-2: #181825;
  --ytcp-general-background-c: #11111b;
  --ytcp-menu-background: #313244;
  --ytcp-container-border-color: #313244;
  --ytcp-container-hovered-border-color: #313244;
  --ytcp-line-divider-solid: #313244;
  --ytcp-container-border-color-inverse: #a6adc8;
  --ytcp-line-divider-solid-inverse: #a6adc8;
  --ytcp-call-to-action: #cba6f7;
  --ytcp-call-to-action-inverse: #181825;
  --ytcp-call-to-action-raised-background: #cba6f7;
  --yt-spec-brand-button-background: #cba6f7;
  --ytcp-call-to-action-raised-disabled: #585b70;
  --ytcp-call-to-action-raised-disabled-background: #9399b2;
  --ytcp-call-to-action-raised-background-inverse: #1e1e2e;
  --ytcp-call-to-action-raised-disabled-inverse: #585b70;
  --ytcp-call-to-action-raised-disabled-background-inverse: #9399b2;
  --yt-spec-brand-background-primary: #313244;
  --yt-compact-link-icon-color: #9399b2;
  --ytcp-icon-active: #cba6f7;
  --ytcp-icon-inactive: #9399b2;
  --ytcp-icon-disabled: #6c7086;
  --ytcp-icon-active-inverse: #7f849c;
  --ytcp-icon-disabled-inverse: #bac2de;
  --ytcp-error-red: #f38ba8;
  --ytcp-badge-red: #f38ba8;
  --ytcp-error-red-inverse: #f38ba8;
  --ytcp-themed-red-inverse: #f38ba8;
  --ytcp-themed-red: #cba6f7;
  --ytcp-themed-blue: #cba6f7;
  --ytcp-badge-blue: rgba(203, 166, 247, 0.3);
  --ytcp-badge-blue-solid: #89b4fa;
  --ytcp-themed-blue-inverse: #89b4fa;
  --ytcp-themed-green: #a6e3a1;
  --ytmus-genre-primary-melon: #a6e3a1;
  --ytcp-themed-green-inverse: #a6e3a1;
  --ytcp-analytics-pine: #a6e3a1;
  --ytcp-analytics-pine-inverse: #a6e3a1;
  --ytcp-analytics-parrot: #a6e3a1;
  --ytcp-themed-yellow: #fab387;
  --ytmus-genre-primary-gold: #fab387;
  --ytcp-yellow-inverse: #fab387;
  --ytcp-badge-yellow: #fab387;
  --ytcp-analytics-yellow: #fab387;
  --ytcp-analytics-apricot: #fab387;
  --ytcp-suggested-action: #94e2d5;
  --ytcp-analytics-overview: #94e2d5;
  --ytcp-analytics-revenue: #94e2d5;
  --ytcp-analytics-default-secondary: #94e2d5;
  --ytcp-analytics-royal-blue: #b4befe;
  --ytcp-analytics-reach: #b4befe;
  --ytcp-analytics-audience: #b4befe;
  --ytcp-analytics-engagement: #f5c2e7;
  --ytcp-analytics-revenue-secondary: #f5c2e7;
  --ytcp-analytics-bubblegum: #f2cdcd;
  --ytmus-genre-primary-ruby: #f2cdcd;
  --ytmus-genre-primary-salmon: #cba6f7;
  --ytmus-genre-primary-orange: #eba0ac;
  --ytmus-genre-primary-sky: #89dceb;
  --ytmus-genre-primary-sky-inverse: #89dceb;
  --yt-spec-badge-chip-background: #45475a;
  --ytcp-focus-inverse: #cba6f7;
  --ytcp-focus: #cba6f7;
  --ytcp-selected-item: #cba6f7;
  --ytcp-hover-item: #9399b2;
  --ytcp-chip-active-focus: #cba6f7;
  --ytcp-playhead: #9399b2;
  --ytcp-playhead-inverse: #9399b2;
}
:root ytcp-button.destructive.ytls-error-dialog {
  color: #1e1e2e;
}
:root yt-formatted-string.ytls-error-dialog,
:root tp-yt-iron-icon.ytls-error-dialog {
  color: #cdd6f4;
}


html[darker-dark-theme] {
  background-color: #1e1e2e !important;
  color: #cdd6f4 !important;
  /* Ambient mode */
  /* Comment box */
  /* Bottom bar */
  /* Chips */
  /* Buttons */
}
html[darker-dark-theme] #cinematics {
  mix-blend-mode: lighten;
}
html[darker-dark-theme] .mobile-topbar-header[data-mode="watch"],
html[darker-dark-theme] ytm-mobile-topbar-renderer:not([ambient-topbar]) {
  background: #1e1e2e;
}
html[darker-dark-theme] .mobile-topbar-header[data-mode="watch"] .mobile-topbar-logo,
html[darker-dark-theme] .mobile-topbar-header[data-mode="watch"] .mobile-topbar-title,
html[darker-dark-theme] .mobile-topbar-header[data-mode="watch"] .mobile-topbar-header-content {
  color: #cdd6f4;
}
html[darker-dark-theme] .yt-spec-bottom-sheet-layout__bottom-sheet-renderer-container,
html[darker-dark-theme] .modern-styling {
  background: #313244;
}
html[darker-dark-theme] .yt-spec-bottom-sheet-layout__bottom-sheet-layout-header-wrapper {
  border-bottom-color: #313244;
}
html[darker-dark-theme] .yt-spec-bottom-sheet-layout__bottom-sheet-content {
  color: #cdd6f4;
}
html[darker-dark-theme] .engagement-panel-container {
  background: #181825;
}
html[darker-dark-theme] ytm-pivot-bar-renderer {
  background: #181825;
  color: #cdd6f4;
  border-top-color: #313244;
}
html[darker-dark-theme] .chip-bar {
  background-color: #1e1e2e;
}
html[darker-dark-theme] [chip-style*="STYLE_"] .chip-container {
  color: #cdd6f4;
  background-color: #313244;
}
html[darker-dark-theme] [chip-style*="STYLE_"].selected .chip-container {
  color: #11111b;
  background-color: #cba6f7;
}
html[darker-dark-theme] .yt-spec-touch-feedback-shape--touch-response .yt-spec-touch-feedback-shape__fill {
  background-color: #cdd6f4;
}
html[darker-dark-theme] .yt-spec-touch-feedback-shape--touch-response .yt-spec-touch-feedback-shape__stroke {
  border-color: #45475a;
}
html[darker-dark-theme] .yt-spec-touch-feedback-shape--overlay-touch-response-inverse .yt-spec-touch-feedback-shape__fill {
  background-color: #cba6f7;
}
html[darker-dark-theme] .yt-spec-touch-feedback-shape--overlay-touch-response .yt-spec-touch-feedback-shape__fill {
  background-color: #cdd6f4;
}
html {
  background-color: #1e1e2e !important;
  color: #cdd6f4 !important;
  /* Ambient mode */
  /* Comment box */
  /* Bottom bar */
  /* Chips */
  /* Buttons */
}
html #cinematics {
  mix-blend-mode: lighten;
}
html .mobile-topbar-header[data-mode="watch"],
html ytm-mobile-topbar-renderer:not([ambient-topbar]) {
  background: #1e1e2e;
}
html .mobile-topbar-header[data-mode="watch"] .mobile-topbar-logo,
html .mobile-topbar-header[data-mode="watch"] .mobile-topbar-title,
html .mobile-topbar-header[data-mode="watch"] .mobile-topbar-header-content {
  color: #cdd6f4;
}
html .yt-spec-bottom-sheet-layout__bottom-sheet-renderer-container,
html .modern-styling {
  background: #313244;
}
html .yt-spec-bottom-sheet-layout__bottom-sheet-layout-header-wrapper {
  border-bottom-color: #313244;
}
html .yt-spec-bottom-sheet-layout__bottom-sheet-content {
  color: #cdd6f4;
}
html .engagement-panel-container {
  background: #181825;
}
html ytm-pivot-bar-renderer {
  background: #181825;
  color: #cdd6f4;
  border-top-color: #313244;
}
html .chip-bar {
  background-color: #1e1e2e;
}
html [chip-style*="STYLE_"] .chip-container {
  color: #cdd6f4;
  background-color: #313244;
}
html [chip-style*="STYLE_"].selected .chip-container {
  color: #11111b;
  background-color: #cba6f7;
}
html .yt-spec-touch-feedback-shape--touch-response .yt-spec-touch-feedback-shape__fill {
  background-color: #cdd6f4;
}
html .yt-spec-touch-feedback-shape--touch-response .yt-spec-touch-feedback-shape__stroke {
  border-color: #45475a;
}
html .yt-spec-touch-feedback-shape--overlay-touch-response-inverse .yt-spec-touch-feedback-shape__fill {
  background-color: #cba6f7;
}
html .yt-spec-touch-feedback-shape--overlay-touch-response .yt-spec-touch-feedback-shape__fill {
  background-color: #cdd6f4;
}

`)