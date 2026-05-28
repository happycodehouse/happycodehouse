import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom"; // Link 빼고 useNavigate 추가
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.min.css";

import ContentRenderer from "../../components/feed/ContentRenderer";
import { feedData } from "../../data/feed";
import { formatDateFull } from "../../utils/formatDate";
import style from "./view.module.scss";

UIkit.use(Icons);

const View = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = feedData.find(item => item.id === id);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
      </Helmet>
      <div className="container">
        <div className={style.viewWrapper}>
          <div className={style.viewNav}>
            <button onClick={() => navigate(-1)}>/Feed</button>
          </div>
          <div className={style.viewBody}>
            <div className={style.viewMeta}>
              <h1>{post.title}</h1>
              <div>
                <span>{formatDateFull(post.date)}</span>
                <span>{post.category}</span>
              </div>
            </div>
            <div className={style.viewContent}>
              {post.content && <ContentRenderer content={post.content}/>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;