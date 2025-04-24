export interface ProjectCardProps {
  title: string;
  address: string;
  technologies: string;
  date: string;
  file?: string 
}

export interface ThemeState {
  isDark: boolean;
}
export interface ProjectInitialStateProps {
  projects: ProjectCardProps[];
  loading: boolean;
  error: string | null;
}
