import logincover from "../logincover.jpg";

export default function LoginSummary() {
  return (
    <section className="login-sum-container">
      <div className="login-text-container">
        <h3 className="login-sum-title">
          Reprehenderit eu aliqua dolor non quis exercitation amet exercitation
          sunt duis nisi in.
        </h3>
        <p className="login-sum-subtitle">
          Cillum irure minim laborum consectetur Lorem. Aute ipsum mollit in
          dolore laborum irure in reprehenderit ullamco irure proident. Fugiat
          tempor do dolor incididunt. Duis consequat et qui minim. Pariatur non
          officia adipisicing dolore voluptate cupidatat. Quis irure do qui
          dolore duis veniam pariatur. Velit et veniam pariatur eiusmod enim.
        </p>
        <button>Log in</button>
      </div>
      <img
        className="login-sum-image"
        src={logincover}
        alt="Woman with sunglasses"
      />
    </section>
  );
}
