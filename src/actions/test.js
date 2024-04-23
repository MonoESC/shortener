"use server";
const whatsAppBaseUrl = "https://wa.me/";
export const printText = (formData) => {
  const { prefix, phone, text } = Object.fromEntries(formData);
  const encodedPrefix = encodeURIComponent(prefix);
  const encodedPhone = encodeURIComponent(phone);
  const encodedText = encodeURIComponent(text);
  //   const whatsAppEncodedUrl = encodeURI(
  //     `${whatsAppBaseUrl}${encodedPrefix}${encodedPhone}/?text=${encodedText}`
  //   );
  const whatsAppEncodedUrl = `${whatsAppBaseUrl}${encodedPrefix}${encodedPhone}?text=${encodedText}`;

  console.log(encodedPrefix, encodedPhone, encodedText);
  console.log(whatsAppEncodedUrl);
};

// texto%20con%20acentuaci%C3%B3n%20y%20signos%3F!

// texto+con+acentuación+y+signos%3F%21