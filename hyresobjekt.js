export const hyresobjektTypes = [
	{ value: "bostad", label: "Bostad" },
	{ value: "kontor", label: "Kontor" },
	{ value: "lokal", label: "Lokal" },
	{ value: "lager", label: "Lager" },
	{ value: "verkstad", label: "Verkstad" },
	{ value: "förråd", label: "Förråd" },
	{ value: "garage", label: "Garage" },
	{ value: "parkering", label: "Parkeringsplats" },
	{ value: "villa", label: "Villa" },
	{ value: "mark", label: "Mark" },
]
export const bostadTypes = [
	{ value: "rum", label: "rum" },
	{ value: "rum och kokvrå", label: "rum och kokvrå" },
	{ value: "rum och kök", label: "rum och kök" },
]

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
export function getSubType (ho) {
	if (ho.typ === 'bostad' && ho.roomCount && ho.bostadType) {
		return `${ho.roomCount} ${ho.bostadType}`
	} else if (ho.typ === 'parkering' && ho.parkeringType) {
		return parkeringTypes.find(t => t.value === ho.parkeringsType).label
	} else {
		return ""
	}
}

/**
 * Concatenation of typ and subType
 * @param {*} ho 
 */
export function getFullType (ho) {
	let subType = getSubType(ho)
	if (ho.typ && subType) {
		return `${ho.typ}, ${subType}`
	} else {
		return `${ho.typ}`
	}
}