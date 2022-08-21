import "./illustration-section.scss";
import bookstoreIllustration from "../../assets/images/bookstore-illustration.png";

const IllustrationSection = ({ text }: { text: string }) => {
  return (
    <section className="illustration">
      <img
        className="illustration__image"
        src={bookstoreIllustration}
        alt="bookstore-illustration"
      />
      <p className="landing-page__title">{text}</p>
    </section>
  );
};

export default IllustrationSection;
