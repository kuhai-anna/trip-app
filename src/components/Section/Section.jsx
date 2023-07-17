import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ tag, mainTitle, title, children }) => {
  let sectionContent;

  switch (tag) {
    case 'header':
      sectionContent = (
        <header className={css.header}>
          <div className="container">{children}</div>
        </header>
      );
      break;
    case 'main':
      sectionContent = <main className="main">{children}</main>;
      break;
    case 'footer':
      sectionContent = (
        <footer className="footer">
          <div className="container">{children}</div>
        </footer>
      );
      break;
    default:
      sectionContent = (
        <section className="section">
          <div className="container">
            {mainTitle ? (
              <h1 className="main-title">{mainTitle}</h1>
            ) : (
              <h2 className="section-title">{title}</h2>
            )}
            {children}
          </div>
        </section>
      );
      break;
  }

  return sectionContent;
};

Section.propTypes = {
  tag: PropTypes.string,
  mainTitle: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
};
