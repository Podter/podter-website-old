export type Theme = "light" | "dark";

declare global {
  interface DocumentEventMap {
    "set-theme": CustomEvent<Theme | null>;
  }
}

const STORAGE_KEY = "theme";

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function getThemePreference(): Theme {
  return prefersDark.matches ? "dark" : "light";
}

function resolveTheme(setting?: Theme | null): Theme {
  const storageValue =
    setting !== undefined
      ? setting
      : (localStorage.getItem(STORAGE_KEY) as Theme);

  return storageValue ?? getThemePreference();
}

function writeTheme(theme: Theme) {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
  document.documentElement.style.colorScheme = theme;
}

function handleStorageChange(event: StorageEvent) {
  if (event.key !== STORAGE_KEY) return;
  writeTheme(resolveTheme(event.newValue as Theme));
}

function handlePreferenceChange() {
  writeTheme(resolveTheme());
}

function handleThemeChange(event: CustomEvent<Theme | null>) {
  if (event.detail) {
    localStorage.setItem(STORAGE_KEY, event.detail);
    writeTheme(event.detail);
  } else {
    localStorage.removeItem(STORAGE_KEY);
    writeTheme(resolveTheme(event.detail));
  }
}

document.addEventListener("set-theme", handleThemeChange);
window.addEventListener("storage", handleStorageChange);
prefersDark.addEventListener("change", handlePreferenceChange);
writeTheme(resolveTheme());
