// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <i class="fa-solid fa-heart"></i>
        <a href="https://www.linkedin.com/in/shivendra-keshari-46aa67256/" target="_blank">
          Shivendra Keshari
        </a>
        <i class="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Food<span>Fire</span>
        </strong>
      </div>
    );
  };
  export default Footer;