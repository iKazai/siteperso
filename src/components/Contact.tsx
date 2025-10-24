import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    alert('Message sent successfully! (This is a demo)');
    reset();
  };

  return (
    <section id="contact" className="bg-base-100 py-20 px-6 min-h-screen" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-bold text-center mb-6"
          style={{ fontFamily: 'EB Garamond, serif' }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg mb-12 opacity-80"
        >
          Have a question or want to work together? Feel free to reach out!
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 mb-2 text-sm font-medium">
                <FaUser className="text-[#b5dcff]" />
                Name
              </label>
              <input
                {...register('name')}
                type="text"
                className="w-full px-4 py-3 bg-base-200 border-2 border-transparent rounded-xl focus:border-[#b5dcff] focus:outline-none transition-all duration-300"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2 text-sm font-medium">
                <FaEnvelope className="text-[#b5dcff]" />
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                className="w-full px-4 py-3 bg-base-200 border-2 border-transparent rounded-xl focus:border-[#b5dcff] focus:outline-none transition-all duration-300"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              {...register('subject')}
              type="text"
              className="w-full px-4 py-3 bg-base-200 border-2 border-transparent rounded-xl focus:border-[#b5dcff] focus:outline-none transition-all duration-300"
              placeholder="What's this about?"
            />
            {errors.subject && (
              <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              {...register('message')}
              rows={6}
              className="w-full px-4 py-3 bg-base-200 border-2 border-transparent rounded-xl focus:border-[#b5dcff] focus:outline-none transition-all duration-300 resize-none"
              placeholder="Your message..."
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-[#b5dcff] to-[#a78bfa] text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <span className="loading loading-spinner"></span>
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
