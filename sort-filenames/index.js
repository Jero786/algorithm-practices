function sortFilenamesByLexicographicOrder(filenames) {
  
  const collector = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base"
  });
  
  filenames.sort(collector.compare);
  return filenames;
}

module.exports = {
  sortFilenamesByLexicographicOrder
}