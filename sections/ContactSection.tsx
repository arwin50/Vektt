import { Mail, Phone } from "react-feather";
import { PiNeedle } from "react-icons/pi";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        () => {
          setSending(false);
          setSent(true);
          if (formRef.current) {
            formRef.current.reset();
          }
        },
        (err) => {
          setSending(false);
          setError("Failed to send message. Please try again later.");
          console.error("EmailJS Error:", err);
        }
      );
  };
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center py-16 sm:py-20 px-15 sm:px-20 bg-white"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2
          className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16"
          style={{ color: "#22223B" }}
        >
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3
                className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6"
                style={{ color: "#22223B" }}
              >
                Get in Touch
              </h3>
              <p
                className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
                style={{ color: "#22223B" }}
              >
                Ready to transform your data into actionable insights? Let's
                discuss how we can help your business make data-driven
                decisions.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#56F6C1" }}
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4
                    className="font-semibold text-sm sm:text-base"
                    style={{ color: "#22223B" }}
                  >
                    Email
                  </h4>
                  <p
                    className="text-sm sm:text-base"
                    style={{ color: "#22223B" }}
                  >
                    vektdatalab@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#F57375" }}
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4
                    className="font-semibold text-sm sm:text-base"
                    style={{ color: "#22223B" }}
                  >
                    Phone
                  </h4>
                  <p
                    className="text-sm sm:text-base"
                    style={{ color: "#22223B" }}
                  >
                    (+63) 9761007216
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#22223B" }}
                >
                  <PiNeedle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4
                    className="font-semibold text-sm sm:text-base"
                    style={{ color: "#22223B" }}
                  >
                    Location
                  </h4>
                  <p
                    className="text-sm sm:text-base"
                    style={{ color: "#22223B" }}
                  >
                    Cebu City, Philippines
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="rounded-lg p-6 sm:p-8"
            style={{ backgroundColor: "#F6F7FB" }}
          >
            <form
              ref={formRef}
              className="space-y-4 sm:space-y-6"
              onSubmit={handleSend}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#22223B" }}
                  >
                    {" "}
                    First Name{" "}
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 text-sm sm:text-base"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#22223B" }}
                  >
                    {" "}
                    Last Name{" "}
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 text-sm sm:text-base"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#22223B" }}
                >
                  {" "}
                  Email{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 text-sm sm:text-base"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#22223B" }}
                >
                  {" "}
                  Message{" "}
                </label>
                <textarea
                  rows={4}
                  name="message"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 text-sm sm:text-base"
                  placeholder="Tell us about your data analytics needs..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-[#56f6c1] hover:bg-green-800 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base cursor-pointer hover:opacity-80"
                disabled={sending}
              >
                {sending ? "Sending..." : sent ? "Sent!" : "Send Message"}
              </button>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
