/**
 * Format periods from eg. 1d, 2m, 3q to fit in a sentence.
 * prependText[0] is for singular and prependText[1] is for plural
 * showIf1 - show number if number == 1
 */
export const convertPeriodToReadableFormat = (
  period,
  showIf1 = false,
  prependText = ["", ""]
) => {
  if (!period) return "";
  let text = period.replace(/[0-9]/, "");
  let num = period.replace(/[a-z]/i, "");
  if (text.search("y") > -1) {
    text = "år";
  } else if (text.search("m") > -1) {
    text = num > 1 ? "månader" : "månad";
  } else if (text.search("q") > -1) {
    text = "kvartal";
  } else if (text.search("v") > -1) {
    text = num > 1 ? "veckor" : "vecka";
  } else if (text.search("d") > -1) {
    text = num > 1 ? "dagar" : "dag";
  }
  if (num == 0) {
    return "";
  } else if (num == 1 && !showIf1) {
    return prependText[0] + text;
  } else {
    let preText = num > 1 ? prependText[1] : prependText[0];
    return num + " " + preText + text;
  }
};
