import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Document = () => {
  return (
    <div id="document_wrap">
      <div className="document_head">
        <span>확인서류</span>
      </div>
      <div className="document_desc">
        <div className="document_title">
          <div className="document_label">
            <span>공통</span>
          </div>
          <span className="title_desc">
            내일배움카드 훈련서약서 및 훈련생 유의사항
          </span>
          <IoIosArrowDown />
        </div>
        <div className="document_deatail">
          <div className="detail_desc">첨부파일 확인후 서명 부탁드립니다.</div>
          <div className="detail_file">
            <span>첨부파일 : </span>
            <span>개인정보_수집이용_동의서.pdf</span>
          </div>
        </div>
      </div>

      <div className="document_desc">
        <div className="document_title">
          <div className="document_label">
            <span>공통</span>
          </div>
          <span className="title_desc">개인정보 수집.이용 동의서(안)</span>
          <IoIosArrowUp />
        </div>
        <div className="document_deatail">
          <div className="detail_desc">첨부파일 확인후 서명 부탁드립니다.</div>
          <div className="detail_file">
            <span>첨부파일 : </span>
            <span>개인정보_수집이용_동의서.pdf</span>
          </div>
        </div>
      </div>

      <div className="document_desc">
        <div className="document_title">
          <div className="document_label">
            <span>개별</span>
          </div>
          <span className="title_desc">240318_웹 성취도 평가지침서</span>
          <IoIosArrowDown />
        </div>
        <div className="document_deatail">
          <div className="detail_desc">첨부파일 확인후 서명 부탁드립니다.</div>
          <div className="detail_file">
            <span>첨부파일 : </span>
            <span>개인정보_수집이용_동의서.pdf</span>
          </div>
        </div>
      </div>

      <div className="document_desc">
        <div className="document_title">
          <div className="document_label">
            <span>개별</span>
          </div>
          <span className="title_desc">240318_웹 교재지급대장</span>
          <IoIosArrowDown />
        </div>
        <div className="document_deatail">
          <div className="detail_desc">첨부파일 확인후 서명 부탁드립니다.</div>
          <div className="detail_file">
            <span>첨부파일 : </span>
            <span>개인정보_수집이용_동의서.pdf</span>
          </div>
        </div>
      </div>

      <div className="document_desc">
        <div className="document_title">
          <div className="document_label">
            <span>개별</span>
          </div>
          <span className="title_desc">240318_웹 교재지급대장</span>
          <IoIosArrowDown />
        </div>
        <div className="document_deatail">
          <div className="detail_desc">첨부파일 확인후 서명 부탁드립니다.</div>
          <div className="detail_file">
            <span>첨부파일 : </span>
            <span>개인정보_수집이용_동의서.pdf</span>
          </div>
        </div>
      </div>

      <div className="document_desc">
        <div className="document_title">
          <div className="document_label">
            <span>개별</span>
          </div>
          <span className="title_desc">240318_웹 교재지급대장</span>
          <IoIosArrowDown />
        </div>
        <div className="document_deatail">
          <div className="detail_desc">첨부파일 확인후 서명 부탁드립니다.</div>
          <div className="detail_file">
            <span>첨부파일 : </span>
            <span>개인정보_수집이용_동의서.pdf</span>
          </div>
        </div>
      </div>

      <div className="document_more">
        <span>더보기</span>
      </div>
    </div>
  );
};

export default Document;
