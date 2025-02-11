export const hyresobjektTypes = [
  { value: "bostad", label: "Bostad", useRoomCount: true },
  { value: "bostadsrätt", label: "Bostadsrätt", useRoomCount: true },
  { value: "kontor", label: "Kontor" },
  { value: "lokal", label: "Lokal" },
  { value: "lager", label: "Lager" },
  { value: "verkstad", label: "Verkstad" },
  { value: "förråd", label: "Förråd" },
  { value: "garage", label: "Garage" },
  { value: "parkering", label: "Parkeringsplats" },
  { value: "villa", label: "Villa", useRoomCount: true },
  { value: "mark", label: "Mark" },
  { value: "byggnad", label: "Byggnad" },
  { value: "våning", label: "Våning" },
];
export const bostadTypes = [
  { value: "rum", label: "rum" },
  { value: "rum och kokvrå", label: "rum och kokvrå" },
  { value: "rum och kök", label: "rum och kök" },
];

export const parkeringTypes = [
  { value: "personbil", label: "Personbil" },
  { value: "lastbil", label: "Lastbil" },
  { value: "lätt-lastbil", label: "Lätt lastbil" },
  { value: "lastbil-18ppl", label: "Lastbil 18ppl" },
  { value: "lastbil-med-släpvagn", label: "Lastbil med släpvagn" },
  { value: "trailer", label: "Trailer" },
  { value: "husbil-liten", label: "Husbil liten" },
  { value: "husbil-stor", label: "Husbil stor" },
];

/**
 * A more specific description of the object.
 */
export function getSubType(ho) {
  const types = hyresobjektTypes
    .filter((t) => t.useRoomCount)
    .map((t) => t.value);
  if (types.includes(ho.typ) && ho.roomCount && ho.bostadType) {
    return `${ho.roomCount} ${ho.bostadType}`;
  } else if (ho.typ === "parkering" && ho.parkeringType) {
    const type = parkeringTypes.find((t) => t.value === ho.parkeringType);
    return type ? type.label : "";
  } else {
    return "";
  }
}

/**
 * Concatenation of typ and subType
 * @param {*} ho
 */
export function getFullType(ho) {
  const subType = getSubType(ho);
  const typeDef = hyresobjektTypes.find((t) => t.value === ho.typ) || {
    label: "",
  };
  const { label } = typeDef;
  if (subType) {
    return `${label}, ${subType}`;
  } else {
    return `${label || ""}`;
  }
}

/**
 * Gets the label for a type
 * The label is what should be displayed in an UI.
 * @param {String} type
 */
export function getTypeLabel(type) {
  const obj = hyresobjektTypes.find((t) => t.value === type);
  if (!obj) return type;
  return obj.label;
}

export function getDisplayName(ho) {
  let number = ho.nummer || ho.skvNummer;
  if (number == null) {
    return ho.postadress;
  }
  return `${ho.postadress} - nr. ${number}`;
}
