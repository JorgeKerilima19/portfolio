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
          <div className="contact__form__text-container container">
            <label>Message</label>
            <textarea className="contact__form__item-textarea" name=""></textarea>
          </div>
          <button className="contact__form__button" onClick={(e) => e.preventDefault()} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
