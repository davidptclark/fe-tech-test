import { Link } from "react-router-dom";

export default function ContactUsSummary() {
  return (
    <section>
      <h3>Magna excepteur fugiat elit nostrud dolor nulla exercitation.</h3>
      <h4>elit nostrud dolor nulla</h4>
      <article className="about-us-text">
        <p>
          Officia est ut velit culpa cillum aliquip dolore esse ad pariatur
          deserunt laboris exercitation exercitation. Ipsum mollit proident
          occaecat laborum. Lorem non minim sint velit. Non proident sunt ad
          eiusmod Lorem aliqua. Pariatur duis excepteur occaecat labore dolor ut
          nulla ipsum quis tempor minim do cillum. Culpa qui in laboris est.
        </p>
        <p>
          Officia est ut velit culpa cillum aliquip dolore esse ad pariatur
          deserunt laboris exercitation exercitation. Ipsum mollit proident
          occaecat laborum. Lorem non minim sint velit. Non proident sunt ad
          eiusmod Lorem aliqua. Pariatur duis excepteur occaecat labore dolor ut
          nulla ipsum quis tempor minim do cillum. Culpa qui in laboris est.
          Officia est ut velit culpa cillum aliquip dolore esse ad pariatur
          deserunt laboris exercitation exercitation. Ipsum mollit proident
          occaecat laborum.
        </p>
        <p>
          Lorem non minim sint velit. Non proident sunt ad eiusmod Lorem aliqua.
          Pariatur duis excepteur occaecat labore dolor ut nulla ipsum quis
          tempor minim do cillum. Culpa qui in laboris est.Pariatur duis
          excepteur occaecat labore dolor ut nulla ipsum quis tempor minim do
          cillum.
        </p>
        <p>
          Culpa qui in laboris est. Officia est ut velit culpa cillum aliquip
          dolore esse ad pariatur deserunt laboris exercitation exercitation.
          Ipsum mollit proident occaecat laborum. Lorem non minim sint velit.
          Non proident sunt ad eiusmod Lorem aliqua. Pariatur duis excepteur
          occaecat labore dolor ut nulla ipsum quis tempor minim do cillum.
          Culpa qui in laboris est.
        </p>
      </article>
      <Link to="/contact-us">
        <button className="contact-us-button">Contact Us</button>
      </Link>
    </section>
  );
}
