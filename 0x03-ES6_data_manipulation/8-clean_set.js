export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let finalString;
  const position = startString.length;
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      if (finalString === undefined) {
        finalString = value.slice(position);
      } else {
        finalString = `${finalString}-${value.slice(position)}`;
      }
    }
  });
  return finalString;
}
