import Link from "next/link";

const Blogs = () => {
  return (
    <section className="srex-blog-one srex-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="srex-blog-one__title">
              <div className="srex-section__head ">
                <h5 data-aos="fade-up" className="srex-section__head__badge">
                  <img src="/images/badge-icon.svg" alt="Badge Icon" />
                  Blog &amp; News
                </h5>
                <h2 data-aos="fade-up" data-aos-delay="200" className="srex-section__head__title">Shine Brighter with Solar</h2>
              </div>
              <Link data-aos="fade-up" data-aos-delay="400" href="/blogs" className="srex-btn srex-btn--primary ">
                More Blogs <i className="fa-solid fa-plus"></i>
              </Link>
            </div>
          </div>
          <div data-aos="fade-in" className="col-12 col-lg-4 col-md-6">
            <div className="srex-blog-one__post ">
              <Link href="/blog-details" className="srex-blog-one__post__img">
                <img src="/images/home-one/blog/blog-1.png" alt="Blog" />
              </Link>
              <div className="d-flex gap-5 mt-2">
                <div className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-calendar-alt"></i>
                  <h6>October 19, 2022</h6>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-user-alt"></i>
                  <h6>Admin</h6>
                </div>
              </div>
              <h3>
                <Link href="/blog-details">Explore the world like never before travel experience</Link>
              </h3>
              <Link href="/blog-details" className="srex-btn srex-btn--outline">
                Read More<i className="fa-solid fa-plus"></i>
              </Link>
            </div>
          </div>
          <div data-aos="fade-in" data-aos-delay="200" className="col-12 col-lg-4 col-md-6">
            <div className="srex-blog-one__post ">
              <Link href="/blog-details" className="srex-blog-one__post__img">
                <img src="/images/home-one/blog/blog-2.png" alt="Blog" />
              </Link>
              <div className="d-flex gap-5 mt-2">
                <div className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-calendar-alt"></i>
                  <h6>October 19, 2022</h6>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-user-alt"></i>
                  <h6>Admin</h6>
                </div>
              </div>
              <h3>
                <Link href="/blog-details">Explore the world like never before travel experience</Link>
              </h3>
              <Link href="/blog-details" className="srex-btn srex-btn--outline">
                Read More<i className="fa-solid fa-plus"></i>
              </Link>
            </div>
          </div>
          <div data-aos="fade-in" data-aos-delay="400" className="col-12 col-lg-4 col-md-6">
            <div className="srex-blog-one__post ">
              <Link href="/blog-details" className="srex-blog-one__post__img">
                <img src="/images/home-one/blog/blog-3.png" alt="Blog" />
              </Link>
              <div className="d-flex gap-5 mt-2">
                <div className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-calendar-alt"></i>
                  <h6>October 19, 2022</h6>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-user-alt"></i>
                  <h6>Admin</h6>
                </div>
              </div>
              <h3>
                <Link href="/blog-details">Explore the world like never before travel experience</Link>
              </h3>
              <Link href="/blog-details" className="srex-btn srex-btn--outline">
                Read More<i className="fa-solid fa-plus"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;