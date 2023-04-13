import "../pages/styles/contact.css";

export const Contact = () => {
  return (
    <section className="container section-contact">
      <div className="container contact-wrapper">
        <h3 className="contact__title">Get in touch... or just say hello</h3>
        <h4 className="contact__subtitle">Direct Message or fill the form</h4>
        <form action="" className="contact__form">
          <div className="contact__form__inputs-container">
            <div className="contact__form__item">
              <label>Name</label>
              <input className="contact__form__item-input" type="text" />
            </div>
            <div className="contact__form__item">
              <label>LastName</label>
              <input className="contact__form__item-input" type="text" />
            </div>
            <div className="contact__form__item">
              <label>Email</label>
              <input className="contact__form__item-input" type="text" />
            </div>
          </div>
          <div className="contact__form__text-container">
            <label>Message</label>
            <textarea name=""></textarea>
          </div>
          <button onClick={(e) => e.preventDefault()} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
