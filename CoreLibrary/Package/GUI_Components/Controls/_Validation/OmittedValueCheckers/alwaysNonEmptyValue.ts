/* eslint-disable-next-line @typescript-eslint/no-unused-vars --
 * "typescript-eslint" plugin bug: the parameter cannot be removed because it need to be referred in the type
 *    guard definition.  */
export default function alwaysNonEmptyValue<ValueType>(_targetValue: ValueType): _targetValue is ValueType {
  return true;
}
