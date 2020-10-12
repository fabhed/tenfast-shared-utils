export const hyresobjektTypes = ['lager', 'bostad', 'verkstad', 'förråd', 'kontor', 'garage', 'parkering', 'mark', 'lokal', 'villa']
export const parkeringTypes = [
	{ value: "personbil", label: "Personbil" },
	{ value: "lätt-lastbil", label: "Lätt lastbil" },
	{ value: "lastbil-18ppl", label: "Lastbil 18ppl" },
	{ value: "släpvagn", label: "Släpvagn" },
	{ value: "lastbil-med-släpvagn", label: "Lastbil med släpvagn" },
	{ value: "husbil-liten", label: "Husbil liten" },
	{ value: "husbil-stor", label: "Husbil stor" },
]



/**
 * A more specific description of the object. Currently has special values for bostad & parkering
 */
export function getSubType (hyresobjekt) {
	if (hyresobjekt.typ === 'bostad' && hyresobjekt.roomCount && hyresobjekt.bostadType) {
		return `${hyresobjekt.roomCount} ${hyresobjekt.bostadType}`
	} else if (hyresobjekt.typ === 'parkering' && hyresobjekt.parkeringType) {
		return parkeringTypes.find(t => t.value === hyresobjekt.parkeringsType).label
	} else {
		return ""
	}
}