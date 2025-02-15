export interface ProjectCardProps {
  title: string;
  address: string;
  technologies: string;
  date: string;
  file: string | undefined;
}

export interface ThemeState {
  isDark: boolean;
}