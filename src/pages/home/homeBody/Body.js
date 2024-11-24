import { Link } from "react-router-dom";
import ArtistCard from "../../../components/artistCard/ArtistCard";
import avatar from "../../../data/avatar";
import RocketLaunchLogo from "../../../assets/icons/RocketLaunch.svg";
import "./body.css";
import CollectionCard from "../../../components/collectionCard/CollectionCard";
import CreatorCard from "../../../components/artistCard/creatorCard";

export function Body() {
  return (
    <div className="body">
      {/* <!-- Hero --> */}
      <div className="section hero">
        <div className="container content-hero">
          <div className="head-block head-column-hero">
            <h1>Discover digital art & Collect NFTs</h1>
            <p>
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
            <Link to="./user" className="btn btn-view-hero">
              <img src={RocketLaunchLogo} />
              Get Started
            </Link>
            <div className="additional">
              <p>
                <span>240k+ </span>
                <span>Total Sale</span>
              </p>
              <p>
                <span>100k+</span>
                <span>Auctions</span>
              </p>
              <p>
                <span>240k+ </span>
                <span>Artists</span>
              </p>
            </div>
          </div>
          <div className="body-block body-column-hero">
            <Link to="/artist-page" className="highlight">
              <div className="image-hero">
                <img
                  src="https://www.figma.com/file/FGd5LzWg8SdMnW9pn4XBtS/image/8ac9e0e3bcf2d5507a81254146143702cd71f923?fuid=1367676062260619214"
                  alt="Image"
                />
              </div>
              <div className="user">
                <h5>Space Walking</h5>
                <ArtistCard data={avatar} />
              </div>
            </Link>
          </div>
          <div className="only-mobile">
            <h1>Discover digital art & Collect NFTs</h1>
            <p>
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
            <Link to="/artist-page" className="highlight">
              <div className="image-hero">
                <img src="./assets/images/home/hero/banner.png" alt="Image" />
              </div>
              <div className="user">
                <h5>Space Walking</h5>
                <div className="avartar-username">
                  <img
                    src="./assets/images/home/top/animakid.png"
                    alt="Avartar"
                  />
                  <p>Animakid</p>
                </div>
              </div>
            </Link>
            <Link to="./user" className="btn btn-view-hero">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.17053 12.4494C6.28055 12.7766 6.10451 13.131 5.77734 13.241C4.71792 13.5973 4.15489 14.4866 3.85373 15.391C3.73414 15.7501 3.66189 16.0958 3.61848 16.3817C3.90434 16.3383 4.25006 16.266 4.60917 16.1464C5.51355 15.8453 6.4029 15.2823 6.75916 14.2228C6.86918 13.8957 7.2236 13.7196 7.55078 13.8296C7.87795 13.9397 8.05399 14.2941 7.94396 14.6213C7.4096 16.2103 6.08801 16.9715 5.00411 17.3324C4.45655 17.5148 3.94395 17.6048 3.5698 17.6497C3.38182 17.6722 3.22641 17.6836 3.116 17.6894C3.06074 17.6924 3.01658 17.6939 2.98505 17.6946C2.96928 17.695 2.95666 17.6952 2.94737 17.6954L2.93596 17.6955L2.93217 17.6955L2.93077 17.6955L2.93019 17.6955C2.92993 17.6955 2.92969 17.6955 2.92969 17.0705C2.30469 17.0705 2.30469 17.0702 2.30469 17.07L2.30469 17.0694L2.30469 17.068L2.30471 17.0642L2.30481 17.0528C2.30493 17.0435 2.30514 17.0309 2.30553 17.0151C2.30631 16.9836 2.30782 16.9394 2.31072 16.8842C2.31653 16.7738 2.32797 16.6184 2.35052 16.4304C2.3954 16.0562 2.48542 15.5436 2.66776 14.9961C3.0287 13.9122 3.78989 12.5906 5.37891 12.0562C5.70608 11.9462 6.0605 12.1222 6.17053 12.4494ZM2.92969 17.0705H2.30469C2.30469 17.4157 2.58451 17.6955 2.92969 17.6955V17.0705Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.5462 3.45406C15.8208 3.34943 14.0351 3.31002 12.2076 5.13753L7.34482 10.0003L10 12.6555L14.8627 7.79271C16.6903 5.9652 16.6508 4.17951 16.5462 3.45406ZM16.7275 2.21727C15.7298 2.07282 13.5058 2.07157 11.3237 4.25365L6.019 9.55834C5.90179 9.67555 5.83594 9.83452 5.83594 10.0003C5.83594 10.166 5.90179 10.325 6.019 10.4422L9.55806 13.9813C9.80214 14.2254 10.1979 14.2254 10.4419 13.9813L15.7466 8.67659C17.9287 6.49452 17.9275 4.27052 17.783 3.27282C17.7465 3.0058 17.6235 2.75803 17.4329 2.5674C17.2422 2.37678 16.9945 2.25382 16.7275 2.21727Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.422 8.49219C14.7672 8.49219 15.047 8.77201 15.047 9.11719V14.1641L15.0469 14.173C15.0423 14.5013 14.9086 14.8145 14.675 15.045L12.1527 17.575C11.9926 17.7349 11.7921 17.8484 11.5725 17.9033C11.353 17.9582 11.1227 17.9524 10.9061 17.8867C10.6896 17.8209 10.495 17.6976 10.343 17.5299C10.1912 17.3623 10.0877 17.1567 10.0435 16.9349C10.0434 16.9347 10.0435 16.9351 10.0435 16.9349L9.38731 13.6619C9.31946 13.3235 9.53882 12.9941 9.87727 12.9263C10.2157 12.8584 10.5451 13.0778 10.6129 13.4162L11.2694 16.6906L13.797 14.1552V9.11719C13.797 8.77201 14.0768 8.49219 14.422 8.49219Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.82722 4.95319L5.83612 4.95312H10.883C11.2282 4.95312 11.508 5.23295 11.508 5.57812C11.508 5.9233 11.2282 6.20312 10.883 6.20312H5.84496L5.83991 6.20828L5.83988 6.20825L3.30957 8.73075L3.31054 8.73094L6.58398 9.38719C6.92242 9.45504 7.14178 9.78441 7.07393 10.1229C7.00608 10.4613 6.67671 10.6807 6.33827 10.6128L3.0658 9.95675C3.06562 9.95671 3.06543 9.95668 3.06524 9.95664C2.84349 9.91244 2.63788 9.80892 2.47031 9.65711C2.3026 9.50516 2.17928 9.31054 2.11351 9.094C2.04775 8.87746 2.042 8.64712 2.09689 8.42757C2.15178 8.20802 2.26525 8.00749 2.42518 7.84738L2.42612 7.84644L2.42612 7.84644L4.95522 5.32514C5.18573 5.09151 5.49894 4.95786 5.82722 4.95319Z"
                  fill="white"
                />
              </svg>
              Get Started
            </Link>
            <div className="additional">
              <p>
                <span>240k+ </span>
                <span>Total Sale</span>
              </p>
              <p>
                <span>100k+</span>
                <span>Auctions</span>
              </p>
              <p>
                <span>240k+ </span>
                <span>Artists</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Trending --> */}
      <div className="section trending">
        <div className="container content-trending">
          <div className="head-block">
            <h2>Trending Collection</h2>
            <p>Checkout our weekly updated trending collection.</p>
          </div>
          <div className="body-block body-row-trending">
            <CollectionCard />
          </div>
        </div>
      </div>
      {/* <!-- Creator --> */}
      <div className="section creator">
        <div className="container content-creator">
          <div className="head-block head-row-creator">
            <div className="title-head">
              <h2>Top creators</h2>
              <p>Checkout Top Rated Creators on the NFT Marketplace</p>
            </div>
            <Link to="./rankings" className="btn btn-view-creator">
              <img src={RocketLaunchLogo} />
              View Rankings
            </Link>
          </div>
          <CreatorCard type="pc" />
          <div className="only-mobile">
            <div className="title-head">
              <h2>Top creators</h2>
              <p>Checkout Top Rated Creators on the NFT Marketplace</p>
            </div>
            <CreatorCard type="mobile " />
            <Link to="./rankings" className="btn btn-view-creator">
              <img src={RocketLaunchLogo} />
              View Rankings
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- Categories --> */}
      <div className="section categories">
        <div className="container content-categories">
          <div className="head-block">
            <h2>Browse Categories</h2>
          </div>
          <div className="body-block body-row-categories">
            <a href="./pages/Marketplace.html" className="categories-card">
              <div className="top-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M7.8125 84.375H35.9375C39.9549 84.375 43.8821 83.1837 47.2225 80.9517C50.5629 78.7198 53.1664 75.5474 54.7038 71.8358C56.2412 68.1241 56.6435 64.04 55.8597 60.0997C55.0759 56.1595 53.1414 52.5402 50.3006 49.6994C47.4598 46.8586 43.8405 44.9241 39.9003 44.1403C35.96 43.3565 31.8759 43.7588 28.1642 45.2962C24.4526 46.8336 21.2802 49.4371 19.0483 52.7775C16.8163 56.1179 15.625 60.0451 15.625 64.0625C15.625 78.125 7.8125 84.375 7.8125 84.375Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M43.9053 45.3906C51.4053 35.2734 70.4678 12.1094 87.8896 12.1094C87.8896 29.5312 64.7256 48.5938 54.6084 56.0938"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M51.9531 35.3906C57.246 38.3777 61.6223 42.754 64.6094 48.0469"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="bottom-card">
                <h3>Art</h3>
              </div>
            </a>
            <a href="./pages/Marketplace.html" className="categories-card">
              <div className="top-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M14.3355 67.5784L23.7887 14.0237C23.8547 13.6195 24.0006 13.2325 24.2178 12.8853C24.4349 12.538 24.719 12.2375 25.0535 12.0011C25.388 11.7648 25.7662 11.5974 26.166 11.5087C26.5659 11.4201 26.9794 11.4119 27.3824 11.4846L48.9449 15.2737C49.7596 15.426 50.482 15.8919 50.9568 16.5713C51.4316 17.2506 51.6209 18.0891 51.484 18.9065L41.9918 72.7737C41.3417 76.4009 39.2977 79.6295 36.2972 81.7685C33.2966 83.9076 29.578 84.7872 25.9371 84.219C18.1637 82.969 12.9684 75.3518 14.3355 67.5784Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M46.21 48.7501L74.6865 38.3985C75.0737 38.2556 75.4853 38.1907 75.8977 38.2077C76.31 38.2247 76.7149 38.3232 77.089 38.4976C77.4631 38.6719 77.7989 38.9186 78.0771 39.2234C78.3553 39.5282 78.5704 39.8851 78.71 40.2735L86.21 60.8204C86.4866 61.5976 86.4447 62.4526 86.0935 63.199C85.7422 63.9454 85.1101 64.5226 84.335 64.8048L32.9287 83.5157"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M85.9375 63.4766V81.25C85.9375 82.0788 85.6083 82.8737 85.0222 83.4597C84.4362 84.0458 83.6413 84.375 82.8125 84.375H28.125"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.125 75C30.7138 75 32.8125 72.9013 32.8125 70.3125C32.8125 67.7237 30.7138 65.625 28.125 65.625C25.5362 65.625 23.4375 67.7237 23.4375 70.3125C23.4375 72.9013 25.5362 75 28.125 75Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="bottom-card">
                <h3>Collectibles</h3>
              </div>
            </a>
            <a href="./pages/Marketplace.html" className="categories-card">
              <div className="top-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M70.3125 78.125C76.3531 78.125 81.25 73.2281 81.25 67.1875C81.25 61.1469 76.3531 56.25 70.3125 56.25C64.2719 56.25 59.375 61.1469 59.375 67.1875C59.375 73.2281 64.2719 78.125 70.3125 78.125Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.3125 90.625C26.3531 90.625 31.25 85.7281 31.25 79.6875C31.25 73.6469 26.3531 68.75 20.3125 68.75C14.2719 68.75 9.375 73.6469 9.375 79.6875C9.375 85.7281 14.2719 90.625 20.3125 90.625Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M81.25 31.25L31.25 43.75"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M31.25 79.6875V25L81.25 12.5V67.1875"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="bottom-card">
                <h3>Music</h3>
              </div>
            </a>
            <a href="./pages/Marketplace.html" className="categories-card">
              <div className="top-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M81.25 81.25H18.75C17.0924 81.25 15.5027 80.5915 14.3306 79.4194C13.1585 78.2473 12.5 76.6576 12.5 75V31.25C12.5 29.5924 13.1585 28.0027 14.3306 26.8306C15.5027 25.6585 17.0924 25 18.75 25H31.25L37.5 15.625H62.5L68.75 25H81.25C82.9076 25 84.4973 25.6585 85.6694 26.8306C86.8415 28.0027 87.5 29.5924 87.5 31.25V75C87.5 76.6576 86.8415 78.2473 85.6694 79.4194C84.4973 80.5915 82.9076 81.25 81.25 81.25Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M50 65.625C57.7665 65.625 64.0625 59.329 64.0625 51.5625C64.0625 43.796 57.7665 37.5 50 37.5C42.2335 37.5 35.9375 43.796 35.9375 51.5625C35.9375 59.329 42.2335 65.625 50 65.625Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="bottom-card">
                <h3>Photography</h3>
              </div>
            </a>
            <a href="./pages/Marketplace.html" className="categories-card">
              <div className="top-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M9.375 23.4375H59.375C62.6902 23.4375 65.8696 24.7545 68.2138 27.0987C70.558 29.4429 71.875 32.6223 71.875 35.9375V73.4375C71.875 74.2663 71.5458 75.0612 70.9597 75.6472C70.3737 76.2333 69.5788 76.5625 68.75 76.5625H18.75C15.4348 76.5625 12.2554 75.2455 9.91117 72.9013C7.56696 70.5571 6.25 67.3777 6.25 64.0625V26.5625C6.25 25.7337 6.57924 24.9388 7.16529 24.3528C7.75134 23.7667 8.5462 23.4375 9.375 23.4375V23.4375Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M71.875 43.75L93.75 31.25V68.75L71.875 56.25"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="bottom-card">
                <h3>Video</h3>
              </div>
            </a>
            <a href="./pages/Marketplace.html" className="categories-card">
              <div className="top-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M84.375 50V68.75"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M75 59.375H93.75"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M32.8125 15.625V31.25"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25 23.4375H40.625"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M65.625 71.875V84.375"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M59.375 78.125H71.875"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M72.8218 14.6987L14.7341 72.7864C13.5137 74.0068 13.5137 75.9854 14.7341 77.2058L22.8134 85.285C24.0338 86.5054 26.0124 86.5054 27.2328 85.285L85.3205 27.1973C86.5409 25.9769 86.5409 23.9983 85.3205 22.7779L77.2413 14.6987C76.0209 13.4783 74.0422 13.4783 72.8218 14.6987Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M56.25 31.25L68.75 43.75"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="bottom-card">
                <h3>Utility</h3>
              </div>
            </a>
            <a href="./pages/Marketplace.html" className="categories-card">
              <div className="top-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M50 87.5C70.7107 87.5 87.5 70.7107 87.5 50C87.5 29.2893 70.7107 12.5 50 12.5C29.2893 12.5 12.5 29.2893 12.5 50C12.5 70.7107 29.2893 87.5 50 87.5Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.4375 23.5176C30.449 30.5474 34.383 40.0732 34.375 50.002C34.383 59.9307 30.449 69.4565 23.4375 76.4863"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M76.5642 23.5176C69.5608 30.5526 65.6289 40.0752 65.6289 50.002C65.6289 59.9287 69.5608 69.4513 76.5642 76.4863"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 50H87.5"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M50 12.5V87.5"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="bottom-card">
                <h3>Sport</h3>
              </div>
            </a>
            <a href="./pages/Marketplace.html" className="categories-card">
              <div className="top-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M50 84.375C68.9848 84.375 84.375 68.9848 84.375 50C84.375 31.0152 68.9848 15.625 50 15.625C31.0152 15.625 15.625 31.0152 15.625 50C15.625 68.9848 31.0152 84.375 50 84.375Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M71.9529 23.5547C82.7732 20.586 90.8982 20.8594 93.3201 25C97.617 32.461 81.7186 49.7266 57.8123 63.5157C33.9061 77.3047 11.0154 82.461 6.6795 75C4.29669 70.8594 8.12481 63.6719 16.0936 55.7813"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="bottom-card">
                <h3>Virtual Worlds</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Discover --> */}
      <div className="section discover">
        <div className="container content-discover">
          <div className="head-block head-row-creator">
            <div className="title-head">
              <h2>Discover More NFTs</h2>
              <p>Explore new trending NFTs</p>
            </div>
            <a href="./pages/Marketplace.html" className="btn btn-view-creator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.83931 6.74556C4.3292 5.25567 6.66714 3.75 10 3.75C13.3329 3.75 15.6708 5.25567 17.1607 6.74556C17.9038 7.4887 18.4397 8.23076 18.7906 8.78809C18.9664 9.06724 19.0966 9.30146 19.184 9.4683C19.2277 9.55176 19.2608 9.61849 19.2835 9.66569C19.2949 9.6893 19.3037 9.70804 19.3099 9.72157L19.3174 9.7379L19.3197 9.74306L19.3206 9.74487L19.3209 9.74558C19.321 9.74588 19.3211 9.74616 18.75 10C19.3211 10.2538 19.321 10.2541 19.3209 10.2544L19.3206 10.2551L19.3197 10.2569L19.3174 10.2621L19.3099 10.2784C19.3037 10.292 19.2949 10.3107 19.2835 10.3343C19.2608 10.3815 19.2277 10.4482 19.184 10.5317C19.0966 10.6985 18.9664 10.9328 18.7906 11.2119C18.4397 11.7692 17.9038 12.5113 17.1607 13.2544C15.6708 14.7443 13.3329 16.25 10 16.25C6.66714 16.25 4.3292 14.7443 2.83931 13.2544C2.09617 12.5113 1.5603 11.7692 1.20939 11.2119C1.03362 10.9328 0.903373 10.6985 0.815984 10.5317C0.772267 10.4482 0.739205 10.3815 0.716476 10.3343C0.705109 10.3107 0.696319 10.292 0.690066 10.2784L0.682582 10.2621L0.680256 10.2569L0.679445 10.2551L0.679127 10.2544C0.678993 10.2541 0.678868 10.2538 1.25 10C0.678868 9.74616 0.678993 9.74588 0.679127 9.74558L0.679445 9.74487L0.680256 9.74306L0.682582 9.7379L0.690066 9.72157C0.696319 9.70804 0.705109 9.6893 0.716476 9.66569C0.739205 9.61849 0.772267 9.55176 0.815984 9.4683C0.903373 9.30146 1.03362 9.06724 1.20939 8.78809C1.5603 8.23076 2.09617 7.4887 2.83931 6.74556ZM1.25 10L0.678868 9.74616C0.607044 9.90777 0.607044 10.0922 0.678868 10.2538L1.25 10ZM1.94882 10C2.02235 10.1377 2.12794 10.3248 2.26718 10.5459C2.58033 11.0433 3.06008 11.7074 3.72319 12.3706C5.0458 13.6932 7.08286 15 10 15C12.9171 15 14.9542 13.6932 16.2768 12.3706C16.9399 11.7074 17.4197 11.0433 17.7328 10.5459C17.8721 10.3248 17.9777 10.1377 18.0512 10C17.9777 9.86227 17.8721 9.67524 17.7328 9.4541C17.4197 8.95674 16.9399 8.29255 16.2768 7.62944C14.9542 6.30683 12.9171 5 10 5C7.08286 5 5.0458 6.30683 3.72319 7.62944C3.06008 8.29255 2.58033 8.95674 2.26718 9.4541C2.12794 9.67524 2.02235 9.86227 1.94882 10ZM18.75 10L19.3211 10.2538C19.393 10.0922 19.393 9.90777 19.3211 9.74616L18.75 10Z"
                  fill="#A259FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5ZM6.25 10C6.25 7.92893 7.92893 6.25 10 6.25C12.0711 6.25 13.75 7.92893 13.75 10C13.75 12.0711 12.0711 13.75 10 13.75C7.92893 13.75 6.25 12.0711 6.25 10Z"
                  fill="#A259FF"
                />
              </svg>
              See All
            </a>
          </div>
          <div className="body-block body-row-discover">
            <a href="./pages/NFTPage.html" className="discover-card">
              <img
                src="./assets/images/home/nft/Distant Galaxy.jpg"
                alt="Image"
              />
              <div className="user">
                <h5>Distant Galaxy</h5>
                <div className="avartar-username">
                  <img
                    src="./assets/images/home/nft/MoonDancer.png"
                    alt="Avartar"
                  />
                  <p>MoonDancer</p>
                </div>
              </div>
              <div className="info-card">
                <p>
                  <span>Price</span>
                  <span>1.63 ETH</span>
                </p>
                <p>
                  <span>Highest Bid</span>
                  <span>0.33 wETH</span>
                </p>
              </div>
            </a>
            <a href="./pages/NFTPage.html" className="discover-card">
              <img
                src="./assets/images/home/categories/Video.jpg"
                alt="Image"
              />
              <div className="user">
                <h5>Distant Galaxy</h5>
                <div className="avartar-username">
                  <img
                    src="./assets/images/home/nft/NebulaKid.png"
                    alt="Avartar"
                  />
                  <p>NebulaKid</p>
                </div>
              </div>
              <div className="info-card">
                <p>
                  <span>Price</span>
                  <span>1.63 ETH</span>
                </p>
                <p>
                  <span>Highest Bid</span>
                  <span>0.33 wETH</span>
                </p>
              </div>
            </a>
            <a href="./pages/NFTPage.html" className="discover-card">
              <img
                src="./assets/images/home/nft/AstroFiction.jpg"
                alt="Image"
              />
              <div className="user">
                <h5>Distant Galaxy</h5>
                <div className="avartar-username">
                  <img src="./assets/images/home/top/Dotgu.png" alt="Avartar" />
                  <p>Spaceone</p>
                </div>
              </div>
              <div className="info-card">
                <p>
                  <span>Price</span>
                  <span>1.63 ETH</span>
                </p>
                <p>
                  <span>Highest Bid</span>
                  <span>0.33 wETH</span>
                </p>
              </div>
            </a>
          </div>
          <div className="only-mobile">
            <div className="title-head">
              <h2>Discover More NFTs</h2>
              <p>Explore new trending NFTs</p>
            </div>
            <a href="./pages/NFTPage.html" className="discover-card">
              <img
                src="./assets/images/home/nft/Distant Galaxy.jpg"
                alt="Image"
              />
              <div className="user">
                <h5>Distant Galaxy</h5>
                <div className="avartar-username">
                  <img
                    src="./assets/images/home/nft/MoonDancer.png"
                    alt="Avartar"
                  />
                  <p>MoonDancer</p>
                </div>
              </div>
              <div className="info-card">
                <p>
                  <span>Price</span>
                  <span>1.63 ETH</span>
                </p>
                <p>
                  <span>Highest Bid</span>
                  <span>0.33 wETH</span>
                </p>
              </div>
            </a>
            <a href="./pages/NFTPage.html" className="discover-card">
              <img
                src="./assets/images/home/categories/Video.jpg"
                alt="Image"
              />
              <div className="user">
                <h5>Distant Galaxy</h5>
                <div className="avartar-username">
                  <img
                    src="./assets/images/home/nft/NebulaKid.png"
                    alt="Avartar"
                  />
                  <p>NebulaKid</p>
                </div>
              </div>
              <div className="info-card">
                <p>
                  <span>Price</span>
                  <span>1.63 ETH</span>
                </p>
                <p>
                  <span>Highest Bid</span>
                  <span>0.33 wETH</span>
                </p>
              </div>
            </a>
            <a href="./pages/NFTPage.html" className="discover-card">
              <img
                src="./assets/images/home/nft/AstroFiction.jpg"
                alt="Image"
              />
              <div className="user">
                <h5>Distant Galaxy</h5>
                <div className="avartar-username">
                  <img src="./assets/images/home/top/Dotgu.png" alt="Avartar" />
                  <p>Spaceone</p>
                </div>
              </div>
              <div className="info-card">
                <p>
                  <span>Price</span>
                  <span>1.63 ETH</span>
                </p>
                <p>
                  <span>Highest Bid</span>
                  <span>0.33 wETH</span>
                </p>
              </div>
            </a>
            <a href="./pages/Marketplace.html" className="btn btn-view-creator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.83931 6.74556C4.3292 5.25567 6.66714 3.75 10 3.75C13.3329 3.75 15.6708 5.25567 17.1607 6.74556C17.9038 7.4887 18.4397 8.23076 18.7906 8.78809C18.9664 9.06724 19.0966 9.30146 19.184 9.4683C19.2277 9.55176 19.2608 9.61849 19.2835 9.66569C19.2949 9.6893 19.3037 9.70804 19.3099 9.72157L19.3174 9.7379L19.3197 9.74306L19.3206 9.74487L19.3209 9.74558C19.321 9.74588 19.3211 9.74616 18.75 10C19.3211 10.2538 19.321 10.2541 19.3209 10.2544L19.3206 10.2551L19.3197 10.2569L19.3174 10.2621L19.3099 10.2784C19.3037 10.292 19.2949 10.3107 19.2835 10.3343C19.2608 10.3815 19.2277 10.4482 19.184 10.5317C19.0966 10.6985 18.9664 10.9328 18.7906 11.2119C18.4397 11.7692 17.9038 12.5113 17.1607 13.2544C15.6708 14.7443 13.3329 16.25 10 16.25C6.66714 16.25 4.3292 14.7443 2.83931 13.2544C2.09617 12.5113 1.5603 11.7692 1.20939 11.2119C1.03362 10.9328 0.903373 10.6985 0.815984 10.5317C0.772267 10.4482 0.739205 10.3815 0.716476 10.3343C0.705109 10.3107 0.696319 10.292 0.690066 10.2784L0.682582 10.2621L0.680256 10.2569L0.679445 10.2551L0.679127 10.2544C0.678993 10.2541 0.678868 10.2538 1.25 10C0.678868 9.74616 0.678993 9.74588 0.679127 9.74558L0.679445 9.74487L0.680256 9.74306L0.682582 9.7379L0.690066 9.72157C0.696319 9.70804 0.705109 9.6893 0.716476 9.66569C0.739205 9.61849 0.772267 9.55176 0.815984 9.4683C0.903373 9.30146 1.03362 9.06724 1.20939 8.78809C1.5603 8.23076 2.09617 7.4887 2.83931 6.74556ZM1.25 10L0.678868 9.74616C0.607044 9.90777 0.607044 10.0922 0.678868 10.2538L1.25 10ZM1.94882 10C2.02235 10.1377 2.12794 10.3248 2.26718 10.5459C2.58033 11.0433 3.06008 11.7074 3.72319 12.3706C5.0458 13.6932 7.08286 15 10 15C12.9171 15 14.9542 13.6932 16.2768 12.3706C16.9399 11.7074 17.4197 11.0433 17.7328 10.5459C17.8721 10.3248 17.9777 10.1377 18.0512 10C17.9777 9.86227 17.8721 9.67524 17.7328 9.4541C17.4197 8.95674 16.9399 8.29255 16.2768 7.62944C14.9542 6.30683 12.9171 5 10 5C7.08286 5 5.0458 6.30683 3.72319 7.62944C3.06008 8.29255 2.58033 8.95674 2.26718 9.4541C2.12794 9.67524 2.02235 9.86227 1.94882 10ZM18.75 10L19.3211 10.2538C19.393 10.0922 19.393 9.90777 19.3211 9.74616L18.75 10Z"
                  fill="#A259FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5ZM6.25 10C6.25 7.92893 7.92893 6.25 10 6.25C12.0711 6.25 13.75 7.92893 13.75 10C13.75 12.0711 12.0711 13.75 10 13.75C7.92893 13.75 6.25 12.0711 6.25 10Z"
                  fill="#A259FF"
                />
              </svg>
              See All
            </a>
          </div>
        </div>
      </div>
      {/* <!-- NFT --> */}
      <div className="section nft">
        <div className="container content-nft">
          <div className="head-block head-column-nft">
            <div className="title-head">
              <h2>Magic Mashrooms</h2>
            </div>
            <a href="./pages/Marketplace.html" className="btn btn-view-nft">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.83931 6.74556C4.3292 5.25567 6.66714 3.75 10 3.75C13.3329 3.75 15.6708 5.25567 17.1607 6.74556C17.9038 7.4887 18.4397 8.23076 18.7906 8.78809C18.9664 9.06724 19.0966 9.30146 19.184 9.4683C19.2277 9.55176 19.2608 9.61849 19.2835 9.66569C19.2949 9.6893 19.3037 9.70804 19.3099 9.72157L19.3174 9.7379L19.3197 9.74306L19.3206 9.74487L19.3209 9.74558C19.321 9.74588 19.3211 9.74616 18.75 10C19.3211 10.2538 19.321 10.2541 19.3209 10.2544L19.3206 10.2551L19.3197 10.2569L19.3174 10.2621L19.3099 10.2784C19.3037 10.292 19.2949 10.3107 19.2835 10.3343C19.2608 10.3815 19.2277 10.4482 19.184 10.5317C19.0966 10.6985 18.9664 10.9328 18.7906 11.2119C18.4397 11.7692 17.9038 12.5113 17.1607 13.2544C15.6708 14.7443 13.3329 16.25 10 16.25C6.66714 16.25 4.3292 14.7443 2.83931 13.2544C2.09617 12.5113 1.5603 11.7692 1.20939 11.2119C1.03362 10.9328 0.903373 10.6985 0.815984 10.5317C0.772267 10.4482 0.739205 10.3815 0.716476 10.3343C0.705109 10.3107 0.696319 10.292 0.690066 10.2784L0.682582 10.2621L0.680256 10.2569L0.679445 10.2551L0.679127 10.2544C0.678993 10.2541 0.678868 10.2538 1.25 10C0.678868 9.74616 0.678993 9.74588 0.679127 9.74558L0.679445 9.74487L0.680256 9.74306L0.682582 9.7379L0.690066 9.72157C0.696319 9.70804 0.705109 9.6893 0.716476 9.66569C0.739205 9.61849 0.772267 9.55176 0.815984 9.4683C0.903373 9.30146 1.03362 9.06724 1.20939 8.78809C1.5603 8.23076 2.09617 7.4887 2.83931 6.74556ZM1.25 10L0.678868 9.74616C0.607044 9.90777 0.607044 10.0922 0.678868 10.2538L1.25 10ZM1.94882 10C2.02235 10.1377 2.12794 10.3248 2.26718 10.5459C2.58033 11.0433 3.06008 11.7074 3.72319 12.3706C5.0458 13.6932 7.08286 15 10 15C12.9171 15 14.9542 13.6932 16.2768 12.3706C16.9399 11.7074 17.4197 11.0433 17.7328 10.5459C17.8721 10.3248 17.9777 10.1377 18.0512 10C17.9777 9.86227 17.8721 9.67524 17.7328 9.4541C17.4197 8.95674 16.9399 8.29255 16.2768 7.62944C14.9542 6.30683 12.9171 5 10 5C7.08286 5 5.0458 6.30683 3.72319 7.62944C3.06008 8.29255 2.58033 8.95674 2.26718 9.4541C2.12794 9.67524 2.02235 9.86227 1.94882 10ZM18.75 10L19.3211 10.2538C19.393 10.0922 19.393 9.90777 19.3211 9.74616L18.75 10Z"
                  fill="#A259FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5ZM6.25 10C6.25 7.92893 7.92893 6.25 10 6.25C12.0711 6.25 13.75 7.92893 13.75 10C13.75 12.0711 12.0711 13.75 10 13.75C7.92893 13.75 6.25 12.0711 6.25 10Z"
                  fill="#A259FF"
                />
              </svg>
              See All
            </a>
          </div>
          <div className="body-block body-column-nft">
            <div className="date-time">
              <caption>Auction ends in:</caption>
              <div className="time">
                <p>
                  <span className="number-time">59</span>
                  <span>Hours</span>
                </p>
                <span className="number-time">:</span>
                <p>
                  <span className="number-time">59</span>
                  <span>Minutes</span>
                </p>
                <span className="number-time">:</span>
                <p>
                  <span className="number-time">59</span>
                  <span>Seconds</span>
                </p>
              </div>
            </div>
          </div>
          <div className="only-mobile">
            <div className="title-head">
              <h2>Magic Mashrooms</h2>
            </div>
            <div className="date-time">
              <caption>Auction ends in:</caption>
              <div className="time">
                <p>
                  <span className="number-time">59</span>
                  <span>Hours</span>
                </p>
                <span className="number-time">:</span>
                <p>
                  <span className="number-time">59</span>
                  <span>Minutes</span>
                </p>
                <span className="number-time">:</span>
                <p>
                  <span className="number-time">59</span>
                  <span>Seconds</span>
                </p>
              </div>
            </div>
            <a href="./pages/Marketplace.html" className="btn btn-view-nft">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.83931 6.74556C4.3292 5.25567 6.66714 3.75 10 3.75C13.3329 3.75 15.6708 5.25567 17.1607 6.74556C17.9038 7.4887 18.4397 8.23076 18.7906 8.78809C18.9664 9.06724 19.0966 9.30146 19.184 9.4683C19.2277 9.55176 19.2608 9.61849 19.2835 9.66569C19.2949 9.6893 19.3037 9.70804 19.3099 9.72157L19.3174 9.7379L19.3197 9.74306L19.3206 9.74487L19.3209 9.74558C19.321 9.74588 19.3211 9.74616 18.75 10C19.3211 10.2538 19.321 10.2541 19.3209 10.2544L19.3206 10.2551L19.3197 10.2569L19.3174 10.2621L19.3099 10.2784C19.3037 10.292 19.2949 10.3107 19.2835 10.3343C19.2608 10.3815 19.2277 10.4482 19.184 10.5317C19.0966 10.6985 18.9664 10.9328 18.7906 11.2119C18.4397 11.7692 17.9038 12.5113 17.1607 13.2544C15.6708 14.7443 13.3329 16.25 10 16.25C6.66714 16.25 4.3292 14.7443 2.83931 13.2544C2.09617 12.5113 1.5603 11.7692 1.20939 11.2119C1.03362 10.9328 0.903373 10.6985 0.815984 10.5317C0.772267 10.4482 0.739205 10.3815 0.716476 10.3343C0.705109 10.3107 0.696319 10.292 0.690066 10.2784L0.682582 10.2621L0.680256 10.2569L0.679445 10.2551L0.679127 10.2544C0.678993 10.2541 0.678868 10.2538 1.25 10C0.678868 9.74616 0.678993 9.74588 0.679127 9.74558L0.679445 9.74487L0.680256 9.74306L0.682582 9.7379L0.690066 9.72157C0.696319 9.70804 0.705109 9.6893 0.716476 9.66569C0.739205 9.61849 0.772267 9.55176 0.815984 9.4683C0.903373 9.30146 1.03362 9.06724 1.20939 8.78809C1.5603 8.23076 2.09617 7.4887 2.83931 6.74556ZM1.25 10L0.678868 9.74616C0.607044 9.90777 0.607044 10.0922 0.678868 10.2538L1.25 10ZM1.94882 10C2.02235 10.1377 2.12794 10.3248 2.26718 10.5459C2.58033 11.0433 3.06008 11.7074 3.72319 12.3706C5.0458 13.6932 7.08286 15 10 15C12.9171 15 14.9542 13.6932 16.2768 12.3706C16.9399 11.7074 17.4197 11.0433 17.7328 10.5459C17.8721 10.3248 17.9777 10.1377 18.0512 10C17.9777 9.86227 17.8721 9.67524 17.7328 9.4541C17.4197 8.95674 16.9399 8.29255 16.2768 7.62944C14.9542 6.30683 12.9171 5 10 5C7.08286 5 5.0458 6.30683 3.72319 7.62944C3.06008 8.29255 2.58033 8.95674 2.26718 9.4541C2.12794 9.67524 2.02235 9.86227 1.94882 10ZM18.75 10L19.3211 10.2538C19.393 10.0922 19.393 9.90777 19.3211 9.74616L18.75 10Z"
                  fill="#A259FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5ZM6.25 10C6.25 7.92893 7.92893 6.25 10 6.25C12.0711 6.25 13.75 7.92893 13.75 10C13.75 12.0711 12.0711 13.75 10 13.75C7.92893 13.75 6.25 12.0711 6.25 10Z"
                  fill="#A259FF"
                />
              </svg>
              See All
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Works --> */}
      <div className="section works">
        <div className="container content-works">
          <div className="head-block">
            <h2>Trending Collection</h2>
            <p>Checkout our weekly updated trending collection.</p>
          </div>
          <div className="body-block body-row-works">
            <div className="works-card">
              <div className="image-card">
                <img src="./assets/images/home/work/wallet.png" alt="Icon" />
              </div>
              <div className="text-card">
                <h4>Setup Your wallet</h4>
                <p>
                  Set up your wallet of choice. Connect it to the Animarket by
                  clicking the wallet icon in the top right corner.
                </p>
              </div>
            </div>
            <div className="works-card">
              <div className="image-card">
                <img
                  src="./assets/images/home/work/Collection.png"
                  alt="Icon"
                />
              </div>
              <div className="text-card">
                <h4>Create Collection</h4>
                <p>
                  Upload your work and setup your collection. Add a description,
                  social links and floor price.
                </p>
              </div>
            </div>
            <div className="works-card">
              <div className="image-card">
                <img src="./assets/images/home/work/Earning.png" alt="Icon" />
              </div>
              <div className="text-card">
                <h4>Start Earning</h4>
                <p>
                  Choose between auctions and fixed-price listings. Start
                  earning by selling your NFTs or trading others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Widget --> */}
      <div className="section widget">
        <div className="container content-widget">
          <div className="head-block head-column-widget">
            <div className="title-head">
              <h2>Join our weekly digest</h2>
              <p>Get exclusive promotions & updates straight to your inbox.</p>
            </div>

            <div className="list-btn-footer list-btn-widget">
              <input
                type="email"
                className="btn btn-view-input"
                placeholder="Enter your email here"
              />
              <a href="#" className="btn btn-view-footer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.875 4.375C1.875 4.02982 2.15482 3.75 2.5 3.75H17.5C17.8452 3.75 18.125 4.02982 18.125 4.375V15C18.125 15.3315 17.9933 15.6495 17.7589 15.8839C17.5245 16.1183 17.2065 16.25 16.875 16.25H3.125C2.79348 16.25 2.47554 16.1183 2.24112 15.8839C2.0067 15.6495 1.875 15.3315 1.875 15V4.375ZM3.125 5V15H16.875V5H3.125Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.03928 3.95268C2.27253 3.69823 2.66788 3.68104 2.92233 3.91428L10 10.4021L17.0777 3.91428C17.3321 3.68104 17.7275 3.69823 17.9607 3.95268C18.194 4.20713 18.1768 4.60248 17.9223 4.83573L10.4223 11.7107C10.1834 11.9298 9.81663 11.9298 9.57768 11.7107L2.07768 4.83573C1.82323 4.60248 1.80604 4.20713 2.03928 3.95268Z"
                    fill="white"
                  />
                </svg>
                Subscribe
              </a>
            </div>
          </div>
          <div className="body-block body-column-widget">
            <img
              src="./assets/images/home/widget/PhotoTablet.png"
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
