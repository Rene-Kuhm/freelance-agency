"use server";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Validate form data
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "Por favor, completa todos los campos del formulario.",
    };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Por favor, introduce un email válido.",
    };
  }

  try {
    // Here you would typically send an email or save to a database
    // For demonstration purposes, we'll just simulate a successful submission
    console.log("Contact form submission:", { name, email, subject, message });

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message: "¡Mensaje enviado correctamente! Te contactaré pronto.",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
    };
  }
}
