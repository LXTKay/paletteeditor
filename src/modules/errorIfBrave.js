export default async function errorIfBrave() {
  if (navigator.brave && await navigator.brave.isBrave()) {
    throw new Error("Brave Browser: Disable shield or else Brave will mess up your colors. (Click lion head next to the URL)");
  }
}