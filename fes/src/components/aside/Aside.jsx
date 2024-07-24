import React from "react";
import { PiPencilSimpleLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

const aside = () => {
  return (
    <div id="aside">
      <div className="aside__wrap">
        <div className="aside__top">
          <div className="profile">
            <img src="" alt="" />
            <div className="profile_edit">
              <div className="edit_svg">
                <PiPencilSimpleLight />
              </div>
            </div>
          </div>
          <div className="profile_info">
            <span>성명 : </span>
            <span> 김춘식</span>
          </div>
          <div className="profile_info">
            <span>교육과정 : </span>
            <span> (스마트웹&콘텐츠개발)[B.L]웹...</span>
          </div>
          <div className="profile_info">
            <span>교육타입 : </span>
            <span> 국시</span>
          </div>
          <div className="profile_info">
            <span>교육기간 : </span>
            <span> 2024.03.18 - 2024.09.02</span>
          </div>
        </div>
        <div className="aside__line"></div>
        <div className="aside__bottom">
          <ul>
            <li>
              <a href="#">확인서류</a>
            </li>
            <li>
              <a href="#">신상기록부</a>
            </li>
            <li>
              <a href="#">취업지원카드</a>
            </li>
            <li>
              <a href="#">
                학습안내카드 <IoIosArrowDown />
              </a>
              <ul>
                <li>
                  <a href="#">학습안내서 / 교수계획서</a>
                </li>
                <li>
                  <a href="#">시간표</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                평가페이지 <IoIosArrowDown />
              </a>
              <ul>
                <li>
                  <a href="#">자가진단평가</a>
                </li>
                <li>
                  <a href="#">평가관리</a>
                </li>
                <li>
                  <a href="#">설문관리</a>
                </li>
                <li>
                  <a href="#">사전평가</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">건의함</a>
            </li>
            <li>
              <a href="#">게시판</a>
            </li>
            <li>
              <a href="#">훈련장려금 수당신청</a>
            </li>
            <li>
              <a href="#">성적표</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default aside;
