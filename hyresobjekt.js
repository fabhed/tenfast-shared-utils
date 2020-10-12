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