import { useEffect } from "react";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

import style from "./home.module.scss";

import bearHug from "../../assets/images/main/bear-hug.jpg";
import bearIce from "../../assets/images/main/bear-ice-cream.jpg";
import bearThinking from "../../assets/images/main/bear-thinking.jpg";
import BearAnimation from "../../components/home/BearAnimation";
import GridItem from "../../components/home/GridItem";
import { useResponsive } from "../../hooks/useResponsive";

UIkit.use(Icons);

type GridItemData =
  | { id: string; type: "animation" }
  | { id: string; type: "image"; image: string; title: string; subtitle: string; year: string }
  | { id: string; type: "link"; linkTo: string; title: string };

const Home = () => {
  const { isDesktop } = useResponsive();

  const baseGridItems: (GridItemData | null)[] = [
    null,
    null,
    {
      id: "animation-bear",
      type: "animation"
    },
    {
      id: "image-hug",
      type: "image",
      image: bearHug,
      title: "포옹",
      subtitle: "Hug",
      year: "2018"
    },
    null,
    {
      id: "link-feed",
      type: "link",
      linkTo: "/feed",
      title: "/Feed"
    },
    {
      id: "link-resume",
      type: "link",
      linkTo: "/resume",
      title: "/Resume"
    },
    {
      id: "image-thinking",
      type: "image",
      image: bearThinking,
      title: "생각하는 곰",
      subtitle: "Thinking Bear",
      year: "2018"
    },
    null,
    {
      id: "image-ice",
      type: "image",
      image: bearIce,
      title: "한숨 돌리기",
      subtitle: "Sweet Escape",
      year: "2018"
    },
    null,
    null,
    null,
    null,
    null,
    null,
  ];

  const getGridItems = () => {
    if (isDesktop) {
      return baseGridItems;
    } else {
      const filtered = baseGridItems.filter(
        (item): item is NonNullable<typeof item> => item !== null
      );
      const animations = filtered.filter(item => item.type === "animation");
      const links = filtered.filter(item => item.type === "link");
      const images = filtered.filter(item => item.type === "image");

      return [...links, ...animations, ...images];
    }
  };

  const gridItems = getGridItems();

  useEffect(() => {
    // DOM이 완전히 렌더링된 후 lightbox 재초기화
    const timer = setTimeout(() => {
      const lightboxElements = document.querySelectorAll("[data-uk-lightbox]");
      lightboxElements.forEach(el => {
        UIkit.lightbox(el);
      });
    }, 100);

    // cleanup function
    return () => clearTimeout(timer);
  }, [gridItems]);

  return (
    <div className="container">
      <div className={style.gridWrapper}>
        {gridItems.map((item, index) => {
          if (!item) return <div key={`empty-${index}`}></div>;

          if (item.type === "animation") {
            return <BearAnimation key={item.id}/>;
          }

          return <GridItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Home;