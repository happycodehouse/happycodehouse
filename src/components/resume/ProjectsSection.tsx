import React from "react";
import BubbleBox from "./BubbleBox";
import { projectsData } from "../../data/resume";
import style from "../../pages/resume/resume.module.scss";

interface ProjectsSectionProps {
  isKorean: boolean;
}

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, className }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    {...(className && { className })}
  >
    {children}
  </a>
);

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isKorean }) => {
  const renderDetailItem = (detail: any) => {
    if (detail.video) {
      return <BubbleBox video={detail.video} text={detail.text} />;
    }

    if (detail.url) {
      const isMultipleUrls = Array.isArray(detail.url) && detail.url.length > 1;

      if (isMultipleUrls) {
        return <BubbleBox urls={detail.url} text={detail.text} />;
      }

      const singleUrl = Array.isArray(detail.url) ? detail.url[0] : detail.url;
      return (
        <ExternalLink href={singleUrl}>
          {detail.text}
        </ExternalLink>
      );
    }

    return detail.text;
  };

  return (
    <>
      {projectsData.map((company, index) => (
        <div key={index} className={style.gridOneThree}>
          <div className={style.teamArea}>
            {company.company.url ? (
              <ExternalLink href={company.company.url}>
                {company.company.name}
              </ExternalLink>
            ) : (
              <span>{company.company.name}</span>
            )}

            <ul>
              <li>{company.company.team}</li>
              <li>{company.company.period}</li>
            </ul>
          </div>

          <div className={style.descArea}>
            <div>
              <p className={style.brief}>
                {isKorean ? company.brief.kr : company.brief.en}
              </p>
            </div>

            {company.projects.map((project, projectIndex) => (
              <div key={projectIndex} className={style.gridOneTwo}>
                <dl>
                  <dt>
                    {project.title.url ? (
                      <ExternalLink href={isKorean ? project.title.url.kr : project.title.url.en}>
                        {isKorean ? project.title.kr : project.title.en}
                      </ExternalLink>
                    ) : (
                      isKorean ? project.title.kr : project.title.en
                    )}
                  </dt>
                  <dd>
                    {project.type === "maintenance"
                      ? "Ongoing Maintenance"
                      : Array.isArray(project.period)
                        ? project.period.map((p, i) => (
                          <React.Fragment key={i}>
                            {p}{i < project.period!.length - 1 && <br/>}
                          </React.Fragment>
                        ))
                        : project.period
                    }
                  </dd>
                </dl>

                <div>
                  <ul>
                    {(isKorean ? project.details.kr : project.details.en).map((detail, detailIndex) => (
                      <li key={detailIndex}>
                        {renderDetailItem(detail)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectsSection;