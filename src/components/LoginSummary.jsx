import logincover from "../logincover.jpg";

export default function LoginSummary() {
  return (
    <section className="login-sum-container">
      <img
        className="login-sum-image"
        src={logincover}
        alt="Woman with sunglasses"
      />
    </section>
  );
}
