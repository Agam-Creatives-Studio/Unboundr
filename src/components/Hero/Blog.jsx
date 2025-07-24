import React from 'react';
import './Blog.css';

function Blog() {
  return (
    <div>
      <section className="front-blog">
        <div className="content-container">
          <div className="front-blog-top">
            <h2 className="front-blog-title dec-title">
              <span>
                <i className="bi bi-journal-text"></i>
              </span>{' '}
              Latest Posts
            </h2>
            <a className="btn-Fx" href="#">
              <span>
                View Blog <i className="bi bi-arrow-right"></i>
              </span>
            </a>
          </div>

          <div className="front-blog-list">
            {/* Blog Post 1 */}
            <a className="front-blog-item article-blog" href="#">
              <div
                className="front-blog-item-thumbnail article__thumbnail"
                style={{
                  backgroundImage: `url('https://emilandersson.com/storage/blog-thumbnails/01JQ1PMBK9TZ02ECBAMG4ZGWYF.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="front-blog-item-content article__body">
                <h3 className="article__title">
                  Is CDN Solutions Still Relevant?
                </h3>
                <div className="article__excerpt">
                  <p>
                    In the fast-paced world of web development, performance is
                    everything...
                  </p>
                </div>
                <footer className="article__footer">
                  <span className="article__date">Mar 23, 2025</span>
                  <div className="footer__readmore">
                    <span className="footer__readmore-text">Read more</span>
                    <span className="footer__readmore-arrow">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </footer>
              </div>
            </a>

            {/* Blog Post 2 */}
            <a className="front-blog-item article-blog" href="#">
              <div
                className="front-blog-item-thumbnail article__thumbnail"
                style={{
                  backgroundImage: `url('https://emilandersson.com/storage/blog-thumbnails/01JPYS2JN0EAM6HDZ704MD17V8.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="front-blog-item-content article__body">
                <h3 className="article__title">
                  10 Best Web Development Stacks
                </h3>
                <div className="article__excerpt">
                  <p>
                    Choosing the right web development stack is like picking
                    ingredients for your signature dish...
                  </p>
                </div>
                <footer className="article__footer">
                  <span className="article__date">Mar 22, 2025</span>
                  <div className="footer__readmore">
                    <span className="footer__readmore-text">Read more</span>
                    <span className="footer__readmore-arrow">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </footer>
              </div>
            </a>

            {/* Blog Post 3 */}
            <a className="front-blog-item article-blog" href="#">
              <div
                className="front-blog-item-thumbnail article__thumbnail"
                style={{
                  backgroundImage: `url('https://emilandersson.com/storage/blog-thumbnails/01JPXM7VX6CXKVZ8YRAZ1M05EN.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="front-blog-item-content article__body">
                <h3 className="article__title">
                  Laravel &gt; GitHub &gt; Hostinger
                </h3>
                <div className="article__excerpt">
                  <p>
                    Setting up a Laravel environment, using GitHub, and
                    deploying with Hostinger...
                  </p>
                </div>
                <footer className="article__footer">
                  <span className="article__date">Mar 18, 2025</span>
                  <div className="footer__readmore">
                    <span className="footer__readmore-text">Read more</span>
                    <span className="footer__readmore-arrow">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </footer>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="front-blog">
        <div className="content-container">
          <div className="front-blog-top">
            <h2 className="front-blog-title dec-title">
              <span>
                <i className="bi bi-journal-text"></i>
              </span>{' '}
              Latest Posts
            </h2>
            <a className="btn-Fx" href="#">
              <span>
                View Blog <i className="bi bi-arrow-right"></i>
              </span>
            </a>
          </div>

          <div className="front-blog-list">
            {/* Blog Post 1 */}
            <a className="front-blog-item article-blog" href="#">
              <div
                className="front-blog-item-thumbnail article__thumbnail"
                style={{
                  backgroundImage: `url('https://emilandersson.com/storage/blog-thumbnails/01JQ1PMBK9TZ02ECBAMG4ZGWYF.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="front-blog-item-content article__body">
                <h3 className="article__title">
                  Is CDN Solutions Still Relevant?
                </h3>
                <div className="article__excerpt">
                  <p>
                    In the fast-paced world of web development, performance is
                    everything...
                  </p>
                </div>
                <footer className="article__footer">
                  <span className="article__date">Mar 23, 2025</span>
                  <div className="footer__readmore">
                    <span className="footer__readmore-text">Read more</span>
                    <span className="footer__readmore-arrow">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </footer>
              </div>
            </a>

            {/* Blog Post 2 */}
            <a className="front-blog-item article-blog" href="#">
              <div
                className="front-blog-item-thumbnail article__thumbnail"
                style={{
                  backgroundImage: `url('https://emilandersson.com/storage/blog-thumbnails/01JPYS2JN0EAM6HDZ704MD17V8.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="front-blog-item-content article__body">
                <h3 className="article__title">
                  10 Best Web Development Stacks
                </h3>
                <div className="article__excerpt">
                  <p>
                    Choosing the right web development stack is like picking
                    ingredients for your signature dish...
                  </p>
                </div>
                <footer className="article__footer">
                  <span className="article__date">Mar 22, 2025</span>
                  <div className="footer__readmore">
                    <span className="footer__readmore-text">Read more</span>
                    <span className="footer__readmore-arrow">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </footer>
              </div>
            </a>

            {/* Blog Post 3 */}
            <a className="front-blog-item article-blog" href="#">
              <div
                className="front-blog-item-thumbnail article__thumbnail"
                style={{
                  backgroundImage: `url('https://emilandersson.com/storage/blog-thumbnails/01JPXM7VX6CXKVZ8YRAZ1M05EN.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="front-blog-item-content article__body">
                <h3 className="article__title">
                  Laravel &gt; GitHub &gt; Hostinger
                </h3>
                <div className="article__excerpt">
                  <p>
                    Setting up a Laravel environment, using GitHub, and
                    deploying with Hostinger...
                  </p>
                </div>
                <footer className="article__footer">
                  <span className="article__date">Mar 18, 2025</span>
                  <div className="footer__readmore">
                    <span className="footer__readmore-text">Read more</span>
                    <span className="footer__readmore-arrow">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </footer>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
