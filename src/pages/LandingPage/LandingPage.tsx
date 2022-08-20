import "./landing-page.scss";
import "../../stylesheets/page.scss";
import bookstoreIllustration from "../../assets/images/bookstore-illustration.png";

const LandingPage = () => {
  return (
    <main className="page landing-page">
      <img
        className="landing-page__illustration"
        src={bookstoreIllustration}
        alt="bookstore-illustration"
      />
      <p className="landing-page__title">Welcome to BookStore</p>
    </main>
  );
};

export default LandingPage;
