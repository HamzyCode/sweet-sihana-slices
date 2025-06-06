
// Input sanitization utilities
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  // Remove potentially dangerous HTML tags and scripts
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
    .replace(/<embed\b[^<]*>/gi, '')
    .replace(/<link\b[^<]*>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim();
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phone) => {
  // Basic phone number validation - adjust regex as needed
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
};

export const limitInputLength = (input, maxLength = 1000) => {
  if (typeof input !== 'string') return input;
  return input.substring(0, maxLength);
};

export const sanitizeAndValidateContactForm = (formData) => {
  const errors = {};
  const sanitizedData = {};

  // Sanitize and validate name
  if (!formData.name || formData.name.trim().length === 0) {
    errors.name = 'Name is required';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  } else {
    sanitizedData.name = limitInputLength(sanitizeInput(formData.name), 100);
  }

  // Sanitize and validate email
  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = 'Valid email is required';
  } else {
    sanitizedData.email = sanitizeInput(formData.email.toLowerCase());
  }

  // Sanitize and validate phone (optional)
  if (formData.phone) {
    if (!validatePhoneNumber(formData.phone)) {
      errors.phone = 'Invalid phone number format';
    } else {
      sanitizedData.phone = limitInputLength(sanitizeInput(formData.phone), 20);
    }
  }

  // Sanitize and validate message
  if (!formData.message || formData.message.trim().length === 0) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  } else {
    sanitizedData.message = limitInputLength(sanitizeInput(formData.message), 2000);
  }

  // Sanitize optional fields
  if (formData.subject) {
    sanitizedData.subject = limitInputLength(sanitizeInput(formData.subject), 200);
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitizedData
  };
};
