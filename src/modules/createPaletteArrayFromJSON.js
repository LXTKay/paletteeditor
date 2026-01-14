export default async function createPaletteArrayFromJSON(jsonPalette) {
  let data;

  try {
    const text = await jsonPalette.text();
    data = JSON.parse(text);
  } catch {
    throw new Error("Invalid JSON file");
  }

  const HEX_COLOR_REGEX = /^#([0-9a-fA-F]{6})$/;
  const colors = [];

  function search(node, depth) {
    if (depth > 5 || node == null) return;

    if (typeof node === "string") {
      if (HEX_COLOR_REGEX.test(node)) {
        colors.push(node);
      }
      return;
    }

    if (Array.isArray(node)) {
      for (const item of node) {
        search(item, depth + 1);
      }
      return;
    }

    if (typeof node === "object") {
      for (const key in node) {
        search(node[key], depth + 1);
      }
    }
  }

  search(data, 0);

  if (colors.length === 0) {
    throw new Error("JSON Import Error: No hex colors found in JSON (searched up to 5 levels deep)");
  }

  return colors;
}
