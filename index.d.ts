// Hyresobjekt
interface HyresobjektType {
  value: string;
  label: string;
  useRoomCount?: boolean;
}
export const hyresobjektTypes: HyresobjektType[];

interface BostadType {
  value: string;
  label: string;
}
export const bostadTypes: BostadType[];

interface ParkeringTypes {
  value: string;
  label: string;
}
export const parkeringTypes: ParkeringTypes[];

export function getSubType(ho: any): string;
export function getFullType(ho: any): string;
export function getTypeLabel(type: string): string;

// Avtal
export function convertPeriodToReadableFormat(
  period: string,
  showIf1?: boolean,
  prependText?: [string, string]
);
