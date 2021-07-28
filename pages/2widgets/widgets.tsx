import Layout from "../../component/Layout";
import styles from "./styles.module.css";
import Propswidgetkiri from "./propswidgetkiri";
import Propswidgetkanan from "./propswidgetkanan";
// import "./script.js";

function Widgets() {
  return (
    <>
      <Layout>
        <div className={styles.content}>
          <div className={styles.contentkiri}>
            <h5>Avaiable Widgets</h5>
            <p>
              To activate a widget drag it a sidebar or click on it . To
              deactivate a widget adn delete its settings. drag it back
            </p>
            <Propswidgetkiri
              nama="Akismet Widget"
              paragraf="display the number of spam comments akismet has cought"
            />
            <Propswidgetkanan
              nama="Achives"
              paragraf="A monthy archive of yout site's 
              post posts"
            />
            <Propswidgetkiri
              nama="Audio"
              paragraf="display and audio players"
            />
            <Propswidgetkanan
              nama="Calender"
              paragraf="A Calender of your site's posts"
            />
            <Propswidgetkiri
              nama="Categories"
              paragraf="A list or dropdown of categories"
            />
            <Propswidgetkanan
              nama="Custom HTML"
              paragraf="Arbitary HTML code"
            />
            <Propswidgetkiri
              nama="Gallery"
              paragraf="display and image gallery"
            />
            <Propswidgetkanan nama="Image" paragraf="display an Image" />
            <Propswidgetkiri
              nama="Meta"
              paragraf="Login , RSS , dan WordPress org linksss"
            />
            <Propswidgetkanan
              nama="Navigasi Menu"
              paragraf="Add a navigation manu to yyour sidebar"
            />
            <Propswidgetkiri
              nama="Pages"
              paragraf="A lsit of your site's Pages"
            />
            <Propswidgetkanan
              nama="Resent Comments"
              paragraf="Your site most resent comments"
            />
            <Propswidgetkiri
              nama="Resent Post"
              paragraf="Your site's most resent Post"
            />
            <Propswidgetkanan
              nama="RSS"
              paragraf="Entries from any RSS or atom feed"
            />
          </div>
          <div className={styles.contenttengah}>
            <h5>Footer A</h5>
            <p>
              Widgets in this area will be shown in the left column in the
              footer
            </p>
            <button>Video</button>
            <button>Simple Social Icons Follow me</button>
          </div>
          <div className={styles.contentkanan}>
            <h5>Footer B</h5>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Widgets;
