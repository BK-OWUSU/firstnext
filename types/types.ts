export interface Question {
  value: string;
  trigger: string;
  content: string;
}

// This is sample data.
export interface NavItem {
  title: string;
  url: string;
  isExternal?: boolean;
}

export interface NavGroup {
  title: string;
  url: string;
  items: NavItem[];
}