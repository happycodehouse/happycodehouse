import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import style from './view.module.scss';
import { feedData } from '../../data/feed';
import { formatDateFull } from "../../utils/formatDate";

import 'uikit/dist/css/uikit.min.css';

UIkit.use(Icons);

const View = () => {
  const {id} = useParams();
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
            <Link to="/feed">/Feed</Link>
          </div>
          <div className={style.viewBody}>
            <div className={style.viewMeta}>
              <h1>{post.title}</h1>
              <div>
                <span>{post.category}</span>
                <span>{formatDateFull(post.date)}</span>
              </div>
            </div>
            <div className={style.viewContent}>
              {post.content}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default View;