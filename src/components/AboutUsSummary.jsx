import office from "../office.jpg";
import { Link } from "react-router-dom";

export default function AboutUsSummary() {
  return (
    <section className="about-sum-container">
      <div className="about-sum-text">
        <h3>Ipsum lorem, aute velit ullamco sint</h3>
        <p>
          Sint aute velit ullamco sint dolor cillum excepteur eu consequat.
          Laboris aute in non id et velit officia. Nulla sunt veniam magna nulla
          adipisicing laborum aliquip ipsum. Veniam cupidatat veniam aute est
          laboris duis irure labore minim. Consectetur laborum quis aliqua magna
          consequat sunt sit officia. Elit laborum commodo sint sunt non dolore
          cillum quis sit Lorem incididunt elit eu qui.
        </p>
        <ul>
          <li>
            Laboris enim sit est proident dolor reprehenderit exercitation
            culpa.
          </li>
          <li>
            Laboris enim sit est proident dolor reprehenderit exercitation
            culpa.
          </li>
          <li>
            Laboris enim sit est proident dolor reprehenderit exercitation
            culpa.
          </li>
        </ul>
        <Link to="/about-us">
          <button className="learn-more-button">Learn more</button>
        </Link>
      </div>
      <img className="about-sum-image" src={office} alt="Office" />
    </section>
  );
}
