type languages = "eng";
type themes = "dark";

interface IAppEntityState {
  language: languages;
  theme: themes;
  appLoaded: boolean;
}

export type { IAppEntityState, languages, themes };
