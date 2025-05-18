export default function generateInvalidGeometricVariationVuePropertyValidationMessage(
  { componentName }: Readonly<{ componentName: string; }>
): string {
  return `Must be the one among values of \`${ componentName }.GeometricVariations\` associative array including the ` +
    `ones defined via \`${ componentName }.defineGeometricVariations()\`.`;
}
