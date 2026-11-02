import { type LucideIcon } from 'lucide-react';

import {
  Server,
  Database,
  BarChart3,
  LineChart,
  LayoutDashboard,
  PieChart,
  Code2,
  Sheet,
  Building2,
  FileText,
  Printer,
  Terminal,
  LifeBuoy,
  Briefcase,
  Wrench,
  Workflow,
} from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  Server,
  Database,
  BarChart3,
  LineChart,
  LayoutDashboard,
  PieChart,
  Code2,
  Sheet,
  Building2,
  FileText,
  Printer,
  Terminal,
  LifeBuoy,
  Briefcase,
  Wrench,
  Workflow,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Server;
}
