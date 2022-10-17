export default function FooterSection() {
  return (
    <div className="footer__container">
      <h2 className="footer__header">subscribe to our email list</h2>
      <form>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="What's your email?"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
