import React, { useState, useEffect } from "react";
import "./Definition.css";
import "./ContentAssessment.css";
import { useTranslation } from "react-i18next";
import data from "../../../data";

function ContentAssessment() {
  const { t } = useTranslation();
  return (
    <>
      <div className="tkdn-container-definition">
        <div className="tkdn-section-header">
          <div className="border-title-vpti" />
          <h1 className="tkdn-section-title">
            {t("content_assessment_title")}
          </h1>
        </div>
        <div className="content-assessment-container">
          {Array.from(data.content_assessment_list, (card, i) => {
            return (
              <div className="card-tkdn">
                <div className="card-text-tkdn">
                  <h2 className="tkdn-subtitle">
                    {t(`content_assessment_list.${i}`)}
                  </h2>
                </div>
                <div className="card-img-tkdn"></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ContentAssessment;
