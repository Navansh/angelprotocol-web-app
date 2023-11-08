export enum appRoutes {
  auth_redirector = "/auth-redirector",
  marketplace = "/marketplace",
  leaderboard = "/leaderboard",
  admin = "/admin",
  register = "/register",
  signin = "/signin",
  profile = "/profile",
  donations = "/donations",
  donate = "/donate",
  donate_fiat_thanks = "/donate-fiat-thanks",
  donate_widget = "/donate-widget",
  gift = "/gift",
}

export const adminRoutes = {
  index: "",
  //charity
  edit_profile: "edit-profile",
  programs: "programs",
  program_editor: "program-editor",
  banking: "banking",
  widget_config: "widget-config",
} as const;