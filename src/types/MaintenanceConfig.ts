export interface MaintenanceConfig {
  isMaintenanceScheduled: boolean;
  scheduledStartTimeISO: string;
  scheduledEndTimeISO: string;
  title: string;
  message: string;
}
