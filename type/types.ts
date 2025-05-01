import { Post } from "@prisma/client";


export interface ThemeState {
  isDark: boolean;
}
export interface ProjectInitialStateProps {
  projects: Post[];
  loading: boolean;
  error: string | null;
}
