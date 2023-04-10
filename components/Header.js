import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className="title">
        <span>Webdev</span>
        News
      </h1>
      <style jsx>
        {`
          .title {
            color: green;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
