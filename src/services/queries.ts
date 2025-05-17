import useSWR from "swr";

import { MaintenanceConfig } from "@/types/MaintenanceConfig";

export function useMaintenanceNotification() {
  return useSWR<MaintenanceConfig>("");
}
