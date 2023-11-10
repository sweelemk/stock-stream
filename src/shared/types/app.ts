import { IconName } from "shared/ui/icons";

export type Routes = {
  id: string;
  component: React.FunctionComponent;
  path: string;
  label: string;
  icon: IconName;
};
