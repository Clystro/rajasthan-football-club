export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateName(name: string): ValidationResult {
  const trimmed = name.trim();
  if (!trimmed) {
    return { isValid: false, error: "Please enter your full name." };
  }
  if (trimmed.length < 2) {
    return { isValid: false, error: "Name must be at least 2 characters." };
  }
  if (trimmed.length > 80) {
    return { isValid: false, error: "Name is too long." };
  }
  return { isValid: true };
}

export function validatePhone(phone: string): ValidationResult {
  const trimmed = phone.trim();
  if (!trimmed) {
    return { isValid: false, error: "Please enter your phone number." };
  }
  // Match standard Indian 10-digit numbers or international phone formats
  const cleanDigits = trimmed.replace(/\D/g, "");
  if (cleanDigits.length < 10 || cleanDigits.length > 15) {
    return { isValid: false, error: "Enter a valid 10-digit mobile number." };
  }
  return { isValid: true };
}

export function validateEmail(email: string): ValidationResult {
  const trimmed = email.trim();
  if (!trimmed) {
    return { isValid: false, error: "Please enter your email address." };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) {
    return { isValid: false, error: "Please enter a valid email address." };
  }
  return { isValid: true };
}

export function sanitizeText(text: string): string {
  return text.replace(/[<>]/g, "").trim();
}
