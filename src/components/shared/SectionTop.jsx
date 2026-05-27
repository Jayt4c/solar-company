import Link from "next/link";

const SectionTop = ({ title }) => {
  return (
    <section className="section-top">
      <div className="container">
        <div className="col-lg-10 offset-lg-1 text-center">
          <div className="section-top-title">
            <h1>{title}</h1>
            <ul className="d-flex align-items-center gap-2 justify-content-center">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                {" "}
                <i className="fa fa-chevron-right fs-6"></i>
              </li>
              <li>{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTop;