import { BRAND } from "../../config";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div>
          <strong>{BRAND.nameKo}</strong>
          <span>{BRAND.location}</span>
        </div>
        <p>Study space and systems for disciplined focus.</p>
      </div>
    </footer>
  );
};

export default Footer;
