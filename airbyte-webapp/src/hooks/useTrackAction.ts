import { useCallback } from "react";

import { useAnalyticsService } from "./services/Analytics/useAnalyticsService";

export const enum TrackActionType {
  NEW_SOURCE = "New Source",
  NEW_DESTINATION = "New Destination",
}

interface TrackActionProperties {
  connector_source?: string;
  connector_source_definition_id?: string;
  connector_destination?: string;
  connector_destination_definition_id?: string;
}

interface NewTrackActionProperties {
  connector_source?: string;
  connector_source_definition_id?: string;
  connector_destination?: string;
  connector_destination_definition_id?: string;
}

export const useTrackAction = (type: TrackActionType) => {
  const analyticsService = useAnalyticsService();

  return useCallback(
    (action: string, properties: TrackActionProperties) => {
      analyticsService.track(`${type} - Action`, { action, ...properties });
    },
    [analyticsService, type]
  );
};

export const useNewTrackAction = (type: TrackActionType) => {
  const analyticsService = useAnalyticsService();

  return useCallback(
    (action: string, properties: NewTrackActionProperties) => {
      analyticsService.track(`AIRBYTE.UI.${namespace}.${action_type}`, {
        action,
        ...properties,
        legacy_event_name: `${type} - Action`,
      });
    },
    [analyticsService, type]
  );
};
