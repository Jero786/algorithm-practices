function sortFilenamesByLexicographicOrder(filenames) {
  filenames.sort((a,b) => {
    const fileNameA = a.substring(0, a.indexOf('.'));
    const extensionA = a.substring(a.indexOf('.') + 1, a.length);
    const fileNameB = b.substring(0, b.indexOf('.'));
    const extensionB = b.substring(b.indexOf('.') + 1, b.length);
    
    const compareByExtension = extensionA.localeCompare(extensionB) < 0
    ? -1
    : extensionA.localeCompare(extensionB) > 0
    ? 1
    : 0
    
    const compareByFilename = fileNameA.localeCompare(fileNameB) < 0
    ? -1
    : fileNameA.localeCompare(fileNameB) > 0
    ? 1
    : 0
  
    return extensionA === extensionB
    ? compareByExtension
    : compareByFilename;
  });
  return filenames;
}

module.exports = {
  sortFilenamesByLexicographicOrder
}