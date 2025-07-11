export default function alwaysNonEmptyValue<ValueType>(_targetValue: ValueType): _targetValue is ValueType {
  return true;
}
