import React from "react";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { PiArrowSquareOutBold } from "react-icons/pi";
import style from "./feed.module.scss";
import FilterButtonGroup from "../../components/common/FilterButtonGroup";
import { formatDate, getYear } from "../../utils/formatDate";
import { feedData } from "../../data/feed";

interface FeedItem {
  id: string | number;
  category: string;
  date: string;
  title: string;
  externalUrl?: string;
}

interface ButtonData {
  key: string;
  value: string;
  label: string;
}

type FilterOption = "LAB" | "DEV" | "NOTE";
type SelectedFilter = "ALL" | FilterOption;

const Feed: React.FC = () => {
  const FILTER_OPTIONS: FilterOption[] = ["LAB", "DEV", "NOTE"];
  const [selectedFilter, setSelectedFilter] = useState<SelectedFilter>("ALL");

  const handleFilterClick = useCallback((filter: SelectedFilter) => {
    setSelectedFilter(filter);
  }, []);

  const filteredData = selectedFilter === "ALL"
    ? feedData
    : feedData.filter((item: FeedItem) => item.category === selectedFilter);

  const groupedByYear = filteredData.reduce<Record<string, FeedItem[]>>((acc, item) => {
    const year = getYear(item.date);
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));

  const buttonData: ButtonData[] = [
    {
      key: "all",
      value: "ALL",
      label: selectedFilter === "ALL" ? "ALL" : "CLEAR FILTER"
    },
    ...FILTER_OPTIONS.map((filter: FilterOption) => ({
      key: filter.toLowerCase(),
      value: filter,
      label: filter
    }))
  ];

  if (!feedData?.length) {
    return <div className="container">No feed data available</div>;
  }

  const noResults = filteredData.length === 0;

  return (
    <div className="container">
      <div className={style.feedWrapper}>
        <div className="grid-box">
          <div className={`${style.gridBoxLeft} grid-box-left`}>
            <FilterButtonGroup<string>
              buttons={buttonData}
              selectedValue={selectedFilter}
              onButtonClick={handleFilterClick}
            />
          </div>
          <div className="grid-box-right">
            <div className={style.feedArea}>
              {noResults ? (
                <div className={style.noResults}>
                  No posts found for the selected filter.
                </div>
              ) : (
                <div className={style.feedList}>
                  {sortedYears.map((year) => (
                    <div key={year} className={style.yearGroup}>
                      <span className={style.yearLabel}>{year}</span>
                      <ul>
                        {groupedByYear[year].map((item: FeedItem) => (
                          <li key={item.id}>
                            {item.externalUrl ? (
                              <a href={item.externalUrl} target="_blank" rel="noopener noreferrer">
                                <span className={style.date}>{formatDate(item.date)}</span>
                                <span className={style.title}>{item.title}<PiArrowSquareOutBold/></span>
                              </a>
                            ) : (
                              <Link to={`/feed/${item.id}`}>
                                <span className={style.date}>{formatDate(item.date)}</span>
                                <span className={style.title}>{item.title}</span>
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;