// Code generated - EDITING IS FUTILE. DO NOT EDIT.
//
// Generated by:
//     public/app/plugins/gen.go
// Using jennies:
//     TSTypesJenny
//     LatestMajorsOrXJenny
//     PluginEachMajorJenny
//
// Run 'make gen-cue' from repository root to regenerate.

export const pluginVersion = "10.3.1";

export type UpdateConfig = {
  render: boolean,
  dataChanged: boolean,
  schemaChanged: boolean,
};

export enum DebugMode {
  Cursor = 'cursor',
  Events = 'events',
  Render = 'render',
  State = 'State',
  ThrowError = 'ThrowError',
}

export interface Options {
  counters?: UpdateConfig;
  mode: DebugMode;
}
