import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

const Contact = () => {
  const form = useRef();
  const [formError, setFormError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const isValid = Array.from(formData.values()).every(value => value.trim() !== ''); 

    if (!isValid) {
      setFormError('All fields are required.');
      return;
    }

    emailjs.sendForm('service_1ymmv2c', 'template_xdgl4gr', form.current, 'HDOyBo_TxHFxa84bJ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <motion.section className="section-wrapper"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible
        }}
      >
        <div className="box-wrapper">
          <div className="info-wrap">
            <motion.h2 className="info-title"
              variants={itemVariants}
            >Contact Information</motion.h2>
            <motion.h3 className="info-sub-title"
              variants={itemVariants}
            >Fill up the form and our Team will get back to you within 24 hours</motion.h3>
            <motion.ul className="info-details"
              variants={itemVariants}
            >
              <li className='contact-info'>
                <i className="fas fa-phone-alt" />
                <span>Phone:</span> <a href="tel:+94 71 232 7321">+94 71 232 7321</a>
              </li>
              <li>
                <i className="fas fa-paper-plane" />
                <span>Email:</span> <a href="mailto:admin@thrimaa.com">admin@thrimaa.com</a>
              </li>
              <li>
                <i className="fas fa-globe" />
                <span>Website:</span> <a href="/">www.thrimaa.com</a>
              </li>
            </motion.ul>
            <motion.ul className="social-icons"
              variants={itemVariants}
            >
              <li><a href="https://lk.linkedin.com/company/thrimaa-interactive"><i className="fab fa-linkedin-in" /></a></li>
              <li><a href="https://www.facebook.com/thrimaainteractive"><i className="fab fa-facebook" /></a></li>
              <li><a href="#"><i className="fab fa-tiktok" /></a></li>
            </motion.ul>
          </div>
          <div className="form-wrap">
            <form ref={form} onSubmit={sendEmail}>
              <motion.h2 className="form-title"
                variants={itemVariants}
              >Leave a message</motion.h2>
              <motion.div className="form-fields"
                variants={itemVariants}
              >
                <div className="form-group">
                  <input type="text" name='first_name' className="fname" placeholder="First Name" />
                </div>
                <div className="form-group">
                  <input type="text" name='last_name' className="lname" placeholder="Last Name" />
                </div>
                <div className="form-group">
                  <input type="email" name='email' className="email" placeholder="E-Mail" />
                </div>
                <div className="form-group">
                  <input type="tel" name='tel' className="phone" placeholder="Phone" />
                </div>
                <div className="form-group">
                  <textarea className="message" name='message' placeholder="Write your message" defaultValue={""} />
                </div>
                {formError && <p style={{ color: 'red' }}>{formError}</p>}
              </motion.div>
              <input type="submit" defaultValue="Send Message" className="submit-button" />
            </form>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default Contact;
