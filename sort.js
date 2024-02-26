export const MAX_LIGHT_PACKAGE_MASS_KG = 20;
export const MAX_NOT_BULKY_PACKAGE_VOLUME_CM2 = 1000000;
export const MAX_NOT_BULKY_DIMENSION_CM = 150;

export function sort(width, height, length, mass) {
  if (!width || !height || !length || !mass) {
    throw new Error(
      `width, height, length and mass should be numbers greater than 0, got width=${width}, height=${height}, length=${length}, mass=${mass}`
    );
  }
  const isHeavy = mass >= MAX_LIGHT_PACKAGE_MASS_KG;
  const volume = width * height * length;
  const isNotBulky =
    volume < MAX_NOT_BULKY_PACKAGE_VOLUME_CM2 &&
    width < MAX_NOT_BULKY_DIMENSION_CM &&
    height < MAX_NOT_BULKY_DIMENSION_CM &&
    length < MAX_NOT_BULKY_DIMENSION_CM;

  if (isHeavy) {
    if (isNotBulky) {
      return "SPECIAL";
    }
    return "REJECTED";
  }
  if (isNotBulky) {
    return "STANDARD";
  }
  return "SPECIAL";
}
