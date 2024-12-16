export const redirectToEmail = () => {
  const recipient = "charanjit@sainilifters.com"; // Replace with your recipient's email
  const subject = encodeURIComponent("Quotation Request for Crane Services");
  const body = encodeURIComponent(
    `Respected Saini Lifters Team,\n\n` +
      `We are inquiring about the availability and quotation for crane services. Please provide us with the details for the following requirements:\n\n` +
      `1. WORK DETAILS  : [Describe the work in brief, e.g., construction, lifting heavy materials, etc.]\n\n` +
      `2. EQUIPMENT NEEDED  : [Specify the type of crane or equipment required]\n\n` +
      `3. FROM DATE  : [Provide the starting date of the requirement]\n\n` +
      `4. TO DATE  : [Provide the end date of the requirement]\n\n` +
      `5. WORK DURATION  : [Specify how long the work will continue]\n\n` +
      `6. LOCATION/AREA  : [Provide the place and area where the crane is required]\n\n` +
      `7. OPERATING HOURS  : [Specify 12 hours or 24 hours requirement]\n\n` +
      `8. OFFERED RATE  : [Mention the rate you are willing to offer for the service]\n\n` +
      `Looking forward to your prompt response with the quotation and availability.\n\n` +
      `Best regards,\n[Your Name/Company Name]\n[Your Contact Information]`
  );

  const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
};

export const sendWhatsAppMessage = () => {
  // Pre-written message
  const message = `We are inquiring about the availability and quotation for crane services. Please provide us with the details for the following requirements:

1. WORK DETAILS  : [Describe the work in brief, e.g., construction, lifting heavy materials, etc.]

2. EQUIPMENT NEEDED  : [Specify the type of crane or equipment required]

3. FROM DATE  : [Provide the starting date of the requirement]

4. TO DATE  : [Provide the end date of the requirement]

5. WORK DURATION  : [Specify how long the work will continue]

6. LOCATION/AREA  : [Provide the place and area where the crane is required]

7. OPERATING HOURS  : [Specify 12 hours or 24 hours requirement]

8. OFFERED RATE  : [Mention the rate you are willing to offer for the service]

Looking forward to your prompt response with the quotation and availability.`;

  // Encode the message
  const encodedMessage = encodeURIComponent(message);

  // WhatsApp link (change the phone number to your target recipient's number)
  const phoneNumber = "918928333827"; // Replace with the recipient's WhatsApp number
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Open WhatsApp link
  window.open(whatsappLink, "_blank");
};
