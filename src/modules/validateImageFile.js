export default function validateImageFile(file) {
  if (!file) throw new Error("No file selected.");

  // Allowed MIME types
  const validTypes = ["image/jpeg", "image/png", "image/bmp"];

  // Check MIME type first
  if (!validTypes.includes(file.type)) {
    throw new Error(
      `Invalid file type: ${file.type || "unknown"}. Please upload a JPG, PNG, or BMP image.`
    );
  }

  const validExtensions = [".jpg", ".jpeg", ".png", ".bmp"];
  const fileExtension = file.name
    .slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2)
    .toLowerCase();

  if (!validExtensions.includes(`.${fileExtension}`)) {
    throw new Error(
      `Invalid file extension: .${fileExtension}. Please upload a JPG, PNG, or BMP image.`
    );
  }

  return true;
}
