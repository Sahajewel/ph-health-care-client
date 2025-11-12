import { type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

export const getIconComponent = (icon: string): LucideIcon => {
  const iconComponent = Icons[icon as keyof typeof Icons];
  if (!iconComponent) {
    return Icons.HelpCircle; // Default icon
  }
  return iconComponent as LucideIcon;
};
