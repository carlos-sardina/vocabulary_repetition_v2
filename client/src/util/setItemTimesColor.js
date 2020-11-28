export function setTimesColor(times) {
  if (times > 0 && times < 100) {
    return "bg_blue"
  } else if (times >= 100 && times < 200) {
    return "bg_yellow"
  } else if (times >= 200 && times < 400) {
    return "bg_red"
  } else if (times >= 400 && times < 500) {
    return "bg_red_str"
  } else if (times >= 500 && times < 550) {
    return "bg_purple"
  } else if (times >= 550 && times < 600) {
    return "bg_purple_str"
  } else if (times >= 600) {
    return "bg_black"
  }

  return "bg_green";
}