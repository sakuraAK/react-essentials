function toInputString(value) {
  return String(value ?? "");
}

export function isNotEmpty(value) {
  return toInputString(value).trim().length > 0;
}

export function matchesPattern(value, pattern) {
  const regex =
    pattern instanceof RegExp
      ? new RegExp(pattern.source, pattern.flags.replace(/[gy]/g, ""))
      : new RegExp(pattern);

  return regex.test(toInputString(value));
}

export function hasMinLength(value, minLength) {
  return toInputString(value).length >= minLength;
}

export function hasMaxLength(value, maxLength) {
  return toInputString(value).length <= maxLength;
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(toInputString(value).trim());
}

export function isStrongPassword(value) {
  return matchesPattern(value,
     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/
  )
}
